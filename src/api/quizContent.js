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
        "Hi, ___! Let's talk about financial independence—the glorious moment at which you have enough money saved to cover all of your future living expenses. 🙌",
    },
  },
  {
    type: "Statement",
    content: {
      prompt:
        "How much money do you need to achieve it? How soon will you get there? These are the questions we'll answer together over the next few minutes. Let's get started! ➡️",
    },
  },
  {
    type: "TextQuestion",
    inputType: "number",
    variableName: "currentAge",
    content: {
      prompt: "What's your current age? ⏳",
      helperText:
        "By the way, we won't save any personal information you share with us unless you ask us to later on.",
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
        {
          label: "Your guess is as good as mine 🙈",
          value: "100",
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
        "Which of the following best describes how much of your savings are invested in stocks (including stock-based mutual funds, ETFs, etc.)? 📊",
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
          label: "I have absolutely no idea 🤯",
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
