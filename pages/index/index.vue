<template>
	<view class="search-container">
		<up-search placeholder="请输入检索词" v-model="keyword" :clearabled="true"></up-search>
	</view>
	
	<view class="home-recommend">
		<view class="title for-you">为你推荐</view>
		<view class="title hot-policy">热门政策</view>
		<view class="title latest-policy">最新政策</view>
	</view>
</template>

<script setup>
import { ref,reactive, onMounted } from 'vue';
import dataManageApi from "@/api/dataManageApi";



const setPoliciesData = async () => {
	const hot_request = dataManageApi.getHotPolicy()	
	const latest_request = dataManageApi.getLatestPolicy()	
	const recommend_request = dataManageApi.getRecommendPolicy(8)	
	const hot_result = await hot_request
	const latest_result = await latest_request
	const recommend_result = await recommend_request
	
	console.log(hot_result)
	console.log(latest_result)
	console.log(recommend_result)
}


onMounted(() => {
	setPoliciesData()
})
</script>

<style lang="scss">

.search-container {
	padding: 10px;
}
.home-recommend {
	padding: 5px 20px;
	.title {
		font-size: 16px;
		font-weight: 600;
	}
}
</style>
