//Require
const express = require('express');
const app = express();
const morgan = require('morgan');
const { swaggerDocs: V1SwaggerDocs } = require('./swagger');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.use(require('./routes/index'));
app.use('/api/gbagames', require('./routes/gbagames'));
app.use('/api/snesgames', require('./routes/snesgames'));

// Starting the server
app.listen( app.get('port'), () => {
    console.log(`🚀 Server listening on port ${app.get('port')}.`
    + ` Click the link to open the server http://localhost:${app.get('port')}.`);
    V1SwaggerDocs(app, app.get('port'));
});
