// Fetching all the required Elements
const main = document.querySelector(".main");
const home = document.querySelector("[data-home]")
const landingPage = document.querySelector(".landing-page");

const displayArea = document.getElementById("display-area");
const generateQuote = document.querySelector("[data-generateQuote]");
const instagram = document.querySelector("[data-instagram]");
const motivational = document.querySelector("[data-motivational]");
const inspirational = document.querySelector("[data-inspirational]");
const random = document.querySelector("[data-random]");

const copyMsg = document.querySelector("[data-copyMsg]");

const heading = document.querySelector("[data-heading]");


// Functions for mouse hDown on the Quotes Display area
function mouseDown() {
    generateQuote.style.transform = "scaleX(1.08)";
}
function mouseUp() {
    generateQuote.style.transform = "scaleX(1)";
}

generateQuote.onmousedown = mouseDown;
generateQuote.onmouseup = mouseUp;

// Status Category
const statusCategory = ["Random Status", "Instagram Status", "Motivational Status", "Inspirational Status",];

// Simple Status
const simpleStatus = [

    "Not everyone likes me, but not everyone matters",
    "Make today so great that yesterday gets jealous",
    "I'm gracing you with my presence",
    "Don't be jealous of my good looks",
    "Be awesome today",
    "There's nothing better than being yourself",
    "I decide the vibe",
    "Be a Warrior, not a Worrier",
    "I woke up like this",
    "Always focused on being happy",
    "Every innocent face has a wild side",
    "Do what is right, not what is easy",
    "A stumble may prevent a fall",
    "I do a thing called 'what I want'",
    "If it doesn't open, it's not your door",
    "Think before you come for the great one",
    "Nobody is perfectThat's why pencils have erasers",
    "Fresher than a pillow with a mint on it",
    "They criticize you too much because they wish they were you",
    "They call me ranch cuz I be dressing",
    "WARNING: You may fall in love with my face",
    "Me, myself, and I",
    "Life is better when you are laughing"
];

// Instagram Status
const instagramStatus = [
    "Some days start better than others.",
    "Today I will be as useless as the 'g' in lasagna.",
    "Life is like a box of chocolates; sometimes you just dig out the good center parts and leave all the undesirable rest to waste.",
    "There is no such thing as a perfect person, but someone's heart can have a perfect intention.",
    "Throw sass around like confetti.",
    "Hella heart eyes for you.",
    "Decluttering my life like Marie Kondo.",
    "Life is simple. It's just not easy.",
    "You can't live a full life on an empty stomach.",
    "Get out there and live a little.",
    "I'm not high maintenance, you're just low effort.",
    "Whatever is good for your soul, do that.",
    "The way you speak to yourself matters the most.",
    "You can regret a lot of things but you'll never regret being kind.",
    "Being happy never goes out of style.",
    "A little contour and confidence.",
    "Smile a little more, regret a little less.",
    "Grow through what you go through.",
    "I don't know where I'm going, but I'm on my way."
];

// Motivational Status
const motivationalStatus = [
    "Life is 10% what happens to you and 90% how you react to it.",
    "Change your thoughts, and you change your world.",
    "All our dreams can come true if we have the courage to pursue them.",
    "Success is a journey not a destination.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "It always seems impossible until it's done.",
    "Success is liking yourself, liking what you do, and liking how you do it.",
    "Aim for the moon. If you miss, you may hit a star.",
    "If you cannot do great things, do small things in a great way.",
    "Success only comes to those who dare to attempt.",
    "I never dreamed abUp success. I worked for it.",
    "If opportunity doesn't knock, build a door.",
    "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give Up.",
    "When you change your thoughts, remember to also change your world.",
    "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
    "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "It is better to fail in originality than to succeed in imitation.",
    "The road to success and the road to failure are almost exactly the same.",
    "Success usually comes to those who are too busy looking for it.",
    "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be  kind.",
    "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best  of which you are capable.",
    "I never dreamed abUp success. I worked for it.",
    "Success is getting what you want, happiness is wanting what you get."
];

