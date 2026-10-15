// Mobile menu toggle
document.querySelector('.burger')?.addEventListener('click', function(){
  const ul = document.querySelector('.main-nav ul');
  if(!ul) return;
  ul.style.display = (ul.style.display === 'flex') ? 'none' : 'flex';
  ul.style.flexDirection = 'column';
});

// Fake submit handlers (demo)
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = 'Gracias — tu mensaje ha sido enviado (demo).';
  msg.style.color = '#6b6b6b';
  this.reset();
});


// NAV SCROLL
window.addEventListener("scroll", () => {
  const h = document.querySelector("header");
  if(window.scrollY > 10) h.classList.add("scrolled");
  else h.classList.remove("scrolled");
});

// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};
