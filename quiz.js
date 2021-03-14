//calling everything
const nextButton = document.getElementById('thenextbtn')
const startButton = document.getElementById('startbtn')
const containerforquestions = document.getElementById('containerforquestions')
const theanswerbutton = document.getElementById('buttonsforanswers')
const thequestionsforit = document.getElementById('question')
//variables
const theQuestions = [
    {
      question: 'a question here',
      answers: [
        { text: 'answer here', correct: true },
        { text: 'answer here', correct: false }
      ]
    },
    {
      question: 'a question here',
      answers: [
        { text: 'an answer', correct: true },
        { text: 'answer', correct: false },
        { text: 'answer', correct: false },
        { text: 'answer', correct: false }
      ]
    },
    {
      question: 'question here',
      answers: [
        { text: 'answer', correct: false },
        { text: 'answer', correct: true },
        { text: 'answer', correct: false },
        { text: 'answer', correct: false }
      ]
    },
    {
      question: 'question here',
      answers: [
        { text: 'answer', correct: false },
        { text: 'asnwer', correct: true }
      ]
    }
  ]
  //click event listener
  let theshuffledquestions , theindex
  startButton.addEventListener('click',startthegame)
  nextButton.addEventListener('click', () => {
    theindex++
    setthenextquestion()
  })
  //starting thr game, sorting the questions
  function startthegame() {
    startButton.classList.add('hide')
    theshuffledquestions = questions.sort(() => Math.random() - .5)
    theindex = 0
    containerforquestions.classList.remove('hide')
    setthenextquestion()
  }
  //reset to next question 
  function setthenextquestion() {
    resetState()
    showthequestion(theshuffledquestions[theindex])
  }
  //function to button answer
  function showthequestion(question) {
    thequestionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('btn')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', theAnswer)
      theanswerbutton.appendChild(button)
    })
  }
  //reset and hide
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (theanswerbutton.firstChild) {
      theanswerbutton.removeChild(theanswerbutton.firstChild)
    }
  }
  // the answer, selecting the button
  function theAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(theanswerbutton.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (theshuffledquestions.length > theindex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
    // if correct or wrong
    function setStatusClass(element, correct) {
      clearStatusClass(element)
      if (correct) {
        element.classList.add('correct')
      } else {
        element.classList.add('wrong')
      }
    }
    //countdown timer
    var seconds = document.getElementById("thecountdowntimer").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("thecountdowntimer").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 10);}