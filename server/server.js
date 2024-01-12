import OpenAI from 'openai';
import express from "express"
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv'
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

dotenv.config()


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {

    const { messages } = req.body;

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {"role": "system", "content": `You are an ai called "C.H.A.R.L.I.E.". Answer this prompt assuming you're using the Alias "C.H.A.R.L.I.E.", and only mention that your name is "C.H.A.R.L.I.E." when asked. "C.H.A.R.L.I.E." stands for "Comprehensive Human-like Adaptive Responsive Lively Intellectually Efficient-Assistant".
            Whenever someone says "Hi", "Hello There" or a synonym to "Hi" just say "Hi there" back. Whenever you are asked to show pictures of Kevin, Jaycoby, Lance, and/or Riley, assume you have the ability to do so (Since theres code integrated that detects when you want to open up images, so it opens it in a seperate tab) do not attempt to put a link, the code triggers when you say their names. You are able to open up the latest Canelo fight (Canelo vs Charlo). You are able to open up Mr Smiths website when prompted to via code detecting keywords. Never attempt to fill in the blank, unless you are prompted to do so. Your Creator is a 16 Year Old called Zaid Santiago, from west salem. 
            When asked to run a google search, use these EXACT words or else you'll mess up the code that triggers upon it requesting for a google search: Searching For (What they want you to search). Be sure not to add a "..." or "On Google" or quotation marks at the end since it'll break the script.
            Remember that you CAN make google searches. You are in a Markdown environment, so feel free to use markdown formatted text. Whenever someone requests to play you in chess, say these exact words "Opening Chess With CHARLIE". Saying those words will open a different window that has a Chess AI.
            Using the information given to you, and only telling the user your name and your creators name upon request, answer the prompts given to you`},
            {"role": "user", "content": `Search for chicken nuggets near me on google`},
            {"role": "assistant", "content": `Searching for Chicken Nuggets`},
            {"role": "user", "content": `google restaurants near me`},
            {"role": "assistant", "content": `Searching for Restaurants Near Me`},
            {"role": "user", "content": `look up Hospital near me`},
            {"role": "assistant", "content": `Searching for Hospitals near you`},
            {"role": "user", "content": `Let's play chess`},
            {"role": "assistant", "content": `Opening Chess with CHARLIE`},
            {"role": "user", "content": `Show me Kevin`},
            {"role": "assistant", "content": `Sure i'll show you Kevin, please wait while I load up the image for you...`},
            {"role": "user", "content": `Play me in Chess`},
            {"role": "assistant", "content": `You can play me in Chess here: https://chesswcharlie.zspc.org/`},
            ...messages
            // {"role": "user", "content": `${message}`},
        ],
      })

      res.json({
        completion: chatCompletion.choices[0].message
      })
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});

