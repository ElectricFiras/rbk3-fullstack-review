exports.optionsGenerator = function (req) {
  var username = req.body.search;
  var url = 'https://api.github.com/users/'+username+'/repos';
  var options = {
    method: 'GET',
    url: url,
    headers: {
      'user-agent': 'sirajkakeh',
      'cache-control': 'no-cache',
      'content-type': 'application/json'
    },
      form: { d: '1' }
  };
  return options;
}
