const space = 'u7et600tztfd'
const accessToken =  'CFPAT-9i2z0xGQG0aF0VIOJwepfQAupsdoHsFpN6KC2R7yHdM'

const contentful = require('contentful-management');
const client = contentful.createClient({
    accessToken: accessToken,
});


module.exports = function createOrder(orderDescription, priceTotal, orderId, orderQuantatity) {

    return client.getSpace(space)
        .then(space => space.getEnvironment('master'))
        .then(environment => environment.createEntry('order', {
            fields: {
                orderDescription: {
                    'en-US': orderDescription
                },
                orderTime: {
                    'en-US': new Date()
                },
                price: {
                    'en-US': priceTotal
                },
                orderId: {
                    'en-US': orderId
                },
                orderQuantatity: {
                    'en-US': orderQuantatity

                }
                
            }
        }))
        .then(entry => entry.publish());
};

