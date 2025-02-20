import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://127.0.0.1:5500'],
  credentials: true,
}))

app.get('/', function(req, res) {
  res.json('Hi World');
})

app.listen(5000, function() {
  console.log('Server');
})