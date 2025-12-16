/**
 * Layout Loader - Load header and footer into pages
 */

(function() {
    'use strict';

    // Determine base path based on current page location
    function getBasePath() {
        const path = window.location.pathname;
        return path.includes('/pages/') ? '../' : './';
    }

    const basePath = getBasePath();

    // Load header
    fetch(`${basePath}layouts/header.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Update active nav link
            updateActiveNavLink();
            
            // Initialize navbar functionality
            if (typeof initNavbar === 'function') {
                initNavbar();
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch(`${basePath}layouts/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));

    // Update active nav link based on current page
    function updateActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            
            if (linkPage === currentPage || 
                (currentPage === 'index.html' && linkPage === '../index.html') ||
                (currentPage === '' && linkPage === '../index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

})();
