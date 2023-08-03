// pages/contact-us.js
import ContactForm from '../compoments/ContactForm';  // Adjust the path accordingly if the file is in a subfolder

import  '../pages/global.css';

export default function ContactUs() {
  return (
    <div style={{ padding: "4px", maxWidth: "768px", marginLeft: "auto", marginRight: "auto", backgroundColor: "#f8f5ee" }}>
      <h1 style={{ fontWeight: 700 }}>WE WOULD LOVE TO HEAR FROM YOU</h1>
      <br />
      <br />
      <p style={{ fontWeight: 'bold' }}>Please fill the form below</p>

      <ContactForm/>
    </div>
  );
}
