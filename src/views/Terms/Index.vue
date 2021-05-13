<template>
  <div class="terms pa-5 pages">
    <ShopInfo class="_section" v-if="isCustomer" />
    <p v-if="!isCustomer">店家申請</p>

    <section class="_section">
      <p class="_section-title">{{isCustomer? '加密型實名制蒐集個資保護條款' : '店家申請使用加密型實名制條款'}}</p>
      <div class="terms-content pa-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus provident impedit illum sint incidunt deleniti commodi laborum, autem nihil minus aliquam at nulla quo! Delectus dolor tempore reprehenderit vitae possimus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum reiciendis quod deleniti iste, esse, laudantium sint hic beatae nihil deserunt quam sed, sit corporis. Hic corrupti illo nesciunt ipsam!
        Provident ex animi, consequuntur autem odit sequi minus voluptatem ipsum est. Veniam, ducimus cupiditate dicta vitae culpa quo ipsa quas eligendi iure autem temporibus ratione nulla atque fugit hic nemo.
        Voluptas, omnis reiciendis. Repellendus accusamus veniam fugit necessitatibus, sint dolorem inventore quia labore, totam molestiae aliquam maiores doloribus sunt veritatis recusandae, cumque atque animi autem non minima voluptatum porro officiis!
        Sequi illum commodi officia ab, iste earum. Molestiae officia illum modi? Doloribus praesentium quia debitis assumenda sed harum exercitationem qui dolorum iure inventore. Culpa harum tempora commodi aspernatur, dolorum inventore.
        At esse, magni sunt ducimus distinctio mollitia debitis eligendi accusamus. Recusandae tempore inventore iusto corporis ipsum distinctio asperiores quisquam sequi doloribus explicabo sit rem rerum, saepe harum exercitationem tempora nostrum.
        Dignissimos cupiditate accusantium labore praesentium sed, fugiat aliquid eius minus animi enim repellat. Quaerat eius assumenda, sapiente animi suscipit obcaecati. Dolores reprehenderit rerum corrupti, quaerat similique veritatis neque perferendis beatae!
        Voluptatem, magni. Facilis sint vero ut cumque debitis quisquam iusto dignissimos consequatur provident impedit et ex voluptate culpa quibusdam quos voluptatum suscipit, voluptatem ipsa atque doloribus reiciendis excepturi? Facere, ipsa.
        Eveniet est voluptate necessitatibus et, quia ducimus odit? Officiis, explicabo provident inventore sapiente voluptates, magnam in magni quam veritatis culpa itaque, vel modi tempore. Accusantium cumque incidunt reiciendis distinctio nemo!
        A sunt et pariatur, dicta aut voluptas ex expedita tempore voluptatibus dolorem soluta earum odit! Itaque consequatur quia eveniet optio reprehenderit, deleniti non laborum molestias quisquam veritatis porro minima voluptas!
        Quia odio excepturi, amet officiis reprehenderit aperiam ducimus cumque vel voluptatibus provident recusandae neque perferendis unde possimus dolor quasi itaque in. Qui perferendis sed eaque exercitationem temporibus dolor quae corrupti.
        Illum ex molestiae maiores quae, quis eius? Culpa quam placeat fugiat vitae ipsum labore sunt assumenda fugit doloribus? Non distinctio rem officia adipisci consectetur. Ullam suscipit assumenda cupiditate praesentium reprehenderit.
        At repellendus veritatis enim voluptatum dolorum, tempore expedita repellat, nam beatae fugit ipsum quis a id, ab voluptatibus voluptate placeat? Omnis quos perferendis labore tempore minima inventore laudantium, ipsa a.
        Commodi corporis eos dicta laborum porro aut obcaecati fuga quo magni accusamus? Enim, ipsum quod, expedita voluptate recusandae quidem cum deserunt quos accusamus id temporibus labore iste a vitae minus.
        Ipsum illum veniam praesentium eaque illo suscipit numquam harum necessitatibus? Veritatis dolorem maiores commodi perspiciatis cupiditate itaque saepe obcaecati dolores dolor. Fugiat repellendus itaque, enim obcaecati suscipit veniam earum dolorum?
        Minima tempore, expedita numquam eveniet voluptates quam nulla illum praesentium harum repellendus enim iure atque voluptate natus neque quibusdam eius iste voluptas possimus quis doloremque quae aspernatur fugit! Eaque, architecto.
        Quos quis esse dolores nostrum perspiciatis tempore fugit debitis neque facilis recusandae pariatur asperiores quisquam modi inventore maxime ex dicta, id voluptatem, eius repellat dolorum ad vitae! Debitis, quia sed?
        Repudiandae nam, repellendus quia vero necessitatibus consectetur molestias ducimus perferendis odio eius natus minima voluptate ab tenetur alias odit accusantium ipsum excepturi, laudantium beatae totam reprehenderit. Excepturi labore alias inventore.
        Aspernatur, tempore repellendus placeat voluptatum facere natus! In, magni quo molestiae animi non deserunt dicta praesentium recusandae unde inventore repudiandae repellat id provident quia officia sunt dolorum laudantium impedit quasi!
        Ratione rerum, iste id sequi magni soluta voluptates repellat eveniet quisquam sapiente repudiandae. Iusto nesciunt molestias itaque, laborum fugit, ea, sequi placeat expedita quasi porro eligendi laboriosam distinctio sunt. Deleniti?
        Minima, id sunt eos aspernatur ipsa quibusdam magni, esse exercitationem magnam, veniam quia iure perspiciatis dolor sint! Veritatis earum ea accusamus culpa rem, fuga odit id recusandae. Unde, totam dicta!
      </div>
    </section>

    <section class="_section" v-if="isCustomer">
      <p class="_section-title">是否同意授權</p>
      <div class="button-group">
        <el-button plain class="_normal-btn" :class="{active : !agree}" @click="agree = false">不同意</el-button>
        <el-button plain class="_normal-btn" :class="{active : agree}" @click="agree = true">同意</el-button>
      </div>
    </section>
    <div style="height: 30px;"></div>

    <div class="_bottom-box">
      <el-button
        plain 
        class="_next-btn"
        @click="goSurvey"
      >
        下一步
      </el-button>
    </div>
  </div>
</template>

<script>
import ls from 'local-storage'
import ShopInfo from '@/components/ShopInfo'
export default {
  name:'Terms',
  components: {ShopInfo},
  data: () => ({
    isCustomer: true,
    termsContent: null,
    agree: true,
  }),
  created() {
    if (ls.get('terms')) {
      this.$router.push(`/survey/${this.$route.params.code}`)
    }
  },
  methods: {
    goSurvey() {
      if (this.agree) {
        ls.set('terms', true)
        this.$router.push(`/survey/${this.$route.params.code}`)
      } else {
        alert('需同意授權才可進行下一步')
      }
    }
  }
}
</script>
<style lang="scss">
@import url('/assets/scss/global.scss');

</style>
<style scoped lang="scss">
.terms-content{
  color: $primary-grey;
  background: $tertiary-grey;
  border-radius: $section-radius;
  text-align: justify;
}



</style>