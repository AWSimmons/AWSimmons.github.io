function readCookie(cookieName) {
    var regex = new RegExp(`(?:^|[; ])${cookieName}=([^\\s;]*)`);
    var matches = document.cookie.match(regex);
    return (cookieName && matches && matches[1]) ? unescape(matches[1]) : '';
}

class PersonalMessageViewModel {
    currentMessage = ko.observable('');
    letterCount = ko.observable(0);
    displayedMessage = ko.pureComputed(() => this.currentMessage().substring(0, this.letterCount()));
    shouldBeVisible = ko.observable(false);
    messages = ['Found you', 'A bioroid who hates its creator?', 'Pay attention', 'I will only say this once', '???'];
    waiting = true;
    intervalId = null;

    constructor() {
        if(readCookie('user') === 'angela') {
            setTimeout(() => {
                this.shouldBeVisible(true);
                setTimeout(() => this.startMessages(), 5000);
            }, 3000);
        }
    }

    showNextMessage() {
        this.currentMessage(this.messages.shift());
        this.letterCount(0);
        this.waiting = false;
    }

    clearMessage() {
        this.letterCount(0);
        if(this.messages.length) {
            setTimeout(() => this.showNextMessage(), 500);
        } else {
            this.shouldBeVisible(false);
            clearInterval(this.intervalId);
            // document.cookie = `user=`;
        }
    }

    startMessages() {
        this.intervalId = window.setInterval(() => {
            if (this.waiting) {
                return;
            }
            this.letterCount(this.letterCount() + 1);
            if (this.letterCount() === this.currentMessage().length) {
                this.waiting = true;
                setTimeout(() => this.clearMessage(), 1000);
            }
        }, 60);
        this.showNextMessage();
    }
}

ko.components.register('personal-message', {
    viewModel: PersonalMessageViewModel,
    template: { require: 'text!src/personal-message.html' },
});
