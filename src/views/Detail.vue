<template>
	<div class="detail" v-if="data">
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(image, index) in data[0].imgs" :key="index">
		    <img :src="image.picSrc" :style="{width:'100%'}"/>
		  </van-swipe-item>
		</van-swipe>
		
		<div class="goback" @click="goBack">
			<van-icon name="arrow-left" size="0.4rem" color="#fff" />
		</div>
		<div class="right" @click="showShare = true">
			<van-icon name="ellipsis" size="0.4rem" color="#fff" />
		</div>
		
		<div :style="{padding:'0.2rem 0.4rem',textAlign:'left'}">
			<p class="price">￥{{good.price}}</p>
			<p class="name">{{good.type}}</p>
			<p class="spec">{{data[0].spec}}</p>
		</div>
		
		<div class="flex">
			<div v-for="(item,index) in para" :key="index" :style="{width:'25%'}">
				<van-icon :name="item.icon" size="0.4rem"/>
				<p :style="{fontSize:'0.24rem'}">{{item.name}}</p>
				<p :style="{fontSize:'0.2rem'}">{{item.desc}}</p>
			</div>
		</div>
		
		<div class="cell" @click="show=true">
			<van-cell :style="{backgroundColor: '#fafafa',borderRadius:'0.24rem'}" title="已选" is-link :value="data[0].name" />
		</div>
		
		<van-goods-action>
		  <van-goods-action-icon icon="wap-home-o" text="首页" @click="$router.push('/')" />
		  <van-goods-action-icon icon="service-o" text="客服"  />
		  <van-goods-action-icon icon="cart-o" text="购物车" @click="$router.push('/cart')" />
		  <van-goods-action-button text="加入购物车" type="warning" @click="show=true"/>
		  <van-goods-action-button text="立即购买" type="danger" @click="show=true"/>
		</van-goods-action>
		
		
		<van-share-sheet
		  v-model="showShare"
		  title="立即分享给好友"
		  :options="options"
		  @select="onSelect"
		/>
		
		<van-sku
		  v-model="show"
		  :sku="sku"
		  :goods="goods"
		  :hide-stock="sku.hide_stock"
		  @sku-selected="onSkuSelect"
		  @buy-clicked="onBuyClicked"
		  @add-cart="onAddCartClicked"
		/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Notify } from 'vant';
	
	Vue.use(Notify);
	export default{
		data(){
			return{
				show:false,
				data:null,
				good:null,
				showShare: false,
				options: [
					{ name: '微信', icon: 'wechat' },
					{ name: '微博', icon: 'weibo' },
					{ name: '复制链接', icon: 'link' },
					{ name: '分享海报', icon: 'poster' },
					{ name: '二维码', icon: 'qrcode' },
				],
				para:[
					{ name: '处理器', icon: 'birthday-cake-o',desc:'晓龙765' },
					{ name: '运行', icon: 'hotel-o',desc:'6GB' },
					{ name: '内存', icon: 'desktop-o',desc:'128GB' },
					{ name: '电池容量', icon: 'completed',desc:'5000mAh' },
					{ name: '屏幕分辨率', icon: 'expand-o',desc:'2400x1080' },
				],
				sku: {
				  tree: [
				  ],
				  list: [
				  ],
				  hide_stock: false // 是否隐藏剩余库存
				},
				goods: {
				  picture: null
				}
			}
		},
		created(){
			this.$api.getDetailAPI({
				
			}).then(res=>{
				//console.log(res.data[0])
				this.data = res.data;
				this.good = this.data[0].imgs[0]
				this.goods.picture = this.data.img_url,
				
				this.data.forEach((cat)=>{
					//console.log(cat)
					let list = [];
					cat.imgs.forEach(c=>{
						list.push({
							id:c.id,
							name:c.type,
							imgUrl:c.picSrc,
							previewImgUrl:c.picSrc,
						})
					})
					this.sku.tree.push({
						k:"规格",
						v:list,
						k_s:`s${cat.id}`
					})
				})
				
				
				this.data[0].imgs.forEach(god=>{
					let g = {
						id:god.id,
						price:god.price*100,
						stock_num:100
					}
					//console.log(god)
					this.data[0].imgs.forEach(p=>{
						g['s'+this.data[0].id] = p.id--
					})
					this.sku.list.push(g)
				})
			}).catch(err=>{
				console.log("请求失败",err)
			})
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			},
			onSelect(option) {
			  Toast(option.name);
			  this.showShare = false;
			},
			onBuyClicked(){
				alert("购买")
			},
			onAddCartClicked(good){
				//console.log(good)
				this.$store.commit("addGoods",{
					id:this.good.id,
					name:this.good.type,
					img:this.good.picSrc,
					price:this.good.price,
					num:good.selectedNum
				})
				Notify({type:'success',message:'添加购物车成功'});
			},
			onSkuSelect(good){
				//console.log(good)
				this.data[0].imgs.forEach((item,index)=>{
					//console.log(item)
					if(item.id == (good.skuValue.id-5)){
						this.good = item
					}
				})
				//console.log(this.good)
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail{
		margin-bottom: 50px;
		.goback{
			position: absolute;
			top: 10px;
			left: 10px;
			width: 0.6rem;
			height: 0.6rem;
			border-radius: 50%;
			background-color: rgba(0,0,0,.5);
			z-index: 10;
			line-height: 0.74rem;
		}
		.right{
			position: absolute;
			top: 10px;
			right: 10px;
			width: 0.6rem;
			height: 0.6rem;
			border-radius: 50%;
			background-color: rgba(0,0,0,.5);
			z-index: 10;
			line-height: 0.74rem;
		}
		.name{
			font-size: 0.36rem;
		}
		.spec{
			font-size: 0.26rem;
			margin-top: 0.1rem;
		}
		.price{
			font-size: 0.44rem;
			color: #f81200;
			margin-bottom: 0.1rem;
		}
		.flex{
			margin-top: 0.2rem;
			overflow-x: scroll;
			div{
				flex-shrink: 0;
				border-right: 1px solid #eee;
			}
		}
		.flex::-webkit-scrollbar{
			display: none;
		}
		.cell{
			margin-top: 0.2rem;
			padding: 0 0.2rem;
			.van-cell__title{
				flex:1;
				font-size: 0.24rem;
			}
			.van-cell__value{
				flex:6;
				font-size: 0.24rem;
			}
		}
	}
</style>
