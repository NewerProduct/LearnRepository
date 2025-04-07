
import { baseUrl } from "./config";
//首页列表
export function topList(){
	let listIds = ['19723756','3779629','2884035','3778678']
	return	new Promise(function(reslove,reject){
		uni.request({
			url:`${baseUrl}/toplist/detail`,
			success:res=>{
				let result = res.data.list;
				result.length =4;
				for (var i = 0; i < listIds.length; i++) {
					result[i].listId = listIds[i];
				}
				reslove(result);
			}
		})
	})
}
//榜单内列表
export function innerRankList(listId){
	
	return new Promise(function(resolve,reject){
		uni.request({
			url:`${baseUrl}/playlist/detail?id=` + listId,
			success:res=> {
				console.log(res);
				let songList = res.data.playlist;
				if(songList.tracks.length <=100){
					songList.tracks.length = 51;
				}else{
					songList.tracks.length = 101
				}
				
				resolve(songList);
			},
		})
		
	})
}