import React from 'react';
import './ProgramsAndInitiatives.css';

const ProgramsAndInitiatives = () => {
  return (
    <div className="programs-container">
      <h1 className="programs-title">Programs & Initiatives</h1>
      <p className="programs-intro">
        At Able Hearts Foundation, we are dedicated to creating meaningful and lasting change. Explore our key programs and initiatives aimed at empowering marginalized communities.
      </p>

      <section className="program">
        <h2 className="program-title">Able Hearts Garden</h2>
        <div className="program-content">
          <img
            className="program-image"
            src="/src/assets/garden.jpg"
            alt="Able Hearts Garden"
          />
          <p className="program-description">
            In 2020, we launched the "Able Hearts Garden" at the Lephoi Centre for the Visually Impaired. This sustainable initiative provides therapeutic activities, teaches self-sufficiency, and enhances the environment. The garden is a symbol of growth, confidence, and creativity for the children.
          </p>
        </div>
      </section>

      <section className="program">
        <h2 className="program-title">Dynamic Talent Show</h2>
        <div className="program-content">
          <img
            className="program-image"
            src="/src/assets/talentshow.jpeg"
            alt="Dynamic Talent Show"
          />
          <p className="program-description">
            Since 2018, our annual Talent Show has empowered children with disabilities to showcase their artistic talents. This event fosters confidence and self-expression, while also providing essential donations like clothing and food.
          </p>
        </div>
      </section>

      <section className="program">
        <h2 className="program-title">Mochudi Resource Center Visits</h2>
        <div className="program-content">
          <img
            className="program-image"
            src="/src/assets/mochud.jpg"
            alt="Mochudi Resource Center Visits"
          />
          <p className="program-description">
            Our visits to the Mochudi Resource Center in 2020 and 2021 included fun days filled with games and empowering messages, as well as donations of essential items. These visits build lasting relationships and support for children with disabilities.
          </p>
        </div>
      </section>

      <section className="program">
        <h2 className="program-title">Tsogang Trust Support</h2>
        <div className="program-content">
          <img
            className="program-image"
            src="/src/assets/tsogangtrust.jpg"
            alt="Tsogang Trust Support"
          />
          <p className="program-description">
            In 2022, we visited Tsogang Trust twice, providing food, clothing, toys, and school supplies for children impacted by HIV/AIDS. These efforts aimed to address both immediate and educational needs.
          </p>
        </div>
      </section>

      <section className="program">
        <h2 className="program-title">COVID-19 Food Hampers</h2>
        <div className="program-content">
          <img
            className="program-image"
            src="/src/assets/covid.jpg"
            alt="COVID-19 Food Hampers"
          />
          <p className="program-description">
            During the pandemic, we distributed 40 food hampers to elderly residents of Gerald Estates, partnering with MP Ignatius Moswaane to provide relief during a challenging time.
          </p>
        </div>
      </section>

      <section className="program">
        <h2 className="program-title">Lavender High Tea</h2>
        <div className="program-content">
          <img
            className="program-image"
            src="/src/assets/lavender.jpg"
            alt="Lavender High Tea"
          />
          <p className="program-description">
            Our inaugural Lavender High Tea in 2020 brought women together for empowerment and growth. Featuring a panel of accomplished women, the event fostered networking, mentorship, and inspiration.
          </p>
        </div>
      </section>

      <section className="program">
        <h2 className="program-title">School Donations</h2>
        <div className="program-content">
        <img
            className="program-image"
            src="/src/assets/kedia.jpeg"
            alt="Lavender High Tea"
          />
          <img
            className="program-image"
            src="/src/assets/shakawedono.jpg"
            alt="Lavender High Tea"
          />
          <p className="program-description">
            From Shakawe JSS in 2021 to Kedia Primary School in 2024, our donations of uniforms, shoes, and toiletries aim to remove barriers to education and promote dignity for students in need.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProgramsAndInitiatives;
