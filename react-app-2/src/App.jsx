import React from "react";
import ProfileCard from "./ProfileCard.jsx";
export default function App() {
  return (
    <div>
      <div>
        <h1>Personal Digital Experience</h1>
        <ProfileCard title='Alexa' handle='@alexa99' />
        <ProfileCard title='Cortana' handle='@cortana32' />
        <ProfileCard title='Siri' handle='@siri01' />
      </div>
    </div>
  );
}
