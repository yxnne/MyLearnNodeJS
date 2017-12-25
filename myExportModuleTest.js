//使用exports公开模块接口
exports.myfuc_sayHi = function(to){
	var msg = to + ', Hi ,man!'; 
	console.log(msg);
}

myfuc_notPublic = function(to){
	 
	console.log('no public ');
}

