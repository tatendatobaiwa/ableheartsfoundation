import React, { useState, useEffect } from 'react';
import './ProgramsAndInitiatives.css';

const blobImages = [
  '/src/assets/blob1.png',
  '/src/assets/blob3.png',
  '/src/assets/blob4.png',
  '/src/assets/blob2.png',
];

const ProgramsAndInitiatives = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="programs-container">
      {/* Background blobs */}
      <div className="background-blobs">
        {blobImages.map((blob, index) => (
          <img
            key={index}
            src={blob}
            alt={`Decorative blob ${index + 1}`}
            className={`blob blob-${index + 1}`}
          />
        ))}
      </div>

      <h1 className="programs-title">Programs & Initiatives</h1>
      <p className="programs-intro">
        At Able Hearts Foundation, we are dedicated to creating meaningful and lasting change.
        Explore our key programs and initiatives aimed at empowering marginalized communities.
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
            Launched in 2020 at the Lephoi Centre for the Visually Impaired, the "Able Hearts Garden" is a sustainable initiative that provides therapeutic activities, teaches self-sufficiency, and enhances the environment. It is a symbol of growth, confidence, and creativity for the children, encouraging them to nurture both their personal and environmental growth.
          </p>
        </div>
      </section>

      <section className="program">
        <h2 className="program-title">Dynamic Talent Show</h2>
        <div className="program-content">
          <p className="program-description">
            Since 2018, the annual Dynamic Talent Show has empowered children with disabilities to showcase their artistic talents. The event fosters confidence and self-expression, giving these children a platform to shine. Additionally, essential donations such as clothing and food are distributed during the show, addressing critical needs in the community.
          </p>
          <img
            className="program-image"
            src="/src/assets/talentshow.jpeg"
            alt="Dynamic Talent Show"
          />
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
            Our visits to the Mochudi Resource Center in 2020 and 2021 included fun-filled days of games, empowering messages, and donations of essential items. These visits aimed to build lasting relationships and provide continued support to children with disabilities, fostering a sense of belonging and joy.
          </p>
        </div>
      </section>

      <section className="program">
        <h2 className="program-title">Tsogang Trust Support</h2>
        <div className="program-content">
          <p className="program-description">
            In 2022, the Able Hearts Foundation extended support to children impacted by HIV/AIDS through visits to Tsogang Trust. These efforts included the provision of food, clothing, toys, and school supplies, addressing both immediate material needs and long-term educational challenges.
          </p>
          <img
            className="program-image"
            src="/src/assets/tsogangtrust.jpg"
            alt="Tsogang Trust Support"
          />
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
            During the COVID-19 pandemic, Able Hearts distributed 40 food hampers to elderly residents of Gerald Estates. Partnering with MP Ignatius Moswaane, this initiative provided essential relief during a challenging and uncertain time, demonstrating a quick and compassionate response to community needs.
          </p>
        </div>
      </section>

      <section className="program">
        <h2 className="program-title">Lavender High Tea</h2>
        <div className="program-content">
          <p className="program-description">
            Introduced in 2020, the Lavender High Tea event brought women together to foster empowerment and personal growth. Featuring a panel of accomplished women, the event provided opportunities for networking, mentorship, and inspiration, encouraging participants to pursue their goals with confidence.
          </p>
          <img
            className="program-image"
            src="/src/assets/lavender.jpg"
            alt="Lavender High Tea"
          />
        </div>
      </section>

      <section className="program">
        <h2 className="program-title">School Donations</h2>
        <div className="program-content">
          <img
            className="program-image"
            src="/src/assets/kedia.jpeg"
            alt="School Donations"
          />
          <p className="program-description">
            From Shakawe JSS in 2021 to Kedia Primary School in 2024, our school donation drives have provided uniforms, shoes, and toiletries to underprivileged students. These efforts aim to remove barriers to education, promote dignity, and empower students to focus on their learning journeys without material concerns.
          </p>
          <img
            className="program-image"
            src="/src/assets/shakawedono.jpg"
            alt="Shakawe JSS Donations"
          />
        </div>
      </section>

      {isScrolled && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default ProgramsAndInitiatives;
