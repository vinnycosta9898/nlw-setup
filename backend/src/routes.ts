import dayjs from 'dayjs';
import { FastifyInstance} from 'fastify'
import { z } from 'zod';
import { prisma } from "./lib/prisma"

export async function appRoutes(app : FastifyInstance){
    app.post("/habits", async (request) => {
        const createHabityBody = z.object({
            title: z.string(),
            weekDays: z.array(
                z.number().min(0).max(6)
            )
        })
        
        const { title, weekDays } = createHabityBody.parse(request.body)

        const today = dayjs().startOf("day").toDate() // Zera as horas 

        await prisma.habit.create({
            data: {
                title,
                created_at: today,
                weekDays: {
                   create: weekDays.map(weekDay => {
                        return{
                            week_day: weekDay
                        }
                   }) 
                }
            }
        })
    })

    app.get("/day", async (request) => {
        const getDayParams = z.object({
            date: z.coerce.date()
        })

        const { date } = getDayParams.parse(request.query)

        const parsedDate = dayjs(date).startOf("day")
        
        // Retorna o dia da semana de uma Data
        const weekDay = parsedDate.get("day") 

        //Todos os hábitos possíveis
        //hábitos que ja foram completados
        // lte menor ou igual
        const possibleHabits = await prisma.habit.findMany({
            where:{
                created_at:{
                    lte: date
                },
                weekDays:{
                    some:{
                        week_day: weekDay
                    }
                } 
            }
        })

        const day = await prisma.day.findUnique({
            where:{
                date: parsedDate.toDate()
            },
            include:{
                dayHabits: true
            }
        })

        const completedHabits = day?.dayHabits.map(dayHabit => {
            return dayHabit.habit_id
        })

        return {
            possibleHabits,
            completedHabits
        }

    })
}