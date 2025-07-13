const questionsData = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "A) Hyper Trainer Marking Language",
        "B) Hyper Text Markup Language",
        "C) Hyper Text Marketing Language",
        "D) Hyper Tool Multi Language"
      ],
      answer: "B) Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["A) <a>", "B) <link>", "C) <href>", "D) <hyper>"],
      answer: "A) <a>"
    },
    {
      question: "What is the correct HTML tag for inserting a line break?",
      options: ["A) <break>", "B) <lb>", "C) <br>", "D) <newline>"],
      answer: "C) <br>"
    },
    {
      question: "Which tag is used to define an internal style sheet?",
      options: ["A) <style>", "B) <css>", "C) <script>", "D) <stylesheet>"],
      answer: "A) <style>"
    },
    {
      question: "What is the correct HTML element for inserting an image?",
      options: ["A) <pic>", "B) <image>", "C) <img>", "D) <src>"],
      answer: "C) <img>"
    },
    {
      question: "Which attribute specifies an alternate text for an image?",
      options: ["A) alt", "B) src", "C) title", "D) longdesc"],
      answer: "A) alt"
    },
    {
      question: "How do you create an ordered list?",
      options: ["A) <ul>", "B) <ol>", "C) <list>", "D) <dl>"],
      answer: "B) <ol>"
    },
    {
      question: "Which tag is used to create a table row?",
      options: ["A) <tr>", "B) <td>", "C) <th>", "D) <row>"],
      answer: "A) <tr>"
    },
    {
      question: "Which HTML tag is used to define a footer for a document?",
      options: ["A) <bottom>", "B) <footer>", "C) <section>", "D) <foot>"],
      answer: "B) <footer>"
    },
    {
      question: "Which doctype declaration is correct for HTML5?",
      options: ["A) <!DOCTYPE html>", "B) <!DOCTYPE HTML PUBLIC>", "C) <!HTML5>", "D) <!DOCTYPE html5>"],
      answer: "A) <!DOCTYPE html>"
    }
  ],

  css: [
    {
      question: "Which property is used to change the text color?",
      options: ["A) font-color", "B) text-color", "C) color", "D) foreground"],
      answer: "C) color"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["A) font-size", "B) text-size", "C) font-weight", "D) size"],
      answer: "A) font-size"
    },
    {
      question: "How do you select an element with id 'main'?",
      options: ["A) #main", "B) .main", "C) main", "D) *main"],
      answer: "A) #main"
    },
    {
      question: "Which CSS property sets the background color?",
      options: ["A) color", "B) bgcolor", "C) background-color", "D) background"],
      answer: "C) background-color"
    },
    {
      question: "Which value is used to make a border rounded?",
      options: ["A) border-radius", "B) border-round", "C) round-border", "D) corner-radius"],
      answer: "A) border-radius"
    },
    {
      question: "Which pseudo-class targets the first child element?",
      options: ["A) :first", "B) :first-child", "C) :start", "D) :first-element"],
      answer: "B) :first-child"
    },
    {
      question: "Which CSS property controls the space between lines of text?",
      options: ["A) spacing", "B) line-spacing", "C) line-height", "D) text-spacing"],
      answer: "C) line-height"
    },
    {
      question: "How do you make all <p> elements bold?",
      options: ["A) p {font-weight: bold;}", "B) p {text-weight: bold;}", "C) p {bold: true;}", "D) p {style: bold;}"],
      answer: "A) p {font-weight: bold;}"
    },
    {
      question: "Which property is used to hide an element?",
      options: ["A) display: none", "B) visibility: hidden", "C) Both A and B", "D) opacity: 0"],
      answer: "C) Both A and B"
    },
    {
      question: "Which CSS framework is most popular for responsive design?",
      options: ["A) Bootstrap", "B) jQuery UI", "C) Materialize", "D) Semantic UI"],
      answer: "A) Bootstrap"
    }
  ],

  javascript: [
    {
      question: "Which company developed JavaScript?",
      options: ["A) Microsoft", "B) Sun Microsystems", "C) Netscape", "D) Oracle"],
      answer: "C) Netscape"
    },
    {
      question: "What does 'NaN' stand for?",
      options: ["A) Not a Node", "B) Not a Number", "C) Negative and Null", "D) Null and None"],
      answer: "B) Not a Number"
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: ["A) msg('Hello World');", "B) alertBox('Hello World');", "C) alert('Hello World');", "D) msgBox('Hello World');"],
      answer: "C) alert('Hello World');"
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["A) *", "B) =", "C) -", "D) x"],
      answer: "B) ="
    },
    {
      question: "Which keyword declares a constant in JS?",
      options: ["A) const", "B) var", "C) let", "D) constant"],
      answer: "A) const"
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: ["A) var colors = (1:'red', 2:'green', 3:'blue')", "B) var colors = ['red', 'green', 'blue']", "C) var colors = 'red', 'green', 'blue'", "D) var colors = 1 = ('red'), 2 = ('green')"],
      answer: "B) var colors = ['red', 'green', 'blue']"
    },
    {
      question: "How do you add a comment in JavaScript?",
      options: ["A) <!--comment-->", "B) // comment", "C) ## comment", "D) ** comment"],
      answer: "B) // comment"
    },
    {
      question: "Which method converts JSON to a JavaScript object?",
      options: ["A) JSON.parse()", "B) JSON.stringify()", "C) JSON.convert()", "D) JSON.toObject()"],
      answer: "A) JSON.parse()"
    },
    {
      question: "Which method is used to remove the last element of an array?",
      options: ["A) pop()", "B) push()", "C) shift()", "D) remove()"],
      answer: "A) pop()"
    },
    {
      question: "What will `typeof null` return?",
      options: ["A) 'object'", "B) 'null'", "C) 'undefined'", "D) 'number'"],
      answer: "A) 'object'"
    }
  ],

  react: [
    {
      question: "What is React primarily used for?",
      options: ["A) Database management", "B) Building user interfaces", "C) Server-side rendering only", "D) Data analysis"],
      answer: "B) Building user interfaces"
    },
    {
      question: "What is a Hook in React?",
      options: ["A) A CSS feature", "B) A way to use state in functional components", "C) A router feature", "D) A database connector"],
      answer: "B) A way to use state in functional components"
    },
    {
      question: "What does JSX stand for?",
      options: ["A) Java Syntax Extension", "B) JavaScript XML", "C) JSON Syntax Extension", "D) Java XML"],
      answer: "B) JavaScript XML"
    },
    {
      question: "What method is used to render React content to the DOM?",
      options: ["A) React.mount()", "B) ReactDOM.render()", "C) React.attach()", "D) React.renderToDOM()"],
      answer: "B) ReactDOM.render()"
    },
    {
      question: "Which keyword is used to create a class component?",
      options: ["A) function", "B) const", "C) class", "D) component"],
      answer: "C) class"
    },
    {
      question: "How do you pass data from parent to child component?",
      options: ["A) using props", "B) using state", "C) using setState", "D) using context only"],
      answer: "A) using props"
    },
    {
      question: "Which hook is used for side effects?",
      options: ["A) useState", "B) useEffect", "C) useReducer", "D) useRef"],
      answer: "B) useEffect"
    },
    {
      question: "What is the default behavior of forms in React?",
      options: ["A) They prevent page reload", "B) They submit and reload page", "C) They save to local storage", "D) They call useEffect automatically"],
      answer: "B) They submit and reload page"
    },
    {
      question: "Which tool is used for managing global state?",
      options: ["A) React Router", "B) Redux", "C) Axios", "D) ReactDOM"],
      answer: "B) Redux"
    },
    {
      question: "What does virtual DOM help with?",
      options: ["A) Faster server response", "B) Faster UI rendering", "C) CSS styling", "D) Database queries"],
      answer: "B) Faster UI rendering"
    }
  ]
};

export default questionsData;
