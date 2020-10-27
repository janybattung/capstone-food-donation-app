import React from 'react';
import '../App.css';
import './AboutSection.css';

function AboutSection() {
  return (
    <div className='about-container'>
      <div className="left">
        <img className='img-about' src="/images/helping-hand.jpg" alt="Helping hand"/>
      </div>
      <div className="right">
        <h1>Who We Are</h1>
        <p>There are a lot of people all over the world barely affording a meal every day. Since the world population is growing, there are more and more mouths to feed, and we just can’t afford wasting any resources. The best thing that we can do is to immediately avoid situations where we throw food away and instead we donate it. That’s where BEAT HUNGER comes into play.
        Our focus with BEAT HUNGER is to help those people in dire need of help gain access to all the food they need. We are heavily committed to quality and value, and we always guarantee that you will feel great knowing the food you donated actually goes to people that really need it.
        Hotels, food stores, restaurants and even regular people throw a lot of food every day. We just can’t afford doing this to our planet, since creating and preparing that food cost a lot of resources. Plus, the demand for food is very high all the time, so we really need to figure out the right approach and tackle this as quickly as possible. 
        If you donate all the unwanted, extra food to BEAT HUNGER, we will make sure that people who actually need the food will have access to it as quickly as possible. It’s crucial to do that and ensure that everyone who is actually needing food will enjoy it. Nothing is impossible, this opportunity is great and you can finally donate any type of food you want as quickly as possible.
        Charities are always looking for food that they can donate to people suffering from hunger. Thankfully, we can help you donate all the food you have no use for to charities from all over the country. Even the smallest donation will help people dealing with hunger, so don’t hesitate and avail this opportunity today!
        </p>
      </div>
    </div>
    
  );
}

export default AboutSection;