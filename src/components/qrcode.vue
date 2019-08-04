<template>
    <el-popover
      placement="left"
      trigger="hover"
      class="qrcode"
    >
      <p style="text-align: center">关注我们</p>
      <el-image
        :src="qrcode"
        style="width: 180px"
      ></el-image>
      <el-image
        :src="qrcodeIcon"
        slot="reference"
      ></el-image>
    </el-popover>
</template>

<script>
import qrcode from '../assets/qrcode.jpg'
import qrcodeIcon from '../assets/icons/qr_code.png'

export default {
  name: 'qrcode',
  data () {
    return {
      qrcode,
      qrcodeIcon
    }
  }
}
</script>

<style scoped>
  .qrcode {
    position: fixed;
    right: 5px;
    top: 70%;
    width: 25px;
    background-color: #FFF;
    border: solid 1px #333333;
    padding: 3px;
    align-content: center;
    display: flex;
  }
</style>
