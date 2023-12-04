import demo from './style.module.css';
import button from '/node_modules/react-bootstrap/Button';
function Contact() {
    return (
        <div className='m-5'>
            <h1 className='text-center'>Contact Us</h1>
            <p className='text-center lead'>Get in touch and let us know how we can we help.Have a question but aren't 
                who to contact?Get in touch and a member of our team will reach out to you. 
            </p>
            <form className='m-5'>
                <div className='d-flex'>
                    <input type='text' placeholder='Name' className='form-control m-3'/>
                    <input type='text' placeholder='Email' className='form-control m-3'/>
                                  
                </div>
                <div>
                <input type='number' placeholder='Phone Number' className='form-control mb-3'/>

                </div>

                <div>
                <input type='text' placeholder='Subject' className='form-control mb-3'/>

                </div>

                <div>
                    <textarea  rows={5} col={5} placeholder='Message' className='form-control mb-3'/>
                </div>

            </form>
            <div className='text-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230696.7671387197!2d68.20242814753908!3d25.383480067539708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d444f3c3%3A0xc00bbc183d41e285!2sHyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1701624173771!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
                         </div>
    );
}

export default Contact;