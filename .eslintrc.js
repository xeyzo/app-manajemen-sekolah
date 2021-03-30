module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  root: true,
  env: {
    "browser": true,
    "es6": true,
      "node": true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: [
    {
        "files": ["*.tsx"],
        "rules": {
            "react/prop-types": "off"
        }
    },
    {
        "files": ["*.js"],
        "rules": {
            "@typescript-eslint/no-var-requires": "off"
        }
    }
]
}
