import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import contacts from "./modules/contacts";

export const store = new Vuex.Store({
	modules: {
		contacts
	}
});