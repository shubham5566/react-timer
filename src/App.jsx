import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [day, setDay] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [sec, setSec] = useState(0)

  const deadline ="Apirl, 09,2024"
  const getTime  = ()=>{
    const time =  Date.now()
    console.log(time,"shubha check time")
    setDay(Math.floor(time*60*60*24))
    setHours(Math.floor((time*60*60)%24))
    setMinutes(Math.floor(time/1000/60)%60)
    setSec(Math.floor(time/1000)%60)

  }

  useEffect(()=>{
    const interval =setInterval( ()=>getTime(deadline,1000))
    return ()=> clearInterval(interval)
  },[])

  return (
    <>
   <div>
    <h1>{day}</h1>
    <small>day</small>
   </div>
   <div>
    <h1>{hours }</h1>
    <small>hours</small>
   </div>
   <div>
    <h1>{minutes }</h1>
    <small>minutes</small>
   </div>
   <div>
    <h1>{sec}</h1>
    <small>sec</small>
   </div>
    </>
  )
}

export default App
