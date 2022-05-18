var granimInstance = new Granim({
	element: "#canvas-complex",
	direction: "left-right",
	isPausedWhenNotInView: true,
	image: {
		stretchMode: ["stretch", "stretch-if-bigger"],
	},
	states: {
		"default-state": {
			gradients: [
				[
					{ color: "#833ab4", pos: 0.2 },
					{ color: "#fd1d1d", pos: 0.8 },
					{ color: "#38ef7d", pos: 1 },
				],
				[
					{ color: "#40e0d0", pos: 0 },
					{ color: "#ff8c00", pos: 0.2 },
					{ color: "#ff0080", pos: 0.75 },
				],
			],
		},
	},
});
