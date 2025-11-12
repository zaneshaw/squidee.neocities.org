const main = document.querySelector("main");
const badgeSnippet = `<a href="https://squidee.nekoweb.org"><img src="https://squidee.nekoweb.org/assets/images/badges/88x31_squidee.gif"></a>`;

const scripts = ["/scripts/oneko.js", "/scripts/underwater_effect.js", "/scripts/howler.js"];

let bgm;

function applySettings(settings) {
	bgm?.mute(!settings["bgm"]);
	document.getElementById("bgm-mute-icon").innerText = settings["bgm"] ? "🔊" : "🔇";

	document.getElementById("squid").style.visibility = settings["squid"] ? "visible" : "hidden";
	squidCheckbox.innerText = settings["squid"] ? "hide squid" : "show squid";
}

function saveSettings(settings) {
	window.localStorage.setItem("settings", JSON.stringify(settings));
}

let layout =
	/* HTML */
	`<div id="content">
			<div id="left">
				<div class="container">
					<a href="/index.html" id="hero-image">
						<img src="/assets/images/zanesquid3_small.png" alt="me with a squid hat" />
					</a>
					<div>
						<h2>my badge</h2>
						<a class="button-88x31"><img src="/assets/images/badges/88x31_squidee.gif" alt="squidee" /></a>
						<textarea rows="3" onclick="this.select()" class="hide-scrollbar-buttons" style="resize: none; width: 100%;">${badgeSnippet}</textarea>
					</div>
					<div>
						<h2>sitemap</h2>
						<ul class="unstyled-ul">
							<li><a href="/index.html" class="link">me</a></li>
							<li><a href="/stuff.html" class="link">stuff</a></li>
							<li><a href="/gallery.html" class="link">gallery</a></li>
							<li><a href="/updates.html" class="link">updates</a></li>
						</ul>
					</div>
					<a href="/updates.html" id="whats-new">
						<h2>what's new?</h2>
						<ul class="unstyled-ul">
							<li>10-11-25 gallery</li>
							<li>09-11-25 bg music</li>
							<li>07-11-25 new badge</li>
						</ul>
					</a>
				</div>
				<div class="container" style="flex-grow: 0; gap: 5px;">
					<div>
						<h2>stats</h2>
						<ul class="unstyled-ul">
							<li>views: <i id="stats-views" style="float: right;">...</i></li>
							<li>followers: <i id="stats-followers" style="float: right;">...</i></li>
						</ul>
					</div>
					<iframe src="https://nekoweb.org/frame/follow" id="follow-button"></iframe>
				</div>
			</div>

			<div id="center">
				<nav>
					<a href="/index.html">me</a>
					<a href="/stuff.html">stuff</a>
					<a href="/gallery.html">gallery</a>
					<a href="https://squidee.dev/guestbook" class="nav-external">guestbook</a>
				</nav>
				%COOL MAIN CONTENT%
			</div>

			<div id="right">
				<div class="container">
					<div>
						<h2>subdomains</h2>
						<ul class="unstyled-ul">
							<li><a href="https://paste.squidee.dev/" target="_blank" class="link">paste</a></li>
							<li>
								<a href="https://workoutcomposer.squidee.dev/" target="_blank" class="link">workoutcomposer</a>
							</li>
						</ul>
					</div>
					<div>
						<h2>stuff i'm doing</h2>
						<ul class="unstyled-ul">
							<li>
								<a href="https://github.com/zaneshaw/fishcove64/" target="_blank" class="link">fishcove64</a>
							</li>
							<li>
								<a href="https://www.youtube.com/@LiamStreamArchive/" target="_blank" class="link">Liam Stream Archive</a>
							</li>
						</ul>
					</div>
					<div class="badge-list">
						<h2>friends</h2>
						<a href="https://pincasplace.neocities.org/" target="_blank" class="button-88x31"><img src="/assets/images/badges/88x31_pinca.gif" alt="pinca" /></a>
						<a href="https://mackos.nekoweb.org/" target="_blank" class="button-88x31"><span style="background-color: hsl(0, 0%, 80%);">mackOS</span></a>
					</div>
					<div class="badge-list">
						<h2>webrings</h2>
						<div style="display: flex; align-items: center; gap: 10px; flex-direction: row-reverse; width: min-content;">
							<map name="noaimini14">
								<area href="https://baccyflap.com/noai" shape="rect" coords="21,0,47,30" target="_blank" alt="no ai webring" title="no ai webring" />
								<area href="https://baccyflap.com/noai/?prv&s=sqd" target="_top" shape="rect" coords="1,13,19,29" alt="previous" title="previous" />
								<area href="https://baccyflap.com/noai/?rnd" target="_top" shape="rect" coords="59,7,66,16" alt="random" title="random" />
								<area href="https://baccyflap.com/noai/?nxt&s=sqd" target="_top" shape="rect" coords="68,1,86,17" alt="next" title="next" />
							</map>
							<img
								usemap="#noaimini14"
								src="https://baccyflap.com/noai/miniwidget14.gif"
								alt="a bluegreen rectangle showing the words the NO AI webring, with NO AI being written by a fountain pen, all in the style of 16 bit Windows 95 icons. to either side are two equally Windows-95-style cursors pointing left and right, softly bouncing up and down. in between it all is a small black question mark"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footer class="container">
			<a href="http://www.acasystems.com/en/button-maker/" target="_blank">
				<img src="/assets/images/badges/80x15_human_made.png" alt="human made 80x15 badge" />
			</a>
			<div id="footer-center">
				<span>🦑</span>
				<span class="link" id="bgm-toggle">bgm: <span id="bgm-name">???</span> <span id="bgm-mute-icon">🔊</span></span>
				<span>🦑</span>
				<span class="link" id="squid-toggle">hide the squid</span>
				<span>🦑</span>
			</div>
			<div id="oneko-spawn"></div>
		</footer>

		<div id="screen-overlay">
			<div class="water"><div></div></div>
			<div class="water" id="water-two"><div></div></div>
			<div id="underwater-effect"></div>
			<div id="squid"></div>
		</div>`;

