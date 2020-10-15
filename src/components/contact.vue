<template lang="pug">
	div.contact
		contact-input(
			:contactId="contactId"
		)
		contact-info-list(
			:contactId="contactId"
		)
		button(
			type="button"
			@click="goBack"
		).button Go back
</template>

<script>
import contactInput from "./contactInput";
import contactInfoList from "./contactInfoList";
export default {
	props: ['contactId'],
	computed: {
	},
	components: {
		contactInput, contactInfoList
	},
	methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
	.contact {
		position: relative;
		margin-top: 100px;
		background: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2), 0 25px 50px 0 rgba(0, 0, 0, .1);
	}

	.button {
		position: absolute;
		bottom: -50px;
		background: transparent;
		border: none;
		color: firebrick;
		cursor: pointer;
		padding: 5px 10px;
		font-size: 16px;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2), 0 25px 50px 0 rgba(0, 0, 0, .1);
		transition: all .3s ease;

		&:hover {
			background: #fff;
		}
	}
</style>