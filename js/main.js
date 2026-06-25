// Đảm bảo toàn bộ HTML đã được tải xong trước khi thực thi JS
document.addEventListener("DOMContentLoaded", function() {
    
    // In thông báo kiểm tra hệ thống hoạt động ổn định
    console.log("Hệ thống: Kết nối thành công với file main.js!");

    // Lấy thẻ Form liên hệ thông qua ID
    const contactForm = document.getElementById("contactForm");

    // Nếu form tồn tại trên trang thì xử lý sự kiện submit
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Ngăn chặn trình duyệt reload lại trang theo mặc định
            event.preventDefault();

            // Lấy giá trị người dùng nhập vào các ô input
            const userName = document.getElementById("name").value;
            const userEmail = document.getElementById("email").value;

            // Hiển thị hộp thoại thông báo cá nhân hóa đẹp mắt
            alert(`Cảm ơn ${userName} (${userEmail}) đã gửi liên hệ! Nhóm 03 sẽ phản hồi bạn trong thời gian sớm nhất.`);

            // Xóa sạch dữ liệu đã nhập trong form sau khi gửi thành công
            contactForm.reset();
        });
    }
});