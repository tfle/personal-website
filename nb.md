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

## Sign in to Minecraft Education
Click your name to automagically copy your username.

<div id="roll">
  <button class="btn mr-4 mb-4" id="instructor23">Tony<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="instructor23">Zoe<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="instructor23">Anna<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior1">Ethan<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior2">Noah M.<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior3">Penelope<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior4">Primrose<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior5">Emily<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior6">Harrison<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior7">Audrey<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior8">Angus<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior9">Vihan<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior10">Edward<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior11">William Wo.<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior12">Kai<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior13">Marcus<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior14">Emilie<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior15">Pao Pao<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior16">William Wa.<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior17">Simo<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior18">Mason<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior19">Noah V.<span style="display:none"></span></button>
  <!--
  <button class="btn mr-4 mb-4" id="junior20">Spare 1<span style="display:none"></span></button>
  <button class="btn mr-4 mb-4" id="junior21">Spare 2<span style="display:none"></span></button>
  -->
</div>

{: .selected-user}
<p id="selected-user">None</p>

If your name appears above, your username has been copied. Just right-click and paste into **Minecraft Education**.

{: .did-you-know}
The shortcut for paste is **Control + V**

What's the password? Check the whiteboard ~~or ask an instructor~~!

---

## Completed Projects
If you want to review any code from previous weeks, click on the relevant project
below.

[Skyscraper](https://makecode.com/_3s5UXt51KJ3c){: .btn .btn-green }

{: .did-you-know}
You can convert the code from *Blocks* to *Python* (and vice versa) by clicking on the 🧩 in the **Code Builder**.

---

## Today's Project
In the spirt of Halloween, we're going to be making a survival game featuring player levels!

![](assets/27-10-22.png)

Once you've completed the base game, have a go at some of the challenges below.
If you've had an honest attempt and feel really stuck, ask one of the instructors
for another hint or two.

### Today's Challenges

#### Challenge 1 (Easy)
Set the spawn point for everyone in a safe zone where they can get ready with armour and weapons.

{: .hint}
Use /setworldspawn

#### Challenge 2 (Medium)
Output an additional message if the player reaches a certain level. For example, say "[player name] is legendary!" when the player reaches Level 20.

{: .hint}
You'll need to track player levels and use conditional statement(s).

#### Challenge 3 (Medium)
Implement a difficulty curve where once the player reaches a certain level, more waves of witches spawn.

{: .hint}
You'll need to track player levels and use conditional statement(s).

#### Challenge 4 (Hard/Creative)
Think about when the game "ends", how this might be tracked, and what happens when the player "wins". Implement these features.

---

```python
count = 0

def on_block_broken_jack_o_lantern():
    global count
    count += 1
    player.say("Pumpkins: " + str(count))
    mobs.clear_effect(mobs.target(NEAREST_PLAYER))
    mobs.apply_effect(REGENERATION, mobs.target(NEAREST_PLAYER), 2, 2)
blocks.on_block_broken(JACK_O_LANTERN, on_block_broken_jack_o_lantern)

def on_on_chat():
    global count
    player.say("Loading...")
    count = 0
    gameplay.set_difficulty(EASY)
    gameplay.set_game_mode(SURVIVAL, mobs.target(ALL_PLAYERS))
    for index in range(10):
        blocks.place(JACK_O_LANTERN,
            positions.ground_position(randpos(pos(-10, 0, -10), pos(10, 0, 10))))
    for index2 in range(2):
        mobs.spawn(mobs.monster(WITCH),
            positions.ground_position(randpos(pos(-10, 0, -10), pos(10, 0, 10))))
player.on_chat("new", on_on_chat)
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
      };
      button.classList.add("btn-purple");
      document.getElementById("selected-user").innerHTML = "<b>" + button.innerText + "</b>" + button.firstElementChild.innerText;
    };
  });
</script>

