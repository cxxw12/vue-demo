<template>
  <div class="hello" id="pdfDom">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>

    <ul>
      <!-- <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li> -->
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"  target="_blank" rel="noopener">eslint</a></li>
    </ul>

    <!-- <img alt="Vue logo1" id="img" src="http://cms-bucket.ws.126.net/2021/0114/003bc5dej00qmxg5o0089c000s600e3c.jpg?_d='+ new Date().getTime() + '" /> -->
		<img alt="Vue logo1" id="img"  src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>

    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>

<!--    <img alt="Vue logo1" src="http://cms-bucket.ws.126.net/2021/011/4/003bc5dej00qmxg5o0089c000s600e3c.jpg?_d='+ new Date().getTime() + '" />

    <h3>Essential Links</h3>

    <img alt="Vue logo1" src="http://cms-bucket.ws.126.net/2021/0114/003bc5dej00qmxg5o0089c000s600e3c.jpg?_d='+ new Date().getTime() + '" />

    <h3>Essential Links</h3><img alt="Vue logo1" src="http://cms-bucket.ws.126.net/2021/0114/003bc5dej00qmxg5o0089c000s600e3c.jpg?_d='+ new Date().getTime() + '" />

    <h3>Essential Links</h3>

    <img alt="Vue logo1" src="http://cms-bucket.ws.126.net/2021/0114/003bc5dej00qmxg5o0089c000s600e3c.jpg?_d='+ new Date().getTime() + '" />

    <h3>Essential Links</h3>
    <img alt="Vue logo1" src="http://cms-bucket.ws.126.net/2021/0114/003bc5dej00qmxg5o0089c000s600e3c.jpg?_d='+ new Date().getTime() + '" />

    <h3>Essential Links</h3>
    <img alt="Vue logo1" src="http://cms-bucket.ws.126.net/2021/0114/003bc5dej00qmxg5o0089c000s600e3c.jpg?_d='+ new Date().getTime() + '" />

    <h3>Essential Links</h3>-->

<!--    给自己需要导出的html部分.定义id为"pdfDom".此部分将会是pdf显示的部分-->
    <el-button @click="getPdf()">导出PDF</el-button>

  </div>

</template>

<script>


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
	mounted() {
		
		console.log(document.getElementById('img').src)
		document.getElementById('img').crossOrigin = '*'
		document.getElementById('img').src = document.getElementById('img').src+'?_d='+ new Date().getTime()
		
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
