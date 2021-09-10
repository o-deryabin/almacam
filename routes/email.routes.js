const { Router } = require("express");
const mailer = require("../nodemailer");

const router = Router();

router.post("/send", async (req, res) => {
  try {
    if (!req.body.firstname || !req.body.tel) {
      return res.status(400).json({ message: "Не все данные указаны" });
    }

    const message = {
      to: "olegderyabin22@gmail.com", // list of receivers
      subject: "Новая заявка!!!", // Subject line
      text: `Данные человека

      Имя: ${req.body.firstname}
      Телефон: ${req.body.tel}
      Дата заявки: ${new Date().toLocaleDateString()}`, // plain text body
    };

    mailer(message);

    console.log(req.body);

    res.status(200).json({ message: "Заявка отправлена" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "что-то пошло не так" });
  }
});

module.exports = router;

//mail.almacam.kz@gmail.com
//mEw2Qr4@b&xZ)kT8mB!1
