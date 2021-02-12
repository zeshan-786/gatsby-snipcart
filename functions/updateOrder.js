const createOrder = require('../utils/createOrder');

exports.handler = function (event, context, callback) {

    const { orderDescription, priceTotal, orderId, orderQuantatity } = JSON.parse(event.body);

    createOrder(orderDescription, priceTotal, orderId, orderQuantatity )
        .then(entry => callback(null, {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 200,
            body: JSON.stringify({ message: 'OK' })
        }))
        .catch(callback);
};