---
layout: default
title: Junior Engineers with Tony
nav_order: 1
description: "This is the website you go to if you want to know who Tony Le is." 
permalink: /nb
nav_exclude: true
search_exclude: true
---

# Junior Engineers with Tony
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Enter the Kahoot quiz
Click on the button below to open **Kahoot** in a new tab.

<a href="https://kahoot.it" target="_blank"><button class="btn btn-purple">Open Kahoot</button></a>

{: .did-you-know}
Someone always asks what the game pin is, even though it's up on the screen.

---

## Sign in to Minecraft Education
Click your name to automagically copy your username.

<div id="roll">
  <button class="btn mr-4 mb-4" id="instructor10">Tony<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior142">Amir<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior143">Benny<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior144">Andrew<span style="display:none"></span></button>
</div>

{: .selected-user}
<p id="selected-user">None</p>

If your name appears above, your username has been copied. Just right-click and paste into **Minecraft Education**.

{: .did-you-know}
The shortcut for paste is **Control + V**

What's the password? Check the whiteboard ~~or ask an instructor~~!

---

~~## Last Week's Code
This is the code we finished last week in *Python*. If you need to catch up, you can copy the *Python* code into the **Minecraft Code Builder**.

{: .did-you-know}
You can convert the code from *Python* to *Blocks* by clicking on the 🧩 in the **Code Builder**. Try converting it above!~~

---

## Today's Activity
We’re going to be building skyrises in the Code Builder!
![](https://static.planetminecraft.com/files/resource_media/screenshot/1834/2018-08-23-17-51-14-copy-1535046684.png)

### Challenge 1 (Medium)
Make your skyscraper eco-friendly by adding a layer of oak leaves for each story.
![](assets/25-10-22-2.png)

### Challenge 2 (Hard)
Make the oak leaves grow one block out from the skyscraper on all sides.
![](assets/25-10-22-3.png)

<script>
  const sortList = list => [...list].sort((a, b) => {
    const A = a.textContent, B = b.textContent;
    return (A < B) ? -1 : (A > B) ? 1 : 0;
  });

  window.addEventListener("load", function() {
    const ul = document.getElementById("roll");
    const list = ul.querySelectorAll("button");
    ul.append(...sortList(list));
  });
</script>
<script>
  var domain = "@jnreng.onmicrosoft.com";
  var roll = document.getElementById("roll");
  roll.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
      var button = event.target;
      navigator.clipboard.writeText(button.id + domain);
      for (let i = 0; i < roll.children.length; i++) {
        let student = roll.children[i];
        student.classList.remove("btn-purple");
      };
      button.classList.add("btn-purple");
      document.getElementById("selected-user").innerHTML = "<b>" + button.innerText + "</b>" + button.firstElementChild.innerText;
    };
  });
</script>

