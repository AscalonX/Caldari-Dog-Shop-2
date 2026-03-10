document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const quantity = document.querySelector('input[name="quantity"]').value;
    const agree = document.querySelector('input[name="agree"]').checked;

    // 2.) Full name and phone cannot be empty
    if (name === '' || phone === '') {
        alert('กรุณากรอกชื่อนามสกุลและเบอร์ผู้ติดต่อให้ครบถ้วน');
        return;
    }

    // 3.) Number of current pets must be filled and between 0–100
    if (quantity === '' || isNaN(quantity) || Number(quantity) < 0 || Number(quantity) > 100) {
        alert('กรุณากรอกจำนวนสัตว์เลี้ยงที่มีอยู่ปัจจุบัน โดยค่าที่อนุญาตให้ใส่คือ 0 ถึง 100');
        return;
    }

    // 4.) Checkbox must be checked
    if (!agree) {
        alert('กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข');
        return;
    }

    this.submit();
});
