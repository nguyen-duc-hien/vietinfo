function countUp(element, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = range / (duration / 50); // Tăng số một cách mượt mà dựa trên thời gian
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end; // Đảm bảo dừng đúng số
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString('en-US'); // Định dạng số có dấu phẩy
    }, 50); // Cập nhật sau mỗi 50ms
}

document.addEventListener('DOMContentLoaded', () => {
    const countElements = document.querySelectorAll('.count-up');
    countElements.forEach(element => {
        const targetNumber = parseInt(element.textContent.replace(/,/g, ''), 10);
        countUp(element, 0, targetNumber, 2000); // 2000ms = 2 giây
    });
});
