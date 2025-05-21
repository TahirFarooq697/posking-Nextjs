import React from "react"
 const InfoOverview=({title,amount, className})=>{
    return(

 
        <div className={`p-3 rounded-lg shadow-md text-center  ${className}`}>
          <h2 className="text-lg font-semibold font-sans">{title}</h2>
          <p className="text-xl font-semibold font-sans">{amount}</p>
    </div>
    )
}
export default InfoOverview 