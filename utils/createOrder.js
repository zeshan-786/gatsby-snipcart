const space = 'kjntxdauc8bu'
const accessToken =  'eMqcSH9NPWmxNsafgRvDfnvopBbz2kxvFoBiQIUfcf4'

const contentful = require('contentful-management');
const client = contentful.createClient({
    accessToken: accessToken,
});


module.exports = function createOrder(orderDescription, orderDateTime, priceTotal, orderId) {

    return client.getSpace(space)
        .then(space => space.getEnvironment('master'))
        .then(environment => environment.createEntry('order', {
            fields: {
                orderDescription: {
                    'en-US': orderDescription
                },
                orderDateTime: {
                    'en-US': orderDateTime
                },
                priceTotal: {
                    'en-US': priceTotal
                },
                orderId: {
                    'en-US': orderId
                },
                
            }
        }))
        .then(entry => entry.publish());
};

