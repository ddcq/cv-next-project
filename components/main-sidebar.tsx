import React, { FunctionComponent } from 'react';
import Sidebar from './sidebar';
import Widget from './sidebar/widget';
import WidgetTitle from './sidebar/widget-title';

type LnkProps = {
	href: string;
	img?: string;
	text: string;
};
const Lnk: FunctionComponent<LnkProps> = ({ href, img, text }) => (
	<li>
		<a href={href}>
			{img && <img width="16px" height="16px" alt={href.substr(href.indexOf(':') + 2)} src={img} />}
			{text}
		</a>
	</li>
);
const MainSidebar = (): JSX.Element => (
	<Sidebar id="MainSidebar">
		<h3>Used to create this site</h3>
		<Widget id="used-ops">
			<WidgetTitle>DevOps</WidgetTitle>
			<ul>
				<Lnk
					href="http://nodejs.org/"
					img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACQUlEQVQ4jX2TPWiVZxSAn/d9v597Q5IOIiWFGJBSWlDa4pShTh0dsli6FRTuqDgUOpR4K26CpY4tzdIlxMW9InTuoBAXtyYZUjW5JPfn+3l/znGwSkhvcrYD5zw853COYUrc2rjaLTuzKymY1XoSadpwZ+6D+Ojnbx7Wx2vN0aTf79vB8rMvC5m5maViRbyba1uhmrQj4FGW8cuH/3zytN/vy/8AvT+/PlfYvOekuJan7kIWO4h3hKA0tSeEhLN21zi7Vhh+ffDdH9sA5lKvl39xZevbzpx+b7AXXCpNHrscBYQQaeqAAZyzajP7XFK697d/sW6XPttbbAfFbUnm4vGRjk5qnUFUEVEjSS8O6vHt7qC7aPNcM1+Z3I/c9N53CGsQFBGl8i37o1GOklmKFpxSH1okmpMUAEgqBEkcVGNCigBYSjC5kALUQ4OeAlCUia9pYyCzlpISC2CcolZ4vdvS1nKqhZeINYbSFVD+Z2AzpQme4dCz/9qfagEgqjiXvTUoC4gamYwDqjDYb6iqcCogSEQ0UZZgo7ZxNAwheMEY8F54+WqC6skeqkodfPChjXZ272CnHqY+sAmoMTA4rBmOG4yZug01mE2R+NO/Mwc77ysu3728iJUemOuqunBmfpaPFz5CEviQCDFSte3uqG5+HzfNb49/eLwN8P56tp5sDbe+2v7rnF16gjEzPsTznbIoO3lBFB0llQ0iNz7d+3x97ce1g3d9Ux2X7y93XeVWzszPry6dPYsqd7KsmvrObwA+tTchrleiRQAAAABJRU5ErkJggg=="
					text="Node JS"
				/>
				<Lnk
					href="https://nextjs.org/"
					text="Next.JS"
					img="https://nextjs.org/static/favicon/favicon-16x16.png"
				/>
				<Lnk
					href="https://travis-ci.com/"
					text="Travis CI"
					img="https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+travis-1324451505484713105.png"
				/>
				<Lnk
					href="https://github.com/"
					text="Github"
					img="https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png"
				/>
			</ul>
		</Widget>
		<Widget id="used-react">
			<WidgetTitle>React</WidgetTitle>
			<ul>
				<Lnk href="https://usehooks.com/" text="useHooks" />
				<Lnk href="https://reactcommunity.org/react-transition-group/" text="React Transition Group" />
			</ul>
		</Widget>
		<h3>Some other favorites</h3>
		<Widget id="favorites-css">
			<WidgetTitle>Design</WidgetTitle>
			<ul>
				<Lnk
					href="https://css-houdini.rocks/"
					img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4jbWTUQ6CMBBER/1D7oaeiXAkDT/cQq9gghfQQNrnz5LUWiqYuEnTSacz3W630j8CtFuyNifeBLgE7VNcVgyqQGdQD7qBTqBqqUkNYmbUc6KtzQfbOIIGkAc5w6Nxx1Dzlj6oCwSYgTc8GNclrwEq7M7TqXH6zrgeVEy6MA0k+WyBEhEaPCVdzcgFphh2hi+SHnH6uSL6xUW0uck8YxPu/YiokVrQ3Ua7ppHiVi5T3DeT3z/T2ngBYgoBM/1LzzEAAAAASUVORK5CYII="
					text="CSS Houdini Experiments"
				/>
				<Lnk
					href="https://postcss.org/"
					img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC0klEQVQ4jX2TzWvcZRSFn/P+JjOZmSZtQiOBtjpOEik2iDTYmKHWgEWsjQsXgrVIoSAu3Aru/AMEXas77apYRPAjBWkpJckgGETR2homo6S0aAgEne/M7z0uJJBufFZ3cc+BC/cRe9iYGx7dUfpixEclJ1gvCNoWP9kE8M+ZjL8s3ezUdzPaHdae2fe40ng+oNsZ+Vov6gnEuPAjDnyV9ONWquSUxHHwt+WV1qIgBoC1Sm5CaXqRwOfllealPsmQgks5Ny9HhSuKLDA4uD1ZbX7qTHwf8dJ6pXAGINyboZAouSD5i8ml1mptZmS/nT4H8ZsjVdpTy41fLN92t3feECZvtjdQ+gFwtjabm8q0soXnQ9Tf5WpnGcDZ7qvAIaJmanOF05aLAQ1ZnFmvFOyV1oda6v5WmysukUnOBcGJNGhR4Prc0FFgWjAu6SKBc4JZR04KrgJna6fyhwAUwqrM8WBoD8bGen2+NOgk5gQ/YA4IXe4MFF8ur7RfJ/Cu0RjiMH1dMAQNJH9axCCr2s+V3Gk9VCwvNX+0FJHb6f7mZ8dubDYEnlhufQ+xg70lU6hXiqe7O5lUkA8hiY0WzUxsNP4BkOlBuDa1SHfvj2AdNOolDpfAC1m1yzZpCMre4a+x3rFbt3r/3Rb74IfXZkeHd7O1k7nHCIwKGtmdxh8WV2P0W4DkV0h+3zwwlPb62TSrmPT6rwU0ZrhnkwrnLWZkVi1NS3wUrH6Ed0zcydy9S9baOSH7cKYn41AwccsoKjAu1Ld1PcB9B6/jmI8xySk4D1wRQP2p4ngc8EzWretHqrT5HwyhNld4Q2ikXG2+FwBKpeYm9nCP/Jv1pwdL3uPIXu7MDx2sVYpvEzyZJflYEPVAc2XfvOwFQtxw5LvMgO/HPjF1GE2kacuzRK2F3MAnj97Y3n7Axj1WjiVp+mxETwpGZIoOdIj+1cSvJ6rddUHc3f8XdRRbOorYWF4AAAAASUVORK5CYII="
					text="PostCSS"
				/>
				<Lnk
					href="http://getbootstrap.com/"
					img="https://www.drupal.org/files/issues/2020-02-25/favicon-v2.png"
					text="Bootstrap"
				/>
				<Lnk href="http://learnboost.github.io/stylus/" text="Stylus" />
				<Lnk href="http://bootsnipp.com" text="Bootstrap generators" />
				<Lnk
					href="https://material.io"
					img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVQ4jZVTy2rjQBCsbo3kQUEGg0HgjwjkFPIDhpAvyUm3TQ7OKT4ke8tpL/6JPSwB/0DIKZBvkAQGGyNBduQZjyaHWEHxY8nWbbqrumoamrCFwWAQBkEwBPADwNmm/ATgp9Z6muf53zaftvQX/X7/1vO8EwBwzn2Q6INmrX2Zz+c3AP7sDBiNRpe+7z/Ude03wm0QEZjZGGOS8Xj867MRhuF5kiTafRNJkugwDM8BgOM4Poqi6K4oCj/P873ObeR5jqIo/CiK7uI4PmIp5dDzvGMiQpqm0FofFGutkaYpiAie5x1LKYdMRFfOORARlFLIsuzggCzLoJQCEWGjuWIApw2BmQ+maNyZuV0+/fL6V4q2exsM4PlLYU+KA+4A8MzOufv21H0p9rlv9nDPVVVNrbWv7WaTwhgDY8yOOxHBWvtaVdVUzGazt263ey2E+C2l9BuStRaLxQIAUNc1pJQAACklhBBGKXVdluWbAICyLB+ttclkMnlYr9e+cw7OOQRB8LkDIgIRQQhhrLVJWZaPwNYxdTqdi16vd8vMJ41z86XN+2W5XN6sVqvdY2rwv+f8DjlDGpHfSLNqAAAAAElFTkSuQmCC"
					text="Material Design"
				/>
			</ul>
		</Widget>
		<Widget id="favorites-js">
			<WidgetTitle>Javascript</WidgetTitle>
			<ul>
				<Lnk href="https://react-hook-form.com/" text="React Hook Form" />
				<Lnk href="http://gruntjs.com/" text="Grunt: The JavaScript Task Runner" />
				<Lnk href="http://bower.io/" text="BOWER: A package manager for the web" />
				<Lnk
					href="https://medium.com/javascript-scene/native-apps-are-doomed-ac397148a2c0#.2x2ku8eok"
					text="Native Apps are Doomed"
				/>
			</ul>
		</Widget>
		<Widget id="favorites-java">
			<WidgetTitle>Java</WidgetTitle>
			<ul>
				<li>
					<a href="http://search.maven.org/#search%7Cga%7C1%7C">
						Maven: The Central Repository Search Engine
					</a>
				</li>
				<li>
					<a href="http://charlie.cu.cc/2012/06/how-add-external-libraries-maven/">
						How to add external libraries in Maven
					</a>
				</li>
				<li>
					<a href="https://github.com/spring-projects/spring-boot">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJElEQVQ4jY1TMWsUQRT+5r3d3Cbe7t3u3hEDdoJgIVieGo1YBixsBIsUtvkHNpaCnaJFUMEihSlEbGxFE8XCRrDWIAqJyd3t3JGcuduZeRa5DUtAk6968/i+733zhlE4hHq9foWZbwG4pkRmAECU2gDw1lr7Qmu9WuarUs2NOH7Onrdw2LQMa8xyO8tuA7BlA07TdM0juvA/cQHj3KdOp3MZgGUAaMTxssc8nxuzOsrzm90s2yDmU6TUtoh0BKhut9t3Rnl+1/O8Mz7z7GSlcnqwt/cKURS1pptNmW42JUmSpfGQKoCp0tBqkTZJkqWCH0VRiyaYFw/uZ+2zcbkDYFAy2AEgAOCcWymaE8yLBOZZALDOjQB0jrGCdevccH9zPEsYPxWU2uz1eutHqbXWP6DUbwCAyAwV0QDUANAxEhBE6uNaSICfAMBK1dI0vX6UOo7jeSaKsD/5F5FSa04EW+22dca8jMPw0r/ESRheZKKnxVlE3lFuzOPRMIeIWN3v93u7ux+IaBBFUasgBkFwlYi2/SD4yEQnSwaPSGv9xa/4T6abzYm6789Vq9WFMAw/K6W2CmKlUtmJoqhRTmNFHmRZ9vXgLyRx/J6IzlnnzotIX2utS/ywkaabTDQFANaY1+0su7G/0TG6WTYHpVaY6LvH/A3ATMngRCE2xtwrxADA5ViDweDNZBDsQamG7/vLw+HwDwDUajVfiZx1wMNOt3u/rPkLJe7aBdfH1TYAAAAASUVORK5CYII="
						/>
						spring-projects/spring-boot
					</a>
				</li>
				<li>
					<a href="https://www.artifact-listener.org/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAOklEQVQ4jWM0mXH7PwMWsNKVCZswBiBO1agBeAELMYq+lSuj8Lk671LPBQNvAFFhgOxnqrtg1AAGBgDObAgq639sAwAAAABJRU5ErkJggg=="
						/>
						artifact listener
					</a>
				</li>
				<li>
					<a href="http://www.joda.org/joda-time/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAg0lEQVQ4jWNkgIK/L1/+ZyABMIuLMzIwMDAwoms+KSFBULP5ixdwQ5hIsRUbwHABMkB2DcxWZEAVFwxSA4iJCYIuINYQrAaghzi2GIABrNHI5dCKVfG3A9UofKzRiEszLjkmQgoIGcKES4JYQxgZGBgY2DXzSMqJMPDz+iRGRnI1wwAAvxspkgGUXUUAAAAASUVORK5CYII="
						/>
						Joda-Time - Java date and time API - Home
					</a>
				</li>
				<li>
					<a href="http://javamind-fr.blogspot.fr/2013/06/assertj-fork-de-fest-assert.html">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVQ4jWNkgIJ/aUz/GUgATLP+MTIwMDAwkqMZ2RBGcjXDAAuGSEQPA4NFAgMDhwBC7MIGBoYlKQwMXz5gugJDs0MBqmYGBgYGgwAGhow1WF2AaoBFAoK9IAGCf0BtVXFgYJAxIOAFmM1rChgYTixBiCcsQLiEgYGB4ckFuBRqIM74g9WZGCADYS8THmVEAcxYYGCAeGHPFFQxlxwGhpAJBAz48QESDiETMKMMpvkHqjiqAScWQKKRgQERcOjgBKo4qgErSiA0ekKC2XxiAUINFFCclCnPTDAOudkZAEkvQ+XgMBz1AAAAAElFTkSuQmCC"
						/>
						AssertJ fork de fest-assert
					</a>
				</li>
			</ul>
		</Widget>
		<Widget id="favorites">
			<WidgetTitle>Autres</WidgetTitle>
			<ul>
				<li>
					<a href="http://nginx.com/index.html">NGINX, Inc.</a>
				</li>
				<li>
					<a href="http://www.petri.co.il/send_mail_from_script.htm">Send Mail from Script</a>
				</li>
				<li>
					<a href="http://forum.debian-fr.org/viewtopic.php?f=8&t=12674&start=0">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVQ4jb2TwZXDIAxEv/elEJUypbgUlUIpKkWdaA84BBtnk9PqBDPSjACxcYlsUWSQERAHKDAJTNiubc7frsXpDnkUoY4THUuw5ovIKA5TBap0rzs+5Z1vsfCkvMLekLMJqtTFYBD7mcjdK+Un/Gr06GgAYM23uXjejxDgr+1PzwZscnavPERn7C738cpYvMbxyMD86CbBrs+Z3m/3VChfXiNMy0X3DkxAkC1qKHeIMNWzOzPBfnYfi5CKABHn4Xp2cTOFy1nfDdHXkfvnYfonkS/G+rPI8bnS/U+hX8zsvuRTgkPeAAAAAElFTkSuQmCC"
						/>
						Booter sur USB lorsque le BIOS ne le permet pas
					</a>
				</li>
			</ul>
			<h3>Javascript</h3>
			<ul>
				<li>
					<a href="http://www.browserswarm.com/">BrowserSwarm Tester sur tous les navigateurs</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="http://apdevblog.com/comments-in-code/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB00lEQVQ4jaWTPYuaQRSFnxmV12wKsdPqxUJsrAQR2fgPsmUWBFnBwvwBSyvRzlbINlmyhY2FnY2NYiEobGNhFAQrKxHxxcLPm8KPuBJCgheG4c6598y5zBkFCDeEvqUZwK6UggsZ6rhf5iICSp2xE64AO1eN17mI/BXXJz6R3+t0v4hgmibZbBat9VXNcYRD4ZFNa/b7PQfFh8N0Oo3f72e3271TICIcp0dM05RqtSpvb2/y7flZPB6PAGIYhnS7XYlGo5JIJOT7y4tUKhVptVpyf/9JANEAkUiE3W5HsVjkazrNl8dHAGKxGFpr2u02oVCI5NMTjUaD9WbD6+sPDMM4jDAcDrEsi3g8jmVZfLy7AyCRSFCr1QBwOBw0m01KpRKj0YhqtYrX60UrpSgUCpimSSaTAWCz2WAYBpFIhHK5DMB2u8Xn8+F2uwmHw6xWK2az2UFBp9MhlUqRz+dZLBY4HHYeHj4zGAzo9/tnUpfLRb1eJxAIkMvlWCwWB58opQgGg1iWxXw+x6Y1KMV6vcayLABKpRLBYJBkMonTMPg5GFw+o9Dr9fhTKKUQEabTKZPJhPF4fI2rf/pMzg9ObNrGcrm88MJ/EJwtrd6bWnHjd/4F6NDWvYkuSBAAAAAASUVORK5CYII="
						/>
						Don’t comment your code! - aron / philipp development blog
					</a>
				</li>
				<li>
					<a href="http://java.dzone.com/articles/continuous-releasing-maven">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABe0lEQVQ4jaWTTSgEYRjHfzsWjY/Zj4vD4OJgN84SN9bJcS9ycJETB1eS4iSiHFyQ2gPlYsvJanNDUTalRlLKrNhabcasoW12HORd8pHM//S+z/P+f/17nl6P4zg2LiS5Mf8KiB2ahCbThCbT/wMYVtFdgr/KNcD7fkhqFkt7BlqmAIDqKxOPdDPL6P7qz4CtVJ7xeO5T4+ahtF09n+Ugc/HFPBSO4EnnCnb3wh0AkWaZsV4fACPr9yLN0USQs9w1ADvXJ6xoSZRymePoHFJSexbEsV4fqt+L6vfSFZZFXamooqMuRGugkc3LfQCm2vpRKqqQPq5L9YuRfKtlbRejYNESaKCvqRMASQ2UhhU7NH8062aW+dNtABY7B0XdY1i23TV/x+PLW5KB9hoA4qknUTufrieamOEgc4FSLtMabCgBHMexj65eGN64FwaA2kpJ3NeGTaKJ2W+Ted5/4+Nzka3UE4ZVRA2U0ROW0W4LKLJEdc0Dej77O+C/egVCK5SPtvk5KAAAAABJRU5ErkJggg=="
						/>
						Configurer Maven pour le déploiement continu
					</a>
				</li>
				<li>
					<a href="http://shancarter.github.io/mr-data-converter/">Mr. Data Converter</a>
				</li>
				<li>
					<a href="http://glyphicons.com/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAo0lEQVQ4jWM86R/y/9PlywzkAD5dXQbG3Urq/8nSDQVMlGhmYGBgYMEl4Xz7GgMjE8L8/TqGDH+/fyfeBciaGRgYGBhZsdtFsRdQAtHl7g2iNO1R1qCeCwbeAJSg3a9ryMDIAhFyOH8aReERW2eGP18+Mfz/8w+3AX+/YcYzDPz58onhz6fPGOK4vfAfNYX///MHq7KBzwtMfLq6ZGvm09VlAADoyS03qzyfyAAAAABJRU5ErkJggg=="
						/>
						GLYPHICONS
					</a>
				</li>
				<li>
					<a href="http://www.infoworld.com/d/application-development/16-ways-torture-developers-215773">
						16 ways to torture developers | Application Development - InfoWorld
					</a>
				</li>
				<li>
					<a href="http://www.thoughtworks.com/radar">Technology Radar | ThoughtWorks</a>
				</li>
				<li>
					<a href="https://code.google.com/archive/p/lambdaj/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACXUlEQVQ4jZ2TzUuUURTGf+/Mq80omDgWUrQoqDREFyUFIUyDgkS7qGhjuAqiTxe1iEyE/oBoY4s2tUkDEd1IwjgYZIFkYZmBpqb5MWiN4zjzft7TYuyNqXHTgQuXh/M85znnnquJiMY28XQ02QbQfKykY7scRETLd671bQwV3I2LfvubXO1ZHdouT8vnoPGZGR2eNsLiWIhtgGMQ3q/H4mvJ8PjsGufqytu7rtR0APjykmfdMAiI8vChyWT447KN5vPTPbLo4Z5AwnDCF16YanjWDaNcRBSIgAiitoRcG3HtnIK+3+TL/W60d9IF5SLKBtdFlAPKAVHZ+5ajpuqy9oThhAG090v2qTsD6Wh0xgHg+B6N2t0Oj9+aoBzENsExaa42+DBvMjaXQiyD+qoQj1pqIlprf0Ievc54lgZagrwcW2RvqJgDIQ1lbtI/4VAkGxwtN2nuSoFtAnDzzCF89xqKIz0Xi2Oy1d8OyRCbFhoO6jwZnKfzVYL2Bpj6vklJoQInO4PBtpPt989XRXylAT1WEvTHxEpzttJhV2GGzysmpmUTqQzSdKSIRMrmzYxBqKyY04ezc2+orugoDegx3fNuG4xNpwk0hSjVHZSTZiX+k8k1eNiXIlDoQxeL8ZkMUODRPAGx0kzF4d3XJBVBA+UGiX4xGVkCcaBun5+JmXXmzT/kXAE7A6JY+FFAW2MhD3oX+LRsIGb26a7XFzG3aP29d1kBy0gifgs2LVqfb7LTZ7Nq5m74re4E6xkXfDoFRQEP9/7Cpc5RNTyX+qdCvqitCMR6b5yI5Aj8b/wCNcNcTlrIkvkAAAAASUVORK5CYII="
						/>
						Google Code Archive - Long-term storage for Google Code Project Hosting.
					</a>
				</li>

				<li>
					<a href="http://www.pixijs.com/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsUlEQVQ4jX2ST4jVVRTHP+f+7u/33rN54zgyzrzxvZIJpESFEEEES7dFTFGziiRqXBcStEmYoG1I4EJJBxRERNFFiwhaCNEmimiRUFBWM2+mN743o6POe78/95wWM+aMRXd14Z7z4Z7v+Qj/c4wpJ0wpQGfwjf4sSeomhZVSbW5dvLgMIOsbbnG4XGmMXY6RwcIstTwf78G2apJ8UGCHBKkZZia0ROV7If1oA2CmPlFJpPrHtmjT0IKuLFnQF73zV/pdUlcMJ4KZkYhnSbukWb7brwf0Zu9r0uhbfqD5IEZHXHQmca5+z7K8QL8Tk8tq6sriD+YaXO2v8z9tAPgdw2IqPiVEwNNgkquqogs3Z357/gg3irXSkzP1iQqAezw4AVu7mSAopg43sKs+Nr6+rjF7pfufAANKRAC3DPu24mIfsJITudpuTF5rN955ZWqtz0A2An4HQQwBgQppcayr+c0Bl3iAWNyrXtz195469s184639ArYRsAPApDDFoD/rdWfzsPLCXc1OmtgCQGqKN3cgxn/ZHD363L9+gKEiAliInoiro3OX2kMz547f77m9vVC875F2SpGVJdrinT/xzywGUqLjzOhbdUW0Nh+1V98P+7GFs63h5vQneQiTgiQ9Cwrscg+TF7Doya2vJeKGDDGwX1vDfvfP9Ynt8mh9iHcjBuZXs7ojrcbbJzaJ3/PAiiDwMhAPunLS0e7HiBws4fZmqjcQuQ02YvBShER9Lo7uheJdDzLeF1X2ec3IrKDqEtpF74egfBFHfLg5KhNEX3+ocY5iwB3NTo/MTp/yhn29WKz4Aq06aC+G9CvNs09XWu271XptsqO9I2r6LMhmzJa9yI8auFabm/58VTeQ+dqbz0QuHghWNEfnLvz5uFy3tx/dKRJtMfNLQ83PfnkkLfY3Er5CMR/AmBgAAAAASUVORK5CYII="
						/>
						PixiJS v4
					</a>
				</li>
				<li>
					<a href="https://www.hotscripts.com/category/scripts/php/scripts-programs/match-making/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABy0lEQVQ4jWP4jw38+/u30st9Sn4OphQLAzbAyMSkrK/PzMqKKYWu4eOb13uXLL528sSFA/u1LCxPbNls4eOLYtb////hnG2zZtw/uF/86iWZ92/+ffpy8O//o3//O0REFc6azczMgkXDn29fl2ip3n377gfDf3FGRgsmxq8MDMv+/ncqKo1vbIaoYUK27vm9exvfvH35n0GUkZGVkeE9w385RoZgZsYN06b8/fMHi4Z5DXU//zMYMDMqMzJoMDIIszDxpqZyMjIyMzMzMjJi0XBu314GBgZ5/4DvDAw/GRg43b1YZOWv/v0XXFDExMyMRQMPPz8DA8MrKZn/fPzf/jNw6+o9nDb5p5NLeFkFXA2KBoeIKAYGhgPr1wsbGPzh4Xl14ujH128KZs5mYmLCriG0sJiNg4NPWPjn+/c8SkoPDxwUDgphF5dEVoMScQKioqLSMhra2u/Wrvz/9y8LG5taWTUDKkCxYe/ypU/v3pFh+Pf/718GBgb9knJeFVU0DYiI+/n9W7KOJp+goM2XT9+eP1P08nZasooRFjhYbNi3fNm7Fy9EREX3P30mX17tuHgFpmoUP/z//5+Vnf3hvfsxU2e6xsVjKoUAAN0tzoDuginyAAAAAElFTkSuQmCC"
						/>
						PHP Match Making Scripts | Search &amp; Download Software Free
					</a>
				</li>
				<li>
					<a href="https://www.regular-expressions.info/refreplace.html">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACeElEQVQ4jW2TW0jTURzHP7vghOlclreHlVoPYjmYkVT6EKtBDyllYNFFcFrQQ4z1EEQUMgjLgrGCQVmGIT0UJcwowjlLzfkQzS7MYUsXktOytG2a5vTfw9zczB8cDoff7/s5v8s5IlaZq6NZAFh894jUuXEAgsnZSIqrANDo9KL4+NihsUYjAEgmlgC4nDKTADaF5AAsZokBOH/ftQJaFguA0FijEeRVW9Zcq+NiGTTWaIRezzw2pzsKXF1Z9NaYX3fsLBqdXiSNpl1WIAMKsTndtL3yEV4S2JWXjt3zg+m/YSqLshPgDrMFAHG0acPlqZj2SblyUEVGdg5SsYjB8SBymQRtoYqvwjoGLqkZ9wcYLk+NNVzsMFvw6BWxNI/fqMXmdKOvrSA5U0Vp2W5ae4e41VwBgK5UDcDnujQcZguREsQJk8HnrUd/9DH7Dx1mIRzG5y2J+Qb8Ydi6EiuNFz6Y2kF1y1MA6hsa+PDeyeTsAtMtzwBwS4oIpWwAXGsDlqb85F58giJNQTA0Q3+fndc9b7lgew6AWghRV32apJ0rGsk1a0N9wPqasoCE0Z9/6B8aIz93E1mZGfyaCqDbu4eNKhW+kRHsrU2ERz/x0DrIge8paI0GxNGnuSCGonQRvmEvoWCAU2eMzMyFGfs2hvX2PT72d/PG/pKTJSqUSZHENTq9SAygNRrwDs1ywnSVI1WVKOQySraruXO3BYBtBZtp6+wjLycd/+85aovz0RoNQNxfcHU0Cw6zhXNNNxFkyuUCZZF9cZ7Orh662m2sn5xAazTEPlXC/KIQAP11E0qlkgH3F9pfdCP3RDofL/4PsBYoaquFUfsHZqYFwvraMJcAAAAASUVORK5CYII="
						/>
						Replacement Strings Reference Table of Contents
					</a>
				</li>
				<li>
					<a href="https://www.conventionalcommits.org/fr/v1.0.0/#sp%c3%a9cification">
						Commits Conventionnels
					</a>
				</li>
				<li>
					<a href="https://www.rust-lang.org/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABvklEQVQ4jXWTy4uNcRjHP8+ZmRML2VhYsJHUlFIyNTeXzsZKKWZS9vIHiKyNjdSUHXsR0zDlD5ByzWRBc6YYyZBcyuR2ZGbOx+I8v7xOfOvtd3u+z+39PkFCrUVEW+0DdgIjwDZgFXgO3AdmI2Kl2FIh9+Q6ql71D+6pTyrny+pQlYMauR5WX6ThFfWIelY9ox5Vr+fbvHqwykUdUZvqV3VMref9ZnVjJdP9akt9VjJBXa9Op/ef6jv1S+5/JOG7elftVxtpe01dV+p+rz7ItWApI82lE9UFdYd6W/2kDtaA3YDALHAKeJXnG8AgsA94BLSBN8Ae4GXa7EWdTO/j6tpMv+3fWM5yBtR6NlX1fA2I9HYnIloZCeAhcAKYAnqAOtCIiF/A9uTQCyymWCbVJtCXTj4DT4FLQH9+x+wI7WRy3qIOZZf/hy3qua67VfWbOtALzAG3gHFgOpv4GmhllI/ABeADsAHYChxKznzRwqgdFS7ZUV+DLqgH1InMtqkOA4QaEaE6BkwAKxn5IrAALGf9x3O/BjgdETetSLk6TDP/+I2l7hm7hikqKZZxrgG7gGFgUz4v0hnnx8WmjPNvC1Ueb2yt3sAAAAAASUVORK5CYII="
						/>
						Rust Programming Language
					</a>
				</li>
			</ul>
		</Widget>
	</Sidebar>
);

export default MainSidebar;
