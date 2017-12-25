//使用exports公开模块接口
// exports.myfuc_sayHi = function(to){
// 	var msg = to + ', Hi ,man!'; 
// 	console.log(msg);
// }
// myfuc_notPublic = function(to){
	 
// 	console.log('no public ');
// }

//类
function Man(){
	var name ;
	this.setName = function(tName){
		this.name = tName;
	};

	this.sayHi = function(){
		console.log('Hi' + ', I am ' +this.name );
	};
}

//公开某个类
module.exports = Man;