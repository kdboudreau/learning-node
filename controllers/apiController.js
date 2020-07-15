module.exports = function(app) {
    app.get('/api/person/:id', function(req, resp) {
        //get data from the database
        resp.json({ firstname : 'John', lastname: 'Doe' });
    });
    
    app.post('/person', urlencodedParser, function(req, resp) {
        // save to the database
    });
    
    app.post('/personjson', jsonParser, function(req, res) {
        // delete from the database
    });
}