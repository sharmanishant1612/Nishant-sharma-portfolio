import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
function Contact(){

         const form = useRef();

        const sendEmail = (e) => {
        e.preventDefault();

    emailjs
      .sendForm('service_j8521qp', 'template_7dtocut', form.current, {
        publicKey: 'ptRnv2EydHFLw9kXt',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          Swal.fire({
          title: "Thank you for contact us!",
          text: "Form submitted successfully",
          icon: "success"
        });
        },
        (error) => {
          // console.log('FAILED...', error.text);
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
        },
      );
  };  


    return(
        <>
         <div className="md:h- dark:bg-slate-800 " id='contact'>
                <p className="text-[2.5em] font-semibold text-indigo-700 dark:text-indigo-400 text-center pt-16">Get In Touch</p>

                <div className=" flex justify-center pb-8 md:pb-16">
                    
                    <div className=" md:h-[30rem] w-[90%] sm:w-[80%] flex flex-col md:flex-row md:justify-between ">
                        {/* first div */}
                         <div className="md:h-[28rem] md:w-[48%] bg-black/10 dark:bg-slate-900 rounded-lg mt-3 text-white pb-5 px-3 sm:px-0">
                            <p className="text-[1.5em] font-semibold pl-2 pt-5 sm:pl-7 text-black dark:text-white">Let's Connect</p>
                            <p className="pt-5 pl-2 sm:pl-7 pr-4 font-semibold text-black/70 dark:text-white/80 text-[1.02em]">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                            <p className="pl-2 pt-5  sm:pl-7 text-black/70 dark:text-white/70" id="mgl"><i className="fa-regular fa-envelope text-xl"></i><span className="pl-2 md:pl-2 lg:pl-4">sharmanishant08751@gmail.com</span></p>
                            <p className="pl-2 pt-2  sm:pl-7 text-black/70 dark:text-white/70" id="mgl"><i className="fa-brands fa-github text-xl"></i><span className="pl-2 md:pl-2 lg:pl-4">github.com/sharmanishant1612</span></p>
                            <p className="pl-2 pt-2  sm:pl-7 text-black/70 dark:text-white/70" id="mgl"><i className="fa-brands fa-linkedin-in text-xl"></i><span className="pl-2 md:pl-2 lg:pl-4">linkedin.com/in/nishant-sharma-a2b15027b/</span></p>
                        </div>
                        {/* second div */}
                        <div className="h-[29rem] md:h-[28rem] md:w-[48%] bg-black/10 dark:bg-slate-900 rounded-lg mt-7 md:mt-3 flex justify-center items-center mb-5">
                            <div className="h-[90%] w-[90%] text-black dark:text-white ">
                           <form action="" className="h-[100%]" ref={form} onSubmit={sendEmail}>
                             <p><label htmlFor="name" className="font-semibold">Name</label></p>
                            <div className="h-[10%] bg-white dark:bg-slate-700  rounded-md mt-1">
                                <i className="fa-regular fa-user text-[1.2em] pl-2 w-[10%] text-gray-600 dark:text-white/60"></i>
                                <input type="text" placeholder="Enter your name" id="name" className="h-[100%] w-[90%]   dark:bg-slate-700 outline-none md:pl-2 lg:pl-0 rounded-md px-3" name='from_name' required />
                            </div>

                              <p className="mt-6"><label htmlFor="email" className="font-semibold ">Email</label></p>
                            <div className="h-[10%] bg-white dark:bg-slate-700 rounded-md mt-1">
                                <i className="fa-regular fa-envelope text-[1.2em] pl-2 w-[10%] text-gray-600 dark:text-white/60"></i>
                                <input type="text" placeholder="Enter your email" id="email" className="h-[100%] w-[90%] dark:bg-slate-700 outline-none md:pl-2 lg:pl-0 rounded-md px-3" name='to_email' required/>
                            </div>

                            <p className="mt-6"><label htmlFor="message" className="font-semibold">Message</label></p>
                            <div className="h-[30%] bg-white dark:bg-slate-700 rounded-md mt-1 flex">
                                {/* <i className="fa-regular fa-envelope text-[1.2em] pl-2 w-[10%] text-white/60"></i> */}
                                <i className="fa-regular fa-comment text-[1.2em] pl-2 pt-4 w-[10%] text-gray-600 dark:text-white/60"></i>
                                {/* <input type="text" placeholder="Enter your email" id="email" className="h-[100%] w-[90%] bg-slate-700 outline-none md:pl-2 lg:pl-0 rounded-md " /> */}
                                <textarea name="message" placeholder="Enter your message" id="message" className="h-[100%] w-[90%] dark:bg-slate-700  md:pl-2 lg:pl-0 pt-3 pb-2 outline-none rounded-md px-3"  required></textarea>
                            </div>

                            <button className="bg-blue-700 text-white p-2 font-semibold rounded-lg mt-4 ml-3 ">Submit</button>
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