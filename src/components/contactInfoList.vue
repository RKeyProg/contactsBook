<template lang="pug">
	.contact-info
		ul.list
			li(v-for="key in contactKeysArray").item
				contact-info-list-item(
					:field="key"
					:contact="getContact"
				)
</template>

<script>
import contactInfoListItem from "./contactInfoListItem";
import { mapState } from "vuex";
export default {
	props: {
		contactId: Number
	},
	data() {
		return {
			contactIdObject: { //инициализация обхекта для помощи свойству getContact
				contactId: this.contactId,
			}
		}
	},
	components: {
		contactInfoListItem
	},
	computed: {
		...mapState({
			contacts: state => state.contacts.contacts
		}),
		contactKeysArray() { // удаление свойств id и phone из объекта для передачи объекта в цикл и вывода его свойст на экран
			let contactKeyArray = Object.keys(this.getContact);
			contactKeyArray.splice([contactKeyArray.indexOf("id")], 1);
			contactKeyArray.splice([contactKeyArray.indexOf("checked")], 1);
			return contactKeyArray;
		},
		getContact() { //извлечение контакта, который был выбран на первой странице, из store
			return this.contacts.find(function(item) {
				return item.id === this.contactId;
			}, this.contactIdObject);
		}
	}
}
</script>