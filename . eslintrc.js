module.exports = {
    // ...existing config...
    plugins: ["jsx-a11y"],
    extends: [
      // ...other extends...
      "plugin:jsx-a11y/recommended"
    ],
    rules: {
      // Optionally, customize rules
      "jsx-a11y/label-has-associated-control": [2, {
        "assert": "either"
      }]
    }
  };