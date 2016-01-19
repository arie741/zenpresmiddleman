$(window).load( function(){
						var radarChartData = {
							labels : ["Sosiologi","Matematika","Fisika","Kimia","Ekonomi","Sejarah","Biologi"],
							datasets : [
								{
									fillColor : "rgba(151,187,205,0.5)",
									strokeColor : "rgba(151,187,205,1)",
									pointColor : "rgba(151,187,205,1)",
									pointStrokeColor : "#fff",
									data : [28,48,40,19,96,27,100]
								}
							]

						};

						var globalGraphSettings = {animation : Modernizr.canvas};


						function showRadarChart(){
							var ctx = document.getElementById("radarChartCanvas").getContext("2d");
							new Chart(ctx).Radar(radarChartData,globalGraphSettings);
						}


						$('#lineChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showLineChart,300); },{accX: 0, accY: -155},'easeInCubic');

						$('#barChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showBarChart,300); },{accX: 0, accY: -155},'easeInCubic');

						$('#radarChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showRadarChart,300); },{accX: 0, accY: -155},'easeInCubic');

						$('#polarAreaChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPolarAreaChart,300); },{accX: 0, accY: -155},'easeInCubic');

						$('#pieChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPieChart,300); },{accX: 0, accY: -155},'easeInCubic');

						$('#doughnutChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showDoughnutChart,300); },{accX: 0, accY: -155},'easeInCubic');
						
						showRadarChart();
					});
