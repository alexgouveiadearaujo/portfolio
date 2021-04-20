function initScrollSmooth() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollSessao(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
    };

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollSessao)
    });
};

initScrollSmooth()
