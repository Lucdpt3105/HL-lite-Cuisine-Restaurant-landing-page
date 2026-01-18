from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet)
router.register(r'menu-items', views.MenuItemViewSet)
router.register(r'events', views.EventViewSet)
router.register(r'reservations', views.ReservationViewSet)
router.register(r'contact', views.ContactMessageViewSet)
router.register(r'reviews', views.ReviewViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
