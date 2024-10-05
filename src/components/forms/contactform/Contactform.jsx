import React from 'react'
import './Contactform.css'
import Button from '../../../shared/button/Button'
import { MdAssignmentInd } from "react-icons/md";

function Contactform() {
  return (
            <>
                <h1>CONTACT FORM</h1>
                <div className="contact-form">
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required placeholder='your name' />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required placeholder='your email' />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required rows="4" placeholder='please write somethings'></textarea>

                        {/* <button type="submit">Submit</button> */}
                        <Button text="SUBMIT" myicons= {<MdAssignmentInd />} />
                    </form>
                </div>
            </>
  )
}

export default Contactform