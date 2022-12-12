$(document).ready(() => {
    var scrollBefore = 0
    document.querySelector('body').onscroll = () => {
        const scrolled = window.scrollY;

        if(scrollBefore > scrolled){
            // Scroll Up function
            scrollBefore = scrolled;
            document.querySelector('.nav').classList.remove('nav-none');
        }else{
            // Scroll down function
            scrollBefore = scrolled;
            document.querySelector('.nav').classList.add('nav-none');
        }

    }
    document.querySelector('.open-menu').addEventListener('click', () => {
        document.querySelector('.small-nav-container').style.display = 'flex'
        document.querySelector('.close-menu').style.display = 'block'
        document.querySelector('.open-menu').style.display = 'none'
    })
    document.querySelector('.close-menu').addEventListener('click', () => {
        document.querySelector('.small-nav-container').style.display = 'none'
        document.querySelector('.close-menu').style.display = 'none'
        document.querySelector('.open-menu').style.display = 'block'
    })
})