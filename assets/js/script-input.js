const input = document.querySelector('.field-input');
const searchField = document.querySelector('.search-input-field');
const searchIcon = document.querySelector('.search-icon');
const clearIcon = document.querySelector('.clear-icon');

// Khi input được focus, thêm class 'focus' để hiện viền
input.addEventListener('focus', function () {
    searchField.classList.add('focus');
    searchIcon.classList.add('focus');
});

// Khi input bị mất focus, nếu có nội dung thì giữ nút clear và xóa viền
input.addEventListener('blur', function () {
    if (input.value === '') {
        searchField.classList.remove('focus');
        searchIcon.classList.remove('focus');
        clearIcon.classList.remove('active');
    } else {
        searchField.classList.remove('focus');
        searchIcon.classList.remove('focus');
    }
});

// Khi người dùng nhập nội dung, hiện nút clear
input.addEventListener('input', function () {
    if (input.value !== '') {
        clearIcon.classList.add('active');
    } else {
        clearIcon.classList.remove('active');
    }
});

// Khi người dùng nhấn vào nút clear, xóa nội dung input và ẩn nút clear
clearIcon.addEventListener('click', function () {
    input.value = '';
    clearIcon.classList.remove('active');
    searchField.classList.remove('focus');
    searchIcon.classList.remove('focus');
});
