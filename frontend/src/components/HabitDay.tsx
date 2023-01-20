import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';

interface HabitDayProps{
    completed: number;
    amount: number; 
}

export function HabitDay( { completed, amount }: HabitDayProps){

    const completedPercentage = Math.round((completed / amount) * 100)
    return(
        <Popover.Root>
            <Popover.Trigger className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg"></Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col "> 

                <Popover.Arrow height={8} width={16} className="fill-zinc-900"/>
                    <span className="font-semibold text-zinc-400">Segunda Feira</span>
                    <span className="mt-1 font-extrabold leadind-tight text-3xl text-white">16/01</span>
                    <ProgressBar progress={completedPercentage}/>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}