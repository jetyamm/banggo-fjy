"use strict";$(function(){function a(a,t){var n=document.querySelector("."+a),i=document.createElement("ul");n.appendChild(i);var s;s=t.map(function(t,n){return 0===n?"manWear"===a||"shoeBag"===a?'\n\t\t\t\t\t\t<li class=\'special_li\'>\n\t\t\t\t\t\t\t<a href="#"><img class="special_img" src="../'+t.url+'" alt="" /></a> \n\t\t\t\t\t\t</li>\n\t\t\t\t\t':'\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#"><img src="../'+t.url+'" alt="" /></a> \n\t\t\t\t\t\t\t<p><a href="#">'+t.title+'</a><span class="discount fr">'+t.discount+'</span></p>\n\t\t\t\t\t\t\t<p><a href="#">'+t.production+'</a></p>\n\t\t\t\t\t\t\t<p class="price"><span>'+t.currentPrice+"</span><del><span>"+t.originPrice+"</span></del></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t":3===n?"womenWear"===a||"childWear"===a?'\n\t\t\t\t\t\t<li class=\'special_li\'>\n\t\t\t\t\t\t\t<a href="#"><img class="special_img" src="../'+t.url+'" alt="" /></a> \n\t\t\t\t\t\t</li>\n\t\t\t\t\t':'\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#"><img src="../'+t.url+'" alt="" /></a> \n\t\t\t\t\t\t\t<p><a href="#">'+t.title+'</a><span class="discount fr">'+t.discount+'</span></p>\n\t\t\t\t\t\t\t<p><a href="#">'+t.production+'</a></p>\n\t\t\t\t\t\t\t<p class="price"><span>'+t.currentPrice+"</span><del><span>"+t.originPrice+"</span></del></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t":'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="#"><img src="../'+t.url+'" alt="" /></a> \n\t\t\t\t\t\t<p><a href="#">'+t.title+'</a><span class="discount fr">'+t.discount+'</span></p>\n\t\t\t\t\t\t<p><a href="#">'+t.production+'</a></p>\n\t\t\t\t\t\t<p class="price"><span>'+t.currentPrice+"</span><del><span>"+t.originPrice+"</span></del></p>\n\t\t\t\t\t</li>\n\t\t\t\t"}).join(""),i.innerHTML=s}$.ajax({type:"GET",url:"../api/index_data.json",async:!0,success:function(t){for(var n=0;n<t.goodslist.length;n++)a(t.goodslist[n].goods,t.goodslist[n].content);$("#main").on("mouseenter","a",function(){$(this).css("text-decoration","none")}),$("img").hover(function(){$("img").stop(!0,!0),$(this).animate({opacity:"0.5"},500)},function(){$("img").stop(!0,!0),$(this).animate({opacity:"1"},500)})}})});