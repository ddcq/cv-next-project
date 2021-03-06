import React, { FunctionComponent } from 'react';
import Widget from '../../sidebar/widget';
import WidgetTitle from '../../sidebar/widget-title';
import ResumeItem from './resume-item';

const AirFrance: FunctionComponent = () => (
	<ResumeItem date="Septembre 2004 - mars 2007" name="Ingénieur Étude et Développement" company="Air France">
		<Widget id="airfrance">
			<WidgetTitle>Contexte</WidgetTitle>
			Aéronautique / Développement Application 3 tiers
			<WidgetTitle>DECLIC : Dématérialisation de la documentation aéronautique embarquée.</WidgetTitle>
			<ul>
				<li>Développement de la maquette dynamique (HTML/CSS/Javascript/Applet)</li>
				<li>Rédaction du MCD et des spécifications fonctionnelles et détaillées</li>
				<li>Développement de l&apos;application (WSAD, Struts, Ajax, Tomcat, IMS Connect, Derby)</li>
				<li>Rédaction du guide d&apos;exploitation</li>
				<li>Liaison technique entre Air France et l’éditeur du visualiseur PDF (Jpedal)</li>
			</ul>
		</Widget>
		<p>Mots clés : Java, Ajax, WSAD, Struts, Tomcat, SQL, Derby, Hibernate</p>
	</ResumeItem>
);

export default AirFrance;
