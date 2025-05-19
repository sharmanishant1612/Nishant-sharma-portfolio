import { useState } from "react"
import logo from './NishantLogo.png'
function Navbar(){

    let [hamberger,sethamberger] = useState(true)

    let changehamberger = ()=>{
        sethamberger(!hamberger)
    }


    return(


        <>      
        <div className=' flex justify-center bg-white '>
                    {/* navbaar div */}
                    <div className='h-[50px] w-[90%] border-2 border-blue-500 rounded-md flex justify-between items-center bg-slate-900 fixed top-4 left-1/2 transform -translate-x-1/2 z-50 '>
                        {/* first div */}
                        <div className='h-[90%] w-[11%] sm:w-[7%] md:w-[5%] lg:h-[80%] lg:w-[3%] ml-2'>
                            <img src={logo} alt="" className='h-full w-full' />
                        </div>
                        {/* second div */}
                        <div className='h-[80%] w-[75%] lg:flex justify-around items-center text-white font-sans hidden'>
                            <a href="#home" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0 '>Home</a>
                            <a href="#about" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0'>About</a>
                            <a href="#skills" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0'>Skills</a>
                            <a href="#projects" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0'>Projects</a>
                            {/* <a href="" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0'>Github</a> */}
                            <a href="#leetcode" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0'>Leetcode</a>
                            <a href="#badges" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0'>Badges</a>
                            {/* <a href="" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0'>Blogs</a> */}
                            {/* <a href="" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0'>Experience</a> */}
                            <a href="#certificates" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0'>Certifications</a>
                            <a href="#education" className='hover:text-blue-400 hover:border-b-2 border-b-blue-600 translate-x-0'>Education</a>
                        </div>
                        {/* 3rd div */}
                        <a href="#contact" className='h-[80%] w-[15%] bg-blue-500 rounded-md lg:flex justify-center items-center text-white hidden mr-2'>                       
                         <span className="text-[1em]">Request a Project<i className="fa-solid fa-arrow-right text-[1.1em] pl-1"></i></span>
                           
                        </a>
                        {/* hamberger div */}
                        <div className='h-[80%] w-[10%] sm:w-[8%] md:w-[6%]  lg:hidden flex justify-center items-center text-white mr-2'>
                        {
                            hamberger?
                            <i className="fa-solid fa-bars text-[1.8em]" onClick={()=>{sethamberger(!hamberger)}}></i> :
                            <i className="fa-solid fa-xmark text-[1.8em]" onClick={()=>{sethamberger(!hamberger)}}></i>
                        }
                                               
                        </div>
                    </div>  
                         {/* Navbaar ends */}

                        <div className={hamberger?"hidden" : "w-[90%] fixed top-[69px]  text-white flex flex-col items-center pt-2 lg:hidden bg-slate-900 "}>
                            <a href="#home" className='hover:text-blue-400 pt-2 text-[1.2em]' onClick={changehamberger}>Home</a>
                            <a href="#about" className='hover:text-blue-400 pt-2 text-[1.2em]' onClick={changehamberger}>About</a>
                            <a href="#skills" className='hover:text-blue-400 pt-2 text-[1.2em]' onClick={changehamberger}>Skills</a>
                            <a href="#projects" className='hover:text-blue-400 pt-2 text-[1.2em]' onClick={changehamberger}>Projects</a>
                            {/* <a href="" className='hover:text-blue-400 p-1 text-[1.2em]' onClick={changehamberger}>Github</a> */}
                            <a href="#leetcode" className='hover:text-blue-400 pt-2 text-[1.2em]' onClick={changehamberger}>Leetcode</a>
                            <a href="#badges" className='hover:text-blue-400 pt-2 text-[1.2em]' onClick={changehamberger}>Badges</a>
                            {/* <a href="" className='hover:text-blue-400 p-1 text-[1.2em]' onClick={changehamberger}>Blogs</a> */}
                            {/* <a href="" className='hover:text-blue-400 p-1 text-[1.2em]' onClick={changehamberger}>Experience</a> */}
                            <a href="#certificates" className='hover:text-blue-400 p-1 text-[1.2em]' onClick={changehamberger}>Certifications</a>
                            <a href="#education" className='hover:text-blue-400 p-1 text-[1.2em]' onClick={changehamberger}>Education</a>
                            <a href="#contact" className="text-[1.2em] pt-2 pb-3"><button className="bg-blue-500 p-1 rounded-md" onClick={changehamberger}>Request a Project<i className="fa-solid fa-arrow-right text-[1.1em] pl-1"></i></button></a> 
                        </div>
                </div>

               
               
        </>
    )
}
export default Navbar