    <!-- ══════════════════════════════════════════════════════════
         JAVASCRIPT
         ══════════════════════════════════════════════════════════ -->
    <script>
      /* ── Glass header on scroll ─────────────────────────── */
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
      }, { passive: true });

      /* ── Active nav highlight ───────────────────────────── */
      const navLinks = document.querySelectorAll('nav a');
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const match = document.querySelector(`nav a[href="#${entry.target.id}"]`);
            if (match) match.classList.add('active');
          }
        });
      }, { threshold: 0.35 });
      document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

      /* ── Scroll-reveal ──────────────────────────────────── */
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

      /* ── Carousel ───────────────────────────────────────── */
      const track    = document.getElementById('carousel-track');
      const prevBtn  = document.getElementById('prev-btn');
      const nextBtn  = document.getElementById('next-btn');
      const dotsWrap = document.getElementById('carousel-dots');
      const cards    = Array.from(track.querySelectorAll('.project-mini'));
      const VISIBLE  = 3;
      const maxIndex = cards.length - VISIBLE;
      let current    = 0;

      // Build dots
      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      }

      function getCardWidth() {
        return cards[0].offsetWidth + 20; // 20 = gap
      }

      function goTo(index) {
        current = Math.max(0, Math.min(index, maxIndex));
        track.style.transform = `translateX(-${current * getCardWidth()}px)`;
        dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
          d.classList.toggle('active', i === current);
        });
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === maxIndex;
      }

      prevBtn.addEventListener('click', () => goTo(current - 1));
      nextBtn.addEventListener('click', () => goTo(current + 1));

      // Touch swipe
      let touchStartX = 0;
      track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
      track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? goTo(current + 1) : goTo(current - 1);
      });

      window.addEventListener('resize', () => goTo(current), { passive: true });
      goTo(0);

      /* ── Project modals ─────────────────────────────────── */
      function openModal(id) {
        const overlay = document.getElementById('modal-' + id);
        if (!overlay) return;
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        // Focus trap — focus close button
        overlay.querySelector('.modal-close').focus();
      }

      function closeModal(overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }

      // Open on card click
      cards.forEach(card => {
        card.addEventListener('click', () => {
          const project = card.dataset.project;
          openModal(project);
        });
        // Keyboard: enter/space
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View ${card.querySelector('h3').textContent} project details`);
        card.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(card.dataset.project);
          }
        });
      });

      // Close on button click
      document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.closest('.modal-overlay')));
      });

      // Close on overlay click (outside modal)
      document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', e => {
          if (e.target === overlay) closeModal(overlay);
        });
      });

      // Close on Escape key
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
        }
      });

      /* ── Contact form feedback ──────────────────────────────── */
      const form = document.querySelector('form');
      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const btn = form.querySelector('button[type="submit"]');
          const original = btn.textContent;
          btn.textContent = 'sending...';
          btn.disabled = true;

          try {
            const res = await fetch(form.action, {
              method: 'POST',
              body: new FormData(form),
              headers: { 'Accept': 'application/json' }
            });
            if (res.ok) {
              btn.textContent = 'message sent! ✦';
              btn.style.background = 'var(--green)';
              form.reset();
            } else {
              throw new Error();
            }
          } catch {
            btn.textContent = 'something went wrong — try emailing directly';
            btn.style.background = '#f87171';
          } finally {
            setTimeout(() => {
              btn.textContent = original;
              btn.style.background = '';
              btn.disabled = false;
            }, 4000);
          }
        });
      }

    </script>
