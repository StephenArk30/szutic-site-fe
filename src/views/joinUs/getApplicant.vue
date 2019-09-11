<template>
    <div class="container">
      <el-form label-width="97px">
        <el-form-item label="口令">
          <el-input v-model="token" type="password" show-password></el-input>
        </el-form-item>
        <el-row style="margin: 0 0 20px 0">
          <el-col :span="16" :offset="4"><el-input placeholder="搜索" v-model="condition"></el-input></el-col>
          <el-col :span="3" :offset="1"><el-button icon="el-icon-search" circle @click="searchApplicant"></el-button></el-col>
        </el-row>
        <el-form-item><el-button type="primary" @click="getApplicant">查看报名情况</el-button></el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        border
        max-height="1000"
        style="width: 100%; margin-bottom: 20px">
        <el-table-column
          v-for="item in tableColumn"
          v-bind:key="item.id"
          :prop="item.prop"
          :label="item.label"
        >
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
const util = require('../../utils/util')

export default {
  name: 'getApplicant',
  data () {
    return {
      token: '',
      condition: '',
      tableData: [],
      tableColumn: []
    }
  },
  methods: {
    getApplicant () {
      let that = this
      this.$api.get('applicant/list', {token: that.token},
        res => {
          let { applicantList } = res
          that.tableColumn = []
          for (let key in applicantList[0]) {
            that.tableColumn.push({
              label: key,
              prop: key
            })
          }
          if (applicantList[0].hasOwnProperty('updatedAt')) {
            applicantList.forEach(applicant => {
              applicant.updatedAt = util.format(new Date(applicant.updatedAt), 'yyyy/MM/dd hh:mm:ss')
            })
          }
          if (applicantList[0].hasOwnProperty('createdAt')) {
            applicantList.forEach(applicant => {
              applicant.updatedAt = util.format(new Date(applicant.createdAt), 'yyyy/MM/dd hh:mm:ss')
            })
          }
          that.tableData = applicantList
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
    searchApplicant () {
      let that = this
      this.$api.get('applicant/search', {
        condition: that.condition,
        token: that.token
      },
      res => {
        let { applicantList } = res
        that.tableColumn = []
        for (let key in applicantList[0]) {
          that.tableColumn.push({
            label: key,
            prop: key
          })
        }
        if (applicantList[0].hasOwnProperty('updatedAt')) {
          applicantList.forEach(applicant => {
            applicant.updatedAt = util.format(new Date(applicant.updatedAt), 'yyyy/MM/dd hh:mm:ss')
          })
        }
        if (applicantList[0].hasOwnProperty('createdAt')) {
          applicantList.forEach(applicant => {
            applicant.updatedAt = util.format(new Date(applicant.createdAt), 'yyyy/MM/dd hh:mm:ss')
          })
        }
        that.tableData = applicantList
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
}
</script>

<style scoped>
  .container {
    padding: 20px 25%;
    text-align: left;
  }
</style>
