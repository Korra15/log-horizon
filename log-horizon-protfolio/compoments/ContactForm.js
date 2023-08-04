
export default function ContactForm() {
    return (
      <>
        <form style={{paddingTop: "16px",paddingBottom: "16px",marginTop: "16px",borderTop: "1px solid black",display: "flex",flexDirection: "column",gap: "20px"}}>
        <div>
          <label htmlFor="fullname" style={{ fontWeight: 'bold' }}>Full Name</label>
          <input type="text"id="fullname"placeholder="John Doe"/>
        </div>

        <div>
          <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
          <input
           
            type="text"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>
        <div>
        <label htmlFor="phone" style={{ fontWeight: 'bold' }}>Phone Number</label>
        <input
          type="tel" 
          id="phone"
          name="phone"
          placeholder="123-456-7890"
        />
      </div>

        <div>
          <label htmlFor="message" style={{ fontWeight: 'bold' }}>Your Message</label>
          <textarea
           
            style={{height: "100px"}}
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <div>
        <label htmlFor="socialMedia" style={{ fontWeight: 'bold' }}>Social Media Links</label>
        <input
          type="text"
          id="socialMedia"
          name="socialMedia"
          placeholder="https://twitter.com/example"
        />
      </div>

      <button className="sendButton" style={{ color: "green", border: "2px solid green" }} type="submit">
  Send
</button>
      </form>

      <div className="bg-slate-100 flex flex-col">
                <div style={{color: "red",px: 5,py: 2}} >
              
            </div>
        
      </div>
    </>
  );
}