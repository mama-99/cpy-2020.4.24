<template>
	<div class="register">
		<div>
			<img src="../assets/img/vivologo.png" :style="{width:'40%'}" alt="">
			<p class="title">注册</p>
			<br>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less" scoped>
	.register{
		padding: 1.2rem 0.2rem;
		.title{
			font-size: 0.4rem;
			margin-top: 0.2rem;
		}
		
	}
</style>
