var bodyParser = require('body-parser');

module.exports = function(app) {
    app.get('/api/person/:id', function(req, resp) {
        //get data from the database
        resp.json({ firstname : 'John', lastname: 'Doe' });
    });
    
    app.post('/api/person', function(req, resp) {
        // save to the database
    });
    
    app.post('/api/person/:id', function(req, res) {
        // delete from the database
    });
}