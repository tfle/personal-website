---
layout: default
title: NB T4
nav_order: 1
description: "This is the website you go to if you want to know who Tony Le is." 
permalink: /nb
nav_exclude: true
search_exclude: true
---

# NB

Click on your name to reveal your username. It's copied automatically.

{: .note }
Did you know? The shortcut for paste is Control + V.

<ol start="1">
  <button class="btn" type="button">Ethan</button>
  <button class="btn" type="button">Noah</button>
  <button class="btn" type="button">Penelope</button>
  <button class="btn" type="button">Primrose</button>
  <button class="btn" type="button">Emily</button>
  <button class="btn" type="button">Harrison</button>
  <button class="btn" type="button">Audrey</button>
  <button class="btn" type="button">Angus</button>
  <button class="btn" type="button">Vihan</button>
  <button class="btn" type="button">Edward</button>
  <button class="btn" type="button">William</button>
  <button class="btn" type="button">Kai</button>
  <button class="btn" type="button">Marcus</button>
  <button class="btn" type="button">Emilie</button>
  <button class="btn" type="button">Pao Pao</button>
</ol>

We’re going to be building skyrise buildings so we can make our own Minecraft city!
![](https://static.planetminecraft.com/files/resource_media/screenshot/1834/2018-08-23-17-51-14-copy-1535046684.png)

<script>
  var prefix = "junior";
  var suffix = "@jnreng.onmicrosoft.com";
  var ol = document.getElementsByTagName("ol")[0];
  
  ol.onclick = function(e) {
    var li = e.target, i = ol.start || 1;
    while (li.previousElementSibling) {
      li = li.previousElementSibling;
      i += 1;   
    }
    var username = prefix + i + suffix;
    navigator.clipboard.writeText(username);
    alert(username);
  };
</script>

<!--
<input type="text" value="Hello World" id="myInput">

<div class="tooltip">
<button onclick="myFunction()">
  <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
  Copy text
  </button>
</div>

<script>
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}
</script>

<button type="button" name="button" class="btn">Button element</button>

<button class="btn js-toggle-dark-mode">Preview dark color scheme</button>

<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
    toggleDarkMode.textContent = 'Preview dark color scheme';
  } else {
    jtd.setTheme('dark');
    toggleDarkMode.textContent = 'Return to the light side';
  }
});
</script>
-->
