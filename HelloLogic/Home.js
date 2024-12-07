import React from 'react'
import banner from './assets/banner.jpg';

const Home = () => {
  return (
    <section className="clip flex">
        <div className="clp1">
        <img src={banner} alt="banner" />
         </div>
       <div className="clp2 flex">
                <h1> WELCOME TO HELLO LOGIC ! </h1>
            </div>
        </section>
  )
}

export default Home;