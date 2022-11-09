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
  <button class="btn mr-2 mb-2" id="instructor10">Tony<span style="display:none">🎃🔨</span></button>
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
If you want to review any code from previous weeks, click on the relevant project.

<div id="project-list">
  <button class="btn mr-2 mb-2" id="https://minecraft.makecode.com/#pub:_TX0A5u6KbC9W">Halloween Survival</button>
  <!--
  <button class="btn mr-2 mb-2" id="skyscrapers">Skyscrapers</button>
  <button class="btn mr-2 mb-2" id="castles">Castles</button>
  <button class="btn mr-2 mb-2" id="secret-bunkers">Secret Bunkers</button>
  <button class="btn mr-2 mb-2" id="fountains">Fountains</button>
  <button class="btn mr-2 mb-2" id="zoos">Zoos</button>
  <button class="btn mr-2 mb-2" id="ancient-temples">Ancient Temples</button>
  -->
</div>

{: .did-you-know}
You can convert the code from *Blocks* to *JavaScript* or *Python* in the **Code Builder**. Try converting it below!


<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://minecraft.makecode.com/#pub:_LYXFti95gUX7" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>
---

## Challenges
Check in with an instructor if you finish a challenge to get it ticked off!

- [ ] 🎃 Output the message "[player name] is legendary!" when the player reaches Level 10.
- [ ] 🔨 Make the glass layer smaller in perimeter than the brick layer (like this).

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
  const domain = "@jnreng.onmicrosoft.com";
  const roll = document.getElementById("roll");
  roll.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
      const button = event.target;
      navigator.clipboard.writeText(button.id + domain);
      for (let i = 0; i < roll.children.length; i++) {
        let student = roll.children[i];
        student.classList.remove("btn-purple");
      }
      button.classList.add("btn-purple");
      const user = "<span class='label label-purple'>"  + button.innerText + "</span>";
      const awardsArray = [...button.firstElementChild.innerText]; 

      let awardsString = "";
      for (let i = 0; i < awardsArray.length; i++) {
        awardsString += "<span class='label label-purple'>" + awardsArray[i] + "</span>";
      }

      document.getElementById("welcome").innerHTML = "Welcome " + user + awardsString;
      const challengeList = document.getElementsByClassName("task-list-item");
      let challengeCount = 0;
      for (let i = 0; i < challengeList.length; i++) {
        if (awardsArray.includes(challengeList[i].innerText.split(" ")[0])) {
          challengeList[i].firstChild.setAttribute("checked", "checked");
          challengeCount += 1;
        } else {
          challengeList[i].firstChild.removeAttribute("checked");
        }
      }
      document.getElementById("challenges").innerHTML = "Challenges " + "<span class='label label-purple'>" + challengeCount + "/" + challengeList.length + "</span>";
    }
  });
</script>
<script>
  const projectList = document.getElementById("project-list");
  projectList.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
      const button = event.target;
      for (let i = 0; i < projectList.children.length; i++) {
        let project = projectList.children[i];
        project.classList.remove("btn-purple");
      }
      button.classList.add("btn-purple");
      const projectLabel = "<span class='label label-purple'>"  + button.innerText + "</span>";
      document.getElementById("projects").innerHTML = "Projects " + projectLabel;
      document.getElementsByTagName("iframe")[0].src = button.getAttribute("id");
    }
  });
</script>
  
