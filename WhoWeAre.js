// ─── Animation sequence ─────────────────────────────
// Steps:
//   0 → tb0 (mission)
//   1 → tb1
//   2 → tb2
//   3 → c1 (Founded)
//   4 → c2 (Members)
//   5 → c3 (Advisors)
//   6 → c4 (Alumni)
//   7 → cfooter
 
const TOTAL_STEPS = 8;
const PX_PER_STEP = 260; // scroll pixels per step
 
const outer  = document.getElementById('outer');
const nudge  = document.getElementById('nudge');
const pipsEl = document.getElementById('pips');
 
const textEls  = ['tb0','tb1','tb2'].map(id => document.getElementById(id));
const cardEls  = ['c1','c2','c3','c4'].map(id => document.getElementById(id));
const footerEl = document.getElementById('cfooter');
 
// Build pips
const pipNodes = [];
for (let i = 0; i < TOTAL_STEPS; i++) {
  const p = document.createElement('div');
  p.className = 'pip';
  pipsEl.appendChild(p);
  pipNodes.push(p);
}
 
// Set outer height so sticky has room to animate
outer.style.height = (window.innerHeight + TOTAL_STEPS * PX_PER_STEP) + 'px';
window.addEventListener('resize', () => {
  outer.style.height = (window.innerHeight + TOTAL_STEPS * PX_PER_STEP) + 'px';
});
 
// ─── Scroll update ──────────────────────────────────
function update() {
  // How far has outer's top moved above the viewport?
  const scrolledIn = window.scrollY - outer.offsetTop;
 
  // clamp 0 … TOTAL_STEPS * PX_PER_STEP
  const scrolled = Math.max(0, Math.min(scrolledIn, TOTAL_STEPS * PX_PER_STEP));
  const step     = scrolled / PX_PER_STEP; // float 0 → TOTAL_STEPS
 
  // Nudge hint
  nudge.classList.toggle('hidden', step > 0.3);
 
  // Pips
  pipNodes.forEach((p, i) => p.classList.toggle('active', step > i));
 
  // Text blocks — steps 0, 1, 2
  textEls.forEach((el, i) => el.classList.toggle('in', step > i));
 
  // Cards — steps 3, 4, 5, 6
  cardEls.forEach((el, i) => el.classList.toggle('in', step > 3 + i));
 
  // Footer — step 7
  footerEl.classList.toggle('in', step > 7);
}
 
window.addEventListener('scroll', update, { passive: true });
update();
 // initial call