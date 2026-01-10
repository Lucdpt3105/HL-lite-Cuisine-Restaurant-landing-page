# Élite Cuisine Restaurant - Multi-Page Website

## 📁 Cấu Trúc Dự Án

Dự án đã được tái cấu trúc thành **multi-page website** với các trang riêng biệt:

```
FinalTerm/
├── index.html                    # 🏠 Home page (trang chủ)
├── pages/
│   ├── about.html               # ℹ️ About page (giới thiệu)
│   ├── menu.html                # 🍽️ Menu page (thực đơn)
│   ├── events.html              # 🎉 Events page (sự kiện)
│   └── contact.html             # 📞 Contact page (liên hệ)
├── layouts/
│   ├── header.html              # 🔝 Shared navigation bar
│   └── footer.html              # 🔽 Shared footer
├── css/
│   ├── main-modular.css         # 🎨 Main CSS file (shared styles)
│   └── pages/
│       ├── home.css             # Home page specific styles
│       ├── about.css            # About page specific styles
│       ├── menu.css             # Menu page specific styles
│       ├── events.css           # Events page specific styles
│       └── contact.css          # Contact page specific styles
├── js/
│   ├── main.js                  # ⚙️ Main JavaScript
│   └── utils/
│       └── layout-loader.js     # 🔄 Load header/footer dynamically
└── images/                       # 🖼️ All images

```

## 🎯 Các Trang Chính

### 1. **Home Page** (`index.html`)
- Hero slideshow với 3 slides
- Featured dishes section (món nổi bật)
- Welcome section (giới thiệu ngắn)
- Call-to-action

### 2. **About Page** (`pages/about.html`)
- Câu chuyện nhà hàng
- Giá trị cốt lõi (Core Values)
- Đội ngũ đầu bếp (Our Master Chefs)

### 3. **Menu Page** (`pages/menu.html`)
- Menu filter (lọc theo danh mục)
- Appetizers (món khai vị)
- Main Courses (món chính)
- Desserts (tráng miệng)
- Beverages (đồ uống)

### 4. **Events Page** (`pages/events.html`)
- Upcoming events carousel
- Private dining options
- Event gallery

### 5. **Contact Page** (`pages/contact.html`)
- Contact information
- Reservation form (đặt bàn)
- Contact form (liên hệ)
- Google Maps integration

## 🎨 Theme

**Orange Light Theme:**
- Primary Color: `#FF6B35` (Vibrant Orange)
- Secondary Color: `#FFB347` (Light Orange)
- Background: `#FAFAFA` (Light Gray)
- Text: `#2C2C2C` (Dark), `#4A4A4A` (Medium)

## ✨ Tính Năng

### 1. Shared Header/Footer
- Navbar được load tự động từ `layouts/header.html`
- Footer được load từ `layouts/footer.html`
- Welcome badge "Xin chào, Guest! 👋" hiển thị trên tất cả các trang

### 2. Navigation
- Fixed navbar (cuộn xuống vẫn hiển thị)
- Active link highlighting (highlight trang hiện tại)
- Mobile responsive menu

### 3. Responsive Design
- Mobile-first approach
- Tablet và desktop optimized
- Touch-friendly navigation

### 4. Interactive Features
- Hero slideshow với auto-advance
- Menu filter by category
- Events carousel
- Form validation
- Smooth scrolling

## 🔧 Cách Sử Dụng

### Chạy Website
1. Mở `index.html` trong trình duyệt
2. Hoặc sử dụng Live Server trong VS Code

### Sửa Đổi Nội Dung

**Header/Footer:**
- Edit `layouts/header.html` - thay đổi áp dụng cho TẤT CẢ trang
- Edit `layouts/footer.html` - thay đổi áp dụng cho TẤT CẢ trang

**Trang Riêng Lẻ:**
- Edit `index.html` - chỉ thay đổi home page
- Edit `pages/about.html` - chỉ thay đổi about page
- Tương tự cho các trang khác

**Styling:**
- Edit `css/main-modular.css` - styles chung cho tất cả trang
- Edit `css/pages/home.css` - styles riêng cho home page
- Edit `css/pages/about.css` - styles riêng cho about page
- Tương tự cho các trang khác

## 📝 File Backups

Các file cũ đã được backup:
- `index-backup-original.html` - File index.html gốc (2006 lines)
- `index-new-clean.html` - File index.html mới (clean version)

## 🌐 URL Structure

```
/                           → Home page
/pages/about.html          → About page
/pages/menu.html           → Menu page
/pages/events.html         → Events page
/pages/contact.html        → Contact page
```

## 🎓 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations
- **JavaScript** - Vanilla JS + jQuery
- **Responsive Design** - Mobile-first approach
- **Dynamic Loading** - Header/footer loaded via AJAX

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🚀 Performance

- Modular CSS reduces redundancy
- Shared layouts minimize code duplication
- Optimized images for fast loading
- Minimal JavaScript dependencies

## 📖 Documentation

- `COLOR-THEME.md` - Chi tiết về màu sắc
- `README.md` - File này

## 👨‍💻 Phát Triển Tiếp

Để thêm trang mới:
1. Tạo file HTML trong `pages/`
2. Tạo CSS riêng trong `css/pages/`
3. Include header/footer placeholders
4. Load layout-loader.js
5. Thêm link vào navigation trong `layouts/header.html`

---

**Developed with ❤️ for Web Programming Final Term 2025-2026**
