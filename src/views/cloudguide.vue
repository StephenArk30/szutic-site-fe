<template>
    <div>
      <h1>腾创社团云盘说明</h1>
      <div class="container">
        <p>社团账号：szutic</p>
        <p>云盘密码内部共享</p>
        <p>基于开源项目nextcloud的社团云盘。暂未开放个人账号注册。如果你想在自己的服务器上搭建nextcloud，请参考：<a href="https://nextcloud.com">Nextcloud</a>。</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cloudguide'
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
