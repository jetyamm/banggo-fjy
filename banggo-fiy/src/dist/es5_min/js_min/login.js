"use strict";$(function(){$(".register").click(function(){location="../html/register.html"}),$(".home").click(function(){location="../index.html"}),$(".code").text(""+randomCode(4)),$(".codeSwitch").click(function(){$(".code").text(""+randomCode(4))}),Cookie.remove("username"),$(".btnTop").on("click","span",function(){$(this).parent().children().css("border-top","1px solid #ccc"),$(this).css("border-top","2px solid red")}),$(".accountLogin").click(function(){$("#username").prev().css("margin-left","0").text("用户名："),$(".loginTip").css("opacity",1).text("请输入账户或邮箱地址")}),$(".phoneLogin").click(function(){$("#username").prev().css("margin-left","0").text("手机号："),$(".loginTip").css("opacity",1).text("请输入手机号")}),$(".cartLogin").click(function(){$("#username").prev().css("margin-left","14px").text("卡号："),$(".loginTip").css("opacity",1).text("请输入卡号")}),$(".loginBtn").click(function(){var e=$("#username").val(),o=$("#password").val();console.log(e,o),$.ajax({type:"post",async:!0,url:"../api/login.php",data:'username="'+e+'"&password="'+o+'"',success:function(o){"yes"===o?(Cookie.set("username",e),location="../index.html"):(confirm("输入账号或密码有误！"),$(".code").text(""+randomCode(4)))}})})});