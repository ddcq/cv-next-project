import cn from 'classnames';
import React, { FunctionComponent, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
/*
var container = $(".container");
var card_items = $(".card-inner");
var animation_in = container.data("animation-in");
var animation_out = container.data("animation-out");

$(".top-menu").on("click", "a", function () {
  var width = $(window).width();
  var id = $(this).attr("href");
  var h = parseFloat($(id).offset().top);
  var card_item = $(id);
  var menu_items = $(".top-menu li");
  var menu_item = $(this).closest("li");
  var d_lnk = $(".lnks .lnk.discover");

  if (width >= 1024) {
	if (!menu_item.hasClass("active") & (width > 1023) & $("#home-card").length) {
	  menu_items.removeClass("active");
	  container.find(card_items).removeClass("animated " + animation_in);

	  if ($(container).hasClass("opened")) {
		container.find(card_items).addClass("animated " + animation_out);
	  }

	  menu_item.addClass("active");
	  container.addClass("opened");
	  container.find(card_item).removeClass("animated " + animation_out);
	  container.find(card_item).addClass("animated " + animation_in);

	  $(card_items).addClass("hidden");

	  $(card_item).removeClass("hidden");
	  $(card_item).addClass("active");
	}
  }
  if ((width < 1024) & $("#home-card").length) {
	$("body,html").animate(
	  {
		scrollTop: h - 76,
	  },
	  800
	);
  }
  return false;
});
*/
const LINKS = [
	{
		href: '#about-card',
		icon: 'person',
		text: 'About',
	},
	{
		href: '#resume-card',
		icon: 'android-list',
		text: 'Resume',
	},
	// {
	//   href: "#works-card",
	//   icon: "paintbrush",
	//   text: "Works",
	// },
	// {
	//   href: "#blog-card",
	//   icon: "chatbox-working",
	//   text: "Works",
	// },
	{
		href: '#contacts-card',
		icon: 'at',
		text: 'Contact',
	},
];

type HeaderProps = {
	onMenuBtnClick: () => void;
	onActiveCard: (id: string) => void;
};
const Header: FunctionComponent<HeaderProps> = ({ onMenuBtnClick, onActiveCard }) => {
	const { width = 0 } = useWindowSize();
	const [activeCard, setActiveCard] = useState(LINKS[0].href);
	const handleClick = (id: string) => {
		//const card_item = $(id);

		if (width < 1024) {
			//const h = parseFloat(card_item.offset().top);
			//$("body,html").animate({ scrollTop: h - 76 }, 800);
		} else {
			if (activeCard !== id) {
				setActiveCard(id);
				onActiveCard(id);
			}
		}

		// var menu_items = $(".top-menu li");
		// var d_lnk = $(".lnks .lnk.discover");
	};
	return (
		<header className="header">
			{/* header profile */}
			<div className="profile">
				<div className="title">Denis Declercq</div>
				<div className="subtitle">Fullstack Devoloper React.js / Node.js</div>

				{/*
			  <div className="subtitle subtitle-typed">
                <div className="typing-title">
                  <p>Fullstack Devoloper React.js / Node.js</p>
                  <p>Developer</p>
                  <p>Freelancer</p>
                </div>
			  </div>
			  */}
			</div>

			{/* menu btn */}
			<button className="menu-btn" onClick={() => onMenuBtnClick()}>
				<span></span>
			</button>

			{/* menu */}
			<div className="top-menu">
				<ul>
					{LINKS.map((l) => (
						<li key={l.text} className={cn({ active: activeCard === l.href })}>
							<a href={l.href} onClick={() => handleClick(l.href)}>
								<span className={'icon ion-' + l.icon}></span>
								<span className="link">{l.text}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
