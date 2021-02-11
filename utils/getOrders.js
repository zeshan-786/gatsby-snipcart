const space = 'kjntxdauc8bu'
const accessToken =  'CFPAT-Uy09SMxVwxGxI6Am4-SQD0LLY4RnAKr4UEY0tWPB58E'

const contentful = require('contentful-management');
const client = contentful.createClient({
    accessToken: accessToken,
});

module.exports = function getOrders() {
    return client.getEntries({
        order: 'sys.createdAt',        
        content_type: 'Order'
    })
}