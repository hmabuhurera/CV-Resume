// Type asseration to specify that the elements exist and are not null
var toggleSkillButton = document.getElementById("toggle-skill-btn");
var skillSection = document.getElementById("skills");
// Adding event listener for the button
toggleSkillButton.addEventListener("click", function () {
    // Check Skill if skill section is hidden
    if (skillSection.classList.contains("hl,idden")) {
        skillSection.classList.remove("hidden");
        toggleSkillButton.textContent = "Hide Skills"; //Change Button Text
    }
    else {
        skillSection.classList.add("hidden");
        toggleSkillButton.textContent = "Show Skills";
    } //change Button Color
});
