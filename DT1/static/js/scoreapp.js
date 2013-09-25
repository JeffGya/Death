//Global scope
//Created SCOREAPP Namespace 
var SCOREAPP = SCOREAPP || {};

(function () {
	//Local scope

	// Data objecten
	SCOREAPP.schedule = {
		title:'Pool A - Schedule',
		items: [
		    { date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
		    { date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
		    { date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
		    { date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
		    { date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
		    { date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
		    { date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
		    { date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
		    { date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
		    { date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
	    ]
	};

	SCOREAPP.ranking = {
		title:'Pool A - Ranking',
		items: [
		    { team: "Chasing", win: "2", lost: "2", sw: "7", sl: "9", pw: "35", pl: "39"},
		    { team: "Boomsquad", win: "2", lost: "2", sw: "9", sl: "8", pw: "36", pl: "34"},
		    { team: "Burning Snow", win: "3", lost: "1", sw: "11", sl: "4", pw: "36", pl: "23"},
		    { team: "Beast Amsterdam", win: "2", lost: "2", sw: "6", sl: "8", pw: "30", pl: "34"},
		    { team: "Amsterdam Money Gang", win: "1", lost: "3", sw: "6", sl: "10", pw: "30", pl: "37"}
	    ]
	};

	SCOREAPP.game = {
		title: 'Pool A - Score: Boomsquad vs. Burning Snow',
		description: 'Tournament Games',
		items: [
		    { score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
		    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
		    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
		    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
		    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
		    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
		    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
		    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
		    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
		    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
		    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
		    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
		    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
		    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
		    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
		    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
		    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
		    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
		    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
		    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
		    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
		    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
		    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		]
	};

	//Controller Init
	SCOREAPP.controller = {
		isLoaded: true,
		init: function () {
			//log to check if the SCOREapplication has come this far
			console.log("Start SCOREapplicatie");

			//pull data: schedule, game, ranking
			SCOREAPP.router.init();
		}
	};

	//Router
	SCOREAPP.router = {
		init: function () {
	  		routie({
			    '/schedule': function() {
			    	SCOREAPP.page.render('schedule');
				},
			    '/ranking': function() {
			    	SCOREAPP.page.render('ranking');
			    },

			    '/game': function() {
			    	SCOREAPP.page.render('game');
			    },
			    '*': function() {
			    	SCOREAPP.page.render('schedule');
			    }
			});
		},

		change: function () {
            var route = window.location.hash.slice(2),
                sections = qwery('section'),
                section = qwery('[data-route=' + route + ']')[0];

            // Show active section, hide all other
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            	section.classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }

		}
	};


	//Page
	SCOREAPP.page = {
		schedule: function(){
			Transparency.render(qwery('[data-route=schedule]')[0], SCOREAPP.schedule);
			SCOREAPP.router.change();
		},
		ranking: function(){
			Transparency.render(qwery('[data-route=ranking]')[0], SCOREAPP.ranking);
			SCOREAPP.router.change();
		},
		game: function(){
			Transparency.render(qwery('[data-route=game]')[0], SCOREAPP.game);
			SCOREAPP.router.change();
		}
	};

	// Pages
	SCOREAPP.page = {
		render: function (route) {
			var data;
			switch (route){
				case 'schedule': 
				data = SCOREAPP.schedule;
				break;
				
				case 'ranking': 
				data = SCOREAPP.ranking;
				break;
				
				case 'game': 
				data = SCOREAPP.game;
				break;

				default : 
				data = SCOREAPP.schedule;
			}

			Transparency.render(qwery('[data-route='+route+']')[0], data);
			SCOREAPP.router.change();
		}
	}


	//DOM ready code
	domready(function(){
		//Start SCOREapplication
		SCOREAPP.controller.init();
		console.log("dom is ready")
	});

})();