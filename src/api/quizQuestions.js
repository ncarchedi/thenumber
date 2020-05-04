var quizQuestions = [
  {
    type: "TextQuestion",
    content: {
      question: "👋 What's your first name?",
    },
  },
  {
    type: "MultipleChoice",
    content: {
      question: "Nice to meet you, _____! What's your current age?",
      answers: [
        {
          value: "Microsoft",
          label: "X-Box",
        },
        {
          value: "Nintendo",
          label: "Nintendo 64",
        },
        {
          value: "Sony",
          label: "Playstation 1",
        },
      ],
    },
  },
  {
    type: "MultipleChoice",
    content: {
      question: "Great! What are your total monthly expenses?",
      answers: [
        {
          value: "Microsoft",
          label: "Forza",
        },
        {
          value: "Nintendo",
          label: "Mario Kart",
        },
        {
          value: "Sony",
          label: "Gran Turismo",
        },
      ],
    },
  },
  {
    type: "MultipleChoice",
    content: {
      question:
        "And how much money do you have saved up that could be used to pay your monthly expenses beginning today?",
      answers: [
        {
          value: "Microsoft",
          label: "BioShock",
        },
        {
          value: "Nintendo",
          label: "The Legend of Zelda: Ocarina of Time",
        },
        {
          value: "Sony",
          label: "Final Fantasy VII",
        },
      ],
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
          label: "Can I retire now?",
        },
      ],
    },
  },
];

export default quizQuestions;
