import Badge from './badge.gif'
import './badges.css'

function Badges(){
    return(
        <>
          <div className="sm:h-screen bg-slate-800" id='badges'>
                <p className="text-indigo-400 font-semibold pt-16 text-center text-[2.5rem]">Coding Badges</p>
                <div className="w-[100%] flex justify-center mt-6">
                    <div className="sm:h-[24rem] md:h-[26rem]  sm:w-[40%] md:w-[35%] lg:w-[30%] bg-slate-900 rounded-lg flex flex-col justify-center items-center" id='badge'>
                        <img src={Badge} alt="" className='h-[70%]' />
                        <p className='text-white/80 font-semibold'>50 Days Badge 2024</p>
                        <p className='text-white/60 font-semibold'>LeetCode</p>
                    </div>
                </div>
          </div>
        </>
    )
}
export default Badges