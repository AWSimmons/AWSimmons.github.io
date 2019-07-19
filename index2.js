class FrontPageViewModel {
    mainStory = {
        imageSrc: 'crimescene.png',
        headline: 'Ghost takes eighth victim',
        story: `
        The serial killer known as the Ghost has claimed their eighth kill this year. Monica Kāne, 32, was brutally murdered in her Manta penthouse at around 11pm on July 10th. Community groups are putting pressure on the NAPD to bring this spate of killings to an end. It raises the question: if the risties can't protect themselves from the ghost, who can? See inside for photos exclusive to the Sol. 
        `
    };

    sideStories = [
        {
            imageSrc: 'sportsmetal2-7299.jpg',
            headline: 'Fisk takes short position in Haas-Bioroid sports division spinoff',
            story: `
            "Viewership figures for bioroid sporting events aren't showing the growth that investors want to see" said Fisk, announcing his purchase of over 10 million credits of out-of-the-money put options. Markets reacted with a drop of 2%, wiping billions off the value of this 60% HB owned corporation.
            `
        },
        {
            imageSrc: 'hedge_fund_alt_art_web.jpg',
            headline: 'Hedge fund fury over Loonie invasion',
            story: `
            Several New Angelino funds have been left reeling after a Loonie corporation outbid them for High-Frequency rackspace located close to the NASX. One trader, who asked to remain nameless, stated "Fuck the loonies", followed by "wait, that wasn't an official statement".
            `
        },
    ]
}

// Activates knockout.js
ko.applyBindings(new FrontPageViewModel());
