const menuRef = document.querySelector('#menu');
const showMenuRef = document.querySelector('#hame_menu');
const hamItemsRef = document.querySelectorAll('.ham_item')
const sectionsRef = document.querySelectorAll('section');
const linksRef = document.querySelectorAll('.nav_link');

console.log(sectionsRef)
console.log(linksRef)


hamItemsRef.forEach(item => {
    item.addEventListener('click', function onHamItemClick() {
        showMenuRef.classList.remove('open-menu');
        showMenuRef.classList.add('close-menu');
    })
})
// console.log();
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
    sectionsRef.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >=  (sectionTop - sectionHeight / 3) ){
            currentSection = section.getAttribute('id');
        }
    })

    linksRef.forEach(link => {
        link.classList.remove('activeNavLink');
        
        if(link.href.includes(currentSection)){
            link.classList.add('activeNavLink');
            console.log(link.href)
        }
    })

    hamItemsRef.forEach(item => {
        item.classList.remove('activeHamItem');
        
        if(item.href.includes(currentSection)){
            item.classList.add('activeHamItem');
            console.log(item.href)
        }
    })

};





// check if screen is >= 992 then close menu

