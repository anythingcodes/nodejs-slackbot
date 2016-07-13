# Building Chatbots with Node.js

A _Building Chatbots with Node.js_ workshop offered by O'Reilly Publishing. This repo focuses on using the Slack API to make a conversational Slackbot.

1. Add your chatbot's API token to a new `.token` file with the following format:
```module.exports = {
       'SLACK_TOKEN': 'QQQQ'
   };```
2. Run `npm i` to install dependencies. 
3. Run the app with `node app.js`.
4. Start chatting with your Slackbot!

# Messy Class Notes

Messy class notes. Cleanup will occur shortly!

## Day 1
### Links

- CourtBot: https://medium.com/@colinmegill/conversational-ui-isnt-a-fad-a-tale-of-5-bots-here-to-stay-364e089142bb#.x144r7v2y
    - Tickets paid via SMS with similar interface, only string-based. Presented at Code for America.
    
### Present landscape & culture

- Bot = chat interface but not conversational
- Conversational UI = has context within conversation, e.g. Alexa, Amazon Echo
- Different platforms imply different experiences, especially nationally
- Examples: Wargames, 2001, Her
    - When you build a bot, you're building a character in someone's life
    - There are rules of engagement for a bot that are closer to human conventions
- x.ai - A scheduling assistant, you CC it and it responds on your behalf and walk through a series of email addresses with all parties involved
- You can develop for Siri
- Reach = with conversational interface, you have install base already of people who use FB messenger for instance.
    - The idea is that users would just chat to a bot instead of download anything, especially to download any location-based services
    - App installs are too high of a barrier to entry
    - Instead, if there's a phone number you can text to, or a service you're interacting with, that's a game-changer
    - Has identifier with phone number --> enables categorically different experience because of the ubiquity of mobile and the mobile OS
    - RNN and artificial neural networks --> opportunities have dramatically changed with machine learning (will talk about it more tomorrow)
        - Too many possibilities of what someone might say in a text-based convo, have to train with human trainers
        - In combinatorics, there's a challenge with managing state
            - One of the ways to keep things sane is to have a dropdown (_here are the available options, or things I can do as a bot_). Three areas of bot development:
                - Hardcoding: Matching on regex, every interaction is handcoded
                - Platforms: Services provide some level of help to you on machine-learning end (services include wit.ai and houndify)
                    - Facebook just bought wit.ai, so they're investing to make sure the NLP problem is solved --> problem = taking text and translating it into structured data. Wit.ai has TONS of funding to tackle AI model problems, so is a good technology to invest in.
                - Machine-learning (ML): You are responsible for building the model and handling all machine interactions, instead of a service
        - Natural Language Processing (NLP): Te?
            - Very difficult to understand context in conversational UI
            - Microsoft Cognitive Services API: Bot where, when blind or visually impaired, you put on goggles and the camera will take in environment and faces around you, bot will recognize faces and emotions, send to cloud-based image recognition service, talks to person and tells them what it sees --> acts as a vision-to-text translation
    - Motion.ai: Defining a conversational flow in proprietary software
        - We should use this!
- Recommendation to use API instead of proprietary service since it changes rapidly. Also starting with a menu with fixed functionality. 
- http://alistapart.com/article/designing-the-conversational-ui
- http://alistapart.com/article/all-talk-and-no-buttons-the-conversational-ui 
- Node is perfect for building bots because it's evented --> dig into Node SDKs for Watson

### Chat Questions

- Botkit: https://github.com/howdyai/botkit
- Recommendation: Get into machine learning if you're in college
- Watson Developer Cloud: https://www.ibm.com/watson/developercloud/ (has Node SDK)
- How to make a better bot: https://chatbotsmagazine.com/how-to-make-a-better-bot-c038626fd401#.bjwbbzgrj
- http://beepboophq.com

### Why Node?  
 
### Representing States

Recommendation to use a diagramming program for any states.

- What's your phone number? / DEFAULT
    - INVALID_PHONE
    - IS_VALID_PHONE / 555 555 5555
       
### Use cases

### Design challenges & opportunities


## Day 2

TBA