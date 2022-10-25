---
layout: default
title: Junior Engineers with Tony
nav_order: 1
description: "This is the website you go to if you want to know who Tony Le is." 
permalink: /kp
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
  <button class="btn mr-4 mb-4" id="instructor15">Tony<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior168">Chi Dat<span style="display:none"> 🥉</span></button>
  <button class="btn mr-4 mb-4" id="junior169">Minh Dat<span style="display:none"> 🥇</span></button>
  <button class="btn mr-4 mb-4" id="junior170">Thomas<span style="display:none"> 🥈</span></button>
  <button class="btn mr-4 mb-4" id="junior171">Tim<span style="display:none"></span></button>
  <!--
  <button class="btn mr-4 mb-4" id="junior172">Spare<span style="display:none"></span></button>
  -->
</div>

{: .selected-user}
<p id="selected-user">None</p>

Open **Minecraft Education**, paste in your username and type in the password (it's on the whiteboard)!

{: .did-you-know}
The shortcut for paste is **Control + V**

---

## Last Week's Code
This is the code we finished last week in *Python*. If you need to catch up, you can copy the *Python* code into the **Minecraft Code Builder**.

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://minecraft.makecode.com/#pub:_JkR94cPWcTkp" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>

{: .did-you-know}
You can convert the code from *Python* to *Blocks* by clicking on the 🧩 in the **Code Builder**. Try converting it above!

---

## Today's Activity
Make the road exactly as seen in the image below in the Code Builder!

![](assets/25-10-22.png)

### Challenge 1
Add a footpath to either side of the road.

### Challenge 2
Create a T intersection.

{: .hint}
Create another road and join it to your first road.

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

