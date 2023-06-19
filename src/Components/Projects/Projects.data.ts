export const projectsData = [
  {
    image: "goodcarbon.png",
    title: "Digital investment and trading platform",
    description: `During my latest role as a junior frontend developer, I had the opportunity to work on an exciting MVP project. Our team was tasked with building a digital investment and trading platform for nature-based climate solutions and trading of carbon credits. The goal of the project was to create a marketplace solution and full checkout flow. To bring this project to life, we utilized a combination of modern technologies. The frontend of the platform was built using <b>React</b>, <b>TypeScript,</b> and <b>Tailwind CSS.</b>`,
    longDescription: `<p>By focusing on the frontend development aspects of the marketplace, the team created user-friendly interface for users to explore projects of four different financial products, view project details, and make investments. The technical implementation involved dynamic rendering, interactive user interface design, investment workflow, state management, responsive design, and data synchronization between the frontend and backend components of the platform.</p>
    <br/>
    <br/>
    Features:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>Marketplace Solution for Multiple Financial Products: </b>This feature required fetching projects data from the backend API and mapping them to the appropriate UI components. The project cards were generated dynamically, allowing for scalability and reusability as new different projects were added to the platform.</li>
    <li><b>Secure Registration and Login Authentication: </b>To ensure the highest level of security, this feature was built as a separate microfrontend dedicated only to authentication. The advantages of having authentication as a separate microfrontend is that this modularity allowed for independent development and deployment of the authentication microfrontend. Furthermore, it provides reusability, as the same authentication microfrontend could potentially be used in other projects or integrated into different parts of the platform.</li>
    <li><b>Utilized Components from a Custom Published UI Library: </b>By using a custom UI library, the project can ensure a consistent and cohesive design throughout the platform as the library provides pre-designed and pre-styled components that follow a unified visual language. It also ensures consistent code and structure across the application.</li>
    <li><b>User-Friendly Checkout Flow: </b>The frontend development for this feature included state management libraries like Redux Persist, to manage the application's state. This ensured that data related to the marketplace, project details, and user investments remained synchronized across different components.</li>
    </ul>
    <br/>
    <br/>
    Challenges and Solutions:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>Microfrontend Independence and Data Sharing: </b>The project consisted of four distinct microfrontends that faced limitations in running entirely independently due to the need for data sharing. To address this, we implemented Storybook with mock data replicated from the real backend response for each component and structured them within templates. This approach allowed us to view and interact with the components, as well as complete pages with all the features, regardless of the backend response.</li>
    </ul>
    <br/>
    <br/>
    <p>Working on this project I not only gained valuable technical learnings but also upgraded my skills in React by working on more complex frontend challenges. The project provided me with experience in working with a microfrontend architecture. As a result, I became proficient in building reusable and modular components, streamlining development processes, and ensuring a consistent user experience across the platform.
    Integrating with backend APIs and effectively managing data retrieval and synchronization allowed me to deepen my knowledge in these areas. I utilized libraries such as Axios for API communication and state management techniques like Redux and Redux Persist to efficiently manage and share data between components.
    Working extensively with TypeScript, I gained a strong understanding of TypeScript's type system, enabling me to catch potential errors during development and improve the overall quality of the codebase.</p>`,
    resources: ["react", "typescript", "tailwind"],
    projectUrl: "https://goodcarbon.earth/",
    github: "",
  },
  {
    image: "resourceya-preview.png",
    title: "Education platform",
    description: `As a fresh frontend developer, I landed on this project through my first job as a frontend developer. The project involved building a marketplace platform allowed teachers to exchange and sell their educational resources. The platform was built using the no-code tool Bubble.io, overcoming design limitations with blended custom JavaScript and CSS code to achieve the desired aesthetics and responsiveness.`,
    longDescription: `<p>The objective of the project was to create a user-friendly and efficient marketplace platform where teachers could easily exchange and sell educational resources. The platform needed to handle various user interactions, provide seamless payment processing, ensure data security, and deliver a visually appealing user interface.</p>
    <br/>
    <br/>
    Features:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>User Registration and Authentication: </b>A seamless and secure registration process that allows teachers to create accounts using their LinkedIn or Google credentials or by providing their email.</li>
    <li><b>Material Upload and Management: </b>Teachers are able to easily upload their educational resources, including documents, presentations, worksheets, and more. The platform provides efficient management features, allowing teachers to edit, delete, save drafts, and publish their resources.</li>
    <li><b>Advanced Search and Filtering: </b>A powerful search engine that allows users to find relevant resources based on specific criteria, such as grade level, subject, price, format, and resource type. The platform provides an intuitive and user-friendly filtering system to refine search results.</li>
    <li><b>Reviews and Ratings: </b>Teachers are able to receive feedback from buyers through a review and rating system.</li>
    <li><b>Payment Processing: </b>Integration with a secure and reliable payment gateway to facilitate transactions between buyers and sellers.</li>
    <li><b>User and Admin Dashboards: </b>Personalized dashboards for teachers to manage their uploaded resources, track sales and payments, view reviews and ratings, and monitor their overall activity on the platform and administrative dashboard that empowers platform administrators to manage user accounts.</li>
    <li><b>Social Features: </b>The ability for users to follow other teachers' profiles, fostering a sense of community and facilitating collaboration and knowledge-sharing among educators.</li>
    </ul>
    <br/>
    <br/>
    Challenges and Solutions:
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>Database Limitations for Storing resources: </b>Although bubble.io has an integrated cloudfront based database, its capacity can be very low for handling such a large amount of resources. To overcome these limitations we integrated a cloud storage service called Wasabi. This allowed us to securely store the educational resources uploaded by teachers and ensured that the platform could handle a large volume of files without any database capacity issues.</li>
    <li><b>Customization of UI Elements: </b>Bubble.io has predefined UI elements, which sometimes didn't align with the UI design requirements. To address this challenge, we utilized custom JavaScript and CSS code through the API Connector feature. This allowed us to implement the desired styling and make the UI elements match the specifications provided by the UI/UX designer.</li>
    <li><b>Responsive Design Limitations: </b>Bubble.io had limited options for responsive design, making it challenging to achieve a fully responsive user interface. However, we later leveraged Bubble's new responsive engine, which introduced more advanced features and capabilities.</li>
    <li><b>Integration of External Services: </b>Integrating external services like Algolia for the search engine and Wasabi for cloud storage posed some challenges. However, we made use of Bubble.io's API Connector feature, which allowed us to connect and communicate with external services seamlessly. By utilizing this feature, we successfully integrated Algolia for advanced search functionality.</li>
    </ul>
    <br/>
    <br/>
    <p>Throughout this project, I gained invaluable insights and learnings as a frontend developer. Firstly, I discovered the importance of finding creative solutions when faced with limitations. I learned the power of customization through the utilization of custom JavaScript and CSS code, enabling me to align UI elements with the desired design specifications. The experience of working with Bubble.io's responsive engine taught me the significance of staying updated on new features and improvements to ensure optimal user experiences across devices. Integrating external services like Algolia reinforced the importance of using APIs to expand functionality. Overall, this project equipped me with a range of technical skills and problem-solving abilities, empowering me to build robust and user-friendly marketplace platforms in the future.
    </p>
    `,
    resources: ["Bubble.io"],
    projectUrl: "https://resourceya.com/",
    github: "",
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
    github: "https://github.com/IrenaKar/Coin-tracker",
  },
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
    github: "https://github.com/IrenaKar/notes",
  },
  {
    image: "race-preview.png",
    title: "Car racing game",
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
    github: "https://github.com/IrenaKar/Racing-car",
  },
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
