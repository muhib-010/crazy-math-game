import { useEffect } from "react";

let ans

function MathGenerator(){
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;

    ans = Math.random() > 0.5? true : false; // determines weather the display answer will be true or false
    let ofset = Math.random() > 0.5? 1 : -1;
    let displayAns
    if (ans) {
       displayAns = num1 + num2
    }
    else{
        displayAns = num1 + num2 + ofset
    }
    let displayMath = `${num1} + ${num2} = ${displayAns}?`
    return displayMath
}

export default function MathDisplay(props){
    let displayMath = MathGenerator()
    useEffect(() => {
        props.setRightAns(ans)
    })
    
    return(
        <div className="w-fit mx-auto px-3 relative z-20 sm:text-8xl text-6xl h-fit flex justify-center text-center mt-4 bg-opacity-50 backdrop-blur-sm bg-transparent rounded-full">
            <h1>{displayMath}</h1>
        </div>
    )
}