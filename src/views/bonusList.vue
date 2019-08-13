<template>
    <div style="padding-top: 1px">
      <el-card
        class="box-card"
        v-for="(bonus, index) in bonuses"
        :key="index"
        shadow="hover"
      >
        <div slot="header">
          <el-row>
          <el-col :span="10" style="text-align: left">{{bonus.title}}</el-col>
          <el-col :span="10" style="text-align: left">
            <el-rate
              v-if="bonus.difficulty"
              v-model="bonus.difficulty"
              disabled
              show-text
              :texts="text"
              text-color="#ff9900"/>
          </el-col>
          <el-col :span="4">
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click.native="toDetail(bonus.id)"
            >查看详情</el-button>
          </el-col>
          </el-row>
        </div>
        <div class="desc">
          {{bonus.desc}}
        </div>
      </el-card>
    </div>
</template>

<script>
export default {
  name: 'bonusList',
  data () {
    return {
      bonuses: [],
      text: ['贼简单', '简单', '一般', '难', '神仙题']
    }
  },
  created () {
    let type = this.$route.params.type
    this.$api.get('getBonusByType', {type},
      res => {
        this.bonuses = res.bonus
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
    toDetail: function (id) {
      this.$router.push('../bonusdetail/' + id)
    }
  }
}
</script>

<style scoped>
  .box-card {
    width: 480px;
    margin: 30px auto;
  }
  .desc {
    font-size: 14px;
    text-align: left;
    color: #999999;
  }
</style>
