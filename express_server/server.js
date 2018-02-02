const express = require('express');

// new an app
const app = express();

app.listen(9999, function(){
	console.log("node js server express has been started");
});

app.get('/', (req, rsp) => {
	rsp.send('<h1>yxnne,This is for You</h1>');
});
