---
layout: post
title:  "Hello World!"
date:   2015-03-20 19:47:50
categories: first post
---

Hello everyone! This is my official first post, I have decided to give blogging a go. Their have been attempts in the past by myself (obviously) to try and get into the whole blogging scene, but I would always just get too busy or lose motivation. 

I have been using GitHub pages to host my personal website for about a year now and have always been aware of jekyll's existence, but never really got into tinkering with it. After sometime I randomely got an urge to check it out and see what it could do. The last couple of weeks, while being bored in class I decided to install jekyll on my laptop. I wrote a few practice blog posts just to see if the hype was real. And after seeing how well it handled code snippets like this one:

{% highlight python %}
class Hangman_Reader:
    def read_file(self,file_name): # Read words into a list from the provided text file
        file_var = open(file_name, "r")
        word = ""
        word_list = []
        for line in file_var:
            word = line.strip()
            word_list.append(word)
        return word_list
{% endhighlight %}

I just wanted to post code snippets for the hell of it. All that and more simply lead to the decision of replacing my prior personal site, with the one you see now.

Anyways, the goal now is to actively post anything I find interesting. Posts will most likely consist of awesome code snippets and anything Chicago Bulls, so pretty much random thoughts that pop in my head :)

Finally, as my first post comes to an end I want to thank anyone and everyone ahead of time that somehow stumbles upon this! Thanks for stopping by :)

--Also, on a side note, for anyone interested in jekyll check out the [Jekyll docs][jekyll] for more information!

[jekyll]:      http://jekyllrb.com
