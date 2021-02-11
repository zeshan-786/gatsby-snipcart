exports.handler = async function(event, context) {
    try {
        console.log(JSON.parse(event.body));
        return {
            statusCode: 200,
            body: JSON.stringify({message: "Hello World"})
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({message: error.message})
        };
    }
}