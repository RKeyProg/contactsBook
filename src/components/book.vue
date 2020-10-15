<template lang="pug">
	div
		div.book
			book-input
			book-list(
				v-if="contacts.length > 0" 
				:contacts="filteredContacts"
			) <!-- если поле не пустое -->
</template>

<script>
import bookInput from "./bookInput"; //импорт компонента поля ввода
import bookList from "./bookList"; //импорт компонента списка контактов
import { mapState } from "vuex"; //импорт вспомогательной функции vuex

export default {
	components: {
		bookInput, bookList
	},
	computed: {
		...mapState({
			contacts: state => state.contacts.contacts, // импорт массива контактов из vuex
			filter: state => state.contacts.filter,
		}),
		filteredContacts() { // определение отображения элементов при выбранном фильтре
			switch(this.filter) {
				case 'all' :
					return this.contacts; // все контакты
				case 'important' :
					return this.contacts.filter(item => item.checked === true); // только отмеченные пользователем
			}
		}
	},
}
</script>

<style lang="scss" scoped>
	.book {
		margin-top: 100px;
		background: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2), 0 25px 50px 0 rgba(0, 0, 0, .1);
	}
</style>