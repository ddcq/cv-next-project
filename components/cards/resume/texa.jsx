import React from 'react';
import Widget from '../../sidebar/widget';
import WidgetTitle from '../../sidebar/widget-title';
import ResumeItem from './resume-item';

const Texa = () => (
	<ResumeItem
		date="Janvier 2014 - Juin 2017"
		name="Développeur sénior fullstack"
		company="Texa Services"
		description="Refonte de gestionnaire de prestation d'expertise et de l'outil de chiffrage sur site"
	>
		<p>
			TEXA est un acteur majeur sur le marché de l’expertise en assurance. Elle est mandatée par les assureurs
			afin de réaliser des expertises suite à un sinistre, soit sur site, soit à distance, par téléphone ou
			visioconférence. Elle a entamé fin 2013 une refonte totale de son SI en commençant par son outil de gestion,
			rebaptisé iTex.
		</p>
		<p>
			L’équipe se compose de 8 développeurs fullstack, un administrateur système et 6 MOA. Elle fonctionne en
			méthodologie agile avec un kanban, daily meetings, rétrospectives, dojos, points techniques, etc.
		</p>
		<p>
			J’ai été intégré à l’équipe en tant que développeur fullstack afin de développer les nouvelles
			fonctionnalités en scripts Case 360 coté back et Angular JS coté front. J’ai ensuite repris le poste de lead
			quand celui-ci s’est libéré. En tant, que lead, j’ai pu mettre en place une nouvelle orientation technique
			réduisant la part de Case 360 au profit de code Java, augmentant la performance et la testabilité du code.
			J’étais également en charge des points suivants :
		</p>
		<Widget>
			<WidgetTitle>Taches</WidgetTitle>
			<ul>
				<li>Evaluation technique des candidats lors des entretiens.</li>
				<li>Animation de dojos, rétrospectives et points techniques.</li>
				<li>Formation et soutien technique des nouveaux arrivants</li>
				<li>Veille technologique.</li>
				<li>Méthodologie Agile, Kanban électronique.</li>
				<li>Implémentation des User Stories</li>
				<li>Revues de code / Gestion de la dette technique / Refactoring</li>
			</ul>
		</Widget>
		<Widget>
			<WidgetTitle>Technologies</WidgetTitle>
			<ul>
				<li>Angular JS 1.4</li>
				<li>Java 7</li>
				<li>JBoss 6</li>
				<li>Oracle 11g</li>
				<li>Case 360</li>
				<li>Bootstrap</li>
				<li>Jasmine</li>
				<li>Fitnesse</li>
				<li>Kanban</li>
			</ul>
		</Widget>
		<Widget>
			<WidgetTitle>Équipe</WidgetTitle>
			<ul>
				<li>Un chef de projet</li>
				<li>Un architecte</li>
				<li>8 développeurs dont 1 Lead</li>
				<li>Six MOA</li>
			</ul>
		</Widget>
	</ResumeItem>
);

export default Texa;
