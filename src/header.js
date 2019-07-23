import { allEditions, currentEdition } from './editions-repo.js';

export default class HeaderViewModel {
  constructor() {
    this.editions = allEditions;
    this.isArchivesListVisible = ko.observable(false);
    this.currentEdition = currentEdition;

    document.onclick = () => this.isArchivesListVisible(false);
  }
}

ko.components.register('sol-header', {
    viewModel: HeaderViewModel,
    template: { require: 'text!src/header.html' },
});
