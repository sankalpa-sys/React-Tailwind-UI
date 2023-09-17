import React, { useEffect } from 'react'
import  elements  from '../configs/elements'
import { useState } from 'react'
function BreakingBad() {
    const [firstName, setFirstName] = useState("")
    const [firstNameStarting, setFirstNameStarting] = useState("")
    const [firstNameLength, setFirstNameLength] = useState(0)
    const [lastName, setLastName] = useState("")
    const [lastNameStarting, setLastNameStarting] = useState("")
    const [lastNameStartingLength, setLastNameStartingLength] = useState("")

    const firstNameChangeHandler = (e) => {
        let value = e.target.value
        value = value.charAt(0).toUpperCase() + value.slice(1);
        setFirstName(value)
    
    }

    const lastNameChangehandler = (e) => {
        let value = e.target.value
        value = value.charAt(0).toUpperCase() + value.slice(1);
        setLastName(value)
    }
   useEffect(()=>{
    if(firstName.length === 0){
        setFirstNameStarting("")
    }
        elements.map((element)=>{
            if(firstName.startsWith(element)){
               setFirstNameLength(element.length)
                setFirstNameStarting(element)

            }
            return undefined;
        })
   },[firstName])


   useEffect(()=>{
    if(lastName.length === 0){
        setLastNameStarting("")
    }
        elements.map((element)=>{
            if(lastName.startsWith(element)){
               setLastNameStartingLength(element.length)
                setLastNameStarting(element)

            }
            return undefined;
        })
   },[lastName])
  return (
    <main>
        <p className='font-bold m-4 text-teal-600'>Lets play Breaking Bad</p>
    <div className='mt-10 ml-10'>
        <form className='space-x-4 flex items-center justify-center'>
        <input className='meth_input' maxLength={10}  type="text" placeholder='First Name' onChange={firstNameChangeHandler} value={firstName}/>
        <input className='meth_input' maxLength={10} type="text" placeholder='Last Name' onChange={lastNameChangehandler} value={lastName} />
    
    </form>

    </div>
    <div className='mt-10 text-center tracking-wider ml-10 h-[70vh] flex items-center justify-center flex-col'>
   <div className='flex items-center space-x-1 '>
    {firstNameStarting && ( <h1 className='font-bold text-7xl bg-teal-600 text-white px-3 py-2 max-w-fit'>{firstNameStarting}</h1>)}
    { (
         <h1 className='font-bold text-7xl'>{firstName.substring(firstNameLength)}</h1>
    )}
   </div>
   <div className='flex items-center space-x-1]  mt-4'>
    {lastNameStarting && ( <h1 className='font-bold text-7xl bg-teal-600 text-white px-3 py-2 max-w-fit'>{lastNameStarting}</h1>)}
    { (
         <h1 className='font-bold text-7xl'>{lastName.substring(lastNameStartingLength)}</h1>
    )}
   </div>
</div></main>
  )
}

export default BreakingBad