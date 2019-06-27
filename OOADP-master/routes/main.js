const express = require('express');
const router = express.Router();
const Allergy = require('../models/Allergy');

router.get('/', (req, res) => {
    const title = 'OOADP';
    res.render('index', { title: title }) // renders views/index.handlebars
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

router.get('/doctorConsultation', (req, res) => {
    res.render('./templates/doc_consult');
});

router.get('/collection', (req, res) => {
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

Allergy.create({
    allergy_name: 'testname1'
})

module.exports = router;