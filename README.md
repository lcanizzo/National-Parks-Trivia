# National_Parks_Trivia
A tallied trivia game featuring facts about the United State's National Parks.


This game can run repeat cycles without refreshing the browser, it uses:
    jQuery & jQuery UI
    Bootstrap
    CSS & html


The focus of the trivia app is American National parks, with a fun and educational focus. 
    As an added element of excitement, there is a 30 second timer which runs for each question

    Each answer page displays a full-background image of the National Park which was referenced in the question, as well as fun facts.
    
    A tally page at the end of the quiz gives users their scores.


The functionality of the game is largely driven by the timer and the 'START', 'ENTER', 'NEXT', and 'RESTART' buttons:
    START:
        From the welcome page, the start button takes users to the first question in the 10-question quiz and sets and displays the timer.
    ENTER:
        From each question page, the enter button submits and tallies user answers and takes them to the answer page of the question while and reseting and hiding the timer.
    NEXT:
        From each answer page, the next button starts and displays the timer, and takes the user to the next question page.
            After the final answer page, the next button takes users to their tally page, which contains their scores, as well as the RESTART button.
    RESTART: 
        From the tally page, the restsart button takes users to the welcome page, sets their scores to 0, and shifts their location in the series of questions and answers back to 0.

