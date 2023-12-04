import img10 from './img/thumbnail.webp';
import img2 from './img/fashion9.webp';
import img3 from './img/fashion7.webp';
import img4 from './img/fashion2.webp';
import img6 from './img/fashion10.webp';
import img5 from './img/fashion3.webp';
import Carousel from 'react-bootstrap/Carousel';



function Home(){
    return(
         
             
          <div>
           
            

       

       
            <Carousel data-bs-theme="dark">
              
              <Carousel.Item >
                <div className='d-flex'>
              <img style={{height:"80vh"}}
                  className="d-block w-50"
                  src={img10}
                  alt="First slide"
                />
                <img style={{height:"80vh"}}
                  className="d-block w-50"
                  src={img2}
                  alt="First slide"
                />
                </div>
                <Carousel.Caption>
                  <h5>Trending</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                
              </Carousel.Item>
              <Carousel.Item>
              <div className='d-flex'>
              <img style={{height:"80vh"}}
                  className="d-block w-50"
                  src={img3}
                  alt="First slide"
                />
                <img style={{height:"80vh"}}
                  className="d-block w-50"
                  src={img5}
                  alt="First slide"
                />
                </div>
                <Carousel.Caption>
                  <h5>Deligent</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className='d-flex'>
              <img style={{height:"80vh"}}
                  className="d-block w-50"
                  src={img6}
                  alt="First slide"
                />
                <img style={{height:"80vh"}}
                  className="d-block w-50"
                  src={img4}
                  alt="First slide"
                />
                </div>
                <Carousel.Caption>
                  <h5>Aesthetic</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          
        
            </div>
 

       
    );
}

export default Home;