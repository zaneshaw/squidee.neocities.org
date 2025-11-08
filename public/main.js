const main = document.querySelector("main");
const badgeSnippet = `<a href="https://squidee.neocities.org"><img src="https://squidee.neocities.org/img/badges/88x31_squidee.gif"></a>`;

function applySettings(settings) {
	document.getElementById("underwater-effect").style.display = settings["mouse_effect"] ? "block" : "none";
	document.getElementById("squid").style.visibility = settings["squid"] ? "visible" : "hidden";
}

function saveSettings(settings) {
	window.localStorage.setItem("settings", JSON.stringify(settings));
}

let template = `<div id="content">
	<div id="left">
		<div class="container">
			<a href="index.html" id="hero-image">
				<img src="img/zanesquid3_small.png" alt="me with a squid hat">
			</a>
			<div>
				<h2>my badge</h2>
				<a class="button-88x31"><img src="img/badges/88x31_squidee.gif" alt="squidee"></a>
				<textarea rows="3" onclick="this.select()" class="hide-scroll-buttons" style="resize: none; width: 100%;">${badgeSnippet}</textarea>
			</div>
			<div>
				<h2>sitemap</h2>
				<ul class="unstyled-ul">
					<li><a href="index.html" class="link">me</a></li>
					<li><a href="stuff.html" class="link">stuff</a></li>
					<li><a href="playlist.html" class="link">playlist</a></li>
					<li><a href="updates.html" class="link">updates</a></li>
					<li><a href="squid.html" class="link">squid</a></li>
				</ul>
			</div>
			<a href="updates.html" id="whats-new">
				<h2>what's new?</h2>
				<ul class="unstyled-ul">
					<li>08-11-25 neocities</li>
					<li>07-11-25 new badge</li>
					<li>06-11-25 smaller text</li>
				</ul>
			</a>
			<div id="settings">
				<label><input type="checkbox" id="mouse-effect-toggle" /><img src="img/bubble.png"></label>
				<label><input type="checkbox" id="squid-toggle" /><img src="img/squid1.png"></label>
			</div>
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
				<h2>subdomains</h2>
				<ul class="unstyled-ul">
					<li><a href="https://paste.squidee.dev/" target="_blank" class="link">paste</a></li>
					<li><a href="https://workoutcomposer.squidee.dev/" target="_blank" class="link">workoutcomposer</a></li>
				</ul>
			</div>
			<div>
				<h2>stuff i'm doing</h2>
				<ul class="unstyled-ul">
					<li><a href="https://github.com/zaneshaw/fishcove64/" target="_blank" class="link">fishcove64</a></li>
					<li><a href="https://www.youtube.com/@LiamStreamArchive/" target="_blank" class="link">Liam Stream Archive</a></li>
				</ul>
			</div>
			<div class="badge-list">
				<h2>friends</h2>
				<a href="https://pincasplace.neocities.org/" target="_blank" class="button-88x31"><img src="img/badges/88x31_pinca.gif" alt="pinca"></a>
				<div><a href="https://mackerel.dev/" target="_blank" class="link">mackereldev</a></div>
			</div>
			<div class="badge-list">
				<h2>cool sites</h2>
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
	<div id="footer-center">
		<span>🦑</span>
		<span>created <i>4 Nov 2025</i></span>
		<span>🦑</span>
		<span>last updated <i>8 Nov 2025</i></span>
		<span>🦑</span>
	</div>
	<div id="oneko-spawn"></div>
</footer>
<div id="screen-overlay">
	<div class="water"><div></div></div>
	<div class="water" id="water-two"><div></div></div>
	<div id="underwater-effect"></div>
	<a href="squid.html"><div id="squid"></div></a>
</div>`;

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

const defaultSettings = {
	mouse_effect: true,
	squid: true,
}
let settings = {};
const settingsLS = window.localStorage.getItem("settings");
if (settingsLS == null) {
	settings = defaultSettings;
	saveSettings(settings);
} else {
	settings = JSON.parse(settingsLS);
}

const mouseEffectCheckbox = document.getElementById("mouse-effect-toggle");
const squidCheckbox = document.getElementById("squid-toggle");
mouseEffectCheckbox.checked = settings["mouse_effect"];
squidCheckbox.checked = settings["squid"];

mouseEffectCheckbox.addEventListener("change", (e) => {
	settings["mouse_effect"] = e.target.checked;
	applySettings(settings);
	saveSettings(settings);
});

squidCheckbox.addEventListener("change", (e) => {
	settings["squid"] = e.target.checked;
	applySettings(settings);
	saveSettings(settings);
});

applySettings(settings);

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
