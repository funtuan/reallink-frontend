<template>
  <div class="complete pages pa-5">
    <div class="lock-icon-view" v-if="!filled">
      
      <p>填寫完成，已對資料進行加密</p>
    </div>
    <ShopInfo />

    <section>
      <p class="_section">姓名</p>
      <div>空****</div>
    </section>

    <section>
      <p class="_section">電話</p>
      <div>0911****11</div>
    </section>

    <section>
      <p class="_section">人數</p>
      <div v-if="!filled">6</div>
      <el-select v-if="filled" v-model="selectPeopleNum" placeholder="選擇人數">
        <el-option
          v-for="(people, index) in peopleNumberOptions"
          :key="`option-${index}`"
          :label="people"
          :value="people">
        </el-option>
      </el-select>
    </section>

    <section>
      <p class="_section">時間</p>
      <div v-if="!filled">19:00</div>
      <el-time-select
        v-if="filled"
        v-model="selectTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }"
        placeholder="選擇時間">
      </el-time-select>
    </section>

    <el-button 
      plain 
      class="_update-btn"
      @click="updateUserData"
      v-if="filled"
    >
      更新資訊
    </el-button>

    <el-button 
      plain 
      class="_next-btn"
      @click="send"
    >
      關閉
    </el-button>
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo'
export default {
  name: 'Complete',
  components: { ShopInfo },
  data: ()=> ({
    filled: false,
    selectTime: new Date(),
    selectPeopleNum: 1,
    peopleNumberOptions: []
  }),

  methods: {
    genPeopleNumberOptions () {
      for(let i=1; i <= 10; i++){
        this.peopleNumberOptions.push(i)
      }
      this.peopleNumberOptions.push('10+')
    }
  },

  mounted () {
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

// .dash-input {
//   border: 5px solid transparent;
//   background: linear-gradient(white,white) padding-box,
//   repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.5em,white 0,white 0.75em);
// }
</style>