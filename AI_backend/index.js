let express = require('express');
let bodyParser = require('body-parser');
var spawn = require("child_process").spawn;
let cors = require('cors');

const PORT = 5000;

let app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    let { text, noOfLines } = req.body;
    console.log(`!!`)
    console.log(text);
    console.log(noOfLines);
    var process = spawn('python', ["./script.py", text, noOfLines]);
    console.log('Reached here1');
    process.stdout.on('data', (data) => {
        console.log('Reached here')
        res.send(data);
    })
    // res.send("Got the text");
})

app.get('/', (req, res) => {
    var process = spawn('python', ['./rand.py'])
    process.stdout.on('data', (data) => {
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})