// Inspirational Status
const inspirationalStatus = [
    "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    "Whatever you are, be a good one.",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "Don't wait, the time will never be just right.",
    "No one is useless in this world who lightens the burdens of others.",
    "You can if you think you can.",
    "You never fail until you stop trying.",
    "There is no saint without a past, no sinner without a future.",
    "Have faith in yourself and in the future.",
    "To know oneself, one should assert oneself.",
    "All limitations are self-imposed.",
    "If opportunity doesn't knock, build a door.",
    "Mostly, the world sees you the way you see yourself.",
    "When in doubt, throw doubt out and have a little faith…",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "In a gentle way, you can shake the world.",
    "Don't quit. Suffer now and live the rest of your life as a champion.",
    "You can be everything. You can be the infinite amount of things that people are.",
    "You can choose to not let little things upset you.",
    "Life changes very quickly, in a very positive way, if you let it.",
    "My mission in life is not merely to survive, but to thrive.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Life is fragile. We're not guaranteed a tomorrow so give it everything you've got.",
    "A hero is someone who has given his or her life to something bigger than oneself.",
    "Life isn't about finding yourself. Life is about creating yourself.",
    "The best way to prepare for life is to begin to live.",
    "And in the end, it's not the years in your life that count. It is the life in your years.",
    "Life is really simple, but we insist on making it complicated.",
    "Life can only be understood backwards, but it must be lived forward.",
    "Life is as easy or as hard as you think it is."
];

// Clicks on Home Button
home.addEventListener("click", () => {
    landingPage.classList.remove("active");
    main.classList.remove("active");
});

//Function to handle Clicks on Generate Quotes in Navigation bar
random.addEventListener("click", () => {
    main.classList.add("active");
    landingPage.classList.add("active");
    heading.innerText = statusCategory[0];
    generateQuote.addEventListener("click", () => {
        const randIndex = Math.floor(Math.random() * simpleStatus.length + 1);
        let quote = simpleStatus[randIndex];
        displayArea.innerText = quote;
    });
});

// Clicks on Instagram Menu in Navigation bar
instagram.addEventListener("click", () => {
    main.classList.add("active");
    landingPage.classList.add("active");
    heading.innerText = statusCategory[1];
    generateQuote.addEventListener("click", () => {
        const randIndex = Math.floor(Math.random() * instagramStatus.length + 1);
        let quote = instagramStatus[randIndex];
        displayArea.innerText = quote;
    });
});


// Clicks on Motivational Menu in Navigation bar
motivational.addEventListener("click", () => {
    main.classList.add("active");
    landingPage.classList.add("active");
    heading.innerText = statusCategory[2];
    generateQuote.addEventListener("click", () => {
        const randIndex = Math.floor(Math.random() * motivationalStatus.length + 1);
        let quote = motivationalStatus[randIndex];
        displayArea.innerText = quote;
    });
});


// Clicks on Inspirational Menu in Navigation bar
inspirational.addEventListener("click", () => {
    main.classList.add("active");
    landingPage.classList.add("active");
    heading.innerText = statusCategory[3];
    generateQuote.addEventListener("click", () => {
        const randIndex = Math.floor(Math.random() * inspirationalStatus.length + 1);
        let quote = inspirationalStatus[randIndex];
        displayArea.innerText = quote;
    });
});


// Function for copy content
async function copyContent() {
    try {
        await navigator.clipboard.writeText(displayArea.value);
        copyMsg.innerText = "Copied";
    }
    catch (e) {
        copyMsg.innerText = "Failed";
    }

    // To make "copy" span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 1500);
}


// Event Listener on Copy Button
const copyBtn = document.querySelector("[data-copy")
copyBtn.addEventListener("click", () => {
    if (displayArea.value) {
        copyContent();
    }
});
