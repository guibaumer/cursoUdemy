const exitButton = document.querySelector('#exit');
const section = document.querySelector('#sec-menu');
const ul = document.querySelector('#lista');
const menuIcon = document.querySelector('#menu-icon');




exitButton.addEventListener('click', function() {
    OpenCloseMenu()
});
menuIcon.addEventListener('click', function() {
    OpenCloseMenu()
});


function OpenCloseMenu() {
    if(menuIcon.style.display === 'block') {
        ul.style.display = 'flex';
        exitButton.style.display = 'block';
        menuIcon.style.display = 'none';
    } else {
        ul.style.display = 'none';
        exitButton.style.display = 'none';
        menuIcon.style.display = 'block';
    }    
}

