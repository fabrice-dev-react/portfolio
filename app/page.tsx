"use client";
import React, { useState, useEffect, FormEvent } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Mail,
  Linkedin,
  Moon,
  Sun,
  Github,
  GithubIcon,
} from "lucide-react";
import Image from "next/image";

export default function PortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [visibleProject, setVisibleProject] = useState(Number);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: FormEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${data.error || "Failed to send email"}`);
      }
    } catch (err) {
      console.log(err);
      setStatus("Unexpected error. Please try again.");
    }
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store built with Next.js, Tailwind CSS, and integrated with Stripe payment processing.",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      image: "/ecommerce.jpg",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description:
        "A modern messaging platform with real-time capabilities using Next.js, Socket.io, and custom Tailwind components.",
      tags: ["Next.js", "Tailwind CSS", "Socket.io", "Firebase"],
      image: "/chat.jpg",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Portfolio Dashboard",
      description:
        "An analytics dashboard that visualizes portfolio performance with interactive charts and responsive design.",
      tags: ["Next.js", "Tailwind CSS", "Recharts", "TypeScript"],
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Content Management System",
      description:
        "A custom CMS solution built from scratch with Next.js, featuring role-based access and markdown support.",
      tags: ["Next.js", "Tailwind CSS", "Auth.js", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#",
    },
  ];

  const skills = [
    { name: "Next.js", level: 85 },
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 97 },
    { name: "MongoDB", level: 82 },
    { name: "Mysql", level: 78 },
    { name: "Php", level: 83 },
    { name: "UI/UX Design", level: 80 },
    { name: "Responsive Design", level: 95 },
  ];
  const services = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive, accessible, and performant user interfaces with React and Next.js.",
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500 bg-opacity-20 text-blue-600 dark:text-blue-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "API Development",
      description:
        "Building robust and scalable backend APIs using Node.js, Express, and integrating databases like MongoDB and MySQL.",
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-500 bg-opacity-20 text-green-600 dark:text-green-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive user experiences with modern design principles and Figma prototypes.",
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500 bg-opacity-20 text-purple-600 dark:text-purple-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Full Stack Development",
      description:
        "End-to-end application development using Next.js, React, Node.js (Express), MongoDB, MySQL, and PHP. I handle everything from database design to deployment.",
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500 bg-opacity-20 text-yellow-600 dark:text-yellow-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Database Integration",
      description:
        "Integration of MongoDB, MySQL, and other relational or NoSQL databases to ensure data management is both secure and scalable.",
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500 bg-opacity-20 text-teal-600 dark:text-teal-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11V7m0 12v-4M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Cloud Deployment & DevOps",
      description:
        "Deploying applications on cloud platforms like AWS, Heroku, and DigitalOcean. Automating workflows and ensuring high uptime and scalability.",
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-500 bg-opacity-20 text-indigo-600 dark:text-indigo-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 16V8m0 0L8 12m4-4l4 4M4 18h16"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Website Maintenance",
      description:
        "Regular updates, performance improvements, and troubleshooting to ensure your website runs smoothly and remains secure.",
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-500 bg-opacity-20 text-red-600 dark:text-red-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12h18M12 3v18"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Security Auditing",
      description:
        "Conducting security audits to identify and fix vulnerabilities in your web applications, ensuring data protection and compliance.",
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-500 bg-opacity-20 text-gray-600 dark:text-gray-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 12l-4-4m4 4l4-4M4 12h16"
            />
          </svg>
        </div>
      ),
    },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleProject = (id: number) => {
    if (visibleProject === id) {
      setVisibleProject(0);
    } else {
      setVisibleProject(id);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
        } shadow-sm border-b`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">
              Fabrive Dev
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {["home", "about", "skills", "services", "projects", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`py-2 transition-colors duration-300 ${
                    activeSection === item
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden ${
              darkMode ? "bg-gray-900" : "bg-white"
            } border-t ${
              darkMode ? "border-gray-800" : "border-gray-200"
            } py-2`}
          >
            <div className="container mx-auto px-4">
              {[
                "home",
                "about",
                "skills",
                "services",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-3 ${
                    activeSection === item
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : ""
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I&apos;m{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Fabrice
                </span>{" "}
                <br />
                Web Developer
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
                I craft full-stack apps using Next.js with React, and Tailwind
                CSS for the frontend. For the backend, I work with Node.js
                (Express), MongoDB, MySQL, or PHP. Clean code, responsive
                design, and GitHub workflows are my tools of choice.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`px-6 py-3 border-2 border-blue-600 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  } rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300`}
                >
                  Contact Me
                </button>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
                <Image
                  width={1000}
                  height={1000}
                  src="/person1.jpg"
                  alt="Developer profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-full max-w-md relative">
                  <Image
                    src="/coding.jpg"
                    width={1000}
                    height={1000}
                    alt="Developer working"
                    className="rounded-lg shadow-lg"
                  />
                  <div
                    className={`absolute -bottom-6 -right-6 p-6 rounded-lg shadow-lg ${
                      darkMode ? "bg-gray-900" : "bg-white"
                    }`}
                  >
                    <div className="font-bold text-2xl text-blue-600 dark:text-blue-400">
                      5+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Full-Stack Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  I&apos;m a passionate full-stack developer with over 5 years
                  of experience in building modern web applications. I enjoy
                  tackling both front-end and back-end challenges to deliver
                  seamless, performant, and scalable digital solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  My expertise includes building full-stack applications using
                  Next.js, React, Node.js (Express), and Tailwind CSS for the
                  frontend, with MongoDB, MySQL, or PHP for the backend. I focus
                  on creating responsive, efficient, and maintainable code to
                  ensure the best user experience and application performance.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-bold mb-2">Name:</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Niyomutabazi Fabrice
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Email:</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      niyomutabazifabrice100@gmail.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Location:</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Kigali, Rwanda
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Availability:</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Available for freelance, full-time positions, and coaching
                      opportunities.
                    </p>
                  </div>
                </div>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              My Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`h-2 w-full rounded-full ${
                          darkMode ? "bg-gray-800" : "bg-gray-200"
                        }`}
                      >
                        <div
                          className="h-full rounded-full bg-blue-600 dark:bg-blue-400 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">My Approach</h3>
                <div
                  className={`p-6 rounded-lg mb-6 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow-lg`}
                >
                  <h4 className="font-bold text-lg mb-3">
                    User-Centered Design
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I prioritize user needs, creating intuitive interfaces that
                    meet business goals while providing excellent user
                    experiences.
                  </p>
                </div>
                <div
                  className={`p-6 rounded-lg mb-6 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow-lg`}
                >
                  <h4 className="font-bold text-lg mb-3">
                    Performance Optimization
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I build applications with performance in mind, ensuring fast
                    load times and smooth interactions across all devices.
                  </p>
                </div>
                <div
                  className={`p-6 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow-lg`}
                >
                  <h4 className="font-bold text-lg mb-3">
                    Responsive & Accessible
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    All my projects are built to work across devices and follow
                    accessibility best practices to ensure inclusivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              My Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${
                    darkMode ? "bg-gray-900" : "bg-gray-50"
                  } border hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                >
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`rounded-lg border overflow-hidden ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } hover:shadow-xl transition-all duration-300`}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? "bg-gray-700 text-blue-400"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={() => toggleProject(project.id)}
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {visibleProject === project.id
                          ? "Hide Details"
                          : "View Details"}
                        {visibleProject === project.id ? (
                          <ChevronUp size={16} className="ml-1" />
                        ) : (
                          <ChevronDown size={16} className="ml-1" />
                        )}
                      </button>
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          <GithubIcon size={20} />
                        </a>
                        <a
                          href={project.demo}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    {visibleProject === project.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="font-bold mb-2">Project Details</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          This project was built using {project.tags.join(", ")}
                          . It features responsive design, optimized
                          performance, and follows modern development best
                          practices.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4">
                          <li>Fully responsive layout using Tailwind CSS</li>
                          <li>Server-side rendering with Next.js</li>
                          <li>Optimized for performance and accessibility</li>
                          <li>Modern UI/UX with smooth interactions</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Contact Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold text-gray-600 dark:text-gray-400"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md mt-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold text-gray-600 dark:text-gray-400"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md mt-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-lg font-semibold text-gray-600 dark:text-gray-400"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md mt-2"
                      rows={6}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                  {status && (
                    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                      {status}
                    </p>
                  )}
                </form>
              </div>
              <div className="mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Connect with Me</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You can reach me via the contact form or connect with me on my
                  social media:
                </p>
                <ul className="flex space-x-6">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-500"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-600 dark:text-gray-400">
                    Or Contact Me Directly:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Email: your.email@example.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Phone: +1 (234) 567-890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-950 text-gray-300 py-8 ">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Name and copyright */}
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h2 className="text-lg font-semibold">Niyomutabazi fabrice</h2>
              <p className="text-sm">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            {/* Navigation links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#about" className="hover:text-white transition">
                About
              </a>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>

            {/* Social icons */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:you@example.com"
                className="hover:text-white transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
