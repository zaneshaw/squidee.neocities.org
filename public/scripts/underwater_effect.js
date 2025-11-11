// <![CDATA[
var colours = new Array("#76f", "#20f", "#20f", "#76f", "#ccc"); // colours for top, right, bottom and left borders and background of bubbles
var bubbles = 80; // maximum number of bubbles on screen
var over_or_under = "over"; // set to "over" for bubbles to always be on top, or "under" to allow them to float behind other objects

/****************************
 * JavaScript Bubble Cursor  *
 *(c)2010-13 mf2fm web-design*
 *  http://www.mf2fm.com/rv  *
 * DON'T EDIT BELOW THIS BOX * <-- oops
 ****************************/
var x = (ox = 400);
var y = (oy = 300);
var swide = 800;
var shigh = 600;
var sleft = (sdown = 0);
var bubb = new Array();
var bubbx = new Array();
var bubby = new Array();
var bubbs = new Array();
var sploosh = false;

function buble() {
	document.getElementById("underwater-effect").innerHTML = "";

	if (document.getElementById) {
		var i, rats, div;
		for (i = 0; i < bubbles; i++) {
			rats = createDiv("3px", "3px");
			rats.style.visibility = "hidden";
			rats.style.zIndex = over_or_under == "over" ? "2147483647" : "0";

			div = createDiv("auto", "auto");
			rats.appendChild(div);
			div = div.style;
			div.top = "1px";
			div.left = "0px";
			div.bottom = "1px";
			div.right = "0px";
			div.borderLeft = "1px solid " + colours[3];
			div.borderRight = "1px solid " + colours[1];

			div = createDiv("auto", "auto");
			rats.appendChild(div);
			div = div.style;
			div.top = "0px";
			div.left = "1px";
			div.right = "1px";
			div.bottom = "0px";
			div.borderTop = "1px solid " + colours[0];
			div.borderBottom = "1px solid " + colours[2];

			div = createDiv("auto", "auto");
			rats.appendChild(div);
			div = div.style;
			div.left = "1px";
			div.right = "1px";
			div.bottom = "1px";
			div.top = "1px";
			div.backgroundColor = colours[4];
			if (navigator.appName == "Microsoft Internet Explorer") div.filter = "alpha(opacity=50)";
			else div.opacity = 0.5;
			document.getElementById("underwater-effect").appendChild(rats);
			bubb[i] = rats;
		}
		set_scroll();
		set_width();
		bubble();
	}
}

function bubble() {
	var c;
	if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
		ox = x;
		oy = y;
		for (c = 0; c < bubbles; c++)
			if (!bubby[c]) {
				bubb[c].style.left = (bubbx[c] = x) + "px";
				bubb[c].style.top = (bubby[c] = y - 3) + "px";
				bubb[c].style.width = "3px";
				bubb[c].style.height = "3px";
				bubb[c].style.visibility = "visible";
				bubb[c].dataset.lifetime = Math.floor(Math.random() * (100 - 50) + 50);
				bubbs[c] = 3;
				break;
			}
	}
	for (c = 0; c < bubbles; c++) if (bubby[c]) update_bubb(c);
	setTimeout("bubble()", 40);
}

function update_bubb(i) {
	if (bubby[i]) {
		bubby[i] -= bubbs[i] / 2 + (i % 2);
		bubbx[i] += ((i % 5) - 2) / 5;
		if (bubby[i] > sdown && bubbx[i] > sleft && bubbx[i] < sleft + swide + bubbs[i] && bubb[i].dataset.lifetime > 0) {
			if (Math.random() < (bubbs[i] / shigh) * 2 && bubbs[i]++ < 8) {
				bubb[i].style.width = bubbs[i] + "px";
				bubb[i].style.height = bubbs[i] + "px";
			}
			bubb[i].style.top = bubby[i] + "px";
			bubb[i].style.left = bubbx[i] + "px";

			bubb[i].dataset.lifetime--;
		} else {
			bubb[i].style.visibility = "hidden";
			bubby[i] = 0;
			return;
		}
	}
}

document.onmousemove = mouse;
function mouse(e) {
	if (e) {
		y = e.pageY;
		x = e.pageX;
	} else {
		set_scroll();
		y = event.y + sdown;
		x = event.x + sleft;
	}
}

window.onresize = set_width;
function set_width() {
	swide = window.innerWidth;
	shigh = window.innerHeight;
}

window.onscroll = set_scroll;
function set_scroll() {
	if (typeof self.pageYOffset == "number") {
		sdown = self.pageYOffset;
		sleft = self.pageXOffset;
	} else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
		sdown = document.body.scrollTop;
		sleft = document.body.scrollLeft;
	} else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
		sleft = document.documentElement.scrollLeft;
		sdown = document.documentElement.scrollTop;
	} else {
		sdown = 0;
		sleft = 0;
	}
}

function createDiv(height, width) {
	var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.height = height;
	div.style.width = width;
	div.style.overflow = "hidden";
	div.style.backgroundColor = "transparent";
	div.style.pointerEvents = "none";
	div.dataset.lifetime = Math.floor(Math.random() * (100 - 50) + 50);
	return div;
}

window.addEventListener("load", buble);
// ]]>
