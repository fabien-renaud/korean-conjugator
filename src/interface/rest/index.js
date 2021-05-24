import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use('/api/v1', routes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`App listening at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
});
