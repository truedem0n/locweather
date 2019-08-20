import React from "react"

const Card=(props)=>{
    return(
        <div className="tc bg-light-green w-20 pa3 ma3 br2">
        <img src="https://robohash.org/asdf?400x400" alt=""></img>
        <h1>{props.city}</h1>
        <a href="www.gogole.com" className="link bg-blue pa1 br2 whi">Check weather</a>
        </div>
    )
}

export default Card;