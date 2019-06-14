$(document).ready(function(){
	let temp;

// const BaseURL = `${ window.location.protocol }//${ window.location.host }`;

	//load home content
	$.ajax({
		url:'datasource/home.json',
		dataType:'json',
		success:function(data)
		{
			$("#home").html(data.home);
		},
		error:function(err)
		{
			console.log(err);
		}
	});

	// products
	//load home content
	$.ajax({
		url:'datasource/products.json',
		dataType:'json',
		success:function(data)
		{
			$.each(data.value,function(index,value){
				temp="<h4>"+ value.title +"</h4>"+"<p class='lead'>"+value.desc+"</p>";
				$("#"+value.id).append(temp);
			});
		},
		error:function(err)
		{
			console.log(err);
		}
	});

	// about us content
	$.ajax({
		url:'datasource/about.json',
		dataType:'json',
		success:function(data)
		{
			$("#about-plan").html(data.plan);
			$("#about-insight").html(data.insight);
		},
		error:function(err)
		{
			console.log(err);
		}
	});
	// footer data
	$.ajax({
		url:'datasource/locate.json',
		dataType:'json',
		success:function(data)
		{
			temp="<p>"+data.address.first+"</p>"+"<p>"+data.address.second+"</p>";
			$("#address").append(temp);
			$.each(data.socialLinks,function(index,value){
				console.log(value.name);
				temp='<a href="'+value.link+'" target="_blank" class="link mr-1 mb-1 '+value.name+' text-center">'+value.icon+'</a>';
				$("#social").append(temp);
			});
			
		},
		error:function(err)
		{
			console.log(err);
		}
	});




	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});

	$('#top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	$(document).on('click', 'a[href^="#"]', function(e) {
	    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;
	 
	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos-80}, 1500,);

	});

});