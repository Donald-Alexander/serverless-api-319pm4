const cors = require('cors')

module.exports = async function (context, req) {
   
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    context.log('responseMessage',name);

    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
        context.log(responseMessage);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            input: name,
            message: responseMessage
        },
        headers: {   
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Request-Headers': 'X-Custom-Header'
        }
    };
}