if (main.dataset["maincontent"] != undefined) {
	delete main.dataset["maincontent"];
	layout = layout.replace("%COOL MAIN CONTENT%", main.outerHTML);
	main.outerHTML = layout;

	for (const src of scripts) {
		const script = document.createElement("script");
		script.src = src;
		document.body.appendChild(script);
	}
}

const defaultSettings = {
	bgm: true,
	squid: true,
};
let settings = {};
const settingsLS = window.localStorage.getItem("settings");
if (settingsLS == null) {
	settings = defaultSettings;
} else {
	settings = { ...defaultSettings, ...JSON.parse(settingsLS) };
}
saveSettings(settings);

const squidCheckbox = document.getElementById("squid-toggle");

squidCheckbox.addEventListener("click", () => {
	settings["squid"] = !settings["squid"];
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

const squidLocalStorage = window.localStorage.getItem("squid");
if (squidLocalStorage != null) {
	squid = JSON.parse(squidLocalStorage);
}

window.addEventListener("beforeunload", function () {
	window.localStorage.setItem("squid", JSON.stringify(squid));

	window.sessionStorage.setItem("bgm_seek", bgm?.seek() ?? 0);
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

const bgmToggle = document.getElementById("bgm-toggle");
const bgmVolume = 0.05;
const bgmTracks = [
	{ name: "波", path: "/assets/sounds/波_16k.opus" },
	{ name: "aqua alaganza", path: "/assets/sounds/aqua_alaganza_16k.opus" },
	{ name: "公衆 pool", path: "/assets/sounds/公衆_pool_16k.opus" },
	{ name: "thirdeye.wave", path: "/assets/sounds/thirdeye.wave_16k.opus" },
];
const bgmIndex = new Date().getDate() % bgmTracks.length;
document.querySelector("#bgm-name").innerText = bgmTracks[bgmIndex].name;

window.addEventListener("load", () => {
	let bgmSeek = window.sessionStorage.getItem("bgm_seek");
	if (bgmIndex != window.sessionStorage.getItem("bgm_index")) {
		bgmSeek = 0;
		window.sessionStorage.setItem("bgm_seek", 0);
	}
	window.sessionStorage.setItem("bgm_index", bgmIndex);

	bgm = new Howl({
		src: [bgmTracks[bgmIndex].path],
		preload: true,
		loop: true,
		volume: bgmVolume,
		mute: !settings["bgm"],
	});
	bgm.seek(bgmSeek ?? 0);
	bgm.play();
	bgm.fade(0, bgmVolume, 2000);

	bgmToggle.addEventListener("click", () => {
		settings["bgm"] = !settings["bgm"];

		applySettings(settings);
		saveSettings(settings);
	});

	document.addEventListener("visibilitychange", () => {
		if (document.hidden) {
			bgm.fade(bgm.volume(), 0, 500);
		} else {
			bgm.fade(bgm.volume(), bgmVolume, 500);
		}
	});
});

const statsLS = window.localStorage.getItem("stats");
if (statsLS) {
	const stats = JSON.parse(statsLS);
	document.getElementById("stats-views").innerText = stats.views;
	document.getElementById("stats-followers").innerText = stats.followers;
}

if (!statsLS || Date.now() - (JSON.parse(statsLS)["time_fetched"] || 0) > 60000) {
	fetch("https://nekoweb.org/api/site/info/squidee.nekoweb.org")
		.then((res) => res.json())
		.then((json) => {
			document.getElementById("stats-views").innerText = json.views;
			document.getElementById("stats-followers").innerText = json.followers;

			window.localStorage.setItem("stats", JSON.stringify({ time_fetched: Date.now(), views: json.views, followers: json.followers }));
		});
}
