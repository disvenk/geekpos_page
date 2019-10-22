


//登录校验
function loginInfo(username,password,sbk){
	var postUrl = "";
	if(baseUrl.indexOf("test")>=0){
		console.log("test");
		postUrl = baseUrl+"/geekqueuing/waitModel/login";
	}else{
		console.log("kc");
		postUrl = baseUrl+"/geekqueuing/waitModel/login"
	}
	console.log(postUrl);
	$.post(postUrl,{username:username,password:password},function(result){
		sbk&&sbk(result);
	});
}

//获取桌位信息
function getTableInfo(brandId,shopId,sbk){
	$.post(baseUrl+"/waitModel/getTableList",{brandId:brandId,shopDetailId:shopId},function(result){
		sbk&&sbk(result);
	});
}

//获取等待桌位信息
function getWaitList(brandId,shopId,type,sbk){
	$.post(baseUrl+"/waitModel/getWaitList",{brandId:brandId,shopDetailId:shopId,tableType:type},function(result){
		sbk&&sbk(result);
	});
}

//更新等位状态
function updateWaitState(brandId,shopId,id,state,sbk){
	$.post(baseUrl+"/waitModel/update",{brandId:brandId,shopDetailId:shopId,id:id,state:state},function(result){
		sbk&&sbk(result);
	});
}

//取号
function getNumber(brandId,shopId,personNumber,phone,customerId,sbk){
	$.post(baseUrl+"/waitModel/print",{brandId:brandId,shopDetailId:shopId,personNumber:personNumber,phone:phone,customerId:customerId},function(result){
		sbk&&sbk(result);
	});
}

//获取店铺信息
function getShopInformation(brandId,shopDetailId,sbk){
	$.post(baseUrl+"/shop/shopDeatil",{brandId:brandId,shopDetailId:shopDetailId},function(result){
		sbk&&sbk(result);
	});
}

//获取当前店铺自助排队页面链接
function getQueueCodePage(brandId,shopId,queueQrCodeId,sbk){
	$.post(baseUrl+"/waitModel/getQueueCodeUrl",{brandId:brandId,shopDetailId:shopId,queueQrCodeId:queueQrCodeId},function(result){
		if(result.code == "200"){
			sbk&&sbk(result.data);
		}else{
			mui.toast("网络异常，无法获取等位二维码！")
		}
	});
}

//获取等位信息
function getQueueInfo(id,sbk){
	$.post(baseUrl+"/waitModel/getQueueInfo",{id:id},function(result){
		sbk&&sbk(result.data);
	});
}

//获取最新的店铺自助牌号二维码
function getLastQueueInfo(brandId,shopId,sbk,errorFun){
	// $.post(baseUrl+"/qrcode/lastCode",{brandId:brandId,shopDetailId:shopId},function(result){
	// 	sbk&&sbk(result.data);
	// });

	$.ajax({
	   type: "POST",
	   url: baseUrl+"/qrcode/lastCode",
	   data: {brandId:brandId,shopDetailId:shopId},
	   success: function(result){
	     sbk&&sbk(result.data);
	   },
	   error : function(result){
			errorFun && errorFun(result);
		}
	});
}