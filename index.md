---
layout: default
---

<div id="header_wrap" class="container">
  <header class="inner">
    <h1 id="project_title"><a href="/">CSE103 Fall 2014</a></h1>
    <h2 id="project_tagline">A Practical Introduction to Probability and Statistics</h2>
  </header>
</div>

<div id="posts">
<ul class="post-list">
{% for post in site.posts %}
  <li>
    <h4>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h4>
  </li>
{% endfor %}
</ul>
</div>
