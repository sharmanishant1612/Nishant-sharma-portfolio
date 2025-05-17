import { useEffect, useState } from 'react'
import './home.css'
import Navbar from '../navbar/Navbar'
import image from './nishant sharma.png'
function Home(){

  let [tasks,settasks] = useState(["Full-Stack Developer","Lifelong learner","DSA Ehthuasiast","Problem Solver","Tech Innovator"])
  let [variable,setvariable] = useState(0)

  useEffect(()=>{
    setTimeout(() => {
        variable=variable+1
        let value = variable%tasks.length
        setvariable(value)
    }, 2000);
  },[variable])

  // outer div css w-[100%] inner div w-[100%]  lg:w-[90%]

    return(
        <>
           
            
            <div className=" md:h-screen bg-slate-900 background" id='home'>
                {/* navbaar render */}
               <div className='text-white  h-[4rem] '>
                <Navbar/>
               </div>
               
               {/* home section,outer div */}
               <div className='w-[100%] pt-9 flex justify-center items-center '>
                    {/* inner div */}
    
                    <div className=' w-[100%]  lg:w-[90%] md:mt-16 lg:mt-10   flex flex-col items-center justify- md:flex-row sm:items-center sm:justify-around'>

                         

                        <img src={image} alt="" className='sm:h-[23rem] sm:w-[23rem] md:h-[25rem] md:w-[24rem] md:self-start rounded-full lg:h-[27rem] lg:w-[25rem]' id='image' />
                    
                     <div className=' md:h-[30rem]  flex flex-col items-center justify-start  mt-8 md:mt-0' id='details'>
                       
                         <p className='text-sky-300 rounded-3xl bg-white/20 p-2'>Hey!👋 I'm</p>
                       
                          <span className='text-[2em] sm:text-[3em]  font-bold 
                          bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-700 bg-clip-text text-transparent'>Nishant Sharma</span>
                         
                          <p className='text-[1.3em] sm:text-[1.7em] text-white'>I'm a <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-700 bg-clip-text text-transparent'>{tasks[variable]}</span></p>
                        
                          <p className='flex flex-col items-center mt-4'>
                           
                          <span className=' sm:text-[1.2em] text-white hover:transform hover:scale-105 hover:text-blue-300'>
                          <i className="fa-solid fa-phone text-blue-300 mr-1"></i>
                          +91 9410677716
                          </span>
                         
                          <span className=' sm:text-[1.2em] text-white pt-1 hover:transform hover:scale-105 hover:text-blue-300'>
                          <i className="fa-solid fa-envelope text-blue-300 mr-2"></i>
                           sharmanishant08751@gmail.com
                          </span>
                         
                           <span className=' sm:text-[1.2em] text-white pt-1 hover:text-blue-300'>
                           <i className="fa-solid fa-location-dot text-blue-300 mr-2"></i>
                            Ghaziabad,India
                           </span>
                          </p>
                         
                          <p className='mt-5 text-white'>
                            
                            <a href="">
                            <button className='bg-blue-600  rounded-md sm:text-xl p-1 sm:p-2 hover:transform hover:scale-105'>
                             <i className="fa-solid fa-file mr-2"></i>
                             View Resume
                             </button>
                            </a>
                            
                            <a href="">
                            <button className=' rounded-md ml-3 border border-blue-400 sm:text-xl p-1 sm:p-1.5 hover:transform hover:scale-105 hover:text-blue-300'>
                             <i className="fa-solid fa-envelope mr-2"></i>
                             Contact Me
                             </button>
                            </a>
                          </p>
                         
                          <div className='h-[12%] w-[60%] sm:h-[15%] sm:w-[60%] md:h-[12%] md:w-[60%] mt-7 mb-5 flex justify-between items-center '>
                          <a href='https://github.com/sharmanishant1612' className='h-[75%] w-[22%]  bg-white/10 rounded-md flex justify-center items-center hover:transform hover:-translate-y-1'>
                            <i className="fa-brands fa-github text-white text-2xl sm:text-3xl  md:text-2xl"></i></a>
                          <a href='https://www.linkedin.com/in/nishant-sharma-a2b15027b/'
                        className='h-[75%] w-[22%] bg-white/10 rounded-md flex justify-center items-center hover:transform hover:-translate-y-1'>
                            <i className="fa-brands fa-linkedin-in text-blue-600 text-2xl sm:text-3xl md:text-2xl"></i></a>
                          <a href='https://www.instagram.com/sharmanishant1612/' className='h-[75%] w-[22%] bg-white/10 rounded-md flex justify-center items-center hover:transform hover:-translate-y-1'>
                            <i className="fa-brands fa-instagram text-pink-600 text-2xl sm:text-3xl md:text-2xl"></i></a>
                          <a href='https://wa.me/9027259417?text=Hello! Nishant Sharma , Its great connecting with you.'
                           className='h-[75%] w-[22%] bg-white/10 rounded-md flex justify-center items-center hover:transform hover:-translate-y-1'>
                            <i className="fa-brands fa-whatsapp text-green-400 text-2xl sm:text-3xl md:text-2xl"></i></a>
                          </div>
                        </div>
                    
                    </div>
                 </div> 

            </div>                              
        </>
    )
}
export default Home


// //  {/* {/* outer div  */}
// <div className='h-[100%] w-[100%] bg-white pt-[6rem]  flex  justify-center items-center'>
// {/* outer div */}
//    <div className='h-[100%] md:h-[450px] w-[90%] bg-yellow-300 md:flex justify-between items-center '>
//        {/* address div */}
//        <div className='h-[90%] w-[45%] border border-black'>

//        </div>
//        {/* image div */}
//        <div className='h-[90%] w-[45%] border border-black'>

//        </div>
//    </div>
// </div> 



// 
                         {/* h-[45%]%] w-[60%] h-[45%] w-[90%]   sm:h-[80%] sm:w-[100%]*/}