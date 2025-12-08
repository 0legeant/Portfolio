// Mode sombre
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => document.body.classList.toggle('dark'));

// Bulles animées
const bubbleContainer = document.querySelector('.bubbles');
for(let i=0;i<30;i++){
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random()*20 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random()*100}%`;
  bubble.style.animationDuration = `${Math.random()*15 + 5}s`;
  bubble.style.opacity = Math.random();
  bubbleContainer.appendChild(bubble);
}

// Animation des cartes
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){entry.target.classList.add('show');}
  });
}, {threshold:0.5});
cards.forEach(card => observer.observe(card));

// Scroll fluide par section façon Apple
let currentSection = 0;
const sections = document.querySelectorAll('.section');
window.addEventListener('wheel', e => {
  if(e.deltaY > 0){currentSection=Math.min(currentSection+1,sections.length-1);}
  else{currentSection=Math.max(currentSection-1,0);}
  sections[currentSection].scrollIntoView({behavior:"smooth"});
});

// Hover menu style Apple
document.querySelectorAll('header ul li a').forEach(link => {
  link.addEventListener('mouseenter',()=>link.style.transform='scale(1.1)');
  link.addEventListener('mouseleave',()=>link.style.transform='scale(1)');
});