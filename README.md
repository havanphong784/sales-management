# Sales Management 📦

Website quản lý bán hàng được xây dựng với **Tailwind CSS**, **HTML**, **JavaScript**.

## ⚙️ Cấu hình

### Cài đặt dependencies

```bash
npm install
```

### Phát triển cục bộ

```bash
npm run dev
```

Lệnh này sẽ theo dõi thay đổi trong `src/css/input.css` và cập nhật `dist/output.css`.

### Build cho production

```bash
npm run build
```

Lệnh này sẽ tạo file CSS được minify trong `docs/output.css`.

## 🚀 Deploy lên GitHub Pages

### Bước 1: Push code lên GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Bước 2: Cấu hình GitHub Pages

1. Vào **Settings** > **Pages**
2. Chọn **Branch**: `main`
3. Chọn **Folder**: `/docs`
4. Click **Save**

### Bước 3: Tự động deployment

- Mỗi khi push lên `main`, GitHub Actions sẽ tự động:
  1. Build Tailwind CSS
  2. Deploy thư mục `docs/` lên GitHub Pages

## 📁 Cấu trúc thư mục

```
src/
├── index.html          # Trang chính
├── css/
│   └── input.css       # Tailwind CSS input
├── js/
│   ├── app.js
│   ├── core/
│   ├── pages/
│   └── services/
├── components/
└── pages/

docs/                    # Output được deploy lên GitHub Pages
├── index.html
├── output.css          # CSS được build từ Tailwind
└── ...
```

## 🔗 Liên kết hữu ích

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://github.com/features/actions)

## 📝 License

MIT
