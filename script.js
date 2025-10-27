// script.js — small helpers and demo form handling
(() => {
  // set years across pages
  const year = new Date().getFullYear();
  document.getElementById('year')?.textContent = year;
  document.getElementById('yearAbout')?.textContent = year;
  document.getElementById('yearContact')?.textContent = year;

  // contact form demo (client-side only)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value?.trim();
      const email = document.getElementById('email')?.value?.trim();
      const msg = document.getElementById('message')?.value?.trim();
      const out = document.getElementById('formMsg');

      if(!name || !email || !msg){
        if(out){
          out.style.display = 'block';
          out.className = 'alert alert-danger';
          out.textContent = 'Please fill all fields.';
        }
        return;
      }

      // simulate success (no backend)
      if(out){
        out.style.display = 'block';
        out.className = 'alert alert-success';
        out.textContent = `Thanks ${name}! This demo does not send messages, but your form looks valid.`;
      }
      form.reset();
    });
  }

  // subtle hover tilt for cards (pure JS light enhancement)
  const hoverCards = document.querySelectorAll('.feature-card, .glass-card, .showcase-card');
  hoverCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotX = (y * 6).toFixed(2);
      const rotY = (x * -6).toFixed(2);
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0) scale(1.01)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();
