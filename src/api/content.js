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
        "Hi, ___! In the next few minutes, let's figure out how much money you need to achieve financial independence and how soon you'll be able to get there. 🙌",
    },
  },
  {
    type: "Statement",
    content: {
      prompt:
        "The amount of money you need to retire depends on a number of factors—including your cost of living, expected inflation and expected investment returns. 📝",
    },
  },
  {
    type: "Statement",
    content: {
      prompt:
        "It may be counterintuitive, but the amount of money you need to retire actually *increases* over time. In short, any money you don't have saved today is money that's not invested and earning a return for tomorrow. 📈",
    },
  },
  {
    type: "Statement",
    content: {
      prompt:
        "The amount you need to retire—your number—is a moving target, so let's figure it out together! 🎯",
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
