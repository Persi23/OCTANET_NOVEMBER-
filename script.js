function scrollToQuote() {
    const quoteSection = document.querySelector('.container');
    quoteSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        summary: "A novel about racial injustice in the American South.",
        cover: "./b2.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        summary: "A dystopian novel exploring surveillance and totalitarianism.",
        cover: "./b3.jpg"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        summary: "A story about the emotional development of Elizabeth Bennet.",
        cover: "b5.jpg"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        summary: "A novel of the Jazz Age, wealth, and the American Dream.",
        cover: "./b1.jpg"
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        summary: "The epic tale of Captain Ahab's obsessive quest for revenge.",
        cover: "./b4.jpg"
    },
    {
        title: "A Good Girl's Guide to Murder",
        author: "Holly Jackson",
        summary: "It is a gripping mystery about a determined teen investigating a closed murder case in her small town, uncovering dark secrets and dangerous truths.",
        cover: "./b4.jpg"
    },
    {
        title: "Charlie and the Chocolate Factory",
        author: "Roald Dahl",
        summary: "It is a whimsical tale of a poor boy, Charlie, who wins a golden ticket to tour Willy Wonka's magical chocolate factory, where adventure and life lessons unfold.",
        cover: "./b7.jpg"
    },
    {
        title: "The Witches",
        author: "Roald Dahl",
        summary: "It is a darkly enchanting story about a brave boy and his grandmother who uncover a secret society of child-hating witches and work to stop their sinister plans.",
        cover: "./b8.jpg"
    },
    {
        title: "Tell me your Dreams",
        author: "Sidney Sheldon",
        summary: "It is a psychological thriller about a woman accused of murder, unraveling a web of split personalities and shocking truths.",
        cover: "./b9.jpg"
    },
    {
        title: "Matilda",
        author: "Roald Dahl",
        summary: "It is a heartwarming story of a brilliant young girl with extraordinary powers who overcomes neglectful parents and a tyrannical headmistress to embrace her true potential.",
        cover: "./b10.jpg"
    },
    {
        title: "The Heatwave",
        author: "Katerina Diamond",
        summary: "It is a chilling psychological thriller about a woman returning to her hometown to confront dark secrets and unravel the mystery of a missing girl tied to her past.",
        cover: "./b11.jpg"
    },
    {
        title: "Don't Blink",
        author: "James Patterson and Howard Roughan",
        summary: "It is a fast-paced thriller about a journalist who witnesses a brutal murder at a famous New York restaurant and finds himself entangled in a dangerous conspiracy.",
        cover: "./b13.jpg"
    },
    {
        title: "Theodore Boone: Kid Lawyer",
        author: "John Grisham",
        summary: "It is a legal mystery about a 13-year-old aspiring lawyer who gets caught up in a high-stakes murder trial, using his wit and knowledge of the law to uncover the truth.",
        cover: "./b14.jpg"
    },
    {
        title: "Into the Water",
        author: "Paula Hawkins",
        summary: "It is a psychological thriller about a small town's dark secrets, where the mysterious deaths of two women in a river unravel buried truths and hidden connections.",
        cover: "./b15.jpg"
    },
    {
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        summary: "It is a psychological thriller that follows an alcoholic woman who becomes entangled in a missing person case after witnessing something suspicious during her daily train ride.",
        cover: "./b16.jpg"
    },
    {
        title: "The BFG",
        author: "Roald Dahl",
        summary: "It is a whimsical story about a young girl named Sophie who befriends the Big Friendly Giant (BFG), and together they embark on an adventure to stop the other giants from terrorizing the world.",
        cover: "./b17.jpg"
    },
    {
        title: "Good Girl, Bad Blood",
        author: "Holly Jackson",
        summary: "It is the sequel to A Good Girl's Guide to Murder, following Pippa Fitz-Amobi as she investigates another mystery in her town, uncovering even darker secrets and dangers than before.",
        cover: "./b18.jpg"
    },
    {
        title: "As Good as Dead",
        author: "Holly Jackson",
        summary: "Pippa Fitz-Amobi as she confronts a dangerous and personal threat while unraveling a dark mystery that tests her limits and forces her to face the consequences of her past investigations.",
        cover: "./b19.jpg"
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        summary: "It is a psychological thriller about a woman who shoots her husband and then becomes mute, and a psychotherapist’s obsession with uncovering the truth behind her silence.",
        cover: "./b20.jpg"
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        summary: "A gripping crime thriller about a journalist and a hacker investigating a wealthy family's dark secrets.",
        cover: "./b21.jpg"
    },
    {
        title: "Before I Go to Sleep",
        author: "S. J. Watson",
        summary: "A woman loses her memory every day when she falls asleep, and every day she has to piece together the truth about her past and the people around her.",
        cover: "./b22.jpg"
    }
];

function newBook() {
    const randomBook = books[Math.floor(Math.random() * books.length)];
    document.getElementById('book-title').textContent = randomBook.title;
    document.getElementById('book-author').textContent = "Author: " + randomBook.author;
    document.getElementById('book-summary').textContent = randomBook.summary;
    document.getElementById('book-cover').src = randomBook.cover;
}

const quotes = [
    { text: "“Believe in yourself and all that you are.”", author: "Christian D. Larson" },
    { text: "“Keep your face always toward the sunshine.”", author: "Walt Whitman" },
    { text: "“Success is not final, failure is not fatal.”", author: "Winston Churchill" },
    { text: "“Happiness is not something ready-made.”", author: "Dalai Lama" },
    { text: "“It does not matter how slowly you go.”", author: "Confucius" }
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('quote-text').textContent = randomQuote.text;
document.getElementById('quote-author').textContent = randomQuote.author;
