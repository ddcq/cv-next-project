import React from 'react';
import AboutMe from '../components/cards/about-me';
import ContactsCard from '../components/cards/contacts';
import Resume from '../components/cards/resume';

export interface CardType {
	n: string;
	c: React.ReactNode;
	cl?: string;
	href: string;
	icon: string;
	text: string;
}

export const ABOUT: CardType = { n: 'about-card', c: <AboutMe />, href: '#about-card', icon: 'person', text: 'About' };
export const RESUME: CardType = {
	n: 'resume-card',
	c: <Resume />,
	href: '#resume-card',
	icon: 'android-list',
	text: 'Resume',
};

//  { n: "works-card", c: <Works />, href: "#works-card", icon: "paintbrush", text: "Works"},
//  { n: "blog-card", c: <Blog />, cl: "blog", href: "#blog-card", icon: "chatbox-working", text: "Works",},
export const CONTACT: CardType = {
	n: 'contacts-card',
	c: <ContactsCard />,
	cl: 'contacts',
	href: '#contacts-card',
	icon: 'at',
	text: 'Contact',
};

const CARDS: CardType[] = [ABOUT, RESUME, CONTACT];

export default CARDS;
