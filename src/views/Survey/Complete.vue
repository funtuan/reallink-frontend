<template>
  <div class="complete pages pa-5" v-if="shop">
    <div class="lock-icon-view">
      <img src="@/assets/icon/lock.svg" alt="">
      <p class="ok-text">填寫完成，已對資料進行加密</p>
    </div>
    <ShopInfo class="_section" :shop="shop" />
    <div style="height: 13px;"></div>
    <section class="_section">
      <div class="title">稱呼</div>
      <div class="content">{{info.name}}</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">電話</div>
      <div class="content">{{info.phone}}</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">人數</div>
      <div class="content">{{info.peopleNumber}}</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">時間 |{{info.day}}</div>
      <div class="content">{{info.fillTime}}</div>
      <DashedLine />
    </section>
<!-- 
    <div class="_bottom-box">
      <el-button 
        plain 
        class="_next-btn"
        @click="close"
      >
        關閉
      </el-button>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import DashedLine from '@/components/DashedLine'
import ShopInfo from '@/components/ShopInfo'
import { nowHoursMinutes } from '@/utils/dateTime'
import { genNumberToArray } from '@/utils/generate'

export default {
  name: 'Complete',
  components: { ShopInfo, DashedLine },
  
  data: ()=> ({
    filled: true,
    selectTime: new Date(),
    selectPeopleNum: 1,
    peopleNumberOptions: []
  }),

  computed: {
    ...mapState([
      'shop',
      'info',
    ])
  },

  methods: {
    ...mapActions([
      'CheckShop',
    ]),

    genPeopleNumberOptions () {
      genNumberToArray(1, 10, this.peopleNumberOptions)
      this.peopleNumberOptions.push('10+')
    },

    getNowTime () {
      return nowHoursMinutes()
    },

    close() {
      this.$router.push(`/`)
    },
  },

  mounted () {
    if (!this.info || this.info.code !== this.$route.params.code) {
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
.ok-text {
  font-size: 16px;
  color: $primary-green;
}
</style>