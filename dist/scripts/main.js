$(function(){function t(){var t=$(window).width(),i=t<768;$("#main_ad > .carousel-inner > .item").each(function(t,a){var e=$(a),n=i?e.data("image-xs"):e.data("image-lg");e.css("backgroundImage",'url("'+n+'")'),i?e.html('<img src="'+n+'"/>'):e.empty()}),$('[data-toggle="tooltip"]').tooltip();var a=$(".nav-tabs"),e=30;a.children().each(function(t,i){e+=i.clientWidth}),e>t?a.css("width",e).parent().css("overflow-x","scroll"):(a.css("width","auto"),a.parent().css("overflow-x","hidden"))}$(window).on("resize",t).trigger("resize")});