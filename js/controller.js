(function(){

	var chart = c3.generate({
		bindto: "#skillChart",
	    data: {
	        columns: [
	            ['JAVA', 0, 3, 0, 0, 0],
	            ['HTML/CSS', 2, 0, 0, 0, 0],
	            ['JAVASCRIPT', 0, 0, 3, 0, 0],
	            ['ANGULAR', 0, 0, 0, 3, 0],
	            ['BOOTSTARP', 0, 0, 0, 0, 2]

	        ],
	        type: 'bar',
	        groups: [
	            ['JAVA', 'HTML/CSS', 'JAVASCRIPT','ANGULAR', 'BOOTSTARP']
	        ]
	    },
	    grid: {
	        y: {
	            lines: [{value:0}]
	        }
	    },
	    axis : {
	        y : {
	            tick: {
	                //format: d3.format("$,")
	                format: function (d) { 
	                    if(d == 1) return "Beginner";
	                    if(d == 2) return "Familiar";
	                    if(d == 3) return "Skillful";
	                    if(d == 4) return "Expert";
	                    if(d == 5) return "Superstar"; 	                    
	                }

	            },
	            max:5,
	            min:1
	        }
	    }
	    
	});



})();
