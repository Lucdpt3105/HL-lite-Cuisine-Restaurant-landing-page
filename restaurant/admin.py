from django.contrib import admin
from .models import Category, MenuItem, Event, Reservation, ContactMessage, Review

# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_at']
    search_fields = ['name']


@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price', 'is_available', 'is_featured', 'created_at']
    list_filter = ['category', 'is_available', 'is_featured']
    search_fields = ['name', 'description']
    list_editable = ['is_available', 'is_featured']


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'location', 'max_participants', 'is_active', 'created_at']
    list_filter = ['is_active', 'date']
    search_fields = ['title', 'description', 'location']
    list_editable = ['is_active']


@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'date', 'time', 'guests', 'status', 'created_at']
    list_filter = ['status', 'date']
    search_fields = ['name', 'email', 'phone']
    list_editable = ['status']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'is_read', 'created_at']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'email', 'subject', 'message']
    list_editable = ['is_read']


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['name', 'menu_item', 'rating', 'is_approved', 'created_at']
    list_filter = ['is_approved', 'rating', 'created_at']
    search_fields = ['name', 'email', 'comment']
    list_editable = ['is_approved']
