(function(){
  // Shared dropdown behaviour for the Services menu across all pages.
  // Adds a short hide delay so users can move into the menu without it closing instantly.
  function initServiceDropdowns(){
    const menus = document.querySelectorAll('.nav-item.services-menu');
    menus.forEach(menu => {
      const dropdown = menu.querySelector('.dropdown');
      if(!dropdown) return;
      let hideTimer = null;
      const show = ()=>{ clearTimeout(hideTimer); dropdown.style.display = 'block'; const l = menu.querySelector('a'); if(l) l.setAttribute('aria-expanded','true'); };
      const hide = ()=>{ hideTimer = setTimeout(()=>{ dropdown.style.display = ''; const l = menu.querySelector('a'); if(l) l.setAttribute('aria-expanded','false'); }, 200); };
      menu.addEventListener('mouseenter', show);
      menu.addEventListener('mouseleave', hide);
      dropdown.addEventListener('mouseenter', show);
      dropdown.addEventListener('mouseleave', hide);
      // keyboard support: open on focus
      const link = menu.querySelector('a');
      if(link){ link.addEventListener('focus', show); link.addEventListener('blur', hide); }
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initServiceDropdowns);
  } else {
    initServiceDropdowns();
  }
})();
