---
title: Event Planner Pro®
layout: "base.njk"
---

<header><div><a href="/" class="home"><div class="logotype">{% include '_logo.html' %}</div></a>

<nav class="menu"><ul>
	<li><a href="#">Features</a></li>
	<li><a href="#">Solutions</a></li>
	<li><a href="#">Pricing</a></li>
	<li><a href="#">FAQ</a></li>
	<li><a href="#">Blog</a></li>
	<li><a href="#">About</a></li>
	<li><a href="#">Contact</a></li>
</ul></nav>
<div class="menu-btn">
	<div class="bar bar1"></div>
	<div class="bar bar2"></div>
	<div class="bar bar3"></div>
</div>

</div></header>

<div class="splash">
<div class="uk-cover-container uk-inline">
<h2 class="tagline"><span>Create</span> <span>Unforgettable</span> <br> <span>Events</span> <span>Seamlessly</span></h2>
<p class="subtitle">From Elegant Weddings and Corporate Conferences to Lively Music Festivals and Charity Fundraisers, the Journey of Planning and Executing an Event can be Exciting Again!</p>
<p class="download"><a href="#"><span>Book a Demo</span></a></p>
<video class="video-mask" src="https://rafael.app/epp.mp4" style="background-color:#237; z-index:-1;" autoplay loop muted playsinline uk-cover></video>
<div class="devices"><img src="img/devices.png" alt="devices" uk-parallax="y: -50"></div>
</div>
</div>

<div class="uk-container intro">
<div uk-grid>
<div class="uk-width-1-5@s"></div>
<div class="uk-width-3-5@s">
<p><b>Event Planner Pro</b> is a cutting-edge software solution that has redefined the way event organizers and planners approach their craft. No longer are you constrained by the hassles of manual management, disorganized spreadsheets, or the chaos of paperwork.</p>
<p>With EventPlanner Pro, you have a powerful ally in your quest to create unforgettable events.</p>
<h3>Seamlessness Redefined</h3>
<p>Our platform is engineered to simplify the complex art of event management. Its intuitive interface and robust features are designed to save you time, reduce stress, and enhance your efficiency. Let's delve into some of its key features:</p>
<div class="uk-width-1-5@s"></div>
</div>
</div>
</div>

<div class="brands">
	<p>Trusted by:</p>
	<img src="./img/brand/basset-events.svg">
	<img src="./img/brand/blackrock.svg">
	<img src="./img/brand/colin-cowie.svg">
	<img src="./img/brand/elle.svg">
	<img src="./img/brand/hilton.svg"><br>
	<img src="./img/brand/mkg.svg">
	<img src="./img/brand/vogue.svg">
	<img src="./img/brand/w-hotels.svg">
	<img src="./img/brand/wonderland.png">
</div>

{% include '_quotes.html' %}

<div style="height:500px;"></div>

<script src="uikit.min.js"></script>
<script>
// Burger Menu: adds 'active' class to menu when menu button is clicked.
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menu_btn.addEventListener('click', () => {
	menu.classList.toggle('faded');
	menu.classList.toggle('active');
	menu_btn.classList.toggle('change');
});
// ScrollReveal animations
ScrollReveal().reveal('.menu li', { delay:100, interval: 40 });
ScrollReveal().reveal('.tagline span', { delay:100, interval: 150 });
ScrollReveal().reveal('.devices', { delay:500, scale:.95, distance: '20px' });
ScrollReveal().reveal('h2,h3,.brands img', { interval:40, scale:.95, distance:'15px' });
</script>