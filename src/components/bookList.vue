<template lang="pug">
	.book-list
		.content
			ul.list
				li.item(v-for="contact in contacts") <!-- перебор контактов -->
					book-list-item(
						:contact="contact"
					)
		.footer
			.footer-content
				.counter {{contacts.length}} contacts in the book	 
				.filter
					book-list-filter

</template>

<script>
import bookListFilter from "./bookListFilter";
import bookListItem from "./bookListItem";

export default {
	props: {
		contacts: Array // прием массива контактов, переданных в родительском компоненте
	},
	components: {
		bookListFilter, bookListItem
	}
}
</script>

<style lang="scss" scoped>
	.list {
		font-size: 24px;
		border-bottom: 1px solid #ededed;
	}

	.item {
		border-bottom: 1px solid #ededed;
		&:last-child {
			border-bottom: none;
		}
	}

	.footer {
		color: #777;
		padding: 10px 15px;
		text-align: center;
		position: relative;
		font-size: 14px;

		&:before {
			content: '';
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			height: 50px;
			overflow: hidden;
			box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
		}
	}

	.footer-content {
		display: flex;
		position: relative;
		align-self: center;
	}

	.filter {
		flex: 1;
	}
</style>