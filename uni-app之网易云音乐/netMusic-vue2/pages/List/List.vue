<template>
	<view class="list">
		<MusicHeadVue title='歌单' :icon='true' color='white'></MusicHeadVue>
		<view class="container">
		<scroll-view scroll-y="true">
			<view class="item">
				<view class="item-top">
					<h1>{{songList.name}}</h1>
					<img :src="songList.coverImgUrl" />
					
				</view>
				<view class="item-list"> 
					<view class="item-list-text" v-for="(item,index) in songList.tracks" :key="index">
						<view class="item-list-details">
							{{index + 1}}.
							<strong style="margin-left: 10px;">{{item.name}}</strong>
							<span v-if='item.alia[0]'>({{item.alia[0]}})</span>
							<view class="singer">
								{{item.ar[0].name}}
							</view>
								
							
						</view>
					</view>
				</view>
			</view>
		
		</scroll-view>
		</view>
	</view>
</template>

<script>
	import { innerRankList } from '../../common/api';
	import MusicHeadVue from '../../componets/MusicHead/MusicHead.vue';
	export default {
		components:{
			MusicHeadVue
		},
		data() {
			return {
				songList:[]
				
			}
		},
		onLoad(options) {
			console.log(options.listId);
			innerRankList(options.listId).then((res)=>{
				this.songList = res
				console.log('111',this.songList);
			})
			
		},
		methods: {
			
		}
	}
</script>

<style>
.item{
	
}
.item-top{
	display: flex;
	justify-content: center;
	width: 100%;
	height: 250px;
}
.item text{
	display: flex;
	justify-content: center;
	
}
.item-list-text{
	width: 100%;
	height: 70px;
	
}
.item-list-text text{
	width: 200px;
	margin-top: 5rpx;
	margin-left: -15px;
	
}
.item-top img{
	display: flex;
	width:100% ;
	height: 250px;
	position: absolute;
	object-fit: cover;
	
}
.item-top h1{
	display: inline-flex;
}
.item-list-details{
	display: flex;
	
}
.singer{
    position: absolute;
    margin-top: 25px;
    margin-left: 40px;
}
</style>
