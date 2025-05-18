import './education.css'

function Education(){
    return(
        <>
            <div className=" bg-slate-900" id='education'>
                <p className="text-indigo-400 text-[2.5em] font-semibold text-center pt-16">Education</p>

                <div className=" flex flex-col items-center">
                    
                        
                        <div className="w-[75%] mt-10 mb-10">
                            {/* first div */}
                        <div className=" pt-5 pb-5 w-[100%] border border-black/5  bg-slate-800 rounded-lg flex flex-col justify-center r hover:border-blue-500 transition-all duration-300">
                            <div className="h-  flex sm:items-center pl-6 text-white">
                                <div className="h-[3rem]  sm:w-[3rem] mt-2 sm:mt-0 bg-blue-700 rounded-md flex justify-center items-center" id="fisrtdiv">
                                    <i className="fa-solid fa-graduation-cap text-[1.5em]"></i>
                                </div>
                                <div className="pl-5 pr-2">
                                    <p className="text-[1.3em] font-semibold">B.Tech in Computer Science Engineering</p>
                                    <p className="text-blue-500 font-semibold text-[1.05em] mt-2 sm:mt-0">Dr. Kedar Nath Modi University, Rajasthan</p>
                                </div>
                            </div>
                            <div className=" mt-3 sm:flex pt-1 pl-20 sm:pl-24 text-white/50">
                                <p><i className="fa-solid fa-calendar-days"></i><span className="pl-2">2022 - 2026</span></p>
                                <p className="sm:pl-6 mt-3 sm:mt-0"><i className="fa-solid fa-award"></i><span className="pl-2">Score: 80%</span></p>
                            </div>
                        </div> 
                         
                        <div className="h-[3rem] bg-blue-600 w-[.2rem] ml-[13%] sm:ml-16"></div> 
                        {/*second div  */}                    
                         <div className=" pt-5 pb-5 w-[100%] border border-black/5  bg-slate-800 rounded-lg flex flex-col justify-center h hover:border-blue-500 transition-all duration-300 ">
                            <div className="h-  flex sm:items-center pl-6 text-white">
                                <div className="h-[3rem]   sm:w-[3rem] mt-2 sm:mt-0 bg-blue-700 rounded-md flex justify-center items-center" id='seconddiv'>
                                    <i className="fa-solid fa-graduation-cap text-[1.5em]"></i>
                                </div>
                                <div className="pl-5 pr-2">
                                    <p className="text-[1.3em] font-semibold">Senior Secondary (XII)</p>
                                    <p className="text-blue-500 font-semibold text-[1.05em] mt-2 sm:mt-">Sri Ram Inter college,   Baraut</p>
                                </div>
                            </div>
                            <div className=" mt-3 sm:flex pt-1 pl-20 sm:pl-24 text-white/50">
                                <p><i className="fa-solid fa-calendar-days"></i><span className="pl-2">2021 - 2022</span></p>
                                <p className="sm:pl-6 mt-3 sm:mt-0"><i className="fa-solid fa-award"></i><span className="pl-2">Score: 77%</span></p>
                            </div>
                         </div>
                         <div className="h-[3rem] bg-blue-600 w-[.2rem] ml-[13%] sm:ml-16"></div>
                         {/* third div */}
                         <div className="pt-5 pb-5 w-[100%] border-[1px] border-white/5   bg-slate-800 rounded-lg flex flex-col justify-center  transition-all duration-300 hover:border-blue-500">
                            <div className="h-  flex sm:items-center pl-6 text-white">
                                <div className="h-[3rem]  w-[4rem] sm:w-[3rem] mt-2 sm:mt-0 bg-blue-700 rounded-md flex justify-center items-center" id='thirddiv'>
                                    <i className="fa-solid fa-graduation-cap text-[1.5em]"></i>
                                </div>
                                <div className="pl-5 pr-2">
                                    <p className="text-[1.3em] font-semibold">Secondary (X)</p>
                                    <p className="text-blue-500 font-semibold text-[1.05em] mt-2 sm:mt-">B.S.S Inter college,   Chhaprauli</p>
                                </div>
                            </div>
                            <div className=" mt-3 sm:flex pt-1 pl-20 sm:pl-24 text-white/50">
                                <p><i className="fa-solid fa-calendar-days"></i><span className="pl-2">2019 - 2020</span></p>
                                <p className="sm:pl-6 mt-3 sm:mt-0"><i className="fa-solid fa-award"></i><span className="pl-2">Score: 82%</span></p>
                            </div>
                         </div>
                         
                        </div>
                        
                </div>
            </div>
        </>
    )
}
export default Education

//  <div className="h-[10rem] w-[75%]  mt-10 bg-slate-800 rounded-lg"></div>
//                         <div className="w-[rem] h-[5rem] bg-sky-500 border border-red-400">

//                         </div>
//                         <div className="h-[10rem] w-[75%]  mt-10 bg-slate-800 rounded-lg"></div>
//                         <div className="h-[10rem] w-[75%]  mt-10 mb-10 bg-slate-800 rounded-lg"></div>