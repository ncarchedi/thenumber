var quizQuestions = [
  {
    type: "TextQuestion",
    content: {
      question: "👋 What's your first name?",
    },
  },
  {
    type: "TextQuestion",
    content: {
      question: "Nice to meet you, _____! What's your current age?",
    },
  },
  {
    type: "TextQuestion",
    content: {
      question: "Great! What are your total monthly expenses?",
    },
  },
  {
    type: "TextQuestion",
    content: {
      question:
        "And how much money do you have saved up that could be used to pay your monthly expenses beginning today?",
    },
  },
  {
    type: "MultipleChoice",
    content: {
      question: "Which of the following best describes you?",
      answers: [
        {
          value: "Microsoft",
          label:
            "I'd like to retire at a specific age. Tell me how much I need to save between now and then.",
        },
        {
          value: "Nintendo",
          label:
            "I'm able to save a certain amount of money each year. Tell me when I'll be able to retire.",
        },
        {
          value: "Sony",
          label: "I'd like to retire now. Am I ready?",
        },
      ],
    },
  },
];

export default quizQuestions;
