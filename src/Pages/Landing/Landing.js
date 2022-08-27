import React from 'react'
import Navbar from '../../Component/Navbar'
import './sass/styles.css';
import foodPic from '../../Component/Images/food.svg';
import playstore from '../../Component/Images/playStore.svg';
import applestore from '../../Component/Images/appleStore.svg';
import pasta from '../../Component/Images/pasta.svg';
import burger from '../../Component/Images/burger.svg';
import balls from '../../Component/Images/balls.svg';
import Footer from '../../Component/Footer';

const Landing = () => {
  const foods = [
    {id: 1, foodname: 'Stir fry Pasta', image: pasta, content:`Stir fry pasta yada yada yada  because of Sesan`},
    {id: 2, foodname:'Burger Meal', image: balls, content:"Stir fry pasta yada yada yada because of Sesan"},
    {id: 3, foodname:'Meat Balls', image: burger, content:"Stir fry pasta yada yada yada because of Sesan"},
  ]
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
        <div className='thirdSection'>
                {
                  foods && foods.map((food)=>
                 <div className='cards' key={food.id}>
                  <img src={food.image} alt='pasta'/>
                  <h2>{food.foodname}</h2>
                  <p>Stir fry pasta yada yada yada <br/> because of Sesan</p>

                 </div> 
                  )
                }
        </div>
        <div className='fourthSection'>
          <div>
            <h1>Get notified when we update!</h1>
            <p>Get notified when we add new items to our specials menu, <br/> update our price list of have promos!</p>

          </div>
          <div>
            <span><input type="text" placeholder='gregphillips@gmail.com'/> <button className='notifyBtn'>Get notified</button></span>
          </div>
        </div>
    

                <Footer/>
    </div>
  )
}

export default Landing