import './about.css'

function About(){
    return(
        <>
        <div className="h flex flex-col items-center bg-slate-950 text-white" id="about">
            <p className='text-[2.5em] font-bold text-violet-600 mt-14'>About Me</p>
            <p className='w-[75%] mt-8 text-[1.2em] text-white/80 text-center'>Hey there! 👋 I'm <span className='text-blue-600 font-semibold'>Nishant Sharma</span>, a Full-Stack Developer and final-year Computer Science Engineering student. I love transforming ideas into scalable web applications and solving complex coding challenges. My journey in tech revolves around continuous learning, experimenting with new technologies, and building solutions that make an impact.</p>
            <div className='bg-blue-600  mt-7 sm:text-[1.1em] p-2 w-fit max-w-[80%] min-w-[10rem] rounded-md text-center text-white/80'>🚀 I like to build Products and solve problems</div>

            <div className=' w-[100%] flex flex-col md:flex-row md:flex-wrap justify-around items-center  mt-10'>
                <div className=' w-[90%] md:w-[45%]  mt-5 rounded-lg bg-slate-900 hover:-translate-y-2 duration-300 hover:shadow-[1px_1px_27px_-4px_rgb(37,_99,_235)]'>
                    {/* inner div */}
                    <div className='flex items-center mt-5 pl-5 '>
                        <p className='h-[3rem] w-[3.2rem] bg-blue-700 flex justify-center items-center rounded-md'><i className="fa-regular fa-user text-[1.7em]"></i></p>
                        <span className='text-[1.4em] pl-4 text-white/90 font-semibold'>Who I Am</span>
                    </div>
                    {/* list */}
                    <p className='mt-3 mb-5 pl-10 text-[1.1em] text-white/50 '>
                    <li className='pb-1'>A full-stack developer having interest in software engineering.</li>
                    <li className='pb-1'>Enjoy solving problems and building scalable applications.</li>
                    <li className='pb-1'>Always learning new technologies to improve my skills.</li>
                    </p>
                </div>
                <div className=' w-[90%] md:w-[45%] mt-5 rounded-lg bg-slate-900 hover:-translate-y-2 duration-300 hover:shadow-[1px_1px_27px_-4px_rgb(109,_40,_217)]'>
                     {/* inner div */}
                     <div className='flex items-center mt-5 pl-5'>
                        <p className='h-[3rem] w-[3.2rem] bg-violet-700 flex justify-center items-center rounded-md'><i className="fa-solid fa-code text-[1.5em]"></i></p>
                        <span className='text-[1.4em] pl-4 text-white/90 font-semibold'>Who I Do</span>
                    </div>
                    {/* list */}
                    <p className='mt-3 mb-5 pl-10 text-[1.1em] text-white/50'>
                    <li className='pb-1'>A full-stack developer having interest in software engineering.</li>
                    <li className='pb-1'>Enjoy solving problems and building scalable applications.</li>
                    <li className='pb-1'>Always learning new technologies to improve my skills.</li>
                    </p>
                </div>
                <div className=' w-[90%] md:w-[45%] mt-5 md:mb-5  rounded-lg bg-slate-900 hover:-translate-y-2 duration-300 hover:shadow-[1px_1px_27px_-4px_rgb(21,_128,_61)]'>
                     {/* inner div */}
                     <div className='flex items-center mt-5 pl-5 '>
                        <p className='h-[3rem] w-[3.2rem] bg-green-700 flex justify-center items-center rounded-md text-white'><i className="fa-solid fa-bullseye text-[1.7em]"></i></p>
                        <span className='text-[1.4em] pl-4 text-white/90 font-semibold'>My Goals</span>
                    
                    </div>
                    {/* list */}
                    <p className='mt-3 mb-5 pl-10 text-[1.1em] text-white/50 '>
                    <li className='pb-1'>A full-stack developer having interest in software engineering.</li>
                    <li className='pb-1'>Enjoy solving problems and building scalable applications.</li>
                    <li className='pb-1'>Always learning new technologies to improve my skills.</li>
                    </p>
                    
                </div>
                <div className='w-[90%] md:w-[45%] mt-5 mb-10 md:mb-5 rounded-lg  bg-slate-900 hover:-translate-y-2 duration-300 hover:shadow-[1px_1px_27px_-4px_rgb(249,_115,_22)]'>
                     {/* inner div */}
                     <div className='flex items-center mt-5 pl-5'>
                        <p className='h-[3rem] w-[3.2rem] bg-orange-500 flex justify-center items-center rounded-md'><i className="fa-solid fa-lightbulb text-[1.7em]"></i></p>
                        <span className='text-[1.4em] pl-4 text-white/90 font-semibold'>My Philosophy</span>
                    </div>
                    {/* list */}
                    <p className='mt-3 mb-5 pl-10 text-[1.1em] text-white/50'>
                    <li className='pb-1'>A full-stack developer having interest in software engineering.</li>
                    <li className='pb-1'>Enjoy solving problems and building scalable applications.</li>
                    <li className='pb-1'>Always learning new technologies to improve my skills.</li>
                    </p>
                    
                </div>
                
            </div>
        </div>
        </>
    )
}
export default About