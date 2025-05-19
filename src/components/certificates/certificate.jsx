import { useEffect, useState } from 'react'
import './certificate.css'
import img1 from './certificate1.jpg'
import img2 from './certificate2.jpg'
import img3 from './certificate3.jpg'
function Certificate(){

    let [certificates,setcertificates] = useState([img1,img2,img3])
    let [index,setindex] = useState(0)

    let increase =()=>{
        let variable = index+1
        setindex(variable%certificates.length)
    }

    let decrease =()=>{
        if(index==0){
            setindex(certificates.length-1)
            return
        }
        let variable = index-1
        setindex(variable%certificates.length)
    }

    // useEffect(()=>{
    //     setTimeout(() => {
    //         let variable = index+1
    //       setindex(variable%certificates.length)
    //     }, 2000);
    // },[index])


    return(
        <>
            <div className=" bg-slate-800" id='certificates'>
                <p className="text-[2.5em] text-indigo-400 text-center pt-16">Certificate</p>
                <div className=" flex justify-center pb-10">
                    {/* inner div */}
                    <div className="h-[25rem]  sm:w-[55%]  flex justify-center gap-2 sm:gap-5 md:gap-10 items-center px-2" id='outerdiv'>
                            <div className="h-[2rem] w-[2rem] rounded-full bg-slate-500 flex justify-center items-center" onClick={decrease}>
                               <i className="fa-solid fa-arrow-left text-[1.4em]"></i>
                            </div>
                            <div className=" sm:h-[70%] sm:w-[70%] md:h-[75%] md:w-[65%] bg-slate-300 rounded-md" id="image">
                                <img src={certificates[index]} alt="" className='h-[100%] w-[100%] rounded-lg'/>
                            </div>
                            <div className="h-[2rem] w-[2rem] rounded-full bg-slate-500 flex justify-center items-center" onClick={increase}>
                                 <i className="fa-solid fa-arrow-right text-[1.4em]"></i>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Certificate

// h-[70%] w-[80%] 
// h-[70%] w-[80%] 