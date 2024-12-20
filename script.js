// Sample projects data

const projects = [

  {

    title: "Sales Dashboard",

    description: "A sales analysis dashboard using Tableau.",

    link: "https://example.com/sales-dashboard"

  },

  {

    title: "SQL Data Cleaning",

    description: "A project showcasing SQL skills in cleaning data.",

    link: "https://example.com/sql-cleaning"

  },

  {

    title: "Python Automation Script",

    description: "Automated data processing using Python.",

    link: "https://example.com/python-script"

  }

];



// Dynamically load projects

const projectList = document.getElementById('project-list');



projects.forEach(project => {

  const projectCard = document.createElement('div');

  projectCard.classList.add('project');

  projectCard.innerHTML = `

    <h3>${project.title}</h3>

    <p>${project.description}</p>

    <a href="${project.link}" target="_blank">View Project</a>

  `;

  projectList.appendChild(projectCard);

});



// Smooth scroll to sections

function scrollToSection(sectionId) {

  const section = document.getElementById(sectionId);

  section.scrollIntoView({ behavior: 'smooth' });

}



// Contact form submission (console demo)

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', event => {

  event.preventDefault();

  const name = document.getElementById('name').value;

  const email = document.getElementById('email').value;

  const message = document.getElementById('message').value;



  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  alert("Message sent!");

  contactForm.reset();

});
