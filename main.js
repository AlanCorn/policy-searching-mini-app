import App from './App.vue'
import uviewPlus from 'uview-plus'
import store from '@/store';

// #ifndef VUE3
import Vue from 'vue'
import httpInterceptor from '@/common/http.interceptor.js'


Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App
})
Vue.use(httpInterceptor, app)
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(uviewPlus)
	return {
		app
	}
}
// #endif
