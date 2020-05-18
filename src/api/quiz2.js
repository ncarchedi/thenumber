export default [
  {
    type: "TextQuestion",
    inputType: "string",
    variableName: "name",
    content: {
      prompt: "👋 What's your first name?",
    },
  },
  {
    type: "TextQuestion",
    inputType: "number",
    variableName: "currentAge",
    content: {
      prompt: "Welcome, ___! What's your current age? ⏳",
    },
  },
  {
    type: "TextQuestion",
    inputType: "dollar",
    variableName: "monthlyExpenses",
    content: {
      prompt: "How much money do you spend in an typical month? 💳",
      helperText:
        "Expenses often vary month-to-month. This can be a rough estimate for now.",
    },
  },
  {
    type: "TextQuestion",
    inputType: "dollar",
    variableName: "monthlySavings",
    content: {
      prompt: "And how much do you save in a typical month? 💰",
      helperText:
        "Don't forget about any money you contribute to a retirement account through your employer, like a 401(k) or 403(b).",
    },
  },
  {
    type: "TextQuestion",
    inputType: "dollar",
    variableName: "totalSavings",
    content: {
      prompt: "Approximately how much money do you have saved? 🏦",
      helperText:
        "Include cash, investments, retirement accounts, and any other savings that could be used to pay your monthly expenses.",
    },
  },
  // {
  //   type: "MultipleChoice",
  //   inputType: "string",
  //   variableName: "percentStocks",
  //   content: {
  //     question:
  //       "Which of the following best describes how your savings are allocated? 📈",
  //     answers: [
  //       {
  //         value: "mostlyStocks",
  //         label: "Mostly stocks",
  //       },
  //       {
  //         value: "halfStocks",
  //         label: "About half stocks",
  //       },
  //       {
  //         value: "mostlyNotStocks",
  //         label: "Mostly not stocks",
  //       },
  //     ],
  //   },
  // },
];
