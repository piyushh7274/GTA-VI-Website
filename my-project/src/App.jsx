import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import {useState}  from "react"
import 'remixicon/fonts/remixicon.css'

function App() {
  const [showContent, setShowContent] = useState(false);
  useGSAP(()=>{
    const tl= gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",

    });
    tl.to(".vi-mask-group",{
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut", 
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
      });
  });
  useGSAP(()=>{
    if (!showContent)
      return 
    gsap.to(".main", {
      scale:1,
      rotate:0,
      duration:2,
      delay: "-1",
      ease: "Expo.easeInOut",
    })
    gsap.to(".sky", {
      scale:1.2,
      rotate:0,
      duration:2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    })
    gsap.to(".bg", {
      scale:1.2,
      rotate:0,
      duration:2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    })
    gsap.to(".character", {
      scale:1.150,
      rotate:0,
      x: "-50%",
      bottom:"-25%",
      duration:2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    })
    const main = document.querySelector(".main")

    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / innerWidth - 0.5) *40;
      const yMove = (e.clientY / innerWidth - 0.5) *40;
      gsap.to(".main .text",{
        x: `${xMove * 0.5}`,
        y: `${yMove * 0.5}`,

      });
      gsap.to(".sky",{
        x: xMove,
        y: yMove,
      });
      gsap.to(".bg",{
        x: xMove * 1.7,
        y: yMove *1.7
      });
      
    });
  },[showContent]);
  return (
   <>
     <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
     
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && <div className='main w-full rotate-[-10deg] scale-[1.7]'>
        <div className='landing overflow-hidden relative w-full h-screen bg-black'>
          

           <div className="navbar fixed top-0 left-0 py-3 px-10 z-[20]">
            <div className="logo flex gap-7 items-center">
              <div className="lines flex flex-col gap-[6px]">
                <div className="line w-10 h-1 bg-white"></div>
                <div className="line w-7 h-1 bg-white"></div>
                <div className="line w-4 h-1 bg-white"></div>
              </div>
              <h3 className='text-4xl'>Rockstar</h3>
            </div>
          </div>

          
         
          <div className='imagesdiv relative w-full h-screen overflow-hidden'>
            
            <img className='sky absolute scale-[1.9] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
            <img className='bg absolute scale-[2.5] rotate-[20deg] top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />

            <div className="text absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-2">
               <h1 className='text-6xl -ml-20'>Grand</h1>
               <h1 className='text-6xl ml-0'>Theft</h1>
               <h1 className='text-6xl -ml-20'>Auto</h1>
            </div>

            <img className='character absolute -bottom-[150%] scale-[3] rotate-[10deg] left-1/2 -translate-x-1/2  h-auto max-h-[100vh]' src="./girlbg.png" alt="" />
            </div>

          
        </div>
         <div className='w-full h-screen bg-black flex px-10 items-center justify-center'>
        <div className="cntnr flex w-full h-[80%]">
            <div className="Limg relative h-full w-1/2">
              <img className="absolute scale-[0.95] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
           </div>
           <div className="rg w-[50%]">
            <h1 className='text-8xl'>Still running</h1>
            <h1 className='text-8xl'>Still Hunting</h1>
            <p className='mt-10 font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae dolorem quam laborum, neque, optio hic eveniet obcaecati deserunt laudantium numquam? Asperiores omnis voluptates dolorem aliquid, enim atque veritatis maiores?</p>
            <p className='mt-3 font-[Helvetica_Now_Display]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptatum ullam repellat.</p>
            <button className='bg-yellow-500 px-10 py-10 text-black text-2xl mt-5'>Download now</button>
           </div>
        </div>
        
      </div>
       
      </div>}

      {/* Fixed bottom bar - outside the main container */}
      {showContent && (
        <div className="bottom-bar fixed bottom-0 left-0 w-full h-32 z-[30] pointer-events-none">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-between px-10 pointer-events-auto">
            <div className="flex gap-4 items-center">
              <i className="text-4xl ri-arrow-down-line"></i>
              <h3 className='font-[Helvetica_Now_Display]'>Scroll down</h3>
            </div>
            <img className='h-[45px]' src="./ps5.png" alt="" />
          </div>
        </div>
      )}
   </>
  )
}

export default App