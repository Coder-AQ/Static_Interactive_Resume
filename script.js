var toggleWorkExperienceButton = document.getElementById('toggleWorkExperience');
var workExperienceSection = document.getElementById('workExperience');
toggleWorkExperienceButton.addEventListener('click', function () {
    if (workExperienceSection.style.display === 'none') {
        workExperienceSection.style.display = 'block';
        toggleWorkExperienceButton.textContent = 'Hide Work Experience';
    }
    else {
        workExperienceSection.style.display = 'none';
        toggleWorkExperienceButton.textContent = 'Show Work Experience';
    }
});
