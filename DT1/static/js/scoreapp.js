//Created SCOREAPP Namespace 
var SCOREAPP = SCOREAPP || {};

(function () {
	
	// Data
	SCOREAPP.schedule = {
		title: "Schedule",
		start: function() {
			jx.load('https://api.leaguevine.com/v1/games/?pool_id=19219&access_token=9e0cf40d3d', function(data) {
				var data = JSON.parse(data);
				console.log(data);
				var directives = { //Verander de manier van data-binden
					objects: { resource_uri: {
						href: function(){
							return this.resource_uri;
						},
						html: function(){
							return "Update Game";
						}
					}}
				};
			Transparency.render(qwery('[data-route=schedule]')[0], data, directives);
			},'text','get'); // Haal data op als text.
		}
	};

	SCOREAPP.ranking = {
		title: "Ranking pool A",
		description: "Dit zijn de rankings voor pool A",
		start: function() {
			jx.load('https://api.leaguevine.com/v1/pools/19219/', function(data) {
				var data = JSON.parse(data);
				console.log(data);
				var directives = { //Verander de manier van data-binden
				};	
			Transparency.render(qwery('[data-route=ranking]')[0], data, directives);
			},'text','get'); // Haal data op als text.
		}
	};

	SCOREAPP.game = {
		start: function() {
			jx.load('https://api.leaguevine.com/v1/games/127162/', function(data) {
				var data = JSON.parse(data);
				console.log(data);
				var directives = { //Verander de manier van data-binden
				};	
			Transparency.render(qwery('[data-route=game]')[0], data, directives);
			},'text','get'); // Haal data op als text.
		}
	};


	//Controller Init
	SCOREAPP.controller = {
		start: function () {
			//log to check if the SCOREapplication has come this far
			console.log("Step 2: Start score application");

			//pull data: schedule, game, ranking
			SCOREAPP.router.start();
		}
	};

	//Router
	SCOREAPP.router = {
		start: function () {
			console.log("Step 3: In de html wordt er doormiddel van links ");
	  		routie({
			    '/schedule': function() {
			    	SCOREAPP.content.render('schedule');
			    },
			    '/ranking': function() {
			    	SCOREAPP.content.render('ranking');
			    },
			    '*': function() {
			    	SCOREAPP.content.render('schedule');
			    }
			});
		},

		different: function () {
			console.log("Step 5: Goes through the DOM searching for the defined emelents. If the right section is found it wil recieve a class active. All the other section will lose their active class.");
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

	// Pages
	SCOREAPP.content = {
		render: function (route) {
			console.log("Step 4: Data van de bijbehorende pagina wordt opgehaald afhangend van wat route is. route wordt vastgesteld in stap 3");
			var data;
			switch (route){
				case 'schedule': 
				SCOREAPP.schedule.start();
				SCOREAPP.router.different();
				break;

				case 'ranking':
				SCOREAPP.ranking.start();
				SCOREAPP.router.different();
				break;

				default : 
				data = SCOREAPP.schedule;
			}

			Transparency.render(qwery('[data-route='+route+']')[0], data);
			SCOREAPP.router.different();
		}
	}


	//DOM ready code
	domready(function(){
		console.log("Step 1: DOM is ready");
		//start SCOREapplication
		SCOREAPP.controller.start();
		
	});

})();