const contacts = {
	state: { // объявление переменных
		contacts: [],
		filter: "all"
	},
	mutations: {
		addContact(state, contact) { // мутация добавления контакта в массив contacts
			state.contacts.push(contact);
		},
		removeContact(state, contactId) { // мутация удаления контакта из массива contacts
			state.contacts = state.contacts.filter(contact => contact.id !== contactId);
		},
		checkContact(state, contact) { // мутация изменения состояния свойства checked у переданного контакта
			state.contacts = state.contacts.map(item => (item.id === contact.id ? contact : item));
		},
		filterContacts(state, filter) { // мутация изменения текущего фильтра контактов
			state.filter = filter;
		},
		addField(state, сontact) { // мутация добавления поля в переданный контакт
			state.contacts = state.contacts.map(item => (item.id === сontact.id ? сontact : item));
		},
		removeField(state, сontact) { // мутация удаления поля из переданног оконтакта
			state.contacts = state.contacts.map(item => (item.id === сontact.id ? сontact : item));
		}
	},
}

export default contacts;