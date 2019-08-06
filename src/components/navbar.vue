<template>
  <div class="navbar">
    <el-row>
      <el-col :span="4" style="height: 60px">
        <a href="..">
          <el-image
            :src="logo"
            class="logo"
            fit="scale-down"></el-image>
        </a>
      </el-col>
      <el-col :span="20">
        <el-menu :default-active="activeIndex"
                 :default-openeds="activeIndex2"
                 @select="handleSelect"
                 mode="horizontal"
                 style="border-bottom: none"
                 router="true">
          <el-submenu index="1">
            <template slot="title">关于我们</template>
            <el-menu-item index="intro" route="/aboutus/intro">社团介绍</el-menu-item>
            <el-menu-item index="struct" route="/aboutus/struct">社团结构</el-menu-item>
            <el-menu-item index="activity" route="/aboutus/activity">日常活动</el-menu-item>
          </el-submenu>
          <el-menu-item index="2" route="/joinus">加入我们</el-menu-item>
          <el-menu-item index="3"><a href="http://git.szutic.club" style="text-decoration: none">代码库</a></el-menu-item>
          <el-menu-item index="4"><a href="http://cloud.szutic.club" style="text-decoration: none">社团云盘</a></el-menu-item>
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
  computed: {
    activeIndex2: {
      get: function () {
        return [this.$route.params.active]
      },
      set: function () {
      }
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
