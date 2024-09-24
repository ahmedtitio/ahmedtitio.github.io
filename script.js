// تحقق من وجود Telegram WebApp
if (window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
  
    // إرسال بيانات للبوت
    document.getElementById('sendDataBtn').addEventListener('click', () => {
      window.Telegram.WebApp.sendData("Hello from the web app!");
    });
  
    // إغلاق التطبيق
    document.getElementById('closeBtn').addEventListener('click', () => {
      window.Telegram.WebApp.close();
    });
  }
  