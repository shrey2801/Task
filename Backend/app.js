const http = require('http');
const express = require('express');
const { mongoConnect } = require('./service/mongodb');



const datarouter = require('./routers/empData.router');

const app = express();

const PORT = process.env.PORT || 5000;


const server = http.createServer(app);
app.use(express.json());

app.use('/emp',datarouter);

async function startServer(){
    await mongoConnect();
    server.listen(PORT,() => {
        console.log(`Listning on port ${PORT}..`);
    })
};
startServer();
