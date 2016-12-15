// JavaScript Document
$(function(){
	
		//使用遍历循环来设置每个li
		$('.investigation .about_mobile_games').each(function(index, element) {
            
				 //鼠标移入
			   $(this).on('mouseenter',function(){
				   //需要滑动
				   var $index=$(this).index;
				   $(this).find('.mask').stop().animate({top:'113px'},'fast');
				
			  });
			  //鼠标移出
			 $(this).on('mouseleave',function(){
				$(this).find('.mask').stop( ).animate({top:'328px'},'fast');
			 });
			 
			   
			
        });
			   	//点击删除，弹出框出现，遮罩层同时出现
	var   delLi=null;
	$('.delete').on('click',function(){
		$('.modal').show();	
		$('.myquestion_popup').show();
		//点击取消按钮
		$('.cancel').on('click',function(){
			$('.modal').hide();	
			$('.myquestion_popup').hide();	
	    });
		//寻找删除的索引号
		console.log($(this))
		 delLi=$(this).parents('.about_mobile_games');
		console.log(delLi)
		
	})
		//点击确定按钮，删除li  事件里边不能再绑定事件。
		$('.confirm').on('click',function(){
			$('.modal').hide();	
			$('.myquestion_popup').hide();
			delLi.remove();	
	    });
		
	//---删除效果结束
	
	
})