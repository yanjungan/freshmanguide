window.onload=function(){
	var oMask=document.getElementById("mask");
	var oSearchTip=document.getElementById("searchTip");
	var aStep=oSearchTip.getElementsByTagName("div");
	var aA=oSearchTip.getElementsByTagName("a");
	var aClose=oSearchTip.getElementsByTagName("span");

	//读取cookie
	var res=document.cookie.substring(5);//表示从第五个字符开始读取
	
	//如果没有cookie,执行以下动作
	if (res!="www.open.com.cn") {
	//mask,父框,第一单元都显示出来
	oMask.style.display=oSearchTip.style.display=aStep[0].style.display="block";

	//下一步按钮
	for(var i=0;i<aStep.length;i++){
		aA[i].index=i;//为每一个按钮增加一个index属性，为后面引用做好准备
		aA[i].onclick=function(){
			this.parentNode.style.display="none";//当前的
			if (this.index<aStep.length-1) {//判断是否到最后一个，如果不加这个判断，到了最后一个会报错
				aStep[this.index+1].style.display="block";//下一个
			}
			else if (this.index==aStep.length-1) {//到了最后一个按钮，如果到了最后一个，结束整个操作
				oMask.style.display=oSearchTip.style.display="none";//此时让蒙框隐藏起来
			}
		}
	}

	//关闭按钮
	for(var i=0;i<aClose.length-1;i++){
		aClose[i].onclick=function(){
			oMask.style.display=oSearchTip.style.display="none";
		}
	}

	//添加cookie
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+30);/*设置有效期30天*/
	document.cookie="name=www.open.com.cn;expires="+oDate;/*expires表示的失效时间*/
	}
}
/*var aStep=oSearch.getElementsByTagName('div')，请问，aStep是一个数组，还是 nodeList 对象？
答：得到的是一个对象*/

