
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Symfopi' });
};
/*
* Respond to POSTed form.
*/
exports.indexPost = function(req, res) {
	console.log(req.body);
	res.render('index', { title: 'Symfopi' });	
};
