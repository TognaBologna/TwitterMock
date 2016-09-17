$(document).ready(function() {
	var charCounter = 140;
	$('.tweet-compose').on('click', function() {
		$('#tweet-controls').css('display', 'initial');
		$('.tweet-compose').css('height', '5em');
	})

	$('.tweet-compose').on('keypress keydown keyup paste click', function() {
		var n = 140 - ($(this).val().length);
		$('#char-count').text(n);
		if(n <= 10) {
			$('#char-count').css('color', '#cc0000');
		} else {
			$('#char-count').css('color', '#999');			
		}
		if(n < 0) {
			$('#tweet-submit').prop('disabled', true);
		} else {
			$('#tweet-submit').prop('disabled', false);
		}
	})
	
	$('.tweet').hover(
		function() {
			$(this).find('.tweet-actions').css('visibility', 'visible');
		},
		function() {
			$('.tweet-actions').css('visibility', 'hidden');
		})

	$('.tweet').on('click', function() {
		$(this).find('.stats').css('display', 'inherit');
		$(this).find('.reply').css('display', 'inherit');
	})

	$('#tweet-submit').click(function() {
		var userImage = "img/Tony.jpg";
		var usersName = "Tony Reid";
		var userName = "@Togna_Bologna";
		var retweets = 0;
		var favorites = 0;
		var currentTime = "5:00 PM - 05 May 15";
		var tweettext = $('.tweet-compose').val();
		var tweethtml =
			"<div class='tweet'>" +
				"<div class='content'>" +
					"<img class='avatar' src=\"" +
						userImage +
					"\">" +
					"<strong class='fullname'>" +
						usersName +
					"</strong>" +
					"<span class=\"username\">&nbsp;" +
						userName +
					"</span>" +
					"<p class=\"tweet-text\">" +
						tweettext +
					"</p>" +
					"<div class='tweet-actions'>" +
						"<ul>" +
							"<li>&nbsp;" +
								"<span class='icon action-reply'></span>" +
								" Reply " +
							"</li>" +
							"<li>&nbsp;" +
								"<span class='icon action-retweet'></span>" +
								" Retweet" +
							"</li>" +
							"<li>&nbsp;" +
								"<span class='icon action-favorite'></span>" +
								" Favorite " +
							"</li>" +
							"<li>&nbsp;" +
								"<span class='icon action-more'></span>" +
								" More " +
							"</li>" +
						"</ul>" +
					"</div>" +
					"<div class='stats'>" +
						"<div class='retweets'>" +
							"<p class='num-retweets'>" +
								retweets +
							"</p>" +
							"<p>RETWEETS</p>" +
						"</div>" +
						"<div class='favorites'>" +
							"<p class='num-favorites'>" +
								favorites +
							"</p>" +
							"<p>FAVORITES</p>" +
						"</div>" +
						"<div class='users-interact'>" +
						"</div>" +
						"<div class='time'>" +
							currentTime +
						"</div>" +
					"</div>" +
				"</div>" +
			"</div>";
		$('#stream').prepend(tweethtml);
	})







})

