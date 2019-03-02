$(document).ready(function(){

//check of todos by clicking	
$("ul").on("click", "li", function(){ //listening for a li clicked on the ul
	$(this).toggleClass("completed");
});

//click on x to delete todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){ //fades the parent of span, li
		$(this).remove(); //waits for the fadeout to complete then removes element
	});
	event.stopPropagation(); //stops bubbling
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //checks for the enter key
		var todoText = $(this).val(); //grabbing new todo text from input
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});

});