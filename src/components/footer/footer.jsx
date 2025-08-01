import react from './React.svg'
import vite from './Vite.js.png'
function Footer (){
    return(
        <>
        <div className="bg-black/5 dark:bg-slate-900 pt-3 flex flex-col items-center pb-10">
                <div className="mt-7 px-5 sm:px-8   flex justify-center flex-wrap ">
                    <a href="#home" className=" dark:text-gray-400   font-semibold py-1 px-3">Home</a>
                    <a href="#about" className=" dark:text-gray-400   font-semibold py-1 px-3">About</a>
                    <a href="#skills" className=" dark:text-gray-400   font-semibold py-1 px-3">Skills</a>
                    <a href="#projects" className=" dark:text-gray-400   font-semibold py-1 px-3">Projects</a>
                    <a href="#leetcode" className=" dark:text-gray-400   font-semibold py-1 px-3">Leetcode</a>
                    <a href="#badges" className=" dark:text-gray-400   font-semibold py-1 px-3">Badges</a>
                    <a href="#certificates" className=" dark:text-gray-400   font-semibold py-1 px-3">Certificates</a>
                    <a href="#education" className=" dark:text-gray-400   font-semibold py-1 px-3">Education</a>
                    <a href="#contact" className=" dark:text-gray-400   font-semibold py-1 px-3">Contact</a>
                </div>
                <div className="h-[] w-[  mt-5 flex justify-center">
                    <a href='https://github.com/sharmanishant1612' className='h-[2.5em] w-[2.5em] mx-3 bg-black/10 dark:bg-white/10 rounded-md flex justify-center items-center lg:hover:transform lg:hover:-translate-y-1'>
                     <i className="fa-brands fa-github dark:text-white text-2xl sm:text-3xl  md:text-2xl"></i></a>
                      <a href='https://www.linkedin.com/in/nishant-sharma-a2b15027b/'
                        className='h-[2.5em] w-[2.5em] mx-3 bg-black/10 dark:bg-white/10 rounded-md flex justify-center items-center lg:hover:transform lg:hover:-translate-y-1'>
                            <i className="fa-brands fa-linkedin-in text-blue-600 text-2xl sm:text-3xl md:text-2xl"></i></a>
                          <a href='https://www.instagram.com/sharmanishant1612/' className='h-[2.5em] w-[2.5em] mx-3 bg-black/10 dark:bg-white/10 rounded-md flex justify-center items-center lg:hover:transform lg:hover:-translate-y-1'>
                            <i className="fa-brands fa-instagram text-pink-600 text-2xl sm:text-3xl md:text-2xl"></i></a>
                          <a href='https://wa.me/9410677716?text=Hello! Nishant Sharma , Its great connecting with you.'
                           className='h-[2.5em] w-[2.5em] mx-3 bg-black/10 dark:bg-white/10 rounded-md flex justify-center items-center lg:hover:transform lg:hover:-translate-y-1'>
                            <i className="fa-brands fa-whatsapp text-green-400 text-2xl sm:text-3xl md:text-2xl"></i></a>
                </div>
                <div className="  mt-6 flex flex-col justify-center">
                    <p className='text-gray-400 px-3 text-center'><i className="fa-solid fa-copyright"></i><span> 2025 Nishant Sharma. All rights reserved.</span></p>
                    {/* <p className='flex justify-center items-center text-gray-400'>
                        <span className='pr-1'>Build with </span>
                        <img src={react} alt="" className='h-[1.2rem] w-[1.2rem] animate-spin' />
                        <span className='px-1'>using  </span>
                        <img src={vite} alt="" className='h-[1.2rem] w-[1.2rem]' />
                    </p> */}
                </div>
        </div>
        </>
    )
}
export default Footer