const app = require('./app');

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {

    if(err) {
        console.log('Server couldn\'t be started', err);
        return;
    }

    console.log(`Server started: http://localhost:${PORT}`);
})