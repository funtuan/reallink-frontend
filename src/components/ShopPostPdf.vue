<template>
  <div>
     <VueHtml2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="false"
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
            加密型實名制登記
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
              <div class="content">
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
          ※ 請記下您的文件列印期限及「取件編號」或是「取件QR Code」，於有效期間內至全台7-ELEVEN門市 ibon進行文件下載及櫃檯繳費。 超過列印期限，文件將會自動刪除！ ※ 檔案搬移需要5分鐘作業時間，可於取件前先以取件編號查詢，確認檔案是否上傳成功！
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
    generateReport () {
      this.$refs.html2Pdf.generatePdf()
    },
    async hasDownloaded(blob) {
      if (this.uploadMod) {
        this.$refs.html2Pdf.closePreview()
        const data = await upload(blob)
        this.$emit('uploadResponse', data)
      }
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
      .content {
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