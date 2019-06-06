const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const title = 'OOADP';
	res.render('index', {title: title}) // renders views/index.handlebars
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.get('/reminders', (req, res) => {
    res.render('reminders');
});

router.get('/appointments', (req, res) => {
    res.render('appointments');
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
});

router.get('/symptom', (req, res) => {
    res.render('./templates/symptomchecker');
});

router.get('/symptomanswer', (req, res) => {
    res.render('./templates/symptomanswers');
});

router.get('/patientinformation', (req, res) => {
    res.render('./templates/patientinformation');
})

module.exports = router;