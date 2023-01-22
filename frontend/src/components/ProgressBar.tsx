interface ProgressBarProps{
    progress: number;
}

export function ProgressBar(props : ProgressBarProps){

    const progressStyles = {
        width: `${props.progress}%` 
    }
    return(
        <div className="h-3 rounded-xl bg-zinc-700w-full mt-4">
            <div
                role="progressbar"
                aria-label="Progresso de hábitos completados no dia"
                aria-valuenow={props.progress}
                className="h-3 rounded-xl bg-violet-600 transition-all"
                style={progressStyles}
            />
            </div>
    )
}