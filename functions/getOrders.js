const getOrders = require('../utils/getOrders');
exports.handler = async function(event, context) {
    try {
        const orders = await getOrders()
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World", orders})
    };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({message: error.message})
        };
    }
}