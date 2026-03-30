// Toast notification
function showToast(msg, type = 'verde') {
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `<i class="fas fa-${type === 'verde' ? 'check-circle' : 'exclamation-circle'}"></i> ${msg}`;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3000);
}

// Modal open/close
function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal(id) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = '';
}
// Close on backdrop click
document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', e => {
        if (e.target === el) closeModal(el.id);
    });
});

// Row data fill for modals (data-* attributes)
document.querySelectorAll('[data-fill]').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.fill;
        openModal(target);
        Object.entries(btn.dataset).forEach(([key, val]) => {
            const input = document.getElementById(`fill_${key}`);
            if (input) input.value = val;
        });
    });
});

// Active nav highlight
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('href') === currentPath) item.classList.add('active');
});

// Auto dismiss flash messages
setTimeout(() => {
    document.querySelectorAll('.auto-dismiss').forEach(el => el.remove());
}, 4000);
