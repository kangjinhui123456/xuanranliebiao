<template>
	<div>
		<div class="tu"><img src="../assets/2.jpg" class="imgg" /></div>
		<input type="text" placeholder="搜索" v-model="aaa" @keydown.enter="fn"/>
		<main>
			<div v-for="(item, index) in list" :key="index" class="da">
				<div class="d1"><img src="../assets/1.jpg" /></div>
				<div class="d2">
					<h4>{{ item.title }}</h4>
					<p>{{ item.wen }}</p>
				</div>
				<div class="d3">{{ item.time }}</div>
			</div>
		</main>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			list: [],
			aaa: ''
		};
	},
	methods:{
		fn(){
			let bbb=this.list.filter((item,index)=>{
				return item.title.includes(this.aaa)
			})
			this.list=bbb;
		
			
		}
	},
	mounted() {
		axios.get('/getlist').then(res => {
			this.list = res.data.data;
		});
	}
};
</script>

<style lang="scss">
.tu {
	width: 100%;
	height: 50px;
	.imgg {
		width: 375px;
		height: 100%;
	}
}
.da {
	width: 100%;
	height: 103px;
	border-bottom: 1px solid #ccc;
	display: flex;
	.d1 {
		width: 70px;
		height: 70px;
		margin-top: 10px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.d2 {
		width: 150px;
		height: 100px;
		line-height: 30px;
		margin-top: 20px;
		margin-left: 10px;
	}
	.d3 {
		flex: 1;
		text-align: right;
		line-height: 30px;
		line-height: 100px;
		margin-right: 10px;
	}
}
input {
	width: 360px;
	height: 30px;
	margin: 5px 5px;
}
</style>
