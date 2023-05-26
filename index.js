// creating a pop up box that will blur the rest of the website when the box appears. 


function toggle(id){
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');

    const currentPopUp = document.getElementById(id);
    currentPopUp.classList.toggle('active');

    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('active');
}