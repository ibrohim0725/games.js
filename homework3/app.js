const soccer=document.querySelector('.soccer');
const ball=document.querySelector('.ball')
const ballSound=document.querySelector('.ball-sound')

let transform = 0;
soccer.addEventListener('click',(e)=>{
   
    const{x,y}=e;
    ball.style.cssText=`
    top:${y-100}px;
    left:${x-100}px;
   ` 
   transform+=700;
   ball.style.transform = `translate(50% ,50%) rotate(${ transform}deg)`; 
   ballSound.play();
   
   

})