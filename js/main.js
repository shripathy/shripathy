/* ========================================
   Theme Toggle
   ======================================== */
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcons(theme);
})();

function updateThemeIcons(theme) {
  document.querySelectorAll('.icon-sun').forEach(el => {
    el.style.display = theme === 'dark' ? 'block' : 'none';
  });
  document.querySelectorAll('.icon-moon').forEach(el => {
    el.style.display = theme === 'light' ? 'block' : 'none';
  });
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcons(next);
}

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
});

/* ========================================
   Encrypted Text Animation (cycles between text content and data-text)
   ======================================== */
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

function scrambleTo(element, targetText, onComplete) {
  let iteration = 0;
  const speed = 50;
  const totalIterations = targetText.length;

  element.classList.add('is-scrambling');

  const interval = setInterval(() => {
    element.textContent = targetText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (index < iteration) return targetText[index];
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join('');

    iteration += 1 / 3;

    if (iteration >= totalIterations) {
      element.textContent = targetText;
      element.classList.remove('is-scrambling');
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, speed);
}

function cycleText(element) {
  const textA = element.getAttribute('data-text');
  const textB = element.textContent.trim();
  if (!textA || textA === textB) return;

  const texts = [textA, textB];
  let current = 0;
  const PAUSE = 3000; // ms between switches

  function next() {
    scrambleTo(element, texts[current], () => {
      current = (current + 1) % texts.length;
      setTimeout(next, PAUSE);
    });
  }

  next();
}

document.addEventListener('DOMContentLoaded', () => {
  const encryptedElements = document.querySelectorAll('.encrypted-text');
  encryptedElements.forEach((el, i) => {
    setTimeout(() => cycleText(el), 200 + i * 100);
  });
});

/* ========================================
   Project Year Toggle
   ======================================== */
function toggleYear(header) {
  header.classList.toggle('open');
  const content = header.nextElementSibling;
  content.classList.toggle('open');
}

/* ========================================
   Command Palette
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('cmdOverlay');
  const input = document.getElementById('cmdInput');
  const results = document.getElementById('cmdResults');
  const cmdOpenBtn = document.getElementById('cmdOpen');

  if (!overlay || !input) return;

  function openPalette() {
    overlay.classList.add('active');
    input.value = '';
    input.focus();
    filterCommands('');
    document.body.style.overflow = 'hidden';
  }

  function closePalette() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Open with Cmd+K or button click
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay.classList.contains('active')) {
        closePalette();
      } else {
        openPalette();
      }
    }
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closePalette();
    }
  });

  if (cmdOpenBtn) {
    cmdOpenBtn.addEventListener('click', openPalette);
  }

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePalette();
  });

  // Filter commands
  const allItems = Array.from(results.querySelectorAll('.cmd-item'));
  const allGroups = Array.from(results.querySelectorAll('.cmd-group-label'));

  function filterCommands(query) {
    const q = query.toLowerCase().trim();
    let visibleCount = 0;
    const visibleGroups = new Set();

    allItems.forEach(item => {
      const text = item.querySelector('span')?.textContent.toLowerCase() || '';
      const match = !q || text.includes(q);
      item.style.display = match ? 'flex' : 'none';
      if (match) {
        visibleCount++;
        // Find the group label for this item
        let prev = item.previousElementSibling;
        while (prev) {
          if (prev.classList.contains('cmd-group-label')) {
            visibleGroups.add(prev);
            break;
          }
          prev = prev.previousElementSibling;
        }
      }
      item.classList.remove('active');
    });

    allGroups.forEach(group => {
      group.style.display = visibleGroups.has(group) ? 'block' : 'none';
    });

    // Activate first visible
    const firstVisible = allItems.find(item => item.style.display !== 'none');
    if (firstVisible) firstVisible.classList.add('active');
  }

  input.addEventListener('input', () => filterCommands(input.value));

  // Keyboard navigation
  input.addEventListener('keydown', (e) => {
    const visible = allItems.filter(item => item.style.display !== 'none');
    const activeIndex = visible.findIndex(item => item.classList.contains('active'));

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      visible.forEach(i => i.classList.remove('active'));
      const next = (activeIndex + 1) % visible.length;
      visible[next].classList.add('active');
      visible[next].scrollIntoView({ block: 'nearest' });
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      visible.forEach(i => i.classList.remove('active'));
      const prev = activeIndex <= 0 ? visible.length - 1 : activeIndex - 1;
      visible[prev].classList.add('active');
      visible[prev].scrollIntoView({ block: 'nearest' });
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      const active = visible.find(item => item.classList.contains('active'));
      if (active) executeCommand(active);
    }
  });

  // Click on items
  results.addEventListener('click', (e) => {
    const item = e.target.closest('.cmd-item');
    if (item) executeCommand(item);
  });

  function executeCommand(item) {
    const href = item.getAttribute('data-href');
    const action = item.getAttribute('data-action');

    if (action === 'theme') {
      toggleTheme();
      closePalette();
      return;
    }

    if (href) {
      closePalette();
      window.location.href = href;
    }
  }
});

/* ========================================
   Intersection Observer for Section Reveals
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
  // The CSS animations handle the initial load.
  // This observer handles elements that come into view on scroll.
  const sections = document.querySelectorAll('.section');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sections.forEach(section => {
      observer.observe(section);
    });
  }
});

/* ========================================
   Link Hover Preview (subtle underline animation)
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Add smooth hover transitions to all external links in hero-bio
  const bioLinks = document.querySelectorAll('.hero-bio a');
  bioLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.textDecorationColor = 'var(--accent)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.textDecorationColor = 'var(--border)';
    });
  });
});
