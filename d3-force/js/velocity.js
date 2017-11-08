var r = 4.5, nodes = [];
var force = d3.forceSimulation()
							.velocityDecay(0.3)
							.alphaDecay(0)
							.force("collision", d3.forceCollide(r + 0.5).strength(1));

var svg = d3.select("body").append("svg:svg");

force.on("tick", function () {
	svg.selectAll("circle")
					.attr("cx", function (d) {return d.x;})
					.attr("cy", function (d) {return d.y;});
});

var previousPoint;

svg.on("mousemove", function () {
	var point = d3.mouse(this),
			node = {
					x: point[0],
					y: point[1],
					vx: previousPoint?point[0]-previousPoint[0]:point[0],
					vy: previousPoint?point[1]-previousPoint[1]:point[1]
			};

	previousPoint = point;

	svg.append("svg:circle")
							.data([node])
					.attr("class", "node")
					.attr("cx", function (d) {return d.x;})
					.attr("cy", function (d) {return d.y;})
					.attr("r", 1e-6)
			.transition()
					.attr("r", r)
			.transition()
			.delay(5000)
					.attr("r", 1e-6)
					.on("end", function () {
							nodes.shift();
							force.nodes(nodes);
					})
					.remove();

	nodes.push(node);
	force.nodes(nodes);
});
