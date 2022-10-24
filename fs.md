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
  <button class="btn mr-4 mb-4" id="junior35">Lam<span style="display:none"></span>🥇</button>
  <button class="btn mr-4 mb-4" id="junior36">Zeth<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior37">Kris<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior137">Isabella<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior138">Shanivi<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior139">Jayden<span style="display:none">🥈</span></button>
  <button class="btn mr-4 mb-4" id="junior140">Ilsa<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior141">Leopold<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior142">Harrison<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior143">Valentin<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior144">Aahana<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior145">Artemi<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior146">Emmeline<span style="display:none">🥉</button>
</div>

{: .selected-user}
<p id="selected-user">None</p>

Open **Minecraft Education**, paste in your username and type in the password (it's on the whiteboard)!

{: .did-you-know}
The shortcut for paste is **Control + V**

---

## Learning Recap

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/7xqot4oA2vo" title="Minecraft Events Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

---

## Last Week's Code
This is the code we finished last week in *Python*. If you need to catch up, you can copy the *Python* code into the **Minecraft Code Builder**.

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://minecraft.makecode.com/#pub:_YfceRR7qvKDW" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>

{: .did-you-know}
You can convert the code from *Python* to *Blocks* by clicking on the 🧩 in the **Code Builder**. Try converting it above!

---

## Today's Activity
Make sure your Yellow Brick Road code works, then try it out with different *Player Events* like flying.

### Challenges
Make a rainbow appear behind you when you fly!

![](https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG)

{: .hint}
Think about the order of colours in the rainbow and how you can stack each colour.

Make a flying carpet!

![](https://upload.wikimedia.org/wikipedia/commons/5/55/Vasnetsov_samolet.jpg)

{: .hint}
You'll need to replace the blocks behind you with air.

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

