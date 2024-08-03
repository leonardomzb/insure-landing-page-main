const navButtonEl = document.getElementById('movil-nav-button');
const navMenuEl = document.getElementById('nav-menu');

navButtonEl.addEventListener('click', () => {
  if (navButtonEl.getAttribute('aria-expanded') === 'false') {
    navButtonEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z"/><g fill="#2C2830"><path d="M10.873 9.563l11.314 11.314-1.06 1.06L9.813 10.623z"/><path d="M9.813 20.877L21.127 9.563l1.06 1.06-11.314 11.314z"/></g></g></svg>';
    navButtonEl.setAttribute('aria-expanded', true)
    navMenuEl.style.display = 'flex'
  } else {
    navButtonEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z"/><g fill="#2C2830"><path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z"/></g></g></svg>';
    navButtonEl.setAttribute('aria-expanded', false)
    navMenuEl.style.display = 'none'
  }
});