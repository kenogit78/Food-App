import React from 'react'
import Navbar from '../../Component/Navbar'
import './sass/styles.css';
import foodPic from '../../Component/Images/food.svg';
import playstore from '../../Component/Images/playStore.svg';
import applestore from '../../Component/Images/appleStore.svg';

const Landing = () => {
  return (
    <div className='landingPage'>
        <Navbar/>
        <div className='firstSection'> 
            <div>
                <h1>Order <span className='emphasis'> food </span> anytime, <br/> anywhere</h1>
                <p>Browse from our list of specials to place your order and have food  <br/> delivered to you in no time. Affordable, tasty and fast!</p>

                <span className='store'>
                  <a href='#'><img className='storeImg' src={playstore} alt='playstore'/></a>
                  <a href='#'><img  className='storeImg' src={applestore} alt='applestore'/></a>
                </span>

            </div>
            <div>
                <img src={foodPic} alt='food'/>
            </div>
        </div>
        <div className='secondSection'>
          <h2>Special Meals of the day!</h2>
          <p> Check our sepecials of the day and get discounts on all our meals <br/> and swift delivery to what ever location within Ilorin.</p>
        </div>


    </div>
  )
}

export default Landing