window.addEventListener('load', function() {
    // Sau 1.2 giây hiển thị nút "Nhấn để xem thư"
    setTimeout(function() {
        document.getElementById('revealBtn').classList.remove('hidden');
    }, 1200);
});

document.getElementById('revealBtn').addEventListener('click', function() {
    // Khi nhấn nút "Nhấn để xem thư", ẩn nút và hiển thị nội dung thư
    this.classList.add('hidden');
    document.getElementById('message').classList.remove('hidden');
});

// Lắng nghe sự kiện click trên các nút quà tặng
document.querySelectorAll('.gift-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Lấy đường dẫn ảnh từ thuộc tính data-image của nút quà tặng
        const imageSrc = this.getAttribute('data-image');
        // Gán đường dẫn ảnh vào phần tử img trong modal
        document.getElementById('modalImage').src = imageSrc;
        // Hiển thị modal
        document.getElementById('giftModal').classList.remove('hidden');
    });
});

// Đóng modal khi nhấn vào nút đóng
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('giftModal').classList.add('hidden');
});

// (Tùy chọn) Đóng modal khi nhấn vào vùng ngoài modal-content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('giftModal');
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});

// Khi trang tải xong, tạo hiệu ứng ảnh rơi như tuyết
window.addEventListener('load', function() {
    // Số lượng ảnh rơi (có thể thay đổi theo ý bạn)
    const numImages = 50;

    for (let i = 0; i < numImages; i++) {
        const img = document.createElement('img');
        // Đường dẫn ảnh của bạn (thay 'my-image.png' bằng ảnh mong muốn)
        img.src = 'traitim.jpg';
        img.classList.add('falling-image');

        // Đặt vị trí ngẫu nhiên theo chiều ngang
        img.style.left = Math.random() * window.innerWidth + 'px';
        // Thời gian animation ngẫu nhiên từ 5s đến 10s
        img.style.animationDuration = (5 + Math.random() * 5) + 's';
        // Đặt độ trễ animation ngẫu nhiên để tạo sự đa dạng
        img.style.animationDelay = (Math.random() * 5) + 's';

        // Thêm ảnh vào body (hoặc bạn có thể thêm vào một container riêng nếu cần)
        document.body.appendChild(img);
    }
});