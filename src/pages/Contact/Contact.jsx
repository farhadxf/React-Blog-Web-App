import './Contact.scss';
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-form-container'>
        <div className='contact-form'>
          <h2>
            Contact us
            <hr />
          </h2>
          <form>
            <input type='text' required placeholder='Name' name='name' />
            <input type='email' required placeholder='Email' name='email' />
            <textarea rows={8} required placeholder='Your message' name='message' />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
