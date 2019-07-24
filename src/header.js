import { allEditions, currentEdition } from './editions-repo.js';

export default class HeaderViewModel {
    editions = allEditions;
    currentEdition = currentEdition;
    isArchivesListVisible = ko.observable(false);

    constructor() {
        document.onclick = () => this.isArchivesListVisible(false);
    }
}

ko.components.register('sol-header', {
    viewModel: HeaderViewModel,
    template: { require: 'text!src/header.html' },
});
