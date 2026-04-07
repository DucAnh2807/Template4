// Chờ cho toàn bộ HTML tải xong
    document.addEventListener('DOMContentLoaded', function () {
        // Tìm nút bấm và menu thông qua ID
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        // Lắng nghe sự kiện click vào nút
        mobileMenuBtn.addEventListener('click', function () {
            // Tự động thêm/bớt class 'hidden' mỗi lần bấm
            mobileMenu.classList.toggle('hidden');
        });
    });
