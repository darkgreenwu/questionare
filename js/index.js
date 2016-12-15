// JavaScript Document
$(function(){
	//var my_login=document.getElementById('myLogin');
//	var my_login_box=document.getElementById('loginBox');
  //登录框
	$('#myLogin').on('click',function(){
		$('#loginBox').show();
		$('#myModal').show();	
	});
	$('#login_delete').on('click',function(){
		$('#loginBox').hide();
		$('#myModal').hide();	
	});	
	//注册框
		$('#myRegister').on('click',function(){
		$('#registerBox').show();
		$('#myModal').show();	
	});
	$('#register_delete').on('click',function(){
		$('#registerBox').hide();
		$('#myModal').hide();	
	});	
		
});
	
