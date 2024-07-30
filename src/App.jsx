//Note:we number,symbol,character and  no. of character using range ,symbol using bool function and same with number


import { useCallback, useState } from 'react'
import './App.css'

function App() {
     const [length,setLength]=useState(8)
     const [numberAllowed,setNumber]=useState(false)
     const[symbolallowed,setSymbol]=useState(false)
     const [password,setPassword]=useState("")
     const passwordGenerator = useCallback(()=>{
      let alpha= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let pass=""
      if(numberAllowed) alpha+= "0123456789"
      if(symbolallowed) alpha+="~`@#$%^&*()_+=-"

      for(let i=1;i<=alpha.length;i++){
        let char = Math.floor(Math.random()*alpha.length+1)
        pass = alpha.charAt(char)
        console.log(pass)
      }
       
     },[length,numberAllowed,symbolallowed,setPassword])

  return (
    <>
     <div className='w-full h-screen bg-black text-white '>
      <div className='flex  justify-center text-5xl pt-14'>Password Generator</div>
      <div className='flex items-center justify-center mt-5 w-full'>
      <input type='text'  className='h-12 w-2/3 bg-slate-50 outline-none rounded-xl'></input>
      </div>
      <div className='bg-white '>
      <input class='slider'  type='range' min="8" max="30"></input>
      </div>
     </div>
    </>
  )
}

export default App
