import {React, useRef} from 'react'
import emailjs from '@emailjs/browser';

const Email = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5sbf44b', 'template_l3svi1m', form.current, 'ZwXaVqEA9ODLa2E5B')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

  return (
    <div className='min-h-[90vh] text-center flex justify-center'>

    <div className='mt-20 mb-20 bg-gray-300 flex  p-5'>
   
        <form ref={form} onSubmit={sendEmail}>
            <h1 className='text-lg'>contact us</h1>
            <input className='mt-3' type='text' name='user_name' placeholder='Full Name' required/><br/>
            <input className='mt-3' type='email' name='user_email' placeholder='Email' required/><br />
            <input className='mt-3' type='text' name='subject' placeholder='Subject' required/><br />
            <textarea className='mt-3' name='message' rows='10' cols='30'></textarea><br />
            <button type='submit' className='bg-blue-500 mt-2 text-white ml-2 rounded px-4 py-1'>Send Message</button>
        </form>
    </div>
    </div>
  )
}

export default Email
