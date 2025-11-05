const main = document.querySelector("main");
const badgeSnippet = `<a href="https://squidee.dev/"><img src="https://squidee.dev/img/badges/88x31_squidee.gif"></a>`;

function setMouseEffect(state) {
	document.getElementById("underwater-effect").style.display = state ? "block" : "none";
}

let template = `<div id="content">
	<div id="left">
		<div class="container">
			<a href="index.html" id="hero-image">
				<img src="img/zanesquid3_small.png" alt="me with a squid hat">
			</a>
			<div>
				<h4>my button</h4>
				<a class="button-88x31"><img src="https://squidee.dev/img/badges/88x31_squidee.gif" alt="squidee"></a>
				<textarea rows="3" onclick="this.select()" class="hide-scroll-buttons" style="resize: none; width: 100%;">${badgeSnippet}</textarea>
			</div>
			<div>
				<h4>sitemap</h4>
				<ul class="unstyled-ul">
					<li><a href="index.html" class="small link">me</a></li>
					<li><a href="stuff.html" class="small link">stuff</a></li>
					<li><a href="playlist.html" class="small link">playlist</a></li>
					<li><a href="updates.html" class="small link">updates</a></li>
				</ul>
			</div>
			<a href="updates.html" id="whats-new">
				<h4>what's new?</h4>
				<b>05-11-25</b>
				<span class="small" id="whats-new-text">a bunch of very intersting text goes here. i hope there isn't too much text.</span>
			</a>
		</div>
		<div class="container" id="settings">
			<label id="mouse-effect"><input type="checkbox" /> <b>mouse effect</b></label>
		</div>
	</div>
	<div id="center">
		<nav>
			<a href="index.html">me</a>
			<a href="stuff.html">stuff</a>
			<a href="https://squidee.dev/blog" class="nav-external">blog</a>
			<a href="https://squidee.dev/guestbook" class="nav-external">guestbook</a>
		</nav>
		<main class="container">%COOL MAIN CONTENT%</main>
	</div>
	<div id="right">
		<div class="container">
			<div>
				<h4>subdomains</h4>
				<ul class="unstyled-ul">
					<li><a href="https://paste.squidee.dev/" target="_blank" class="small link">paste</a></li>
					<li><a href="https://workoutcomposer.squidee.dev/" target="_blank" class="small link">workoutcomposer</a></li>
				</ul>
			</div>
			<div>
				<h4>stuff i'm doing</h4>
				<ul class="unstyled-ul">
					<li><a href="https://github.com/zaneshaw/fishcove64/" target="_blank" class="small link">fishcove64</a></li>
					<li><a href="https://www.youtube.com/@LiamStreamArchive/" target="_blank" class="small link">Liam Stream Archive</a></li>
				</ul>
			</div>
			<div>
				<h4>other links</h4>
				<ul class="unstyled-ul">
					<li><a href="https://squidee.dev/" target="_blank" class="small link">squidee.dev</a></li>
					<li><a href="https://github.com/zaneshaw/" target="_blank" class="small link">github</a></li>
					<li><a href="https://x.com/zaneshaw_/" target="_blank" class="small link">twitter</a></li>
				</ul>
			</div>
			<div id="cool-sites">
				<h4>cool sites</h4>
				<a href="https://dimden.dev/" target="_blank" class="button-88x31"><img src="img/badges/88x31_dimden.gif" alt="dimden"></a>
				<a href="https://ribo.zone/" target="_blank" class="button-88x31"><img src="img/badges/88x31_ribose.png" alt="ribo zone"></a>
				<a href="https://2275.nekoweb.org/" target="_blank" class="button-88x31"><img src="img/badges/88x31_2275.gif" alt="2275 THE ENIGMATIC"></a>
				<a href="https://milkbones.nekoweb.org/" target="_blank" class="button-88x31"><img src="img/badges/88x31_milkbones.gif" alt="milkbones"></a>
				<a href="https://bekianee.nekoweb.org" target="_blank" class="button-88x31"><img src="img/badges/88x31_beki.gif" alt="beki"></a>
				<a href="https://thecreare.dev/" target="_blank" class="button-88x31" id="creare-button"><span>=^･ω･^=</span></a>
			</div>
		</div>
	</div>
</div>
<footer class="container">
	<a href="http://www.acasystems.com/en/button-maker/" target="_blank">
		<img src="img/badges/80x15_human_made.png" alt="human made 80x15 badge">
	</a>
	<div class="small" id="footer-center">
		<span>🦑</span>
		<span>created <i>4 Nov 2025</i></span>
		<span>🦑</span>
		<span>last updated <i>5 Nov 2025</i></span>
		<span>🦑</span>
	</div>
	<div id="oneko-spawn"></div>
</footer>
<div class="water"><div></div></div>
<div class="water" id="water-two"><div></div></div>
<div id="underwater-effect"></div>
<div id="squid"></div>`;

