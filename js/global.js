var globalData={
	server:"http://127.0.0.1:8080/",
	per:"http://127.0.0.1:8020/human/",
	setUidInfo:function(uid){
		sessionStorage.setItem("u_id",uid);
	},
	setUnameInfo:function(uname){
		sessionStorage.setItem("u_name",uname);
	},
	setTokenInfo:function(token){
		sessionStorage.setItem("token",token);
	},
	getCurUid:function(){
		return sessionStorage.getItem("u_id");
	},
	getCurUName:function(){
		return sessionStorage.getItem("u_name");
	},
	getCurToken:function(){
		return sessionStorage.getItem("token");
	}
}
 

document.write('<link rel="stylesheet" href="'+globalData.per+'js/easyui/insdep.easyui.min.css" type="text/css"/>');
document.write('<link rel="stylesheet" href="'+globalData.per+'js/easyui/icon.css" type="text/css"/>');
document.write('<link rel="stylesheet" href="'+globalData.per+'js/easyui/insdep.theme_default.css" type="text/css"/>');
document.write('<script type="text/javascript" src="'+globalData.per+'js/jquery-1.7.1.js" ></script>');
document.write('<script type="text/javascript" src="'+globalData.per+'js/easyui/jquery.easyui.min.js" ></script>');
document.write('<script type="text/javascript" src="'+globalData.per+'js/easyui/insdep.extend.min.js" ></script>');
document.write('<script type="text/javascript" src="'+globalData.per+'js/easyui/locale/easyui-lang-zh_CN.js"></script>');

