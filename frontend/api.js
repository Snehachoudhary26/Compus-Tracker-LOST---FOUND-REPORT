const BASE_URL = 'http://localhost:8080/api';

const getToken = () => localStorage.getItem('ct_token');
const getUser = () => { const u = localStorage.getItem('ct_user'); return u ? JSON.parse(u) : null; };
const setToken = (t) => localStorage.setItem('ct_token', t);
const setUser = (u) => localStorage.setItem('ct_user', JSON.stringify(u));
const clearAuth = () => { localStorage.removeItem('ct_token'); localStorage.removeItem('ct_user'); };
const authHeaders = () => { const t = getToken(); return t ? { 'Authorization': 'Bearer ' + t } : {}; };

async function handleResponse(res) {
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Something went wrong.');
  return data;
}

async function apiSignup(name, email, password, role) {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role })
  });
  const data = await handleResponse(res);
  setToken(data.token); setUser(data.user); return data;
}

async function apiLogin(email, password, role) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, role })
  });
  const data = await handleResponse(res);
  setToken(data.token); setUser(data.user); return data;
}

async function apiRegister(name, email, campusId, role) {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, campusId, role })
  });
  return handleResponse(res);
}

function apiLogout() { clearAuth(); window.location.href = 'index.html'; }

async function apiReportItem(formData) {
  const res = await fetch(`${BASE_URL}/items`, { method: 'POST', headers: authHeaders(), body: formData });
  return handleResponse(res);
}

async function apiGetItems(type, status) {
  let url = `${BASE_URL}/items`;
  const p = new URLSearchParams();
  if (type) p.append('type', type);
  if (status) p.append('status', status);
  if ([...p].length) url += '?' + p.toString();
  return handleResponse(await fetch(url, { headers: authHeaders() }));
}

async function apiAdminStats() {
  return handleResponse(await fetch(`${BASE_URL}/admin/stats`, { headers: authHeaders() }));
}

async function apiAdminGetItems() {
  return handleResponse(await fetch(`${BASE_URL}/admin/items`, { headers: authHeaders() }));
}

async function apiAdminApprove(id) {
  return handleResponse(await fetch(`${BASE_URL}/admin/items/${id}/approve`, { method: 'PUT', headers: authHeaders() }));
}

async function apiAdminDelete(id) {
  return handleResponse(await fetch(`${BASE_URL}/admin/items/${id}`, { method: 'DELETE', headers: authHeaders() }));
}

async function apiSendMessage(senderId, senderName, receiverId, receiverName, content) {
  return handleResponse(await fetch(`${BASE_URL}/messages`, {
    method: 'POST', headers: { ...authHeaders(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ senderId, senderName, receiverId, receiverName, content })
  }));
}

async function apiGetConversation(userId1, userId2) {
  return handleResponse(await fetch(`${BASE_URL}/messages/conversation?userId1=${userId1}&userId2=${userId2}`, { headers: authHeaders() }));
}

function showToast(msg, type = 'success') {
  const old = document.querySelector('.ct-toast'); if (old) old.remove();
  const t = document.createElement('div');
  t.className = `ct-toast ct-toast--${type}`;
  t.innerHTML = `<span>${type === 'success' ? '✓' : '✕'}</span> ${msg}`;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 4000);
}

function updateNavUser() {
  const user = getUser();
  const el = document.getElementById('navUser');
  if (!el) return;
  if (user) {
    el.innerHTML = `
      <div class="nav-user-info">
        <div class="nav-avatar">${user.name.charAt(0).toUpperCase()}</div>
        <span>${user.name}</span>
      </div>
      <button class="btn-logout" onclick="apiLogout()">Logout</button>`;
  } else {
    el.innerHTML = `
      <button class="btn-nav-outline" onclick="openModal('loginModal')">Log In</button>
      <button class="btn-nav-primary" onclick="openModal('signupModal')">Sign Up</button>`;
  }
}

function openModal(id) { document.getElementById(id)?.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id)?.classList.remove('active'); document.body.style.overflow = ''; }

document.addEventListener('DOMContentLoaded', () => {
  updateNavUser();
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) closeModal(m.id); });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('✅ PWA Service Worker registered'))
      .catch(err => console.log('SW error:', err));
  });
}
