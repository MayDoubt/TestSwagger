const swaggerJSDOC = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'VideoGames API Rest with Swagger',
            version: '1.0.0'
        }
    },
    apis: [
        'src/routes/gbagames.js',
        'src/routes/snesgames.js'
    ],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDOC(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get('/api/docs.json', (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    
    console.log(
        `📄 Version 1 Docs are available at http://localhost:${port}/api/docs`
    )
}

module.exports = { swaggerDocs };
