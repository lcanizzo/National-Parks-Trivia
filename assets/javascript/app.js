var correct = 0;
var incorrect = 0;
var unanswered = 0;
var currentQuestion = 0;
var currentImage = 0;
var chosenAnswer = "none";
var time = 30;
// Index of the given background image ((images array))
var bg = 0;

var questions = [{ //Question 1//
        prompt: "What National Park is home to the largest living single-stem tree in the world?",
        first: "Acadia National Park",
        second: "Sequoia National Park",
        third: "Big Bend National Park",
        fourth: "Joshua Tree National Park",
        answer: "second"
    }, { //Question 2//
        prompt: "What is the highest point in North America?",
        first: "Mnt. Rainier",
        second: "Denali (aka Mnt. McKinley)",
        third: "Mnt. Massive",
        fourth: "Mnt. Whitney",
        answer: "second"
    }, { //Question 3//
        prompt: "Which National Park is home to the largest continuous cave system in the world?",
        first: "Wind Cave National Park",
        second: "Mammoth Cave National Park",
        third: "Carlsbad Caverns National Park",
        fourth: "Pinnacles National Park",
        answer: "second"
    }, { //Question 4//
        prompt: "Which National Park is home to the deepest lake in the United States?",
        first: "Galcier National Park",
        second: "Crater Lake National Park",
        third: "Lake Clark National Park",
        fourth: "Great Basin National Park",
        answer: "second"
    }, { //Question 5//
        prompt: "Which National Park is home to the tallest dunes in North America?",
        first: "Joshua Tree National Park",
        second: "Great Sand Dunes National Park",
        third: "Death Valley National Park",
        fourth: "Mesa Verde National Park",
        answer: "second"
    }, { //Question 6//
        prompt: "How many National Parks does the National Park Service manage?",
        first: "411",
        second: "36",
        third: "59",
        fourth: "11",
        answer: "third"
    }, { //Question 7//
        prompt: "A Yosemite bear once slapped at so many people, it was nicknamed:",
        first: "Swatter",
        second: "Slappy",
        third: "Dennis the Menace",
        fourth: "Ali",
        answer: "first"
    }, { //Question 8//
        prompt: "Which National Park is 95% underwater?",
        first: "Dry Tortugas National Park",
        second: "Virgin Islands National Park",
        third: "Everglades National Park",
        fourth: "Biscayne National Park",
        answer: "second"
    }, { //Question 9//
        prompt: "Which National Park is the largest archaeological preserve in the United States?",
        first: "Zion National Park",
        second: "Arches National Park",
        third: "Mesa Verde National Park",
        fourth: "Grand Teton National Park",
        answer: "third"
    }, { //Question 10//
        prompt: "Which National Park receives the most visitors annually?",
        first: "Great Smoky Mountains National Park",
        second: "Yosemite National Park",
        third: "Big Bend National Park",
        fourth: "Yellowstone National Park",
        answer: "first"
    }]
// define total length of quiz for tally-page function
var totalQuestions = questions.length;

var answers = [{ //Answer 1//
    answer: "Sequoia National Park, California is home to the largest living single-stem tree in the world - the wonderfully named General Sherman. The tree is approximately 275ft (84m) tall and weighs approximately 1,900 metric tonnes.",
    funFact: "The oldest single tree in the world is Old Hara, a Pinus longaeva, or \"Great Basin bristlecone pine,\" which is currently 5,066 years old, and is located in the White Mountains region of California."
    },{             //Answer 2//
    answer: "The highest point in North America is Denali (aka Mount McKinley) standing at 20,320ft (6193.5m). It is in Denali National Park and Preserve, Alaska.",
    funFact: "The parks are also home to the lowest point in the western hemisphere - Badwater Basin in Death Valley, California, which is 282 ft (86m) below sea level."
    },{             //Answer 3//
    answer: "Mammoth Cave National Park, Kentucky, is home to the longest cave system in the world. Currently, there is more than 3454 miles of cave mapped, with more to come. The largest “room” in the portion of the cave system that has been discovered is two acres in size.",
    funFact: "Wind Cave National Park is the first cave to be named a national park in the world. In addition to its length (currently sixth longest in the world), Wind Cave is known for its calcite formations known as “boxwork.”"
    },{             //Answer 4//
    answer: "Crater Lake National Park, located in Oregon, is home to the deepest lake in the United States. It is 1,932 ft (589m) deep, around five times the height of the Statue of Liberty.",
    funFact: "Crater Lake is the seventh deepest lake in the world, and took 250 years of rain and snow accumulation to reach its water level."
    },{             //Answer 5//
    answer: "Great Sand Dunes National Park is home to dunes that are as tall as 750 feet, the tallest in North America.",
    funFact: "The park has one of the most fragile and complex dune systems in the world, and winds of up to 40 mph are continually reshaping the dunes."
    },{             //Answer 6//
    answer: "The National Park Service manages 59 National Parks. Twenty-seven states have National Parks, as do the territories of American Samoa and the United States Virgin Islands. California has the most with 9 National Parks.",
    funFact: "The National Park Service manages 411 sites, 59 of which are National Parks. The remaining sites include national memorials, seashores, historic sites, battlefields and more. The National Park Service manages a wide variety of sites due to its mission to preserve sites containing American natural, historical and cultural significance."
    },{             //Answer 7//
    answer: "\"Swatter,\" a bear in Yosemite National Park, slapped at so many people he earned his own nickname.",
    funFact: "Black bears are naturally shy of humans but when they learn to associate food with people or development, that behavior can quickly change. <br> If a bear feels uncomfortable with how close a person is, a black bear may bluff charge, which is when a bear approaches a person quickly, then stops. This is sometimes accompanied by the bear pawing the ground and making vocalizations. The important thing to do in this situation is to stay where you are and look as big as possible—raising your arms in the air—and even holding your backpack over your head, and yelling loudly. As soon as the bear backs away, you should too."
    },{             //Answer 8//
    answer: "Biscayne National Park in Florida is 95 percent underwater, and is known primarily for its beautiful coral reefs.",
    funFact: "Located in Biscayne Bay, this park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threatened animals include the West Indian manatee, American crocodile, various sea turtles, and peregrine falcon."
    },{             //Answer 9//
    answer: "Mesa Verde National Park includes ruins of 600 cliff dwellings and is the largest archaeological preserve in the U.S.",
    funFact: "This area constitutes over 4,000 archaeological sites of the Ancestral Puebloan people, who lived here and elsewhere in the Four Corners region for at least 700 years. Cliff dwellings built in the 12th and 13th centuries include Cliff Palace, which has 150 rooms and 23 kivas, and the Balcony House, with its many passages and tunnels."
    },{             //Answer 10//
    answer: "Great Smoky Mountains is the most visited national park, drawing more than 10 million recreational visits each year.",
    funFact: "A majority of the vertebrates inside Great Smoky Mountains National Park on any given day are not humans, but salamanders. The slimy amphibians can be found throughout the park.<br> Among the 30 species of salamanders are 24 varieties of “lungless” salamanders. This wacky creatures breathe by soaking in air through their skin and the linings of their mouths."
    }]

