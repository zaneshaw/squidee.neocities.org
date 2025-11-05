const main = document.querySelector("main");

function setMouseEffect(state) {
	document.getElementById("underwater-effect").style.display = state ? "block" : "none";
}

let template = `<div id="content">
	<div id="left">
		<div class="container">
			<a href="index.html" id="hero-image">
				<img src="zanesquid3_small.png" alt="me with a squid hat" class="image">
			</a>
			<div>
				<h4>♫ playlist</h4>
				<ul class="unstyled-ul">
					<li><a href="https://open.spotify.com/track/1W0hhsgQfWPumKwR5k6SAJ" target="_blank" class="small link">watching you float</a></li>
					<li><a href="https://open.spotify.com/track/3NQvJtfgay2fjNwI5afZjs" target="_blank" class="small link">A Waking Tomorow</a></li>
					<li><a href="https://open.spotify.com/track/4gatGAviEcd9h4cTyggtgs" target="_blank" class="small link">Mezzanine</a></li>
					<li><a href="https://open.spotify.com/track/3n70xNuonBPREFhMyFV6bt" target="_blank" class="small link">Paralyzed</a></li>
					<li><a href="https://open.spotify.com/track/4CD4GfHOwo5ZP4FkIMTK6j" target="_blank" class="small link">The Con</a></li>
					<li><a href="https://open.spotify.com/track/6eu6WZglMjE5TU1WNodrdF" target="_blank" class="small link">pitching stones</a></li>
					<li><a href="https://open.spotify.com/track/6fTH4b7b5Mvp9xxOSoDiZl" target="_blank" class="small link">Stop Pretendinng you Like Salad</a></li>
					<li><a href="https://open.spotify.com/track/7t91UB7Swk7LxciSLEQiQU" target="_blank" class="small link">pretty thing</a></li>
					<li><a href="https://open.spotify.com/track/03eQWXfDBSLs4ZWq4Ki4h4" target="_blank" class="small link">Claw Machine</a></li>
					<li><a href="https://open.spotify.com/track/0CCYVn1a4xUV83NZTCrRTL" target="_blank" class="small link">an angel strikes</a></li>
					<li><a href="https://open.spotify.com/track/34BbMQc4AFjbojU7q5p9yJ" target="_blank" class="small link">god complex</a></li>
					<li><a href="https://open.spotify.com/track/1QMSdd43oAIzSywXO1U2hO" target="_blank" class="small link">VANISHING ACT</a></li>
					<li><a href="https://open.spotify.com/track/2zsfWeC0hlhYXBX0BdBOvu" target="_blank" class="small link">whiskey flavoured lips</a></li>
					<li><a href="https://open.spotify.com/track/6hU85VYvoDJgpAwshYZVPr" target="_blank" class="small link">angels have fallen</a></li>
				</ul>
			</div>
		</div>
		<div class="container" id="settings">
			<label id="mouse-effect"><input type="checkbox" /> <b>mouse effect</b></label>
		</div>
	</div>
	<div id="center">
		<nav>
			<a href="index.html">me</a>
			<a href="stuff.html">stuff</a>
			<a href="https://squidee.dev/blog">blog</a>
			<a href="https://squidee.dev/guestbook">guestbook</a>
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
				<a href="https://dimden.dev/" target="_blank" class="button-88x31"><img src="https://dimden.dev/services/images/88x31.gif" alt="dimden"></a>
				<a href="https://ribo.zone/" target="_blank" class="button-88x31"><img src="https://ribo.zone/88x31/site/ribose.png" alt="ribo zone"></a>
				<a href="https://2275.nekoweb.org/" target="_blank" class="button-88x31"><img src="https://2275.nekoweb.org/images/2275button.gif" alt="2275 THE ENIGMATIC"></a>
				<a href="https://milkbones.nekoweb.org/" target="_blank" class="button-88x31"><img src="https://i.imgur.com/Y1kObgV.gif" alt="milkbones"></a>
				<a href="https://bekianee.nekoweb.org" target="_blank" class="button-88x31"><img src="https://districts.nekoweb.org/img/listings/bekianeenekoweborg002.gif" alt="beki"></a>
				<a href="https://thecreare.dev/" target="_blank" class="button-88x31" id="creare-button">=^･ω･^=</a>
			</div>
		</div>
	</div>
</div>
<footer class="container">
	<a href="http://www.acasystems.com/en/button-maker/" target="_blank">
		<img src="80x15_human_made.png" alt="human made 80x15 badge">
	</a>
	<div class="small" id="footer-center">
		<span>🦑</span>
		<span>created 4 Nov 2025</span>
		<span>🦑</span>
		<span>last updated 5 Nov 2025</span>
		<span>🦑</span>
	</div>
	<div id="oneko-spawn"></div>
</footer>
<div id="underwater-effect"></div>`;

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

document.body.style.visibility = "visible";
