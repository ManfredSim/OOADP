const express = require('express');
const router = express.Router();
const Bill = require('../models/BillPayment');
const CreditCard = require('../models/CreditCard');
const DebitCard = require('../models/DebitCard');

router.get('/billList', (req, res) => {
    Bill.findAll({
        raw: true
    }).then((bills) => {
        res.render('./templates/billList', {
            bills: bills
        })
    })
        .catch(err => console.log(err))

});

router.get('/billPayment', (req, res) => {
    res.render('./templates/billPayment');
});

router.post('/billPayment', (req, res) => {
    let prefix = req.body.prefix;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let country = req.body.country;
    let nric = req.body.nric;
    let email = req.body.email;
    let address = req.body.address;
    let contact_no = req.body.contact_no;
    let payment_method = req.body.payment_method;
    // Multi-value components return array of strings or undefined
    Bill.create({
        prefix,
        first_name,
        last_name,
        country,
        nric,
        email,
        address,
        contact_no,
        payment_method
    }).then(bill => {
        if (payment_method == "Credit Card") {
            res.redirect('/bill/creditcard')
        } else if (payment_method == "Debit Card") {
            res.redirect('/bill/deditcard');
        } else if (payment_method == "Paypal") {
            res.redirect('https://www.paypal.com/in/signin');
        }
    })
        .catch(err => console.log(err))
});

router.get('/creditcard', (req, res) => {
    res.render('./templates/creditcard');
});

router.post('/creditcard', (req, res) => {
    let creditcardtype = req.body.creditcardtype;
    let accountNo = req.body.accountNo;
    let payAmt = req.body.payAmt;
    let cardNo = req.body.cardNo;
    let cardExpiry = req.body.cardExpiry;
    let cardVerify = req.body.cardVerify;
    CreditCard.create({
        creditcardtype,
        accountNo,
        payAmt,
        cardNo,
        cardExpiry,
        cardVerify
    }).then(creditcard => {
        res.redirect('/billList', );
    })
        .catch(err => console.log(err))
});

router.get('/debitcard', (req, res) => {
    res.render('./templates/debitcard');
});

router.post('/debitcard', (req, res) => {
    let debitcardtype = req.body.debitcardtype;
    let accountNo = req.body.accountNo;
    let payAmt = req.body.payAmt;
    let cardNo = req.body.cardNo;
    let cardExpiry = req.body.cardExpiry;
    let cardVerify = req.body.cardVerify;
    DebitCard.create({
        debitcardtype,
        accountNo,
        payAmt,
        cardNo,
        cardExpiry,
        cardVerify
    }).then(debitcard => {
        res.redirect('/billList');
    })
        .catch(err => console.log(err))
})

module.exports = router;