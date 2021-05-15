<template>
  <div>
     <VueHtml2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="!uploadMod"
        :preview-modal="true"
        :paginate-elements-by-height="1500"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="660px"
 
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        @hasDownloaded="hasDownloaded"
        ref="html2Pdf"
    >
      <section slot="pdf-content" class="post-pdf">
        <div class="box">
          <div class="main-title">
            台灣加密型實名制登記
          </div>
          <div class="sub-title">
            即日起配合政府之防疫政策，入內將採取實名制入場，請配合量體溫及填寫相關資料，同行者可一位代表填寫．
          </div>
          <div class="qrcode">
            <div class="top-title">
            </div>
            <div class="img">
              <qrcode-vue :value="link" size="300"></qrcode-vue>
            </div>
            <div class="bottom">
              <div class="top">
                <div class="code">
                  編號{{code}}
                </div>
                <div class="icon">
                  <img src="@/assets/icon/food.svg" alt="">
                </div>
                <div style="clear:both"></div>
              </div>
              <div class="shop-name">
                {{name}}
              </div>
              <div class="sub">
                {{address}}
              </div>
            </div>
          </div>
          <div class="thx">
            “ 感謝您與我們一起落實防疫 ”
          </div>
        </div>
        <div class="line"></div>
        <div class="note-title">
          注意事項
        </div>
        <div class="note">
          店家以「台灣加密型實名制」網站實施實連制，進行蒐集疫調資料，採行相符安全控制措施，確保系統安全防護水準。顧客登記的資料「台灣加密型實名制」網站可以存取，重視顧客隱私，資料決不會開放給第三方使用，嚴格遵照個人資料保護法規定。
        </div>
        <div class="pdf-men">
          <img src="@/assets/icon/pdfmen.svg" alt="">
        </div>
      </section>
    </VueHtml2pdf>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import VueHtml2pdf from 'vue-html2pdf'
import { mapActions } from 'vuex'
import { upload } from '@/api/file';

export default {
  props: {
    link: String,
    code: String,
    name: String,
    address: String,

    uploadMod: Boolean,
  },
  methods: {
    ...mapActions([
      'SetLoading',
    ]),
    generateReport () {
      this.SetLoading(true)
      this.$refs.html2Pdf.generatePdf()
    },
    async hasDownloaded(blob) {
      this.$refs.html2Pdf.closePreview()
      if (this.uploadMod) {
        const data = await upload(blob)
        this.$emit('uploadResponse', data)
      }
      this.SetLoading(false)
    }
  },

  components: {
    VueHtml2pdf,
    QrcodeVue,
  }
}
</script>

<style lang="scss">
.post-pdf {
  letter-spacing: 2.5px;
  font-family: 'Noto Sans TC';
  padding-top: 82px;
  padding-left: 130px;
  .box {
    padding-left: 50px;
    padding-right: 50px;
  }
  .main-title {
    font-size: 36px;
    font-weight: 700;
    color: #B5C02C;
  }
  .sub-title {
    margin-top: 14px;
    font-size: 20px;
    color: #2D271B;
  }

  .qrcode {
    margin-top: 40px;
    text-align: center;
    padding: auto;
    border-radius: 24px 24px 24px 24px;
    border: 1px solid #B5C02C;
    background: #F4F4F4;
    padding-top: 27px;
    .top-title {
      font-size: 22px;
      margin: 18px;
    }
    .bottom {
      margin-top: 27px;
      padding: 12px;
      color: #FFFFFF;
      background: #B5C02C;
      border-radius: 0 0 24px 24px;
      .top {
        .code {
          padding-left: 5px;
          float: left;
          font-size: 16px;
        }
        .icon {
          float: right;
          img {
            width: 54px;
          }
        }
      }
      .shop-name {
        font-weight: 500;
        padding-left: 5px;
        margin-top: 4px;
        text-align: left;
        font-size: 19px;
      }
      .sub {
        padding-left: 5px;
        margin-top: 2px;
        margin-bottom: 4px;
        text-align: left;
        font-size: 16px;
      }
    }
  }
  .thx {
    margin: 16px;
    text-align: center;
    color: #B5C02C;
    font-size: 22px;
  }
  .line {
    margin-top: 70px;
    color: #B5C02C;
    width: 100%;
    height: 10px;
    border-top: 1px dashed #AEAEAE;
  }
  .note-title {
    color: #767676;
    font-size: 14px;
  }
  .note {
    margin-top: 10px;
    color: #767676;
    font-size: 14px;
    text-align: initial;
  }
  .pdf-men {
    position: absolute;
    top: 430px;
    left: 85px;
    img {
      width: 120px;
    }
  }
}
</style>