<template>
	<view>
		<MusicHeadVue title='网易云音乐' :icon="false"></MusicHeadVue>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="index-search">
					<span>
						<uni-icons type='search'></uni-icons>
						<input type="text" placeholder="搜索歌曲" />
					</span>
				</view>
				<view class="index-list" v-for="(item,index) in topList" :key="index" @click="handleToList(item.listId)">
					<view class="index-list-item">
						<view class="index-list-img">
							<img :src='item.coverImgUrl' />
							<text>{{item.updateFrequency}}</text>
						</view>
						<view class="index-list-text">
							<view v-for="(item,index) in item.tracks" :key='index'>
								{{index + 1}}.{{item.first}} - {{item.second}}
							</view>
						</view>
					</view>
				</view>
		
			</scroll-view>
		</view>
	</view>


</template>

<script>
	import { topList } from "../../common/api"
	import MusicHeadVue from "../../componets/MusicHead/MusicHead.vue"
	export default {
		//注册组件
		components: {
			MusicHeadVue
		},
		data() {
			return {
				topList:[],
				title: '网易云音乐'
			}
		},
		methods:{
			handleToList(listId){
				uni.navigateTo({
					url:'../List/List?listId='+ listId
				})
			}
		},
		onLoad() {
			topList().then((res)=>{
				console.log(res);
				this.topList = res;
			})
		},
	}
</script>

<style>
	.index-list{
		margin: 0 30px;
	}
	.index-list-item{
		display: flex;
		margin-bottom: 34rpx;
	}

	.index-list-img{
		top: 10px;
		width: 212rpx;
		height: 212rpx;
		position: relative;
		border-radius: 30rpx;
		overflow: hidden;
		margin-right: 22rpx;
		
	}
	.index-list-img text{
		position: absolute;
		left: 12rpx;
		bottom:16rpx;
		color: white;
		font-size: 24rpx;
		line-height: 66rpx;
		
	}
	.index-list-img img{
		width: 100%;
		height: 100%;
	}
	.index-list-text{
		margin-top: 10px;
	}
.index-search span{
	display: flex;
	margin: 70rpx,30px,30rpx,30rpx;
	background-color: rgb(0, 0, 0,0.1);
	height: 35px;
	align-items: center;
	border-radius: 50rpx;
	margin-top: 15px;
	margin-left: 10px;
	width: 90%;
	
}
.index-search input{
	font-size: 20px;
	flex: 1;
}
.index-search uni-icons{
	margin-right: 26rpx;
	margin-left: 28rpx;
}

</style>