import React from "react";
import "./about.css";



const Tier3 = () => {
  return (

    <div>
      <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
          <div>


            <div>
              <img className="img-fluid" src="img/bong3.jpg" alt="" />
              <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="./img/bong1.jpg" alt="glass" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./img/ashCatch1.jpg" alt="Accoriess" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./img/bowl1.jpg" alt="swag" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>


          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black  text-center h-100 project" />
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h2 className="my-0 font-weight-normal">Teir 3</h2>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$175 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4" />
                    <li>or a single box $200</li>
                    <li>Shipped to you in discrete packaging.</li>
                      <li>Collectible box</li>
                        <li>Top shelf water pipe and accesorries</li>
                          <li>add teir 1 + teir 2 combo for only $60</li>
                          <li>4x Raffle entry for giveaways.</li>
                      <li>A $420 Value!</li>
                             

                            <button type="button" className="btn btn-md btn-block btn-primary"><a href="pages/login.html">
                              <h4 className="text-white"> Get started</h4>
                            </a></button>
                      </div>   
             </div> 
                        <hr className="d-none d-lg-block mb-0 mr-0"></hr>
                            </div>
        </div>
                  </div>
                </div>
              </div>

            </div> 


          

        


          );
 
        }
        
export default Tier3;