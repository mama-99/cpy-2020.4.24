<template>
	<div class="cart">
		<van-nav-bar title="购物车">
		  <template #left>
		    <van-icon name="arrow-left" size="18" @click="$router.go(-1)"/>
		  </template>
		  <template #right>
		    <van-icon name="ellipsis" size="18" />
		  </template>
		</van-nav-bar>
		<div class="container" >
			<div v-if="$store.getters.getGoods.length < 1">
				<van-icon name="cart-o" size="2rem" />
				<h2>您的购物车里还没有任何商品</h2>
				<br>
				<van-button round type="info" plain to="/">去逛逛</van-button>
			</div>
			
			
			<van-card v-for="(item,index) in $store.getters.getGoods"
			  :num="item.num"
			  :price="item.price"
			  desc="描述信息"
			  :title="item.name"
			  :thumb="item.img"
			>
			  <template #tags>
			    <van-tag plain type="danger">标签</van-tag>
			    <van-tag plain type="danger">标签</van-tag>
			  </template>
			  <template #footer>
				<van-button size="mini" style="font-size: 0.3rem;" @click="removeNum(item.id,item.num)">-</van-button>
				<van-button size="mini" style="font-size: 0.3rem;" @click="addNum(item.id,item.num)">+</van-button>
			    <van-button size="mini" type="warning" :to="'/detail/'+item.id">进入店铺</van-button>
			    <van-button size="mini" type="danger" @click="remove(item.id)">移除</van-button>
			  </template>
			</van-card>
			
		</div>
		
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Dialog } from 'vant';
	
	// 全局注册
	Vue.use(Dialog);
	export default{
		methods:{
			remove(id){
				Dialog.confirm({
				  title: '提示',
				  message: '确认要移除该商品？',
				}).then(() => {
				    this.$store.commit("removeGoods",id)
				}).catch(() => {
				    
				});
			},
			addNum(id,num){
				this.$store.commit("addGoodsNum",id)
			},
			removeNum(id,num){
				if(num>1){
					this.$store.commit("removeGoodsNum",id)
				}	
			}
		}
	}
</script>

<style lang="less" scoped>
	.cart{
		.container{
			position: absolute;
			top: 0;
			bottom: 0;
			width: 100%;
			padding: 1.2rem 0.2rem 0.2rem;
			background-color: #ccc;
		}
	}
</style>
