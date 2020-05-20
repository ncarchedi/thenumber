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
    type: "Statement",
    content: {
      prompt:
        "Welcome, ___! In the next few minutes, I'll help you figure out how much money you need to achieve financial independence and how soon you'll be able to achieve it. 🙌",
    },
  },
  {
    type: "Statement",
    content: {
      prompt:
        "There’s a common rule of thumb among personal finance nerds that you’ve achieved financial independence when your total savings exceed 25 times your annual expenses...",
    },
  },
  {
    type: "Statement",
    content: {
      prompt:
        "...But because living expenses generally increase over time—due to inflation and/or changes in lifestyle—your number is a moving target. Let's figure it out together. 🎯",
    },
  },
  {
    type: "TextQuestion",
    inputType: "number",
    variableName: "currentAge",
    content: {
      prompt: "What's your current age? ⏳",
      helperText:
        "By the way, I won't save any information you share with me unless you explicitly ask me to later on.",
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
      prompt: "Approximately how much money do you have saved in total? 🏦",
      helperText:
        "Include cash, investments, retirement accounts, and any other savings that could be used to pay your monthly expenses someday.",
    },
  },
];
