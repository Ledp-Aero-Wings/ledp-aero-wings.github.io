// หา button ทั้งหมดที่มี attribute "link"
const buttons = document.querySelectorAll('button[link]');

// เพิ่ม event listener ให้แต่ละปุ่ม
buttons.forEach(button => {
 button.addEventListener('click', () => {
  // อ่านลิงค์จาก attribute link
  const uri = button.getAttribute('link');
  // สร้าง URL สมบูรณ์โดยใช้ https://
  const url = uri.startsWith('http') ? uri : `https://${uri}`;
  // เปิดลิงค์ในแท็บใหม่
  window.open(url, '_blank');
 });
});