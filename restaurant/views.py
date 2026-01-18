from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, MenuItem, Event, Reservation, ContactMessage, Review
from .serializers import (
    CategorySerializer, MenuItemSerializer, EventSerializer,
    ReservationSerializer, ContactMessageSerializer, ReviewSerializer
)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for categories
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'created_at']
    ordering = ['name']


class MenuItemViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for menu items
    """
    queryset = MenuItem.objects.filter(is_available=True)
    serializer_class = MenuItemSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'is_featured']
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'price', 'created_at']
    ordering = ['-created_at']
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured menu items"""
        featured_items = self.queryset.filter(is_featured=True)
        serializer = self.get_serializer(featured_items, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def reviews(self, request, pk=None):
        """Get reviews for a specific menu item"""
        menu_item = self.get_object()
        reviews = menu_item.reviews.filter(is_approved=True)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for events
    """
    queryset = Event.objects.filter(is_active=True)
    serializer_class = EventSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'location']
    ordering_fields = ['date', 'created_at']
    ordering = ['date']
    
    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        """Get upcoming events"""
        from django.utils import timezone
        upcoming_events = self.queryset.filter(date__gte=timezone.now())
        serializer = self.get_serializer(upcoming_events, many=True)
        return Response(serializer.data)


class ReservationViewSet(viewsets.ModelViewSet):
    """
    API endpoint for reservations
    """
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['status', 'date']
    ordering_fields = ['date', 'time', 'created_at']
    ordering = ['-created_at']
    
    def create(self, request, *args, **kwargs):
        """Create a new reservation"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                'message': 'Reservation created successfully',
                'reservation': serializer.data
            },
            status=status.HTTP_201_CREATED
        )


class ContactMessageViewSet(viewsets.ModelViewSet):
    """
    API endpoint for contact messages
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['created_at', 'is_read']
    ordering = ['-created_at']
    
    def create(self, request, *args, **kwargs):
        """Submit a contact message"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                'message': 'Your message has been sent successfully',
                'contact': serializer.data
            },
            status=status.HTTP_201_CREATED
        )


class ReviewViewSet(viewsets.ModelViewSet):
    """
    API endpoint for reviews
    """
    queryset = Review.objects.filter(is_approved=True)
    serializer_class = ReviewSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['menu_item', 'rating']
    ordering_fields = ['created_at', 'rating']
    ordering = ['-created_at']
    
    def create(self, request, *args, **kwargs):
        """Submit a review"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                'message': 'Review submitted successfully and pending approval',
                'review': serializer.data
            },
            status=status.HTTP_201_CREATED
        )
