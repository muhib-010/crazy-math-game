export default function(props){
    return(
        <p className="text-center font-extrabold text-4xl mt-1 bg-gradient-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">
            HIGH SCORE: {props.highScore}!!!
        </p>
    )
}