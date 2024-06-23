//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar ');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('active');
}

//scroll sections
let sectionsns = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a')
window.onscroll=()=>{
    sectionsns.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');
        
        if (top > offset && top <= offset + height) {
            // activee navbar links
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            });
            //active sections for  Animation on scroll 
            sec.classList.add('show-animate');
    }
    //if want to use Animation that repeats on  scroll use this
    else{
        sec.classList.remove('show-animate'); 
    }
})};
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY> 100);
    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.remove('active');
//video container hover pause animation
document.addEventListener('DOM ContentLoaded',()=>{
    const videoContainer= document.querySelector('.video-container');
    videoContainer.addEventListener('mouseover',()=>{
        videoContainer.Style.animationPlayState = 'paused';
    });
    videoContainer.addEventListener('mouseout',()=>{
        videoContainer.style.animationPlayState ='running';
    });
});
