import { db } from '../database';

interface QuestionData {
  text: string;
  options: Array<{
    text: string;
    correct: boolean;
  }>;
}

export const fullStackQuestions: QuestionData[] = [
  // HTML Questions (20)
  {
    text: "What does HTML stand for?",
    options: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Hyperlinking Text Management Language", correct: false }
    ]
  },
  {
    text: "Which HTML tag is used to create a hyperlink?",
    options: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false }
    ]
  },
  {
    text: "What is the correct HTML element for the largest heading?",
    options: [
      { text: "<heading>", correct: false },
      { text: "<h6>", correct: false },
      { text: "<h1>", correct: true },
      { text: "<header>", correct: false }
    ]
  },
  {
    text: "Which HTML attribute specifies an alternate text for an image?",
    options: [
      { text: "title", correct: false },
      { text: "alt", correct: true },
      { text: "src", correct: false },
      { text: "longdesc", correct: false }
    ]
  },
  {
    text: "What is the correct HTML element for playing video files?",
    options: [
      { text: "<movie>", correct: false },
      { text: "<media>", correct: false },
      { text: "<video>", correct: true },
      { text: "<play>", correct: false }
    ]
  },
  {
    text: "Which HTML tag is used to define an internal style sheet?",
    options: [
      { text: "<css>", correct: false },
      { text: "<script>", correct: false },
      { text: "<style>", correct: true },
      { text: "<link>", correct: false }
    ]
  },
  {
    text: "What is the correct HTML for creating a checkbox?",
    options: [
      { text: "<input type='check'>", correct: false },
      { text: "<input type='checkbox'>", correct: true },
      { text: "<checkbox>", correct: false },
      { text: "<check>", correct: false }
    ]
  },
  {
    text: "Which HTML tag is used to create a dropdown list?",
    options: [
      { text: "<list>", correct: false },
      { text: "<dropdown>", correct: false },
      { text: "<select>", correct: true },
      { text: "<option>", correct: false }
    ]
  },
  {
    text: "What does the HTML <canvas> element do?",
    options: [
      { text: "Creates a drawing area", correct: true },
      { text: "Displays images", correct: false },
      { text: "Creates tables", correct: false },
      { text: "Embeds videos", correct: false }
    ]
  },
  {
    text: "Which HTML5 element is used for navigation links?",
    options: [
      { text: "<navigation>", correct: false },
      { text: "<nav>", correct: true },
      { text: "<navigate>", correct: false },
      { text: "<menu>", correct: false }
    ]
  },
  {
    text: "What is the purpose of the HTML <meta> tag?",
    options: [
      { text: "To provide metadata about the document", correct: true },
      { text: "To create links", correct: false },
      { text: "To add images", correct: false },
      { text: "To format text", correct: false }
    ]
  },
  {
    text: "Which HTML attribute is used to define inline styles?",
    options: [
      { text: "class", correct: false },
      { text: "style", correct: true },
      { text: "styles", correct: false },
      { text: "font", correct: false }
    ]
  },
  {
    text: "What is the correct HTML for inserting a line break?",
    options: [
      { text: "<break>", correct: false },
      { text: "<br>", correct: true },
      { text: "<lb>", correct: false },
      { text: "<newline>", correct: false }
    ]
  },
  {
    text: "Which HTML element defines the document type?",
    options: [
      { text: "<doctype>", correct: false },
      { text: "<html>", correct: false },
      { text: "<!DOCTYPE>", correct: true },
      { text: "<head>", correct: false }
    ]
  },
  {
    text: "What is the correct HTML for making a text area?",
    options: [
      { text: "<input type='textbox'>", correct: false },
      { text: "<textarea>", correct: true },
      { text: "<input type='textarea'>", correct: false },
      { text: "<textinput>", correct: false }
    ]
  },
  {
    text: "Which HTML tag is used to display code?",
    options: [
      { text: "<pre>", correct: false },
      { text: "<code>", correct: true },
      { text: "<script>", correct: false },
      { text: "<programming>", correct: false }
    ]
  },
  {
    text: "What does the HTML lang attribute specify?",
    options: [
      { text: "The language of the page content", correct: true },
      { text: "The location of the page", correct: false },
      { text: "The length of the page", correct: false },
      { text: "The layout of the page", correct: false }
    ]
  },
  {
    text: "Which HTML element is used to specify a footer?",
    options: [
      { text: "<bottom>", correct: false },
      { text: "<footer>", correct: true },
      { text: "<section>", correct: false },
      { text: "<end>", correct: false }
    ]
  },
  {
    text: "What is the correct HTML for creating a horizontal rule?",
    options: [
      { text: "<line>", correct: false },
      { text: "<hr>", correct: true },
      { text: "<horizontal>", correct: false },
      { text: "<rule>", correct: false }
    ]
  },
  {
    text: "Which HTML attribute specifies the URL of the page the link goes to?",
    options: [
      { text: "src", correct: false },
      { text: "href", correct: true },
      { text: "link", correct: false },
      { text: "url", correct: false }
    ]
  },

  // CSS Questions (20)
  {
    text: "What does CSS stand for?",
    options: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false }
    ]
  },
  {
    text: "Which CSS property is used to change the text color?",
    options: [
      { text: "text-color", correct: false },
      { text: "font-color", correct: false },
      { text: "color", correct: true },
      { text: "foreground-color", correct: false }
    ]
  },
  {
    text: "How do you add a background color in CSS?",
    options: [
      { text: "bgcolor", correct: false },
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "bg-color", correct: false }
    ]
  },
  {
    text: "Which CSS property controls the text size?",
    options: [
      { text: "font-style", correct: false },
      { text: "text-size", correct: false },
      { text: "font-size", correct: true },
      { text: "text-style", correct: false }
    ]
  },
  {
    text: "What is the correct CSS syntax for making all <p> elements bold?",
    options: [
      { text: "p {font-weight: bold;}", correct: true },
      { text: "p {text-size: bold;}", correct: false },
      { text: "<p style='font-size: bold;'>", correct: false },
      { text: "p {font-style: bold;}", correct: false }
    ]
  },
  {
    text: "Which CSS property is used to change the font of an element?",
    options: [
      { text: "font-family", correct: true },
      { text: "font-style", correct: false },
      { text: "font", correct: false },
      { text: "font-type", correct: false }
    ]
  },
  {
    text: "How do you make each word in a text start with a capital letter?",
    options: [
      { text: "text-transform: capitalize", correct: true },
      { text: "text-style: capitalize", correct: false },
      { text: "transform: capitalize", correct: false },
      { text: "font-transform: capitalize", correct: false }
    ]
  },
  {
    text: "Which CSS property is used to create space between the element's border and inner content?",
    options: [
      { text: "margin", correct: false },
      { text: "padding", correct: true },
      { text: "spacing", correct: false },
      { text: "border-spacing", correct: false }
    ]
  },
  {
    text: "What is the default value of the position property in CSS?",
    options: [
      { text: "relative", correct: false },
      { text: "absolute", correct: false },
      { text: "static", correct: true },
      { text: "fixed", correct: false }
    ]
  },
  {
    text: "Which CSS property is used to make rounded corners?",
    options: [
      { text: "corner-radius", correct: false },
      { text: "border-radius", correct: true },
      { text: "border-corner", correct: false },
      { text: "corner-style", correct: false }
    ]
  },
  {
    text: "What does the CSS box model consist of?",
    options: [
      { text: "Content, padding, border, margin", correct: true },
      { text: "Content, spacing, border, outline", correct: false },
      { text: "Text, padding, border, background", correct: false },
      { text: "Content, margin, outline, shadow", correct: false }
    ]
  },
  {
    text: "Which CSS property is used to align text?",
    options: [
      { text: "text-align", correct: true },
      { text: "align", correct: false },
      { text: "text-alignment", correct: false },
      { text: "alignment", correct: false }
    ]
  },
  {
    text: "How do you select an element with id 'header' in CSS?",
    options: [
      { text: ".header", correct: false },
      { text: "#header", correct: true },
      { text: "header", correct: false },
      { text: "*header", correct: false }
    ]
  },
  {
    text: "Which CSS property is used to hide an element?",
    options: [
      { text: "visibility: hidden", correct: false },
      { text: "display: none", correct: false },
      { text: "Both A and B", correct: true },
      { text: "hide: true", correct: false }
    ]
  },
  {
    text: "What is the correct way to add comments in CSS?",
    options: [
      { text: "// This is a comment", correct: false },
      { text: "<!-- This is a comment -->", correct: false },
      { text: "/* This is a comment */", correct: true },
      { text: "# This is a comment", correct: false }
    ]
  },
  {
    text: "Which CSS property is used to create a flexible layout?",
    options: [
      { text: "flex", correct: false },
      { text: "display: flex", correct: true },
      { text: "layout: flex", correct: false },
      { text: "flexible: true", correct: false }
    ]
  },
  {
    text: "What does the z-index property do in CSS?",
    options: [
      { text: "Controls the zoom level", correct: false },
      { text: "Controls the stacking order", correct: true },
      { text: "Controls the font size", correct: false },
      { text: "Controls the element width", correct: false }
    ]
  },
  {
    text: "Which CSS property is used to add shadow to text?",
    options: [
      { text: "font-shadow", correct: false },
      { text: "text-shadow", correct: true },
      { text: "shadow", correct: false },
      { text: "box-shadow", correct: false }
    ]
  },
  {
    text: "What is the CSS property used to change the style of the cursor?",
    options: [
      { text: "cursor", correct: true },
      { text: "pointer", correct: false },
      { text: "mouse", correct: false },
      { text: "cursor-style", correct: false }
    ]
  },
  {
    text: "Which CSS unit is relative to the font-size of the root element?",
    options: [
      { text: "em", correct: false },
      { text: "rem", correct: true },
      { text: "px", correct: false },
      { text: "pt", correct: false }
    ]
  },

  // JavaScript Questions (20)
  {
    text: "Which method is used to add an element at the end of an array in JavaScript?",
    options: [
      { text: "append()", correct: false },
      { text: "push()", correct: true },
      { text: "add()", correct: false },
      { text: "insert()", correct: false }
    ]
  },
  {
    text: "What is the correct way to declare a variable in JavaScript?",
    options: [
      { text: "variable x = 5;", correct: false },
      { text: "var x = 5;", correct: true },
      { text: "declare x = 5;", correct: false },
      { text: "x := 5;", correct: false }
    ]
  },
  {
    text: "Which operator is used to compare both value and type in JavaScript?",
    options: [
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "=", correct: false },
      { text: "!=", correct: false }
    ]
  },
  {
    text: "What does DOM stand for?",
    options: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Management", correct: false },
      { text: "Dynamic Object Model", correct: false },
      { text: "Document Oriented Model", correct: false }
    ]
  },
  {
    text: "Which method is used to remove the last element from an array?",
    options: [
      { text: "delete()", correct: false },
      { text: "remove()", correct: false },
      { text: "pop()", correct: true },
      { text: "shift()", correct: false }
    ]
  },
  {
    text: "What is the correct way to write a JavaScript array?",
    options: [
      { text: "var colors = (1:'red', 2:'green', 3:'blue')", correct: false },
      { text: "var colors = ['red', 'green', 'blue']", correct: true },
      { text: "var colors = 'red', 'green', 'blue'", correct: false },
      { text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", correct: false }
    ]
  },
  {
    text: "Which event occurs when the user clicks on an HTML element?",
    options: [
      { text: "onchange", correct: false },
      { text: "onclick", correct: true },
      { text: "onmouseclick", correct: false },
      { text: "onmouseover", correct: false }
    ]
  },
  {
    text: "How do you create a function in JavaScript?",
    options: [
      { text: "function myFunction() {}", correct: true },
      { text: "create myFunction() {}", correct: false },
      { text: "function = myFunction() {}", correct: false },
      { text: "def myFunction() {}", correct: false }
    ]
  },
  {
    text: "What is the correct JavaScript syntax to change the content of an HTML element?",
    options: [
      { text: "document.getElement('p').innerHTML = 'Hello World!'", correct: false },
      { text: "document.getElementById('demo').innerHTML = 'Hello World!'", correct: true },
      { text: "#demo.innerHTML = 'Hello World!'", correct: false },
      { text: "document.getElementByName('p').innerHTML = 'Hello World!'", correct: false }
    ]
  },
  {
    text: "What will the following code return: Boolean(10 > 9)?",
    options: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false }
    ]
  },
  {
    text: "Which method can be used to convert a string to lowercase?",
    options: [
      { text: "toLowerCase()", correct: true },
      { text: "toLower()", correct: false },
      { text: "changeCase(lower)", correct: false },
      { text: "lower()", correct: false }
    ]
  },
  {
    text: "What is the result of 3 + 2 + '7' in JavaScript?",
    options: [
      { text: "12", correct: false },
      { text: "57", correct: true },
      { text: "32", correct: false },
      { text: "327", correct: false }
    ]
  },
  {
    text: "Which method is used to join array elements into a string?",
    options: [
      { text: "concat()", correct: false },
      { text: "join()", correct: true },
      { text: "merge()", correct: false },
      { text: "combine()", correct: false }
    ]
  },
  {
    text: "What does the 'typeof' operator do in JavaScript?",
    options: [
      { text: "Returns the type of a variable", correct: true },
      { text: "Creates a new type", correct: false },
      { text: "Changes the type of a variable", correct: false },
      { text: "Compares two types", correct: false }
    ]
  },
  {
    text: "How do you round the number 7.25 to the nearest integer in JavaScript?",
    options: [
      { text: "Math.round(7.25)", correct: true },
      { text: "Math.rnd(7.25)", correct: false },
      { text: "round(7.25)", correct: false },
      { text: "Math.floor(7.25)", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'use strict' directive?",
    options: [
      { text: "Enables strict mode", correct: true },
      { text: "Creates strict variables", correct: false },
      { text: "Enables error checking", correct: false },
      { text: "Forces variable declaration", correct: false }
    ]
  },
  {
    text: "Which method is used to add new items to the beginning of an array?",
    options: [
      { text: "unshift()", correct: true },
      { text: "shift()", correct: false },
      { text: "push()", correct: false },
      { text: "pop()", correct: false }
    ]
  },
  {
    text: "What does JSON stand for?",
    options: [
      { text: "JavaScript Object Notation", correct: true },
      { text: "JavaScript Online Notation", correct: false },
      { text: "JavaScript Object Network", correct: false },
      { text: "JavaScript Oriented Notation", correct: false }
    ]
  },
  {
    text: "How do you check if a variable is an array in JavaScript?",
    options: [
      { text: "Array.isArray()", correct: true },
      { text: "typeof array", correct: false },
      { text: "variable instanceof Array", correct: false },
      { text: "Both A and C", correct: false }
    ]
  },
  {
    text: "What is the difference between 'let' and 'var'?",
    options: [
      { text: "let has block scope, var has function scope", correct: true },
      { text: "var has block scope, let has function scope", correct: false },
      { text: "No difference", correct: false },
      { text: "let is faster than var", correct: false }
    ]
  },

  // React Questions (15)
  {
    text: "What is React?",
    options: [
      { text: "A JavaScript library for building user interfaces", correct: true },
      { text: "A database management system", correct: false },
      { text: "A CSS framework", correct: false },
      { text: "A web server", correct: false }
    ]
  },
  {
    text: "What is JSX in React?",
    options: [
      { text: "JavaScript XML", correct: true },
      { text: "JavaScript Extension", correct: false },
      { text: "Java Syntax Extension", correct: false },
      { text: "JSON XML", correct: false }
    ]
  },
  {
    text: "Which method is used to update state in a React class component?",
    options: [
      { text: "updateState()", correct: false },
      { text: "setState()", correct: true },
      { text: "changeState()", correct: false },
      { text: "modifyState()", correct: false }
    ]
  },
  {
    text: "What is a React Hook?",
    options: [
      { text: "A function that lets you use state in functional components", correct: true },
      { text: "A method to create classes", correct: false },
      { text: "A way to style components", correct: false },
      { text: "A routing mechanism", correct: false }
    ]
  },
  {
    text: "Which hook is used to manage state in functional components?",
    options: [
      { text: "useEffect", correct: false },
      { text: "useState", correct: true },
      { text: "useContext", correct: false },
      { text: "useReducer", correct: false }
    ]
  },
  {
    text: "What is the virtual DOM in React?",
    options: [
      { text: "A JavaScript representation of the real DOM", correct: true },
      { text: "A CSS framework", correct: false },
      { text: "A database", correct: false },
      { text: "A testing library", correct: false }
    ]
  },
  {
    text: "How do you pass data from parent to child component in React?",
    options: [
      { text: "Through props", correct: true },
      { text: "Through state", correct: false },
      { text: "Through context", correct: false },
      { text: "Through refs", correct: false }
    ]
  },
  {
    text: "What is the purpose of useEffect hook?",
    options: [
      { text: "To perform side effects in functional components", correct: true },
      { text: "To manage state", correct: false },
      { text: "To create context", correct: false },
      { text: "To handle events", correct: false }
    ]
  },
  {
    text: "What is Redux?",
    options: [
      { text: "A predictable state container for JavaScript apps", correct: true },
      { text: "A CSS framework", correct: false },
      { text: "A testing library", correct: false },
      { text: "A database", correct: false }
    ]
  },
  {
    text: "Which method is called immediately after a component is mounted?",
    options: [
      { text: "componentWillMount", correct: false },
      { text: "componentDidMount", correct: true },
      { text: "componentWillUpdate", correct: false },
      { text: "componentDidUpdate", correct: false }
    ]
  },
  {
    text: "What is the correct way to update an array in React state?",
    options: [
      { text: "state.array.push(item)", correct: false },
      { text: "setState([...state.array, item])", correct: true },
      { text: "state.array = [...state.array, item]", correct: false },
      { text: "updateState(state.array.push(item))", correct: false }
    ]
  },
  {
    text: "What is React Router used for?",
    options: [
      { text: "Client-side routing in React applications", correct: true },
      { text: "State management", correct: false },
      { text: "API calls", correct: false },
      { text: "Component styling", correct: false }
    ]
  },
  {
    text: "What is the difference between controlled and uncontrolled components?",
    options: [
      { text: "Controlled components have their state managed by React", correct: true },
      { text: "Uncontrolled components have their state managed by React", correct: false },
      { text: "No difference", correct: false },
      { text: "Controlled components are faster", correct: false }
    ]
  },
  {
    text: "What is prop drilling in React?",
    options: [
      { text: "Passing props through multiple component levels", correct: true },
      { text: "Creating new props", correct: false },
      { text: "Deleting props", correct: false },
      { text: "Modifying props", correct: false }
    ]
  },
  {
    text: "Which hook is used to optimize performance by memoizing values?",
    options: [
      { text: "useMemo", correct: true },
      { text: "useCallback", correct: false },
      { text: "useEffect", correct: false },
      { text: "useState", correct: false }
    ]
  },

  // Node.js Questions (15)
  {
    text: "What is Node.js?",
    options: [
      { text: "A JavaScript runtime built on Chrome's V8 engine", correct: true },
      { text: "A web browser", correct: false },
      { text: "A database", correct: false },
      { text: "A CSS framework", correct: false }
    ]
  },
  {
    text: "What is npm?",
    options: [
      { text: "Node Package Manager", correct: true },
      { text: "Node Programming Model", correct: false },
      { text: "Node Project Manager", correct: false },
      { text: "Node Process Manager", correct: false }
    ]
  },
  {
    text: "Which method is used to include modules in Node.js?",
    options: [
      { text: "include()", correct: false },
      { text: "require()", correct: true },
      { text: "import()", correct: false },
      { text: "use()", correct: false }
    ]
  },
  {
    text: "What is Express.js?",
    options: [
      { text: "A web application framework for Node.js", correct: true },
      { text: "A database", correct: false },
      { text: "A CSS framework", correct: false },
      { text: "A testing library", correct: false }
    ]
  },
  {
    text: "Which of the following is a core module in Node.js?",
    options: [
      { text: "fs", correct: true },
      { text: "express", correct: false },
      { text: "mongoose", correct: false },
      { text: "lodash", correct: false }
    ]
  },
  {
    text: "What is the purpose of package.json?",
    options: [
      { text: "To store metadata about the project and dependencies", correct: true },
      { text: "To store source code", correct: false },
      { text: "To store database connections", correct: false },
      { text: "To store CSS styles", correct: false }
    ]
  },
  {
    text: "Which method is used to create a server in Node.js?",
    options: [
      { text: "http.createServer()", correct: true },
      { text: "server.create()", correct: false },
      { text: "node.createServer()", correct: false },
      { text: "express.createServer()", correct: false }
    ]
  },
  {
    text: "What is middleware in Express.js?",
    options: [
      { text: "Functions that execute during the request-response cycle", correct: true },
      { text: "A database connection", correct: false },
      { text: "A type of router", correct: false },
      { text: "A CSS preprocessor", correct: false }
    ]
  },
  {
    text: "Which command is used to install a package globally with npm?",
    options: [
      { text: "npm install -g package-name", correct: true },
      { text: "npm global install package-name", correct: false },
      { text: "npm install --global package-name", correct: false },
      { text: "Both A and C", correct: false }
    ]
  },
  {
    text: "What is the event loop in Node.js?",
    options: [
      { text: "A mechanism that handles asynchronous operations", correct: true },
      { text: "A type of database", correct: false },
      { text: "A web server", correct: false },
      { text: "A CSS framework", correct: false }
    ]
  },
  {
    text: "Which method is used to read a file asynchronously in Node.js?",
    options: [
      { text: "fs.readFile()", correct: true },
      { text: "fs.read()", correct: false },
      { text: "fs.readSync()", correct: false },
      { text: "file.read()", correct: false }
    ]
  },
  {
    text: "What is MongoDB?",
    options: [
      { text: "A NoSQL database", correct: true },
      { text: "A web server", correct: false },
      { text: "A JavaScript framework", correct: false },
      { text: "A CSS preprocessor", correct: false }
    ]
  },
  {
    text: "What is Mongoose in Node.js?",
    options: [
      { text: "An ODM (Object Document Mapper) for MongoDB", correct: true },
      { text: "A web server", correct: false },
      { text: "A testing framework", correct: false },
      { text: "A CSS library", correct: false }
    ]
  },
  {
    text: "Which status code represents a successful HTTP request?",
    options: [
      { text: "404", correct: false },
      { text: "500", correct: false },
      { text: "200", correct: true },
      { text: "301", correct: false }
    ]
  },
  {
    text: "What is CORS?",
    options: [
      { text: "Cross-Origin Resource Sharing", correct: true },
      { text: "Cross-Origin Request System", correct: false },
      { text: "Client-Origin Resource Sharing", correct: false },
      { text: "Cross-Object Resource System", correct: false }
    ]
  },

  // Database Questions (10)
  {
    text: "What does SQL stand for?",
    options: [
      { text: "Structured Query Language", correct: true },
      { text: "Simple Query Language", correct: false },
      { text: "Standard Query Language", correct: false },
      { text: "System Query Language", correct: false }
    ]
  },
  {
    text: "Which SQL statement is used to extract data from a database?",
    options: [
      { text: "EXTRACT", correct: false },
      { text: "SELECT", correct: true },
      { text: "GET", correct: false },
      { text: "OPEN", correct: false }
    ]
  },
  {
    text: "What is a primary key in a database?",
    options: [
      { text: "A unique identifier for each record", correct: true },
      { text: "The first column in a table", correct: false },
      { text: "A password for the database", correct: false },
      { text: "The main table in a database", correct: false }
    ]
  },
  {
    text: "What is the difference between SQL and NoSQL databases?",
    options: [
      { text: "SQL uses structured data, NoSQL uses unstructured data", correct: true },
      { text: "SQL is faster than NoSQL", correct: false },
      { text: "NoSQL is older than SQL", correct: false },
      { text: "No difference", correct: false }
    ]
  },
  {
    text: "Which command is used to create a new table in SQL?",
    options: [
      { text: "CREATE TABLE", correct: true },
      { text: "NEW TABLE", correct: false },
      { text: "MAKE TABLE", correct: false },
      { text: "ADD TABLE", correct: false }
    ]
  },
  {
    text: "What is a foreign key?",
    options: [
      { text: "A key from another country", correct: false },
      { text: "A field that refers to the primary key of another table", correct: true },
      { text: "An encrypted key", correct: false },
      { text: "A backup key", correct: false }
    ]
  },
  {
    text: "Which SQL clause is used to filter records?",
    options: [
      { text: "FILTER", correct: false },
      { text: "WHERE", correct: true },
      { text: "SELECT", correct: false },
      { text: "HAVING", correct: false }
    ]
  },
  {
    text: "What is normalization in databases?",
    options: [
      { text: "The process of organizing data to reduce redundancy", correct: true },
      { text: "Making all data the same format", correct: false },
      { text: "Creating backups", correct: false },
      { text: "Encrypting data", correct: false }
    ]
  },
  {
    text: "Which SQL command is used to add new data to a table?",
    options: [
      { text: "ADD", correct: false },
      { text: "INSERT", correct: true },
      { text: "PUT", correct: false },
      { text: "CREATE", correct: false }
    ]
  },
  {
    text: "What is an index in a database?",
    options: [
      { text: "A data structure that improves query performance", correct: true },
      { text: "The first row of a table", correct: false },
      { text: "A list of all tables", correct: false },
      { text: "A backup of the database", correct: false }
    ]
  }
];

export const seedDatabase = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    console.log('🌱 Seeding database with 100 full-stack web development questions...');
    
    let insertedQuestions = 0;
    const totalQuestions = fullStackQuestions.length;

    fullStackQuestions.forEach((question, index) => {
      db.run(
        'INSERT INTO questions (question_text) VALUES (?)',
        [question.text],
        function(this: any, err: Error | null) {
          if (err) {
            console.error(`Error inserting question ${index + 1}:`, err);
            return;
          }
          
          const questionId = this.lastID;
          let insertedOptions = 0;
          
          question.options.forEach(option => {
            db.run(
              'INSERT INTO options (question_id, option_text, is_correct) VALUES (?, ?, ?)',
              [questionId, option.text, option.correct ? 1 : 0],
              (err: Error | null) => {
                if (err) {
                  console.error(`Error inserting option for question ${index + 1}:`, err);
                  return;
                }
                
                insertedOptions++;
                if (insertedOptions === question.options.length) {
                  insertedQuestions++;
                  if (insertedQuestions === totalQuestions) {
                    console.log(`✅ Successfully seeded ${totalQuestions} questions with ${totalQuestions * 4} options!`);
                    resolve();
                  }
                }
              }
            );
          });
        }
      );
    });
  });
};