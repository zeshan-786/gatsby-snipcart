const space = 'kjntxdauc8bu'
const accessToken =  'eMqcSH9NPWmxNsafgRvDfnvopBbz2kxvFoBiQIUfcf4'

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