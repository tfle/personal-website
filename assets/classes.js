const sortList = list => [...list].sort((a, b) => {
    const A = a.textContent, B = b.textContent;
    return (A < B) ? -1 : (A > B) ? 1 : 0;
});

window.addEventListener("load", function () {
    const ul = document.getElementById("roll");
    const list = ul.querySelectorAll("button");
    ul.append(...sortList(list));
});

const roll = document.getElementById("roll");
roll.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        const clickedButton = event.target;
        navigator.clipboard.writeText(clickedButton.id + "@jnreng.onmicrosoft.com");

        const students = roll.children;
        for (let i = 0; i < students.length; i++) {
            let student = students[i];
            student.classList.remove("btn-purple");
        }
        clickedButton.classList.add("btn-purple");

        const studentLabel = "<span class='label label-purple'>" + clickedButton.innerText + "</span>";
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
projectList.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        const clickedButton = event.target;
        const projects = projectList.children;
        for (let i = 0; i < projects.length; i++) {
            let project = projects[i];
            project.classList.remove("btn-purple");
        }
        clickedButton.classList.add("btn-purple");

        const projectLabel = "<span class='label label-purple'>" + clickedButton.innerText + "</span>";
        document.getElementById("projects").innerHTML = "Projects " + projectLabel;

        document.getElementsByTagName("iframe")[0].src = clickedButton.getAttribute("id");
    }
});
