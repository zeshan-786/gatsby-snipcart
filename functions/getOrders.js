const getOrders = require('../utils/getOrders');
exports.handler = async function(event, context) {
    const orders = await getOrders()
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World", orders})
    };
}