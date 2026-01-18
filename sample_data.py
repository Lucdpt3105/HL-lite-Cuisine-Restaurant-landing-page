"""
Sample data script for Elite Cuisine Restaurant
Run this after creating superuser to populate database with sample data

Usage:
    python manage.py shell < sample_data.py
    
Or run in Django shell:
    python manage.py shell
    >>> exec(open('sample_data.py').read())
"""

from restaurant.models import Category, MenuItem, Event, Reservation, ContactMessage, Review
from django.utils import timezone
from datetime import datetime, timedelta
import random

print("🌟 Creating sample data for Elite Cuisine Restaurant...")

# Clear existing data (optional)
print("\n📝 Clearing existing data...")
Category.objects.all().delete()
MenuItem.objects.all().delete()
Event.objects.all().delete()
Review.objects.all().delete()

# Create Categories
print("\n🏷️ Creating categories...")
categories_data = [
    {"name": "Appetizers", "description": "Start your meal with our delicious appetizers"},
    {"name": "Main Course", "description": "Our signature main dishes"},
    {"name": "Desserts", "description": "Sweet endings to your perfect meal"},
    {"name": "Beverages", "description": "Refreshing drinks and cocktails"},
    {"name": "Salads", "description": "Fresh and healthy salad options"},
    {"name": "Soups", "description": "Warm and comforting soups"},
]

categories = {}
for cat_data in categories_data:
    cat = Category.objects.create(**cat_data)
    categories[cat.name] = cat
    print(f"  ✓ Created: {cat.name}")

# Create Menu Items
print("\n🍽️ Creating menu items...")
menu_items_data = [
    # Appetizers
    {"name": "Bruschetta", "description": "Grilled bread topped with fresh tomatoes, basil, and olive oil", "price": 8.99, "category": categories["Appetizers"], "is_featured": True},
    {"name": "Calamari Fritti", "description": "Crispy fried squid rings served with marinara sauce", "price": 12.99, "category": categories["Appetizers"]},
    {"name": "Caprese Salad", "description": "Fresh mozzarella, tomatoes, and basil with balsamic glaze", "price": 10.99, "category": categories["Appetizers"]},
    {"name": "Garlic Shrimp", "description": "Succulent shrimp sautéed in garlic butter", "price": 14.99, "category": categories["Appetizers"]},
    
    # Main Course
    {"name": "Filet Mignon", "description": "8oz premium beef tenderloin with herb butter", "price": 39.99, "category": categories["Main Course"], "is_featured": True},
    {"name": "Grilled Salmon", "description": "Fresh Atlantic salmon with lemon butter sauce", "price": 28.99, "category": categories["Main Course"], "is_featured": True},
    {"name": "Chicken Parmesan", "description": "Breaded chicken breast with marinara and mozzarella", "price": 22.99, "category": categories["Main Course"]},
    {"name": "Lobster Linguine", "description": "Fresh lobster meat tossed with linguine in white wine sauce", "price": 34.99, "category": categories["Main Course"]},
    {"name": "Vegetarian Risotto", "description": "Creamy risotto with seasonal vegetables", "price": 19.99, "category": categories["Main Course"]},
    {"name": "Lamb Chops", "description": "Herb-crusted lamb chops with mint sauce", "price": 36.99, "category": categories["Main Course"]},
    
    # Salads
    {"name": "Caesar Salad", "description": "Crisp romaine lettuce with Caesar dressing and croutons", "price": 9.99, "category": categories["Salads"]},
    {"name": "Greek Salad", "description": "Mixed greens with feta cheese, olives, and tomatoes", "price": 11.99, "category": categories["Salads"]},
    {"name": "Spinach Salad", "description": "Baby spinach with bacon, eggs, and warm vinaigrette", "price": 10.99, "category": categories["Salads"]},
    
    # Soups
    {"name": "French Onion Soup", "description": "Classic onion soup with melted Gruyère cheese", "price": 8.99, "category": categories["Soups"]},
    {"name": "Lobster Bisque", "description": "Rich and creamy lobster soup", "price": 12.99, "category": categories["Soups"]},
    {"name": "Minestrone", "description": "Italian vegetable soup with pasta", "price": 7.99, "category": categories["Soups"]},
    
    # Desserts
    {"name": "Tiramisu", "description": "Classic Italian dessert with coffee and mascarpone", "price": 8.99, "category": categories["Desserts"], "is_featured": True},
    {"name": "Chocolate Lava Cake", "description": "Warm chocolate cake with molten center", "price": 9.99, "category": categories["Desserts"]},
    {"name": "Crème Brûlée", "description": "Classic French custard with caramelized sugar", "price": 8.99, "category": categories["Desserts"]},
    {"name": "Panna Cotta", "description": "Italian cream dessert with berry compote", "price": 7.99, "category": categories["Desserts"]},
    {"name": "Cheesecake", "description": "New York style cheesecake with berry sauce", "price": 9.99, "category": categories["Desserts"]},
    
    # Beverages
    {"name": "House Wine (Glass)", "description": "Selection of red or white wine", "price": 8.99, "category": categories["Beverages"]},
    {"name": "Craft Beer", "description": "Local craft beer selection", "price": 6.99, "category": categories["Beverages"]},
    {"name": "Fresh Lemonade", "description": "Homemade lemonade with mint", "price": 4.99, "category": categories["Beverages"]},
    {"name": "Italian Soda", "description": "Sparkling soda with flavored syrup", "price": 5.99, "category": categories["Beverages"]},
    {"name": "Espresso", "description": "Strong Italian coffee", "price": 3.99, "category": categories["Beverages"]},
]

