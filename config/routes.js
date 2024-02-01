const express = require('express');
const recommendation = require('../api/recommendation/recommendationService');

module.exports = function (server) {
    const protectedApi = express.Router();
    server.use('/api', protectedApi);

    server.use('/status', (req, res) =>
        res.send(`BACKEND is runner.`)
    );

    const recommendation = require('../api/recommendation/recommendationService');
    recommendation.register(protectedApi, '/recommendation');

    const register = require('../api/register/registerService');
    register.register(protectedApi, '/register');

    server.use(express.static(require('path').join(__dirname, '../public')));
}
127.0.0.1:3000/api/recommendation
