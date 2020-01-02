<template>
  <div id="app">
   <div class="top">
	     <router-view></router-view>
   </div>
 
   <div class="bottom">
	   <router-link to="/xiao">消息</router-link>
	   <router-link to="/ren">联系人</router-link>
	   <router-link to="/kong">空间</router-link>
   </div>
  </div>
</template>
<script>
	
</script>
<style lang="scss">
*{
	padding: 0;
	margin: 0;
	list-style: none;
}
html,body{
	width: 100%;
	height: 100%;
}
#app{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
.top{
	flex: 1;
}
.bottom{
	width: 100%;
	height: 50px;
	display: flex;
	line-height: 50px;
	border-top:1px solid #ccc;
	a{
		flex: 1;
		text-align: center;
		text-decoration: none;
		color: #000;
	}
}
</style>
