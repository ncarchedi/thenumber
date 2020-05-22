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
        "Hi, ___! Let's talk about financial independence. <br><br>You've achieved it when you have enough money to cover all future living expenses and the freedom to spend your time however you choose. If you continue to work (as many people do), it's out of desire instead of necessity. 🙋🏽",
    },
  },
  {
    type: "Statement",
    content: {
      prompt:
        "The amount of money you need to achieve financial independence—<em>your number</em>—depends on several factors, including cost of living, inflation and investment returns. 🏠",
    },
  },
  {
    type: "Statement",
    content: {
      prompt:
        "It may be counterintuitive, but your number actually <em>increases</em> over time. Any money you don't have saved today is money that's not invested and earning a return for tomorrow. 📈",
    },
  },
  {
    type: "Statement",
    content: {
      prompt:
        "In short, your number is a moving target. Let's figure it out together! 🎯",
    },
  },
  {
    type: "TextQuestion",
    inputType: "number",
    variableName: "currentAge",
    content: {
      prompt: "What's your current age? ⏳",
      helperText:
        "By the way, we won't save any personal information you share with us unless you explicitly ask us to later on.",
    },
  },
  {
    type: "TextQuestion",
    inputType: "dollar",
    variableName: "monthlyExpenses",
    content: {
      prompt: "How much money do you spend in a typical month? 💳",
      helperText:
        "Expenses often vary month-to-month. This can be a rough estimate for now.",
    },
  },
  {
    type: "MultipleChoiceQuestion",
    inputType: "string",
    variableName: "percentExpenses",
    content: {
      prompt:
        "How do you expect your living expenses to change <em>after</em> you achieve financial independence? 💸",
      answers: [
        {
          label: "My expenses will probably increase",
          value: "120",
        },
        {
          label: "My expenses will stay about the same",
          value: "100",
        },
        {
          label: "My expenses will probably decrease",
          value: "80",
        },
      ],
      helperText:
        "Ignore the impact of inflation—we'll take care of that for you. Are there costs that you have now that you won't have in the future (e.g. a mortgage)? Do you expect to spend money on new things (e.g. travel)?",
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
  {
    type: "MultipleChoiceQuestion",
    inputType: "string",
    variableName: "percentStocks",
    content: {
      prompt:
        "Which of the following best describes how much of your savings are invested in stocks (or stock-based mutual funds, ETFs, etc.)? 📊",
      answers: [
        {
          label: "Mostly stocks",
          value: "80",
        },
        {
          label: "About half stocks",
          value: "50",
        },
        {
          label: "Mostly not stocks",
          value: "20",
        },
        {
          label: "I have no idea 🙈",
          value: "50",
        },
      ],
      helperText:
        "Don't worry if you're not entirely sure about this. Part of this process is about increasing your financial awareness.",
    },
  },
  {
    type: "TextQuestion",
    inputType: "number",
    variableName: "lifeExpectancy",
    content: {
      prompt: "What age should we assume you'll live to? 🧓🏽",
      helperText:
        "Picking a higher number means you'll need to save more, but it also means you're less likely to run out of money later in life.",
    },
  },
];
