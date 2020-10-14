import React from "react";
import Widget from "../../sidebar/widget";
import WidgetTitle from "../../sidebar/widget-title";
import ResumeItem from "./resume-item";

const CreditAgricole = () => (
  <ResumeItem date="Avril 2007 - juin 2012" name="Ingénieur Étude et Développement" company="Crédit Agricole, GIE Synergue">
    <Widget>
      <WidgetTitle>Contexte</WidgetTitle>
      Secteur Bancaire / Maintenance Applicative
      <WidgetTitle>Migration du logiciel de crédit</WidgetTitle>
      <ul>
        <li>Développement et Intégration de modules techniques devant respecter la norme nationale (Java/Eclipse)</li>
        <li>Automatisation d'installation de serveurs supplémentaires (Script DOS)</li>
        <li>Modification de l'architecture : externalisation des services d'édition, dématérialisation et d'interfaçage Mainframe (Bdoc, MQ, SQL Server)</li>
        <li>Optimisation du serveur d'Application (Apache HTTP, Tomcat, Java)</li>
        <li>Supervision et contrôle de performance (Zabbix, JMX, Patrol)</li>
        <li>Résolution d'incidents de production</li>
        <li>Développement d’un module LDAP (Spring)</li>
      </ul>
      <WidgetTitle>Urbanisation des applications</WidgetTitle>
      <ul>
        <li>Normalisation d'une installation urbanisée des middlewares Apache/PHP/Tomcat/Java</li>
        <li>Procédures de déploiement sous Windows et Linux (Script DOS & bash)</li>
      </ul>
    </Widget>
    <p>Mots clés : 	Java, Spring, Eclipse, Tomcat, SQL Server, JMX, Bdoc</p>
  </ResumeItem>
);

export default CreditAgricole;
