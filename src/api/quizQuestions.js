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
  {
    id: 2,
    type: "TextQuestion",
    inputType: "number",
    variableName: "targetAge",
    content: {
      question: "Welcome, ___! What age would you like to retire at? 📆",
    },
  },
  {
    id: 3,
    type: "TextQuestion",
    inputType: "number",
    variableName: "currentAge",
    content: {
      question: "And how old are you right now? 🕒",
    },
  },
  {
    id: 4,
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
    id: 5,
    type: "TextQuestion",
    inputType: "number",
    variableName: "currentSavings",
    content: {
      question: "Approximately how much money do you have saved? 💰",
      helperText:
        "Include cash, investments, retirement accounts, and any other savings that could be used to cover your monthly expenses in retirement. Exclude things like the equity in your house unless you plan to sell it when you retire.",
    },
  },
];

export default quizQuestions;
