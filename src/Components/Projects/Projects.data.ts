export const projectsData = [
  {
    image: "notes-preview.png",
    title: "To do List",
    description: `I embarked on this project with a goal to create a todo application using React and JavaScript, where I wanted to empower users with the ability to create personalized profiles, log in, manage their todo lists, and perform essential operations such as adding, editing, deleting, and marking todos as complete. To elevate the functionality for such data managment, I decided to integrate a dynamic backend using <b>Firebase,</b> a no-code backend tool.`,
    longDescription: `<p>The objective of this project was to develop a user-friendly and dynamic todo application that allows users to create profiles, log in, manage their todo lists, and perform operations such as adding, editing, deleting, and marking todos as complete. As a junior frontend developer with limited experience and knowledge in backend technologies, I made the strategic decision to utilize Firebase as the backend solution for this project. Firebase, being a no-code tool, allowed me to overcome the challenges of working with traditional backend technologies by providing a user-friendly and simplified approach to managing the application's data and user authentication.</p>
    <br/>
    <br/>
    Features:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>User authentication: </b> Users can create an account, log in, and access their own todo lists.</li>
    <li><b>Todo management: </b> Users can create new todos, edit existing ones, delete todos, and mark them as complete.</li>
    <li><b>Real-time updates: </b> Any changes made to the todos are instantly synced, ensuring a seamless user experience</li>
    <li><b>Responsive design: </b> The application is designed to be responsive and accessible on various devices, including desktops, tablets, and mobile phones.</li>
    </ul>
    <br/>
    <br/>
    Technologies Used:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>React: </b> A JavaScript library for building user interfaces.</li>
    <li><b>JavaScript: </b> The programming language used for frontend logic and interactivity.</li>
    <li><b>Firebase: </b> A no-code backend tool providing real-time database and user authentication services.</li>
    <li><b>HTML</b> and <b>CSS: </b> Markup and styling languages for structuring and presenting the application's user interface.</li>
    </ul>
    <br/>
    <br/>
    Challenges and Solutions:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>Simpple User Authentication: </b> Implementing user authentication system while ensuring a smooth user experience. Integrated Firebase Authentication to handle simple user registration, login, and change password. This allowed for secure and straightforward user authentication without the need for complex backend logic.</li>
    <li><b>Data Management and Synchronization: </b> Designing a data structure that efficiently manages todo items. Leveraged Firebase Realtime Database to store and retrieve todo data. The real-time database updates ensured that any changes made to todos were instantly reflected across connected clients.</li>
    </ul>
    <br/>
    <br/>
   <p>Building a dynamic todo application using <b>React, JavaScript,</b> and <b>Firebase</b> as the backend was an exciting and valuable learning experience for me as a junior frontend developer. The successful integration of Firebase provided real-time data synchronization and user authentication, enhancing the functionality and usability of the application. Working on this project improved my skills in React and my understanding how data structure works and what it takes for simple authentication and data management applications.</p>
      `,
    resources: ["html", "css", "javascript", "react", "firebase"],
    projectUrl:
      "https://6317089d6702a72ca289df82--mypersonalnotesmanager.netlify.app/",
    github: "https://github.com/IrenaKar/notes"
  },
  {
    image: "resourceya-preview.png",
    title: "Education platform",
    description: `Education platform for exchanging materials between teachers. `,
    longDescription: `This platform is built with a no-code tool called Bubble.io. Bubble allows the users to build full stack projects and connect their projects with external APIs using a plugin called API connector. With this type of plugins in Bubble it is also possible to write your own custom HTML, CSS, JavaScript and jQuery code and use it wherever you like in the project. The education platform also works as a marketplace, because it allows users to buy and sell materials, and this is enabled by using a payment processing platform called Stripe. Stripe is also connected to Bubble through an API.
          Other functionalities in this marketplace are posting, editing and deleting materials, receiving notification if some user posted material, adding to favorites, buying, downloading materials and leaving a review or message to the seller.
          For the search and filtering of the cards, this platform is using Algolia search.`,
    resources: ["Bubble.io"],
    projectUrl: "https://resourceya.com/",
    github: ""
  },
  {
    image: "coin-tracker-preview.png",
    title: "Coin Tracker",
    description: `The Coin Tracker is a native application developed as a graduation project for an academy for frontend development. It aims to provide users with a simple and intuitive interface to track their monthly incomes and expenses, organized by categories. It is build using <b>React</b> and <b>Material Ui</b>. Although it does not include backend connectivity or user authentication, it does enforce basic form validation using the Formik library`,
    longDescription: `<p>The application provides users with an overview of their total incomes, total expenses, and detailed information about each individual income or expense. The primary objective of the Coin Tracker application is to help users effectively manage their finances by providing a convenient and user-friendly interface for tracking their monthly incomes and expenses. By offering the ability to categorize transactions and set a budget, users can gain insights into their spending patterns and make rational financial decisions.</p> 
    <br/>
    <br/>
    Features:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>Users Login: </b>Users can log in to the application by providing their email and password. Basic form validation ensures that the fields are not empty, and the email format is correct. User authentication and backend connectivity are not implemented in this version.</li>
    <li><b>Dashboard Overview: </b>The dashboard presents a summary of users total incomes and total expenses for the current month. Users can see a clear visualization of their financial situation at a glance.</li>
    <li><b>Categories Management: </b>Users can add, edit, and delete custom categories to organize their incomes and expenses effectively.</li>
    <li><b>Responsive design: </b>Since this is a native application, the responsive design was very important part of implementation. Thanks to the ready components of the <b>Material Ui</b> framework, the application was able to achieve a visually appealing and consistent UI across different devices and screen sizes.</li>
    </ul>
    <br/>
    <br/>
    Technologies Used:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>React: </b>A JavaScript library for building user interfaces.</li>
    <li><b>Material UI:</b>UI component library for React that implements Google's Material Design principles.</li>
    </ul>
    <br/>
    <br/>
    Challenges and Solutions:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>Simpple User Authentication: </b> Implementing user authentication system while ensuring a smooth user experience. Integrated Firebase Authentication to handle simple user registration, login, and change password. This allowed for secure and straightforward user authentication without the need for complex backend logic.</li>
    <li><b>Data Management and Synchronization: </b> Designing a data structure that efficiently manages todo items. Leveraged Firebase Realtime Database to store and retrieve todo data. The real-time database updates ensured that any changes made to todos were instantly reflected across connected clients.</li>
    </ul>
    <br/>
    <br/>
   <p>Working on the Coin Tracker project as a fresh frontend developer was a valuable experience that provided the opportunity to enhance proficiency in React, and Material UI. Through building the user interface components using React, I gained a deep understanding of component-based architecture and efficient state management and I had a chance to use my practical skills that I learned at the academy.</p>`,

    resources: ["html", "css", "mui", "react", "javascript"],
    projectUrl: "https://cointrackerproject.netlify.app/#/",
    github: "https://github.com/IrenaKar/Coin-tracker"
  },

  {
    image: "race-preview.png",
    title: "Racing Car",
    description: `The Car Racing Project is a challenge project undertaken at an academy for frontend development developed using jQuery and Bootstrap. The core functionality of the racing game involves generating random numbers for each car using JavaScript's Math.random() function. By comparing these numbers, the winner will be determined based on which car reaches the goal first, establishing the ultimate victory.`,
    longDescription: `<br/>
    <br/>
    Features:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>User Interface: </b>The project required designing an intuitive user interface that displays the racing track, cars, buttons, and relevant information. By using the Bootstrap framework, I utilized it to provide a clean and visually appealing design.</li>
    <li><b>Random Number Generation: </b>Utilizing the Math.random() function to generate random numbers for both cars ensures an element of chance in determining the race outcome.</li>
    <li><b>Race Outcome Calculation: </b>Comparing the randomly generated numbers for the cars allows determining which car reaches the goal first and declaring the winner accordingly.</li>
    <li><b>Local Storage: </b>Implementing local storage allows recording and persisting the results from previous games, enabling players to track their progress.</li>
    </ul>
    Technologies Used:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>HTML: </b>The project's structure and layout are built using HTML, defining the elements and their placement.</li>
    <li><b>Bootstrap:</b>The Bootstrap framework is employed for its responsive grid system, pre-styled components, and utility classes, simplifying the styling process and ensuring a consistent and responsive design.</li>
    <li><b>jQuery:</b>jQuery, a JavaScript library, is used to simplify DOM manipulation, handle events, and facilitate smooth animations in the project.</li>
    </ul>
    <br/>
    <br/>
    Challenges and Solutions:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>Animation and Car Movement: </b> Implementing smooth animation to simulate the movement of cars along the racing track can be challenging. In jQuery it was very straightforward to achieve it with using animate method.</li>
    </ul>
    `,
    resources: ["html", "css", "bootstrap", "jquery"],
    projectUrl:
      "https://60f9c8d475e5b73f1ab9af4e--nervous-goldberg-4a1b9b.netlify.app/",
    github: "https://github.com/IrenaKar/Racing-car"
  }
  // {
  //   image: "bikes-preview.png",
  //   title: "Bikes",
  //   description: `Simple bike shop project, with main focus on the filtering cards functionality.`,
  //   longDescription: `This project was built as an exercise at the academy to use ReactJs and logic for filters. The data is filtered by gender and by brand. In the badges, there is information about how many bikes there are in the database from each category.`,
  //   resources: ["html", "css", "react", "javascript"],
  //   projectUrl: "https://buybiketoday.netlify.app/",
  //   github: "https://github.com/IrenaKar/bikes"
  // }
];
