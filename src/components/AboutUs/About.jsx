import React from 'react';
import './about.scss';

const About = () => {
  return (
    <section className="about__section container">
      <div className="about__container">
        <h2 className="about__title">About Us</h2>

        <div className="about__restaurant">
          <div className="about__restaurant-image-box">
            <img
              src="https://www.fosters.com/gcdn/presto/2022/09/21/NFDD/78976890-31ad-4537-a9c6-24b9402ff04f-IMG_1557.JPG"
              alt="Pizza Spot Restaurant"
              className="about__restaurant-image"
              width={400}
              height={300}
            />
          </div>
          <div className="about__restaurant-description">
            <h3 className="about__restaurant-heading">Our Journey</h3>
            <p className="about__restaurant-text">
              Started as a small family-owned pizzeria, Pizza Spot has grown
              into a beloved establishment known for its delicious pizzas and
              warm hospitality. Since our humble beginnings, we have remained
              committed to using only the freshest ingredients and authentic
              recipes to create pizzas that delight the senses and bring people
              together.
            </p>
          </div>
        </div>

        {/* Блок с описанием команды и фото команды */}
        <div className="about__team">
          <div className="about__team-image-box">
            <img
              src="https://external-preview.redd.it/pizza-salvator%C3%A9-et-associ%C3%A9s-acqui%C3%A8rent-les-restos-topla-v0-2Qae0HFkH2UU5emQaQm61xkOleBUTQJxoy-FRI6w-7o.jpg?width=1080&crop=smart&auto=webp&s=2c41266e002a8bd3ee4db28252f2ed233f598d22"
              alt="Pizza Spot Team"
              className="about__team-image"
              width={400}
              height={300}
            />
          </div>
          <div className="about__team-description">
            <h3 className="about__team-heading">Our Team</h3>
            <p className="about__team-text">
              Our dedicated team consists of passionate individuals who share a
              love for great food and excellent service. From our experienced
              chefs who craft each pizza with precision to our friendly servers
              who ensure every customer feels welcome, every member of our team
              plays a vital role in creating a memorable dining experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
