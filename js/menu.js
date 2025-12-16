// ============================================
// MENU PAGE FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MENU FILTER FUNCTIONALITY
    // ============================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter menu cards with animation
            menuCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    // Show card with fade in
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Hide card with fade out
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Initialize all cards as visible
    menuCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    });
    
    // ============================================
    // ADD TO CART FUNCTIONALITY
    // ============================================
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get item details
            const card = this.closest('.menu-card');
            const itemName = card.querySelector('.menu-header h3').textContent;
            const itemPrice = card.querySelector('.menu-price').textContent;
            
            // Add animation to button
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Show notification (you can customize this)
            showNotification(`${itemName} added to cart!`);
            
            // Here you would typically add to cart logic
            // For now, just log to console
            console.log('Added to cart:', itemName, itemPrice);
        });
    });
    
    // ============================================
    // QUICK VIEW FUNCTIONALITY
    // ============================================
    const quickViewButtons = document.querySelectorAll('.btn-quick-view');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get item details
            const card = this.closest('.menu-card');
            const itemName = card.querySelector('.menu-header h3').textContent;
            const itemDescription = card.querySelector('.menu-description').textContent;
            const itemPrice = card.querySelector('.menu-price').textContent;
            const itemImage = card.querySelector('.menu-image img').src;
            
            // Show quick view modal (you would implement a modal here)
            console.log('Quick view:', {
                name: itemName,
                description: itemDescription,
                price: itemPrice,
                image: itemImage
            });
            
            showNotification(`Quick view: ${itemName}`);
        });
    });
    
    // ============================================
    // NOTIFICATION HELPER
    // ============================================
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #e76f51, #f4a261);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            font-family: 'Libre Franklin', sans-serif;
            font-weight: 600;
            opacity: 0;
            transform: translateX(400px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe menu cards for scroll animation
    menuCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
