<template>
  <div class="dashboard pages pa-5">
    <ShopInfo class="_section" :shop="shop" />
    
    <div class="main-title title-1">選擇區間查看登記數量</div>

    <section class="_section durations">
        <div class="duration-nav">
            <span class="nav-btn" :class="{'duration-active' : durations === 'day'}" @click="showDuration('day')">昨天</span>
            <span class="nav-btn" :class="{'duration-active' : durations === 'week'}" @click="showDuration('week')">本周</span>
            <span class="nav-btn" :class="{'duration-active' : durations === 'month'}" @click="showDuration('month')">本月</span>
        </div>
    </section>

    <section class="_section total-count-info-container _flex-between">
        <div class="inner-container _flex">
            <img src="@/assets/icon/file.svg" alt="file-icon">
            <div class="count-info _flex-col">
                <span>登記筆數</span>
                <span>2021.05.12 - 2021.05.19</span>
            </div>
        </div>

        <div class="total-count">
            {{total}}
        </div>
    </section>

    <div class="main-title title-1">近期五筆 | {{todayDate()}}</div>
    
    <section class="icon-container _flex-col" v-if="recent.length === 0">
        <img class="nodata-icon" src="@/assets/icon/nodata.svg" alt="nodata-icon">
        <span>尚無紀錄喔</span>
    </section>

    <section class="_section data-table" v-if="recent.length > 0">
        <div class="row">
            <span class="col-title">登記日期</span>
            <span>資料新增時間</span>
        </div>

        <div class="row" v-for="(data, index) in recent" :key="`data-${index}`">
            <span class="data-left">{{inDate(data)}}</span>
            <span class="data-right">{{inTime(data)}}</span>
            <DashedLine v-if="index !== 4" />
        </div>
    </section>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DashedLine from '@/components/DashedLine'
import ShopInfo from "@/components/ShopInfo";
import { durationCount, todayRecent } from '@/api/shop'
import dayjs from 'dayjs'
import startOfISOWeek from 'date-fns/startOfISOWeek'
import endOfISOWeek from 'date-fns/endOfISOWeek'
import startOfMonth from 'date-fns/startOfMonth'
// import endOfMonth from 'date-fns/endOfMonth'

export default {
  name: "Dashboard",
  components: { ShopInfo, DashedLine },
  
  computed: {
    ...mapState(["shop", "info"]),
  },

  data: ()=>({
      durations: 'day',
      startDate: '',
      endDate: '',
      total: 0,
      recent: []
  }),

  methods: {
    ...mapActions([
      "CheckShop",
      "SetInfo"
    ]),

    async showDuration(duration) {
        this.durations = duration

        if (duration === 'day') {
            const date = dayjs(new Date()).subtract(1, 'dates').format('YYYY-MM-DD')
            this.startDate = date
            this.endDate = date
            await this.getDuration()
        }
        
        if(duration === 'week') {
            const start = startOfISOWeek(new Date())
            const end = endOfISOWeek(new Date())
            this.startDate = dayjs(start).format('YYYY-MM-DD')
            this.endDate = dayjs(end).format('YYYY-MM-DD')
            await this.getDuration()
        }

        if(duration === 'month') {
            const start = startOfMonth(new Date())
            // const end = endOfMonth(new Date())
            
            this.startDate = dayjs(start).format('YYYY-MM-DD')
            
            if(dayjs(start).month() === 2){
                this.endDate = dayjs(start).add(27, 'd').format('YYYY-MM-DD')
            }else{
                this.endDate = dayjs(start).add(28, 'd').format('YYYY-MM-DD')
            }
            await this.getDuration()
        }
    },

    inDate(data){
        const date = dayjs(data.createdAt)
        return date.format('MM.DD')
    },

    inTime(data){
        const date = dayjs(data.createdAt)
        return date.format('HH:mm')
    },

    todayDate () {
      return dayjs(new Date()).format('MM.DD')
    },

    async getDuration() {
        this.total = await durationCount({
            code: this.$route.params.code,
            secret: this.$route.params.secret,
            start: this.startDate(),
            end: this.endDate(),
        }).catch(err=>{
            console.log(err.response.data)
        })
    }
  },
  
  async mounted(){
    const code = this.$route.params.code || 'EJC8LRSP'
    const secret = this.$route.params.secret || '4K33OPKSRX1P2G5XKMD1'
    
    this.CheckShop(code)
    // this.showDuration('day')
    
    this.total = await durationCount({
        code,
        secret,
        end: dayjs(new Date()).subtract(1, 'd').format('YYYY-MM-DD'),
        start: dayjs(new Date()).subtract(1, 'd').format('YYYY-MM-DD'),
    }).catch(err=>{
        console.log(err.response.data)
    })

    this.recent = await todayRecent({
        code,
        secret,
    }).catch(err=>{
        console.log(err.response.data)
    })
  }
}
</script>



<style scoped lang="scss">
.title-1 {
    margin-top: 20px;
}

.duration-nav{
    margin-top: 10px;
    margin-bottom: 12px;
    .nav-btn {
        color: $secondary-grey;
        margin-right: 20px;
    }

    .duration-active {
        color: $primary-green ;
    }
}

.total-count-info-container {
    border-radius: $primary-radius;
    background: $primary-green;
    align-items: center;
    margin-bottom: 30px;
    padding: 5px 20px;
    height: 58px;
    font-size: 14px;

    img {
        margin-right: 10px;
    }
}

.count-info, .total-count {
    color: white;
}

.total-count {
    font-size: 24px;
}

.data-table{
    margin-top: 20px;
    
    .row {
        margin-bottom: 15px;
    }

    .col-title {
        margin-right: 70px;
    }

    .data-left {
        margin-left: 10px;
        margin-right: 110px;
    }

    .data-left, .data-right {
        color: $primary-grey;
    }
}

.icon-container{
    margin: auto;
    padding-top: 30px;
    font-size: 14px;
    text-align: center;
    color: $secondary-grey;
    .nodata-icon {
        margin: auto;
    }
}

</style>
