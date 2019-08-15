<template>
    <div>
      <h1>腾创代码库说明</h1>
      <div class="container">
        <p>腾创代码库是一个以开源gogs为基础的开放代码仓库。任何人都可以注册、创建并管理自己的代码项目，和github一样。</p>
        <p>git是一个版本管理系统，是多人协作必不可少的工具，其应用范围囊括了写作、办公等，在开发中更是必需品。如果你是学计算机的同学，建议你尽早掌握这项技能。如果你是其他专业的同学，相信我，git总会在某些地方给你帮助。</p>
        <p>学习资源链接：<a href="https://liaoxuefeng.com/wiki/896043488029600" target="_blank">廖雪峰的git教程</a>。</p>
        <p>如果你想在自己的服务器上搭建Gogs：<a href="https://github.com/gogs/gogs" target="_blank">gogs</a>。</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'gitguide'
}
</script>

<style scoped>
  .container {
    width: 60%;
    text-align: left;
    margin: auto;
  }
  .container a {
    text-decoration: none;
    color: dodgerblue;
  }
</style>
