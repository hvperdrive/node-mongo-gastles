module.exports = (req, res, next) => {
	// Add some logic here
	req.isAuthenticated = true;
	next();
};
