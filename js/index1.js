$(document).ready(function() {
	//读取cookie
	var res=document.cookie.substring(5);//表示从第五个字符开始读取
	
	//如果没有cookie,执行以下动作
	if (res!="www.open.com.cn") {
	//mask,父框,第一单元都显示出来
	$('#mask,#searchTip,#searchTip div:eq(0)').show();
	$('#searchTip div a').click(function() {
		var current=$(this).parent();
		current.hide();
		current.next().show();
	});
	$('#searchTip div a:last,#searchTip div span').click(function() {
		$('#searchTip,#mask').hide();
	});
	
	//添加cookie
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+30);/*设置有效期30天*/
	document.cookie="name=www.open.com.cn;expires="+oDate;/*expires表示的失效时间*/
	}
});