if (main.dataset["replaceme"] != undefined) {
	template = template.replace("%COOL MAIN CONTENT%", main.innerHTML);
	main.outerHTML = template;

	const onekoScript = document.createElement("script");
	onekoScript.src = "oneko.js";
	document.body.appendChild(onekoScript);

	const underwaterEffectScript = document.createElement("script");
	underwaterEffectScript.src = "underwater_effect.js";
	document.body.appendChild(underwaterEffectScript);
}

// todo: change to settings json
const mouseEffectCheckbox = document.getElementById("mouse-effect").querySelector("input");
const mouseEffectState = window.localStorage.getItem("mouse_effect");

mouseEffectCheckbox.checked = mouseEffectState == null ? true : mouseEffectState == "true";

mouseEffectCheckbox.addEventListener("change", (e) => {
	window.localStorage.setItem("mouse_effect", e.target.checked);
	setMouseEffect(e.target.checked);
});

setMouseEffect(mouseEffectCheckbox.checked);

const sleepRange = [300, 600];
const squidEl = document.getElementById("squid");
let squid = {
	posX: 0,
	posY: 0,
	velocityX: 0,
	velocityY: 0,
	sleeping: true,
	sleepTimer: Math.floor(Math.random() * (sleepRange[1] - sleepRange[0]) + sleepRange[1]),
	slow: false,
};

let squidLocalStorage = window.localStorage.getItem("squid");
if (squidLocalStorage != null) {
	squid = JSON.parse(squidLocalStorage);
}

window.addEventListener("beforeunload", function (e) {
	window.localStorage.setItem("squid", JSON.stringify(squid));
});

// rewrite at some point
function processSquid() {
	if (squid.sleeping && squid.sleepTimer <= 0) {
		squid.sleeping = false;
		squid.posX = window.innerWidth - 150;
		squid.posY = 100;
		squid.velocityX = 5;
		squid.velocityY = -1;
	}

	if (squid.sleeping) {
		squid.sleepTimer--;
	} else {
		if (squid.velocityY > 1) {
			squidEl.style.backgroundPositionX = "300px";
		} else {
			if (squid.posY < 105) {
				squidEl.style.backgroundPositionX = "600px";
				squid.slow = true;
			} else {
				squidEl.style.backgroundPositionX = "0px";
			}
		}

		if (squid.posY < 100) {
			squid.velocityX = 8;
			squid.velocityY = 5;
			squid.slow = false;
		}

		squid.posX -= squid.velocityX;
		squid.posY += squid.velocityY;
		squid.velocityX -= 0.15;
		squid.velocityY -= 0.3;
		if (squid.slow) {
			if (squid.velocityX < 1) squid.velocityX = 1;
			if (squid.velocityY < -0.3) squid.velocityY = -0.3;
		} else {
			if (squid.velocityX < 3) squid.velocityX = 3;
			if (squid.velocityY < -1) squid.velocityY = -1;
		}

		if (squid.posX < -300) {
			squid.sleeping = true;
			squid.sleepTimer = Math.floor(Math.random() * (sleepRange[1] - sleepRange[0]) + sleepRange[1]);
		}
	}

	squidEl.style.left = `${squid.posX}px`;
	squidEl.style.bottom = `${squid.posY}px`;
	squidEl.style.display = squid.sleeping ? "none" : "block";
}

setInterval(processSquid, 40);

document.body.style.visibility = "visible";
