const c = require("./consts")
	

	let complaint1 = {
	    text: "I'm not getting enough money",
	    type: c.constObj.FINANCE
	}
	

	let complaint2 = {
	    text: "My salary hasn't come in yet",
	    type: c.constObj.FINANCE
	}
	

	let complaint3 = {
	    text: "I'm always full of energy",
	    type: c.constObj.EMOTIONS
	}
	

	const ch = require("./complaintsHandler")
	

	ch.handleComplaint(complaint1) //should print "Money doesn't grow on trees, you know."
	ch.handleComplaint(complaint2) //should print "Money doesn't grow on trees, you know."
	ch.handleComplaint(complaint3) //should print "It'll pass, as all things do, with time."
