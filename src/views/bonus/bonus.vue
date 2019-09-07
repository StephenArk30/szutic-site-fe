<template>
  <div>
    <h1>加分题目</h1>
    <p>想在暑假剩余的时间里领先你的同学们一步吗？跟着我们提供的教程来学习并写出属于你的新手项目！</p>
    <p>请将成果通过发送到我们的邮箱，格式为：</p>
    <div class="email">
      <p>收件人：szutic@qq.com</p>
      <p>主题：姓名-学号-作品名</p>
      <p>正文：作品介绍、作品链接（如果有）、你的学习和制作过程</p>
      <p>附件：源文件（代码或多媒体压缩包），如果你的项目可以直接在网上观看，请在正文里附链接，无需源文件</p>
    </div>
    <div v-loading="loading" style="min-height: 100px">
      <el-row
        class="bonus_block"
        v-for="(type, index) in bonus_type"
        :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" @click.native="toList(type.id)">
          <el-row>
            <el-col :span="16">
              <img :src="type.cover" class="cover">
            </el-col>
            <el-col :span="8" style="text-align: left">
              <div style="padding: 14px;">
                <div style="margin: 10px 0 7px 0; font-size: 20px">{{type.title}}</div>
                <div class="desc">{{ type.desc }}</div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bonus',
  data () {
    return {
      bonus_type: [],
      loading: true
    }
  },
  created () {
    this.$api.get('getBonusType', null,
      res => {
        this.bonus_type = res.bonus_types
        this.loading = false
      },
      err => {
        this.$message({
          showClose: true,
          message: err,
          type: 'error'
        })
      }
    )
  },
  methods: {
    toList: function (type) {
      this.$router.push('bonuslist/' + type)
    }
  }
}
</script>

<style scoped>
  .email {
    border: 1px solid #9b9b9b;
    border-bottom: none;
    width: fit-content;
    margin: auto
  }
  .email p {
    text-align: left;
    border-bottom: 1px solid #9b9b9b;
    padding: 20px;
    margin: 0;
  }

  .bonus_block {
    width: 50%;
    margin: 20px auto;
  }
  .desc {
    font-size: 13px;
    color: #999;
  }

  .cover {
    width: 100%;
    display: block;
  }
</style>
