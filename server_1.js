const express = require('express');
const app = express();
const cors = require('cors');
const port = 8383;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/info/:dynamic', (req, res) => {
    const time = new Date().toUTCString();
    const { dynamic } = req.params;
    const { key } = req.query;
    console.log(time, dynamic, key);
    res.status(200).json({ info: "preset text 💜" })
});

app.post('/', (req, res) => {
    const { parcel } = req.body;
    console.log(parcel);
    if (!parcel) {
        return res.status(400).send({ status: 'failed' });
    }
    res.status(200).send({ status: 'received' });
})

app.get('/', (req, res) => {
    res.sendFile('index1.html', { root: __dirname + '/public' });
});


app.listen(port, () => console.log(`Server has started on port: ${port}`));

