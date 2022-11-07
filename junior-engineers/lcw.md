---
layout: default
title: Lane Cove West
parent: Junior Engineers
nav_exclude: true
search_exclude: true
---

# Lane Cove West
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Welcome
Click on your name to copy your username to the clipboard.

<div id="roll">
  <button class="btn mr-2 mb-2" id="instructor10">Tony<span style="display:none">🎃</span></button>
  <button class="btn mr-2 mb-2" id="junior142">Amir<span style="display:none"></span></button>
  <button class="btn mr-2 mb-2" id="junior143">Benny<span style="display:none"></span></button>
  <button class="btn mr-2 mb-2" id="junior144">Andrew<span style="display:none"></span></button>
  <button class="btn mr-2 mb-2" id="junior215">William<span style="display:none"></span></button>
  <button class="btn mr-2 mb-2" id="junior146">Adam<span style="display:none"></span></button>
  <button class="btn mr-2 mb-2" id="junior147">Aarya<span style="display:none"></span></button>
  <button class="btn mr-2 mb-2" id="junior212">Violet<span style="display:none"></span></button>
  <button class="btn mr-2 mb-2" id="junior213">Thomas<span style="display:none"></span></button>
  <button class="btn mr-2 mb-2" id="junior214">Anthony<span style="display:none"></span></button>
  <!--
  <button class="btn mr-4 mb-4" id="junior215">~ Spare 2<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior216">~ Spare 3<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior217">~ Spare 4<span style="display:none"></span></button>
  -->
</div>

---

## Projects
If you want to review any code from previous weeks, click on the relevant project below.

[Halloween Survival](https://makecode.com/_3s5UXt51KJ3c){: .btn .btn-green }
[Skyscrapers](#projects){: .btn .btn-outline }
<!--
[Castles](#projects){: .btn .btn-outline }
[Secret Bunkers](#projects){: .btn .btn-outline }
[Fountains](#projects){: .btn .btn-outline }
[Zoos](#projects){: .btn .btn-outline }
[Ancient Temples](#projects){: .btn .btn-outline }
-->

{: .did-you-know}
You can convert the code from *Blocks* to *Python* or *JavaScript* in the **Code Builder**!

---

## Challenges
Check-in with an instructor if you finish a challenge!

```
Output the message "[player name] is legendary!" when the player reaches Level 10 🎃
Implement a difficulty curve where once the player reaches a certain level, more waves of witches spawn ⭐
```
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
      }
      button.classList.add("btn-purple");
      var user = "<span class='label label-purple'>"  + button.innerText + "</span>";
      var awards = "<span class='label label-purple'>" + button.firstElementChild.innerText + "</span>";
      if (button.firstElementChild.innerText.length != 0) {
        document.getElementById("welcome").innerHTML = "Welcome " + user + awards; 
      } else {
        document.getElementById("welcome").innerHTML = "Welcome " + user;
      }
    }
  });
</script>
