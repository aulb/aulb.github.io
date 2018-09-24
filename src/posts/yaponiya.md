---
title: 🐝 yaponiya япония
date: 2017-09-01
language: english
published: true
categories: side-projects
type: blog
---
Come visit <a href="http://yaponiya.reblws.me">yaponiya</a>.
# 🐝 Demo Demo
<div class="capContainer">
  <img class="blogpic" src="/photos/yapopics/5yUtILqOed.gif" />
	<div class="caption">
		Simple kanji ordering and sorting
	</div>
</div>

<div class="capContainer">
  <img class="blogpic" src="/photos/yapopics/WaHbGeUHa2.gif" />
	<div class="caption">
		Simple kanji lookup!
	</div>
</div>

# 🐝 Inspiration
I wanted to do a Japanese related side project. I had a few different ideas floating such as automatic grammar tagger (might bee too hardcore tbh) and perhaps something like kanji frequency, thats when I came across Kaisuu. It was simple and fun. The only downside was that the kanjis weren't sortable any other way. I thought it would be fun to fork the idea, extend it a little bit, and learn new framework (REACT). That gave rise to <a href="http://yaponiya.reblws.me">**Yaponiya**</a> (Япония) the Russian word for Japan.

# 🐝 Webapp Features
The main feature of the website is to see the individual kanji flicker as tweets are being tweeted out in realtime. This is done by clicking the Twitter logo at the top. Its fun to see which ones flicker the most. In addition to that we thought of and implemented some additional features such as:

- 🌸 Kanji sorting, in ascending or descending order
- 🌸 Kanjis ordering, in different ways by categories
- 🌸 Small information about the kanji, making each kanji clickable

The ordering was mainly to see the blocks of kanjis and see which ones are used the most. Unsurprisingly the lower level kanjis are most used (by grade and JLPT).

# 🐝 Technical Challenges
Here are some of the technical (challenges) highlights and things that can be improved from this project. Me and my project partner learned a great deal of things throughout the project and its fun to document these. One major thing we missed out is probably testing, powerful yet forgettable for projects like this.

Also an extra resource: <a href="https://github.com/matiassingers/awesome-readme">"How To Make a Good README"</a>.

## 🐊 Project Managing
Project managing is hard. Being a product owner with crystal clear vision takes skill. We were gonna have different buttons for "modes" to show NHK News frequency, realtime counting and reordering. With each iteration it became clearer on what to do. Keeping it stupidly simple and reiterate (or add) should've been the approach right from the start.

## 🐊 Managing Callback Hell
Almost every website’s basic tutorial (looking at you <a href="http://mongoosejs.com/docs/api.html">mongoose</a>) nests callback like crazy. We initially followed when we were making our API. Callbacks upon callbacks making writing reusable components really hard. Even error handling was also getting out of control for our simple API. We followed this guide here <a href="https://github.com/justsml/escape-from-callback-mountain">"Escape From Callback Hell"</a> to help tidy up our API.

## 🐊 React and Ajax
React is no doubt very powerful. It helped us simplify a lot of state management. However React might not be the silver bullet for every application. Our web app contains tons (2136 to be exact) of tiny cards that constantly needs to be updated. Real time stream updates kills the browser every single time. We learned that as long as it feels real time, in our case we set the stream interval to 1.5s, its good enough.

We still have yet to find a graceful way to halt initial rendering before the first ajax request is finished. Something to think about for future apps.

## 🐊 Immutable.js
We converted our web app from having native JavaScript objects, mutating states as interaction happen, to Immutable.js objects. The idea seems fantastic, we saw the use case and how chaotic native objects could lead us to. We ran into a couple problems upon switching. Immutable objects uses special syntax for accessing and  manipulation, leading to many frustrations over simple errors. Immutable also is a little difficult to debug, compounding said frustrations.

For future references, immutable might cause <a href="https://softwareengineering.stackexchange.com/questions/309452/redux-memory-consumption">performance issues</a> and should be considered for heavy applications.

## 🐊 CORS
We wanted to originally host our app over on github pages. We later hit <a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing">CORS</a> since github pages is served over https and our API over http. This was bandage fixed by migrating the app to our server. A better solution would probably be to try and convert our API to https.

## 🐊 React Router
We also ran into problems where our kanji urls would not load properly. Our react router is simple. Serve "/" as the main page and "/kanji/{character}" as the kanji page. Since "/kanji/{character}" is not a valid file compared to "/" (index.html), apache threw a 404. We fixed this by simply redirecting all hits to "/" and let the router parse the incoming url and figure out.


<a href="https://www.youtube.com/watch?v=VCVjbrt30tY">Deliver</a>ed with <a href="https://github.com/reblws">reblws</a>.
