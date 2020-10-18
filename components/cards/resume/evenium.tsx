import React, { FunctionComponent } from 'react';
import Widget from '../../sidebar/widget';
import WidgetTitle from '../../sidebar/widget-title';
import ResumeItem from './resume-item';

const Evenium: FunctionComponent = () => (
	<ResumeItem
		date="Juin 2017 - Présent"
		name="Développeur Sénior fullstack"
		company="Evenium"
		description="Refonte de Net en Node/React/API, Maintenant et évolution du code légacy en JEE"
	>
		<p>
			Evenium accompagne ses clients dans toutes les étapes de l’organisation de leurs événements : des
			inscriptions au reporting, en passant par l’accueil digital des invités, l&apos;interactivité et le
			networking pendant l’événement. Son expertise lui permet de développer des solutions qui répondent aux
			besoins de milliers de clients internationaux et leur permettent d’atteindre leurs objectifs.
		</p>
		<p>
			L’équipe de développement se compose de 6 développeurs, un administrateur système et un chef de projet.
			L’équipe support est directement au contact des développeur pour une meilleure réactivité. Celle-ci a
			dépêché 2 MOA à temps plein pour spécifier les nouvelles fonctionnalités attendues par les clients. Bien que
			l’équipe de développement soit répartie sur les différents projets, elle s’appuie sur un tronc commun basé
			sur React, Redux, Observables, Immutables, Mocha, Webpack, Babel coté JS, EJB, Oracle, Redis, JBoss coté
			Java et Git, Lerna, Jenkins, CircleCI, Slack pour le reste. Enfin, elle fonctionne en méthodologie agile
			avec des kabans, des rétrospectives, des daily meetings, code reviews, etc. chaque produit ayant un cycle de
			livraison qui lui est propre.
		</p>
		<p>
			Dans ce cadre, j’ai eu en charge de « Net », le gestionnaire d’invitation et d’inscription des participants.
			En plus de correctifs sur la partie existante développée en Java JSF, je devais redévelopper certaines
			parties en React/API afin de les faire évoluer. Notamment, la partie « billetterie » a été entièrement
			refaite avec la particularité d’un serveur de rendu NodeJs permettant le Server Side Rendering
		</p>
		<b>Mots clés : </b>Node JS, React, Redux, Java 7, JBoss, JSF, EJB, Oracle, Material UI, Jenkins, Trello,
		Circle-CI
		<Widget id="evenium-tasks">
			<WidgetTitle>Tâches</WidgetTitle>
			<ul>
				<li>Implémentation des spécifications fonctionnelles</li>
				<li>Revues de code</li>
			</ul>
		</Widget>
		<Widget id="evenium-env">
			<WidgetTitle>Technologies / Environnement</WidgetTitle>
			<ul>
				<li>Node JS, React JS 16, Redux</li>
				<li>Java 7, Jboss 6, Hibernate, Oracle 11g</li>
				<li>Git, Lerna, Jenkins, Circle-CI</li>
				<li>Material-UI, Bootstrap, SASS, Aphrodite</li>
				<li>Agilité : Kanban, Rétrospective, Daily</li>
			</ul>
		</Widget>
		<Widget id="evenium-team">
			<WidgetTitle>Équipe</WidgetTitle>
			<ul>
				<li>1 chef de projets</li>
				<li>1 Ops</li>
				<li>7 développeurs</li>
				<li>2 MOA</li>
			</ul>
		</Widget>
	</ResumeItem>
);

export default Evenium;
