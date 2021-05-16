<template>
  <div class="shop-signup pages pa-5">
    <p class="main-title">店家資料填寫</p>

    <el-form
      ref="form"
      :model="signupForm"
      :rules="rules"
    >
      <el-form-item class="_section" prop="name">
        <p class="_section-title">店家名稱</p>
        <el-input v-model="signupForm.name" placeholder="你的店家名稱"></el-input>
      </el-form-item>

        <p class="_section-title">店家地址</p>
        <div class="select-group _flex-between">
          <el-form-item class="_section" prop="city">
            <el-select v-model="signupForm.city" placeholder="選擇縣市">
              <el-option
                v-for="(city, index) in cities"
                :key="`option-${index}`"
                :label="city"
                :value="city"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <span style="width: 8px;"></span>
          <el-form-item class="_section" prop="area">
            <el-select v-model="signupForm.area" placeholder="選擇區域">
              <el-option
                v-for="(area, index) in areas"
                :key="`option-${index}`"
                :label="area"
                :value="area"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div style="height: 10px;"></div>
        <el-form-item class="_section" prop="address">
          <el-input v-model="signupForm.address" placeholder="詳細地址"></el-input>
        </el-form-item>

      <el-form-item class="_section">
        <p class="_section-title">負責人姓名</p>
        <el-form-item class="_section" prop="contactName">
          <el-input v-model="signupForm.contactName" placeholder="負責人姓名"></el-input>
        </el-form-item>
      </el-form-item>

      <el-form-item class="_section">
        <p class="_section-title">負責人電話</p>
        <el-form-item class="_section" prop="contactPhone">
          <el-input type="number" v-model="signupForm.contactPhone" placeholder="負責人電話" maxlength="10"></el-input>
        </el-form-item>
      </el-form-item>

      <el-form-item class="_section">
        <p class="_section-title">E-mail</p>
        <el-form-item class="_section" prop="contactEmail">
          <el-input v-model="signupForm.contactEmail" placeholder="負責人E-mail"></el-input>
        </el-form-item>
      </el-form-item>
      <div style="height: 14px;"></div>
      <div class="_bottom-box">
        <el-button plain class="_next-btn" @click="send">送出</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import zip from '@/data/zip'
import { create } from '@/api/shop';
import ls from 'local-storage'
import { mapActions } from 'vuex'

export default {
  name: "ShopSignup",

  data: () => ({
    cities: [],
    signupForm: {
      shopName: '',
      city: '',
      area: '',
      address: '',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
    },

    rules: {
      name: [
        { required: true, message: "請輸入店家名稱", trigger: "blur" },
        { min: 2, max: 20, message: "長度需在 2 到 20 字之間", trigger: "blur" }
      ],
      city: { required: true, message: "請選擇縣市", trigger: "blur" },
      area: { required: true, message: "請選擇鄉鎮市", trigger: "blur" },
      address: { required: true, message: "請輸入地址", trigger: "blur" },
      contactName: [
        { required: true, message: "請輸入負責人名稱", trigger: "blur" },
        { min: 2, max: 10, message: "長度需在 2 到 10 字之間", trigger: "blur" }
      ],
      contactPhone: [
        { required: true, message: "請輸入負責人電話", trigger: "blur" },
        { min: 7, max: 10, message: "長度需在 7 到 10 字之間", trigger: "blur" }
      ],
      contactEmail: { required: true, message: "請輸入Email", trigger: "blur" },
    }

  }),

  computed: {
    areas () {
      if (this.signupForm.city === '') {
        return []
      }
      return zip.filter(one => one.city === this.signupForm.city).map(one => one.area)
    },
  },

  created () {
    for (const one of zip) {
      if (!(this.cities.includes(one.city))) {
        this.cities.push(one.city)
      }
    }

    if (! ls.get('shopTerms')) {
      this.$router.push(`/shopTerm`)
    }
  },
  
  methods: {
    ...mapActions([
      'SetLoading',
    ]),

    async send() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.SetLoading(true)
          const shop = await create({
            ...this.signupForm,
            address: `${this.signupForm.city}${this.signupForm.area}${this.signupForm.address}`
          })

          console.log('shop', shop)
          this.$router.push(`/download/${shop.code}`)
          this.SetLoading(false)
        }
      })
    },
  }
}
</script>


<style lang="scss" scoped>
.main-title {
  margin-top: 6px;
  margin-bottom: -2px;
}
</style>
