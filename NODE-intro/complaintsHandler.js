const c = require("./consts")
	

	const handleComplaints = function(complaint) {
	    if(complaint.type === c.constObj.FINANCE) {
	        return console.log("Money doesn't grow on trees, you know.")
	    } else if (complaint.type === c.constObj.WEATHER) {
	        return console.log("It is the way of nature. Not much to be done.")
	    } else if (complaint.type === c.constObj.EMOTIONS) {
	        return console.log("It'll pass, as all things do, with time.")
	    }
	

	}
	

	module.exports.handleComplaint = handleComplaints
