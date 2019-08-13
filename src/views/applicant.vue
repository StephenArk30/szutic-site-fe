<template>
    <div class="container">
      <div class="tips">带*为必填，你可以多次提交报名表，我们将参考最新的提交。</div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名" :rules="req" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="学号" :rules="[req, num]" prop="cardId" placeholder="请填写学号以验证你的身份">
          <el-input v-model.number="form.cardId"></el-input>
        </el-form-item>
        <el-form-item label="电话" :rules="[req, num]" prop="phone">
          <el-input v-model.number="form.phone" placeholder="请填写可用的号码，以便我们联系你"></el-input>
        </el-form-item>
        <el-form-item label="微信号">
          <el-input v-model="form.wechat" placeholder="你的微信号"></el-input>
        </el-form-item>
        <el-form-item label="哪里人">
          <el-input v-model="form.nativeHome" placeholder="老乡见老乡"></el-input>
        </el-form-item>
        <el-form-item label="性别" :rules="req" prop="gender">
          <el-select v-model="form.gender" placeholder="请选择性别">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业" :rules="req" prop="major">
          <el-select v-model="form.major" placeholder="请选择专业">
            <el-option
              v-for='major in majors'
              :key="major.value"
              :label="major.label"
              :value="major.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="第一志愿" :rules="req" prop="firstDepart">
          <el-radio-group v-model="form.firstDepart">
            <el-radio-button :label="0">策划部</el-radio-button>
            <el-radio-button :label="1">运营部</el-radio-button>
            <el-radio-button :label="2">设计部</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="第二志愿" :rules="req" prop="secondDepart">
          <el-radio-group v-model="form.secondDepart">
            <el-radio-button :label="0">策划部</el-radio-button>
            <el-radio-button :label="1">运营部</el-radio-button>
            <el-radio-button :label="2">设计部</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="简介" :rules="req" prop="intro">
          <el-input type="textarea"
                    v-model="form.intro"
                    placeholder="例如初高中、特长爱好等"
                    :autosize="{ minRows: 4}"
                    maxlength="300"
                    show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="技能树">
          <el-input type="textarea"
                    v-model="form.skills"
                    placeholder="擅长的技能，做过的项目/作品成果，获奖经历等（鼓励放链接）"
                    :autosize="{ minRows: 3}"
                    maxlength="300"
                    show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="报名理由">
          <el-input type="textarea"
                    v-model="form.reason"
                    placeholder="加入社团的理由和你对社团的认识及期望"
                    :autosize="{ minRows: 2}"
                    maxlength="100"
                    show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">立即报名</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'applicant',
  data () {
    return {
      majors: [],
      form: {
        name: '',
        gender: null,
        cardId: '',
        major: '',
        intro: '',
        phone: '',
        nativeHome: '',
        skills: '',
        wechat: '',
        firstDepart: 0,
        secondDepart: 1
      },
      req: {required: true, message: '请填写带*号字段'},
      num: {type: 'number', message: '必须为数字值'}
    }
  },
  methods: {
    onSubmit: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let formData = this.form
          formData.cardId = (formData.cardId).toString()
          formData.phone = (formData.phone).toString()
          console.log(formData)
          this.$api.post('applicant', {userInfo: formData},
            () => {
              this.$message({
                showClose: true,
                message: '报名成功！',
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
    onCancel: function () {
      this.$router.push('.')
    }
  },
  created () {
    this.$api.get('major', null,
      res => {
        this.majors = res.majorList
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
  .tips {
    font-size: small;
    margin: 10px 35px;
  }
</style>
