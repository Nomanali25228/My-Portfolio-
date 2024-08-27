import React from 'react'

const Contect = () => {
  return (
    <div>
         {/* <!-- contect section ....................................................--> */}

<section class="contant" id="contact">
    <div class="main-text">
        <span>ASK Me Question</span>
        <h2>Contect Me</h2>
    </div>
    <form action="#">
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="Your Email"/>
        <input type="text" placeholder="Your Adress"/>
        <input type="number" placeholder="Phone Number"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Massage"></textarea>
        <div class="btn-box formBtn">
            <button type="submit" class="btn">Send Massage</button>
        </div>
    </form>
</section>

    </div>
  )
}

export default Contect
