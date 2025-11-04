const main = document.querySelector("main");

let template = `<div id="content">
	<div class="container" id="left">
		<div id="hero-image">
			<img src="zanesquid3_small.png" alt="me with a squid hat" class="image">
		</div>
		<div>
			<h4>♫ playlist</h4>
			<ul class="unstyled-ul">
				<li><a href="https://open.spotify.com/track/1W0hhsgQfWPumKwR5k6SAJ" target="_blank" class="small">watching you float</a></li>
				<li><a href="https://open.spotify.com/track/3NQvJtfgay2fjNwI5afZjs" target="_blank" class="small">A Waking Tomorow</a></li>
				<li><a href="https://open.spotify.com/track/4gatGAviEcd9h4cTyggtgs" target="_blank" class="small">Mezzanine</a></li>
				<li><a href="https://open.spotify.com/track/3n70xNuonBPREFhMyFV6bt" target="_blank" class="small">Paralyzed</a></li>
				<li><a href="https://open.spotify.com/track/4CD4GfHOwo5ZP4FkIMTK6j" target="_blank" class="small">The Con</a></li>
				<li><a href="https://open.spotify.com/track/6eu6WZglMjE5TU1WNodrdF" target="_blank" class="small">pitching stones</a></li>
				<li><a href="https://open.spotify.com/track/3n70xNuonBPREFhMyFV6bt" target="_blank" class="small">Stop Pretendinng you Like Salad</a></li>
				<li><a href="https://open.spotify.com/track/7t91UB7Swk7LxciSLEQiQU" target="_blank" class="small">pretty thing</a></li>
				<li><a href="https://open.spotify.com/track/03eQWXfDBSLs4ZWq4Ki4h4" target="_blank" class="small">Claw Machine</a></li>
				<li><a href="https://open.spotify.com/track/0CCYVn1a4xUV83NZTCrRTL" target="_blank" class="small">an angel strikes</a></li>
				<li><a href="https://open.spotify.com/track/34BbMQc4AFjbojU7q5p9yJ" target="_blank" class="small">god complex</a></li>
				<li><a href="https://open.spotify.com/track/1QMSdd43oAIzSywXO1U2hO" target="_blank" class="small">VANISHING ACT</a></li>
				<li><a href="https://open.spotify.com/track/2zsfWeC0hlhYXBX0BdBOvu" target="_blank" class="small">whiskey flavoured lips</a></li>
				<li><a href="https://open.spotify.com/track/6hU85VYvoDJgpAwshYZVPr" target="_blank" class="small">angels have fallen</a></li>
			</ul>
		</div>
	</div>
	<div id="center">
		<nav>
			<a href="index.html">me</a>
			<a href="stuff.html">stuff</a>
			<a href="blog.html">blog</a>
			<a href="guestbook.html">guestbook</a>
		</nav>
		<main class="container">%COOL MAIN CONTENT%</main>
	</div>
	<div class="container" id="right">
		<div>
			<h4>subdomains</h4>
			<a href="https://paste.squidee.dev/" target="_blank" class="small">paste</a>
			<a href="https://workoutcomposer.squidee.dev/" target="_blank" class="small">workoutcomposer</a>
		</div>
		<div>
			<h4>stuff i'm doing</h4>
			<a href="https://www.youtube.com/@LiamStreamArchive/" target="_blank" class="small">Liam Stream Archive</a>
		</div>
		<div id="cool-sites">
			<h4>cool sites</h4>
			<a href="https://dimden.dev/" target="_blank" class="button-88x31"><img src="https://dimden.dev/services/images/88x31.gif" alt="dimden"></a>
			<a href="https://ribo.zone/" target="_blank" class="button-88x31"><img src="https://ribo.zone/88x31/site/ribose.png" alt="ribo zone"></a>
			<a href="https://2275.nekoweb.org/" target="_blank" class="button-88x31"><img src="https://2275.nekoweb.org/images/2275button.gif" alt="2275 THE ENIGMATIC"></a>
			<a href="https://milkbones.nekoweb.org/" target="_blank" class="button-88x31"><img src="https://i.imgur.com/Y1kObgV.gif" alt="milkbones"></a>
			<a href="https://bekianee.nekoweb.org" target="_blank" class="button-88x31"><img src="https://districts.nekoweb.org/img/listings/bekianeenekoweborg002.gif" alt="beki"></a>
			<a href="https://thecreare.dev/" target="_blank" class="button-88x31" id="creare-button">=^･ω･^=</a>
			<a href="https://onlywonder.net/" target="_blank" class="button-88x31"><img src="https://onlywonder.net/assets/button2.png" alt="wonder"></a>
		</div>
	</div>
</div>
<footer class="container">
	<a href="http://www.acasystems.com/en/button-maker/" target="_blank">
		<img src="80x15_human_made.png" alt="human made 80x15 badge">
	</a>
	<div id="oneko-spawn"></div>
</footer>`;

if (main.dataset["replaceme"] != undefined) {
	template = template.replace("%COOL MAIN CONTENT%", main.innerHTML);
	main.outerHTML = template;

	const onekoScript = document.createElement("script");
	onekoScript.src = "oneko.js";
	document.body.appendChild(onekoScript);
}

document.body.style.visibility = "visible";
