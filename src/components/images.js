import React from "react"

//create to Ruegen via codepen.io

function RandomImages(props) {
    const style = {
        width: 150,
        height: 200,
        backgroundColor: 'dodgerblue',
        display: 'inline-block',
        margin: 2,
        border: '5px solid #333',
        borderBottom: '5px solid #222',
        borderLeft: '5px solid #222',
        borderRadius: 4,
        boxSizing: 'border-box',
        backgroundImage: `url(https://unsplash.it/150/200?image=${props.num})`,
        transition: 'background-image 1s ease-in-out'
    }



    return (
        <a href="#" style={style} />
    )
}

function randomNumber() {
   return Math.random() * 15
}

//learn to randomly generate numbers and call the value from that funcion; 
const RandomImage = () => {
    
    return (
        <div>        
            <RandomImages num = '1'/>
        </div>
    )
}



export default RandomImage