import './skills.css'
import html from './HTML5.svg'
import css from './CSS3.png'
import javascriptt from './JavaScript.svg'
import react from './React.svg'
import bootstrap from './Bootstrap.svg'
import tailwind from './tailwindcss.png'
import redux from './Redux.svg'
import node from './Node.js.png'
import express from './Express.png'
import sql from './sql.png'
import mongodb from './MongoDB.png'
import cpp from './c++.png'
import python from './Python.png'
import vscode from './vscode.png'
import git from './Git.png'
import github from './GitHub.png'
import postman from './Postman.png'
import vite from './Vite.js.png'


function Skill(){
    return(
        <>
        <div className=" bg-slate-100 dark:bg-slate-900" id="skills">
                <h1 className="text-center text-indigo-400 text-[2.5em] font-bold pt-10">Skills</h1>

                <div className=" w-[100%] flex justify-center items-center mt-8">
                        {/* inner div */}
                        <div className="w-[100%] sm:w-[75%] flex flex-wrap justify-evenly sm:justify-between pb-5 sm:mb-16">
                            
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank' className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group  " id="anchor">
                            <div className='h-[50%] w-[50%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%]   bg-orange-200/15 rounded-full flex flex-row justify-center items-center '>
                            <img src={html} alt="" className='h-[80%] sm:h-[90%]  w-[80%] '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>HTML</p>
                            </a>

                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank' className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%]   bg-sky-600/15 rounded-full flex flex-row justify-center items-center '>
                            <img src={css} alt="" className='h-[70%] sm:h-[80%] w-[70%] '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>CSS</p>
                            </a>

                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank' className="h-[8.5rem] sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%] bg-yellow-400/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={javascriptt} alt="" className=' sm:h-[70%] h-[70%] w-[70%] '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>JavaScript</p>
                            </a>

                            <a href="https://react.dev/" target='_blank' className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                            <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%] bg-cyan-600/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={react} alt="" className='h-[90%] rounded-full w-[80%] '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>React</p>
                            </a>

                            <a href="https://getbootstrap.com/" target='_blank' className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%] bg-indigo-600/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={bootstrap} alt="" className=' h-[90%] w-[80%]  '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>Bootstrap</p>
                            </a>

                            <a href="https://tailwindcss.com/" target='_blank' className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                            <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%]   bg-cyan-500/10 rounded-full flex flex-row justify-center items-center'>
                            <img src={tailwind} alt="" className='h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>Tailwind</p>
                            </a>

                            {/* <a href="" className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%] bg-violet-600/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={redux} alt="" className='h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-white text-[1.2em] font-semibold'>Redux</p>
                            </a> */}

                            {/* <a href="" className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%] bg-green-500/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={node} alt="" className='h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-white text-[1.2em] font-semibold'>Node.js</p>
                            </a> */}

                            {/* <a href="" className="h-[8.5rem] sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                            <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%] bg-green-500/15 rounded-full flex flex-row justify-center items-center '>
                            <img src={express} alt="" className='h-[90%] w-[80%] invert '/> 
                            </div>
                            <p className='text-white text-[1.2em] font-semibold'>Express.js</p>
                            </a> */}

                            <a href="https://www.w3schools.com/sql/" target='_blank' className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                            <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%] bg-sky-500/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={sql} alt="" className='h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>SQL</p>
                            </a>

                            {/* <a href="" className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%] bg-green-500/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={mongodb} alt="" className='h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-white text-[1.2em] font-semibold'>MongoDB</p>
                            </a> */}

                            <a href="https://www.w3schools.com/cpp/" target='_blank' className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%] bg-blue-500/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={cpp} alt="" className='h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>C++</p>
                            </a>

                            {/* <a href="" className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%]   bg-blue-500/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={python} alt="" className='h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-white text-[1.2em] font-semibold'>Python</p>
                            </a> */}

                            <a href="https://code.visualstudio.com/" target='_blank' className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%]   bg-blue-500/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={vscode} alt="" className='h-[80%] sm:h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>VS code</p>
                            </a>

                            <a href="https://git-scm.com/" target='_blank' className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%]   bg-orange-500/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={git} alt="" className='h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>Git</p>
                            </a>

                            <a href="https://github.com/" target='_blank' className="h-[8.5rem]  sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%]  rounded-full flex flex-row justify-center items-center'>
                            <img src={github} alt="" className='h-[90%] w-[80%]  invert  '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>GitHub</p>
                            </a>

                            {/* <a href="" className="h-[8.5rem] sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%]   bg-orange-500/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={postman} alt="" className='h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-white text-[1.2em] font-semibold'>Postman</p>
                            </a> */}

                            <a href="https://vite.dev/" target='_blank' className="h-[8.5rem] sm:w-[20%] md:w-[18%]  lg:w-[15%] bg-black/20 dark:bg-slate-800 rounded-lg mt-5 ml-2 mr-2 flex flex-col justify-evenly items-center hover:transform hover:-translate-y-2 duration-300 group" id="anchor">
                             <div className='h-[50%] w-[55%] sm:h-[55%] sm:w-[65%] lg:h-[65%] md:w-[55%] bg-indigo-500/15 rounded-full flex flex-row justify-center items-center'>
                            <img src={vite} alt="" className='h-[90%] w-[80%] '/> 
                            </div>
                            <p className='text-black/70 dark:text-white text-[1.2em] font-semibold'>Vite</p>
                            </a>
                            

                        </div>
                </div>
        </div>
        </>
    )
}
export default Skill