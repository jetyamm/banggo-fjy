"use strict";$(function(){var r=Cookie.get("good");r=JSON.parse(r);JSON.parse(r.imgIntroduction);var i="",e="";$(".title").text(r.title+r.production),$(".currentPrice").text(r.currentPrice),$(".originPrice").text(r.originPrice),$(".discount").text(r.discount),$(".size").on("click","li",function(){$(this).parent().children().css("border-color","#ccc"),$(this).css("border-color","red"),e=$(this).text()}),$(".color").on("click","li",function(){$(this).parent().children().css("border-color","#ccc"),$(this).css("border-color","red"),i=$(this).text()}),$(".buyNum").on("click",".jian",function(){var t=$(this).next().val();--t<1?$(this).next().val("1"):$(this).next().val(t)}),$(".buyNum").on("click",".jia",function(){var t=$(this).prev().val();99<++t?$(this).prev().val("1"):$(this).prev().val(t)}),$.ajax({type:"get",async:!0,url:"../api/showHistory_store.php",data:{goodId:r.goodId,title:r.production,currentPrice:r.currentPrice,url:r.url,originPrice:r.originPrice},success:function(t){}}),$.ajax({type:"get",async:!0,url:"../api/showHistory_render.php",success:function(t){var r=JSON.parse(t);r.map(function(t){var r=document.createElement("li"),i=document.createElement("img");i.src="../"+t.url,$(i).css({width:"160px",height:"160px",padding:"10px"});var e=$("<p>"+t.title+"</p><p>￥ "+t.currentPrice+"</p>");r.appendChild(i),$(r).append(e),$(".showGood").append(r)})}}),$(".addCart").click(function(){var t=$(".jian").next().val();$.ajax({type:"get",async:!0,url:"../api/updateGoodsCar.php",data:{goodId:r.goodId,qty:t,url:r.url,title:r.title+r.production,price:r.currentPrice,size:e,color:i},success:function(t){confirm("加入购物车成功！是否选择进入购入车进行结算")&&(location="../html/carList.html")}})})});