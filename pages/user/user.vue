<template>
	<view>
		<view class="u-flex u-flex-y-center user-box u-p-l-30 u-p-r-20 u-p-b-30  u-p-t-30">
			<view class="u-m-r-2">
				<up-avatar :src="pic" size="70"></up-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-m-l-20">uview plus</view>
			</view>
		</view>
		<view class="u-m-t-20">
			<up-cell-group>
				<up-cell icon="star" title="收藏夹" @click="handleCenterPush('/pages/user/collection/collection')"></up-cell>
				<up-cell icon="photo" title="浏览记录" @click="handleCenterPush('/pages/user/history/history')"></up-cell>
				<up-cell icon="heart" title="信息修改" @click="handleCenterPush('/pages/user/edit/edit')"></up-cell>
			</up-cell-group>
		</view>

		<view class="u-m-t-20">
			<up-cell-group>
				<up-cell icon="setting" title="设置" @click="handleCenterPush('/pages/user/setting/setting')"></up-cell>
			</up-cell-group>
		</view>
	</view>
</template>

<script setup>
	
	const handleCenterPush = (path) =>{
		uni.navigateTo({
			url:path
		})
	}
</script>

<style lang="scss">

</style>