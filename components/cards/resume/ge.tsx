import React, { FunctionComponent } from 'react';
import Widget from '../../sidebar/widget';
import WidgetTitle from '../../sidebar/widget-title';
import ResumeItem from './resume-item';

const Ge: FunctionComponent = () => (
	<ResumeItem date="Juin 2012 - Mars 2013" name="Lead Developper" company="GE Energy">
		<Widget id="ge">
			<WidgetTitle>Contexte</WidgetTitle>
			Secteur Énergie / Développement SaaS
			<WidgetTitle>DRMS : Gestionnaire d’effacement du réseau électrique</WidgetTitle>
			<p>
				GE Energy est une société du groupe General Electric dont l’une des activités principales est la
				production d’électricité et la distribution d’équipements et de technologies associées. Il possède en
				particulier une technologie permettant d’« effacer » un appareil électrique d’un particulier,
				c’est-à-dire de le supprimer temporairement du réseau avec une contrepartie financière incitative. EDF
				est intéressé pour adapter cette technologie aux entreprises françaises. Le projet DRMS tente de prouver
				sa faisabilité et sa fiabilité.
			</p>
			<p>L’équipe se compose de 3 développeurs, un chef de projet et un MOA.</p>
			<p>En tant que lead de l’équipe dev, j’avais en charge les points suivants :</p>
			<ul>
				<li>Coordination technique des différents sites (Paris, Atlanta, Livingston)</li>
				<li>
					À partir du logiciel « Product » développé à Atlanta, intégration de la partie « Project »
					spécifique au client, déploiement de la solution finale sur les différents environnements.
				</li>
				<li>Rédaction du modèle conceptuel de données (Power Designer)</li>
				<li>Calcul d’indicateurs d’analyse (PL-SQL, SQL Developper)</li>
				<li>
					Développement de Web Services dans le cadre d’échanges bilatéraux avec le client (Eclipse,
					Hibernate, Glassfish, Oracle, Spring)
				</li>
				<li>
					Evolution de l’interface graphique pour enrichir la couche métier du client (Struts, Spring,
					Hibernate)
				</li>
				<li>Pre-recette de la solution (HP Quality Center)</li>
			</ul>
		</Widget>
		∑ <p>Mots clés: Struts, Spring, SVN, Maven, Eclipse, Hibernate, Glassfish, PL-SQL, Oracle, Web Service, EJB</p>
	</ResumeItem>
);

export default Ge;
