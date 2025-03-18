document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("testNotification").addEventListener("click", () => {
        console.log("Test bildirimi butonuna tıklandı.");
        chrome.runtime.sendMessage({ action: "sendTestNotification" });
    });
});
