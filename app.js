const glow=document.getElementById('glow');
window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const sticky=document.getElementById('sticky');
window.addEventListener('scroll',()=>sticky.classList.toggle('show',scrollY>650 && scrollY<document.body.scrollHeight-innerHeight-450));