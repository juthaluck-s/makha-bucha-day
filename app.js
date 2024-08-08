let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

document.addEventListener('DOMContentLoaded', function() {
    // เลือกปุ่ม "ดูเพิ่มเติม" ทั้งหมด
    let seeMoreButtons = document.querySelectorAll('.see-more');

    // เพิ่ม event listener ให้กับแต่ละปุ่ม
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // หาตัวแสดงเนื้อหาแบบเต็มและแบบสั้น
            let shortDes = this.previousElementSibling.previousElementSibling;
            let fullDes = this.previousElementSibling;

            // แสดงเนื้อหาแบบเต็มและซ่อนเนื้อหาแบบสั้น
            fullDes.style.display = "block";
            shortDes.style.display = "none";
            
            // ซ่อนปุ่มหลังจากที่กดแล้ว
            this.style.display = "none";
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const leavesContainer = document.querySelector('.leaves');

    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        const size = Math.random() * 20 + 30; // ขนาดใบโพธิ์
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;
        leaf.style.left = `${Math.random() * 100}vw`; // ตำแหน่งแนวนอน
        leaf.style.animationDuration = `${Math.random() * 5 + 10}s`; // ความเร็วในการตก
        leaf.style.animationDelay = `${Math.random() * -5}s`; // การหน่วงเวลา
        leaf.style.transform = `rotate(${Math.random() * 360}deg)`; // การหมุนใบโพธิ์

        // ใช้ setInterval เพื่อหมุนใบโพธิ์
        setInterval(() => {
            let currentRotation = parseFloat(leaf.style.transform.replace(/[^\d.]/g, ''));
            currentRotation += 10; // ปรับเพิ่มทีละ 10 องศา
            leaf.style.transform = `rotate(${currentRotation}deg)`;
        }, 100);

        leavesContainer.appendChild(leaf);

        setTimeout(() => {
            leaf.remove();
        }, 15000); // ปรับระยะเวลา
    }

    // สร้างใบโพธิ์ตกลงมาทุก 800ms
    setInterval(createLeaf, 800);
});




