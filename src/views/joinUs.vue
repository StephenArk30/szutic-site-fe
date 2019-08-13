<template>
  <div>
    <el-row class="top">
      <el-col :span="5" class="slogan">
        <div>你离腾讯</div>
        <div>只差一个腾创</div>
      </el-col>
      <el-col :span="5" class="btn_panel">
        <el-row><el-button type="primary" @click="applicant">马上报名</el-button></el-row>
        <el-row><el-button plain="" @click="bonus ">加分题</el-button></el-row>
      </el-col>
    </el-row>
    <div style="width: 80%; margin: auto; text-align: left">
      <el-steps align-center active="4">
        <el-step title="填写报名表"></el-step>
        <el-step title="关注公众号"></el-step>
        <el-step title="加入招新群"></el-step>
        <el-step title="择日面试" description="请留意公众号推文面试时间"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: 'joinUs',
  methods: {
    applicant: function () {
      this.$router.push('joinus/applicant')
    },
    bonus: function () {
      this.$router.push('joinus/bonus')
    }
  }
}
</script>

<style scoped>
  .slogan {
    text-align: left;
    font-size: 40px;
    font-weight: bold;
  }
  .top {
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn_panel button {
    margin: 10px;
    width: 200px;
    height: 60px;
    font-size: 20px;
  }
</style>
