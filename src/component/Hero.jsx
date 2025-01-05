import React from 'react'
import {logo} from'../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
<img src={logo} alt="" className='w-28 object-contain' />
<button type="button" className='black_btn'>Github</button>
        </nav>
        <h1 className="head_text">
  Turn Lengthy Articles <br className="md:hidden" /> into Quick Reads with <br /> 
  <span className="blue_gradient">OpenAI GPT-4</span>
</h1>
        <h2 className='desc'>Transform lengthy articles into concise summaries with the power of OpenAI. Our tool delivers quick, accurate, 
            and tailored summaries, saving you time and effort. Simplify reading and stay informed—start summarizing now!</h2>
    </header>
  )
}

export default Hero