// creating a pop up box that will blur the rest of the website when the box appears. You will be able to both click the X button, and also click out anywhere in the webpage.

function toggle(){
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');
    let skillPopUp = document.getElementById('skills-pop-up-box');
    skillPopUp.classList.toggle('active');
    let experiencePopUp = document.getElementById('experience-pop-up-box');
    experiencePopUp.classList.toggle('active');
}