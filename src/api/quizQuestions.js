var quizQuestions = [
  {
    id: 1,
    type: "TextQuestion",
    inputType: "string",
    variableName: "name",
    content: {
      question: "👋 What's your first name?",
    },
  },
  // {
  //   id: 2,
  //   type: "MultipleChoice",
  //   variableName: "strategy",
  //   content: {
  //     question: "Welcome, ___! Which of the following best describes you?",
  //     answers: [
  //       {
  //         value: "targetAge",
  //         label:
  //           "I'd like to retire at a specific age. How much do I need to save between now and then? 📆",
  //       },
  //       {
  //         value: "targetSavings",
  //         label:
  //           "I'm able to save a certain amount of money each year. When will I be able to retire? 📈",
  //       },
  //       {
  //         value: "retireNow",
  //         label: "I'd like to retire now. Am I ready? 🚀",
  //       },
  //     ],
  //   },
  // },
  {
    id: 3,
    type: "TextQuestion",
    inputType: "number",
    variableName: "targetAge",
    content: {
      question: "Welcome, ___! What age would you like to retire at? 📆",
    },
  },
  {
    id: 4,
    type: "TextQuestion",
    inputType: "number",
    variableName: "currentAge",
    content: {
      question: "And how old are you right now? 🕒",
    },
  },
  {
    id: 5,
    type: "TextQuestion",
    inputType: "number",
    variableName: "monthlyExpenses",
    content: {
      question: "How much money do you spend in an average month? 💸",
      helperText:
        "Expenses often vary month-to-month. This can be a rough estimate for now.",
    },
  },
  {
    id: 6,
    type: "TextQuestion",
    inputType: "number",
    variableName: "currentSavings",
    content: {
      question: "Approximately how much money do you have saved? 💰",
      helperText:
        "Include cash, investments, retirement accounts, and any other savings that could be used to cover your monthly expenses in retirement. Exclude things like the equity in your house unless you plan to sell it when you retire.",
    },
  },
  {
    id: 7,
    type: "MultipleChoice",
    inputType: "string",
    variableName: "percentStocks",
    content: {
      question:
        "Which of the following most accurately describes how those savings are allocated?",
      answers: [
        {
          value: "mostlyStocks",
          label: "Mostly stocks",
        },
        {
          value: "halfStocks",
          label: "About half stocks",
        },
        {
          value: "mostlyNotStocks",
          label: "Mostly not stocks",
        },
      ],
    },
  },
];

export default quizQuestions;
