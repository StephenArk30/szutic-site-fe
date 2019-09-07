<template>
    <div>
      <h1>群发短信工具</h1>
      <el-row style="display: flex;align-items: center;">
        <el-col :span="4" :offset="1"><p style="text-align: left">说明：在excel文件中请将列名设为括号中的英文</p></el-col>
        <el-col :span="10" :offset="1">
          <el-form ref="form" label-position="right">
            <el-form-item label="选择模板">
              <el-select v-model="uploadData.smsId" placeholder="请选择" @change="getSMStemplate">
                <el-option
                  v-for="item in smsList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8" :offset="1">
          <p style="text-align: left">{{content}}</p>
        </el-col>
      </el-row>
      <el-table
        :data="tableData"
        border
        max-height="300"
        style="width: 100%; margin-bottom: 20px">
        <el-table-column
          v-for="item in tableColumn"
          v-bind:key="item.id"
          :prop="item.prop"
          :label="item.label"
        >
        </el-table-column>
      </el-table>
      <el-form label-position="right" label-width="80px" style="width: 60%; margin: auto">
        <el-form-item label="口令" :rules="req">
          <el-input v-model="uploadData.token" type="password" show-password></el-input>
        </el-form-item>
        <el-upload
          ref="upload"
          :action="api"
          :on-change="handleChange"
          :on-remove="handleChange"
          :file-list="fileList"
          :data="uploadData"
          accept=".csv, .xlsx"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload" :disabled="haveNoFile">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传csv/xlsx文件</div>
        </el-upload>
        <el-button @click="getResponse" style="margin-top: 20px">拉取回复</el-button>
        <el-table
          :data="reply.data"
          border
          max-height="300"
          style="width: 100%; margin-bottom: 20px">
          <el-table-column
            v-for="item in replyColumn"
            v-bind:key="item.id"
            :prop="item.prop"
            :label="item.label"
          >
          </el-table-column>
        </el-table>
      </el-form>
    </div>
</template>

<script>
import XLSX from 'xlsx'
const rootApi = require('../config').api

export default {
  name: 'sendSMS',
  data () {
    return {
      haveNoFile: true,
      api: rootApi + '/sendsms/excel',
      smsList: [],
      tableData: [],
      tableColumn: [],
      fileList: [],
      content: '',
      req: {required: true, message: '请填写带*号字段'},
      uploadData: {
        smsId: '',
        token: ''
      },
      reply: [],
      replyColumn: [
        {
          prop: 'mobile',
          label: '手机号'
        },
        {
          prop: 'text',
          label: '回复内容'
        },
        {
          prop: 'time',
          label: '时间戳'
        }
      ]
    }
  },
  methods: {
    getSMStemplate () {
      this.$api.get('sms',
        {
          id: this.uploadData.smsId
        },
        res => {
          let sms = res.sms
          this.content = sms.content
          let {props, labels} = sms
          let len = Math.min(props.length, labels.length)
          for (let i = 0; i < len; i++) {
            this.tableColumn.push({
              prop: props[i],
              label: labels[i] + ' (' + props[i] + ')'
            })
          }
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
    submitUpload () {
      if (this.uploadData.token.length <= 0) {
        this.$message({
          showClose: true,
          message: '请输入口令',
          type: 'error'
        })
        return false
      } else if (this.uploadData.smsId.length <= 0) {
        this.$message({
          showClose: true,
          message: '请选择模板',
          type: 'error'
        })
        return false
      }
      this.$refs.upload.submit()
    },
    handleChange (file, fileList) {
      this.tableData = []
      this.haveNoFile = (fileList.length === 0)
      fileList.forEach(f => {
        let files = {0: f.raw}
        const that = this
        if (files.length <= 0) { // 如果没有文件名
          return false
        } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
          this.$Message.error('上传格式不正确，请上传xls或者xlsx格式')
          return false
        }

        const fileReader = new FileReader()
        fileReader.onload = (ev) => {
          try {
            const data = ev.target.result
            const workbook = XLSX.read(data, {
              type: 'binary'
            })
            const wsname = workbook.SheetNames[0]// 取第一张表
            const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname])// 生成json表格内容
            that.tableData = that.tableData.concat(ws)
            this.$refs.upload.value = ''
          } catch (e) {
            return false
          }
        }
        fileReader.readAsBinaryString(files[0])
      })
    },
    getResponse () {
      this.$api.get('sms/response',
        {
          id: this.uploadData.smsId,
          token: this.uploadData.token
        },
        res => {
          this.reply = res.resData
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
  },
  created () {
    this.$api.get('smsList', null,
      res => {
        this.smsList = res.smsList
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

</style>
