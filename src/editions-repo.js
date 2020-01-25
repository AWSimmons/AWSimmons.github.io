import edition1   from '/editions/1.js';
import edition2   from '/editions/2.js';
import edition2p5 from '/editions/2-5.js';
import edition3   from '/editions/3.js';
import edition4   from '/editions/4.js';
import edition5   from '/editions/5.js';


export const allEditions = [edition5, edition4, edition3, edition2p5, edition2, edition1];

export const currentEdition = ko.observable(edition5);
