// ============================================
// CONTACT PAGE FUNCTIONALITY WITH JQUERY
// ============================================

$(document).ready(function() {
    
    // ============================================
    // SET MINIMUM DATE (TODAY)
    // ============================================
    const today = new Date().toISOString().split('T')[0];
    $('#date').attr('min', today);
    
    // ============================================
    // BOOKING FORM VALIDATION & SUBMISSION
    // ============================================
    $('#bookingForm').on('submit', function(e) {
        e.preventDefault();
        
        // Reset errors
        $('.form-group').removeClass('error');
        $('.error-message').text('').hide();
        
        let isValid = true;
        
        // Validate Full Name
        const fullName = $('#fullName').val().trim();
        if (fullName === '') {
            showError('#fullName', 'Please enter your full name');
            isValid = false;
        } else if (fullName.length < 3) {
            showError('#fullName', 'Name must be at least 3 characters');
            isValid = false;
        }
        
        // Validate Email
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            showError('#email', 'Please enter your email address');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('#email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate Phone
        const phone = $('#phone').val().trim();
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (phone === '') {
            showError('#phone', 'Please enter your phone number');
            isValid = false;
        } else if (!phoneRegex.test(phone) || phone.length < 10) {
            showError('#phone', 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate Guests
        const guests = $('#guests').val();
        if (guests === '') {
            showError('#guests', 'Please select number of guests');
            isValid = false;
        }
        
        // Validate Date
        const date = $('#date').val();
        if (date === '') {
            showError('#date', 'Please select a date');
            isValid = false;
        } else {
            const selectedDate = new Date(date);
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            
            if (selectedDate < currentDate) {
                showError('#date', 'Please select a future date');
                isValid = false;
            }
        }
        
        // Validate Time
        const time = $('#time').val();
        if (time === '') {
            showError('#time', 'Please select a time');
            isValid = false;
        }
        
        // If form is valid, submit
        if (isValid) {
            submitBooking();
        } else {
            // Show error alert
            showAlert(
                'Validation Error',
                'Please fill in all required fields correctly.',
                'error'
            );
        }
    });
    
    // ============================================
    // CONTACT FORM VALIDATION & SUBMISSION
    // ============================================
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Reset errors
        $('.form-group').removeClass('error');
        $('.error-message').text('').hide();
        
        let isValid = true;
        
        // Validate Name
        const name = $('#contactName').val().trim();
        if (name === '') {
            showError('#contactName', 'Please enter your name');
            isValid = false;
        }
        
        // Validate Email
        const email = $('#contactEmail').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            showError('#contactEmail', 'Please enter your email');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('#contactEmail', 'Please enter a valid email');
            isValid = false;
        }
        
        // Validate Subject
        const subject = $('#subject').val().trim();
        if (subject === '') {
            showError('#subject', 'Please enter a subject');
            isValid = false;
        }
        
        // Validate Message
        const message = $('#contactMessage').val().trim();
        if (message === '') {
            showError('#contactMessage', 'Please enter your message');
            isValid = false;
        } else if (message.length < 10) {
            showError('#contactMessage', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        // If form is valid, submit
        if (isValid) {
            submitContactForm();
        } else {
            showAlert(
                'Validation Error',
                'Please fill in all required fields correctly.',
                'error'
            );
        }
    });
    
    // ============================================
    // SHOW ERROR HELPER
    // ============================================
    function showError(fieldId, message) {
        const $field = $(fieldId);
        const $formGroup = $field.closest('.form-group');
        
        $formGroup.addClass('error');
        $formGroup.find('.error-message').text(message).show();
        
        // Shake animation
        $field.css('animation', 'shake 0.3s');
        setTimeout(() => {
            $field.css('animation', '');
        }, 300);
    }
    
    // ============================================
    // SUBMIT BOOKING
    // ============================================
    function submitBooking() {
        // Get form data
        const formData = {
            fullName: $('#fullName').val().trim(),
            email: $('#email').val().trim(),
            phone: $('#phone').val().trim(),
            guests: $('#guests').val(),
            date: $('#date').val(),
            time: $('#time').val(),
            message: $('#message').val().trim()
        };
        
        // Show loading state
        const $submitBtn = $('.btn-submit').first();
        const originalText = $submitBtn.html();
        $submitBtn.html('<i class="fas fa-spinner fa-spin"></i> Processing...').prop('disabled', true);
        
        // Simulate API call
        setTimeout(() => {
            // Reset button
            $submitBtn.html(originalText).prop('disabled', false);
            
            // Show success modal
            showBookingSuccess(formData);
            
            // Reset form
            $('#bookingForm')[0].reset();
            
            // Log data
            console.log('Booking submitted:', formData);
        }, 1500);
    }
    
    // ============================================
    // SUBMIT CONTACT FORM
    // ============================================
    function submitContactForm() {
        // Get form data
        const formData = {
            name: $('#contactName').val().trim(),
            email: $('#contactEmail').val().trim(),
            subject: $('#subject').val().trim(),
            message: $('#contactMessage').val().trim()
        };
        
        // Show loading state
        const $submitBtn = $('.contact-form .btn-submit');
        const originalText = $submitBtn.html();
        $submitBtn.html('<i class="fas fa-spinner fa-spin"></i> Sending...').prop('disabled', true);
        
        // Simulate API call
        setTimeout(() => {
            // Reset button
            $submitBtn.html(originalText).prop('disabled', false);
            
            // Show success message
            showAlert(
                'Message Sent!',
                `Thank you ${formData.name}! We've received your message and will get back to you within 24 hours at ${formData.email}.`,
                'success'
            );
            
            // Reset form
            $('#contactForm')[0].reset();
            
            // Log data
            console.log('Contact form submitted:', formData);
        }, 1500);
    }
    
    // ============================================
    // BOOKING SUCCESS MODAL
    // ============================================
    function showBookingSuccess(data) {
        const modalHTML = `
            <div class="success-modal" id="successModal">
                <div class="success-overlay"></div>
                <div class="success-content">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h2>Reservation Confirmed!</h2>
                    <p>Thank you, <strong>${data.fullName}</strong>!</p>
                    <div class="booking-summary">
                        <div class="summary-item">
                            <i class="fas fa-calendar"></i>
                            <span>${formatDate(data.date)}</span>
                        </div>
                        <div class="summary-item">
                            <i class="fas fa-clock"></i>
                            <span>${formatTime(data.time)}</span>
                        </div>
                        <div class="summary-item">
                            <i class="fas fa-users"></i>
                            <span>${data.guests} ${data.guests == 1 ? 'Guest' : 'Guests'}</span>
                        </div>
                    </div>
                    <p class="confirmation-text">
                        A confirmation email has been sent to <strong>${data.email}</strong>.<br>
                        We look forward to serving you!
                    </p>
                    <button class="btn-close-modal">Close</button>
                </div>
            </div>
        `;
        
        $('body').append(modalHTML);
        $('#successModal').hide().fadeIn(400);
        
        $('.btn-close-modal, .success-overlay').on('click', function() {
            $('#successModal').fadeOut(300, function() {
                $(this).remove();
            });
        });
    }
    
    // ============================================
    // ALERT NOTIFICATION
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
        $alert.slideDown(400);
        
        $alert.find('.alert-close').on('click', function() {
            $alert.slideUp(300, function() {
                $(this).remove();
            });
        });
        
        setTimeout(() => {
            $alert.slideUp(300, function() {
                $(this).remove();
            });
        }, 5000);
    }
    
    // ============================================
    // FORMAT DATE
    // ============================================
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    
    // ============================================
    // FORMAT TIME
    // ============================================
    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
        return `${displayHour}:${minutes} ${ampm}`;
    }
    
    // ============================================
    // REAL-TIME VALIDATION
    // ============================================
    $('input, select, textarea').on('blur', function() {
        const $this = $(this);
        const $formGroup = $this.closest('.form-group');
        
        if ($this.prop('required') && $this.val().trim() === '') {
            $formGroup.addClass('error');
            $formGroup.find('.error-message').text('This field is required').show();
        } else {
            $formGroup.removeClass('error');
            $formGroup.find('.error-message').hide();
        }
    });
    
    // Clear error on input
    $('input, select, textarea').on('input change', function() {
        const $formGroup = $(this).closest('.form-group');
        if ($formGroup.hasClass('error')) {
            $formGroup.removeClass('error');
            $formGroup.find('.error-message').hide();
        }
    });
});

