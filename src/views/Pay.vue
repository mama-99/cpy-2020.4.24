<template>
	<div class="pay" v-if="data">
		
		<img :src="data.img_url" alt="" :style="{width:'40%',marginTop:'1rem'}">
		<h3>{{data.name}}</h3>
		<br>
		<h4 :style="{color:'#f12100'}">￥{{data.salePrice}}</h4>
		<br><br>
		<van-password-input
		  :value="value"
		  info="密码为 6 位数字"
		  :focused="showKeyboard"
		  @focus="showKeyboard = true"
		/>
		<!-- 数字键盘 -->
		<van-number-keyboard
		  :show="showKeyboard"
		  @input="onInput"
		  @delete="onDelete"
		  @blur="showKeyboard = false"
		/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Dialog } from 'vant';
	
	// 全局注册
	Vue.use(Dialog);
	export default{
		data() {
		    return {
			  data:null,
		      value: '',
		      showKeyboard: true,
		    };
		  },
		  created(){
			  this.$api.getDetailAPI({
				  
			  }).then(res=>{
				  this.data = res.data[0];
				  console.log(this.data)
			  }).catch(err=>{
				  
			  })
		  },
		  methods: {
		    onInput(key) {
		      this.value = (this.value + key).slice(0, 6);
			  if(this.value.length == 6){
				  Dialog.confirm({
				    title: '提示',
				    message: '付款成功！前往我的订单查看',
				  }).then(() => {
				      this.$store.commit("addForm",{
						  img:this.data.img_url,
						  name:this.data.name,
						  price:this.data.salePrice
					  })
					  this.$router.push('/goodform')
				  }).catch(() => {
				      this.$router.go(-1)
				  });
			  }
		    },
		    onDelete() {
		      this.value = this.value.slice(0, this.value.length - 1);
		    },
		  },
	}
</script>

<style lang="less" scoped>
	.pay{
		overflow: hidden;
	}
</style>
