import "bulma/css/bulma.css";
import React from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from "../images/alexa.png";
import CortanaImage from "../images/cortana.png";
import SiriImage from "../images/siri.png";

export default function App() {
  return (
    <div>
      <div>
        <section class='hero is-primary'>
          <div class='hero-body'>
            <p class='title'>Personal Digital Experience</p>
          </div>
        </section>
        <div className='container'>
          <section className='section'>
            <div className='columns'>
              <div className='column is-4'>
                <ProfileCard
                  title='Alexa'
                  handle='@alexa99'
                  image={AlexaImage}
                  description='Axela is made by Amazon and helps you in buying thing from its website.'
                />
              </div>
              <div className='column is-4'>
                <ProfileCard
                  title='Cortana'
                  handle='@cortana32'
                  image={CortanaImage}
                  description='Contana is made by Microsoft and helps you with windows funtionalities and soon to be replace by copilot.'
                />
              </div>
              <div className='column is-4'>
                <ProfileCard
                  title='Siri'
                  handle='@siri01'
                  image={SiriImage}
                  description='Siri is made by Apple and helps you with ios and soonto to be getting a big "offline AI" update.'
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
