import React from "react";
import { useForm, ValidationError } from '@formspree/react';

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

function Contact() {
  const [state, handleSubmit] = useForm("mknaevwn");
  if (state.succeeded) {
    return <p>Thanks!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}



// todo: change classname here
// function Contact() {
//   return (
//     <section className='contact'>
//       <h1>Get In Touch</h1>
//       <div className='contactContainer'>
//         <p>Have your people call my people.</p>

//         <p>there should probably be a form here...and a back button</p>
//       </div>




//     </section>
//   );
// }

export default Contact;
