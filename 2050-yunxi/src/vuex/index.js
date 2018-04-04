import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		lang: 'zh'
	},
	actions: {
		SET_LANG: function({commit}, lang) {
			commit('SET_LANG', lang);
		},
	},
	mutations: {
		SET_LANG: (state, lang) => {
			state.lang = lang;
		},
	},
	getters: {
		getLang: state => state.lang
	}
})

export default store;