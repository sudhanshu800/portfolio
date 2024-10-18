const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
    else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
})

// ------light and dark---
// if (localStorage.theme === 'black' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: black)').matches)) {
//     document.documentElement.classList.add('black')
//   } else {
//     document.documentElement.classList.remove('black')
//   }

//   function toggleTheme(){
//     document.document.documentElement.classList.toggle('black')

//     if(document.document.documentElement.classList.containes('black')){
//         localStorage.theme = 'black';
//     }else{
//         localStorage.theme = 'light';
//     }
//   }