const services = [
  {
    name: "Project Requirements Document",
    description:
      "A document outlining the scope, objectives, and deliverables of a software development project.",
    category: "Documentation",

    cost: 10.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Wireframe",
    description:
      "A visual guide that represents the skeletal framework of a software application.",
    category: "Design",

    cost: 15.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Prototype",
    description:
      "A preliminary model or version of a software product for testing and evaluation.",
    category: "Design",

    cost: 50.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "User Interface (UI) Design",
    description: "The design of the user interface of a software application.",
    category: "Design",

    cost: 100.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "User Experience (UX) Design",
    description:
      "The design of the overall experience of a user when interacting with a software application.",
    category: "Design",

    cost: 150.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Software Development Kit (SDK)",
    description:
      "A set of tools and resources used by developers to create applications for a specific platform or software framework.",
    category: "Development Tools",

    cost: 200.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Integrated Development Environment (IDE)",
    description:
      "A software application that provides comprehensive facilities to programmers for software development.",
    category: "Development Tools",

    cost: 250.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Version Control System (e.g., Git)",
    description:
      "A system that records changes to a file or set of files over time so that you can recall specific versions later.",
    category: "Development Tools",

    cost: 100.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Continuous Integration/Continuous Deployment (CI/CD) Pipeline",
    description:
      "A series of steps (pipeline) that automates the process of code integration and deployment.",
    category: "Development Tools",

    cost: 300.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Backend Development Framework (e.g., Node.js)",
    description:
      "A framework that allows developers to build server-side applications using a preferred programming language.",
    category: "Development Tools",

    cost: 150.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Frontend Development Framework (e.g., React)",
    description:
      "A framework that allows developers to build user interfaces for web applications.",
    category: "Development Tools",

    cost: 200.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Database Management System (e.g., MySQL)",
    description:
      "A software application used to manage databases and provide access to data.",
    category: "Development Tools",

    cost: 300.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cloud Computing Services (e.g., AWS)",
    description:
      "Services provided over the internet that allow you to scale computing resources as needed.",
    category: "Cloud Services",

    cost: 500.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Quality Assurance (QA) Testing Tools",
    description:
      "Tools used to ensure that the software meets specified requirements and is free of defects.",
    category: "Testing Tools",

    cost: 200.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bug Tracking System (e.g., Jira)",
    description:
      "A system used to keep track of reported software bugs and issues.",
    category: "Development Tools",

    cost: 150.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Documentation Generation Tool (e.g., Swagger)",
    description: "A tool used to generate interactive API documentation.",
    category: "Development Tools",

    cost: 100.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Code Review Tool (e.g., GitHub Pull Requests)",
    description:
      "A tool used to review code changes collaboratively before they are merged into the main branch.",
    category: "Development Tools",

    cost: 150.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Deployment Orchestration Tool (e.g., Kubernetes)",
    description:
      "A tool used to automate the deployment, scaling, and management of containerized applications.",
    category: "Development Tools",

    cost: 300.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Performance Monitoring Tool (e.g., New Relic)",
    description:
      "A tool used to monitor the performance of applications and infrastructure.",
    category: "Development Tools",

    cost: 400.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "API Management Platform (e.g., Apigee)",
    description: "A platform used to design, secure, analyze, and scale APIs.",
    category: "Development Tools",

    cost: 500.0,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default services;
