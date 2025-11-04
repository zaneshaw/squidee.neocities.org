const main = document.querySelector("main");

let template = `<div id="content">
	<div class="container" id="left">
		<div>
			<img src="zanesquid3_small.png" alt="me with a squid hat" class="image">
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
			<b>subdomains</b>
			<a href="https://paste.squidee.dev/" target="_blank" class="small">paste</a>
			<a href="https://workoutcomposer.squidee.dev/" target="_blank" class="small">workoutcomposer</a>
		</div>
		<div>
			<b>stuff i'm doing</b>
			<a href="https://www.youtube.com/@LiamStreamArchive/" target="_blank" class="small">Liam Stream Archive</a>
		</div>
		<div id="cool-sites">
			<b>cool sites</b>
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
