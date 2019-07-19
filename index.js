class FrontPageViewModel {
    mainStory = {
        imageSrc: 'mugshot.jpg',
        headline: 'Ghost suspect to face trial',
        story: `
        Esteban Gomez, 34, was today scheduled to face trial in New Angeles Central Criminal Court for nine counts of murder. Police, acting on a tip off from a private detective who asked to remain anonymous, were able to find and capture Gomez in his apartment near Quinde. NAPD spokesperson Angelica Comer stated that they have significant evidence linking Gomez to all eight of the "Ghost" murders as well as that of a New Angeles Sol journalist.
        `
    };

    sideStories = [
        {
            imageSrc: 'server.jpg',
            headline: 'Cybercrime on the rise as server farms hit in nightly raids',
            story: `
            A number of New Angelino server farms have been left embarassed as hackers have bypassed their security controls, deleting client data and hijacking their processing. Small business owners fear that since these attacks seem localised to New Angeles, it could be the work of protectionist foreign governments. 
            `
        },
        {
            imageSrc: 'bb.jpg',
            headline: 'Man Arrested for Flashing',
            story: `
            Notorious information Broker T. Bagbiter has been arrested by the NAPD on suspicion of exposing himself to women. His lawyer stated that Mr Bagbiter protests his innocence, and believes he was somehow framed for the offense.
        `
        },
    ]
}

// Activates knockout.js
ko.applyBindings(new FrontPageViewModel());
