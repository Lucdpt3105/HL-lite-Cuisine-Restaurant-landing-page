// ============================================
// EVENTS PAGE FUNCTIONALITY WITH JQUERY
// ============================================

$(document).ready(function() {
    
    // ============================================
    // SLICK CAROUSEL INITIALIZATION
    // ============================================
    $('.events-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            }
        ]
    });
    
    // ============================================
    // BOOK EVENT BUTTON FUNCTIONALITY
    // ============================================
    $('.btn-book-event').on('click', function(e) {
        e.preventDefault();
        
        // Get event details
        const $card = $(this).closest('.event-card');
        const eventName = $card.find('h3').text();
        const eventPrice = $card.find('.price').text();
        const eventTime = $card.find('.event-time').text().replace(/\s+/g, ' ').trim();
        
        // Button animation
        $(this).css('transform', 'scale(0.9)');
        setTimeout(() => {
            $(this).css('transform', 'scale(1)');
        }, 200);
        
        // Show jQuery confirmation dialog
        showBookingConfirmation(eventName, eventPrice, eventTime);
    });
    
    // ============================================
    // VIEW DETAILS BUTTON FUNCTIONALITY
    // ============================================
    $('.btn-event-details').on('click', function(e) {
        e.preventDefault();
        
        // Get event details
        const $item = $(this).closest('.event-item');
        const eventName = $item.find('h4').text();
        const eventDescription = $item.find('p').text();
        const eventPrice = $item.find('.event-item-price').text();
        
        // Show jQuery alert with event details
        showEventDetails(eventName, eventDescription, eventPrice);
    });
    
    // ============================================
    // BOOKING CONFIRMATION DIALOG (JQUERY)
    // ============================================
    function showBookingConfirmation(eventName, price, time) {
        // Create modal HTML
        const modalHTML = `
            <div class="booking-modal" id="bookingModal">
                <div class="booking-modal-overlay"></div>
                <div class="booking-modal-content">
                    <div class="booking-modal-header">
                        <h3>Confirm Booking</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="booking-modal-body">
                        <div class="booking-details">
                            <div class="booking-icon">
                                <i class="fas fa-calendar-check"></i>
                            </div>
                            <h4>${eventName}</h4>
                            <p class="booking-info">
                                <i class="far fa-clock"></i> ${time.replace('Time:', '').trim()}
                            </p>
                            <p class="booking-price">${price}</p>
                            <form class="booking-form">
                                <input type="text" placeholder="Your Name" required>
                                <input type="email" placeholder="Your Email" required>
                                <input type="tel" placeholder="Phone Number" required>
                                <input type="number" placeholder="Number of Guests" min="1" max="10" value="1" required>
                                <textarea placeholder="Special Requests (Optional)" rows="3"></textarea>
                            </form>
                        </div>
                    </div>
                    <div class="booking-modal-footer">
                        <button class="btn-cancel">Cancel</button>
                        <button class="btn-confirm">Confirm Booking</button>
                    </div>
                </div>
            </div>
        `;
        
        // Append modal to body
        $('body').append(modalHTML);
        
        // Fade in modal
        $('#bookingModal').hide().fadeIn(300);
        
        // Close modal handlers
        $('.modal-close, .btn-cancel, .booking-modal-overlay').on('click', function() {
            closeBookingModal();
        });
        
        // Confirm booking handler
        $('.btn-confirm').on('click', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = $('.booking-form input[type="text"]').val();
            const email = $('.booking-form input[type="email"]').val();
            const phone = $('.booking-form input[type="tel"]').val();
            const guests = $('.booking-form input[type="number"]').val();
            
            // Validate form
            if (!name || !email || !phone || !guests) {
                showAlert('Error', 'Please fill in all required fields!', 'error');
                return;
            }
            
            // Show success message
            closeBookingModal();
            showAlert(
                'Booking Confirmed!', 
                `Thank you ${name}! Your booking for ${eventName} has been confirmed. We'll send a confirmation email to ${email}.`,
                'success'
            );
            
            // Log booking data
            console.log('Booking confirmed:', {
                event: eventName,
                name: name,
                email: email,
                phone: phone,
                guests: guests,
                price: price
            });
        });
    }
    
    // ============================================
    // CLOSE BOOKING MODAL
    // ============================================
    function closeBookingModal() {
        $('#bookingModal').fadeOut(300, function() {
            $(this).remove();
        });
    }
    
    // ============================================
    // EVENT DETAILS MODAL (JQUERY)
    // ============================================
    function showEventDetails(eventName, description, price) {
        const detailsHTML = `
            <div class="details-modal" id="detailsModal">
                <div class="details-modal-overlay"></div>
                <div class="details-modal-content">
                    <div class="details-modal-header">
                        <h3>Event Details</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="details-modal-body">
                        <h4>${eventName}</h4>
                        <p>${description}</p>
                        <div class="details-price">${price}</div>
                    </div>
                    <div class="details-modal-footer">
                        <button class="btn-close-details">Close</button>
                        <button class="btn-book-from-details">Book Now</button>
                    </div>
                </div>
            </div>
        `;
        
        $('body').append(detailsHTML);
        $('#detailsModal').hide().fadeIn(300);
        
        $('.modal-close, .btn-close-details, .details-modal-overlay').on('click', function() {
            closeDetailsModal();
        });
        
        $('.btn-book-from-details').on('click', function() {
            closeDetailsModal();
            showBookingConfirmation(eventName, price, '');
        });
    }
    
    // ============================================
    // CLOSE DETAILS MODAL
    // ============================================
    function closeDetailsModal() {
        $('#detailsModal').fadeOut(300, function() {
            $(this).remove();
        });
    }
    
    // ============================================
    // ALERT NOTIFICATION (JQUERY)
    // ============================================
    function showAlert(title, message, type = 'info') {
        const iconMap = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };
        
        const colorMap = {
            success: '#4CAF50',
            error: '#f44336',
            info: '#2196F3'
        };
        
        const alertHTML = `
            <div class="custom-alert" style="display: none;">
                <div class="alert-icon" style="color: ${colorMap[type]}">
                    <i class="fas ${iconMap[type]}"></i>
                </div>
                <div class="alert-content">
                    <h4>${title}</h4>
                    <p>${message}</p>
                </div>
                <button class="alert-close">&times;</button>
            </div>
        `;
        
        $('body').append(alertHTML);
        
        const $alert = $('.custom-alert').last();
        
        // Slide down alert
        $alert.slideDown(400);
        
        // Close alert handler
        $alert.find('.alert-close').on('click', function() {
            $alert.slideUp(300, function() {
                $(this).remove();
            });
        });
        
        // Auto close after 5 seconds
        setTimeout(() => {
            $alert.slideUp(300, function() {
                $(this).remove();
            });
        }, 5000);
    }
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    $(window).on('scroll', function() {
        $('.event-item').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 100) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
    
    // Initialize event items for scroll animation
    $('.event-item').css({
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
    });
});

