/**
 * Binghamton CTF Club - Main JavaScript
 * Handles mobile drawer navigation, active link highlighting, and clipboard copy utilities.
 * Light mode only design system.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Drawer Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileDrawer = document.querySelector('.mobile-drawer');

    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('is-open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        mobileMenuBtn.innerHTML = isOpen
          ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
          : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });

      // Close drawer on link click
      mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('is-open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          mobileMenuBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
        });
      });
    }

    // 2. Highlight Current Page Link in Nav & Bottom Nav
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .bottom-nav-item').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
      }
    });

    // 3. Copy to Clipboard Utility
    document.querySelectorAll('[data-copy]').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.preventDefault();
        const textToCopy = btn.getAttribute('data-copy');
        if (!btn.dataset.originalHtml) {
          btn.dataset.originalHtml = btn.innerHTML;
        }
        try {
          await navigator.clipboard.writeText(textToCopy);
          btn.innerHTML = `<span style="color:var(--bing-green);font-weight:600">Copied!</span>`;
          setTimeout(() => {
            if (btn.dataset.originalHtml) {
              btn.innerHTML = btn.dataset.originalHtml;
            }
          }, 2000);
        } catch (err) {
          console.error('Failed to copy', err);
        }
      });
    });
  });
})();
