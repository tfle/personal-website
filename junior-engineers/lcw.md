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

  const roll = document.getElementById("roll");
  roll.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
      const clickedButton = event.target;
      navigator.clipboard.writeText(clickedButton.id + "@jnreng.onmicrosoft.com");
     
      const students = roll.children;
      for (let i = 0; i < students.length; i++) {
        let student = students[i];
        student.classList.remove("btn-purple");
      }
      clickedButton.classList.add("btn-purple");

      const studentLabel = "<span class='label label-purple'>"  + clickedButton.innerText + "</span>";
      const studentAwards = [...clickedButton.firstElementChild.innerText]; 
      let awardsLabel = "";
      for (let i = 0; i < studentAwards.length; i++) {
        awardsLabel += "<span class='label label-purple'>" + studentAwards[i] + "</span>";
      }
      document.getElementById("welcome").innerHTML = "Welcome " + studentLabel + awardsLabel;

      const challenges = document.getElementsByClassName("task-list-item");
      let challengeCount = 0;
      for (let i = 0; i < challenges.length; i++) {
        let award = challenges[i].innerText.split(" ")[0];
        let challengeCheckbox = challenges[i].firstChild;
        if (studentAwards.includes(award)) {
          challengeCheckbox.setAttribute("checked", "checked");
          challengeCount += 1;
        } else {
          challengeCheckbox.removeAttribute("checked");
        }
      }
      const challengeLabel = "<span class='label label-purple'>" + challengeCount + "/" + challenges.length + "</span>";
      document.getElementById("challenges").innerHTML = "Challenges " + challengeLabel;
    }
  });

  const projectList = document.getElementById("project-list");
  projectList.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
      const clickedButton = event.target;
      const projects = projectList.children;
      for (let i = 0; i < projects.length; i++) {
        let project = projects[i];
        project.classList.remove("btn-purple");
      }
      clickedButton.classList.add("btn-purple");

      const projectLabel = "<span class='label label-purple'>"  + clickedButton.innerText + "</span>";
      document.getElementById("projects").innerHTML = "Projects " + projectLabel;

      document.getElementsByTagName("iframe")[0].src = clickedButton.getAttribute("id");
    }
  });
</script>
  
