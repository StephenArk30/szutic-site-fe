<template>
  <div style="height: 100%">
    <el-row class="top">
      <el-col :span="8">
        <slogan/>
      </el-col>
      <el-col :span="8" class="btn_panel">
        <el-row><el-button type="primary" @click="applicant">马上报名</el-button></el-row>
        <el-row><el-button plain="" @click="bonus ">加分题</el-button></el-row>
      </el-col>
    </el-row>
    <div style="width: 80%; margin: auto; text-align: left">
      <el-steps align-center :active="4">
        <el-step title="填写报名表"></el-step>
        <el-step title="关注公众号" description="关注“深大TIC”"></el-step>
        <el-step title="加入招新群" description="进入公众号点击“招新”"></el-step>
        <el-step title="择日面试" description="请留意公众号推文面试时间"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
import slogan from '../../components/slogan'

export default {
  name: 'joinUs',
  components: {slogan},
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
  .top {
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn_panel {
    margin-top: 10px;
  }
  .btn_panel button {
    margin: 10px 20px;
    width: 200px;
    height: 60px;
    font-size: 20px;
    float: left;
  }
</style>
