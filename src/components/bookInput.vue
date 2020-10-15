<template lang="pug">
.book-input
  .input-wrapper
    .error {{ validation.firstError('contact.name') }} <!-- сообщение об ошибке -->
    input.input(
      type="text",
      placeholder="Contact name",
      autofocus,
      v-model="contact.name",
      :class="{ 'valid-error': validation.hasError('contact.name') }",
      @keydown.enter="addNewContact"
    )
  .input-wrapper
    .error {{ validation.firstError('contact.phone') }}
    input.input(
      type="text",
      placeholder="Phone",
      v-model="contact.phone",
      :class="{ 'valid-error': validation.hasError('contact.phone') }",
      @keydown.enter="addNewContact"
    )
</template>

<script>
import { Validator } from "simple-vue-validator"; // импорт simple-vue-validation для проверки корректности введенных данных
import { mapMutations } from "vuex"; //импорт вспомогательной функции Vuex

let uniqId = 0;
export default {
  mixins: [require("simple-vue-validator").mixin], // для simple-vue-validation
  data() {
    return {
      contact: {
        id: 0,
        name: "",
        phone: "",
        checked: false,
      },
    };
  },
  validators: { // валидация полей
    "contact.name"(value) {
      // проверка на пустоту, только латинским символам
      return Validator.value(value).required("Can't be empty").regex('^[A-Za-z]*$', 'The name can only contain Latin characters');
    },
    "contact.phone"(value) {
      // проверка на пустоту, только цифрам. Ограничение минимальной и максимальной длины поля
			return Validator.value(value).required("Can't be empty").integer("Check the entered number (unsigned +)").minLength(10, 'Not matched').maxLength(12, 'Must have at least 12 characters');
    },
  },
  methods: {
    ...mapMutations(['addContact']),
    addNewContact() {
      this.$validate().then((seccess) => { // если валидация прошла успешно
        if (!seccess) return;

        uniqId++;
        this.contact.id = uniqId;

        this.addContact({ ...this.contact }); // вызов мутации

        this.contact.name = "";
        this.contact.phone = "";
        this.validation.reset(); // сброс информации об ошибках, чтобы скрыть сообщение об ошибке
      });
    },
  },
};
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

.valid-error {
  border: 1px solid firebrick;
}

.book-input {
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