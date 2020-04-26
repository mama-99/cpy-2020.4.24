<template>
	<div class="class" v-if="data">
		<div class="flex">
			<router-link to="/">
				<van-icon name="cross" color="#777" size="0.5rem"/>
			</router-link>
			<van-search v-model="value" placeholder="请输入搜索关键词" disabled @click="$router.push('/search')" />
			<router-link to="/cart">
				<van-icon name="cart-o" color="#777" size="0.5rem"/>
			</router-link>
		</div>
		<van-collapse v-model="activeName" accordion>
		  <van-collapse-item title="IQOO专区" name="1">
			  <div class="flex class_flex">
					<Good :good="item" v-for="(item,index) in data" :style="{width:'50%',border:'1px solid #eee'}"></Good>
			  </div>
		  </van-collapse-item>
		  <van-collapse-item title="NEX系列" name="2">
			  <div class="flex class_flex">
				  <Good :good="item" v-for="(item,index) in data" :style="{width:'50%',border:'1px solid #eee'}"></Good>
			  </div>
		  </van-collapse-item>
		  <van-collapse-item title="X系列" name="3">
			  <div class="flex class_flex">
			  		<Good :good="item" v-for="(item,index) in data" :style="{width:'50%',border:'1px solid #eee'}"></Good>
			  </div>
		  </van-collapse-item>
		  <van-collapse-item title="S系列" name="4">
			  <div class="flex class_flex">
			  		<Good :good="item" v-for="(item,index) in data" :style="{width:'50%',border:'1px solid #eee'}"></Good>
			  </div>
		  </van-collapse-item>
		  <van-collapse-item title="Z系列" name="5">
			  <div class="flex class_flex">
			  		<Good :good="item" v-for="(item,index) in data" :style="{width:'50%',border:'1px solid #eee'}"></Good>
			  </div>
		  </van-collapse-item>
		  <van-collapse-item title="Y系列" name="6">
			  <div class="flex class_flex">
			  		<Good :good="item" v-for="(item,index) in data" :style="{width:'50%',border:'1px solid #eee'}"></Good>
			  </div>
		  </van-collapse-item>
		  <van-collapse-item title="U系列" name="7">
			  <div class="flex class_flex">
			  		<Good :good="item" v-for="(item,index) in data" :style="{width:'50%',border:'1px solid #eee'}"></Good>
			  </div>
		  </van-collapse-item>
		  <van-collapse-item title="真无线耳机" name="8">
			  <div class="flex class_flex">
			  		<Good :good="item" v-for="(item,index) in data" :style="{width:'50%',border:'1px solid #eee'}"></Good>
			  </div>
		  </van-collapse-item>
		</van-collapse>
	</div>
</template>

<script>
	import Good from '@/components/Good.vue'
	export default{
		components:{
			Good
		},
		data(){
			return{
				activeName: '1',
				value:"",
				data:null
			}
		},
		created(){
			this.$api.getClassAPI({
				
			}).then(res=>{
				console.log(res.data)
				this.data = res.data
			}).catch(err=>{
				console.log("出错",err)
			})
		},
		methods:{
			change(){
				this.$api.getClassAPI({
					
				}).then(res=>{
					console.log(res.data)
					this.data = res.data
				}).catch(err=>{
					console.log("出错",err)
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.class{
		.flex{
			justify-content: space-between;
			align-items: center;
			padding: 0.1rem 0.4rem;
			&.class_flex{
				padding: 0;
				flex-wrap: wrap;
			}
			.van-search{
				flex-grow: 1;
			}
		}
	}
</style>
