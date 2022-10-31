---
layout: default
title: Junior Engineers with Tony and Anna
nav_order: 1
description: "This is the website you go to if you want to know who Tony Le is." 
permalink: /fs
nav_exclude: true
search_exclude: true
---

# Junior Engineers with Tony and Anna
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
  <button class="btn mr-4 mb-4" id="instructor5">Tony<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="instructor5">Anna<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior32">Luka<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior33">Thomas<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior34">Rachel<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior35">Lam<span style="display:none"> 🥇</span></button>
  <button class="btn mr-4 mb-4" id="junior36">Zeth<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior37">Kris<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior137">Isabella<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior138">Shanivi<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior139">Jayden<span style="display:none"> 🥈</span></button>
  <button class="btn mr-4 mb-4" id="junior140">Ilsa<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior141">Leopold<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior142">Harrison<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior143">Valentin<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior144">Aahana<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior145">Artemi<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior146">Emmeline<span style="display:none"> 🥉</span></button>
</div>

{: .selected-user}
<p id="selected-user">None</p>

If your name appears above, your username has been copied. Just right-click and
paste into **Minecraft Education**

{: .did-you-know}
The shortcut for paste is **Control + V**

What's the password? Check the whiteboard ~~or ask an instructor~~!

---

## Variables

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe width="560" height="315" src="https://www.youtube.com/embed/pNJi3S4G04w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

---

## Today's Activity
In the spirt of Halloween, we're going to be making a survival game featuring
player levels!

![](assets/27-10-22.png)

---

## Today's Challenges

### Challenge 1 (Easy)
Set the spawn point for everyone in a safe zone where they can get ready with armour and weapons.

{: .hint}
Use /setworldspawn

### Challenge 2 (Medium)
Output an additional message if the player reaches a certain level. For example, say "[player name] is legendary!" when the player reaches Level 20.

{: .hint}
You'll need to track player levels and use conditional statement(s).

### Challenge 3 (Medium)
Implement a difficulty curve where once the player reaches a certain level, more waves of witches spawn.

{: .hint}
You'll need to track player levels and use conditional statement(s).

### Challenge 4 (Hard/Creative)
Think about when the game "ends", how this might be tracked, and what happens when the player "wins". Implement these features.

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

