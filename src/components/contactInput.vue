<template lang="pug">
.contact-input
  .input-wrapper
    .error {{ validation.firstError('forChange.title') }}
    input.input(
      type="text",
      placeholder="Title",
      v-model="forChange.title",
      :class="{ 'valid-error': validation.hasError('forChange.title') }",
      @keydown.enter="addNewField"
    )
  .input-wrapper
    .error {{ validation.firstError('forChange.value') }}
    input.input(
      type="text",
      placeholder="Value",
      v-model="forChange.value",
      :class="{ 'valid-error': validation.hasError('forChange.value') }",
      @keydown.enter="addNewField"
    )
</template>

<script>
import { Validator } from "simple-vue-validator"; // импорт simple-vue-validation для проверки корректности введенных данных
import { mapMutations, mapState } from 'vuex'
export default {
  mixins: [require("simple-vue-validator").mixin], // для simple-vue-validation
	props: {
		contactId: Number
	},
  data() {
    return {
      forChange: {
        title: '',
        value: ''
      },
      contactIdObject: { //инициализация обхекта для помощи свойству getContact
				contactId: this.contactId,
			}
    }
  },
  validators: { // валидация полей
    "forChange.title"(value) {
      // проверка на пустоту
      return Validator.value(value).required("Can't be empty").maxLength(15, 'Must have at least 15 characters');;
    },
    "forChange.value"(value) {
      // проверка на пустоту, только цифрам. Ограничение минимальной и максимальной длины поля
			return Validator.value(value).required("Can't be empty").maxLength(20, 'Must have at least 20 characters');
    },
  },
  computed: {
    ...mapState({
			contacts: state => state.contacts.contacts
    }),
    getContact() { //извлечение контакта, который был выбран на первой странице, из store
			return this.contacts.find(function(item) {
				return item.id === this.contactId;
			}, this.contactIdObject);
		}
  },
  methods: {
    ...mapMutations(['addField']),
    addNewField() { // добавление нового поля контакта
      this.$validate().then((seccess) => { // если валидация прошла успешно
        if (!seccess) return;
        
        this.getContact[this.forChange.title] = this.forChange.value;
        this.addField(this.getContact);
        this.forChange.title = '';
        this.forChange.value = '';
        this.validation.reset(); // сброс информации об ошибках, чтобы скрыть сообщение об ошибке
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 5%;
    right: 0;
    width: 1px;
    height: 90%;
    background-color: rgba(0, 0, 0, 0.03);
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
}

.valid-error {
  border: 1px solid firebrick;
}

.input {
  font-size: 24px;
  padding: 16px 16px 16px 30px;
  border: 1px solid transparent;
  background: rgba($color: #000000, $alpha: 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  line-height: 1.4em;
  outline: none;
  color: inherit;
  width: 100%;
}

.contact-input {
	position: relative;
  display: flex;
}

.error {
  position: absolute;
  bottom: 100%;
  left: 0;
  color: firebrick;
}

</style>