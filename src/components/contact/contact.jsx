import './contact.css'
function Contact(){
    return(
        <>
         <div className="md:h-screen bg-slate-800">
                <p className="text-[2.5em] font-semibold text-indigo-400 text-center pt-16">Get In Touch</p>

                <div className=" flex justify-center">
                    
                    <div className=" md:h-[30rem] w-[90%] sm:w-[80%] flex flex-col md:flex-row md:justify-between">
                        {/* first div */}
                         <div className="md:h-[28rem] md:w-[48%] bg-slate-900 rounded-lg mt-3 text-white pb-5">
                            <p className="text-[1.5em] font-semibold pl-2 pt-5 sm:pl-7 text-white">Let's Connect</p>
                            <p className="pt-5 pl-2 sm:pl-7 pr-4 font-semibold text-white/80 text-[1.02em]">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                            <p className="pl-2 pt-5  sm:pl-7 text-white/70" id="mgl"><i className="fa-regular fa-envelope text-xl"></i><span className="pl-2 md:pl-2 sm:pl-4">sunnyvermaverma2005@gmail.com</span></p>
                            <p className="pl-2 pt-2  sm:pl-7 text-white/70" id="mgl"><i className="fa-brands fa-github text-xl"></i><span className="pl-2 md:pl-2 lg:pl-4">github.com/sunnyV0207</span></p>
                            <p className="pl-2 pt-2  sm:pl-7 text-white/70" id="mgl"><i className="fa-brands fa-linkedin-in text-xl"></i><span className="pl-2 md:pl-2 lg:pl-4">linkedin.com/in/sunny-verma-604519302</span></p>
                        </div>
                        {/* second div */}
                        <div className="h-[29rem] md:h-[28rem] md:w-[48%] bg-slate-900 rounded-lg mt-3 flex justify-center items-center mb-5">
                            <div className="h-[90%] w-[90%]  text-white ">
                           <form action="" className="h-[100%]">
                             <p><label htmlFor="name" className="font-semibold">Name</label></p>
                            <div className="h-[10%] bg-slate-700 rounded-md mt-1">
                                <i className="fa-regular fa-user text-[1.2em] pl-2 w-[10%] text-white/60"></i>
                                <input type="text" placeholder="Enter your name" id="name" className="h-[100%] w-[90%] bg-slate-700 outline-none md:pl-2 lg:pl-0 rounded-md " />
                            </div>

                              <p className="mt-6"><label htmlFor="email" className="font-semibold ">Email</label></p>
                            <div className="h-[10%] bg-slate-700 rounded-md mt-1">
                                <i className="fa-regular fa-envelope text-[1.2em] pl-2 w-[10%] text-white/60"></i>
                                <input type="text" placeholder="Enter your email" id="email" className="h-[100%] w-[90%] bg-slate-700 outline-none md:pl-2 lg:pl-0 rounded-md " />
                            </div>

                            <p className="mt-6"><label htmlFor="message" className="font-semibold">Message</label></p>
                            <div className="h-[30%] bg-slate-700 rounded-md mt-1 flex">
                                {/* <i className="fa-regular fa-envelope text-[1.2em] pl-2 w-[10%] text-white/60"></i> */}
                                <i class="fa-regular fa-comment text-[1.2em] pl-2 pt-4 w-[10%] text-white/60"></i>
                                {/* <input type="text" placeholder="Enter your email" id="email" className="h-[100%] w-[90%] bg-slate-700 outline-none md:pl-2 lg:pl-0 rounded-md " /> */}
                                <textarea name="" placeholder="Enter yoir message" id="message" className="h-[100%] w-[90%] bg-slate-700  md:pl-2 lg:pl-0 pt-3 pb-2 outline-none rounded-md"></textarea>
                            </div>

                            <button className="bg-blue-700  p-2 font-semibold rounded-lg mt-4 ml-3 ">Submit</button>
                           </form>

                            </div>
                        </div> 
                    </div>
                       
                </div>
         </div>
        </>
    )
}
export default Contact