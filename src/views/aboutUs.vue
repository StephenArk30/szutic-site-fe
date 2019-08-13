<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane disabled="disabled"/>
    <el-tab-pane disabled="disabled"/>
    <el-tab-pane disabled="disabled"/>
    <el-tab-pane label="社团介绍" name="intro">
      <div class="panel">
        <el-collapse v-model="activeName" accordion="true" style="border: none">
          <el-collapse-item title="社团简介" name="1" style="border: none">
            <div class="card">
              <div>深圳大学腾讯创新俱乐部简称深大腾创(Tencent Innovation Club of Shenzhen University, SZUTIC)。腾创是以互联网产品创新为核心的活动的高校学生社团，是深圳大学与腾讯公司直接对接举办活动的社团，是深圳大学与腾讯公司进行双向交流的桥梁。</div>
              <div>社团以技术为导向，以创新互联网项目为基本，锻炼成员的组织能力、创新思维、编程、多媒体等技术，积累项目经验。</div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="社团历史" name="2">
            <div class="card">
              <div>深圳大学腾讯创新俱乐部简称深大腾创，又叫“SZUTIC”。</div>
              <div>深大腾创于2006年11月28日由腾讯CEO陈一丹宣布成立。</div>
              <div>经历诸多波折后，2010年10月10日，在新主席坚少的带领下，协同小骏师兄与梅君姐姐，进行了架构重组。</div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="社团LOGO" name="3">
            <el-row class="card">
              <el-col :span="5"><el-image :src="logo" style="width: 120px"/></el-col>
              <el-col :span="19"><div style="text-align: left">blablablabla</div></el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-tab-pane>
    <el-tab-pane label="社团结构" name="struct">
      <div class="vmid">
        <el-col :span="6">
          <el-card shadow="hover">
            <div slot="header" class="clearfix">
              <el-image :src="logo" class="icon"/>
              <div>主席团</div>
            </div>
            <div style="text-align: left">
              社团最高领导团队，负责与腾讯公司直接对接交流，是大型事项的决策者，并且直接管理三大下属部门。
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" :offset="2">
          <el-row>
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <el-image :src="logo" class="icon"/>
                <div>策划部</div>
              </div>
              <div style="text-align: left">
                主要负责俱乐部大小活动的策划组织工作。在这里，你是一个组织者，活动全程由你负责。你可以学到关于团队协作、团队管理知识，提升你的沟通能力、处理事情能力和对事件整体把握的能力。
              </div>
            </el-card>
          </el-row>
          <el-row style="margin-top: 10px">
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <el-image :src="logo" class="icon"/>
                <div>运营部</div>
              </div>
              <div style="text-align: left">
                主要负责俱乐部公众号的运营，和线上宣传文案的撰写。大家在这里可以学到关于微信公众号这一个新的运营平台的一些东西，微信号的火爆不用多说，它也是我们社团向外展示的主要接口。
              </div>
            </el-card>
          </el-row>
          <el-row style="margin: 10px 0 20px">
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <el-image :src="logo" class="icon"/>
                <div>设计部</div>
              </div>
              <div style="text-align: left">
                主要负责俱乐部平面宣传部分的设计。PS大神教你如何绘制出一幅炫酷的设计，实现你脑海的美丽画面。每次活动都是你展现大脑洞的机会。
              </div>
            </el-card>
          </el-row>
        </el-col>
      </div>
    </el-tab-pane>
    <el-tab-pane label="日常活动" name="activity">日常活动</el-tab-pane>
  </el-tabs>
</template>

<script>
import logo from '../assets/logo.png'

export default {
  name: 'aboutUs',
  data () {
    return {
      logo
    }
  },
  computed: {
    activeName: {
      get: function () {
        return this.$route.params.active
      },
      set: function () {}
    }
  },
  methods: {
    handleClick (tab) {
      this.$router.push('./' + tab.name)
    }
  }
}
</script>

<style scoped>
  .panel {
    width: 80%;
    margin: 0 auto;
  }
  .card {
    margin: 0 30px 0 100px;
    text-align: left;
  }
  .clearfix {
    text-align: left;
    display: flex;
    align-items: center;
  }
  .icon {
    width: 25px;
    margin-right: 8px;
  }
  .vmid {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
