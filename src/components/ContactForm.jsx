import React, {useRef} from 'react'
import emailjs from "@emailjs/browser"
import toast from 'react-hot-toast';

function ContactForm() {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_rphnb8u', 'template_dzpf8mk', form.current, {
            publicKey: '-C5fM4sCc9DIqk5oY',
        })
        .then(
            () => {
                e.target.reset();
                return toast.success("Email Sent Successfully!!!")
            },
            (error) => {
                toast.error("Couldn't Send Message")
            },
        );
    }

  return (
    <div className='flex items-center justify-center flex-col lg:mb-12 mb-8'>
        <h1 className='lg:text-3xl text-xl lg:mb-8 mb-4'> Contact Me</h1>
        <div className='bg-black justify-start lg:px-32 lg:py-10 px-12 py-6 rounded-xl'>
        <form ref={form} className='flex items-center justify-center flex-col' onSubmit={handleSubmit}>
                <div className='flex flex-col lg:text-xl text-base mb-4'>
                    <div>
                        <label className='block mb-2' >Name: </label>
                        <input className='rounded-lg mb-2 lg:px-10 px-4 py-2' type="text" name='from_name' placeholder='Enter name' />
                    </div>
                    <div>
                        <label className='block mb-2' >Email: </label>
                        <input className='rounded-lg mb-2 lg:px-10 px-4 py-2' type="text" name='from_email' placeholder='Enter Email' />
                    </div>
                    <div>
                        <label className='block mb-2' >Message: </label>
                        <textarea className='rounded-lg mb-2 lg:px-12 px-5 py-2' name="message" id="" placeholder='Enter Message'></textarea>
                    </div>
                </div>
            
            <button className='btn btn-outline lg:px-4 p-2'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default ContactForm;