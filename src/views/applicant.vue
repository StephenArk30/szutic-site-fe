<template>
    <div class="container">
      <div class="tips">带*为必填，你可以多次提交报名表，我们将参考最新的提交。</div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="*姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="*学号" placeholder="请填写学号以验证你的身份">
          <el-input v-model="form.card_id"></el-input>
        </el-form-item>
        <el-form-item label="*电话">
          <el-input v-model="form.phone" placeholder="请填写可用的号码，以便我们联系你"></el-input>
        </el-form-item>
        <el-form-item label="哪里人">
          <el-input v-model="form.native_home" placeholder="老乡见老乡"></el-input>
        </el-form-item>
        <el-form-item label="*性别">
          <el-select v-model="form.gender" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="*专业">
          <el-select v-model="form.major" placeholder="请选择专业">
            <el-option
              v-for='major in majors'
              :key="major.value"
              :label="major.label"
              :value="major.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="*简介">
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
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即报名</el-button>
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
      majors: [
        {
          label: '计算机科学与技术',
          value: 0
        }, {
          label: '软件工程',
          value: 1
        }
      ],
      form: {
        name: '',
        gender: '',
        card_id: '',
        major: '',
        intro: '',
        phone: '',
        native_home: '',
        skills: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.log('submit!')
    },
    onCancel: function () {
      this.$router.push('.')
    }
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
