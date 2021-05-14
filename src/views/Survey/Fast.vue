<template>
  <div class="complete pages pa-5" v-if="shop">
    <ShopInfo class="_section" :shop="shop" />
    <div style="height: 13px;"></div>

    <section class="_section">
      <div class="title">姓名</div>
      <div class="content">{{surveyForm.name}}</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">電話</div>
      <div class="content">{{surveyForm.phone}}</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">人數</div>
      
      <el-select style="width: 100%;" v-model="selectPeopleNum" placeholder="選擇人數" class="content">
        <el-option
          v-for="(people, index) in peopleNumberOptions"
          :key="`option-${index}`"
          :label="people"
          :value="people">
        </el-option>
      </el-select>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">時間 |{{showToDay}}</div>
      <div style="height: 5px;"></div>
      <el-time-select
        style="width: 100%;"
        v-model="surveyForm.fillTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '23:30'
        }"
        placeholder="選擇時間">
      </el-time-select>
    </section>

    <div class="_bottom-box-two">
      <el-button 
        plain 
        class="_update-btn"
        @click="updateUserData"
      >
        重新填寫
      </el-button><br>

      <el-button 
        plain 
        class="_next-btn"
        @click="send"
      >
        送出
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ls from 'local-storage'
import dayjs from 'dayjs'
import DashedLine from '@/components/DashedLine'
import ShopInfo from '@/components/ShopInfo'
export default {
  name: 'Complete',
  components: { ShopInfo, DashedLine },
  data: ()=> ({
    selectTime: null,
    selectPeopleNum: 1,
    peopleNumberOptions: [],
    surveyForm: null
  }),

  computed: {
    ...mapState([
      'shop',
      'info',
    ]),
    showToDay() {
      return dayjs(this.surveyForm.toDay).format('YYYY.MM.DD')
    }
  },

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
    updateUserData() {
      ls.remove('survey')
      this.$router.push(`/t/${this.$route.params.code}`)
    },
    async send () {
      await this.SetInfo({
        code: this.$route.params.code,
        ...this.surveyForm,
      })
      this.$router.push(`/complete/${this.$route.params.code}`)
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

  mounted () {
    if (ls.get('survey')) {
      this.surveyForm = ls.get('survey')
      this.surveyForm.fillTime = this.getNowTime()
      this.surveyForm.day = dayjs().format('YYYY-MM-DD')
    } else {
      this.$router.push(`/t/${this.$route.params.code}`)
    }
    this.CheckShop(this.$route.params.code)
    this.genPeopleNumberOptions()
  }
}
</script>

<style scoped lang="scss">
.lock-icon-view {
  margin: auto;
  width: 70%;
  text-align: center;
}

.title {
  color: $secondary-grey;
  font-size: 12px;
}

.content {
  color: $primary-black;
  padding: 4px 0;
  font-size: 16px;
}

.time {
  margin-bottom: 10px;
}
</style>