document.addEventListener('DOMContentLoaded', function () {
    // Tìm tất cả các dropdown trong trang
    const dropdowns = document.querySelectorAll('.multi-dropdown');

    dropdowns.forEach((dropdown) => {
        const label = dropdown.querySelector('.multi-dropdown-label');
        const labelInput = dropdown.querySelector('.multi-dropdown-label.input-field');
        const content = dropdown.querySelector('.multi-dropdown-content');

        // Xử lý khi nhấp vào nhãn của dropdown
        label.addEventListener('click', function (event) {
            const isVisible = content.style.display === 'flex';

            // Đóng tất cả các dropdown khác
            closeAllDropdowns();

            // Chuyển trạng thái hiển thị của dropdown hiện tại
            content.style.display = isVisible ? 'none' : 'flex';

            // Thêm class active nếu dropdown được mở
            if (!isVisible) {
                labelInput.classList.add('active');
            } else {
                labelInput.classList.remove('active');
            }

            // Ngăn chặn sự kiện click lan ra ngoài
            event.stopPropagation();
        });
    });

    // Đóng tất cả dropdown
    function closeAllDropdowns() {
        dropdowns.forEach((dropdown) => {
            const content = dropdown.querySelector('.multi-dropdown-content');
            const labelInput = dropdown.querySelector('.multi-dropdown-label.input-field');
            content.style.display = 'none';
            if (labelInput) {
                labelInput.classList.remove('active');
            }
        });
    }

    // Đóng dropdown nếu nhấp ra bên ngoài
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.multi-dropdown')) {
            closeAllDropdowns();
        }
    });
});
