document.addEventListener('DOMContentLoaded', () => {
    (function() {
        const burger = document.getElementById('burgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const nav = document.querySelector('nav');

        burger.addEventListener('click', function(e) {
            e.stopPropagation();
            burger.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });
            const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                burger.classList.remove('active');
                mobileMenu.classList.remove('open');
            });
        });
        
        document.addEventListener('click', function(e) {
            const isClickInsideNav = nav.contains(e.target);
            if (!isClickInsideNav && mobileMenu.classList.contains('open')) {
                burger.classList.remove('active');
                mobileMenu.classList.remove('open');
            }
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth > 933) {
                burger.classList.remove('active');
                mobileMenu.classList.remove('open');
            }
        });
    })();
});