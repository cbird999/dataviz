var veloViz = gravity_charge(true)
	.radius(r)
	.force(
		d3.forceSimulation()
			.velocityDecay(0.25)
			.alphaDecay(0)
			.force("collision", d3.forceCollide(r + 0.5).strength(1))
	)
veloViz.render("#velocity-viz");

var vizContainer = {
	'gravity-charge' : gcViz,
	'velocity-viz' : veloViz
}
