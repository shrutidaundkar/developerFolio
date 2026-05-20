/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shruti Daundkar",
  title: "Hi all, I'm Shruti",
  subTitle: emoji(
    "A Software Engineer 🚀 passionate about building robust web and backend applications. I have hands-on experience designing and developing scalable applications from end to end."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19u6K5RAdqnKKHexWiDKvbmy1i1ObEKh2/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shrutidaundkar",
  linkedin: "https://www.linkedin.com/in/shrutidaundkar1/",
  gmail: "shrutidaundkar8@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
// DUMMY DATA — adjust these to match your actual skills

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER BUILDING WEB AND BACKEND APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build robust and scalable web applications from end to end"
    ),
    emoji("⚡ Design and develop backend services and REST APIs"),
    emoji(
      "⚡ Work with databases and cloud services to ship production-ready software"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
// Real data from your current portfolio

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Portland State University",
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - June 2024",
      desc: "Graduate study focused on software engineering and building scalable applications.",
      descBullets: []
    },
    {
      schoolName: "Savitribai Phule Pune University",
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "2018 - August 2021",
      desc: "Studied core computer engineering, data structures, and software development.",
      descBullets: []
    },
    {
      schoolName: "Government Polytechnic, Pune",
      subHeader: "Diploma in Computer Engineering",
      duration: "2015 - August 2018",
      desc: "Foundation in programming and computer engineering fundamentals.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience
// DUMMY DATA — adjust the percentages to your real proficiency

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
// DUMMY DATA — replace with your real roles before publishing

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Company Name",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "20XX – Present",
      desc: "Replace this with a short summary of your role and the impact you made.",
      descBullets: [
        "Describe a key project or achievement here",
        "Describe another responsibility or result here"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Company Name",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "20XX – 20XX",
      desc: "Replace this with a short summary of your internship and what you worked on."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
  // NOTE: To enable this section you need a GitHub token. See README — set
  // USE_GITHUB_DATA="true" and add REACT_APP_GITHUB_TOKEN in your .env file.
};

// Some big projects you have worked on
// DUMMY DATA — replace with your real projects

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE WORKED ON",
  projects: [
    {
      projectName: "Project Name",
      projectDesc:
        "A short description of what this project does and the tech stack you used to build it.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/shrutidaundkar"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Project Name",
      projectDesc:
        "A short description of another project. Replace this with your real work.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/shrutidaundkar"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
// DUMMY DATA — section hidden by default. Add real achievements then set display: true

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, certifications, and other things I am proud of.",

  achievementsCards: [
    {
      title: "Achievement Title",
      subtitle:
        "Replace this with a real certification, award, or achievement.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Achievement Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section
// Hidden by default — add blogs then set display: true

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
// Hidden by default — add talks then set display: true

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
// Hidden by default — add a podcast embed link then set display: true

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+1 (000) 000-0000", // DUMMY — replace with your real number or remove
  email_address: "shrutidaundkar8@gmail.com"
};

// Twitter Section
// Hidden by default — add your Twitter username then set display: true

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
