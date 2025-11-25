const nav = document.querySelector('.mega-menu');
const toggleButton = document.querySelector('.menu-toggle');
const submenuTriggers = document.querySelectorAll('.has-submenu .menu-title');

const handleToggle = () => {
    const isOpen = nav.classList.toggle('is-open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
};

const handleSubmenuToggle = (event) => {
    const isDesktop = window.matchMedia('(min-width: 901px)').matches;
    if (isDesktop) return;

    const button = event.currentTarget;
    const parent = button.closest('.has-submenu');
    const isOpen = parent.classList.toggle('submenu-open');
    button.setAttribute('aria-expanded', String(isOpen));
};

toggleButton?.addEventListener('click', handleToggle);
submenuTriggers.forEach(trigger => trigger.addEventListener('click', handleSubmenuToggle));
window.addEventListener('resize', handleResize);