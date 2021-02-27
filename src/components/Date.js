import React, { useState } from 'react';





export default function DatePickers() {
  
 const [date, setDate] = useState(new Date())
 const [lastWeek, setLastWeek] = useState(new Date(date.getFullYear(), date.getMonth(), date.getDate()-7))
  return (
    <div className=" mb-1 text-white text-center flex flex-wrap">
     
      <form className={"w-2/6 mx-auto  text-white "} noValidate>
      <h2 className=" p-1">
      <span>From</span><br></br>
        {`${date.getFullYear()}-0${lastWeek.getMonth()+1}-${(lastWeek.getDate() < 10)? `0${lastWeek.getDate()}`:`${lastWeek.getDate()}`}`}
        </h2>
    </form>
    <form className={"w-2/6 mx-auto text-white "} noValidate>
      <h2 className="p-1">
        <span>To</span><br></br>
        {`${date.getFullYear()}-0${date.getMonth()+1}-${(date.getDate() < 10)? `0${date.getDate()}`:`${date.getDate()}`}`}
        </h2>
    </form>
   
    </div>
  );
}