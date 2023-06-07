const menuRef = document.querySelector('#menu');
const showMenuRef = document.querySelector('#hame_menu');
const hamItemsRef = document.querySelectorAll('.ham_item')
const sectionsRef = document.querySelectorAll('section');
const linksRef = document.querySelectorAll('.nav_link');
const resumeLinks = document.querySelectorAll('.resume_link')
const resumeRef = document.querySelectorAll('.res')
const carouselRef = document.querySelectorAll('.carousel')


function changeImageShow(images,current) {
    images.forEach((image, index) => {
        image.classList.remove('show-image')
        image.classList.add('hide-image')

        if(index === current){
            image.classList.remove('hide-image')
            image.classList.add('show-image')
        }
    })
}

carouselRef.forEach(carousel => {

    const images = carousel.querySelectorAll('.project_image')
    const prevBtn = carousel.querySelector('.prev')
    const nextBtn = carousel.querySelector('.next')
    

    let current = 0;
    const lastIndex = images.length - 1;

    

    prevBtn.addEventListener('click', function onPrevClick(){
        console.log('prev')
        if(current <= 0){
            current = lastIndex;
        }
        else{
            current--;
        }
        changeImageShow(images,current)
    })

    nextBtn.addEventListener('click', function onNextClick(){
        console.log('next')
        if(current >= lastIndex){
            current = 0;
        }
        else{
            current++;
        }
        changeImageShow(images,current)
    })
 })

hamItemsRef.forEach(item => {
    item.addEventListener('click', function onHamItemClick() {
        showMenuRef.classList.remove('open-menu');
        showMenuRef.classList.add('close-menu');
    })
})
menuRef.addEventListener('click', function onMenuClick() {
    if(showMenuRef.classList.contains('close-menu')){
        showMenuRef.classList.remove('close-menu');
        showMenuRef.classList.add('open-menu');
    }
    else{
        showMenuRef.classList.remove('open-menu');
        showMenuRef.classList.add('close-menu');
    }
});

window.onresize = function onResize(){
    const screenWidth = window.innerWidth;
    if(screenWidth >= 992){
        showMenuRef.classList.remove('open-menu');
        showMenuRef.classList.add('close-menu');
    }
}

window.onscroll = function onScroll(){
    let currentSection = "landing_page";
    let currentRes = 'objective'

    sectionsRef.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >=  (sectionTop - sectionHeight / 3) ){
            currentSection = section.getAttribute('id');
        }
    })
    
    resumeRef.forEach(res => {
        const resTop = res.offsetTop;
        const resHeight = res.clientHeight;
        if(scrollY >= (resTop - resHeight / 3)){
            currentRes =  res.getAttribute('id')
        }
    })



    linksRef.forEach(link => {
        link.classList.remove('activeNavLink');
        
        if(link.href.includes(currentSection)){
            link.classList.add('activeNavLink');
        }
    })

    hamItemsRef.forEach(item => {
        item.classList.remove('activeHamItem');
        
        if(item.href.includes(currentSection)){
            item.classList.add('activeHamItem');
        }
    })

    resumeLinks.forEach(link => {
        link.classList.remove('activeResumeLink')
        let linkRes = link.href.split('#')[1]
        if(currentRes === linkRes){
            link.classList.add('activeResumeLink')
        }
    })

};





// check if screen is >= 992 then close menu

