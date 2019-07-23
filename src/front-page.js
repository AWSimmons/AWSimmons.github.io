import './story.js';
import { currentEdition } from './editions-repo.js';

class FrontPageViewModel {
    currentEdition = currentEdition;
}

ko.components.register('front-page', {
    viewModel: FrontPageViewModel,
    template: { require: 'text!src/front-page.html' },
});
