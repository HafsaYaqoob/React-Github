import demo from './style.module.css';
import img10 from './img/fashion10.webp';
import img2 from './img/fashion3.webp';
import img3 from './img/fashion2.webp';
import img4 from './img/fashion12.webp';
import img5 from './img/fashion6.webp';
import img6 from './img/fashion7.webp';
import img7 from './img/fashion13.webp';
import img8 from './img/fashion9.webp';
import img9 from './img/fashion4.webp';









import{Link} from 'react-router-dom';


function Content() {
     let style={
    }
    return (
        <div className='m-5'>
            <h1 className='text-center'>About</h1>
            <p className='lead text-center'> Best product of this month</p>
            {/* first product  */}
            <div className='d-lg-flex d-block justify-content-around m-5'>
            <div className="card m-2" style={style} >
  <img src={img10} className="card-img-top " alt="..."/>
  <div className={demo.card}>
  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <Link to="/" class="btn btn-light">Add to cart</Link>
  </div>
  </div>
  </div>
            {/* second product  */}
  
            <div className="card m-2" style={style} >
  <img src={img2} class="card-img-top" alt="..."/>
  <div className={demo.card}>

  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/" class="btn btn-light">Add to cart</Link>

  </div>
</div>
</div>
</div>

{/* second row  */}
<div className='d-lg-flex d-block justify-content-around m-5'>
            <div className="card m-2" style={style} >
  <img src={img4} className="card-img-top " alt="..."/>
  <div className={demo.card}>
  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <Link to="/" class="btn btn-light">Add to cart</Link>
  </div>
  </div>
  </div>
            {/* second product  */}
  
            <div className="card m-2" style={style} >
  <img src={img7} class="card-img-top" alt="..."/>
  <div className={demo.card}>

  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/" class="btn btn-light">Add to cart</Link>

  </div>
</div>
</div>
</div>



{/* third row  */}
<div className='d-lg-flex d-block  justify-content-around m-5'>
            {/* fifth product  */}

            <div className="card m-2" style={style} >
  <img src={img5} class="card-img-top" alt="..."/>
  <div className={demo.card}>

  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/" class="btn btn-light">Add to cart</Link>

  </div>
  </div>
  </div>
            {/* six product  */}
   
            <div className="card m-2" style={style} >
  <img src={img6} class="card-img-top" alt="..."/>
  <div className={demo.card}>

  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <Link to="/" class="btn btn-light">Add to cart</Link>

  </div>
</div>
</div>
</div>
<div className='d-lg-flex  d-block justify-content-around m-5'>


            {/* seven product  */}


            <div className="card m-2" style={style} >
  <img src={img7} class="card-img-top" alt="..."/>
  <div className={demo.card}>

  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <Link to="/" class="btn btn-light">Add to cart</Link>

  </div>
</div>
</div>

<div className="card m-2" style={style} >
  <img src={img4} class="card-img-top" alt="..."/>
  <div className={demo.card}>
  
  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <Link to="/" class="btn btn-light">Add to cart</Link>

  </div>
</div>
</div>
</div>

<div className='d-lg-flex justify-content-around m-5'>


            {/* ninth product */}


            <div className="card m-2" style={style} >
  <img src={img8} class="card-img-top" alt="..."/>
  <div className={demo.card}>

  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <Link to="/" class="btn btn-light">Add to cart</Link>

  </div>
</div>
</div>

<div className="card m-2" style={style} >
  <img src={img9} class="card-img-top" alt="..."/>
  <div className={demo.card}>

  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <Link to="/" class="btn btn-light">Add to cart</Link>

  </div>
</div>
</div>

</div>
                    </div>
                    
    );
}

export default Content;