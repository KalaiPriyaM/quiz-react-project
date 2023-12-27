export const quizData = [
    {
      question: ` What is the result of the following expression: typeof([])? `,
      answers: [
        { text: `object`, correct: true },
        { text: `array`, correct: false },
        { text: `undefined`, correct: false },
        { text: `string`, correct: false },
      ],
    },
    {
      question: `Which of the following is used to iterate over the properties of an object?`,
      answers: [
        { text: `or of`, correct: false },
        { text: `foreach`, correct: false },
        { text: `for in`, correct: true },
        { text: `iterate`, correct: false },
      ],
    },
    {
      question: `What is the purpose of the JSON.stringify() method in JavaScript?`,
      answers: [
        { text: `Parses a JSON string to a JavaScript object`, correct: false,},
        { text: `Removes an element from an array`, correct: false, },
        { text: `Sorts the elements of an array`, correct: false, },
        { text: `Converts a JavaScript object to a JSON string`, correct: true, },
      ],
    },
    {
      question: "What does the === operator do in JavaScript?",
      answers: [
        { text: "Assigns a value to a variable", correct: false },
        { text: "Compares values for equality with type coercion", correct: false },
        { text: "Compares values for equality without type coercion", correct: true },
        { text: "Checks if a variable is declared", correct: false },
      ],
    },
    {
      question: "Which method is used to add a new element to the end of an array?",
      answers: [
        { text: "append()", correct: false },
        { text: "addToEnd()", correct: false },
        { text: "concat()", correct: false },
        { text: "push()", correct: true },
      ],
    },
    {
      question: "Which event is triggered when a user clicks on an HTML element?",
      answers: [
        { text: "onhover", correct: false },
        { text: "onclick", correct: true },
        { text: "onchange", correct: false },
        { text: "onsubmit", correct: false },
      ],
    },  
    {
      question: "What is the purpose of the try...catch statement in JavaScript?",
      answers: [
        { text: "Creates a conditional statement", correct: false },
        { text: "Declares a new variable", correct: false },
        { text: "Defines a loop", correct: false },
        { text: "Handles exceptions and errors", correct: true },
      ],
    },
    {
      question: "How can you prevent the default behavior of an HTML form submission in JavaScript?",
      answers: [
        { text: "event.stopImmediatePropagation()", correct: false },
        { text: "event.preventDefault()", correct: true },
        { text: "event.stopPropagation()", correct: false },
        { text: "event.defaultPrevented()", correct: false },
      ],
    },
    {
      question: "What is the purpose of the querySelector method in JavaScript?",
      answers: [
        { text: "Retrieves the first element that matches a specified CSS selector", correct: true },
        { text: "Selects all elements that match a specified CSS selector", correct: false },
        { text: "Creates a new HTML element", correct: false },
        { text: "Modifies the style of an HTML element", correct: false },
      ],
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      answers: [
        { text: "var", correct: false },
        { text: "let", correct: false },
        { text: "const", correct: true },
        { text: "static", correct: false },
      ],
    },
  
  ]; 
  