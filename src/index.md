---
title: "Event Planner Pro® · #1 Event Management Software, Event Planning & Design"
description: "All-in-one solution, includes everything you need to create and promote your events, manage registrations, and track your results. FREE DEMO available!"
layout: "base.njk"
bodyclass: index
---

<header><div><a href="/" class="home"><div class="logotype">{% include '_logo.html' %}</div></a>

<nav class="menu"><ul>
	<li><a href="#">Features</a></li>
	<li><a href="#">Solutions</a></li>
	<li><a href="#">Pricing</a></li>
	<li><a href="#">FAQ</a></li>
	<li><a href="#blog">Blog</a></li>
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
<div class="mask"></div>
<video class="video" autoplay loop muted playsinline uk-cover><source src="https://rafael.app/epp.mp4" type="video/mp4" /><source src="https://rafael.app/epp.ogv" type="video/ogg" /></video>
<div class="devices"><img src="img/devices.png" alt="devices" uk-parallax="y: -50"></div>
</div>
</div>

<div class="uk-container intro">
<div uk-grid>
<div class="uk-width-1-5@s"></div>
<div class="uk-width-3-5@s">
<h1 class="g">#1 Event Management Software</h1>
<p><b>Event Planner Pro</b> is a cutting-edge software solution that has redefined the way event organizers and planners approach their craft. No longer are you constrained by the hassles of manual management, disorganized spreadsheets, or the chaos of paperwork.</p>
<p>With EventPlanner Pro, you have a powerful ally in your quest to create unforgettable events.</p>
<h3 class="g">Why Use Event Planning Software?</h3>
<p>Our platform is engineered to simplify the complex art of event management. Its intuitive interface and robust features are designed to save you time, reduce stress, and enhance your efficiency, whether you're a professional event planner or someone planning an event as a one-off task, our software covers all your bases:</p>
<div class="uk-width-1-5@s"></div>
</div>
</div>
</div>


<div class="uk-container areas">
<div class="uk-grid-medium" uk-grid>
	<div class="uk-width-1-4@s uk-width-1-2 uk-text-center"><span>
		<img src="./img/icons/guest.svg" alt="event management software - online registration">
		<p>Online Registration</p>
	</span></div>
	<div class="uk-width-1-4@s uk-width-1-2 uk-text-center"><span>
		<img src="./img/icons/ticket.svg" alt="event management software - tickets">
		<p>Effortless Ticketing</p>
	</span></div>
	<div class="uk-width-1-4@s uk-width-1-2 uk-text-center"><span>
		<img src="./img/icons/hub.svg" alt="event management software - communications">
		<p>Communication Hub</p>
	</span></div>
	<div class="uk-width-1-4@s uk-width-1-2 uk-text-center"><span>
		<img src="./img/icons/data.svg" alt="event management software - reports">
		<p>Event Analysis</p>
	</span></div>
</div>
</div>

<div class="brands">
	<p>Trusted by:</p>
	<img src="./img/brand/basset-events.svg" alt="Basset Events">
	<img src="./img/brand/blackrock.svg" alt="BlackRock">
	<img src="./img/brand/colin-cowie.svg" alt="Colin Cowie">
	<img src="./img/brand/elle.svg" alt="Elle">
	<img src="./img/brand/hilton.svg" alt="Hilton"><br>
	<img src="./img/brand/mkg.svg" alt="MKG">
	<img src="./img/brand/vogue.svg" alt="Vogue">
	<img src="./img/brand/w-hotels.svg" alt="W Hotels">
	<img src="./img/brand/wonderland.png" alt="Wonderland">
</div>

{% include '_quotes.html' %}

<div class="icons">
{% include '_icons.html' %}
</div>

{% include '_features.html' %}

<div class="uk-container uk-margin-large-bottom intro">
<div uk-grid>
<div class="uk-width-1-5@s"></div>
<div class="uk-width-3-5@s">
<h3 class="g">The All-in-One Event Software</h3>
<p>What sets EventPlanner Pro apart from the crowd is its commitment to simplifying every aspect of event planning. No more headaches, sleepless nights, or last-minute rushes. Event planning should be enjoyable and fulfilling, and EventPlanner Pro is here to make it just that.</p>
<p>In an industry where attention to detail is paramount, EventPlanner Pro excels by letting you focus on what truly matters - creating unforgettable events.</p>
<h3 class="g">Get Started with EventPlanner Pro Today</h3>
<p>Your journey to event planning excellence starts here. Join the ranks of event planners who have experienced the transformation brought by EventPlanner Pro. Unlock the potential to deliver seamless and unforgettable events.</p>
<p class="cta"><a href="#" class="uk-button uk-button-primary">Book a Demo</a></p>
<div class="uk-width-1-5@s"></div>
</div>
</div>
</div>

<a name="blog"></a>

<div class="blog">
<div class="uk-container">
<div uk-grid>
<div class="uk-width-1-1 uk-margin-small-bottom"><h4 class="g">From our Blog</h4></div>
{% for post in collections.blog %}
<div class="uk-width-1-3@s uk-text-center"><a href="{{ post.url }}">
	<img src="{{ post.data.image }}" alt="Event Planner Pro blog: {{ post.data.title }}">
	<p>{{ post.data.title }}</p>
</a></div>
{% endfor %}
</div>
</div>
</div>