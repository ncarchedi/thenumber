var quizQuestions = [
  {
    type: "TextQuestion",
    variableName: "name",
    content: {
      question: "👋 What's your first name?",
    },
  },
  {
    type: "TextQuestion",
    variableName: "age",
    content: {
      question: "Nice to meet you, _____! What's your current age?",
    },
  },
  {
    type: "TextQuestion",
    variableName: "monthlyExpenses",
    content: {
      question: "Great! What are your total monthly expenses?",
    },
  },
  {
    type: "TextQuestion",
    variableName: "savings",
    content: {
      question:
        "And how much money do you have saved up that could be used to pay your monthly expenses beginning today?",
    },
  },
  {
    type: "MultipleChoice",
    variableName: "strategy",
    content: {
      question: "Which of the following best describes you?",
      answers: [
        {
          value: "targetAge",
          label:
            "I'd like to retire at a specific age. Tell me how much I need to save between now and then.",
        },
        {
          value: "targetSavings",
          label:
            "I'm able to save a certain amount of money each year. Tell me when I'll be able to retire.",
        },
        {
          value: "retireNow",
          label: "I'd like to retire now. Am I ready?",
        },
      ],
    },
  },
];

export default quizQuestions;
