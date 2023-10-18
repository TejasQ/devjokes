import { AddJoke, models } from '@teamkeel/sdk';

const riddles = [
    {
        "question": "What is the most used language in programming?",
        "answer": "Profanity."
    },
    {
        "question": "Why don't keyboards sleep?",
        "answer": "Because they have two shifts."
    },
    {
        "question": "Which famous rapper knows Assembly?",
        "answer": "JZ."
    },
    {
        "question": "Why do programmers keep pressing the F5 button?",
        "answer": "Because it\u2019s refreshing."
    },
    {
        "question": "What do you call a computer that sings?",
        "answer": "A dell."
    },
    {
        "question": "Why are assembly programmers always soaking wet?",
        "answer": "Because they work below C level."
    },
    {
        "question": "Tell Something About You.(To A Programmer)",
        "answer": "I'm a writer, but no one in my relatives can read what i write."
    },
    {
        "question": "Why do programmers prefer dark mode?",
        "answer": "Because light attracts bugs"
    },
    {
        "question": "Favourite actor of a JavaScript Developer is?",
        "answer": "JSON Statham ![LITTLE BOBBY](./images/E12OmzjXoAAzVvh.jpeg)"
    },
    {
        "question": "Why do they call it hyper text?",
        "answer": "Too much JAVA."
    },
    {
        "question": "Who won the debate for the best name for loop variable?",
        "answer": "i won."
    },
    {
        "question": "How did the Coder CEO build his company headquarters?",
        "answer": "By calling the Constructor();"
    },
    {
        "question": "What is Hardware?",
        "answer": "The part of the computer which you can kick."
    },
    {
        "question": "Who is a programmer?",
        "answer": "A programmer is a machine who turns coffee into code."
    },
    {
        "question": "Why NodeJs developer need Helmet?",
        "answer": "To Secure Headers."
    },
    {
        "question": "What do programmers inherit?",
        "answer": "Technical Debt"
    },
    {
        "question": "How do you know if someone uses Linux?",
        "answer": "Don't worry, they'll tell you."
    },
    {
        "question": "What do you call a programmer from Finland?",
        "answer": "Nerdic"
    },
    {
        "question": "How did the developer announce her engagement?",
        "answer": "`this.engaged = true`"
    },
    {
        "question": "Why is the Javascript developer sad?",
        "answer": "Because they do not Node how to Express themselves."
    },
    {
        "question": "How do you comfort a JavaScript bug?",
        "answer": "You console it."
    },
    {
        "question": "Why couldn't the React component understand the joke?",
        "answer": "It didn't get the context."
    },
    {
        "question": "Why did the JavaScript developer leave?",
        "answer": "Because she didn't get arrays"
    },
    {
        "question": "What is the object-oriented way to become wealthy?",
        "answer": "Inheritance."
    },
    {
        "question": "Why do functions always break up?",
        "answer": "Because they have constant arguments."
    },
    {
        "question": "Why do programmers get confused between Halloween and Christmas?",
        "answer": "Because OCT 31 = DEC 25"
    },
    {
        "question": "What is programmer's favourite hangout place?",
        "answer": "Foo Bar"
    },
    {
        "question": "What kind of doctors fixes broken websites?",
        "answer": "A URLogist"
    },
    {
        "question": "Why does no one likes SQLrillex?",
        "answer": "He keeps dropping the database"
    },
    {
        "question": "How did html get drunk?",
        "answer": "It had too many <br/>"
    },
    {
        "question": "Why do C# and Java developers keep breaking their keyboards ?",
        "answer": "Because they use a strongly typed language."
    },
    {
        "question": "Why did the developer die in the shower?",
        "answer": "He read the shampoo bottle instructions: Lather. Rinse. Repeat."
    },
    {
        "question": "Why do fish not like React?",
        "answer": "Because it has Hooks \ud83d\ude02."
    },
    {
        "question": "How long does a loop last?",
        "answer": "For a while"
    },
    {
        "question": "What did the developer said to the repository?",
        "answer": "FORK YOU!"
    },
    {
        "question": "What do you call the security outside of a samsung store?",
        "answer": "Guardians of the Galaxy"
    },
    {
        "question": "Why does Python live on land?",
        "answer": "Because it's above C-level"
    },
    {
        "question": "How are computers and air conditioners similar?",
        "answer": "They are both useless when you open windows"
    },
    {
        "question": "Who is a programmer?",
        "answer": "A person who fixed a problem that you don't know you have, in a way you don't understand."
    },
    {
        "question": "Why do Java developers wear glasses?",
        "answer": "Because they can't C# !"
    },
    {
        "question": "How do functions break up?",
        "answer": "They stop calling each other."
    },
    {
        "question": "0 is false and 1 is true, right?",
        "answer": "1"
    },
    {
        "question": "How many programmers does it take to change a light bulb?",
        "answer": "None \u2013 It\u2019s a hardware problem"
    },
    {
        "question": "Why do software engineers consistently stir up Halloween and Christmas?",
        "answer": "Because Oct 31 = Dec 25"
    },
    {
        "question": "Have you heard of the band with 1023 megabytes?",
        "answer": "No, they just haven't had a gig yet."
    },
    {
        "question": "What screams \"I'm insecure\"?",
        "answer": "Http"
    },
    {
        "question": "Why dod the software developer go broke?",
        "answer": "They used up all their cache."
    },
    {
        "question": "Why did the react class component feel relieved?",
        "answer": "Because it was now off the hook."
    },
    {
        "question": "Why did the child component have such great self-esteem?",
        "answer": "Because its parent kept giving it props!"
    },
    {
        "question": "Which type of shooting always hurt the shooter?",
        "answer": "Trouble-shooting!"
    },
    {
        "question": "What's the object oriented way to become wealthy?",
        "answer": "Inheritance."
    },
    {
        "question": "What's did the Git engineer ask the waitress for?",
        "answer": "A fork."
    },
    {
        "question": "What is a computer's favorite beat?",
        "answer": "An algo-rhythm"
    },
    {
        "question": "Why integration testing is required after unit testing?",
        "answer": "![umbrella](./images/umbrella.gif)"
    },
    {
        "question": "What's did the Git engineer ask the waitress for?",
        "answer": "A fork."
    },
    {
        "question": "Why do programmers and coders hate nature?",
        "answer": "It has too many bugs."
    },
    {
        "question": "Why do kayakaers make bad programmers?",
        "answer": "Because they are afraid of waterfall."
    }
]

export default AddJoke(async (ctx, inputs) => {
    for (const riddle of riddles) {
        await models.joke.create({
            question: riddle.question,
            answer: riddle.answer,
        })
    }
});