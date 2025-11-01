// DOM Ready
$(document).ready(function() {
    // Show preloader first
    initPreloader();
    
    // Show welcome animation first, then initialize components
    showWelcomeAnimation();
    
    // Initialize slideshow immediately but navbar will show after welcome
    initSlideshow();
    initScrollEffects();
    initTopSellers();
    initMenuEffects();
    initEventsCarousel();
    initContactForm();
    initBookingSystem();
});

// Preloader
function initPreloader() {
    $(window).on('load', function() {
        setTimeout(function() {
            $('#preloader').addClass('fade-out');
            setTimeout(function() {
                $('#preloader').remove();
            }, 500);
        }, 2000); // Show logo for 2 seconds minimum
    });
}

// Welcome Animation
function showWelcomeAnimation() {
    // Hide navbar initially
    $('.navbar').css('opacity', '0');
    
    // Show welcome text with fade in
    setTimeout(function() {
        // After 3 seconds, fade in the navbar
        $('.navbar').css({
            'opacity': '1',
            'transition': 'opacity 1s ease'
        });
        
        // Initialize navigation after welcome
        initNavigation();
    }, 3000);
}

// Navigation functionality
function initNavigation() {
    // Smooth scrolling for navigation links
    $('.nav-menu a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000, 'easeInOutQuad');
        }
    });

    // Mobile menu toggle
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });

    // Close mobile menu when clicking on a link
    $('.nav-menu a').on('click', function() {
        $('.hamburger').removeClass('active');
        $('.nav-menu').removeClass('active');
    });

    // Fixed navbar on scroll (like the code example)
    $(window).on('scroll', function() {
        let pos = $(window).scrollTop();
        if (pos >= 100) {
            $('.navbar').addClass('fxd-navbar');
        } else {
            $('.navbar').removeClass('fxd-navbar');
        }
    });
}

// Slideshow functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function initSlideshow() {
    // Show first slide
    showSlide(currentSlideIndex);
    
    // Auto slide every 8 seconds (like the code example)
    setInterval(function() {
        changeSlideCount();
        showSlide(currentSlideIndex);
    }, 8000);
}

function changeSlideCount() {
    currentSlideIndex++;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

function nextSlide() {
    changeSlide(1);
}

function showSlide(index) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;

    slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === index;
        slide.classList.toggle('active', isActive);

        const slideImage = slide.querySelector('img');
        if (slideImage && !isActive) {
            slideImage.style.transform = 'translateY(0)';
        }
    });
    
    applyHeroParallax(scrollTop);
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === index);
    });
}

function applyHeroParallax(scrollTop) {
    const rate = scrollTop * -0.5;
    const activeSlideImage = document.querySelector('.hero .slide.active img');
    if (activeSlideImage) {
        activeSlideImage.style.transform = `translateY(${rate}px)`;
    }
}

// Scroll effects and animations
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in animation
    document.querySelectorAll('.section-header, .chef-card, .seller-card, .service-item, .about-restaurant-section, .chefs-section, .menu-section, .top-sellers-section, .events-section, .contact-section').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for hero section with requestAnimationFrame
    let latestScroll = $(window).scrollTop();
    let ticking = false;

    $(window).on('scroll', function() {
        latestScroll = $(window).scrollTop();

        if (!ticking) {
            window.requestAnimationFrame(function() {
                applyHeroParallax(latestScroll);
                ticking = false;
            });
            ticking = true;
        }
    });

    applyHeroParallax(latestScroll);
}

// Top Sellers functionality
function initTopSellers() {
    // Order button click effects
    $('.order-btn').on('click', function(e) {
        e.preventDefault();
        const dishName = $(this).closest('.seller-card').find('h3').text();
        
        // Animation effect
        $(this).addClass('clicked');
        
        // Show confirmation message
        showOrderConfirmation(dishName);
        
        // Reset button after animation
        setTimeout(() => {
            $(this).removeClass('clicked');
        }, 300);
    });

    // Hover effects for seller cards
    $('.seller-card').hover(
        function() {
            $(this).find('.seller-image img').css('transform', 'scale(1.1)');
        },
        function() {
            $(this).find('.seller-image img').css('transform', 'scale(1)');
        }
    );
}

