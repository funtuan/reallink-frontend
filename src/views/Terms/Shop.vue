<template>
  <div class="terms pa-5 pages">
    <p class="shop-term-title">店家申請</p>

    <section class="_section">
      <p class="_section-title">店家申請使用台灣加密型實聯制條款</p>
      <div class="terms-content pa-5">
         「台灣加密型實聯制」(以下簡稱甲方)提供實聯制系統，為了幫助申請人(以下簡稱乙方)為維持國內疫情之穩定控制，使民眾生活及產業經濟能於具備一定安全條件下，如何收集、應用及保護店家之客戶的個人資訊，請詳細閱讀以下隱私權暨資訊安全保護政策。<br>
     <br>
- 使用協議<br>
<br>
    <div>本網站是一個網路平台，會為國內疫情之穩定盡上合理努力，顧客登記的資料只有甲方可以存取，非常重視乙方與顧客隱私，資料決不會開放給第三方使用，除中華民國衛生福利部，嚴格遵照個人資料保護法規定。且甲方不提供任何明示或暗示的保證，甲方僅提供此加密性實聯制服務，若造成甲方損害，其餘請乙方自行承擔對於您所採取之任何決定所生相關責任。</div> 
<br>
- 隱私權保護政策<br>
<br>
   <div>為增加整體防疫措施之透明性、提高民眾之信賴，依個人資料保護法第8條第1項規定，乙方蒐集民眾個人資料時，應明確告知下列事項：</div><br>
一、蒐集機關之名稱：<br>「台灣加密型實聯制」網站<br>
二、蒐集目的：<br>防疫目的，依據「個人資料保護法之特定目的及個人資料之類別」為代號 012公共衛生或傳染病防治之特定目的，且不得為目的外利 用。<br>
三、所蒐集之個人資料項目：<br>稱呼、電話號碼<br>
四、個人資料利用之期間：<br>自蒐集日起28日內<br>
五、個人資料利用之對象及方式：<br>為防止疫情擴散得提供其個人資料予衛生主管機關進行疫調<br>
六、個資當事人就其個人資料得行使的權利及其行使方式；<br>
七、個資當事人不同意提供個人資料對其權益的影響（例如無法進入場館或參與活動）。<br>
並且須告知乙方店家之客戶可採取「多層次告知」方式，將重要事項於明顯處揭示，並以 QR Code 或網址連結提供其他細節事項。<br>
<br>
- 隱私權暨資訊安全保護<br>
<br>
      <div>甲方為蒐集、處理及利用個人資料，得以紙本或電子方式為之，且皆應善盡資料安全維護義務，採行適當之技術上及組織上安全措施，並指定專人辦理安全維護事項， 防止個人資料被竊取、竄改、毀損、滅失或洩漏。例如以紙本供當事人填具個人資料時，應以遮蔽或其他適當方式保護填寫者之個人資料，避免後填寫者得閱覽先填寫者之個人資料。本實聯制系統實施實聯制者，甲方為保護個人資料安全，會使用通行標準的SSL安全協定，保障資料傳送的安全性，應進行資訊安全風險評估，採行相符安全控制措施，確保系統安全防護水準。甲方對於蒐集之個人資料僅可保存 28 日，屆期即主動將個人資料予以刪除或銷毀，並應留存執行刪除或銷毀之項目及日期等軌跡紀錄。</div>
       <br>
- 隱私權暨資訊安全保護政策修訂與諮詢<br>
<br>
  <div>甲方會不定時修訂本項政策，以符合最新之隱私權保護規範。當在使用個人資料的規定做修改時，會公告相關事項。</div>
    <div>如果您對於本網站的隱私權保護政策或是有個人資料收集、運用、更新等問題，請來信至信箱(service@twlink.app)。</div>
      </div>
    </section>

    <section class="_section" v-if="isCustomer">
      <p class="_section-title">是否同意授權</p>
      <div class="button-group">
        <el-button plain class="_normal-btn" :class="{active : !agree}" @click="agree = false">不同意</el-button>
        <el-button plain class="_normal-btn" :class="{active : agree}" @click="agree = true">同意</el-button>
      </div>
    </section>
    <div style="height: 30px;"></div>

    <div class="_bottom-box">
      <el-button
        plain 
        class="_next-btn"
        @click="goSurvey"
      >
        下一步
      </el-button>
    </div>
  </div>
</template>

<script>
import ls from 'local-storage'
export default {
  name:'Terms',
  computed: {
  },
  data: () => ({
    isCustomer: true,
    termsContent: null,
    agree: true,
  }),
  created() {
    if (ls.get('shopTerms')) {
      // this.$router.push(`/shop-signup`)
    }
    // this.CheckShop(this.$route.params.code)
  },
  methods: {
    goSurvey() {
      if (this.agree) {
        ls.set('shopTerms', true)
        this.$router.push(`/shop-signup`)
      } else {
        alert('需同意授權才可進行下一步')
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
<style scoped lang="scss">
.terms-content{
  color: $primary-grey;
  background: $tertiary-grey;
  border-radius: $section-radius;
  text-align: justify;
  height: 250px;
  overflow-y: auto;
  font-size: 14px;
  text-indent: 32px;
}
.shop-term-title {
  font-weight: 500;
  font-size: 16px;
  color: $primary-green;
}
</style>