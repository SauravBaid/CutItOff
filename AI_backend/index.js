let express = require('express');
let bodyParser = require('body-parser');
var spawn = require("child_process").spawn;
const cors = require('cors');

const PORT = 5000;

let app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/', (req, res) => {
//     let { text, noOfLines } = req.body;
//     var process = spawn('python3', ["./script.py", text, noOfLines]);
//     console.log('Reached here1');
//     process.stdout.on('data', (data) => {
//         console.log('Reached here')
//         res.send(data);
//     })
// })

const getArticles = () => {
    return new Promise((resolve, reject) => {
        var process = spawn('python3', ["./scrapper.py"]);

        process.stdout.on('data', (data) => {
            data = data.toString();
            data = JSON.parse(data.replace(/'/gi, '"'));
            return resolve(data);
        })
        process.stderr.on('error', (data) => {
            console.log(`error`);
            return reject(data);
        })
        process.stdout.on('error', (data) => {
            console.log(`err`);
            return reject(data);
        })

        process.stderr.on('data', (data) => {
            return reject(data);
        })
    })
}

const summarizeData = (data) => {
    return new Promise((resolve, reject) => {
        console.log(`Inside 1`);
        var process = spawn('python', ["./a.py", data]);
        console.log(`Inside 2`);
        process.stdout.on('data', (data) => {
            console.log('Inside 3');
            // console.log(data.toString());
            console.log("\n");
            return resolve(data.toString());
        })
    })
}

app.get('/timesofindia', async (req, res) => {
    try {
        console.log(1);
        const data = await getArticles();
        console.log(2);
        const finalData = [];
        let result;
        console.log(3);
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].content);
            console.log(i);
            result = await summarizeData(data[i].content);
            finalData.push({
                originalData: data[i].content,
                summarizedData: result,
                heading: data[i].heading,
                imgUrl: data[i].imgUrl,
                category: data[i].category
            });
        }
        console.log(4);
        // res.json(data);

        res.json(finalData);
    }
    catch (e) {
        return res.json(e);
    }
})

app.post('/summarizeowntext', async (req, res) => {
    try {
        const result = await summarizeData(req.body.content);
        res.json(result);
    }
    catch (e) {
        return res.json(e);
    }
})


app.get('/', (req, res) => {
    res.send("<h2>Yo. This is the AI Project Backend.</h2>");
})

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})