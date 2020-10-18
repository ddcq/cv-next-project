import React from 'react';
import Sidebar from './sidebar';
import Widget from './sidebar/widget';
import WidgetTitle from './sidebar/widget-title';

const MainSidebar = () => (
	<Sidebar id="MainSidebar">
		<Widget className="widget_recent_entries">
			<WidgetTitle>Favorites</WidgetTitle>
			<ul>
				<li>
					<a href="https://material.io/resources/icons/?style=baseline">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVQ4jZVTy2rjQBCsbo3kQUEGg0HgjwjkFPIDhpAvyUm3TQ7OKT4ke8tpL/6JPSwB/0DIKZBvkAQGGyNBduQZjyaHWEHxY8nWbbqrumoamrCFwWAQBkEwBPADwNmm/ATgp9Z6muf53zaftvQX/X7/1vO8EwBwzn2Q6INmrX2Zz+c3AP7sDBiNRpe+7z/Ude03wm0QEZjZGGOS8Xj867MRhuF5kiTafRNJkugwDM8BgOM4Poqi6K4oCj/P873ObeR5jqIo/CiK7uI4PmIp5dDzvGMiQpqm0FofFGutkaYpiAie5x1LKYdMRFfOORARlFLIsuzggCzLoJQCEWGjuWIApw2BmQ+maNyZuV0+/fL6V4q2exsM4PlLYU+KA+4A8MzOufv21H0p9rlv9nDPVVVNrbWv7WaTwhgDY8yOOxHBWvtaVdVUzGazt263ey2E+C2l9BuStRaLxQIAUNc1pJQAACklhBBGKXVdluWbAICyLB+ttclkMnlYr9e+cw7OOQRB8LkDIgIRQQhhrLVJWZaPwNYxdTqdi16vd8vMJ41z86XN+2W5XN6sVqvdY2rwv+f8DjlDGpHfSLNqAAAAAElFTkSuQmCC"
						/>
						Icons - Material Design
					</a>
				</li>
				<li>
					<a href="http://nginx.com/index.html">NGINX, Inc.</a>
				</li>
				<li>
					<a href="https://docs.webplatform.org/wiki/tutorials/javascript_best_practices">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVQ4jb2TTUhUYRSGn+/e66hX05woKUJQ7AeSaJGEGxeCMZvatQmkIVpFuxYmTRQJQrRLHESidmUYIlSoQShESUaSKUk/E8iYOdakNc3Mdebe77QYGDVzF53FWb08L+c958C/KJ2MSWYoKJn+gLjv7slmupsf5+TY6IR0TEfyGgNARwZAZzD2ncR9FkKcpQ2QSCIlvbNfuFRXw+D8NwY/f5U8gGwKSUTRsZeAIK6zwT3leSSyLk8Xl0h7moTrAWDlejGy+BqJvwW7EpTaALCU4per6XwfBYQCQ62OAAKmDywbAGXluGMDQzIz9kogxzQUlFomxhoD608nZZkgmjutHdLbcQOdyfK4+64UldgopRBZH886gDJBGQaxa1cZ637EmYd9TA0P03MhTMB/AJ/fxFlx/w5QpoCymOvPIEvjNOyv5MrxILbPxH/wBE96XpA9YmM274Wf6fUAZQqCwfyDQn5MC3ZtAfV+j2xtCaOFAVR5DQU6iTMSwacF1VidDzp3B67J3H3F9/EkRjF4joMq20rL7S5aQkF0Jo0WwRVNfGAKbzSCWruF5YkVZEczVe2X0ckkVkUFO9vaMeoOq6ZAtTp9vhHHcdnmL+VW1ym2T8ZIzyysAozyXXiJZVZmZzG3lFF1PUzJofr8rhqO7lFnW5vAEz5F47ieZrddtJqkl0rJQrhToqE2Sb6Z3PQXRp5/kHMX+6R/cHPN/6/fRTLvVWxfvo8AAAAASUVORK5CYII="
						/>
						javascript best practices · tutorials · WPD · WebPlatform.org
					</a>
				</li>
				<li>
					<a href="http://betterexplained.com/articles/speed-up-your-javascript-load-time/">
						Speed Up Your Javascript Load Time | BetterExplained
					</a>
				</li>
				<li>
					<a href="http://www.virtuosimedia.com/dev/css/ultimate-ie6-cheatsheet-how-to-fix-25-internet-explorer-6-bugs">
						Ultimate IE6 Cheatsheet: How To Fix 25+ Internet Explorer 6 Bugs
					</a>
				</li>
				<li>
					<a href="http://stackoverflow.com/questions/3803719/getelementbyid-problem-in-google-chrome">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3UlEQVQ4jaWSP2hTURTGv3Pffe81RYeGVGloFYRIiXYpKDiUjC6Kgy4ugi0Wqq+2UjeXQAfFoSKJfx8FN6WDk+AigopbwCVRKP6p1rQYW1NU6Hvl5hynV2ISm4Lfdrjf9+N8l0PYQllAjZw7cJOIPBG8CL4GR1NP34f1HtUGwLN+aUIgj4mQcXvd+42eLQERZKO6PiyMgiI682X04JX6d2oVqtyyPRKJGzZ3ei7iOwB8Hh7YpxRekZIki5ze45cetQQsziDW4TgFENICqUAkJ8b4uyfxbXEkfRhkvYRisPCxvf67Z00VZn8iFNo4YZG5SpBOIjVNtl2s3NXTpu/tPLnBKTJaK9ZD/6wQaeEGenY6aowIF1isOBOvSmjfNsvxgn996UkW4L8Ac5eOxMh1z4tRH01N5sPqpw9nHywEpWz3jq6u36MddjgJQh+DexNjKDdtMDc1lLZsXYpmFlplVkWlaq9tFb5JdP7gXbEVd//llYeRR9cDqtotd/P6SaWsQYEcsoAULMoIKFNjF8u/kiivJTPA880MAcC45wkA5PL5pj+5N3U8oTX6Har1OwgH1gJ9rWhSS5FfNwYiWKRiCKDueHP5/MS4l9qc215iOzVt0KrGtgGN629H/13hD5TKuUFtsCROAAAAAElFTkSuQmCC"
						/>
						javascript - getElementById problem in Google Chrome - Stack Overflow
					</a>
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
					<a href="http://search.maven.org/#search%7Cga%7C1%7C">The Central Repository Search Engine</a>
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
							Òsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3klEQVQ4jWNkgIJ/aUz/GUgATLP+MTIwMDAwkqMZ2RBGcjXDAAuGSEQPA4NFAgMDhwBC7MIGBoYlKQwMXz5gugJDs0MBqmYGBgYGgwAGhow1WF2AaoBFAoK9IAGCf0BtVXFgYJAxIOAFmM1rChgYTixBiCcsQLiEgYGB4ckFuBRqIM74g9WZGCADYS8THmVEAcxYYGCAeGHPFFQxlxwGhpAJBAz48QESDiETMKMMpvkHqjiqAScWQKKRgQERcOjgBKo4qgErSiA0ekKC2XxiAUINFFCclCnPTDAOudkZAEkvQ+XgMBz1AAAAAElFTkSuQmCC"
						/>
						AssertJ fork de fest-assert
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
					<a href="https://github.com/stephanenicolas/boundbox">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJElEQVQ4jY1TMWsUQRT+5r3d3Cbe7t3u3hEDdoJgIVieGo1YBixsBIsUtvkHNpaCnaJFUMEihSlEbGxFE8XCRrDWIAqJyd3t3JGcuduZeRa5DUtAk6968/i+733zhlE4hHq9foWZbwG4pkRmAECU2gDw1lr7Qmu9WuarUs2NOH7Onrdw2LQMa8xyO8tuA7BlA07TdM0juvA/cQHj3KdOp3MZgGUAaMTxssc8nxuzOsrzm90s2yDmU6TUtoh0BKhut9t3Rnl+1/O8Mz7z7GSlcnqwt/cKURS1pptNmW42JUmSpfGQKoCp0tBqkTZJkqWCH0VRiyaYFw/uZ+2zcbkDYFAy2AEgAOCcWymaE8yLBOZZALDOjQB0jrGCdevccH9zPEsYPxWU2uz1eutHqbXWP6DUbwCAyAwV0QDUANAxEhBE6uNaSICfAMBK1dI0vX6UOo7jeSaKsD/5F5FSa04EW+22dca8jMPw0r/ESRheZKKnxVlE3lFuzOPRMIeIWN3v93u7ux+IaBBFUasgBkFwlYi2/SD4yEQnSwaPSGv9xa/4T6abzYm6789Vq9WFMAw/K6W2CmKlUtmJoqhRTmNFHmRZ9vXgLyRx/J6IzlnnzotIX2utS/ywkaabTDQFANaY1+0su7G/0TG6WTYHpVaY6LvH/A3ATMngRCE2xtwrxADA5ViDweDNZBDsQamG7/vLw+HwDwDUajVfiZx1wMNOt3u/rPkLJe7aBdfH1TYAAAAASUVORK5CYII="
						/>
						BoundBox breaks encapsulation
					</a>
				</li>
			</ul>
			<h3>Maven</h3>
			<ul>
				<li>
					<a href="http://charlie.cu.cc/2012/06/how-add-external-libraries-maven/">
						How to add external libraries in Maven
					</a>
				</li>
			</ul>
			<h3>Javascript</h3>
			<ul>
				<li>
					<a href="http://gruntjs.com/">Grunt: The JavaScript Task Runner</a>
				</li>
				<li>
					<a href="https://github.com/bower/bower">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJElEQVQ4jY1TMWsUQRT+5r3d3Cbe7t3u3hEDdoJgIVieGo1YBixsBIsUtvkHNpaCnaJFUMEihSlEbGxFE8XCRrDWIAqJyd3t3JGcuduZeRa5DUtAk6968/i+733zhlE4hHq9foWZbwG4pkRmAECU2gDw1lr7Qmu9WuarUs2NOH7Onrdw2LQMa8xyO8tuA7BlA07TdM0juvA/cQHj3KdOp3MZgGUAaMTxssc8nxuzOsrzm90s2yDmU6TUtoh0BKhut9t3Rnl+1/O8Mz7z7GSlcnqwt/cKURS1pptNmW42JUmSpfGQKoCp0tBqkTZJkqWCH0VRiyaYFw/uZ+2zcbkDYFAy2AEgAOCcWymaE8yLBOZZALDOjQB0jrGCdevccH9zPEsYPxWU2uz1eutHqbXWP6DUbwCAyAwV0QDUANAxEhBE6uNaSICfAMBK1dI0vX6UOo7jeSaKsD/5F5FSa04EW+22dca8jMPw0r/ESRheZKKnxVlE3lFuzOPRMIeIWN3v93u7ux+IaBBFUasgBkFwlYi2/SD4yEQnSwaPSGv9xa/4T6abzYm6789Vq9WFMAw/K6W2CmKlUtmJoqhRTmNFHmRZ9vXgLyRx/J6IzlnnzotIX2utS/ywkaabTDQFANaY1+0su7G/0TG6WTYHpVaY6LvH/A3ATMngRCE2xtwrxADA5ViDweDNZBDsQamG7/vLw+HwDwDUajVfiZx1wMNOt3u/rPkLJe7aBdfH1TYAAAAASUVORK5CYII="
						/>
						bower
					</a>
				</li>
				<li>
					<a href="http://bower.io/">BOWER: A package manager for the web</a>
				</li>
				<li>
					<a href="http://nodejs.org/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACQUlEQVQ4jX2TPWiVZxSAn/d9v597Q5IOIiWFGJBSWlDa4pShTh0dsli6FRTuqDgUOpR4K26CpY4tzdIlxMW9InTuoBAXtyYZUjW5JPfn+3l/znGwSkhvcrYD5zw853COYUrc2rjaLTuzKymY1XoSadpwZ+6D+Ojnbx7Wx2vN0aTf79vB8rMvC5m5maViRbyba1uhmrQj4FGW8cuH/3zytN/vy/8AvT+/PlfYvOekuJan7kIWO4h3hKA0tSeEhLN21zi7Vhh+ffDdH9sA5lKvl39xZevbzpx+b7AXXCpNHrscBYQQaeqAAZyzajP7XFK697d/sW6XPttbbAfFbUnm4vGRjk5qnUFUEVEjSS8O6vHt7qC7aPNcM1+Z3I/c9N53CGsQFBGl8i37o1GOklmKFpxSH1okmpMUAEgqBEkcVGNCigBYSjC5kALUQ4OeAlCUia9pYyCzlpISC2CcolZ4vdvS1nKqhZeINYbSFVD+Z2AzpQme4dCz/9qfagEgqjiXvTUoC4gamYwDqjDYb6iqcCogSEQ0UZZgo7ZxNAwheMEY8F54+WqC6skeqkodfPChjXZ272CnHqY+sAmoMTA4rBmOG4yZug01mE2R+NO/Mwc77ysu3728iJUemOuqunBmfpaPFz5CEviQCDFSte3uqG5+HzfNb49/eLwN8P56tp5sDbe+2v7rnF16gjEzPsTznbIoO3lBFB0llQ0iNz7d+3x97ce1g3d9Ux2X7y93XeVWzszPry6dPYsqd7KsmvrObwA+tTchrleiRQAAAABJRU5ErkJggg=="
						/>
						node.js
					</a>
				</li>
				<li>
					<a href="http://learnboost.github.io/stylus/">Stylus</a>
				</li>
				<li>
					<a href="http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeElEQVQ4jdWRz0tUcRTFP/e9r+MwE9koJgMJswqJqfAHgvLExctmyE07l/0VBRHkH+CqZf9CKxfBILiQaGGp4EJE3BgINqA4jDzUZt6710Ux1MOJFkF0dvdwzj2Xe+C/h/+XNGAgBh4gv5EJ3zV/jonK3IuxMJzpZuyQByVuRWX3uHmH/p/SMNVecThAH4bB3fFqNUifRGOEkno9y1lh41xthCheGDykDuhE5dF7NX0L4Jx7g0ldLWlsHjeesrUVewAak3NY0QwnsOL1EgH6I6SIMeCJ/8rayevPtZVpMZkaLRRmAXMAnuO8pSxlfcs5kZct3232zVf2752efm0jsYgYYrH55AHfMN8g7vzA2tzwRJ6JSEnV9r7hHQ1r/E5ymTLYkaleJIksivjPJ59U14Ha9urqB0A6ldWHyN/s77kfnbR3bh8TBUFQ+Fgsnj1oNrNnrVbyZW3tshyGQ/lMZuBTrbb7SxWW6j49pxvripTxuiXShf+HuAK3/YWbll81mQAAAABJRU5ErkJggg=="
						/>
						How to write a login form using Ember.js
					</a>
				</li>
				<li>
					<a href="http://stackoverflow.com/questions/14790747/ember-how-do-i-find-handlebars-partial-in-the-directory">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3UlEQVQ4jaWSP2hTURTGv3Pffe81RYeGVGloFYRIiXYpKDiUjC6Kgy4ugi0Wqq+2UjeXQAfFoSKJfx8FN6WDk+AigopbwCVRKP6p1rQYW1NU6Hvl5hynV2ISm4Lfdrjf9+N8l0PYQllAjZw7cJOIPBG8CL4GR1NP34f1HtUGwLN+aUIgj4mQcXvd+42eLQERZKO6PiyMgiI682X04JX6d2oVqtyyPRKJGzZ3ei7iOwB8Hh7YpxRekZIki5ze45cetQQsziDW4TgFENICqUAkJ8b4uyfxbXEkfRhkvYRisPCxvf67Z00VZn8iFNo4YZG5SpBOIjVNtl2s3NXTpu/tPLnBKTJaK9ZD/6wQaeEGenY6aowIF1isOBOvSmjfNsvxgn996UkW4L8Ac5eOxMh1z4tRH01N5sPqpw9nHywEpWz3jq6u36MddjgJQh+DexNjKDdtMDc1lLZsXYpmFlplVkWlaq9tFb5JdP7gXbEVd//llYeRR9cDqtotd/P6SaWsQYEcsoAULMoIKFNjF8u/kiivJTPA880MAcC45wkA5PL5pj+5N3U8oTX6Har1OwgH1gJ9rWhSS5FfNwYiWKRiCKDueHP5/MS4l9qc215iOzVt0KrGtgGN629H/13hD5TKuUFtsCROAAAAAElFTkSuQmCC"
						/>
						Ember: How to find handlebars partial in the directory
					</a>
				</li>
				<li>
					<a href="http://emberjs.com/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACvklEQVQ4jT2TQYhVVRjHf9855757Z948tTEMB4cUZRQZBLWEDCErEbKEVu3cRYtombsIgtxFUIRIEELiojZBRJsIJItClKBJKoeZyRl1Zphx8r2Z9+67597va3HfeFZn8fH7zv/7zk8Wzp02UwBDBBABNRAHGCaCE8HMAEBAQoCypOpuEIS61lTqAjNMao7FCFVETTAMaTTw2RCIoFqh/ZxgZrhBZzVDRBDA+jmNiUmGnjuJS1Ms9und+Inizm1cmoGrXxhEBAXM6ggGUEaap15jyxtv4kdabJ6h4y/x8OP3Kf76A3OCqeLMAKPOKQL9nOzocbadexs/0iIu3qPz3VfEpfv41lbSg4epHq6geQ8BHFpiZYmVEfIuVvRpvngGSVKsLGlfucjaJx8Q//kTUwXnMNP6LkLQ9Q6YYrHEVAlP76WxZwIzo5i+zca170kmJgm79yHOUc7PYIBTxYCA87jGMMmBvRTzMzT27ce1tiIixLlpskPP8sRb75KM7yH//Ve6v/yIZBmmVT3wf88es5GXX2X0nfeIiwtQliS7dmNmWK+LG25iZmz88C3tq5coVxYxH2oAEMQ7tNOmmJsmjI3jGunjfJJm5FO36HzzJfmN6+A96eRR4oO7VCvLiPcE5z35zZ8pZu+QPDXG8IlTNE+/jpmij9Z4dPlTygd3aRw4xPALr5BNHmH1sw+plu6D9wQtCsR5dHWZ7r054sIs6TPPE7bvwG3Zxuj5C1BV+NEncWlGtd5G1zsYMlgjYKqYVviRFlV7jf8+/4hyZQkJgWTHTpKdu3BphuY92l9/QTHzN5IkAAQ2JUHQPMeFhN5v16hWl2mePEMYG0fX28T5WfpTN+lN3QLvEBEwQ+bPHjM1Q9zmPzYkDLhONgWst1KVtZWDpiJC0IEDmA0AQFUh3tfCSA1xIiiGxvhYOID/AYS5W///vDdTAAAAAElFTkSuQmCC"
						/>
						Ember.js - About
					</a>
				</li>
				<li>
					<a href="http://getbootstrap.com/">Bootstrap</a>
				</li>
				<li>
					<a href="http://bootsnipp.com/forms">Twitter Bootstrap Form generator</a>
				</li>
				<li>
					<a href="http://www.browserswarm.com/">BrowserSwarm Tester sur tous les navigateurs</a>
				</li>
				<li>
					<a href="https://egghead.io/lessons/javascript-redux-react-todo-list-example-adding-a-todo">
						Redux: React Todo List Example (Adding a Todo) - js Video Tutorial #free @eggheadio
					</a>
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
					<a href="https://medium.com/javascript-scene/native-apps-are-doomed-ac397148a2c0#.2x2ku8eok">
						Native Apps are Doomed – JavaScript Scene – Medium
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
					<a href="https://css-houdini.rocks/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4jbWTUQ6CMBBER/1D7oaeiXAkDT/cQq9gghfQQNrnz5LUWiqYuEnTSacz3W630j8CtFuyNifeBLgE7VNcVgyqQGdQD7qBTqBqqUkNYmbUc6KtzQfbOIIGkAc5w6Nxx1Dzlj6oCwSYgTc8GNclrwEq7M7TqXH6zrgeVEy6MA0k+WyBEhEaPCVdzcgFphh2hi+SHnH6uSL6xUW0uck8YxPu/YiokVrQ3Ua7ppHiVi5T3DeT3z/T2ngBYgoBM/1LzzEAAAAASUVORK5CYII="
						/>
						CSS Houdini Experiments - @iamvdo
					</a>
				</li>
				<li>
					<a href="https://postcss.org/">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC0klEQVQ4jX2TzWvcZRSFn/P+JjOZmSZtQiOBtjpOEik2iDTYmKHWgEWsjQsXgrVIoSAu3Aru/AMEXas77apYRPAjBWkpJckgGETR2homo6S0aAgEne/M7z0uJJBufFZ3cc+BC/cRe9iYGx7dUfpixEclJ1gvCNoWP9kE8M+ZjL8s3ezUdzPaHdae2fe40ng+oNsZ+Vov6gnEuPAjDnyV9ONWquSUxHHwt+WV1qIgBoC1Sm5CaXqRwOfllealPsmQgks5Ny9HhSuKLDA4uD1ZbX7qTHwf8dJ6pXAGINyboZAouSD5i8ml1mptZmS/nT4H8ZsjVdpTy41fLN92t3feECZvtjdQ+gFwtjabm8q0soXnQ9Tf5WpnGcDZ7qvAIaJmanOF05aLAQ1ZnFmvFOyV1oda6v5WmysukUnOBcGJNGhR4Prc0FFgWjAu6SKBc4JZR04KrgJna6fyhwAUwqrM8WBoD8bGen2+NOgk5gQ/YA4IXe4MFF8ur7RfJ/Cu0RjiMH1dMAQNJH9axCCr2s+V3Gk9VCwvNX+0FJHb6f7mZ8dubDYEnlhufQ+xg70lU6hXiqe7O5lUkA8hiY0WzUxsNP4BkOlBuDa1SHfvj2AdNOolDpfAC1m1yzZpCMre4a+x3rFbt3r/3Rb74IfXZkeHd7O1k7nHCIwKGtmdxh8WV2P0W4DkV0h+3zwwlPb62TSrmPT6rwU0ZrhnkwrnLWZkVi1NS3wUrH6Ed0zcydy9S9baOSH7cKYn41AwccsoKjAu1Ld1PcB9B6/jmI8xySk4D1wRQP2p4ngc8EzWretHqrT5HwyhNld4Q2ikXG2+FwBKpeYm9nCP/Jv1pwdL3uPIXu7MDx2sVYpvEzyZJflYEPVAc2XfvOwFQtxw5LvMgO/HPjF1GE2kacuzRK2F3MAnj97Y3n7Axj1WjiVp+mxETwpGZIoOdIj+1cSvJ6rddUHc3f8XdRRbOorYWF4AAAAASUVORK5CYII="
						/>
						PostCSS
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
