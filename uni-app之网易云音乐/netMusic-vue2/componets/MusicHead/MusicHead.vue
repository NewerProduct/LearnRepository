<template>
	<view>
		<div class="musicHead">
			<div class="musicHeadIcon" v-if="icon" :style="{color:color}">	
			<uni-icons type="back" size="30" @click="handleToBack()"></uni-icons>
			 |
			<uni-icons type="home" size="30" @click="handleToHome()"></uni-icons>
			</div>
			{{ title }}
		</div>
	</view>
</template>

<script>
	export default {
		props:['title','icon','color'],
		data() {
			return {
				
			}
		},
		methods: {
			handleToBack(){
				uni.navigateBack()
			},
			handleToHome(){
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
			
		}
	}
</script>

<style>
.musicHead{
	width: 100%; 
	height: 75px;
	font-size: 16px;
	text-align: center;
	line-height: 80px;
	color: black;
	position: relative;
}
.musicHeadIcon{
	position: absolute; left: 8px; top: 33px; width: 90px; height: 31px; 
	display: flex;
	justify-content: space-evenly;
	line-height: 31px;
	border-radius: 15px;
	background-color: rgb(0, 0, 0,0.3);
}
</style>
