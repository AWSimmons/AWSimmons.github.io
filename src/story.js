class StoryViewModel {
    constructor(params) {
        this.story = ko.pureComputed(() => ko.unwrap(params.story));
    }
}

ko.components.register('story', {
    viewModel: StoryViewModel,
    template: { require: 'text!src/story.html' },
});
