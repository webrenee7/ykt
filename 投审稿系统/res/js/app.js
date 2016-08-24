// JavaScript Document
$(function(){
	
	//弹窗根据自身内容高度定位
	var box_h=[];
	for(i=0;i<$(".pop_box").length;i++){
		box_h[i]=$(".pop_box").eq(i).height();
		$(".pop_box").eq(i).css("marginTop",-box_h[i]/2+"px");
	}
	
});