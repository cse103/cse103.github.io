---
layout: default
---
<h3>
<a name="welcome-to-cse103-fall-2014" class="anchor" href="#welcome-to-cse103-fall-2014"><span class="octicon octicon-link"></span></a>Welcome to CSE103 Fall 2014!</h3>

<p>Instructor: <a href="https://github.com/yoavfreund" class="user-mention">@yoavfreund</a></p>

<section id="posts">
<ul class="post-list">
{% for post in site.posts %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    
    <h2>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h2>
    <p>{{ post.excerpt }}
  </li>
{% endfor %}
</ul>
</section>
