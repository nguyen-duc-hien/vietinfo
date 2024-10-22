//  script header fixed top active input 
//  header scroll js
window.addEventListener('scroll', function () {
    // Lấy các phần tử cần xử lý
    const input = document.querySelector('.input-trans');
    const select = document.querySelector('.select-des');
    const searchField = document.querySelector('.search-field');
    const button = document.querySelector('.submit-button');

    // Hàm thêm class 'focus'
    function addFocusClass() {
        select.classList.add('focus');
        searchField.classList.add('focus');
        button.classList.add('focus');
    }

    // Hàm xóa class 'focus'
    function removeFocusClass() {
        select.classList.remove('focus');
        searchField.classList.remove('focus');
        button.classList.remove('focus');
    }

    // Khi input được focus hoặc hover
    input.addEventListener('focus', addFocusClass);
    // input.addEventListener('mouseover', addFocusClass);

    // Khi input bị mất focus hoặc không còn hover
    input.addEventListener('blur', removeFocusClass);
    // input.addEventListener('mouseout', removeFocusClass);




    const header = document.querySelector('.header-scroll');
    if (window.scrollY > 125) {
        header.classList.add('active');
    } else if (window.scrollY <= 125) {
        header.classList.remove('active');
    }
});