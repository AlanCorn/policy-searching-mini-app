<template>
	<view>
		<view class="wrap">
			<view class="top"></view>
			<view class="content">
				<view class="title">欢迎登录</view>
				<input class="u-border-bottom" type="number" v-model="loginForm.telephone" placeholder="请输入手机号" />
				<view class="tips">未注册的手机号将自动注册</view>
				<input class="u-border-bottom" type="password" v-model="loginForm.password" placeholder="请输入密码" />
				<button @tap="handleLogin" type="primary" class="login-button">登录</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue';
	import userApi from '@/api/userApi/index.js'
	import { useStore } from "vuex";
	
	const store = useStore();

	const loginForm = reactive({
		telephone: '',
		password: ''
	})

	const handleLogin = async () => {
		// const results = userApi.userLoginByPwd()
		store.dispatch("user/login", loginForm).then(() => {
			if (store.state.user.state <= 4) {
				router.push("register");
			} else {
				router.back();
			}
		})
	}
</script>

<style lang="scss" scoped>
	.wrap {
		font-size: 28rpx;

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
			}

			input {
				text-align: left;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
			}

			.tips {
				color: $u-info;
				margin-bottom: 60rpx;
				margin-top: 8rpx;
				margin-left: 4px;
				font-size: 12px;
			}

			.login-button {
				margin-top: 30px;
				border: none;
				font-size: 30rpx;
				padding: 12rpx 0;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: $u-tips-color;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}
	}
</style>