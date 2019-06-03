const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const title = 'OOADP';
	res.render('index', {title: title}) // renders views/index.handlebars
});

router.get('/billPayment', (req, res) => {
    res.render('./templates/billPayment');
});

router.get('/creditcard', (req, res) => {
    res.render('./templates/creditcard');
});

router.get('/debitcard', (req, res) => {
    res.render('./templates/debitcard');
});

router.get('/queueNumber', (req, res) => {
    res.render('./templates/queueNumber');
})
router.get('/doctorConsultation',(req, res) =>{
    res.render('./templates/doc_consult');
});

router.get('/collection',(req, res) =>{
    res.render('./templates/collection');
})
module.exports = router;