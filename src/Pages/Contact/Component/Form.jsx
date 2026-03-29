import React from 'react'

const Form = () => {
    return (
        <>
            <h1 className='Heading'>Contact Us</h1>
           <section>
             <form>
                <div className='field'>
                    <p>Name</p>
                    <input type="text" placeholder='Enter your name' required />
                </div>
                <div className='field'>
                    <p>Email</p>
                    <input type="email" placeholder='Enter your email' required />
                </div>
                <div className='field'>
                    <p>Phone Number</p>
                    <input type="tel" placeholder='Enter your phone number' required />
                </div>
                <div className='field'>
                    <p>Message</p>
                    <textarea placeholder='Enter your message' required></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
           </section>
        </>
    )
}

export default Form