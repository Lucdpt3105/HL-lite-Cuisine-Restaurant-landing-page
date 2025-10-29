// Dark Mode Toggle Functionality - TEMPORARILY DISABLED
/*
(function() {
    'use strict';

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply theme on page load
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Wait for DOM to be ready
    $(document).ready(function() {
        // Create dark mode toggle button
        createDarkModeToggle();
        
        // Set initial toggle state
        updateToggleButton(currentTheme);
        
        // Add click event listener
        $('.theme-toggle').on('click', toggleDarkMode);
    });

    function createDarkModeToggle() {
        const toggleHTML = `
            <button class="theme-toggle" aria-label="Toggle dark mode">
                <span class="sun-icon">☀️</span>
                <span class="moon-icon">🌙</span>
            </button>
        `;
        
        // Add toggle button to navigation
        $('.nav-container').append(toggleHTML);
    }

    function toggleDarkMode() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Apply new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Save to localStorage
        localStorage.setItem('theme', newTheme);
        
        // Update toggle button
        updateToggleButton(newTheme);
        
        // Add transition effect
        $('body').addClass('theme-transitioning');
        setTimeout(() => {
            $('body').removeClass('theme-transitioning');
        }, 300);
    }

    function updateToggleButton(theme) {
        const $toggle = $('.theme-toggle');
        if (theme === 'dark') {
            $toggle.addClass('dark-mode');
            $toggle.attr('aria-label', 'Switch to light mode');
        } else {
            $toggle.removeClass('dark-mode');
            $toggle.attr('aria-label', 'Switch to dark mode');
        }
    }
})();
*/