// Kiểm tra xem file JavaScript đã kết nối thành công chưa
document.addEventListener("DOMContentLoaded", function() {
    console.log("Chúc mừng! Cấu trúc source code ban đầu đã được tải thành công.");
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert('Cảm ơn ' + name + ', nhóm 03 đã nhận được tin nhắn của bạn!');
    this.reset();
});