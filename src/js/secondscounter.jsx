function SecondsCounter(props) {
    return (<div className="Contador">
            <div className="Crono" >
            <i className="fa-regular fa-clock"></i>
            </div>
          {props.seconds.toString().padStart(6,"0").split("").map((digit, index)=>(
               <div className="Manuel" key={index}> {digit} </div>
          ))}
       </div>)
  }



  export default SecondsCounter;