// Commented out sections tabbed over have been addressed
// Commented out sections adjacent to code mark problem areas

$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var currentQuestion = 0;
    var $question = $('.question');
    var totalQuestions = $('.question').length;
    $question.hide();

    var currentAnswer = 0;
    var $answer = $('.answer');
    var totalAnswers = $('.answer').length;
    $answer.hide();

    $('#tally-page').hide();
    $('.timer').hide();



    //      W E L C O M E  P A G E       //
    //     -When they click the start button:  
    //         -the content will display none (disappear)
    //         -the first question will appear
    //         -the options for the first question will appear
    //         -the first timer will start running

    $('#start-button').on('click', function () {
        $('#welcome-page').hide();
        $($question.get(currentQuestion)).fadeIn();
        $('.timer').fadeIn();
        startTimer();
    })

    //      Q U E S T I O N   P A G E S       //

    // The timer will start when the page opens
    //     -the timer will display on the page as: 10sec left, 9sec left... etc.
    //     -when the timer reaches 0:
    //         -the unanswered score will increase by 1
    //         -the content of the page will disappear
    //         -the content of the next page will display

    // The question will display
    //     -options will function as buttons
    //     -if the correct function is clicked:
    //         -correct score will increase by 1
    //     -if any other button is clicked:
    //         -incorrect score will increase by 1

    // Enter button will:
    //     -submit answer
    //     -reset timer
    //     -transition to next page

    // the correct answer has a value of 1
    // incorrect answers have a value of 0?
    //      pull value???? (no spaces in jQuery selector)

    var chosenAnswer = 0;

    $('.enter').on('click', function () {
        // Tallies answer:
        submitAnswer();
        // Resets Timer
        resetTimer();
        // Goes to next answer:
        nextAnswer();
        // Hide Timer
        $("#timer").hide();
        // Testing holder for answer page
        setTimeout(newQuestionPage, 30000); //FIXFIXFIX//FIXFIXFIX//FIXFIXFIX//FIXFIXFIX//FIXFIXFIX
    })

    //      C O R R E C T   A N S W E R   P A G E S     //
    //     -a gif will display
    // After the gif has finished (set time):
    //     -the content of the page will disappear
    //     -the content of the next page will display 
    // OR (maybe add later) onclick too:
    //     -the content of the page will disappear
    //     -the content of the next QUESTION page will display 
    //     -the next timer will start and update on the screen



    function newQuestionPage() {
        nextQuestion();
        // Start & Show Timer
        startTimer();
        $("#timer").show();
        // If last question:
        tallyPage();
    }

    //      F I N A L   T A L L Y   P A G E      //

    // The tally of correct, unanswered, and incorrect answers will display
    // Given different score ranges, different html content will display

    // A reset button will display:
    //     -if the reset button is clicked:
    //          -the content of the page will disappear
    //          -the content of the FIRST QUESTION page will display 
    //             -(serves the same purpose as the welcome page)
    //          -correct = 0
    //          -incorrect = 0
    //          -unanswered = 0

    $('.restart').on('click', function () {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        currentQuestion = 0;
        currentAnswer = 0;
        $('#tally-page').hide();
        $('#welcome-page').fadeIn();
        console.log('correct:', correct);
        console.log('incorrect:', incorrect);
        console.log('unanswered:', unanswered);
    })

    //      F U N C T I O N S       //

    function submitAnswer() {
        chosenAnswer = $("input[name=radio]:checked").val();
        console.log('chosenAnswer.val', chosenAnswer);

        if (chosenAnswer == 1) {
            correct++;
            //Display "That's Right" text option on next page //
        } else if (chosenAnswer == 0) {
            incorrect++;
            //Display "Nope" text option on next page //
        }
        if (!$("input[name=radio]:checked").val()) {
            unanswered++;
        }
        //hitting enter without a selection logs previous pg. val
        console.log('correct:', correct);
        console.log('incorrect:', incorrect);
        console.log('unanswered:', unanswered);
    }

    function timeUp() {
        unanswered++;
        console.log('unanswered:', unanswered);
    }

    function nextQuestion() {
        $($answer.get(currentAnswer)).fadeOut();
        currentAnswer = currentAnswer + 1;
        if (currentQuestion == totalQuestions) {
            console.log('Done with Quiz');
        } else {
            $($question.get(currentQuestion)).fadeIn();
        }
    }

    function nextAnswer() {
        $($question.get(currentQuestion)).fadeOut();
        currentQuestion = currentQuestion + 1;
        $($answer.get(currentAnswer)).fadeIn();
    }


    function tallyPage() {
        if (currentQuestion == totalQuestions) { //&& something else after last gif
            $('#tally-page').fadeIn(); //remove calls of tallyPage where not needed
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            $("#unanswered").html(unanswered);
            resetTimer();
            $("#timer").hide();
        }
    }

    //      T I M E R      //

    var time = 30; //FIX FIX FIX FIX////FIX FIX FIX FIX////FIX FIX FIX FIX//

    function startTimer() {
        intervalId = setInterval(decrement, 1000);
        console.log('startTimer');
        $('#timer').fadeIn();
    }

    function decrement() {
        time--;
        $('#timer').html(time);
        if (time == 0) {
            console.log('timesUp');
            // Marks unanswered
            timeUp();
            // Resets Timer
            resetTimer();
            // Goes to next answer:
            nextAnswer();   
            // Hide Timer
            $("#timer").hide();
            // Testing holder for answer page
            setTimeout(newQuestionPage, 30000); //FIXFIXFIX//FIXFIXFIX//FIXFIXFIX//FIXFIXFIX//FIXFIXFIX
        }
    }

    function resetTimer() {
        clearInterval(intervalId);
        time = 30; //FIX FIX FIX FIX////FIX FIX FIX FIX////FIX FIX FIX FIX//
        $('#timer').html(time);
    }

    function stopTimer() {
        console.log('stopTimer');
        clearInterval(intervalId);
    }

})