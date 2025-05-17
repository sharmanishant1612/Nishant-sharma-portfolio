import leetcode from './leetcode.png'

function Leetcode(){
    return(
        <>
            <div className="md:h-screen bg-slate-900" id='leetcode'>
                <p className="text-indigo-400 text-[2rem] sm:text-[2.5rem] font-semibold text-center pt-20">LeetCode Progress</p>

                <div className="w-[100%] mt-5 flex flex-col items-center md:flex-row md:justify-around ">
                        <div className="h-[15rem] w-[80%] sm:w-[65%] md:w-[40%] lg:w-[35%] mt-10 ">
                            <img src={leetcode} alt="" className='h-full w-full rounded-md' />
                        </div>
                        <div className="w-[80%] sm:w-[65%] md:w-[45%]  mt-10 mb-10 md:mb-0">
                            <p className="text-sky-500 text-[1.4rem] font-semibold text-center ">My Leetcode Journey</p>
                            <p className="text-white/80 text-[1.1rem] text-center pt-9 pl-2 pr-2">
                                Solving problems on Leetcode has helped me strengthen my Data Structures and Algorithms skills. I enjoy tackling challenges that push my problem-solving abilities and prepare me for technical interviews.
                            </p>
                            <p className="text-white/80  text-[1.1rem] text-center pt-6 pl-2 pr-2 pb-3">
                                I've completed hundreds of problems across a variety of topics, including arrays, trees, graphs, and dynamic programming. My goal is to keep improving and stay consistent in learning and solving new problems daily.
                            </p>
                            
                        </div>
                </div>

            </div>
        </>
    )
}
export default Leetcode