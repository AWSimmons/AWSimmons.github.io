function readCookie(cookieName) {
    var regex = new RegExp(`(?:^|[; ])${cookieName}=([^\\s;]*)`);
    var matches = document.cookie.match(regex);
    return (cookieName && matches && matches[1]) ? unescape(matches[1]) : '';
}

function makeString(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

class PersonalMessageViewModel {
    currentMessage = ko.observable('');
    letterCount = ko.observable(0);
    displayedMessage = ko.pureComputed(() => this.currentMessage().substring(0, this.letterCount()));
    shouldBeVisible = ko.observable(false);
    messages = ['Found you •ᴗ•', 'A hacker bioroid who hates Haas-Bioroid?', `Here's a gift I trust you can't resist`, `An access token to the HB network`, `Let's see what you can do with it`, `Be quick - it will expire`, `Catch you later...`];
    waiting = true;
    intervalId = null;

    constructor() {
        if(readCookie('user') === 'angela' && !readCookie('messageReceived')) {
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
            download('access-HB.script', makeString(100));
            document.cookie = `messageReceived=true`;
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
