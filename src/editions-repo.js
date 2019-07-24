import edition1 from '/editions/1.js';
import edition2 from '/editions/2.js';
import edition3 from '/editions/3.js';

export const allEditions = [edition3, edition2, edition1];

export const currentEdition = ko.observable(edition3);
