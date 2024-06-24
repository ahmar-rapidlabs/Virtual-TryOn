import React from 'react'
import hero from '../assets/images/hero.png'
import account from '../assets/icons/account.png';
import speaker from '../assets/icons/speaker.png';
import download from '../assets/icons/donwload.png';
import reason1 from '../assets/icons/reason1.png';
import reason2 from '../assets/icons/reason2.png';
import reason3 from '../assets/icons/reason3.png';
import reason4 from '../assets/icons/reason4.png';
import trynow from '../assets/icons/trynow.svg';
import demo_eye from '../assets/icons/demo_eye.svg';
function HeroSection() {
  return (
    <>
    <div className="herosec_main_container px-12 py-20 text-white">
      <div className="hero_sec_flex_container flex flex-col justify-center items-center mb-20">
      <div className="hero_sec_text md:mx-80 text-center">
        <div className="title ">
          <h5 className='text-5xl font-bold md:font-semibold md:text-6xl' style={{lineHeight: "3.4rem"}}>Find your perfect fit from anywhere</h5>
        </div>
        <div className="subtext mt-6 md:mx-18">
          <p className='text-xl'>Experience the perfect fit and style with our advanced virtual try-on technology. Shop with confidence, seeing how products look on you before making a purchase.</p>
        </div>
        <div className="trynow_btn my-8">
          <button
          style={{
            background: "linear-gradient(to right, #665DCD 0%, #5FA4E6 45%, #D2AB67 100%)"
          }}
           className='text-white focus:ring-4 flex items-center mx-auto focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2'>
            <span className='uppercase'>Try Now </span>
            <span className='ml-3 mt-0.5'><img src={trynow} alt="" className='h-5 w-5' /></span>
          </button>
        </div>
      </div>
      <div className="hero_sec_img">
        <img src={hero} alt="" className='max-w-full h-auto' />
      </div>
      </div>
      <div className="viewdemo_btn">
        <div className="btn flex justify-center">
        <button
          style={{
            background: "linear-gradient(to right, #665DCD 0%, #5FA4E6 45%, #D2AB67 100%)"
          }}
           className='text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-2xl px-8 py-3 flex items-center uppercase mx-auto'>
            <span><img src={demo_eye} alt="" className='h-7 w-7 mr-2' /></span>
            <span>View Demo</span>
          </button>
        </div>
      </div>
      <div className="demo_steps mt-12">
        <div className="steps_container grid md:grid-cols-3 grid-cols-1 gap-12">
          <div className="step1 p-12 rounded-lg"style={{background: "#2e2e2e"}}>
            <div className="icon mb-8">
              <img src={account} alt="" className='w-10 h-10' />
            </div>
            <div className="title">
              <h5 className='text-3xl font-bold md:font-semibold md:text-4xl my-3'>Step 1</h5>
              <p className='text-gray-400 text-xl'>Create an account</p>
            </div>
          </div>
          <div className="step2 p-12 rounded-lg"style={{background: "#2e2e2e"}}>
          <div className="icon mb-8">
              <img src={speaker} alt="" className='w-10 h-10' />
            </div>
            <h5 className='text-3xl font-bold md:font-semibold md:text-4xl my-3'>Step 2</h5>
            <p className='text-gray-400 text-xl'>Upload your image and wardrobe</p>

          </div>
          <div className="step3 p-12 rounded-lg"style={{background: "#2e2e2e"}}>
          <div className="icon mb-8">
              <img src={download} alt="" className='w-10 h-10' />
            </div>
            <h5 className='text-3xl font-bold md:font-semibold md:text-4xl my-3'>Step 3</h5>
            <p className='text-gray-400 text-xl'>Get the results.</p>

          </div>
        </div>
        
      </div>
      <div className="why_try_on_container mt-12">
        <div className="why_container">
          <div className="grid_container grid md:grid-cols-3 gap-6 grid-flow-row-dense">
            <div className="title self-center">
              <h5 className='text-4xl'>Why should you use our Virtual Try On?</h5>
            </div>
            <div className="reasons_container col-span-1 lg:col-span-2">
              <div className="grid_container grid md:grid-cols-2 md:gap-4 gap-6">
                <div className="reason1 rounded-md p-8" style={{background: "#4F3DFE"}}>
                  <div className="icon mb-6">
                    <img src={reason1} alt="" className='w-10 h-10' />
                  </div>
                  <div className="title">
                    <h5 className='text-lg font-semibold'>Better Shopping Fun</h5>
                  </div>
                  <div className="desc">
                  See how clothes and accessories look on you before you buy them. It makes shopping more fun and exciting, like playing a game!
                  </div>

                </div>
                <div className="reason2 rounded-md p-8 " style={{background: "#4F3DFE"}}>
                <div className="icon mb-6">
                    <img src={reason2} alt="" className='w-10 h-10' />
                  </div>
                  <div className="title">
                    <h5 className='text-lg font-semibold'>Perfect Fit Every Time</h5>
                  </div>
                  <div className="desc">
                  No more guessing if something will fit you right. Our app shows you how things look on you, so you can be sure they fit well and look great.
                  </div>

                </div>
                <div className="reason3 p-8 rounded-md" style={{background: "#4F3DFE"}}>
                <div className="icon mb-6">
                    <img src={reason3} alt="" className='w-10 h-10' />
                  </div>
                  <div className="title">
                    <h5 className='text-lg font-semibold'>Help the Planet</h5>
                  </div>
                  <div className="desc">
                  Buying things that don’t fit can create waste. Our app helps you choose right the first time, which is better for our planet because fewer returns mean less waste.
                  </div>

                </div>
                <div className="reason4 border rounded-md p-8 border-gray-600" style={{background: "#4F3DFE"}}>
                <div className="icon mb-6">
                    <img src={reason4} alt="" className='w-10 h-10' />
                  </div>
                  <div className="title">
                    <h5 className='text-lg font-semibold'>Help the Planet</h5>
                  </div>
                  <div className="desc">
                  Buying things that don’t fit can create waste. Our app helps you choose right the first time, which is better for our planet because fewer returns mean less waste.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default HeroSection