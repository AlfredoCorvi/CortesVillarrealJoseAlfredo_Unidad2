const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
    menuButton.hidden = false;
    const closeMenu = () => {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
    };
    menuButton.addEventListener('click', () => {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!expanded));
        navigation.classList.toggle('is-open', !expanded);
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            menuButton.focus();
        }
    });
}
const filters = document.querySelector('.filters');
const cards = [...document.querySelectorAll('.planet-card')];
const count = document.querySelector('#planet-count');
if (filters && count) {
    filters.hidden = false;
    filters.addEventListener('click', event => {
        const button = event.target.closest('button[data-filter]');
        if (!button) return;
        filters.querySelectorAll('button').forEach(item => {
            item.setAttribute('aria-pressed', String(item === button));
        });
        cards.forEach(card => {
            card.hidden = button.dataset.filter !== 'todos' && card.dataset.group !== button.dataset.filter;
        });
        count.textContent = `${cards.filter(card => !card.hidden).length} planetas · en orden desde el Sol`;
    });
}
