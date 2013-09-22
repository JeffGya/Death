var SCOREAPP = SCOREAPP || {};

(function () {

	
	//Data objecten
	SCOREAPP.schedule = {
		title:'Schedule',
		description:'Tournament Schedule'
		items: [
	    { 
		    date: "Monday, 9:00am", 
		    team1: "Chasing", 
		    team1Score: "13", 
		    team2: "Amsterdam Money Gang", 
		    team2Score: "9"
		}, { 
    		date: "Monday, 9:00am", 
    		team1: "Boomsquad", 
    		team1Score: "15", 
    		team2: "Beast Amsterdam", 
    		team2Score: "11"
	    }, { 
	    	date: "Monday, 10:00am", 
	    	team1: "Beast Amsterdam", 
	    	team1Score: "14", team2: 
	    	"Amsterdam Money Gang", 
	    	team2Score: "12"
	    }, { 
	    	date: "Monday, 10:00am", 
	    	team1: "Chasing", 
	    	team1Score: "5", 
	    	team2: "Burning Snow", 
	    	team2Score: "15"
		}, { 
			date: "Monday, 11:00am", 
			team1: "Boomsquad", 
			team1Score: "11", 
			team2: "Amsterdam Money Gang", 
			team2Score: "15"
		}, { 
			date: "Monday, 11:00am", 
			team1: "Burning Snow", 
			team1Score: "15", 
			team2: "Beast Amsterdam", 
			team2Score: "6"
		}, { 
			date: "Monday, 12:00pm",
			team1: "Chasing", 
			team1Score: "8", 
			team2: "Beast Amsterdam", 
			team2Score: "15"
		}, { 
			date: "Monday, 12:00pm", 
			team1: "Boomsquad", 
			team1Score: "15", 
			team2: "Burning Snow", 
			team2Score: "8"
		}, { 
			date: "Monday, 1:00pm", 
			team1: "Chasing", 
			team1Score: "15", 
			team2: "Boomsquad", 
			team2Score: "14"
		}, { 
			date: "Monday, 1:00pm", 
			team1: "Burning Snow", 
			team1Score: "15", 
			team2: "Amsterdam Money Gang", 
			team2Score: "11"
		}
	    ]
	};
	
	//Controller Init
	SCOREAPP.controller = {
		init: function () {
			SCOREAPP.route
		}
	}

	//Router
	APP.router = {
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
					section[i].classList.remove('active');
				}
				section.classList.add('active');
			}

			//Default route
			if(!route) {
				sections[0].classList.add('active');
			}
		}
	};

	//Pages
	SCOREAPP.page = {
		render: function (route) {
			var data;
			switch (route){
				case 'schedule': 
				data = APP.schedule;
				break;
				
				case 'ranking': 
				data = APP.ranking;
				break;
				
				case 'game': 
				data = APP.game;
				break;

				default : 
				data = APP.schedule;
			}

			Transparency.render(qwery('[data-route='+route+']')[0], data);
			SCOREAPP.router.change();
		}
	}

	//Dom ready
	domready(function () {
		SCOREAPP.controller.init();
	});

})();