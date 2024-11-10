const toggleWorkExperienceButton = document.getElementById('toggleWorkExperience') as HTMLButtonElement;
const workExperienceSection = document.getElementById('workExperience') as HTMLElement;

toggleWorkExperienceButton.addEventListener('click', () => {
    if (workExperienceSection.style.display === 'none') {
        workExperienceSection.style.display = 'block';
        toggleWorkExperienceButton.textContent = 'Hide Work Experience';
    } else {
        workExperienceSection.style.display = 'none';
        toggleWorkExperienceButton.textContent = 'Show Work Experience';
    }
});

