// Khi tài liệu được tải xong, hàm bên trong sẽ được thực thi
document.addEventListener('DOMContentLoaded', () => 
{
        const display = document.querySelector('#display'); // Lấy phần tử hiển thị kết quả của máy tính
        const buttons = document.querySelectorAll('button'); // Lấy tất cả các nút bấm của máy tính
    
        // Duyệt qua từng nút bấm và gán sự kiện onclick
        buttons.forEach((item) => 
        {
            item.onclick = () => 
            {
                // Nếu nút có id là 'clear', xóa hết nội dung hiển thị
                if (item.id === 'clear') 
                {
                    display.innerText = '';
                } 
                // Nếu nút có id là 'backspace', xóa ký tự cuối cùng của chuỗi hiển thị
                else if (item.id === 'backspace') 
                {
                    let string = display.innerText.toString();
                    display.innerText = string.substring(0, string.length - 1);
                } 
                // Nếu có nội dung để tính và nút có id là 'equal', thực hiện tính toán
                else if (display.innerText !== '' && item.id === 'equal') 
                {
                    try 
                    {
                        // Thực hiện tính toán và hiển thị kết quả
                        display.innerText = eval(display.innerText);
                    } 
                    catch (e) 
                    {
                        // Nếu có lỗi, hiển thị thông báo 'Error' và xóa sau 2 giây
                        display.innerText = 'Error';
                        setTimeout(() => (display.innerText = ''), 2000);
                    }
                } 
                // Nếu không có nội dung để tính và nút có id là 'equal', hiển thị thông báo 'Empty!'
                else if (display.innerText === '' && item.id === 'equal') 
                {
                    display.innerText = 'Empty!';
                    setTimeout(() => (display.innerText = ''), 2000);
                
                } 
                // Nếu không phải các trường hợp trên, thêm giá trị của nút vào chuỗi hiển thị
                else 
                {
                    display.innerText += item.getAttribute('data-value') || item.id;
                }
            };
        });
    
        const themeToggleBtn = document.querySelector('.theme-toggler'); // Lấy nút bấm để chuyển đổi chủ đề màu sắc
        const calculator = document.querySelector('.calculator'); // Lấy phần tử máy tính để thay đổi chủ đề màu sắc
        const toggleIcon = document.querySelector('.toggler-icon'); // Lấy icon chuyển đổi chủ đề màu sắc
        let isDark = true; // Biến kiểm tra chủ đề màu sắc hiện tại là tối hay không
    
        // Khi nút themeToggleBtn được nhấp, hàm sau sẽ được thực thi
        themeToggleBtn.onclick = () => 
        {
            // Chuyển đổi class 'dark' của phần tử calculator, bật/tắt chế độ tối
            calculator.classList.toggle('dark');
            // Đảo giá trị của biến isDark; nếu đang là false thì thành true và ngược lại
            isDark = !isDark;
            // Kiểm tra nếu chế độ tối đang được bật
            if (isDark) 
            {
                // Đặt màu nền của togglerIcon thành màu đen
                togglerIcon.style.backgroundColor = '#000';
            } 
            // Nếu chế độ tối không được bật
            else 
            {
                // Đặt màu nền của togglerIcon thành màu trắng
                togglerIcon.style.backgroundColor = '#fff';
            }
        };
});