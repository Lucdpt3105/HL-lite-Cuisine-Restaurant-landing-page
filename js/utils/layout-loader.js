/**
 * Layout Loader - Load shared header and footer components
 */

// Determine the correct base path based on current location
function getBasePath() {
    const path = window.location.pathname;
    // If we're in a subdirectory (pages/), use ../ 
    // Otherwise use current directory ./
    return path.includes('/pages/') ? '../' : './';
}

// Load Header
function loadHeader() {
    const basePath = getBasePath();
    const headerPlaceholder = document.getElementById('header-placeholder');
    
    if (headerPlaceholder) {
        fetch(basePath + 'layouts/header.html')
            .then(response => {
                if (!response.ok) throw new Error('Header not found');
                return response.text();
            })
            .then(html => {
                headerPlaceholder.innerHTML = html;
                
                // Execute any scripts in the header
                const scripts = headerPlaceholder.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.body.appendChild(newScript);
                });
            })
            .catch(error => {
                console.error('Error loading header:', error);
                // Fallback: create basic header
                headerPlaceholder.innerHTML = `
                    <nav class="navbar">
                        <div class="container nav-container">
                            <a href="${basePath}index.html" class="logo">🍴 Élite Cuisine</a>
                            <ul class="nav-menu">
                                <li><a href="${basePath}index.html">Home</a></li>
                                <li><a href="${basePath}pages/about.html">About</a></li>
                                <li><a href="${basePath}pages/menu.html">Menu</a></li>
                                <li><a href="${basePath}pages/events.html">Events</a></li>
                                <li><a href="${basePath}pages/contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                `;
            });
    }
}

// Load Footer
function loadFooter() {
    const basePath = getBasePath();
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (footerPlaceholder) {
        fetch(basePath + 'layouts/footer.html')
            .then(response => {
                if (!response.ok) throw new Error('Footer not found');
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                // Fallback: create basic footer
                footerPlaceholder.innerHTML = `
                    <footer class="footer">
                        <div class="container">
                            <p>&copy; 2026 Élite Cuisine Restaurant. All rights reserved.</p>
                        </div>
                    </footer>
                `;
            });
    }
}

// Initialize layout loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        loadHeader();
        loadFooter();
    });
} else {
    // DOM already loaded
    loadHeader();
    loadFooter();
}
