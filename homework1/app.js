const elToggle=document.querySelector('#toggle');
const flashLight=document.querySelector('#img1');

document.addEventListener('mousemove',(e)=>{
   const{ x , y}=e
   console.log(x);
   console.log(y);
   
   
  flashLight.style.cssText=`
  top:${y-250}px;
  left:${x-250}px;
  `
})

elToggle.addEventListener('click', ()=>{
   document.body.classList.toggle('dark');
   toggle.textContent='dark mode';
   
});
