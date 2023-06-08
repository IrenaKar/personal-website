export const projectsData = [
    {
      image: "notes-preview.png",
      title: "To do List",
      description: `In my experience as a frontend developer, I always liked the idea of trying to build a fullstack project on my own.`,
      longDescription: `That is the reason why I started with this project. For this purpose I was using Firebase database as a backend and ReactJs for the frontend. There is a signup/login screen where the user can create an account for the first time, or login with his credentials if he already has an account. Firebase allows us to validate the email, whether it is an exciting one or not, to validate if the user wrote the correct password, and also to validate the strength of the password. Once the user is signed up, he can start creating his own tasks on the "Add new task" button. From here, the user can edit or delete tasks, and mark some of them as completed. The user is able to see only the tasks that he created.`,
      resources: ["html", "css", "javascript", "react", "firebase"],
      projectUrl: "https://6317089d6702a72ca289df82--mypersonalnotesmanager.netlify.app/",
      id: "to-do-list",
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
      id: "education-marketplace",
      github: ""
    },
    {
      image: "coin-tracker-preview.png",
      title: "Coin Tracker",
      description: `This project was given as a graduation project at the academy where I studied frontend development.`,
      longDescription: `The idea was to use the acquired knowledge in ReactJs in a real project. For the user interface of this project I am using MaterialUi. First there is a signup and login screen, with simple email and password validation using Formik. It validates only if the email is a valid email address and if the password meets the requirements for length, one letter and special character. Once the user is signed up or logged in, he needs to choose a few categories from the predefined and to insert planned cost or income for each chosen category. Next screen is the overview page. Here, the user can see all of his chosen categories, he can add or edit categories. On the Add button, the user can add entry (income or expense) for each category. He can see all his entries in the overview tab. If there are more entries from one category, there is a logic to collect the sums. If total expenses are higher than the planned budget for some category, expenses will be shown with red color. User is able to edit, delete or copy entries.`,
      resources: ["html", "css", "mui", "react", "javascript"],
      projectUrl: "https://cointrackerproject.netlify.app/#/",
      id: "coin-tracker",
      github: "https://github.com/IrenaKar/Coin-tracker"
    },
  
    {
      image: "race-preview.png",
      title: "Racing Car",
      description: `Simple car racing game built using jQuery and Bootstrap.`,
      longDescription: `For the animation of the cars a math random method is used, which is collecting a random time for each car in milliseconds, and the car with lower milliseconds is reaching first to the goal. The results are recorded in a table and also saved in local storage, so after refreshing the page we are still able to see which car has won the race.  `,
      resources: ["html", "css", "bootstrap", "jquery"],
      projectUrl: "https://60f9c8d475e5b73f1ab9af4e--nervous-goldberg-4a1b9b.netlify.app/",
      id: "racing-car",
      github: "https://github.com/IrenaKar/Racing-car"
    },
    {
      image: "bikes-preview.png",
      title: "Bikes",
      description: `Simple bike shop project, with main focus on the filtering cards functionality.`,
      longDescription: `This project was built as an exercise at the academy to use ReactJs and logic for filters. The data is filtered by gender and by brand. In the badges, there is information about how many bikes there are in the database from each category.`,
      resources: ["html", "css", "react", "javascript"],
      projectUrl: "https://buybiketoday.netlify.app/",
      id: "bikes",
      github: "https://github.com/IrenaKar/bikes"
    }
  ];
  