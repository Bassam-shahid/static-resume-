var toggle  = document.getElementById('toggle-skills') as HTMLButtonElement 
var skills = document.getElementById('skill-section') as HTMLElement 

if (toggle && skills) {
    toggle.addEventListener('click', () => {
        if (skills.style.display === 'none') {
            skills.style.display = 'block';
        } else {
            skills.style.display = 'none';
        }
    });
}

