// Eklenti yüklendiğinde 20 dakikada bir alarm oluştur
chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("eyeSaverReminder", { periodInMinutes: 20    }); // 20 dakika
    console.log("Göz molası hatırlatıcısı 20 dakikada bir çalışacak.");
});

// Alarm tetiklendiğinde bildirim gönder
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "eyeSaverReminder") {
        sendNotification();
    }
});

// Popup'taki "Test Bildirimi Gönder" butonuna basıldığında bildirim gönder
chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "sendTestNotification") {
        console.log("Manuel test bildirimi gönderiliyor...");
        sendNotification();
    }
});

// Bildirim gösteren fonksiyon
function sendNotification() {
    chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon128.png",
        title: "Göz Molası Zamanı!",
        message: "Gözlerini biraz dinlendirmek için lütfen 5 dakika ara ver :)",
        priority: 2
    }, (notificationId) => {
        if (chrome.runtime.lastError) {
            console.error("Bildirim hatası:", chrome.runtime.lastError.message);
        } else {
            console.log("Bildirim başarıyla gönderildi:", notificationId);
        }
    });
}
