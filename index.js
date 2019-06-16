class FrontPageViewModel {
    mainStory = {
        imageSrc: 'https://www.petmd.com/sites/default/files/Senior-Cat-Care-2070625.jpg',
        headline: 'Insert example headline here',
        story: `
        In today's exciting and amazing news, we describe the news in this little lead-up sentence.
        `
    };

    sideStories = [
        {
            imageSrc: 'https://www.petmd.com/sites/default/files/Senior-Cat-Care-2070625.jpg',
            headline: 'Eating Cat Treats "Not Actually Very Good"',
            story: `
            "I actually don't really like eating cat treats," says 40 year old Tim Nerners-Lee.
            `
        },
        {
            imageSrc: 'https://www.petmd.com/sites/default/files/Senior-Cat-Care-2070625.jpg',
            headline: 'Cat love at all time high',
            story: `
            Everyone just loves cats.
            `
        },
    ]
}

// Activates knockout.js
ko.applyBindings(new FrontPageViewModel());