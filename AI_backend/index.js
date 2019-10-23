let express = require('express');
let bodyParser = require('body-parser');
var spawn = require("child_process").spawn;

const PORT = 5000;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    let { text, noOfLines } = req.body;
    console.log(`!!`)
    console.log(text);
    console.log(noOfLines);
    var process = spawn('python3', ["./script.py", text, noOfLines]);
    console.log('Reached here1');
    process.stdout.on('data', (data) => {
        console.log('Reached here')
        res.send(data);
    })
    // res.send("Got the text");
})

const getArticles = () => {
    return new Promise((resolve, reject) => {
        // return resolve([{
        //     heading: "William Shakespeare",
        //     content: "William Shakespeare (bapt. 26 April 1564 – 23 April 1616)[a] was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.[2][3][4] He is often called England's national poet and the 'Bard of Avon'.[5][b] His extant works, including collaborations, consist of some 39 plays,[c] 154 sonnets, two long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.[7]" +
        //         "Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and twins Hamnet and Judith. Sometime between 1585 and 1592, he began a successful career in London as an actor, writer, and part-owner of a playing company called the Lord Chamberlain's Men, later known as the King's Men. At age 49 (around 1613), he appears to have retired to Stratford, where he died three years later. Few records of Shakespeare's private life survive; this has stimulated considerable speculation about such matters as his physical appearance, his sexuality, his religious beliefs, and whether the works attributed to him were written by others.[8][9][10] Such theories are often criticised for failing to adequately note that few records survive of most commoners of the period."

        //         + "Shakespeare produced most of his known works between 1589 and 1613.[11][12][d] His early plays were primarily comedies and histories and are regarded as some of the best work produced in these genres. Until about 1608, he wrote mainly tragedies, among them Hamlet, Othello, King Lear, and Macbeth, all considered to be among the finest works in the English language.[2][3][4] In the last phase of his life, he wrote tragicomedies (also known as romances) and collaborated with other playwrights."

        //         + "Many of Shakespeare's plays were published in editions of varying quality and accuracy in his lifetime. However, in 1623, two fellow actors and friends of Shakespeare's, John Heminges and Henry Condell, published a more definitive text known as the First Folio, a posthumous collected edition of Shakespeare's dramatic works that included all but two of his plays.[13] The volume was prefaced with a poem by Ben Jonson, in which Jonson presciently hails Shakespeare in a now-famous quote as 'not of an age, but for all time'.[13]"

        //         + "Throughout the 20th and 21st centuries, Shakespeare's works have been continually adapted and rediscovered by new movements in scholarship and performance. His plays remain popular and are studied, performed, and reinterpreted through various cultural and political contexts around the world."
        // }]);
        var process = spawn('python3', ["./scrapper.py"]);
        // console.log('Reached here1');
        process.stdout.on('data', (data) => {
            // console.log('Reached here')
            data = data.toString();
            // console.log(data.substring(11000, 11200));
            data = JSON.parse(data.replace(/'/gi, '"'));
            return resolve(data);
        })
    })
}

const summarizeData = (data) => {
    return new Promise((resolve, reject) => {
        console.log(`Inside 1`);
        var process = spawn('python3', ["./a.py", data]);
        console.log(`Inside 2`);
        process.stdout.on('data', (data) => {
            console.log('Inside 3');
            console.log(data.toString());
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
            result = await summarizeData(data[i].content);
            finalData.push({
                originalData: data[i].content,
                summarizeData: result,
                heading: data[i].heading
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
    var process = spawn('python', ['./rand.py'])
    process.stdout.on('data', (data) => {
        console.log(data.toString());
        data = data.toString();
        data = JSON.parse(data.replace(/'/gi, '"'));
        res.json({
            data
        });
    })
})

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})