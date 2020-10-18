import React from 'react';
import Widget from '../../sidebar/widget';
import WidgetTitle from '../../sidebar/widget-title';
import ResumeItem from './resume-item';

const CreditAgricole = () => (
	<ResumeItem
		date="Avril 2007 - juin 2012"
		name="Ingénieur Étude et Développement"
		company="Crédit Agricole, GIE Synergue"
	>
		<Widget>
			<WidgetTitle>Contexte</WidgetTitle>
			Secteur Bancaire / Maintenance Applicative
			<WidgetTitle>Migration du logiciel de crédit</WidgetTitle>
			<ul>
				<li>
					Développement et Intégration de modules techniques devant respecter la norme nationale
					(Java/Eclipse)
				</li>
				<li>Automatisation d&apos;installation de serveurs supplémentaires (Script DOS)</li>
				<li>
					Modification de l&apos;architecture : externalisation des services d&apos;édition, dématérialisation
					et d&apos;interfaçage Mainframe (Bdoc, MQ, SQL Server)
				</li>
				<li>Optimisation du serveur d&apos;Application (Apache HTTP, Tomcat, Java)</li>
				<li>Supervision et contrôle de performance (Zabbix, JMX, Patrol)</li>
				<li>Résolution d&apos;incidents de production</li>
				<li>Développement d’un module LDAP (Spring)</li>
			</ul>
			<WidgetTitle>Urbanisation des applications</WidgetTitle>
			<ul>
				<li>Normalisation d&apos;une installation urbanisée des middlewares Apache/PHP/Tomcat/Java</li>
				<li>Procédures de déploiement sous Windows et Linux (Script DOS & bash)</li>
			</ul>
		</Widget>
		<p>Mots clés : Java, Spring, Eclipse, Tomcat, SQL Server, JMX, Bdoc</p>
	</ResumeItem>
);

export default CreditAgricole;
