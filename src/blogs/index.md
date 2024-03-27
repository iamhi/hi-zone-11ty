---
layout: layouts/page.html
title: Blogs
tags:
    - mainpage
mainpagepriority: 3
---

## Welcome to blogs 

### Blogs

<ul>
    {% for blog in collections.blogpost %}
    <li>
        <div>{{blog.data.title}}</div>
        <a href="{{blog.url}}">Read more</a>
    </li>
    {% endfor %}
</ul>
