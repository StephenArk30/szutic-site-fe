<template>
  <div class="container">
    <el-form label-width="80px">
      <el-form-item label="口令" :rules="req">
        <el-input v-model="token" type="password" show-password></el-input>
      </el-form-item>
    </el-form>
    <!--发布题目-->
    <el-form ref="form[0]" :model="form[0]" label-width="80px">
      <h1 style="text-align: center">新建题目</h1>
      <el-form-item label="标题" :rules="req" prop="title">
        <el-input v-model="form[0].title"></el-input>
      </el-form-item>
      <el-form-item label="概要" prop="desc">
        <el-input type="textarea"
                  v-model="form[0].desc"
                  placeholder="题目概要"
                  :autosize="{ minRows: 3}"
                  maxlength="300"
                  show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="难度" prop="difficulty">
        <el-rate
          v-model="form[0].difficulty"
          :colors="colors">
        </el-rate>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea"
                  v-model="form[0].content"
                  placeholder="题目内容"
                  :autosize="{ minRows: 4}"
                  maxlength="1000"
                  show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="类别" :rules="req" prop="type">
        <el-select v-model="form[0].type" placeholder="题目类别">
          <el-option
            v-for='type in bonus_type'
            :key="type.id"
            :label="type.title"
            :value="type.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form[0]', 0)">发布题目</el-button>
        <el-button @click="onReset('form[0]')">重置</el-button>
      </el-form-item>
    </el-form>
    <!--发布题目类型-->
    <el-form ref="form[1]" :model="form[1]" label-width="80px">
      <h1 style="text-align: center">新建题目类型</h1>
      <el-form-item label="标题" :rules="req" prop="title">
        <el-input v-model="form[1].title"></el-input>
      </el-form-item>
      <el-form-item label="封面" prop="cover">
        <el-input v-model="form[1].cover" placeholder="封面url"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea"
                  v-model="form[1].desc"
                  placeholder="题目类型描述"
                  :autosize="{ minRows: 3}"
                  maxlength="300"
                  show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form[1]', 1)">发布题目类型</el-button>
        <el-button @click="onReset('form[1]')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'publishBonus',
  data () {
    return {
      bonus_type: [],
      token: '',
      form: [
        {
          title: '',
          content: '',
          difficulty: null,
          desc: '',
          type: ''
        },
        {
          title: '',
          desc: '',
          cover: ''
        }
      ],
      req: {required: true, message: '请填写带*号字段'},
      bonusAPI: ['createBonus', 'createBonusType']
    }
  },
  methods: {
    onSubmit: function (formName, i) {
      if (this.token.length <= 0) {
        this.$message({
          showClose: true,
          message: '请输入口令',
          type: 'error'
        })
        return false
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let formData = this.form[i]
          console.log(formData)
          this.$api.post(this.bonusAPI[i], {token: this.token, bonusInfo: formData},
            () => {
              this.$message({
                showClose: true,
                message: '发布成功！',
                type: 'success'
              })
            },
            err => {
              this.$message({
                showClose: true,
                message: err,
                type: 'error'
              })
            }
          )
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onReset (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () {
    this.$api.get('getBonusTypeName', null,
      res => {
        this.bonus_type = res.bonus_types
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
    padding: 20px 25%;
    text-align: left;
  }
</style>
