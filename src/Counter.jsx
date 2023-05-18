import { useState } from "react";

export default function Counter() {
   const [showBtns, setShowBtns] = useState(true)
   const [counter, setCounter] = useState(4)
   // state == משתנה 
   // "מחזיק" את המצב הנוכחי
   // גורמת לרינדור מחדש של הקומפוננטה

   // function setCounter(newValue){
   //     counter=newValue
   //     // render() 
   // }

   const handleClick = (reduce) =>
      setCounter(reduce ? counter - 1 : counter + 1)

   const HandleShowBtns = () => setShowBtns(!showBtns)

   return (
      <div>
         <button onClick={HandleShowBtns} > show buttons </button>
         <h3>Counter</h3>
         <div>{counter}</div>
         <button className={!showBtns ? "notShow" : ''} onClick={() => handleClick(false)}>Add</button>
         <button className={!showBtns ? "notShow" : ''} onClick={() => handleClick(true)}>reduce</button>
      </div>
   )
}