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
    })
}