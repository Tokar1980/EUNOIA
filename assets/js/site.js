const SITE_CONFIG = {
  contactEmail: "jmo.eunoia@gmail.com",
  linkedinUrl: "https://www.linkedin.com/company/eunoia-–-jmo/",
  xUrl: "https://x.com/EUNOIA_JMO"
};

function socialLink(label, url) {
  if (url && url.trim()) {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }
  return `<span class="social-disabled" aria-disabled="true">${label} — coming soon</span>`;
}

function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <strong>European Union New Order for Integrated Action (EUNOIA)</strong>
          <p>Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.</p>
        </div>
        <div>
          <p><strong>Contact</strong><br><a href="mailto:${SITE_CONFIG.contactEmail}">${SITE_CONFIG.contactEmail}</a></p>
          <p>${socialLink('LinkedIn', SITE_CONFIG.linkedinUrl)}<br>${socialLink('X', SITE_CONFIG.xUrl)}</p>
        </div>
      </div>
      <div class="copyright">© Designed by Prof Volodymyr Tokar, 2026</div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderFooter();
  const b=document.querySelector('.mobile-btn'),m=document.querySelector('.menu');
  if(b&&m)b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  document.querySelectorAll('.accordion button').forEach(btn=>btn.addEventListener('click',()=>{const box=btn.closest('.accordion'),o=box.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.querySelector('.mark').textContent=o?'−':'+'}));
});