function showOrderConfirmation(dishName) {
    // Create or show confirmation message
    let confirmationMsg = $('.order-confirmation');
    if (confirmationMsg.length === 0) {
        $('body').append(`
            <div class="order-confirmation">
                <div class="confirmation-content">
                    <h3>🍽️ Order Added!</h3>
                    <p><strong>${dishName}</strong> has been added to your order.</p>
                    <button class="confirmation-close">Continue Browsing</button>
                </div>
            </div>
        `);
        confirmationMsg = $('.order-confirmation');
        
        // Close button functionality
        $('.confirmation-close').on('click', function() {
            confirmationMsg.fadeOut(300);
        });
    } else {
        confirmationMsg.find('p').html(`<strong>${dishName}</strong> has been added to your order.`);
    }
    
    confirmationMsg.fadeIn(300);
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        confirmationMsg.fadeOut(300);
    }, 3000);
}

// Menu hover effects
function initMenuEffects() {
    // Hover effects for menu items
    $('.menu-item').hover(
        function() {
            $(this).css('transform', 'translateX(10px)');
        },
        function() {
            $(this).css('transform', 'translateX(0)');
        }
    );

    // Order button click effects for menu items
    $('.menu-order-btn').on('click', function(e) {
        e.preventDefault();
        const dishName = $(this).closest('.menu-item').find('h4').text();
        const price = $(this).closest('.menu-item').find('.price').text();
        
        // Animation effect
        $(this).addClass('clicked');
        
        // Show confirmation message
        showMenuOrderConfirmation(dishName, price);
        
        // Reset button after animation
        setTimeout(() => {
            $(this).removeClass('clicked');
        }, 300);
    });
}

function showMenuOrderConfirmation(dishName, price) {
    // Create or show confirmation message
    let confirmationMsg = $('.menu-order-confirmation');
    if (confirmationMsg.length === 0) {
        $('body').append(`
            <div class="menu-order-confirmation">
                <div class="confirmation-content">
                    <h3>🍽️ Added to Order!</h3>
                    <p><strong>${dishName}</strong> (${price}) has been added to your order.</p>
                    <button class="confirmation-close">Continue Browsing</button>
                </div>
            </div>
        `);
        confirmationMsg = $('.menu-order-confirmation');
        
        // Close button functionality
        $('.confirmation-close').on('click', function() {
            confirmationMsg.fadeOut(300);
        });
    } else {
        confirmationMsg.find('p').html(`<strong>${dishName}</strong> (${price}) has been added to your order.`);
    }
    
    confirmationMsg.fadeIn(300);
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        confirmationMsg.fadeOut(300);
    }, 3000);
}

