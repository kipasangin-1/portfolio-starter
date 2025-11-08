// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Tahun footer otomatis
document.getElementById('year').textContent = new Date().getFullYear();

// Form 'mailto:' sederhana: buka aplikasi email pengguna
const form = document.getElementById('contact-form');
const status = document.querySelector('.form-msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email) {
    status.textContent = 'Nama dan email wajib diisi.';
    return;
  }
  const subject = encodeURIComponent('Kontak dari Portofolio');
  const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:EMAILKAMU@contoh.com?subject=${subject}&body=${body}`;
  status.textContent = 'Aplikasi email dibuka. Kalau tidak terbuka, kirim manual ke EMAILKAMU@contoh.com ya.';
});
