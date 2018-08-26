const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abe');
console.log(token);

var decoded = jwt.verify(token, '123abe');
console.log('decoded', decoded);
