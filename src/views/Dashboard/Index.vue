<template>
  <div class="dashboard pages pa-5" v-if="shop">
    <ShopInfo class="_section" :shop="shop" />
    
    <div class="main-title title-1">使用簡訊實聯制本平台將不紀錄</div>
    <div class="main-title title-1">選擇區間查看登記數量</div>

    <section class="_section durations">
        <div class="duration-nav">
            <span class="nav-btn time-area" :class="{'duration-active' : durations === 'day'}" @click="showDuration('day')">昨天</span>
            <span class="nav-btn time-area" :class="{'duration-active' : durations === 'week'}" @click="showDuration('week')">7天</span>
            <span class="nav-btn time-area" :class="{'duration-active' : durations === 'month'}" @click="showDuration('month')">28天</span>
        </div>
    </section>

    <section class="_section total-count-info-container _flex-between">
        <div class="inner-container _flex">
            <img src="@/assets/icon/file.svg" alt="file-icon">
            <div class="count-info _flex-col">
                <span>登記筆數</span>
                <span>{{startDate}} - {{endDate}}</span>
            </div>
        </div>

        <div class="total-count">
            {{total}}
        </div>
    </section>

    <div class="main-title title-1">登記細項 | 只顯示當天最後五筆</div>
    
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
            <DashedLine v-if="index !== (recent.length-1)" />
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
      "SetLoading"
    ]),

    async showDuration(duration) {
        this.durations = duration

        if (duration === 'day') {
            await this.getDuration({
                start: dayjs(new Date()).add(-1, 'day').format('YYYY-MM-DD'),
                end: dayjs(new Date()).add(-1, 'day').format('YYYY-MM-DD'),
            })
        }
        
        if(duration === 'week') {
            await this.getDuration({
                start: dayjs(new Date()).add(-8, 'day').format('YYYY-MM-DD'),
                end: dayjs(new Date()).add(-1, 'day').format('YYYY-MM-DD'),
            })
        }

        if(duration === 'month') {
            await this.getDuration({
                start: dayjs(new Date()).add(-27, 'day').format('YYYY-MM-DD'),
                end: dayjs(new Date()).add(-1, 'day').format('YYYY-MM-DD'),
            })
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

    async getDuration({
        start,
        end,
    }) {
        this.SetLoading(true)
        this.startDate = start
        this.endDate = end
        this.total = (await durationCount({
            code: this.$route.params.code,
            secret: this.$route.params.secret,
            start,
            end,
        })).count
        this.SetLoading(false)
    }
  },
  
  async mounted(){
    const code = this.$route.params.code || 'EJC8LRSP'
    const secret = this.$route.params.secret || '4K33OPKSRX1P2G5XKMD1'
    
    this.CheckShop(code)
    // this.showDuration('day')
    
    this.showDuration('day')

    this.recent = await todayRecent({
        code,
        secret,
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

    .time-area {
        cursor: pointer;
        font-size: 14px;
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
    font-size: 12px;
    color: white;
}

.total-count {
    font-weight: bold;
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
