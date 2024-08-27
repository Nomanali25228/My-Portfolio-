import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div>
       <section id="about" class="about">
        <div class="img-about">
        <Image src="/images--main/about-me-pic2.png" alt="About Me" width={500} height={500} />
        <div class="info-about1">
                <span>3+</span>
                <p>Years of Experience</p>
            </div>
            <div class="info-about2">
                <span>50+</span>
                <p>Project Complete of Experience</p>
            </div>
            <div class="info-about3">
                <span>150+</span>
                <p>Happy Cionts </p>
            </div>
        </div>

        <div class="about-content">
            <span>Let me interduce myself</span>
            <h2>About Me</h2>
            <h3>A Journey of Crafting Excellence</h3>
            <p>Dedicated to web development, I excel in creating innovative and responsive digital solutions. My work
                combines creativity with precision, ensuring that every project not only meets but exceeds expectations.
                I thrive on turning complex challenges into seamless, user-friendly experiences, delivering quality that
                speaks for itself.</p>
            <div class="btn-box">
                <a href="#" class="btn">Read More!</a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
