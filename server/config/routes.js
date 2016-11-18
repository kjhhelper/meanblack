// console.log('SERVER-CONFIG-ROUTES.JS');
var friends=require('../controllers/friends.js');
//
// console.log('routes');
module.exports = function(app){
app.get('/friends');
// app.get('/friends/:id', friends.show);
// app.post('/friends', friends.create);
// app.put('/friends/:id', friends.update);
// app.delete('/friends/:id', friends.delete);
}
