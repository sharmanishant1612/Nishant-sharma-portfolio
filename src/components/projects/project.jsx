import currency from './currency.jpg'
import todo from './todo.jpg'
import react from './React.svg'
import tailwind from './tailwindcss.png'
function Project(){
    return(
        <>
        <div className="  bg-slate-800" id='projects'>
            <p className="text-indigo-400 text-[2.5em] font-semibold text-center pt-20">Projects</p>

            <div className="w-[100%] flex justify-center mt-5   pb-5">
                    
                <div className="w-[90%] md:w-[90%] flex flex-wrap justify-center sm:justify-between ">

                    <div className="h-[27rem] sm:w-[18rem] md:w-[20rem] lg:w-[22rem] bg-slate-900 mt-3 rounded-lg flex flex-col items-center ">
                        <img src={currency} alt="" className='h-[12rem] w-[90%] mt-2 rounded-md object-fill'/>
                        <div className='h-[2.5rem] w-[90%] flex justify-between items-center text-white/90 mt-2'>
                            <p className='text-[1.3em] font-semibold'>Curreny Convertor </p>

                            <p>
                            <a href=""><i className="fa-brands fa-github mr-7 text-[1.5em]"></i></a>
                            <a href=""><i className="fa-solid fa-globe mr-3 text-[1.5em]"></i></a>
                            </p>
                        </div>
                        <p className='w-[90%] text-white/80 font-semibold pt-2'>
                            Currency Converter is a web app that lets users convert currencies using real-time exchange rates. Built with HTML, CSS, and JavaScript for a simple, responsive experience.
                        </p>

                        <div className='w-[90%] h-[2.3rem] mt-2 flex'>

                            <div className='h-[95%] w-[12%] bg-slate-600/30 flex justify-center items-center rounded-md'>
                                <img src={react} alt="" className='h-[90%] w-[90%]'/>
                            </div>
                            <div className='h-[95%] w-[12%] bg-slate-600/30  ml-5 flex justify-center items-center rounded-md'>
                                <img src={tailwind} alt="" className='h-[90%] w-[90%]' />
                            </div>

                        </div>
                       

                    </div>

                    <div className="h-[27rem] sm:w-[18rem] md:w-[20rem] lg:w-[22rem] bg-slate-900 mt-3 rounded-lg flex flex-col items-center">
                        <img src={todo} alt="" className='h-[12rem] w-[90%] mt-2 rounded-md object-fill'/>
                        <div className='h-[2.5rem] w-[90%] flex justify-between items-center text-white/90 mt-2'>
                            <p className='text-[1.2em] font-semibold'>To-Do List App </p>

                            <p>
                            <a href=""><i className="fa-brands fa-github mr-7 text-[1.5em]"></i></a>
                            <a href=""><i className="fa-solid fa-globe mr-3 text-[1.5em]"></i></a>
                            </p>
                        </div>
                         <p className='w-[90%] text-white/80 font-semibold pt-2'>
                            To-Do List App built with React allows users to add, edit, and delete tasks. It features a clean UI and efficient state management.
                        </p>
                         <div className='w-[90%] h-[2.3rem] mt-2 flex'>

                            <div className='h-[95%] w-[12%] bg-slate-600/30 flex justify-center items-center rounded-md'>
                                <img src={react} alt="" className='h-[90%] w-[90%]'/>
                            </div>
                            <div className='h-[95%] w-[12%] bg-slate-600/30  ml-5 flex justify-center items-center rounded-md'>
                                <img src={tailwind} alt="" className='h-[90%] w-[90%]' />
                            </div>

                        </div>
                    </div>
                    <div className="h-[27rem] sm:w-[18rem] md:w-[20rem] lg:w-[22rem] bg-slate-900 mt-3 rounded-lg flex flex-col items-center">
                        <img src={todo} alt="" className='h-[12rem] w-[90%] mt-2 rounded-md object-fill'/>
                        <div className='h-[2.5rem] w-[90%] flex justify-between items-center text-white/90 mt-2'>
                            <p className='text-[1.2em] font-semibold'>Portfolio </p>

                            <p>
                            <a href=""><i className="fa-brands fa-github mr-7 text-[1.5em]"></i></a>
                            <a href=""><i className="fa-solid fa-globe mr-3 text-[1.5em]"></i></a>
                            </p>
                        </div>
                         <p className='w-[90%] text-white/80 font-semibold pt-2'>
                            A personal portfolio website showcasing projects, skills, blogs, and contact section with responsive design and modern UI/UX styling.
                        </p>
                         <div className='w-[90%] h-[2.3rem] mt-2 flex'>

                            <div className='h-[95%] w-[12%] bg-slate-600/30 flex justify-center items-center rounded-md'>
                                <img src={react} alt="" className='h-[90%] w-[90%]'/>
                            </div>
                            <div className='h-[95%] w-[12%] bg-slate-600/30  ml-5 flex justify-center items-center rounded-md'>
                                <img src={tailwind} alt="" className='h-[90%] w-[90%]' />
                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
        </>
    )
}
export default Project