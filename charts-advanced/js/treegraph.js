function tree() {
  var _chart = {};

  var _width = 1200, _height = 1600,
    _margins = {top: 30, left: 120, right: 100, bottom: 30},
    _svg,
    _nodes,
    _i = 0,
    _duration = 300,
    _bodyG,
    _root;

  _chart.render = function (id) {
    if (!_svg) {
      _svg = d3.select('#' + id).append("svg")
        .attr("height", _height)
        .attr("width", _width);
    }
    renderBody(_svg);
  };

  function renderBody(svg) {
    if (!_bodyG) {
      _bodyG = svg.append("g")
        .attr("class", "body")
        .attr("transform", function (d) {
            return "translate(" + _margins.left
                    + "," + _margins.top + ")";
        });
    }
    _root = d3.hierarchy(_nodes);
    render(_root);
  }

  function render(root) {
    var tree = d3.tree()
      .size([
          (_height - _margins.top - _margins.bottom),
          (_width - _margins.left - _margins.right)
      ]);

    tree(root);
    renderNodes(root);
    renderLinks(root);
  }

  function renderNodes(root) {
    var nodes = root.descendants();

    var nodeElements = _bodyG.selectAll("g.node")
      .data(nodes, function (d) {
        return d.id || (d.id = ++_i);
      });

    var nodeEnter = nodeElements.enter().append("g")
      .attr("class", "node")
      .attr("transform", function (d) {
        return "translate(" + d.y
          + "," + d.x + ")";
      })
      .on("click", function (d) {
        toggle(d);
        render(_root);
      });

    nodeEnter.append("circle")
      .attr("r", 4);

    var nodeUpdate = nodeEnter.merge(nodeElements)
      .transition().duration(_duration)
      .attr("transform", function (d) {
          return "translate(" + d.y + "," + d.x + ")";
      });

    nodeUpdate.select('circle')
      .style("fill", function (d) {
        return d._children ? "lightsteelblue" : "#fff";
      });

    var nodeExit = nodeElements.exit()
      .transition().duration(_duration)
      .attr("transform", function (d) {
        return "translate(" + d.y
          + "," + d.x + ")";
      })
      .remove();

    nodeExit.select("circle")
      .attr("r", 1e-6)
      .remove();

    renderLabels(nodeEnter, nodeUpdate, nodeExit);
  }

  function renderLabels(nodeEnter, nodeUpdate, nodeExit) {
    nodeEnter.append("text")
     .attr("x", function (d) {
       return d.children || d._children ? -10 : 10;
     })
     .attr("dy", ".35em")
     .attr("text-anchor", function (d) {
       return d.children || d._children ? "end" : "start";
     })
     .text(function (d, i) {
			 return d.data.name;
			 if (d.depth == 3 | d.depth == 4) {
				 if (i % 2 == 0) {
					 return d.data.name;
				 } else {
					 return '';
				 }
			 } else {
				 return d.data.name;
			 }
     })
     .style("fill-opacity", 1e-6);

     nodeUpdate.select("text")
       .style("fill-opacity", 1);

     nodeExit.select("text")
		   .style("fill-opacity", 1e-6)
		   .remove();
  }

  function renderLinks(root) {
      var nodes = root.descendants().slice(1);

      var link = _bodyG.selectAll("path.link")
          .data(nodes, function (d) {
                          return d.id || (d.id = ++_i);
                      });

      link.enter().insert("path", "g")
                  .attr("class", "link")
              .merge(link)
              .transition().duration(_duration)
                  .attr("d", function (d) {
                      return generateLinkPath(d, d.parent);
                  });

      link.exit().remove();
  }

  function generateLinkPath(target, source) {
      var path = d3.path();
      path.moveTo(target.y, target.x);
      path.bezierCurveTo((target.y + source.y) / 2, target.x,
              (target.y + source.y) / 2, source.x, source.y, source.x);
      return path.toString();
  }

  function toggle(d) {
      if (d.children) {
          d._children = d.children;
          d.children = null;
      } else {
          d.children = d._children;
          d._children = null;
      }
  }

  _chart.width = function (w) {
      if (!arguments.length) return _width;
      _width = w;
      return _chart;
  };

  _chart.height = function (h) {
      if (!arguments.length) return _height;
      _height = h;
      return _chart;
  };

  _chart.margins = function (m) {
      if (!arguments.length) return _margins;
      _margins = m;
      return _chart;
  };

  _chart.nodes = function (n) {
      if (!arguments.length) return _nodes;
      _nodes = n;
      return _chart;
  };

  return _chart;
}

var treeGraph = tree();
