// express-jwt for protecting the Token
const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256']

    }).unless({
        path: [
            // regex online
            { url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS'] },// exlude aut after products
             {url: /\/api\/v1\/categories(.*)/ ,methods: ['GET','OPTIONS']}, // exlude aut after categories
            `${api}/users/login`,
            `${api}/users/register`,
        ]
    })
}

module.exports = authJwt;