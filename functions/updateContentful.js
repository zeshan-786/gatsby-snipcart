const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID | 'kjntxdauc8bu'
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN | 'eMqcSH9NPWmxNsafgRvDfnvopBbz2kxvFoBiQIUfcf4'

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})



exports.handler = async function(event, context) {
    const body = event
    const orders = await client.getEntries({
                                            order: 'sys.createdAt',        
                                            content_type: 'Order'
                                        })
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World", body, orders
    })
    };
}