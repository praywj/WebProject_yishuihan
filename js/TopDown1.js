//使向上图标正常hide或者show
 window.onload=HideAndShowTopImg()
     function HideAndShowTopImg(){
  $("#up").hide();
            $(window).bind("scroll",function(){
              var top=$(this).scrollTop();
              if(top<200)
              $("#up").hide();
            else
              $("#up").show();
              });
}
 //返回顶部

	  $("#up").click(function(){$('body,html').animate({scrollTop:0},500)});

//div滑动开始
var down=getClass("img","down");
  $(down[0]).click(function(){$('body,html').animate({scrollTop:700},500)});
  $(down[1]).click(function(){$('body,html').animate({scrollTop:1300},500)});
    $(down[2]).click(function(){$('body,html').animate({scrollTop:1900},500)});

//div滑动结束

//找到class元素
                    function getClass(tagName,className) //获得标签名为tagName,类名className的元素
	{
		if(document.getElementsByClassName) //支持这个函数
		{     
			return document.getElementsByClassName(className);
		}
		else
		{   var tags=document.getElementsByTagName(tagName);//获取标签
			var tagArr=[];//用于返回类名为className的元素
			for(var i=0;i < tags.length; i++)
			{
				if(tags[i].class == className)
				{
					tagArr[tagArr.length] = tags[i];//保存满足条件的元素
				}
			}
			return tagArr;
		}
	}