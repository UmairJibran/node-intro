const Express = require('express');
const app = Express();

app.use(Express.json({ limit: '10mb' }));
app.use(Express.urlencoded({ extended: true, limit: '1mb' }));

const PORT = process.env.PORT || 8080;

app.get('/', (_request, response) => {
  return response.sendStatus(204);
});

app.post('/', (request, response) => {
  const { num1, num2 } = request.body;

  return response.status(200).json({
    sum: num1 + num2,
  });
});

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
