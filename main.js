document.getElementById('year').textContent = new Date().getFullYear();

const sections = Array.from(document.querySelectorAll('.section'));
const navLinks = Array.from(document.querySelectorAll('.nav-list a'));
const axisDot = document.getElementById('axisDot');

function positionDot(activeIndex){
  const rail = document.querySelector('.axis-rail');
  if(!rail) return;
  const total = navLinks.length;
  const railBox = rail.getBoundingClientRect();
  const usable = railBox.height - 7;
  const step = total > 1 ? usable / (total - 1) : 0;
  axisDot.style.top = (activeIndex * step) + 'px';
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
    }
    if(entry.isIntersecting && entry.intersectionRatio > 0.3){
      const id = entry.target.id;
      navLinks.forEach(l => l.classList.remove('active'));
      const activeLink = navLinks.find(l => l.dataset.target === id);
      if(activeLink){
        activeLink.classList.add('active');
        positionDot(navLinks.indexOf(activeLink));
      }
    }
  });
}, { threshold: [0.3], rootMargin: "-10% 0px -50% 0px" });

sections.forEach(s => observer.observe(s));

window.addEventListener('load', () => positionDot(0));
window.addEventListener('resize', () => {
  const activeLink = document.querySelector('.nav-list a.active') || navLinks[0];
  positionDot(navLinks.indexOf(activeLink));
});
