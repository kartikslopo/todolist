//For linethrough
$("ul").on("click","li",function(){
	if($(this).css("color") === "rgb(128, 128, 128)" ){

		$(this).css("color","black");
		$(this).css("textDecoration","none");
	}
	else
	{
       $(this).css({
       	color: "gray",
       	textDecoration: "line-through"
      });
   }
});

//For Deletion
$("ul").on("click","span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//INput
$("input[type='text']").keypress(function(event){
	$(this).val="";
	if(event.which==13)
	{
		var todonext = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span> " + todonext + "</li>");
	}
});

//image
$(".fa-plus").click(function(){
       $("input[type='text']").fadeToggle();
});