var images = [
    'assets/images/sequoia.jpg',
    'assets/images/denali-1.jpg',
    'assets/images/mammoth.jpg',
    'assets/images/crater.jpg',
    'assets/images/dunes.jpg',
    'assets/images/national-parks.jpg',
    'assets/images/swatter.jpg',
    'assets/images/biscayne.jpg',
    'assets/images/mesa.jpg',
    'assets/images/smoky.jpg',
    ]

$(document).ready(function () {
    
    $('.timer').hide();
    $('.question').hide();
    $('.answer').hide();
    $('#tally-page').hide();

//      W E L C O M E  P A G E       //

$('#start-button').on('click', function () {
    $('#welcome-page').hide();
    $('.question').fadeIn();
    $('.timer').fadeIn();
    writeQuestion();
    startTimer();    
})

//      Q U E S T I O N   P A G E        //

$('.choice').on('click', function(){
    chosenAnswer = $(this).attr('id')
})




$('.enter').on('click', function () {
    // Tallies answer:
    submitAnswer();
    // Resets Timer
    resetTimer();
    // Goes to next answer:
    nextAnswer();
    // Hide Timer
    $("#timer").hide();
    newBackground();
})

 //      C O R R E C T   A N S W E R   P A G E       //

 $('.next').on('click', function () {
    currentQuestion = currentQuestion + 1;
    newQuestionPage();
})

//      F U N C T I O N S       //

// NEXT BUTTON SET CHOSEN ANSWER BACK TO NONE!!!!!//
function writeQuestion() {
    $('.prompt').html(questions[currentQuestion].prompt);
    $('#first').html(questions[currentQuestion].first);
    $('#second').html(questions[currentQuestion].second);
    $('#third').html(questions[currentQuestion].third);
    $('#fourth').html(questions[currentQuestion].fourth);
}

function writeAnswer() {
    $('.right-answer').html(answers[currentQuestion].answer);
    $('.fun-fact').html(answers[currentQuestion].funFact);
}

function submitAnswer() {
    if (chosenAnswer === questions[currentQuestion].answer) {
        correct++;        
    } else if (chosenAnswer === "none") {
        unanswered++;
    } else if (chosenAnswer !== questions[currentQuestion].answer) {
        incorrect++;
    } 
}

function newQuestionPage() {
    tallyPage();
    nextQuestion();
    chosenAnswer = "none";
    // Start & Show Timer
    startTimer();
    $("#timer").show();
    // If last question:
}

function nextAnswer() {
    $('.question').fadeOut();
    writeAnswer();
    $('.answer').fadeIn();
}

function nextQuestion() {
    $('.answer').fadeOut();
    writeQuestion();
    $('.question').fadeIn();
}

function newBackground() {
    $(".answer").css("background-image", "url('" + images[currentQuestion] + "')");
}

function tallyPage() {
    if (currentQuestion == totalQuestions) {
        $('#tally-page').fadeIn();
        $("#correct").html("Correct: " + correct);
        $("#incorrect").html("Incorrect: " + incorrect);
        $("#unanswered").html("Unanswered: " + unanswered);
        resetTimer();
        $("#timer").hide();
    }
}

//      F I N A L   T A L L Y   P A G E      //

$('.restart').on('click', function () {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    currentQuestion = 0;
    $('#tally-page').hide();
    $('#welcome-page').fadeIn();
})

//      T I M E R      //

function startTimer() {
    intervalId = setInterval(decrement, 1000);
    console.log('startTimer');
    $('#timer').fadeIn();
}

function timeUp() {
    unanswered++;
}

function decrement() {
    time--;
    $('#timer').html(time);
    if (time == 0) {
        // Marks unanswered
        timeUp();
        // Resets Timer
        resetTimer();
        // Goes to next answer:
        nextAnswer();
        // Hide Timer
        $("#timer").hide();
    }
}

function resetTimer() {
    clearInterval(intervalId);
    time = 30;
    $('#timer').html(time);
}

function stopTimer() {
    console.log('stopTimer');
    clearInterval(intervalId);
}
})
