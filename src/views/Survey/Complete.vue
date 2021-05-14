<template>
  <div class="complete pages pa-5">
    <div class="lock-icon-view" v-if="!filled">
      <img src="@/assets/icon/lock.svg" alt="">
      <p>填寫完成，已對資料進行加密</p>
    </div>
    <ShopInfo />

    <section class="_section">
      <div class="title">姓名</div>
      <div class="content">空****</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">電話</div>
      <div class="content">0911****11</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">人數</div>
      <div v-if="!filled" class="content">6</div>
      
      <el-select v-if="filled" v-model="selectPeopleNum" placeholder="選擇人數" class="content">
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
      <div class="time">時間 |</div>
      <div v-if="!filled">19:00</div>
      <el-time-select
        v-if="filled"
        v-model="selectTime"
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
  </div>
</template>

<script>
import DashedLine from '@/components/DashedLine'
import ShopInfo from '@/components/ShopInfo'
export default {
  name: 'Complete',
  components: { ShopInfo, DashedLine },
  data: ()=> ({
    filled: true,
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

.title {
  color: $secondary-grey;
}

.content {
    color: $primary-grey;
    padding: 10px 0;
}

.time {
  margin-bottom: 10px;
}
</style>