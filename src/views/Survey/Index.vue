<template>
  <div class="survey pages pa-5">
    <ShopInfo class="_section" v-if="isCustomer" />

    <section class="_section _flex-col">
      <span>COVID-19防疫調查表(含健康旅遊史)</span>
      <p class="">身體健康，且一個月內無出國史</p>
      <div class="button-group">
        <el-button plain class="_normal-btn" :class="{active: surveyForm.aboard === true}" @click="surveyForm.aboard = true">有</el-button>
        <el-button plain class="_normal-btn" :class="{active: surveyForm.aboard === false}" @click="surveyForm.aboard = false">無</el-button>
      </div>
    </section>


    <section class="_section" v-if="!surveyForm.healthly">
      <p class="_section-title">1.最近一個月是否出現下述症狀</p>
      <el-checkbox-group class="_flex-col" v-model="surveyForm.symptom">
        <el-checkbox label="無"></el-checkbox>
        <el-checkbox label="發燒(≧38℃) "></el-checkbox>
        <el-checkbox label="咳嗽"></el-checkbox>
        <el-checkbox label="喉嚨痛"></el-checkbox>
        <el-checkbox label="呼吸道窘迫症狀(呼吸急促、呼吸困難)"></el-checkbox>
        <el-checkbox label="流鼻水"></el-checkbox>
        <el-checkbox label="肌肉酸痛"></el-checkbox>
        <el-checkbox label="關節酸痛"></el-checkbox>
        <el-checkbox label="其他症狀"></el-checkbox>
      </el-checkbox-group>

      <el-input class="_primary-input" :disabled="!surveyForm.symptom.includes('其他症狀')"  
      v-model="surveyForm.otherSymptom" placeholder="填寫你的症狀"></el-input>

      <p class="_section-title">上述症狀起始日</p>
      <el-date-picker v-model="surveyForm.symptomDate" type="date" placeholder="選擇日期">
      </el-date-picker>
    </section>

    <section class="_section" v-if="!surveyForm.healthly">
      <p class="_section-title">2.最近一個月是否有出國旅遊/接觸史(含轉機)</p>
      <el-checkbox-group class="_flex-col" :max="1" v-model="surveyForm.diseases">
        <el-checkbox label="否"></el-checkbox>
        <el-checkbox label="是，慢性疾病"></el-checkbox>
        <el-checkbox label="是，重大疾病"></el-checkbox>
      </el-checkbox-group>
      <el-input v-model="surveyForm.diseasesInfo" :disabled="surveyForm.diseases[0] === '否'" placeholder="請簡述"></el-input>
    </section>

    <section class="_section _flex-col">
      <p class="_section-title">姓名</p>
      <el-input v-model="surveyForm.name"></el-input>
    </section>

    <section class="_section _flex-col">
      <p class="_section-title">電話</p>
      <el-input v-model="surveyForm.phone"></el-input>
    </section>

    <section class="_section _flex-col">
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

    <section class="_section _flex-col">
      <p class="_section-title">時間</p>
      <el-time-select
        v-model="surveyForm.fillTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '23:30'
        }"
        placeholder="選擇時間">
      </el-time-select>
    </section>

    <section class="_section _flex-col">
      <p class="_section-title">是否將填寫記錄保存</p>
      <div class="button-group">
        <el-button plain class="_normal-btn" :class="{active: save === false}" @click="save = false" >不想保存誒</el-button>
        <el-button plain class="_normal-btn" :class="{active: save === true}" @click="save = true">一定要保存</el-button>
      </div>
    </section>

    <el-button plain class="_next-btn" @click="complete">送出</el-button>
  </div>
</template>

<script>
import ShopInfo from "@/components/ShopInfo";
export default {
  name: "Survey",
  components: { ShopInfo },
  data: () => ({
    isCustomer: true,
    termsContent: null,
    peopleNumberOptions: [],
    save: false,
     
    surveyForm: {
      name: '',
      phone: '',
      
      aboard: false,
      symptom: [],
      otherSymptom: "",
      symptomDate: '',

      diseases: [],
      diseasesInfo: '',
      peopleNumber: 1,
      fillTime: '',
    }
  }),

  methods: {
    genPeopleNumberOptions () {
      for(let i=1; i <= 10; i++){
        this.peopleNumberOptions.push(i)
      }
      this.peopleNumberOptions.push('10+')
    },

    complete() {
      this.$router.push(`/complete/${this.$route.params.code}`)
    }
  },

  mounted() {
    this.genPeopleNumberOptions()
  }
};
</script>

<style scoped lang="scss">
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
