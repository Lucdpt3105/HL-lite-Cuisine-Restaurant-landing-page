# Django Backend Setup - Élite Cuisine Restaurant

## Project Structure

```
FinalTerm/
├── backend/                # Django project settings
│   ├── settings.py        # Main configuration
│   ├── urls.py           # URL routing
│   └── wsgi.py           # WSGI configuration
├── restaurant/           # Main restaurant app
│   ├── models.py        # Database models
│   ├── views.py         # API views
│   ├── serializers.py   # REST API serializers
│   ├── urls.py          # App URL routing
│   └── admin.py         # Admin panel config
├── manage.py            # Django management script
├── db.sqlite3          # SQLite database
├── css/                # Frontend CSS
├── js/                 # Frontend JavaScript
├── images/             # Frontend images
├── pages/              # Frontend HTML pages
└── layouts/            # Frontend layouts
```

## Database Models

### Category
- Quản lý danh mục món ăn (Appetizers, Main Course, Desserts, etc.)

### MenuItem
- Quản lý món ăn trong menu
- Có category, giá, hình ảnh, availability, featured status

### Event
- Quản lý sự kiện của nhà hàng
- Có ngày giờ, địa điểm, số người tham gia

### Reservation
- Quản lý đặt bàn
- Có status: pending, confirmed, cancelled, completed

### ContactMessage
- Quản lý tin nhắn liên hệ từ khách hàng

### Review
- Quản lý đánh giá món ăn
- Có rating (1-5 sao) và approval status

## API Endpoints

Base URL: `http://localhost:8000/api/`

### Categories
- `GET /api/categories/` - Lấy danh sách categories
- `GET /api/categories/{id}/` - Chi tiết category

### Menu Items
- `GET /api/menu-items/` - Lấy danh sách món ăn
- `GET /api/menu-items/{id}/` - Chi tiết món ăn
- `GET /api/menu-items/featured/` - Món ăn nổi bật
- `GET /api/menu-items/{id}/reviews/` - Reviews của món ăn

### Events
- `GET /api/events/` - Lấy danh sách sự kiện
- `GET /api/events/{id}/` - Chi tiết sự kiện
- `GET /api/events/upcoming/` - Sự kiện sắp tới

### Reservations
- `GET /api/reservations/` - Lấy danh sách đặt bàn
- `POST /api/reservations/` - Tạo đặt bàn mới
- `GET /api/reservations/{id}/` - Chi tiết đặt bàn
- `PUT /api/reservations/{id}/` - Cập nhật đặt bàn
- `DELETE /api/reservations/{id}/` - Xóa đặt bàn

### Contact Messages
- `GET /api/contact/` - Lấy danh sách tin nhắn
- `POST /api/contact/` - Gửi tin nhắn mới
- `GET /api/contact/{id}/` - Chi tiết tin nhắn

### Reviews
- `GET /api/reviews/` - Lấy danh sách reviews
- `POST /api/reviews/` - Gửi review mới
- `GET /api/reviews/{id}/` - Chi tiết review

## Setup Instructions

### 1. Activate Virtual Environment
```bash
# Windows
.venv\Scripts\activate

# Linux/Mac
source .venv/bin/activate
```

### 2. Install Dependencies (Already Done)
```bash
pip install django djangorestframework django-cors-headers django-filter pillow
```

### 3. Create Superuser
```bash
python manage.py createsuperuser
```
Nhập username, email, và password để tạo admin account.

### 4. Run Development Server
```bash
python manage.py runserver
```
Server sẽ chạy tại: `http://localhost:8000/`

### 5. Access Admin Panel
Truy cập: `http://localhost:8000/admin/`
Login bằng superuser account vừa tạo.

### 6. Add Sample Data
Vào admin panel và thêm:
- Categories (VD: Appetizers, Main Course, Desserts, Beverages)
- Menu Items
- Events
- Etc.

## API Usage Examples

### Get All Menu Items
```javascript
fetch('http://localhost:8000/api/menu-items/')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Create Reservation
```javascript
fetch('http://localhost:8000/api/reservations/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '0123456789',
    date: '2026-01-25',
    time: '19:00:00',
    guests: 4,
    special_requests: 'Window seat please'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

### Submit Contact Message
```javascript
fetch('http://localhost:8000/api/contact/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Jane Smith',
    email: 'jane@example.com',
    subject: 'Inquiry about menu',
    message: 'Do you have vegetarian options?'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## Configuration

### CORS Settings
CORS đã được config để cho phép tất cả origins (development mode).
Production cần update `CORS_ALLOWED_ORIGINS` trong `backend/settings.py`.

### Static Files
- CSS files: `/css/`
- JS files: `/js/`
- Images: `/images/`
- Uploaded media: `/media/`

### Database
Project dùng SQLite (file `db.sqlite3`).
Production có thể đổi sang PostgreSQL/MySQL trong `settings.py`.

## Next Steps

1. **Create superuser** để access admin panel
2. **Add sample data** qua admin panel
3. **Update frontend** để call API endpoints
4. **Test API endpoints** bằng Postman hoặc browser
5. **Customize models** nếu cần thêm fields

## API Documentation
Khi server đang chạy, truy cập:
- API Root: `http://localhost:8000/api/`
- Admin Panel: `http://localhost:8000/admin/`

## Useful Commands

```bash
# Create migrations after model changes
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run development server
python manage.py runserver

# Run on specific port
python manage.py runserver 8080

# Collect static files
python manage.py collectstatic

# Shell
python manage.py shell
```

## Troubleshooting

### Port already in use
```bash
python manage.py runserver 8080
```

### Reset database
```bash
del db.sqlite3
python manage.py migrate
python manage.py createsuperuser
```

### Clear migrations
```bash
del restaurant\migrations\0001_initial.py
python manage.py makemigrations
python manage.py migrate
```
