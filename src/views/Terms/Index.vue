<template>
  <div class="terms pa-5 pages" v-if="shop">
    <ShopInfo class="_section" :shop="shop" />
    <div style="height: 4px;"></div>
    <section class="_section">
      <p class="_section-title">隱私權及資訊安全政策</p>
      <div class="terms-content pa-5">
        「台灣加密型實聯制」隱私權及資訊安全政策<br>
台灣加密型實聯制(以下簡稱本網站)重視並尊重您的隱私權，為了幫助您瞭解本網站如何收集、應用及保護您的個人資訊，請詳細閱讀以下隱私權暨資訊安全保護政策。<br>
<br>
- 適用範圍<br>
<br>
以下的隱私權保護政策，適用於您在本網站活動時，所涉及的個人資料收集、運用與保護。但不適用於經由本網站連結之其他網站，適用各該網站的隱私權保護政策。<br>
<br>
為增加整體防疫措施之透明性、提高民眾之信賴，依個人資料保護法第8條第1項規定，蒐集民眾個人資料時，應明確告知下列事項：<br>
一、蒐集機關之名稱：「台灣加密型實聯制」網站<br>
二、蒐集目的：防疫目的，依據「個人資料保護法之特定目的及個人資料之類別」為代號 012公共衛生或傳染病防治之特定目的，且不得為目的外利用。<br>
三、所蒐集之個人資料項目：稱呼、電話號碼<br>
四、個人資料利用之期間：自蒐集日起28日內<br>
五、個人資料利用之對象及方式：為防止疫情擴散得提供其個人資料予衛生主管機關進行疫調<br>
六、個資當事人就其個人資料得行使的權利及其行使方式；<br>
七、個資當事人不同意提供個人資料對其權益的影響（例如無法進入場館或參與活動）。<br>
<br>
- Localstorage的運用與政策<br>
<br>
       為提供個人化的服務，方便您每次進行實聯制，使用Localstorage在您首次輸入時建立及儲存，並在您登出時修改，追蹤保存您的資料。Localstorage是從網站傳送到瀏覽器，保存在使用者電腦硬碟中的資料。您可以在Netscape的「功能設定」的「進階」或是IE的「Internet選項」的「安全性」中選擇修改瀏覽器對Localstorage的接受程度。如果您選擇拒絕所有的Localstorage，可能無法部份個人化服務。<br>
<br>
- 資料的運用方式<br>
<br>
       本網站不會出售、出租或任意交換任何您的個人資料給其他團體或個人。 只有在以下狀況，本網站會在本政策原則之下，與第三者共用您的個人資料。<br>
      因採行實聯制措施時，須蒐集民眾的聯絡資料，僅提供中華民國衛生福利部，本網站暨合作店家為蒐集、處理及利用個人資料，得以紙本或電子方式為之，且皆應善盡資料安全維護義務，採行適當之技術上及組織上安全措施，並指定專人辦理安全維護事項， 防止個人資料被竊取、竄改、毀損、滅失或洩漏。例如以紙本供當事人填具個人資料時，應以遮蔽或其他適當方式保護填寫者之個人資料，避免後填寫者得閱覽先填寫者之個人資料。<br>
      <br>
-   資訊安全保護措施<br>
<br>
     本網站為保護您的個人資料安全，會使用通行標準的SSL安全協定，保障資料傳送的安全性。由於資料傳輸過程牽涉您上網環境保全之良窳，無法確信或保證您傳送或接收本網站資料的安全，須注意並承擔網路資料傳輸之風險。<br>
<br>
- 隱私權暨資訊安全保護政策修訂與諮詢<br>
<br>
     本網站會不定時修訂本項政策，以符合最新之隱私權保護規範。當本網站在使用個人資料的規定做修改時，會公告相關事項。<br>
     如果您對於本網站的隱私權保護政策或是有個人資料收集、運用、更新等問題，請來信至信箱(service@twlink.app)。<br>
      </div>
    </section>

    <section class="_section">
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
// import smsLink from 'sms-link'
import { mapState, mapActions } from 'vuex'
import ls from 'local-storage'
import ShopInfo from '@/components/ShopInfo'

export default {
  name:'Terms',
  components: {ShopInfo},
  computed: {
    ...mapState([
      'shop',
    ]),
  },
  
  data: () => ({
    termsContent: null,
    agree: true,
  }),

  created() {
    // let unSupport = ls.get('unSupport')

    // if(!unSupport){
    const useSMS = confirm('是否使用簡訊進行實聯制？')
    
    if(useSMS){
      setTimeout(() => { 
        alert('抱歉，此裝置不支援此功能，請使用台灣加密型實聯制')
        // ls.set('unSupport', true)
      }, 500);
      window.location = 'sms://1922?&body=場所代碼：xxxxxxxx'
      
      // try {
      //   smsLink({phone: '1922', body: '111121314151617 1231232'})
      // } catch (error) {
      //   console.log(error)
      // }
    }
    // }

    // var req = new XMLHttpRequest();  
    // req.open('GET', 'SMSTO:1922:111121314151617 1231232', true);  
    // req.send();  
    // if (req.status != "200") {
      //     console.log('error')
    // } 

    
    
    if (ls.get('terms')) {
      this.$router.push(`/survey/${this.$route.params.code}`)
      return
    }
    this.CheckShop(this.$route.params.code)
  },

  methods: {
    ...mapActions([
      'CheckShop',
    ]),

    goSurvey() {
      if (this.agree) {
        ls.set('terms', true)
        this.$router.push(`/survey/${this.$route.params.code}`)
      } else {
        alert('需同意授權才可進行下一步')
      }
    }
  }
}
</script>

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
</style>