// Events carousel functionality
function initEventsCarousel() {
    let currentEventIndex = 0;
    const eventCards = $('.event-card');
    const totalEvents = eventCards.length;

    // Show only first event initially
    showEvent(currentEventIndex);

    $('.carousel-next').on('click', function(e) {
        e.stopPropagation();
        currentEventIndex = (currentEventIndex + 1) % totalEvents;
        showEvent(currentEventIndex);
    });

    $('.carousel-prev').on('click', function(e) {
        e.stopPropagation();
        currentEventIndex = (currentEventIndex - 1 + totalEvents) % totalEvents;
        showEvent(currentEventIndex);
    });

    function showEvent(index) {
        eventCards.hide().removeClass('active');
        eventCards.eq(index).show().addClass('active');
        
        // Lazy load video when shown
        const video = eventCards.eq(index).find('.event-video')[0];
        if (video && video.readyState === 0) {
            video.load();
        }
    }

    // Event modal functionality
    eventCards.on('click', function() {
        const eventId = $(this).data('event');
        const modal = $('#eventModal' + eventId);
        const modalVideo = modal.find('.modal-video')[0];
        
        // Show modal with animation
        modal.addClass('show');
        $('body').css('overflow', 'hidden');
        
        // Load and play video
        if (modalVideo) {
            modalVideo.load();
            modalVideo.play().catch(err => console.log('Video play failed:', err));
        }
        
        // Reset text animations
        modal.find('.modal-title, .modal-date, .modal-description').css('animation', 'none');
        setTimeout(() => {
            modal.find('.modal-title, .modal-date, .modal-description').css('animation', '');
        }, 10);
    });

    // Close modal functionality
    $('.modal-close').on('click', function() {
        closeModal($(this).closest('.event-modal'));
    });

    // Close on outside click
    $('.event-modal').on('click', function(e) {
        if (e.target === this) {
            closeModal($(this));
        }
    });

    // Close on ESC key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('.event-modal.show').each(function() {
                closeModal($(this));
            });
        }
    });

    function closeModal(modal) {
        const modalVideo = modal.find('.modal-video')[0];
        if (modalVideo) {
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
        modal.removeClass('show');
        $('body').css('overflow', '');
    }

    // Intersection Observer for lazy loading videos
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (video.readyState === 0) {
                    video.load();
                }
                video.play().catch(err => console.log('Autoplay prevented'));
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.5 });

    // Observe all event videos
    eventCards.each(function() {
        const video = $(this).find('.event-video')[0];
        if (video) {
            videoObserver.observe(video);
        }
    });
}

// Contact form functionality
function initContactForm() {
    $('#reservationForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            date: $('#date').val(),
            time: $('#time').val(),
            guests: $('#guests').val(),
            message: $('#message').val()
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.phone || 
            !formData.date || !formData.time || !formData.guests) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Animate submit button
        const submitBtn = $('.submit-btn');
        submitBtn.text('Processing...').prop('disabled', true);

        // Simulate API call
        setTimeout(function() {
            // Reset form
            $('#reservationForm')[0].reset();
            
            // Reset button
            submitBtn.text('Make Reservation').prop('disabled', false);
            
            // Show success message
            showMessage(`Thank you, ${formData.name}! Your reservation request has been submitted. We'll contact you shortly to confirm your booking for ${formData.date} at ${formData.time} for ${formData.guests} guests.`, 'success');
        }, 2000);
    });

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    $('#date').attr('min', today);
}

// Message display function
function showMessage(message, type) {
    // Remove existing messages
    $('.message').remove();
    
    // Create message element
    const messageEl = $(`
        <div class="message ${type}" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
            color: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            z-index: 2000;
            max-width: 400px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: fadeIn 0.5s ease;
        ">
            ${message}
        </div>
    `);
    
    // Add to body
    $('body').append(messageEl);
    
    // Auto remove after 5 seconds
    setTimeout(function() {
        messageEl.fadeOut(500, function() {
            $(this).remove();
        });
    }, 5000);
    
    // Click to close
    messageEl.on('click', function() {
        $(this).fadeOut(500, function() {
            $(this).remove();
        });
    });
}

// Smooth scrolling easing function
$.easing.easeInOutQuad = function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
};

// Additional utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Window resize handler
$(window).on('resize', debounce(function() {
    // Close mobile menu on resize
    $('.hamburger').removeClass('active');
    $('.nav-menu').removeClass('active');
}, 250));

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        './images/image1.png',
        './images/image2.png',
        './images/image3.png',
        './images/image3.jpeg',
        './images/food-dinner.jpg',
        './images/banner-bg-1.jpg',
        './images/image10.png',
        './images/image15.png',
        './images/image20.jpeg',
        './images/image25.png',
        './images/image30.png',
        './images/image35.png',
        './images/image40.png'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preloading
