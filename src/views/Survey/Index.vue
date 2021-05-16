<template>
  <div class="survey pages pa-5" v-if="shop">
    <ShopInfo class="_section" :shop="shop" />

    <el-form
      ref="form"
      :model="surveyForm"
      :rules="rules"
    >
      <section class="_section _flex-col">
        <span class="survey-title">COVID-19 防疫實聯制</span>
        <p class="topic">身體健康，且一個月內無出國史</p>
        <div class="button-group">
          <el-button plain class="_normal-btn" :class="{active: surveyForm.aboard === true}" @click="surveyForm.aboard = true">否</el-button>
          <el-button plain class="_normal-btn" :class="{active: surveyForm.aboard === false}" @click="surveyForm.aboard = false">是</el-button>
        </div>
      </section>


      <section class="_section" v-if="surveyForm.aboard">
        <p class="_section-title">1.最近一個月是否出現下述症狀</p>
        <el-checkbox-group class="_flex-col" v-model="surveyForm.symptom">
          <el-checkbox label="發燒(≧38℃) "></el-checkbox>
          <el-checkbox label="咳嗽"></el-checkbox>
          <el-checkbox label="喉嚨痛"></el-checkbox>
          <el-checkbox label="呼吸道窘迫症狀(呼吸急促、呼吸困難)"></el-checkbox>
          <el-checkbox label="流鼻水"></el-checkbox>
          <el-checkbox label="肌肉酸痛"></el-checkbox>
          <el-checkbox label="關節酸痛"></el-checkbox>
          <el-checkbox label="其他症狀"></el-checkbox>
        </el-checkbox-group>
        <div style="height: 10px;"></div>
        <el-input class="_primary-input" v-if="surveyForm.symptom.includes('其他症狀')"  
        v-model="surveyForm.otherSymptom" placeholder="填寫你的症狀"></el-input>

        <p class="_section-title">上述症狀起始日</p>
        <el-date-picker v-model="surveyForm.symptomDate" type="date" placeholder="選擇日期">
        </el-date-picker>
      </section>

      <section class="_section" v-if="surveyForm.aboard">
        <p class="_section-title">2.最近一個月是否有出國旅遊/接觸史(含轉機)</p>
        <el-radio label="否" v-model="surveyForm.diseases">否</el-radio><br>
        <el-radio label="是" v-model="surveyForm.diseases">是</el-radio>
        <div style="height: 10px;"></div>
        <el-input v-if="surveyForm.diseases ==='是'" v-model="surveyForm.diseasesInfo" :disabled="surveyForm.diseases[0] === '否'" placeholder="請填寫旅遊/接觸史(含轉機)地點"></el-input>
      </section>

      <el-form-item class="_section _flex-col" prop="name">
        <p class="_section-title">稱呼</p>
        <el-input v-model="surveyForm.name" placeholder="怎麼稱呼"></el-input>
      </el-form-item>

      <el-form-item class="_section _flex-col" prop="phone">
        <p class="_section-title">電話</p>
        <el-input type="number" v-model="surveyForm.phone" placeholder="你的電話" maxlength="10"></el-input>
      </el-form-item>

      <section  class="_section _flex-col">
        <p class="_section-title">人數</p>
        <el-select v-model="surveyForm.peopleNumber" placeholder="選擇人數">
          <el-option
            v-for="(people, index) in peopleNumberOptions"
            :key="`option-${index}`"
            :label="people"
            :value="people">
          </el-option>
        </el-select>
      </section>

      <el-form-item  class="_section _flex-col" prop="fillTime">
        <p class="_section-title">時間｜{{surveyForm.day}}</p>
        <el-time-select
          style="width: 100%;"
          v-model="surveyForm.fillTime"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '23:45'
          }"
          placeholder="選擇時間">
        </el-time-select>
      </el-form-item >

      <section class="_section _flex-col">
        <p class="_section-title">將填寫記錄保存於瀏覽器</p>
        <div class="button-group">
          <el-button plain class="_normal-btn" :class="{active: save === false}" @click="save = false">不保存</el-button>
          <el-button plain class="_normal-btn" :class="{active: save === true}" @click="save = true">保存</el-button>
        </div>
      </section>
    </el-form>

    <div style="height: 30px;"></div>

    <div class="_bottom-box">
      <el-button plain class="_next-btn" @click="complete">送出</el-button>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import ls from 'local-storage'
import { mapState, mapActions } from 'vuex'

import ShopInfo from "@/components/ShopInfo";
export default {
  name: "Survey",
  components: { ShopInfo },
  computed: {
    ...mapState([
      'shop',
    ]),
  },
  data: () => ({
    loading: false,
    termsContent: null,
    peopleNumberOptions: [],
    save: true,
     
    surveyForm: {
      name: null,
      phone: null,
      
      aboard: false,
      symptom: [],
      otherSymptom: null,
      symptomDate: null,

      diseases: '否',
      diseasesInfo: null,
      peopleNumber: 1,
      fillTime: null,
      day: dayjs().format('YYYY-MM-DD')
    },
    rules: {
      name: [
        { required: true, message: "請填寫稱呼", trigger: "blur" },
        { min: 2, max: 10, message: "長度需在 2 到 10 字之間", trigger: "blur" }
      ],
      phone: [
        { required: true, message: "請填寫電話", trigger: "blur" },
        { min: 7, max: 10, message: "長度需在 7 到 10 字之間", trigger: "blur" }
      ],
      peopleNumber: { required: true, message: "請填寫人數", trigger: "blur" },
      fillTime: { required: true, message: "請填寫時間", trigger: "blur" },
    }
  }),

  methods: {
    ...mapActions([
      'CheckShop',
      'SetInfo',
    ]),
    genPeopleNumberOptions () {
      for(let i=1; i <= 10; i++){
        this.peopleNumberOptions.push(i)
      }
      this.peopleNumberOptions.push('10+')
    },
    complete() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          if (this.save) {
            ls.set('survey', this.surveyForm)
          }
          await this.SetInfo({
            code: this.$route.params.code,
            ...this.surveyForm,
          })
          this.$router.push(`/complete/${this.$route.params.code}`)
        }
      });
    },
    getNowTime () {
      let hour = new Date().getHours()
      let min = Math.ceil(new Date().getMinutes() / 15) * 15
      if (min === 60) {
        min = 0
        hour++
      }
      if (hour === 24) hour = 0
      hour = hour >= 10 ? `${hour}` : `0${hour}`
      min = min >= 10 ? `${min}` : `0${min}`

      return `${hour}:${min}`
    },
  },

  mounted() {
    if (ls.get('survey')) {
      this.$router.push(`/fast/${this.$route.params.code}`)
    }
    this.surveyForm.fillTime = this.getNowTime()
    this.CheckShop(this.$route.params.code)
    this.genPeopleNumberOptions()
  }
};
</script>

<style scoped lang="scss">
.survey-title {
  margin-top: 12px;
  font-size: 16px;
  color: $primary-green;
}

.topic {
  font-weight: 500;
  font-size: 14px;
}

.terms-content {
  color: $primary-grey;
  background: $tertiary-grey;
  border-radius: $section-radius;
  text-align: justify;
}

.active {
  background: $primary-green;
  color: white;
}
</style>
