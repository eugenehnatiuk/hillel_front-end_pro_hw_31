import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import productList from './dbProductlist.mjs';
import promoList from './dbPromoList.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = fastify();

// GET
server.register(fastifyStatic, {
  root: join(__dirname, '../build'),
});

server.setNotFoundHandler((_, relply) => {
  return relply.sendFile('index.html');
});

// server.get('/products/:productCategory', async (request, reply) => {
//   const productCategory = request.params.productCategory;
//   try {
//     const filteredProducts = productList.filter(
//       (product) => product.category === productCategory
//     );

//     reply.send(filteredProducts);
//   } catch (error) {
//     reply.code(500).send({ error: 'Internal server error' });
//   }
// });
server.get('/products/', async (request, reply) => {
  const productCategory = request.query.category;
  try {
    const filteredProducts = productList.filter(
      (product) => product.category === productCategory
    );

    reply.send(filteredProducts);
  } catch (error) {
    reply.code(500).send({ error: 'Internal server error' });
  }
});

server.get('/promo', async (_, reply) => {
  reply.send(promoList);
});

/*
// POST
server.post('/order', (request, reply) => {
  try {
    // Получение данных из тела запроса
    const data = request.body;

    // Выполнение логики обработки данных заказа
    // Например, сохранение данных в базу данных или отправка уведомлений

    // Отправка ответа клиенту
    reply.send({ success: true, message: 'Order received successfully' });
  } catch (error) {
    // В случае ошибки отправляем ответ с ошибкой
    reply.code(500).send({ success: false, message: 'Error processing order' });
  }
}); */

const port = process.env.PORT || 7000;
const host = process.env.HOST || '127.0.0.1';

server
  .listen({ port, host })
  .then((address) => {
    console.log(`Server was started at ${address}`);
  })
  .catch((err) => {
    console.error(`ATTENTION couldn't start the server: ${err}`);
  });