preloadImages();

// Add loading animation
$(window).on('load', function() {
    $('body').addClass('loaded');
});

// Scroll to top functionality
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 500) {
        if (!$('.scroll-top').length) {
            $('body').append(`
                <button class="scroll-top" style="
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background: #e76f51;
                    color: white;
                    border: none;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    font-size: 20px;
                    cursor: pointer;
                    z-index: 1000;
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 15px rgba(231, 111, 81, 0.3);
                ">↑</button>
            `);
        }
    } else {
        $('.scroll-top').remove();
    }
});

// Scroll to top click handler
$(document).on('click', '.scroll-top', function() {
    $('html, body').animate({scrollTop: 0}, 1000);
});

// Add hover effects to scroll to top button
$(document).on('mouseenter', '.scroll-top', function() {
    $(this).css({
        'transform': 'scale(1.1)',
        'background': '#d55e42'
    });
}).on('mouseleave', '.scroll-top', function() {
    $(this).css({
        'transform': 'scale(1)',
        'background': '#e76f51'
    });
});

// ========== BOOKING SYSTEM ==========
function initBookingSystem() {
    let cart = [];
    let guestName = '';
    let bookingType = '';
    
    // Show guest name modal after preloader finishes
    function showGuestNameModal() {
        const savedName = localStorage.getItem('guestName');
        if (savedName) {
            guestName = savedName;
            $('#guestNameModal').addClass('hidden');
        } else {
            // Wait for preloader to finish (3s animation + 0.5s fade out)
            setTimeout(() => {
                $('#guestNameModal').removeClass('hidden');
                $('body').css('overflow', 'hidden');
            }, 3500);
        }
    }
    
    // Initialize - show guest modal after page loads
    showGuestNameModal();
    
    // Guest name form submission
    $('#guestNameForm').on('submit', function(e) {
        e.preventDefault();
        guestName = $('#guestName').val().trim();
        if (guestName) {
            localStorage.setItem('guestName', guestName);
            $('#guestNameModal').addClass('hidden');
            $('body').css('overflow', '');
            
            // Show welcome message
            setTimeout(() => {
                alert(`Welcome, ${guestName}! You can now browse our menu and add items to your cart.`);
            }, 300);
        }
    });
    
    // Open booking modal
    function openBookingModal() {
        if (!guestName) {
            alert('Please enter your name first to continue.');
            $('#guestNameModal').removeClass('hidden');
            return;
        }
        $('#bookingOptionsModal').addClass('show');
        $('body').css('overflow', 'hidden');
    }
    
    // Open booking from buttons
    $('.cta-button, .open-booking-btn').on('click', function(e) {
        e.preventDefault();
        openBookingModal();
    });
    
    // Booking option selection
    $('.booking-option-btn').on('click', function() {
        bookingType = $(this).data('type');
        $('#bookingOptionsModal').removeClass('show');
        
        if (bookingType === 'seats-only') {
            // Go directly to booking form
            setTimeout(() => {
                $('#bookingFormModal').addClass('show');
            }, 300);
        } else if (bookingType === 'seats-with-food' || bookingType === 'celebration') {
            // Both go to food selection (celebration also includes food)
            setTimeout(() => {
                $('#bookingFoodModal').addClass('show');
            }, 300);
        }
    });
    
    // Close modal handlers
    $('.booking-modal-close').on('click', function() {
        closeAllModals();
    });
    
    $('.booking-modal').on('click', function(e) {
        if (e.target === this) {
            closeAllModals();
        }
    });
    
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
    
    function closeAllModals() {
        $('.booking-modal').removeClass('show');
        $('body').css('overflow', '');
    }
    
    // Floating cart button click
    $('.cart-btn').on('click', function() {
        if (!guestName) {
            alert('Please enter your name first to view your cart.');
            $('#guestNameModal').removeClass('hidden');
            return;
        }
        
        updateCartModal();
        $('#cartModal').addClass('show');
        $('body').css('overflow', 'hidden');
    });
    
    // Cart modal "Book Now" button
    $('.book-from-cart-btn').on('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items before booking.');
            return;
        }
        
        $('#cartModal').removeClass('show');
        
        // Show booking form with final step
        setTimeout(() => {
            $('#bookingFinalModal').addClass('show');
        }, 300);
    });
    
    // Add to cart from menu
    $('.menu-order-btn, .order-btn').on('click', function(e) {
        e.preventDefault();
        if (!guestName) {
            alert('Please enter your name first to add items to cart.');
            $('#guestNameModal').removeClass('hidden');
            return;
        }
        
        const menuItem = $(this).closest('.menu-item, .seller-card');
        const name = menuItem.find('h4, h3').first().text().trim();
        const priceText = menuItem.find('.price').text().replace('$', '');
        const price = parseFloat(priceText);
        
        addToCart(name, price);
        
        // Visual feedback
        const originalText = $(this).text();
        $(this).text('Added! ✓').css('background', '#28a745');
        setTimeout(() => {
            $(this).text(originalText).css('background', '');
        }, 1000);
    });
    
    // Add to cart from food modal
    $('.add-to-cart-btn').on('click', function() {
        const foodItem = $(this).closest('.food-item');
        const name = foodItem.data('name');
        const price = parseFloat(foodItem.data('price'));
        
        addToCart(name, price);
        
        // Visual feedback
        $(this).text('✓').css('background', '#28a745');
        setTimeout(() => {
            $(this).text('+').css('background', '#e76f51');
        }, 500);
    });
    
    function addToCart(name, price) {
        // Check if item already in cart
        const existingItem = cart.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }
        
        updateCart();
        updateFloatingCart();
    }
    
    function updateCart() {
        const cartItemsContainer = $('#cartItems');
        cartItemsContainer.empty();
        
        if (cart.length === 0) {
            cartItemsContainer.html('<p style="text-align: center; color: #999; padding: 2rem;">Cart is empty</p>');
        } else {
            cart.forEach((item, index) => {
                const cartItemHtml = `
                    <div class="cart-item">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                        <div class="cart-item-qty">
                            <button class="cart-qty-btn minus-btn" data-index="${index}">-</button>
                            <span>${item.quantity}</span>
                            <button class="cart-qty-btn plus-btn" data-index="${index}">+</button>
                            <button class="cart-qty-btn remove-btn" data-index="${index}">🗑</button>
                        </div>
                    </div>
                `;
                cartItemsContainer.append(cartItemHtml);
            });
        }
        
        updateCartSummary();
    }
    
    // Cart quantity controls
    $(document).on('click', '.plus-btn', function() {
        const index = $(this).data('index');
        cart[index].quantity++;
        updateCart();
    });
    
    $(document).on('click', '.minus-btn', function() {
        const index = $(this).data('index');
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
    });
    
    $(document).on('click', '.remove-btn', function() {
        const index = $(this).data('index');
        cart.splice(index, 1);
        updateCart();
    });
    
    function updateCartSummary() {
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.price * item.quantity;
        });
        
        const roundOff = Math.ceil(subtotal) - subtotal;
        const total = Math.ceil(subtotal);
        
        $('#cartSubtotal').text('$' + subtotal.toFixed(2));
        $('#cartRoundOff').text('$' + roundOff.toFixed(2));
        $('#cartTotal').text('$' + total.toFixed(2));
        
        updateFloatingCart();
    }
    
    function updateCartModal() {
        const cartModalItems = $('#cartModalItems');
        const cartModalSubtotal = $('#cartModalSubtotal');
        const cartModalTotal = $('#cartModalTotal');
        
        cartModalItems.empty();
        
        if (cart.length === 0) {
            cartModalItems.html('<p style="text-align: center; color: #999; padding: 40px;">Your cart is empty. Browse our menu to add items!</p>');
            cartModalSubtotal.text('$0.00');
            cartModalTotal.text('$0.00');
            return;
        }
        
        let subtotal = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const cartItemHtml = `
                <div class="cart-modal-item">
                    <div class="cart-modal-item-info">
                        <span class="cart-modal-item-name">${item.name}</span>
                        <span class="cart-modal-item-price">$${item.price.toFixed(2)} each</span>
                    </div>
                    <div class="cart-modal-item-controls">
                        <button class="cart-modal-qty-btn minus" data-index="${index}">-</button>
                        <span class="cart-modal-qty">${item.quantity}</span>
                        <button class="cart-modal-qty-btn plus" data-index="${index}">+</button>
                        <button class="cart-modal-remove-btn" data-index="${index}">🗑️</button>
                    </div>
                    <div class="cart-modal-item-total">$${itemTotal.toFixed(2)}</div>
                </div>
            `;
            
            cartModalItems.append(cartItemHtml);
        });
        
        cartModalSubtotal.text('$' + subtotal.toFixed(2));
        cartModalTotal.text('$' + subtotal.toFixed(2));
    }
    
    function updateFloatingCart() {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        $('.cart-count').text(cartCount);
        
        if (cartCount > 0) {
            $('.cart-count').fadeIn();
        } else {
            $('.cart-count').fadeOut();
        }
    }
    
    // Cart modal quantity controls
    $(document).on('click', '.cart-modal-qty-btn.plus', function() {
        const index = $(this).data('index');
        cart[index].quantity++;
        updateCart();
        updateCartModal();
    });
    
    $(document).on('click', '.cart-modal-qty-btn.minus', function() {
        const index = $(this).data('index');
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
        updateCartModal();
    });
    
    $(document).on('click', '.cart-modal-remove-btn', function() {
        const index = $(this).data('index');
        cart.splice(index, 1);
        updateCart();
        updateCartModal();
    });
    
    // Payment buttons
    $('.payment-btn').on('click', function() {
        const paymentType = $(this).text();
        alert(`Payment method selected: ${paymentType}\nTotal: ${$('#cartTotal').text()}\n\nProceeding to booking form...`);
        
        // Close food modal and open booking form
        $('#bookingFoodModal').removeClass('show');
        setTimeout(() => {
            $('#bookingFormModal').addClass('show');
        }, 300);
    });
    
    // Complete booking from food modal
    $('.booking-complete-btn').on('click', function() {
        if (cart.length === 0) {
            alert('Please add items to cart before completing booking.');
            return;
        }
        
        // Close food modal and open booking form
        $('#bookingFoodModal').removeClass('show');
        setTimeout(() => {
            $('#bookingFormModal').addClass('show');
        }, 300);
    });
    
    // Booking form submission
    $('#bookingForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            date: $('#bookingDate').val(),
            time: $('#bookingTime').val(),
            people: $('#numberOfPeople').val(),
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#bookingEmail').val(),
            phone: $('#bookingPhone').val(),
            instructions: $('#specialInstructions').val(),
            bookingType: bookingType,
            cart: cart
        };
        
        console.log('Booking submitted:', formData);
        
        // Show confirmation message
        alert('Reservation confirmed!\nYou will receive a confirmation email shortly.\n\nThank you for choosing Élite Cuisine Restaurant!');
        
        // Close form and show success modal
        $('#bookingFormModal').removeClass('show');
        setTimeout(() => {
            $('#bookingSuccessModal').addClass('show');
        }, 300);
        
        // Reset form and cart
        this.reset();
        cart = [];
        updateCart();
    });
    
    // Success modal Thank You button
    $('.success-btn').on('click', function() {
        closeAllModals();
        // Scroll to top
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    
    // Return to home page button
    $('.success-btn').on('click', function() {
        closeAllModals();
        $('html, body').animate({scrollTop: 0}, 1000);
    });
}

