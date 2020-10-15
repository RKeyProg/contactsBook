import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter); // добавление свойств VueRouter во Vue

import book from './components/book.vue';
import contact from './components/contact.vue';

const routes = [
	{
		path: '/', // по стандартному пути открыть компонент book
		component: book
	},
	{
		path: '/contact/:contactName', // по пути /contact/:contactName открывать компонент contact
		component: contact,
		name: 'toContact',
		props: true // разрешить передавать входные параметры
	}
];

export default new VueRouter({ routes, mode: "history" }); // mode: "history" убрать # из адреса