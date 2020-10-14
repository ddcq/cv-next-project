import React from "react";
import Title from "../../title";
import AirFrance from "./air-france";
import CreditAgricole from "./credit-agricole";
import Evenium from "./evenium";
import Ge from "./ge";
import ResumeItem from "./resume-item";
import ResumeItems from "./resume-items";
import Skill from "./skill-percent";
import Texa from "./texa";

const Resume = () => (
  <div className="card-inner" id="resume-card">
    <div className="card-wrap">
      <div className="content resume">
        <Title>Resume</Title>
        <div className="row">
          <ResumeItems title="Expérience" icon="briefcase">
            <Evenium />
            <Texa />
            <Ge />
            <CreditAgricole />
            <AirFrance />
          </ResumeItems>
          <ResumeItems title="Formation" icon="university">
            <ResumeItem date="2017" name="Formation ReactJS, maîtriser le framework JavaScript de Facebook" company="Orsys Formation" />
            <ResumeItem date="2013" name="Certified Scrum Master" company="Scrum Alliance, Inc." />
            <ResumeItem date="2003" name="Teradata Basic, Physical implementation, SQL, Utilitaires" company="Teradata" />
            <ResumeItem date="2001" name="Scort IC Scripting" company="Scort" />
            <ResumeItem date="2001" name="DESS Génie des Logiciels Applicatifs" company="UPMC (Paris VI)" />
          </ResumeItems>
          <div className="clear"></div>
        </div>
      </div>

      <div className="content skills">
        <Title>My Skills</Title>
        <div className="row">
          <ResumeItems title="Général" icon="paint-brush">
            <ul className="skills-list">
              <Skill percent name="Agilité" percentage="80" />
              <Skill percent name="Testing (TDD, e2e, Unit Tests)" percentage="90" />
              <Skill percent name="Dev Ops" percentage="50" />
            </ul>
          </ResumeItems>
          <ResumeItems title="Langues" icon="flag">
            <ul className="skills-list dotted">
              <Skill percent name="Français" percentage="100" />
              <Skill percent name="Anglais (Oral)" percentage="40" />
              <Skill percent name="Anglais (Lire/écrire)" percentage="80" />
            </ul>
          </ResumeItems>
          <ResumeItems title="Coding" icon="code">
            <ul className="skills-list circles">
              <Skill circle name="React JS" percentage="90" />
              <Skill circle name="Java/JEE" percentage="75" />
              <Skill circle name="Angular JS" percentage="85" />
              <Skill circle name="ES6" percentage="90" />
            </ul>
          </ResumeItems>
          <ResumeItems title="Connaissances" icon="list">
            <ul className="skills-list list">
              <Skill name="Google Tag Manager" />
              <Skill name="Google Analytics" />
              <Skill name="Payment Services (Paypal, WeChat, SIPS, Stripe, Alipay)" />
            </ul>
          </ResumeItems>
          <div className="clear"></div>
        </div>
      </div>
      {/* 						Testimonials */}
    </div>
  </div>
);
export default Resume;
