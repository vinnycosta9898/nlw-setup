export function generateProgressPrrcentage(total: number, completed: number){
    return Math.round((total / completed) * 100)
}   