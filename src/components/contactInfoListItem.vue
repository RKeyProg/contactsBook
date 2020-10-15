<template lang="pug">
div
	.contact-info__item
		.field-wrapper(
			:class="{active: change}"
		)
			.field-title {{field}}:
			input.input(
				v-if="this.change"
				type="text",
				v-model="contact[field]",
				@keydown.enter="applyChanges"
			)
			input.input(
				v-else
				type="text",
				v-model="contact[field]",
				@keydown.enter="applyChanges"
				readonly,
				ref="fieldValue"
			)
			.buttons
				.buttons-apply(
					v-if="this.change"
				)
					button(
						@click="applyChanges"
					).button Apply
					button(
						@click="notApplyChanges"
					).button Cancel
				.buttos-edit(
					v-else
				)
					button(
						@click="changeOnEditMode"
					).button Change
					button(
						v-if="field !== 'name' && field !== 'phone'"
						type="button"
						@click="removeExistedField"
					).remove x
				
</template>

<script>
import { mapState, mapMutations} from "vuex";
export default {
	props: {
		field: String,
		contact: Object
	},
	data() {
		return {
			change: false,
			beforeChangeField: '' // значение поля для метода notApplyChanges
		}
	},
	computed: {
    ...mapState({
			contacts: state => state.contacts.contacts
    }),
    getContact() { //извлечение контакта, который был выбран на первой странице, из store
			return this.contacts.find(function(item) {
				return item.id === this.id;
			}, this.contact);
		}
  },
	methods: {
		...mapMutations(['removeField']),
		changeOnEditMode() { // изменение состояния поля ввода
			this.beforeChangeField = this.contact[this.field];
			this.change = !this.change;
			this.$refs.fieldValue.focus();
		},
		applyChanges() { // применене изменений в поле вводе
			if (confirm("Are you sure you want to change the data?")) this.change = !this.change;
		},
		notApplyChanges() { // если нажать кнопку calncel и отменить изменения в поле ввода
			if (confirm("Are you sure you want to undo the changes?")) {
				this.contact[this.field] = this.beforeChangeField;
				this.change = !this.change;
			}
		},
		removeExistedField() { // удаление существующего поля 
			let isRight = confirm("Are you sure you want to delete a this field?");
			delete this.getContact[this.field];
			if (isRight) this.removeField(this.getContact); // передача контакта в store для замены
		}
	}
}
</script>

<style lang="scss" scoped>
.contact-info__item {
	display: flex;
	justify-content: space-between;
	border-top: 1px solid #bdbdbd;
}

.field-title, .input {
	font-size: 16px;
}

.field-title {
	cursor: default;
	padding-right: 10px;
	text-transform: capitalize;
	color: #757575;
}

.input {
	flex: 1;
	border: none;
	outline: none;
	background: inherit;
	padding: 16px 0;
}

.button {
	font-size: 14px;
	visibility: hidden;
	cursor: pointer;
	border: none;
	background: transparent;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: background .3s ease;
	margin-right: 10px;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		background: #f5f5f5;
	}
}

.field-wrapper {
  position: relative;
	display: flex;
	padding: 0 30px;
	align-items: center;
	border: 1px solid transparent;
  background: rgba($color: #000000, $alpha: 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  line-height: 1.4em;
  outline: none;
  width: 100%;

	&:hover {
		.button {
			visibility: visible;
		}

		.remove {
			visibility: visible;
		}
	}

	&.active {
		background: #f7f1f1;
	}
}

.remove {
	background: transparent;
	border: none;
	color: firebrick;
	cursor: pointer;
	font-size: 20px;
	visibility: hidden;
	margin-left: 10px;
}

</style>