const express = require('express')

const router = express.Router()

const uploader = require('../configs/cloudinary.config')
const transporter = require('../configs/nodemailer.config')

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }

    res.json({
        secure_url: req.file.secure_url
    });
})

router.post('/sendEmail', (req, res) => {

    let { emailUser, emailOwner, subject, message } = req.body

    let mail = {
        from: emailUser,
        to: emailOwner,
        subject: subject,
        text: message,
        html: `<b>${message}</b>`
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
  

})

module.exports = router;