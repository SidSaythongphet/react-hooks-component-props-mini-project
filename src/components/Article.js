import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes}) {
    function getEmoji(){
        if ( minutes  < 30) {
            const numCups = (Math.ceil(minutes) / 5)
            return "☕️".repeat(numCups)
        } else if (minutes > 30) {
            const numBox = (Math.ceil(minutes) / 10)
            return "🍱".repeat(numBox)
        }
    }   
    return (
        <article>
            <h3>{ title }</h3>
            <small>{ date } : {getEmoji()} {minutes} min read</small>
            <p>{ preview }</p>
        </article>
    )
}

export default Article