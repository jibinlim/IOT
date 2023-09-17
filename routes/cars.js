const express = require('express');
const router = express.Router();
const Car = require('../models/cars');
const Entrance = require('../models/entrances');
const Denied = require('../models/denieds');
const { NUMBER } = require('sequelize');

router.post('/', async (req, res) => {
  try {
    // number: req.body.number;
    await Car.create({ number: req.body.number });
    res.json('등록 성공');
  } catch (err) {
    res.status(401).json(err);
  }
});

router.get('/select', async (req, res) => {
  try {
    let number = req.query.number;
    if (isNaN(number)) res.json('인식 실패');
    const car = await Car.findOne({
      where: { number: number },
    });
    if (!car) {
      Denied.create({ number: number });
      res.json(false);
    } else {
      Entrance.create({ number: number });
      res.send(number);
    }
  } catch (err) {
    res.status(204).json(err);
  }
});

router.get('/count', async (req, res) => {
  try {
    const e = await Entrance.findAndCountAll({});
    const c = e.count;
    res.json(c);
  } catch (err) {
    res.status(204).json(err);
  }
});

router.get('/time', async (req, res) => {
  try {
    const number = req.query.number;
    const car_en = await Entrance.findAll({
      where: { number: number },
    });
    if (!car_en) throw new Error('들어오지 않은 차량입니다.');
    const real_time = car_en[car_en.length - 1].createdAt;
    real_time.setHours(real_time.getHours() + 9);
    const entrance = real_time.toISOString();
    const arr = entrance.split('T');
    const date = arr[0];
    const time = arr[1].split('.')[0];
    const obj = { date: date, time: time };
    res.json(obj);
  } catch (err) {
    res.status(204).json(err);
  }
});
// router.delete('/out', async(req,res) =>{
//   try{
//     let number = req.body.number;
//     const car = await Car.destroy({
//       where: {number: number},
//     });
//   } catch(err){
//     res.status(204).json(err);
//   }
// });

module.exports = router;
