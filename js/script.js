// window.addEventListener('DOMContentLoaded', ()=>{

//     const tabs_menu = document.querySelectorAll('.tab-menu li'),
//         tabs_secondMenuLi = document.querySelectorAll('.tab_secondMenu li'),
//         tabs_secondMenu = document.querySelectorAll('.tab_secondMenu'),
//           tabsContent = document.querySelectorAll('.tab-content'),
//           tabsPerent = document.querySelector('.tab-menu'),
//           tabsPerent2 = document.querySelectorAll('.tab_secondMenu');

          
//     function hidetabContent(){
//         tabsContent.forEach(item =>{
//             item.style.display = 'none';
//         });
//         tabs_secondMenu.forEach(item =>{
//             item.style.display = 'none';
//         });
//         tabs_menu.forEach(item =>{
//             item.classList.remove('tab-active');
//         });
//         tabs_secondMenuLi.forEach(item =>{
//             item.classList.remove('secondMenu-active');
//         });
//     }

//     function showTabContent(i = 0){
//         tabsContent[i].style.display = 'block';
//         tabs_menu[i].classList.add = ('tab-active');
//         tabs_secondMenu[i].style.display = 'flex';
//         tabs_secondMenuLi[i].classList.add = ('secondMenu-active');
//     }

//     hidetabContent();
//     showTabContent();


// })