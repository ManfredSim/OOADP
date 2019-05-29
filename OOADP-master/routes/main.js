const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const title = 'OOADP';
	res.render('index', {title: title}) // renders views/index.handlebars
});

router.get('/billPayment', (req, res) => {
    res.render('billPayment');
});

module.exports = router;