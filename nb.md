---
layout: default
title: Junior Engineers with Tony, Zoe and Anna
nav_order: 1
description: "This is the website you go to if you want to know who Tony Le is." 
permalink: /nb
nav_exclude: true
search_exclude: true
---

# Junior Engineers with Tony, Zoe and Anna
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

## Sign into Minecraft Education
Click your name to automagically copy your username.

<div id="roll">
  <button class="btn mr-4 mb-4" id="instructor23">Tony</button>
  <button class="btn mr-4 mb-4" id="instructor23">Zoe</button>
  <button class="btn mr-4 mb-4" id="instructor23">Anna</button>
  <button class="btn mr-4 mb-4" id="junior1">Ethan</button>
  <button class="btn mr-4 mb-4" id="junior2">Noah M.</button>
  <button class="btn mr-4 mb-4" id="junior3">Penelope</button>
  <button class="btn mr-4 mb-4" id="junior4">Primrose</button>
  <button class="btn mr-4 mb-4" id="junior5">Emily</button>
  <button class="btn mr-4 mb-4" id="junior6">Harrison</button>
  <button class="btn mr-4 mb-4" id="junior7">Audrey</button>
  <button class="btn mr-4 mb-4" id="junior8">Angus</button>
  <button class="btn mr-4 mb-4" id="junior9">Vihan</button>
  <button class="btn mr-4 mb-4" id="junior10">Edward</button>
  <button class="btn mr-4 mb-4" id="junior11">William Wo.</button>
  <button class="btn mr-4 mb-4" id="junior12">Kai</button>
  <button class="btn mr-4 mb-4" id="junior13">Marcus</button>
  <button class="btn mr-4 mb-4" id="junior14">Emilie</button>
  <button class="btn mr-4 mb-4" id="junior15">Pao Pao</button>
  <button class="btn mr-4 mb-4" id="junior16">William Wa.</button>
  <button class="btn mr-4 mb-4" id="junior17">Simo</button>
  <button class="btn mr-4 mb-4" id="junior18">Mason</button>
  <button class="btn mr-4 mb-4" id="junior19">Noah V.</button>
</div>

Open **Minecraft Education**, paste in your username and type in the password (it's on the whiteboard)!

{: .did-you-know}
The shortcut for paste is **Control + V**

---

## Last Week
This is the code we finished last week in *Python*. If you need to catch up, you can copy the *Python* code into the **Minecraft Code Builder**.

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://minecraft.makecode.com/#pub:_d6PcmiFMhTz8" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>

{: .did-you-know}
You can convert the code from **Python** to **Blocks** by clicking on the 🧩 in the **Code Builder**. Try converting it above!

---

## Today's Activity
We’re going to finish the code for building skyrises so we can make our own Minecraft city!
![](https://static.planetminecraft.com/files/resource_media/screenshot/1834/2018-08-23-17-51-14-copy-1535046684.png)

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
    };
  });
</script>

