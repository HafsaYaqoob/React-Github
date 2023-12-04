 import demo from './style.module.css';
 import {useState} from 'react';



 function Footer(){
  
    
     return(
         <div className='d-flex flex-column m-5 bg-dark text-light p-3 '>
             <div className='d-lg-flex justify-content-around d-block'>      
      <div >
     <h6 >Fashion</h6>
     <p className=''>CB Karachi 198 street,<br/>2356B Pakistan </p>
     <h6 className='text-decoration-underline'>Phone</h6>
     <p>+92 111 678 9090 </p>
     <h6 className='text-decoration-underline'>Email</h6>
      <p>libaas@gmail.com</p>
      </div>
      <div>
 {/* section icons  */}
 <h6 className='text-decoration-underline'>QUICKSHOP</h6>
 <h6>Fashion</h6>
 <h6>Men</h6>
 <h6>Furniture</h6>
 <h6>Home Decor</h6>
 <h6>Shoes</h6>
   </div>
   <div>
       <h6 className='text-decoration-underline'>INFORMATION</h6>
       <ul>

      <li> <a>About us</a></li>
       <li><a>Contact us</a></li>
       <li><a>Career</a></li>
       <li><a>My Account</a></li>
       <li><a>Orders and Return</a></li>
       </ul>
       </div>
   </div>

   {/* right side  */}
   <div className=' d-flex justify-content-start m-3'>
  <div>

 <h5>NEWSLETTER</h5>
<p className=''>Enter your email to recieve daily news and get 20% off coupon for all items.</p> 
 <input class="form-control me-2" type="search" placeholder="Email address" aria-label="Search"/>
       <button class="btn btn-outline-light m-3" type="submit">SUBSCRIBE</button>
     </div>
     
     </div>
       
      
       


  
      
       </div>
     );
 }
 export default Footer;