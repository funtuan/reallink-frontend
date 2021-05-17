# reallink 台灣加密型實聯制
![](https://img.shields.io/github/license/funtuan/reallink-frontend?style=flat-square)
![](https://img.shields.io/github/forks/funtuan/reallink-frontend?style=flat-square)
![](https://img.shields.io/github/stars/funtuan/reallink-frontend?color=%23f5d431&style=flat-square)
![Made with love in Taiwan](https://madewithlove.now.sh/tw?heart=true&template=flat-square)

## 開發緣由:
近日疫情趨為嚴重，店家開始響應實施入店實名制，一般店家須自行設計表單與管理消費者個資  
店家多數使用google表單或其他問卷平台，不僅表單不統一，甚至有些表單要求填身分證或地址，既有資料外洩疑慮與使用者到不同店家又必須使用不同平台重複填寫資訊的雙方困擾。  

因此開發本「台灣加密性實聯制」網站應用解決上述問題。統一的標準問卷，店家不持有使用者資料，使用者只需填寫一次日後即可快速帶入資料與更新資料，並且使用者資料由RSA 2048加密保存，28天後自動刪除。

店家快至 https://twlink.app 製作店家實聯制系統✨為台灣疫情盡一份力吧 !

歡迎提交 PR
後端源碼：https://github.com/funtuan/reallink-frontend/tree/dev
後端源碼：https://github.com/funtuan/reallink-backend/tree/dev

## 特色:
### 📑 **快速建立實聯制表單**  
店家可快速建立標準的實聯制填寫表單格式，不用額外設置

### 🔐 **個資加密保存**  
使用 RSA 2048bit 公鑰加密後存入資料庫，私鑰嚴格保存於離線環境，嚴格限制有疫調需求才揭露

### ♻ **資料定期刪除**  
所蒐集之資料僅保存 28 日，屆期自動銷毀

### ⚡ **快速填寫**  
可選擇是否將填寫資訊紀錄於個人裝置中，方便下次自動代入填寫

## 如何使用:
<img src="https://i.ibb.co/LtqV72j/0515-2-02.jpg" width="500" />

<img src="https://i.ibb.co/Q8xqh2D/0515-2-04.jpg" width="500" />

<img src="https://i.ibb.co/MnRx2RL/0515-2-05.jpg" width="500" />
<br><br>

---

## 貢獻者
PM & Main Developer  
**[FunTuan](github.com/FunTuan)**

UI/UX Designer  
**Grace**

FrontEnd Developer  
**[Proladon](github.com/Proladon)**

SRE  
**[Mino](github.com/Sean2525)**

Technical Writer  
**MuMu Lin**

Marketing Writer  
**Elaine**
<br><br>
## 贊助
思言科技股份有限公司  
<img src="https://i.ibb.co/CWwg4Gw/Group-3-3x.png" width="150" />