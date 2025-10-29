// DOM Ready
$(document).ready(function() {
    // Show welcome animation first, then initialize components
    showWelcomeAnimation();
    
    // Initialize slideshow immediately but navbar will show after welcome
    initSlideshow();
    initScrollEffects();
    initTopSellers();
    initMenuEffects();
    initEventsCarousel();
    initContactForm();
});

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
        hideAllSlides();
        changeSlideCount();
        showSlide(currentSlideIndex);
    }, 8000);
}

function hideAllSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
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
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    slides[index].classList.add('active');
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
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

    // Parallax effect for hero section
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        const rate = scrolled * -0.5;
        $('.hero .slide.active img').css('transform', `translateY(${rate}px)`);
    });
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

    $('.carousel-next').on('click', function() {
        currentEventIndex = (currentEventIndex + 1) % totalEvents;
        showEvent(currentEventIndex);
    });

    $('.carousel-prev').on('click', function() {
        currentEventIndex = (currentEventIndex - 1 + totalEvents) % totalEvents;
        showEvent(currentEventIndex);
    });

    function showEvent(index) {
        eventCards.hide().removeClass('active');
        eventCards.eq(index).fadeIn(500).addClass('active');
    }

    // Auto-rotate events every 4 seconds
    setInterval(function() {
        currentEventIndex = (currentEventIndex + 1) % totalEvents;
        showEvent(currentEventIndex);
    }, 4000);
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