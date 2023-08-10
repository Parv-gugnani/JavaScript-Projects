const roadmapSection = document.getElementById("roadmap");
const languageLinks = document.querySelectorAll(".language-link");

languageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const selectedLanguage = link.dataset.lang;
    roadmapSection.innerHTML = `<h2>${selectedLanguage.toUpperCase()} Roadmap</h2>`;
  });
});

const roadmapContent = document.getElementById("roadmapContent");

languageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const selectedLanguage = link.dataset.lang;
    roadmapContent.innerHTML = roadmapData[selectedLanguage];
  });
});

// Define roadmap content for each programming language
const roadmapData = {
  html: `
    <h3>HTML/CSS Roadmap</h3>
    <p>Whether you're just starting or want to deepen your skills in web development, this roadmap will guide you through essential HTML and CSS concepts.</p>
    <h4>Getting Started</h4>
    <ul>
      <li>Introduction to HTML</li>
      <li>HTML Elements and Tags</li>
      <li>Basic Text Formatting</li>
      <!-- Add more getting started topics -->
    </ul>
    <h4>Intermediate Topics</h4>
    <ul>
      <li>Forms and Input Elements</li>
      <li>CSS Basics</li>
      <li>CSS Selectors and Properties</li>
      <!-- Add more intermediate topics -->
    </ul>
    <h4>Advanced Concepts</h4>
    <ul>
      <li>Responsive Design</li>
      <li>CSS Flexbox and Grid</li>
      <li>CSS Preprocessors</li>
      <!-- Add more advanced concepts -->
    </ul>
    <!-- Add more sections and topics -->
  `,
  javascript: `
    <h3>JavaScript Roadmap</h3>
    <p>From fundamental concepts to advanced techniques, this roadmap will take you on a journey to master JavaScript.</p>
    <h4>Getting Started</h4>
    <ul>
      <li>Introduction to JavaScript</li>
      <li>Variables and Data Types</li>
      <li>Operators and Expressions</li>
      <!-- Add more getting started topics -->
    </ul>
    <h4>Intermediate Topics</h4>
    <ul>
      <li>Control Structures</li>
      <li>Functions and Scope</li>
      <li>Arrays and Objects</li>
      <!-- Add more intermediate topics -->
    </ul>
    <h4>Advanced Concepts</h4>
    <ul>
      <li>Prototypes and Inheritance</li>
      <li>Asynchronous Programming</li>
      <li>ES6+ Features</li>
      <!-- Add more advanced concepts -->
    </ul>
    <!-- Add more sections and topics -->
  `,
};

languageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const selectedLanguage = link.dataset.lang;
    roadmapSection.innerHTML = `<h2>${selectedLanguage.toUpperCase()} Roadmap</h2>`;
    roadmapContent.innerHTML = roadmapData[selectedLanguage];
  });
});
