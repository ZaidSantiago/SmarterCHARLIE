import { marked } from "marked";
let messages = []
const chatLog = document.getElementById('chat-log');
const message = document.getElementById('message');
const form = document.querySelector('form')
const chatContainer = document.querySelector('#chat_container')

const botImageURL = 'img/bot.svg';
const userImageURL = "img/user.svg";
let loadInterval

document.getElementById('backgroundButton').addEventListener('click', function () {
  const app = document.getElementById('app');
  app.classList.toggle('gif-background');
});

// 3 Dots thing
function loader(element) {
    element.textContent = ''

    loadInterval = setInterval(() => {
        // Update the text content of the loading indicator
        element.textContent += '.';

        // If the loading indicator has reached three dots, reset it
        if (element.textContent === '....') {
            element.textContent = '';
        }
    }, 300);
}

// Type Writer Effect
function typeText(element, texts) {
    let index = 0
    var msg = new SpeechSynthesisUtterance();
    msg.rate = 3;
    msg.text = texts;
    msg.volume = 1;
    console.log(msg)
    window.speechSynthesis.speak(msg);

    
    
    let interval = setInterval(() => {
        if (index < texts.length) {
            element.innerHTML += texts.charAt(index)
            index++
            
        } else {
            clearInterval(interval)
            element.innerHTML = marked(texts);
            if (texts.includes("hi") || texts.includes("Hi"))  {
              console.log("hi");
            }
             if (texts.includes("youtube")) {
              alert("Youtube commands are not supported yet.");
            }
            if (texts.includes("smith") || texts.includes("Smith")) {
              console.log('smith triggered')
              window.open('http://smithcsrobot.weebly.com/');
            }
            if (texts.includes("riley") || texts.includes("Riley")) {
              console.log('Riley triggered')
              window.open('https://docs.google.com/document/d/1F9oJiHEYS4PZlm9YnIu5rggM_f9cigHPBA1B5solzTw/edit?usp=sharing');
            }
            if (texts.includes("lance") || texts.includes("Lance")) {
              console.log('Lance triggered')
              window.open('https://docs.google.com/document/d/1wLyonAcoEwN7iDoNn1ucDn8Axw_5uXWqqIGK7RF7vGM/edit?usp=sharing');
            }
            if (texts.includes("jaycoby") || texts.includes("Jaycoby")) {
              console.log('Jaycoby triggered')
              window.open('https://docs.google.com/document/d/1iLLLc8X2czZC94hkxvbPym3DImLHaWUMOoDhsVGDE7M/edit?usp=sharing');
            }
            if (texts.includes("myself") || texts.includes("Myself")) {
              console.log('charlie image triggered')
              window.open('https://i.pinimg.com/originals/de/23/83/de238328593da21dbf9185ed3f7d991d.gif');
            }
            if (texts.includes("mcdonalds") || texts.includes("McDonalds")) {
              console.log('McDonalds triggered')
              window.open('https://www.google.com/search?q=mcdonalds+near+me&rlz=1C1GCEA_enUS1078US1079&oq=mcdonalds+near+me&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIQCAEQLhjHARixAxjRAxiABDIKCAIQABixAxiABDINCAMQABiDARixAxiKBTINCAQQABixAxjJAxiABDIKCAUQABiSAxiABDIKCAYQABiSAxiKBTIKCAcQABixAxiABDINCAgQLhivARjHARiABNIBCDE4MzlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8');
            }
        
            if (texts.includes("infinite money") || texts.includes("Infinite Money")) {
              console.log('Infinite Money Glitch Triggered')
              window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0');
            }

            if (texts.includes("chess") || texts.includes("Chess")) {
              console.log('Chess With CHARLIE Triggered')
              window.open('https://chesswcharlie.zspc.org/');
            }

            if (texts.includes("zaid") || texts.includes("Zaid") && texts.includes("soul") || texts.includes("Soul")) {
              console.log('Sparring Footage Triggered')
              window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0');
            }
            
             if (texts.includes("location")) {
              alert("Location services are not supported yet.");
            }
        
            
            
             if (texts.includes("canelo") || texts.includes("Canelo")) {
              console.log('canelo triggered')
              window.open('https://www.youtube.com/watch?v=6HoyuPW9vcw');
            }
            
            if (texts.includes("print kevin") || texts.includes("Print Kevin")) {
              console.log('print kevin triggered')
              print('img/kevin.pdf');
            }
        
            if (texts.includes("kevin") || texts.includes("Kevin")) {
              console.log('kevin triggered')
              window.open('img/kevin.pdf');
            }
            
             if (texts.includes("canelo") || texts.includes("Canelo")) {
              console.log('canelo triggered')
              window.open('https://www.youtube.com/watch?v=6HoyuPW9vcw');
            }
            if (texts.toLowerCase().includes("searching for")) {
              const searchQuery = texts + texts.replace("Searching for", "").trim() + texts.replace("...","").trim() + texts.replace(".","").trim();
              const encodedQuery = encodeURIComponent(searchQuery); // Encode the query
            
              // Construct the Google search URL
              const googleSearchURL = `https://www.google.com/search?q=${encodedQuery}`;
            
              // Open a new tab with the Google search URL
              const newTab = window.open(googleSearchURL, "_blank");
            
              if (newTab) {
                console.log(`Initiated a Google search for "${searchQuery}".`);
              } else {
                console.log("Failed to open a new tab. Please enable pop-ups for this site.");
              }
            }
        }
    }, 40)
}

// Unique ID For Typewriter
function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
}

// Append Chats
function chatStripe(isAi, value, uniqueId) {
  if (isAi) {
    return `
    <div class="wrapper ai">
        <div class="chat">
            <div class="profile">
                <img 
                  src="${botImageURL}" 
                  alt="bot" 
                />
            </div>
            <div class="message" id="${uniqueId}">
                ${value}
            </div>
        </div>
    </div>
    `;
} else {
    return `
    <div class="wrapper false">
        <div class="chat">
            <div class="profile">
                <img 
                  src="${userImageURL}" 
                  alt="user" 
                />
            </div>
            <div class="message" id="${uniqueId}">${marked.parse(value)}</div>
        </div>
    </div>
    `;
}
    
}

// Handling Forms Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageText = message.value;
    const newMessage = {"role": "user", "content": `${messageText.trim()}`}
    messages.push(newMessage)
    message.value = '';
    chatContainer.innerHTML += chatStripe(false, messageText)
    const uniqueId = generateUniqueId();
    chatContainer.innerHTML += chatStripe(true, "", uniqueId);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    const messageDiv = document.getElementById(uniqueId);

    loader(messageDiv)
    
    
    fetch('https://smartcharlie.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages
        })
    })
    .then(res => res.json())
    .then(data => {
        let newAssistantMessage = {"role": "assistant", "content": `${data.completion.content}`}
        messages.push(newAssistantMessage)
        clearInterval(loadInterval);
        messageDiv.innerHTML = ''
        const parsedData = data.completion.content.trim()
        typeText(messageDiv, parsedData)
        
    })
})

message.addEventListener('keydown', (e) => {
    if (e.key === "Enter" && e.shiftKey) { 
        return
    }
    else if (e.key === "Enter") {
      e.preventDefault();
      form.dispatchEvent(new Event("submit")); 
  }
});