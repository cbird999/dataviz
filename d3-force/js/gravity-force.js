function gravity_charge(velocity = false) {
	var _viz = {};

	var _w = 600,
		_h = 400,
		_r = 4.5,
		_nodes = [],
		_svg,
		_force,
		_velocity;

	if (velocity) {
		_velocity = true;
		var previousPoint;
	}

	_viz.render = function(_id) {
		if (!_svg) {
			_svg = d3.select(_id)
				.append("svg")
					.attr("width", _w)
					.attr("height", _h);

			_svg.append('rect')
				.attr('x', 0)
				.attr('y', 0)
				.attr('width', _w)
				.attr('height', _h)
				.style('fill', '#fafafa')
				.style('stroke', '#ddd')
		}

		if (_force) {
			_force.on("tick", function () {
				_svg.selectAll("circle")
				  .attr("cx", function (d) {return d.x;})
				  .attr("cy", function (d) {return d.y;});
			});
		}

		_svg.on("mousemove", function () {
			var point = d3.mouse(this);
			if (_velocity) {
				var node = {
					x: point[0],
					y: point[1],
					vx: previousPoint?point[0]-previousPoint[0]:point[0],
					vy: previousPoint?point[1]-previousPoint[1]:point[1]
				};
				previousPoint = point;
			} else {
				var node = {x: point[0], y: point[1]};
			}

			_svg.append("circle")
		  .data([node])
			  .attr("class", "node")
			  .attr("cx", function (d) {return d.x;})
			  .attr("cy", function (d) {return d.y;})
			  .attr("r", 1e-6)
				.style('fill', 'steelblue')
			.transition().duration(500)
			  .attr("r", _r)
			.transition()
			  .delay(15000)
			  .attr("r", 1e-6)
			  .on("end", function () {
			      _nodes.shift();
			      _force.nodes(_nodes);
			  })
			  .remove();

			_nodes.push(node);
			_force.nodes(_nodes);
		});
	}

	_viz.width = function (w) {
			if (!arguments.length) return _w;
			_w = w;
			return _viz;
	};

	_viz.height = function (h) {
			if (!arguments.length) return _h;
			_h = h;
			return _viz;
	};

	_viz.radius = function (r) {
			if (!arguments.length) return _r;
			_r = r;
			return _viz;
	};

	_viz.force = function (f) {
			if (!arguments.length) return _force;
			_force = f;
			return _viz;
	};

	return _viz;
}

var r = 4.5
var gcViz = gravity_charge()
	.radius(r)
	.force(
		d3.forceSimulation()
			.velocityDecay(0.8)
			.alphaDecay(0)
			.force("collision", d3.forceCollide(r + 0.5).strength(1))
	)
gcViz.render("#gravity-charge-viz");
