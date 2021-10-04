const { Router } = require("express");
const User = require("../models/User");

const router = Router();

router.post("/send", async (req, res) => {
  try {
    if (!req.body.site || !req.body.firstname || !req.body.tel) {
      return res.status(400).json({ message: "Не все данные указаны" });
    }

    const { site, firstname, tel } = req.body;

    const user = new User({ site, firstname, tel });

    await user.save();

    res.status(200).json({ message: "Заявка отправлена" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "что-то пошло не так" });
  }
});

module.exports = router;