// ============================================
// DYNAMIC STYLES FOR MODALS & ALERTS
// ============================================
const styles = `
<style>
/* Shake Animation */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}

/* Success Modal */
.success-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
}

.success-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
}

.success-content {
    position: relative;
    max-width: 500px;
    margin: 80px auto;
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    text-align: center;
    animation: modalSlideIn 0.4s ease;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.success-icon {
    font-size: 80px;
    color: #4CAF50;
    margin-bottom: 20px;
    animation: scaleIn 0.5s ease;
}

@keyframes scaleIn {
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
}

.success-content h2 {
    font-size: 32px;
    color: #333;
    margin-bottom: 15px;
}

.success-content > p {
    font-size: 18px;
    color: #666;
    margin-bottom: 25px;
}

.booking-summary {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    margin: 25px 0;
}

.summary-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 12px 0;
    font-size: 16px;
    color: #333;
}

.summary-item i {
    font-size: 20px;
    color: #e76f51;
}

.confirmation-text {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin: 20px 0;
}

.btn-close-modal {
    padding: 15px 40px;
    background: linear-gradient(135deg, #e76f51, #f4a261);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s;
    margin-top: 10px;
}

.btn-close-modal:hover {
    transform: scale(1.05);
}

/* Custom Alert */
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
    .success-content {
        margin: 40px 20px;
        padding: 30px 20px;
    }
    
    .custom-alert {
        right: 20px;
        left: 20px;
        max-width: calc(100% - 40px);
    }
}
</style>
`;

$('head').append(styles);
