import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio" id="portfolio">
        <div className="main-text">
          <span>What I will do for you</span>
          <h2>Latest Project</h2>
        </div>

        <div className="container">
          <div className="filter-buttons">
            <button className="btn" data-filter="all">All</button>
           
          </div>

          <div className="portfolio-gallery">
            <div className="port-box mix product">
              <div className="port-image">
                <Image src="/images--main/1.png" alt="Headphones" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>Headphones 🎧</h3>
                <p>
                  Beautiful headphone landing page using HTML, CSS, and JavaScript.
                  Dark interface.
                  With animations when scrolling.
                </p>
                <a href="https://responsive-headphones.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="port-box mix product">
              <div className="port-image">
                <Image src="/images--main/2.png" alt="Filmlane website" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>Filmlane website 🎥</h3>
                <p>
                  Filmlane is a fully responsive movie website page,
                  Responsive for all devices, built using HTML, CSS, and JavaScript.
                </p>
                <a href="https://responsive-movies-website-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="port-box mix inter">
              <div className="port-image">
                <Image src="/images--main/3.png" alt="Travel Website" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>Travel Website 🌊</h3>
                <p>
                  Travel website to the most beautiful beaches, using HTML, CSS & JavaScript.
                  Includes a dark and light mode.
                </p>
                <a href="https://responsive-travel-website-steel.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="port-box mix inter">
              <div className="port-image">
                <Image src="/images--main/4.png" alt="Gaming Website" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>Gaming Website 🎮</h3>
                <p>
                  GameX is a fully responsive eSports gaming website,
                  Responsive for all devices, built using HTML, CSS, and JavaScript.
                </p>
                <a href="https://gamex-master-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="port-box mix inter">
              <div className="port-image">
                <Image src="/images--main/5.png" alt="Fitness Website" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>Fitness Website 🏋🏻</h3>
                <p>
                  Fitlife is a fully responsive fitness website,
                  Responsive for all devices, build using HTML, CSS, and JavaScript.
                </p>
                <a href="https://fitness-website-one-bice.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="port-box mix web">
              <div className="port-image">
                <Image src="/images--main/6.png" alt="Covid-19 Website" width={600} height={400} />
              </div>
              <div className="port-content">
                <h3>Covid-19 😷</h3>
                <p>
                  COVID-19 is a fully responsive Corona website, Responsive for all devices, built using HTML,
                  CSS, and JavaScript.
                </p>
                <a href="https://covid-19-website-coral.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