// ============================================
// MODAL STYLES (Injected dynamically)
// ============================================
const modalStyles = `
<style>
.booking-modal, .details-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
}

.booking-modal-overlay, .details-modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
}

.booking-modal-content, .details-modal-content {
    position: relative;
    max-width: 500px;
    margin: 50px auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.booking-modal-header, .details-modal-header {
    padding: 20px 30px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.booking-modal-header h3, .details-modal-header h3 {
    margin: 0;
    font-size: 24px;
    color: #333;
}

.modal-close {
    background: none;
    border: none;
    font-size: 32px;
    color: #999;
    cursor: pointer;
    transition: color 0.3s;
}

.modal-close:hover {
    color: #e76f51;
}

.booking-modal-body, .details-modal-body {
    padding: 30px;
}

.booking-icon {
    text-align: center;
    font-size: 48px;
    color: #e76f51;
    margin-bottom: 20px;
}

.booking-details h4, .details-modal-body h4 {
    text-align: center;
    font-size: 22px;
    color: #333;
    margin-bottom: 15px;
}

.booking-info {
    text-align: center;
    color: #666;
    margin-bottom: 10px;
}

.booking-price, .details-price {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #e76f51;
    margin-bottom: 25px;
}

.booking-form input,
.booking-form textarea {
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    font-family: 'Libre Franklin', sans-serif;
    transition: border-color 0.3s;
}

.booking-form input:focus,
.booking-form textarea:focus {
    outline: none;
    border-color: #e76f51;
}

.booking-modal-footer, .details-modal-footer {
    padding: 20px 30px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    gap: 15px;
}

.btn-cancel, .btn-close-details {
    padding: 10px 25px;
    border: 2px solid #ddd;
    background: white;
    color: #666;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
}

.btn-cancel:hover, .btn-close-details:hover {
    border-color: #e76f51;
    color: #e76f51;
}

.btn-confirm, .btn-book-from-details {
    padding: 10px 25px;
    border: none;
    background: linear-gradient(135deg, #e76f51, #f4a261);
    color: white;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.3s;
}

.btn-confirm:hover, .btn-book-from-details:hover {
    transform: scale(1.05);
}

.custom-alert {
    position: fixed;
    top: 100px;
    right: 30px;
    max-width: 400px;
    background: white;
    padding: 20px 25px;
    border-radius: 12px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: flex-start;
    gap: 15px;
    z-index: 10001;
}

.alert-icon {
    font-size: 32px;
}

.alert-content h4 {
    margin: 0 0 8px 0;
    font-size: 18px;
    color: #333;
}

.alert-content p {
    margin: 0;
    font-size: 14px;
    color: #666;
    line-height: 1.5;
}

.alert-close {
    background: none;
    border: none;
    font-size: 24px;
    color: #999;
    cursor: pointer;
    margin-left: auto;
}

.alert-close:hover {
    color: #333;
}

@media (max-width: 768px) {
    .booking-modal-content, .details-modal-content {
        margin: 20px;
        max-width: calc(100% - 40px);
    }
    
    .custom-alert {
        right: 20px;
        left: 20px;
        max-width: calc(100% - 40px);
    }
}
</style>
`;

$('head').append(modalStyles);
