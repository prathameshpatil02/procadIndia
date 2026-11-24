document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach(year => { year.textContent = new Date().getFullYear(); });
  if (document.title.includes('PS Toolings')) document.title = document.title.replaceAll('PS Toolings', 'Pro CADCAM Services');
  const nav = document.querySelector('.site-nav');
  const isServices = location.pathname.endsWith('/services.html');

  document.querySelectorAll('.brand').forEach(brand => {
    brand.innerHTML = '<span class="brand-mark" aria-hidden="true"><i></i></span><span class="brand-wordmark"><strong>Pro CADCAM Services</strong><small>Imagine · Think · Create</small></span>';
    brand.setAttribute('aria-label', 'Pro CADCAM Services — Imagine, Think, Create');
  });
  if (nav && !nav.querySelector('a[href="portfolio.html"]')) nav.querySelector('a[href="infrastructure.html"]')?.insertAdjacentHTML('beforebegin', '<a href="portfolio.html">Portfolio</a>');

  const servicesLink = nav?.querySelector('a[href="services.html"]');
  if (servicesLink && !nav.querySelector('.nav-dropdown')) servicesLink.outerHTML = `<details class="nav-dropdown${isServices ? ' is-active' : ''}"><summary>Services <span aria-hidden="true">⌄</span></summary><div class="dropdown-menu"><a href="services.html#molds">Plastic Injection Mold Making</a><a href="services.html#molding">Plastic Injection Molding</a><a href="services.html#rapid">Soft / Pilot / Rapid Tooling with Part Production</a><a href="services.html#components">Precision Components &amp; Assemblies</a></div></details>`;

  document.querySelectorAll('a[href="tel:+919820079110"]').forEach(phone => {
    if (!phone.parentElement.querySelector('a[href="tel:+918779535340"]')) phone.insertAdjacentHTML('afterend', '<a href="tel:+918779535340">+91 87795 35340</a>');
  });

  const equipment = document.querySelector('.support-equipment');
  if (equipment && !equipment.textContent.includes('Injection molding')) equipment.insertAdjacentHTML('beforeend', '<span>140T × 2 and 180T injection molding machines</span>');
  const addMedia = (selector, image, alt, caption) => {
    const section = document.querySelector(selector);
    if (section && !section.querySelector('.service-media')) section.insertAdjacentHTML('beforeend', `<figure class="service-media"><img src="${image}" alt="${alt}"><figcaption>${caption}</figcaption></figure>`);
    return section;
  };
  const molds = addMedia('#molds', 'assets/images/content/injection-mold.jpeg', 'Precision injection mold', 'Precision injection mold making');
  addMedia('#rapid', 'assets/images/content/molded-part.jpeg', 'Molded production part', 'Tooling with part production');
  addMedia('#components', 'assets/images/content/precision-assembly.jpeg', 'Precision machined component', 'Precision components and assemblies');
  if (molds && !document.querySelector('#molding')) molds.insertAdjacentHTML('afterend', '<article id="molding" class="service-detail"><span class="detail-number">03</span><div><p class="eyebrow">Part production</p><h2>Plastic injection molding</h2></div><div><p>Production-ready molded parts for validated designs, from short pilot runs through repeat production. Our molding capability stays closely connected to the tooling team for faster problem solving.</p><ul class="check-list"><li>140T × 2 and 180T injection molding machines</li><li>Controlled production support and part inspection</li><li>Practical handover from mold trial to molded component</li></ul></div><figure class="service-media service-media--capacity"><img src="assets/images/content/molded-part.jpeg" alt="Injection molded component"><figcaption>Injection-molded part production</figcaption></figure></article>');

  const machinePhoto = document.querySelector('.machine-image img');
  if (machinePhoto) { machinePhoto.src = 'assets/images/content/cnc-machine.jpeg'; machinePhoto.alt = 'Hurco CNC machining centre in the Pro CADCAM Services facility'; }
  const machineFeature = document.querySelector('.machine-feature');
  if (machineFeature && !document.querySelector('.equipment-gallery')) machineFeature.insertAdjacentHTML('afterend', '<section class="equipment-gallery"><div class="container"><figure><img src="assets/images/content/cnc-machine.jpeg" alt="CNC machining centre"><figcaption>CNC machining capability</figcaption></figure><figure><img src="assets/images/content/molded-part.jpeg" alt="Injection molded component"><figcaption>Injection molding capacity — 140T × 2 and 180T × 1</figcaption></figure></div></section>');

  const categories = [['white-goods', 'White Goods', 'image2.jpeg', 'Consumer appliances and daily-use product housings.'], ['electrical', 'Electrical', 'image22.jpeg', 'Durable electrical enclosures and component systems.'], ['automotive', 'Automotive', 'image37.jpeg', 'Automotive tooling, trim and production components.'], ['general-engineering', 'General Engineering', 'image33.jpeg', 'Purpose-built parts for industrial applications.'], ['toys', 'Toys', 'image13.jpeg', 'Detailed consumer-product and toy tooling.'], ['furniture', 'Furniture', 'image40.jpeg', 'Furniture fittings, forms and molded details.'], ['medical', 'Medical', 'image9.jpeg', 'Sanitary and medical-adjacent product assemblies.']];
  const gallery = document.querySelector('.portfolio-gallery');
  if (gallery && !document.querySelector('[data-portfolio-categories]')) gallery.insertAdjacentHTML('beforebegin', '<section class="portfolio-category-section"><div class="container"><p class="section-kicker">Browse by sector</p><div class="portfolio-categories" data-portfolio-categories></div></div></section>');
  const portfolio = document.querySelector('[data-portfolio-categories]');
  if (portfolio) portfolio.innerHTML = categories.map(([id, title, image, description]) => `<a class="portfolio-category" href="portfolio-category.html?category=${id}"><img src="assets/images/portfolio/${image}" alt="${title} project"><span><small>Portfolio</small><strong>${title}</strong><em>${description}</em></span></a>`).join('');

  const categoryView = document.querySelector('[data-category-view]');
  if (categoryView) {
    const projects = {'white-goods': ['White Goods', ['image2.jpeg', 'image3.jpeg']], electrical: ['Electrical', ['image11.jpeg', 'image22.jpeg']], automotive: ['Automotive', ['image28.jpeg', 'image37.jpeg', 'image39.jpeg']], 'general-engineering': ['General Engineering', ['image33.jpeg', 'image35.jpeg']], toys: ['Toys', ['image4.jpeg', 'image13.jpeg']], furniture: ['Furniture', ['image40.jpeg', 'image41.jpeg', 'image43.jpeg']], medical: ['Medical', ['image6.jpeg', 'image9.jpeg']]};
    const [title, images] = projects[new URLSearchParams(location.search).get('category')] || projects['white-goods'];
    document.title = `${title} Portfolio | Pro CADCAM Services`;
    categoryView.innerHTML = `<p class="eyebrow">Portfolio</p><h1>${title}</h1><p class="lede">Selected examples of tooling and product work from this sector.</p><div class="category-project-grid">${images.map((image, index) => `<figure><img src="assets/images/portfolio/${image}" alt="${title} project ${index + 1}"><figcaption>${title} project</figcaption></figure>`).join('')}</div>`;
  }

  const toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }));
  }

  const form = document.querySelector('[data-mailto-form]');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Pro CADCAM Services enquiry — ${data.get('service')}`;
    const body = [`Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Company: ${data.get('company') || 'Not provided'}`, `Phone: ${data.get('phone') || 'Not provided'}`, `Service: ${data.get('service')}`, '', 'Project details:', data.get('message')].join('\n');
    const status = form.querySelector('.form-status');
    if (status) { status.textContent = 'Opening your email application with the enquiry…'; status.classList.add('is-success'); }
    window.location.href = `mailto:prakash@procadindia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
