import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="containter about mt-3 pt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-5 order-sm-first order-first mb-3 text-center">
            <img src="./images/smaller.jpg" alt="Matt Goldhammer" className="img-thumbnail m-auto" style={{maxHeight:"350px"}}/>
          </div>
          <div className="col-md-7 order-lg-first order-xl-first order-md-first text-center " style={{width:"750px"}}>
           <p>
               Welcome to my porfolio! My name is Matt, I'm currently a student enrolled in University of Arizona's web development bootcamp. Please take a look around and be sure to check out the projects I've been working. Feel free to drop me a message or reach out on any of my contact links, I'd love to connect.
           </p>
          </div>
        </div>
      </div>
    </div>
  );
}