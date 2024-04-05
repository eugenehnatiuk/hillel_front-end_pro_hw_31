import React from 'react';
import './contacts.scss';

const Contacts = () => {
  return (
    <section className="contacts__section container">
      <p className="contacts__title">Contacts</p>
      <div className="contacts__container">
        <div className="contacts__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2309684125357!2d30.53013007605957!3d50.43679838834736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf07295b8e39%3A0x17b2112e2dc0e7a!2z0YPQuy4g0JzQtdGH0L3QuNC60L7QstCwLCAxNC8xLCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1712230749011!5m2!1sru!2sua"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </div>

        <div className="contacts__info">
          <ul className="contacts__list">
            <li className="contacts__list-item">
              <a className="contacts__phone" href="tel: +308001234567">
                0800 123 45 67
              </a>
            </li>
            <li className="contacts__list-item">
              <p className="contacts__adress">Kyiv, Mechnikova str., 14/1</p>
            </li>
            <li className="contacts__list-item">
              <a className="contacts__email" href="mailto:example@example.com">
                0800 123 45 67
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
