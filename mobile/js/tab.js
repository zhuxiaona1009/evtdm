// JavaScript Document
$(function(){
setInterval(function(){
    $('#banner ul li:last').css({'height':'0px','opacity': '1'}).insertBefore('#banner ul li:first').animate({'height':'-360px','opacity': '0'}, 'slow', function() {
      $(this).removeAttr('style');
    });
},2000);

setInterval(function(){
    $('#banner1 ul li:last').css({'width':'0px','opacity': '1'}).insertBefore('#banner1 ul li:first').animate({'width':'800px','opacity': '0'}, 'slow', function() {
      $(this).removeAttr('style');
    });
},3500);
setInterval(function(){
    $('#banner2 ul li:last').css({'height':'0px','opacity': '1'}).insertBefore('#banner2 ul li:first').animate({'height':'800px','opacity': '0'}, 'slow', function() {
      $(this).removeAttr('style');
    });
},4000);
});

