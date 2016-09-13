---
layout: default
disableTOC: true
---

<div id="header_wrap" class="container">
  <header class="inner">
    <h1 id="project_title"><a href="/">CSE103 Fall 2016</a></h1>
    <h2 id="project_tagline">A Practical Introduction to Probability and Statistics</h2>
  </header>
</div>

<div id="posts">
  <ul class="post-list">
    {% for post in site.posts %}
    <li>
      <h3 class="post-title">
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h4>
      <span class="post-time">
        Posted on <time datetime="{{post.date}}">{{ post.date | date: "%A %B %d, %Y"}}</time>
      </span>
      <p>{{ post.excerpt }}<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">...</a></p>
    </li>
    {% endfor %}
  </ul>
</div>
