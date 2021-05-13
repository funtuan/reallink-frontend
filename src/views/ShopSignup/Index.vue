<template>
  <div class="shop-signup pages pa-5">
    <p>店家資料填寫</p>

    <section class="_section">
      <p class="_section-title">店家名稱</p>
      <el-input v-model="signupForm.shopName" placeholder="你的店家名稱"></el-input>
    </section>

    <section class="_section">
      <p class="_section-title">店家地址</p>
      <div class="select-group">
        <el-select v-model="signupForm.city" placeholder="選擇縣市">
          <el-option
            v-for="(city, index) in cities"
            :key="`option-${index}`"
            :label="city"
            :value="city"
          >
          </el-option>
        </el-select>

        <el-select v-model="signupForm.area" placeholder="選擇區域">
          <el-option
            v-for="(area, index) in areas"
            :key="`option-${index}`"
            :label="area"
            :value="area"
          >
          </el-option>
        </el-select>
        <el-input v-model="signupForm.address" placeholder="詳細地址"></el-input>
      </div>
    </section>

    <section class="_section">
      <p class="_section-title">負責人</p>
      <el-input v-model="signupForm.principal" placeholder="負責人名字"></el-input>
    </section>

    <section class="_section">
      <p class="_section-title">負責人電話</p>
      <el-input v-model="signupForm.phone" placeholder="負責人電話"></el-input>
    </section>

    <section class="_section">
      <p class="_section-title">E-mail</p>
      <el-input v-model="signupForm.email" placeholder="負責人E-mail"></el-input>
    </section>

    <el-button plain class="_next-btn">送出</el-button>
  </div>
</template>

<script>
export default {
  name: "ShopSignup",
  data: () => ({
    areas: ['永和區', '中和區', '中山區', '中正區'],
    cities: ['台北市', '新北市', '台中市'],
    signupForm: {
      shopName: '',
      city: '',
      area: '',
      address: '',
      principal: '',
      phone: '',
      email: '',
    },

  })
};
</script>
