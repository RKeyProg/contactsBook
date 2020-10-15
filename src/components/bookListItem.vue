<template lang="pug">
	.book-item(:class="{checked: contact.checked}") <!-- добавление класса cheked, если свойство checked равно true -->
		label.label
			.input-block
				input(
					type="checkbox"
					@change="checkContactAsImportant"
					:checked="contact.checked"
				).input
			.title
				.name {{contact.name}}
				.phone {{contact.phone}}
		.button
			router-link(
				tag="button"
				:to="{name: 'toContact', params: {contactName: contact.name, contactId: contact.id}}"
			).link →  <!-- переход на страницу, содержащую информацию о контакте -->
		.button
			button(
				type="button"
				@click="removeExistedContact"
			).remove x
</template>

<script>
import {mapMutations} from "vuex";

export default {
	props: {
		contact: Object
	},
	methods: {
		...mapMutations(['removeContact', 'checkContact']), // обозначение мутаций
		removeExistedContact() {
			let isRight = confirm("Are you sure you want to delete a contact?");
			if (isRight) this.removeContact(this.contact.id); // вызов мутации, если действие подтверждено
		},
		checkContactAsImportant(e) { //изменение состояния checkbox для обозначения важных контактов
			const contactItem = {
				...this.contact,
				checked: e.target.checked,
			};

			this.checkContact(contactItem);
		}
	}
}
</script>

<style lang="scss" scoped>
	.book-item {
		display: flex;
		align-items: center;

		&:hover {
			.remove {
				visibility: visible;
			}
			
			.link {
				visibility: visible;
			}
		}

		&.checked {
			background: #f7f1f1;
		}
	}

	.link {
		visibility: hidden;
		cursor: pointer;
		border: none;
		background: transparent;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		transition: background .3s ease;

		&:hover {
			background: #f5f5f5;
		}
	}

	.label {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.input-block {
		width: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.input {
		display: none;
	}

	.title {
		display: flex;
		flex-direction: column;
		padding: 13px 0;
	}

	.name {
		display: block;
		line-height: 1.2;
	}

	.phone {
		font-size: 16px;
		color: #bdbdbd;
	}

	.button {
		width: 40px;
	}

	.remove {
		background: transparent;
		border: none;
		color: firebrick;
		cursor: pointer;
		font-size: 20px;
		visibility: hidden;
	}
</style>