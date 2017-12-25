//import file module
var yxnne = require('./myExportModuleTest');
//call the functions in module public
yxnne.myfuc_sayHi('myself');

//import the function class which has been public
var Man = require('./myExportModuleTest2');
//instance module class to an object
var yxnne = new Man();
yxnne.setName('yxnne');
yxnne.sayHi();