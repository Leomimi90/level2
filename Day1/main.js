// selecting ui elements
let menuBar = document.querySelector('.menu-bar');
let topNav = document.querySelector('.top-navigator');
let sideNavToggler = document.querySelector('.side-nav-toggler');
let sideNav = document.querySelector('.sidenav');
let faHand = document.querySelector('.fa-hand-point-right');
let faHandLeft = document.querySelector('.fa-hand');
menuBar.addEventListener('click', () => {
    topNav.classList.toggle('hidden');
});

sideNavToggler.addEventListener('click', () => {
    sideNav.classList.toggle('hidden');
    sideNavToggler.style.display = 'none'
});


faHandLeft.addEventListener('click', ()=>{
    sideNavToggler.style.display = 'block';
    console.log(faHandLeft)
});
