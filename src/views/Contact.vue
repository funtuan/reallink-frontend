<template>
  <div class="contact pages pa-5">

    <p class="main-title ">相關問題 Q&A</p>
    <section class="_section">
      <div class="contact-title">我是店家，該如何確認使用者完成登記？</div>
      <div class="contact-content">
        <div>若民眾使用「1922簡訊實聯制」登錄，請民眾出示簡訊發送畫面，確認已發送至 1922 實聯制簡訊</div>
        <div>若民眾使用「台灣加密型實聯制」登錄，請民眾出示「填寫完成，已對資料進行加密」畫面</div>
      </div>
      <DashedLine />
    </section>
    <section class="_section">
      <div class="contact-title">我是店家，能查看使用者哪些資料？</div>
      <div class="contact-content">
        <div>使用者資訊經公鑰加密處理存於資料庫，非疫調需求，是不會使用私鑰解密的，故後台僅能查看期間登記筆數資訊、即時登記狀況（僅包含新增時間），並無法得知使用者稱呼、電話等資訊。</div>
      </div>
      <DashedLine />
    </section>
    <section class="_section">
      <div class="contact-title">我是店家，需要額外申請「1922簡訊實聯制」的店家代碼嗎？</div>
      <div class="contact-content">
        <div>本平台於 g0v 參與實聯制功能開發，於 5/19 同步疾病管制署發布，完成「1922簡訊實聯制」功能串接；店家代碼將依據平台店號自動產生，不須額外申請，使用「台灣加密型實聯制」店家可直接使用。</div>
      </div>
      <DashedLine />
    </section>


    <section class="_section">
      <div class="contact-title">註冊時未收到店家後台連結或連結遺失？</div>
      <div class="contact-content">
        <div>請以註冊時登記信箱來信 service@twlink.app，告知需補發店家後台連結，並提供平台店家店名、平台店家店號，客服將為您處理</div>
      </div>
      <DashedLine />
    </section>
    
    <section class="_section">
      <div class="contact-title">店家資訊填寫錯誤？</div>
      <div class="contact-content">
        <div>若店家尚未開始使用，建議直接重新註冊即可．若已開始使用，請以註冊時登記信箱來信 service@twlink.app，告知需更改的店家資訊，並提供平台店家店名、平台店家店號，客服將為您處理</div>
      </div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="contact-title">我是店家，收到疫調需求時該如何處理？</div>
      <div class="contact-content">
       請採取以下任一種做法<br>
<br>
一、主動告知衛生主管機關使用本平台實施實聯制<br><br>
<div>可以直接向負責疫調的衛生主管機關告知貴店使用 twlink.app 加密型實聯制功能，並提供平台上店家編號及名稱，由衛生主管機關向平台聯絡提供疫調資訊。</div>

<br>
二、要求本平台提供資料，交付衛生主管機關<br><br>
<div>
請以註冊時登記信箱來信 service@twlink.app，要求本平台提供特定時間段的資料後，本平台將會提供未解密之原始資料（只會包含各筆的新增時間、來訪時間、加密內容）
</div>
<div>
如需解密查看，需由衛生主管機關聯絡本平台給予原始資料，確認資料使用目的為疫調後，才會協助將原始資料進行解密。
</div>
      </div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="contact-title">我是疫調人員，平台能如何協助我？</div>
      <div class="contact-content">
        <div class="sub-title">
          ㄧ、配合疫調需求，提供實聯制填寫資訊
        </div>
        <div>
          需來信 service@twlink.app，告知平台店家名稱、平台店家編號、疫調之期間段、代表疫調政府單位、單位聯絡人及聯絡方式
        </div><br>
        <div class="sub-title">
          二、配合疫調需求，提供用戶曾經前往過店家實聯制足跡
        </div>
        <div>
          需來信 service@twlink.app，告知確診者在平台去識別化 uuid 編號（於關於頁面查看）、疫調之期間段、代表疫調政府單位、單位聯絡人及聯絡方式
        </div>
</div>
      <DashedLine />
    </section>


  </div>
</template>

<script>
import DashedLine from '@/components/DashedLine'

export default {
  name: "Contact",
  components: {DashedLine},
}
</script>

<style scoped lang="scss">
.contact-title {
  color: $secondary-grey;
  font-weight: 500;
  font-size: 13px;
}

.contact-content {
    color: $primary-grey;
    padding: 10px 0;
    font-size: 13px;
  text-indent: 28px;
  text-align: justify;
}

.sub-title {
  text-indent: 0;
  font-weight: 500;
  margin-bottom: 10px;
}
</style>
