'use strict';

const fs = require('fs');
const contentful = require('contentful');

const client = contentful.createClient({
    space: 'lmei4l4b0141', // Insert Contentful Space ID
    accessToken: 'Ge5SVYPGqP04KDrjxFGUiJkaOFG-Tf4T58nV4VnSap4' // Insert Contentful Content Delivery API access token
});

getData('quizQuestion');
getData('results');

function getData(contentType) {
    client.getEntries({
        'content_type': contentType,
    }).then(entries => {
        const dir = './data';
        const jsonData = entries.items;
        for (var i = 0; i < jsonData.length; i++) {
            console.log('Succesfully retrieved data entry with type ' + contentType + ': ' + entries.items[i].fields.title);
        }

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            console.log('Not able to find data folder, therefore created this.');
        } else {
            console.log('data folder encountered, will therefore re-use this.');
        }

        fs.writeFile(dir + '/' + contentType + '.json', JSON.stringify(jsonData), function(err, result) {
            if (err) console.log('error', err);
            console.log('succesfully written data to ' + contentType + 'file');
        });
    });
}