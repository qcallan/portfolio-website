const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');
const projectCount = document.getElementById('projectCount');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    let visible = 0;
    filterButtons.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach(card => {
      const show = selected === 'all' || card.dataset.kind === selected;
      card.hidden = !show;
      if (show && card.dataset.kind !== 'template') visible++;
    });
    projectCount.textContent = String(visible).padStart(2, '0');
  });
});

const notes = {
  traffic: {
    title: 'FPGA Traffic Light Controller',
    body: `<p>This project models a traffic light system for a main highway and a farm road. The controller uses sensor input to decide when the side road should receive a green light.</p><p>The design was written in Verilog, simulated in AMD Vivado, and implemented on a Digilent Zybo Z7-10 FPGA board.</p><p><a class="notes-image-link" href="assets/traffic-light-state-diagram.jpg" target="_blank" rel="noopener">View the traffic light state diagram ↗</a></p><p><strong>Keep building this case study:</strong> add a short description of each state and what you learned from testing.</p>`
  },
  template: {
    title: 'Your next engineering project',
    body: `<p>Use this space for a new lab, personal build, or capstone. Replace the title, description, and tags in <code>index.html</code>.</p><p><strong>A useful project write-up includes:</strong> the goal, design choices, tools and parts, how you tested it, the result, and what you would improve next.</p>`
  }
};

const dialog = document.getElementById('notesDialog');
document.querySelectorAll('[data-notes]').forEach(button => {
  button.addEventListener('click', () => {
    const note = notes[button.dataset.notes];
    document.getElementById('notesTitle').textContent = note.title;
    document.getElementById('notesBody').innerHTML = note.body;
    dialog.showModal();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

document.getElementById('copyEmail').addEventListener('click', async event => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText('qcallan8@gmail.com');
    button.textContent = 'Copied!';
    window.setTimeout(() => button.textContent = 'Copy Email', 1600);
  } catch {
    window.location.href = 'mailto:qcallan8@gmail.com';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
