var toggle = document.getElementById('toggle-skills');
var skills = document.getElementById('skill-section');
if (toggle && skills) {
    toggle.addEventListener('click', function () {
        if (skills.style.display === 'none') {
            skills.style.display = 'block';
        }
        else {
            skills.style.display = 'none';
        }
    });
}
