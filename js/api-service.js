/**
 * API Service for Elite Cuisine Restaurant
 * Base configuration and helper functions for API calls
 */

const API_CONFIG = {
    baseURL: 'http://localhost:8000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
};

/**
 * Generic API call function
 */
async function apiCall(endpoint, options = {}) {
    const url = `${API_CONFIG.baseURL}${endpoint}`;
    const config = {
        ...options,
        headers: {
            ...API_CONFIG.headers,
            ...options.headers
        }
    };

    try {
        const response = await fetch(url, config);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}

/**
 * Categories API
 */
const CategoriesAPI = {
    // Get all categories
    getAll: () => apiCall('/categories/'),
    
    // Get category by ID
    getById: (id) => apiCall(`/categories/${id}/`),
};

/**
 * Menu Items API
 */
const MenuItemsAPI = {
    // Get all menu items
    getAll: (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        return apiCall(`/menu-items/${queryString ? '?' + queryString : ''}`);
    },
    
    // Get menu item by ID
    getById: (id) => apiCall(`/menu-items/${id}/`),
    
    // Get featured menu items
    getFeatured: () => apiCall('/menu-items/featured/'),
    
    // Get reviews for a menu item
    getReviews: (id) => apiCall(`/menu-items/${id}/reviews/`),
    
    // Filter by category
    getByCategory: (categoryId) => apiCall(`/menu-items/?category=${categoryId}`),
};

/**
 * Events API
 */
const EventsAPI = {
    // Get all events
    getAll: () => apiCall('/events/'),
    
    // Get event by ID
    getById: (id) => apiCall(`/events/${id}/`),
    
    // Get upcoming events
    getUpcoming: () => apiCall('/events/upcoming/'),
};

/**
 * Reservations API
 */
const ReservationsAPI = {
    // Create new reservation
    create: (data) => apiCall('/reservations/', {
        method: 'POST',
        body: JSON.stringify(data)
    }),
    
    // Get reservation by ID
    getById: (id) => apiCall(`/reservations/${id}/`),
    
    // Update reservation
    update: (id, data) => apiCall(`/reservations/${id}/`, {
        method: 'PUT',
        body: JSON.stringify(data)
    }),
    
    // Delete reservation
    delete: (id) => apiCall(`/reservations/${id}/`, {
        method: 'DELETE'
    }),
};

/**
 * Contact Messages API
 */
const ContactAPI = {
    // Send contact message
    send: (data) => apiCall('/contact/', {
        method: 'POST',
        body: JSON.stringify(data)
    }),
    
    // Get message by ID
    getById: (id) => apiCall(`/contact/${id}/`),
};

/**
 * Reviews API
 */
const ReviewsAPI = {
    // Get all reviews
    getAll: (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        return apiCall(`/reviews/${queryString ? '?' + queryString : ''}`);
    },
    
    // Submit new review
    submit: (data) => apiCall('/reviews/', {
        method: 'POST',
        body: JSON.stringify(data)
    }),
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CategoriesAPI,
        MenuItemsAPI,
        EventsAPI,
        ReservationsAPI,
        ContactAPI,
        ReviewsAPI
    };
}

// Usage Examples:

// 1. Get all menu items
/*
MenuItemsAPI.getAll().then(items => {
    console.log('Menu Items:', items);
    // Display in your UI
});
*/

// 2. Get featured items
/*
MenuItemsAPI.getFeatured().then(items => {
    console.log('Featured Items:', items);
    // Display featured items
});
*/

// 3. Create a reservation
/*
const reservationData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '0123456789',
    date: '2026-01-25',
    time: '19:00:00',
    guests: 4,
    special_requests: 'Window seat please'
};

ReservationsAPI.create(reservationData)
    .then(response => {
        console.log('Reservation created:', response);
        alert('Reservation successful!');
    })
    .catch(error => {
        console.error('Reservation failed:', error);
        alert('Failed to create reservation');
    });
*/

// 4. Send contact message
/*
const contactData = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    subject: 'Inquiry about menu',
    message: 'Do you have vegetarian options?'
};

ContactAPI.send(contactData)
    .then(response => {
        console.log('Message sent:', response);
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('Failed to send message:', error);
        alert('Failed to send message');
    });
*/

// 5. Get menu items by category
/*
MenuItemsAPI.getByCategory(1).then(items => {
    console.log('Items in category 1:', items);
});
*/

// 6. Get upcoming events
/*
EventsAPI.getUpcoming().then(events => {
    console.log('Upcoming events:', events);
    // Display in events section
});
*/

// 7. Submit a review
/*
const reviewData = {
    menu_item: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    rating: 5,
    comment: 'Absolutely delicious!'
};

ReviewsAPI.submit(reviewData)
    .then(response => {
        console.log('Review submitted:', response);
        alert('Thank you for your review!');
    })
    .catch(error => {
        console.error('Failed to submit review:', error);
    });
*/
