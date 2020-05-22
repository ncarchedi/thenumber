export default [
  {
    type: "MultipleChoiceQuestion",
    inputType: "string",
    variableName: "nextAction",
    content: {
      prompt: "What would you like to do next? 🤷🏽",
      answers: [
        {
          label: "Link my bank accounts to track my progress over time",
          value: "linkAccounts",
        },
        {
          label: "Start an interactive course to increase my financial IQ",
          value: "startCourse",
        },
        {
          label: "Connect with a financial planner to optimize my investments",
          value: "connectPro",
        },
      ],
    },
  },
  // {
  //   type: "TextQuestion",
  //   inputType: "string",
  //   variableName: "productFeedback",
  //   content: {
  //     prompt:
  //       "What's the biggest thing we can do to improve the The Number? 📣",
  //   },
  // },
  // {
  //   type: "TextQuestion",
  //   inputType: "string",
  //   variableName: "anythingElse",
  //   content: {
  //     prompt: "Is there anything else you'd like us to know? 👂",
  //   },
  // },
  // {
  //   type: "MultipleChoiceQuestion",
  //   inputType: "string",
  //   variableName: "provideEmail",
  //   content: {
  //     prompt:
  //       "Do you mind sharing your email in case we have any questions about your feedback? 📨",
  //     answers: [
  //       {
  //         label: "Yes, no problem!",
  //         value: "yes",
  //       },
  //       {
  //         label: "No, I'd rather not.",
  //         value: "no",
  //       },
  //     ],
  //     helperText:
  //       "We respect your privacy. We promise never to spam you or share your email with anyone else.",
  //   },
  // },
  // {
  //   type: "TextQuestion",
  //   inputType: "string",
  //   variableName: "email",
  //   content: {
  //     prompt: "Great! What's your email address? 🔒",
  //   },
  // },
];
