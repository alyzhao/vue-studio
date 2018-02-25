import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		lang: 'zh'
	},
	action: {
		SET_LANG_ZH: function({commit}) {
			commit('SET_LANG_ZH');
		},
		SET_LANG_EN: function({commit}) {
			commit('SET_LANG_EN');
		}
	},
	mutations: {
		SET_LANG_ZH: (state) => {
			state.lang = 'zh'
		},
		SET_LANG_EN: (state) => {
			state.lang = 'en'
		}
	},
	getters: {
		getLang: state => state.lang
	}
})

export default store;