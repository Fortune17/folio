import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  ChevronDown,
  Menu,
  X,
  Monitor,
  Palette,
  Users,
  Clock,
  Target
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'HTML Coding', level: 95, icon: Code },
    { name: 'React', level: 88, icon: Globe },
    { name: 'Responsive Design', level: 92, icon: Monitor },
    { name: 'CSS', level: 90, icon: Palette },
    { name: 'Front-End Development', level: 88, icon: Globe },
    { name: 'SQL Database', level: 85, icon: Database },
    { name: 'SQL Database Design', level: 85, icon: Database },
    { name: 'Customer Service', level: 90, icon: Users },
    { name: 'Time Management', level: 88, icon: Clock },
    { name: 'Technical Troubleshooting', level: 85, icon: Server }
  ];

  const projects = [
    {
      title: 'Emergency Response App',
      description: 'A comprehensive emergency response application designed to provide quick access to emergency services and critical information during crisis situations. Features real-time alerts and user-friendly interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'Emergency Services API'],
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: 'https://unrivaled-melba-c98785.netlify.app'
    },
    {
      title: 'EduVerse Platform',
      description: 'Developed an interactive educational platform integrating free APIs for enhanced learning experiences. Built with modern web technologies for optimal user engagement.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'API Integration', 'Responsive Design'],
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#'
    },
    {
      title: 'EchoVerse Communication Tool',
      description: 'Integrated Twilio messaging for real-time user engagement within a social platform. Features seamless communication and enhanced user interaction.',
      technologies: ['JavaScript', 'React', 'Twilio API', 'Real-time Messaging', 'Social Integration'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#'
    },
    {
      title: 'Multimedia Showcase Website',
      description: 'Planned and developed websites and applications to best showcase multimedia content with enhanced user experience and modern design principles.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Multimedia Integration', 'UX Design'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#'
    }
  ];

  const experience = [
    {
      title: 'Front End Developer Freelancer',
      company: 'Freelance',
      period: 'February 2023 - Current',
      description: 'Specialized in building responsive and visually appealing user interfaces using modern web technologies.',
      achievements: [
        'Developed user-friendly website interfaces using HTML, CSS, and JavaScript for enhanced user experience',
        'Adapted quickly to new web technologies and frameworks, staying ahead in the fast-paced tech environment',
        'Planned websites and applications to best showcase multimedia content',
        'Integrated social media functionality into websites, boosting online presence and engagement'
      ]
    }
  ];

  const education = {
    degree: 'Diploma of Higher Education',
    field: 'Computer Science',
    institution: 'TSHWANE UNIVERSITY OF TECHNOLOGY',
    location: 'Witbank, MP',
    period: '2023 - Current'
  };

  const languages = [
    { name: 'English', level: 'Intermediate' }
  ];

  const hobbies = ['Reading', 'Coding', 'Music'];

  const careerGoals = "Passionate about creating scalable, impactful web applications that enhance user experience and solve real-world challenges. Experienced in front-end development, with a strong understanding of API integration, real-time communication tools.";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              Fortune Maluleke
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-blue-600">Fortune</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6">
                Front End Developer
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experienced in building responsive and visually appealing user interfaces. 
                Possesses knack for translating design concepts into functional and 
                interactive web experiences using HTML, CSS, and JavaScript.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Get In Touch
                </button>
                <a
                  href="/andiso fortune cv.pdf"
                  download
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="/8bda613d6cab4a52bdb8b32a3f7a7683~2.jpg"
                    alt="Fortune Maluleke"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full">
                  <Code size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-blue-600 hover:text-blue-700"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Crafting Digital Solutions with Passion
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {careerGoals}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Currently pursuing a Diploma of Higher Education in Computer Science at 
                Tshwane University of Technology. I'm capable of collaborating seamlessly 
                with designers and back-end developers to deliver high-quality projects.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin size={16} />
                    Limpopo, South Africa 0082
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-600">Computer Science Student</p>
                </div>
              </div>
              
              {/* Education Section */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
                <div className="mb-2">
                  <p className="font-medium text-gray-900">{education.degree}</p>
                  <p className="text-blue-600">{education.field}</p>
                </div>
                <p className="text-gray-600 text-sm">{education.institution}</p>
                <p className="text-gray-600 text-sm">{education.location}</p>
                <p className="text-gray-500 text-sm mt-1">{education.period}</p>
              </div>

              {/* Languages & Hobbies */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Languages</h4>
                  {languages.map((lang, index) => (
                    <div key={index} className="mb-2">
                      <span className="text-gray-700">{lang.name}: </span>
                      <span className="text-blue-600">{lang.level}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Hobbies & Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {hobbies.map((hobby, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-700">Technologies</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-700">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-blue-600 mr-3" size={24} />
                    <h3 className="font-semibold text-gray-900 text-sm">{skill.name}</h3>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 lg:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">andisof84@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">064 837 6889</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Limpopo, South Africa 0082</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://linkedin.com/in/andiso-fortunate-605908336"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:andisof84@gmail.com"
                  className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Fortune Maluleke</h3>
            <p className="text-gray-400 mb-6">Front End Developer</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://linkedin.com/in/andiso-fortunate-605908336" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:andisof84@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Fortune Maluleke. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;