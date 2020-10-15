<template lang="pug">
	div
		button(
			v-for="filter in filters"
			:class="{active : currentFilter === filter}"
			type="button"
			@click="filterCurrentContacts(filter)"
		) {{filter}}
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	data() {
		return {
			filters: ['all', 'important'],
			currentFilter: 'all'
		}
	},
	methods: {
		...mapMutations(['filterContacts']),
		filterCurrentContacts(filter) { // сохранение информации об выбранном фильтре в store
			this.currentFilter = filter;
			this.filterContacts(filter); // вызов мутации
		}
	}
}
</script>

<style lang="scss" scoped>
	button {
		margin-right: 20px;
		background: transparent;
		font-weight: 300;
		color: inherit;
		cursor: pointer;
		border: 1px solid transparent;
		border-radius: 3px;
		outline: none;

		&.active {
			border-color: rgba(175, 47, 47, .2);
		}

		&:last-child {
			margin-right: 0;
		}
	}
</style>