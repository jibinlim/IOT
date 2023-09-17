const express = require('express');
const indexRouter = require('./routes/index');
const models = require('./models/index');
const app = express();
app.use(express.json());
app.use('/', indexRouter);
models.sequelize
  .authenticate()
  .then(() => {
    models.sequelize
      .sync()
      .then(() => {
        console.log('Sequelize sync success');
      })
      .catch((err) => {
        console.error('Sequelize sync failed', err);
      });
  })
  .catch((err) => {
    console.error('DB connection fail', err);
  });

app.get('/', (req, res) => {
  res.send('Hi');
});

app.listen(3000, () => {
  console.log('3000번 포트에서  대기중');
});