menu_items = []
for item_data in menu_items_data:
    item = MenuItem.objects.create(**item_data)
    menu_items.append(item)
    featured = " ⭐ FEATURED" if item.is_featured else ""
    print(f"  ✓ Created: {item.name} - ${item.price}{featured}")

# Create Events
print("\n🎉 Creating events...")
events_data = [
    {
        "title": "Wine Tasting Evening",
        "description": "Join us for an exclusive wine tasting featuring premium wines from around the world. Our sommelier will guide you through each selection.",
        "date": timezone.now() + timedelta(days=15),
        "location": "Main Dining Hall",
        "max_participants": 30,
    },
    {
        "title": "Chef's Table Experience",
        "description": "An intimate dining experience where you'll watch our chef prepare a multi-course meal right before your eyes.",
        "date": timezone.now() + timedelta(days=21),
        "location": "Private Dining Room",
        "max_participants": 12,
    },
    {
        "title": "Italian Cuisine Night",
        "description": "Experience authentic Italian flavors with our special Italian-themed dinner menu.",
        "date": timezone.now() + timedelta(days=30),
        "location": "Main Dining Hall",
        "max_participants": 50,
    },
    {
        "title": "Valentine's Day Special",
        "description": "Celebrate love with our romantic Valentine's dinner featuring a special 4-course menu.",
        "date": timezone.now() + timedelta(days=27),
        "location": "Main Dining Hall",
        "max_participants": 40,
    },
]

for event_data in events_data:
    event = Event.objects.create(**event_data)
    print(f"  ✓ Created: {event.title} - {event.date.strftime('%B %d, %Y')}")

# Create Sample Reviews
print("\n⭐ Creating sample reviews...")
reviews_data = [
    {"menu_item": menu_items[0], "name": "Sarah Johnson", "email": "sarah@example.com", "rating": 5, "comment": "Absolutely delicious! The best bruschetta I've ever had.", "is_approved": True},
    {"menu_item": menu_items[4], "name": "Michael Chen", "email": "michael@example.com", "rating": 5, "comment": "The filet mignon was cooked to perfection. Highly recommend!", "is_approved": True},
    {"menu_item": menu_items[5], "name": "Emily Rodriguez", "email": "emily@example.com", "rating": 5, "comment": "Fresh salmon, perfectly seasoned. Will definitely order again!", "is_approved": True},
    {"menu_item": menu_items[16], "name": "David Kim", "email": "david@example.com", "rating": 5, "comment": "Best tiramisu outside of Italy!", "is_approved": True},
    {"menu_item": menu_items[7], "name": "Jennifer Lee", "email": "jennifer@example.com", "rating": 4, "comment": "Great lobster linguine, portion size was generous.", "is_approved": True},
]

for review_data in reviews_data:
    review = Review.objects.create(**review_data)
    print(f"  ✓ Created: {review.name} - {review.menu_item.name} ({review.rating}⭐)")

print("\n" + "="*60)
print("✅ Sample data created successfully!")
print("="*60)
print(f"\n📊 Summary:")
print(f"  • Categories: {Category.objects.count()}")
print(f"  • Menu Items: {MenuItem.objects.count()}")
print(f"  • Featured Items: {MenuItem.objects.filter(is_featured=True).count()}")
print(f"  • Events: {Event.objects.count()}")
print(f"  • Reviews: {Review.objects.count()}")
print("\n🎉 You can now view the data in the admin panel!")
print("   Visit: http://localhost:8000/admin/")
print("\n💡 Test the API:")
print("   http://localhost:8000/api/menu-items/")
print("   http://localhost:8000/api/menu-items/featured/")
print("   http://localhost:8000/api/events/")
print("   http://localhost:8000/api/categories/")
