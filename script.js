let menu = document.querySelector('#hm');
let sidebar = document.querySelector('.side_nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    sidebar.classList.toggle('open');
}