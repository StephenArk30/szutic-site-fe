<template>
  <div class="navbar">
    <el-row>
      <el-col :span="4" style="height: 60px">
        <a href="http://www.szutic.club">
          <el-image
            :src="logo"
            class="logo"
            fit="scale-down"></el-image>
        </a>
      </el-col>
      <el-col :span="20">
        <el-menu :default-active="activeIndex" @select="handleSelect" mode="horizontal" style="border-bottom: none">
          <el-menu-item index="1">关于我们</el-menu-item>
          <el-menu-item index="2"><a href="http://git.szutic.club" style="text-decoration: none">代码库</a></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import logo from '../assets/brand.png'

export default {
  data () {
    return {
      activeIndex: '0',
      logo
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  .navbar {
    position: fixed;
    width: 100%;
    top: 0;
    opacity: 0.8;
    border-bottom: solid 1px #e6e6e6;
    z-index: 99;
    background-color: #FFF;
  }

  .logo {
    height: 40px;
    margin: 10px 0;
  }

</style>
