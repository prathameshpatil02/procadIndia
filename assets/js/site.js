document.addEventListener('DOMContentLoaded', () => {
  const infrastructureLink = document.querySelector('.site-nav a[href="infrastructure.html"]');
  if (infrastructureLink && !document.querySelector('.site-nav a[href="portfolio.html"]')) {
    infrastructureLink.insertAdjacentHTML('beforebegin', '<a href="portfolio.html">Portfolio</a>');
    if (location.pathname.endsWith('/portfolio.html')) document.querySelector('.site-nav a[href="portfolio.html"]').classList.add('active');
  }

  document.querySelectorAll('a[href="tel:+919820079110"]').forEach(phone => {
    if (!phone.parentElement.querySelector('a[href="tel:+918779535340"]')) phone.insertAdjacentHTML('afterend', '<a href="tel:+918779535340">+91 87795 35340</a>');
  });

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const form = document.querySelector('[data-mailto-form]');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = `PS Toolings enquiry — ${data.get('service')}`;
      const body = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Company: ${data.get('company') || 'Not provided'}`,
        `Phone: ${data.get('phone') || 'Not provided'}`,
        `Service: ${data.get('service')}`,
        '',
        'Project details:',
        data.get('message')
      ].join('\n');
      const status = form.querySelector('.form-status');
      status.textContent = 'Opening your email application with the enquiry…';
      status.classList.add('is-success');
      window.location.href = `mailto:prakash@procadindia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
});
