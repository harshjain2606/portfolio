import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

function Skills() {
  return (
   
    <section id="skills">
      <span className="skillTittle">What I Do </span>
      <span className="skillDesc">
        I am skilled and passionate web designer with experience  in creating visually appealing  and user-friendly
        wbsites. i have strong understanding of designs and a kee eye for detail. I am proficient in HTML ,CSS ,Javascript
        as well as begin software such as Adobe Phtoshop and illustrator
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign " className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p> This is a demo text, you can write your own here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="webDesign " className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website design</h2>
            <p>This demo text can be changed While making the production ready Website</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign}alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App design</h2>
            <p> You can write text related to Mobile App development</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
