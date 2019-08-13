<template>
  <div class="container">
    <h1>{{bonus.title}}</h1>
    <div style="display: flex; margin: auto; width: fit-content">
      <div>难度</div>
      <el-rate
        v-if="bonus.difficulty"
        v-model="bonus.difficulty"
        disabled
        :show-text="text"
        text-color="#ff9900"/>
    </div>
    <div class="desc">{{bonus.desc}}</div>
    <mavon-editor
      style="margin-bottom: 30px; z-index: 1"
      v-html="content"
      :subfield="false"
      defaultOpen="preview"
      :toolbarsFlag="false"
      :boxShadow="false"></mavon-editor>
  </div>
</template>

<script>
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()
export default {
  name: 'bonusDetail',
  data () {
    return {
      bonus: {},
      text: ['贼简单', '简单', '一般', '难', '神仙题']
    }
  },
  computed: {
    content () {
      return md.render(this.bonus.content)
    }
  },
  created () {
    let id = this.$route.params.id
    this.$api.get('getBonusById', {id},
      res => {
        this.bonus = res.bonus
      },
      err => {
        this.$message({
          showClose: true,
          message: err,
          type: 'error'
        })
      }
    )
  }
}
</script>

<style scoped>
  .container {
    width: 60%;
    margin: auto;
  }
  .desc {
    text-align: left;
    margin: 20px 0 30px 0;
    padding-left: 20px;
    border-left: 10px solid #dddddd;
    color: #656565;
  }
</style>
