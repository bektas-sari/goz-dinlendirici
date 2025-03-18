# 👀 GÖZ MOLASI HATIRLATICISI - CHROME EKLENTİSİ

## ✨ Proje Hakkında
**Göz Molası Hatırlatıcısı**, göz sağlığını korumak ve göz yorgunluğunu azaltmak için **20-20-20 kuralına** uygun olarak geliştirilmiş bir Chrome eklentisidir.

Eklenti, kullanıcılara **her 20 dakikada bir** gözlerini 20 saniye boyunca 20 metre uzağa bakmaları konusunda hatırlatma bildirimi gönderir. Bu sayede dijital ekran karşısında uzun süre zaman geçirenlerin göz yorgunluğu minimize edilir.

---

## ⚡️ Özellikler
- **✨ Kullanıcı Dostu:** Arka planda otomatik çalışır, herhangi bir ek işleme gerek yoktur.
- **⏳ 20 Dakika Kuralı:** Her 20 dakikada bir otomatik bildirim gönderir.
- **👀 Göz Yorgunluğunu Azaltma:** Bilimsel 20-20-20 kuralına uygun olarak geliştirildi.
- **📢 Bildirim Sistemi:** Kullanıcıya "Gözlerini biraz dinlendirmek için lütfen 5 dakika ara ver :)" şeklinde hatırlatma yapar.
- **🎨 Minimal ve Hafif:** Chrome'da düşük bellek tüketimi ile çalışır.

---

## 🔧 Kurulum
### **1. Eklentiyi Manuel Yükleme**
Eklentiyi Chrome'a manuel olarak yüklemek için aşağıdaki adımları takip edin:

1. **Bu repoyu ZIP olarak indirin** veya `git clone` ile bilgisayarınıza kopyalayın.
   ```bash
   git clone https://github.com/bektas-sari/goz-dinlendirici.git
   ```
2. **ZIP dosyasını çıkarın** ve klasör içine girin.
3. **Chrome'u açın** ve adres çubuğuna şunu yazın:
   ```
   chrome://extensions/
   ```
4. **Geliştirici Modu'nu etkinleştirin.**
5. **"Paketlenmemiş Uzantıyı Yüklen" butonuna tıklayın** ve indirdiğiniz proje klasörünü seçin.
6. **Eklenti başarıyla Chrome'a yüklenecektir!**

---

## 🚀 Kullanım
Eklenti arka planda çalışır ve her 20 dakikada bir otomatik olarak bildirimi gönderir.

Ayrıca, **eklentinin simgesine tıklayarak "Test Bildirimi Gönder" butonu ile bildirimi manuel olarak test edebilirsiniz.**

---

## ⛓ Sık Karşılaşılan Sorunlar ve Çözümleri
**1. Bildirimler gelmiyor!**
- Chrome bildirim izinlerini kontrol edin:
  ```
  chrome://settings/content/notifications
  ```
- Eklentinin bildirimlere izinli olup olmadığını kontrol edin.
- Chrome Konsolu'nda (F12 > Console) aşağıdaki komutu çalıştırın ve hata olup olmadığını kontrol edin:
  ```javascript
  chrome.alarms.getAll(console.log);
  ```

**2. Eklenti otomatik başlatılmıyor!**
- Chrome'un "Arka Planda Çalışmasına İzin Ver" seçeneğini kontrol edin.

---

## 🔍 Teknolojiler
Bu proje şu teknolojilerle geliştirildi:
- **JavaScript (ES6)**
- **Chrome Extensions API**
- **Manifest v3**
- **Chrome Notifications API**

---

## 🎨 Katkı Sağlamak
Projeye katkıda bulunmak istiyorsanız:
1. Bu repoyu fork edin.
2. Yeni bir branch oluşturun: `git checkout -b yeni-ozellik`
3. Değişikliklerinizi yapın ve commitleyin: `git commit -m "Yeni özellik eklendi"`
4. Branch'i push edin: `git push origin yeni-ozellik`
5. Bir Pull Request oluşturun!

---

## 🌟 Lisans
Bu proje **MIT Lisansı** altında sunulmuştur. İstediğiniz gibi kullanabilir, geliştirebilir ve paylaşabilirsiniz.

---

## 👤 Yazar
[Bektas SARI](https://github.com/bektas-sari)

---

## ✨ Teşekkürler
Bu projeyi kullandığınız için teşekkürler! Görüşlerinizi ve geri bildirimlerinizi bekliyorum. **Keyifli kullanımlar!** 🌟

