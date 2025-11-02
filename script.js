
        // Configuration object for editable content
        const defaultConfig = {
            site_title: "College Student Hub",
            welcome_message: "Your Gateway to Academic Excellence",
            chatbot_name: "Adhyaya AI"
        };

        // Course data
        const courseData = {
            webdev: {
                title: "Web Development",
                languages: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL", "TypeScript", "Vue.js", "Angular", "PHP"],
                projects: [
                    "Personal Portfolio Website",
                    "E-commerce Shopping Cart",
                    "Social Media Dashboard",
                    "Task Management App",
                    "Weather Forecast App",
                    "Blog Platform",
                    "Real-time Chat Application",
                    "Restaurant Booking System"
                ]
            },
            mobile: {
                title: "Mobile Development",
                languages: ["Swift", "Kotlin", "Java", "React Native", "Flutter", "Dart", "Objective-C", "Xamarin", "Ionic"],
                projects: [
                    "Todo List App",
                    "Expense Tracker",
                    "Fitness Tracking App",
                    "Recipe Finder",
                    "Music Player",
                    "Photo Gallery App",
                    "Location-based Services",
                    "Social Networking App"
                ]
            },
            data: {
                title: "Data Science",
                languages: ["Python", "R", "SQL", "Scala", "Julia", "MATLAB", "SAS", "Tableau", "Power BI"],
                projects: [
                    "Sales Data Analysis",
                    "Customer Segmentation",
                    "Predictive Modeling",
                    "Sentiment Analysis",
                    "Recommendation System",
                    "Time Series Forecasting",
                    "Image Classification",
                    "Natural Language Processing"
                ]
            },
            cyber: {
                title: "Cybersecurity",
                languages: ["Python", "C", "C++", "Assembly", "PowerShell", "Bash", "JavaScript", "Go", "Rust"],
                projects: [
                    "Network Scanner",
                    "Password Strength Checker",
                    "Encryption/Decryption Tool",
                    "Vulnerability Assessment",
                    "Intrusion Detection System",
                    "Malware Analysis",
                    "Secure Chat Application",
                    "Digital Forensics Tool"
                ]
            }
        };

        // Company data
        const companyData = {
            companies: [
                {
                    name: "Google",
                    languages: ["Python", "Java", "C++", "Go", "JavaScript"],
                    focus: "Search, Cloud, AI/ML"
                },
                {
                    name: "Microsoft",
                    languages: ["C#", "TypeScript", "Python", "C++", "JavaScript"],
                    focus: "Cloud, Productivity, Gaming"
                },
                {
                    name: "Amazon",
                    languages: ["Java", "Python", "C++", "JavaScript", "Scala"],
                    focus: "E-commerce, AWS, Alexa"
                },
                {
                    name: "Meta (Facebook)",
                    languages: ["JavaScript", "Python", "C++", "Hack", "React"],
                    focus: "Social Media, VR/AR, AI"
                },
                {
                    name: "Apple",
                    languages: ["Swift", "Objective-C", "C++", "JavaScript"],
                    focus: "iOS, macOS, Hardware"
                },
                {
                    name: "Netflix",
                    languages: ["Java", "Python", "JavaScript", "Scala", "Go"],
                    focus: "Streaming, Content, Analytics"
                }
            ]
        };

        // Roadmap data
        const roadmapData = {
            javascript: {
                title: "JavaScript Learning Path",
                steps: [
                    "Basics: Variables, Data Types, Functions",
                    "DOM Manipulation and Events",
                    "Asynchronous JavaScript (Promises, Async/Await)",
                    "ES6+ Features (Arrow Functions, Destructuring, Modules)",
                    "Frontend Frameworks (React, Vue, or Angular)",
                    "Node.js for Backend Development",
                    "Testing (Jest, Cypress)",
                    "Build Tools (Webpack, Vite)"
                ]
            },
            python: {
                title: "Python Learning Path",
                steps: [
                    "Python Basics: Syntax, Variables, Data Types",
                    "Control Structures and Functions",
                    "Object-Oriented Programming",
                    "File Handling and Exception Handling",
                    "Libraries: NumPy, Pandas, Matplotlib",
                    "Web Development with Django/Flask",
                    "Data Science and Machine Learning",
                    "Advanced Topics: Decorators, Generators"
                ]
            },
            java: {
                title: "Java Learning Path",
                steps: [
                    "Java Fundamentals and OOP Concepts",
                    "Collections Framework",
                    "Exception Handling and File I/O",
                    "Multithreading and Concurrency",
                    "JDBC and Database Connectivity",
                    "Spring Framework",
                    "RESTful Web Services",
                    "Microservices Architecture"
                ]
            },
            cpp: {
                title: "C++ Learning Path",
                steps: [
                    "C++ Basics and Syntax",
                    "Object-Oriented Programming",
                    "Memory Management (Pointers, References)",
                    "STL (Standard Template Library)",
                    "Templates and Generic Programming",
                    "Advanced OOP (Inheritance, Polymorphism)",
                    "System Programming",
                    "Performance Optimization"
                ]
            },
            react: {
                title: "React Learning Path",
                steps: [
                    "JavaScript ES6+ Prerequisites",
                    "React Basics: Components, JSX, Props",
                    "State Management and Hooks",
                    "Event Handling and Forms",
                    "React Router for Navigation",
                    "State Management (Redux/Context API)",
                    "Testing React Applications",
                    "Performance Optimization"
                ]
            },
            nodejs: {
                title: "Node.js Learning Path",
                steps: [
                    "JavaScript and Asynchronous Programming",
                    "Node.js Fundamentals and NPM",
                    "File System and Path Modules",
                    "HTTP Module and Express.js",
                    "Database Integration (MongoDB/SQL)",
                    "Authentication and Authorization",
                    "RESTful APIs and GraphQL",
                    "Deployment and DevOps"
                ]
            }
        };

        // Chatbot responses
        const chatbotResponses = {
            programming: {
                javascript: "JavaScript is a versatile programming language used for web development. It's great for beginners and has a huge ecosystem. Would you like to see the JavaScript learning roadmap?",
                python: "Python is excellent for beginners due to its readable syntax. It's widely used in data science, web development, and automation. Check out our Python roadmap for a structured learning path!",
                java: "Java is a robust, object-oriented language perfect for enterprise applications. It's platform-independent and has strong memory management. Our Java roadmap can guide your learning journey!",
                react: "React is a popular JavaScript library for building user interfaces. It uses a component-based architecture and virtual DOM for efficient rendering. Want to see the React learning path?",
                webdev: "Web development involves creating websites and web applications. You'll need HTML, CSS, JavaScript, and frameworks like React. Check our Web Development course template for complete details!",
                placement: "For placement preparation, focus on data structures, algorithms, and system design. Practice coding problems and review our company-specific guides in the Placement section!"
            },
            website: {
                features: "Our website offers 5 main features: Course Templates with language requirements, Placement Guide with company insights, Programming Roadmaps, College Information, and this AI assistant!",
                navigation: "You can navigate using the top menu: Course Templates, Placement Guide, Programming Roadmaps, and College Info. Each section has detailed information to help your studies!",
                courses: "We offer course templates for Web Development, Mobile Development, Data Science, and Cybersecurity. Each includes required languages and project ideas!",
                companies: "Our Placement Guide covers top companies like Google, Microsoft, Amazon, Meta, Apple, and Netflix with their tech stacks and requirements!"
            }
        };

        // Navigation functions
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Update navigation
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        // Course template functions
        function showCourseDetails(courseId) {
            const course = courseData[courseId];
            const courseList = document.getElementById('course-list');
            const courseDetails = document.getElementById('course-details');
            const courseContent = document.getElementById('course-content');
            
            courseList.style.display = 'none';
            courseDetails.style.display = 'block';
            
            courseContent.innerHTML = `
                <h2>${course.title}</h2>
                <h3>Required Languages & Technologies:</h3>
                <div class="language-grid">
                    ${course.languages.map(lang => `<div class="language-item">${lang}</div>`).join('')}
                </div>
                <h3>Project Ideas:</h3>
                <div class="project-list">
                    ${course.projects.map(project => `<div class="project-item"><h4>${project}</h4></div>`).join('')}
                </div>
            `;
        }

        function showCourseList() {
            document.getElementById('course-list').style.display = 'grid';
            document.getElementById('course-details').style.display = 'none';
        }

        // Placement guide functions
        function showPlacementDetails(type) {
            const placementList = document.querySelector('#placement .feature-grid');
            const placementDetails = document.getElementById('placement-details');
            const placementContent = document.getElementById('placement-content');
            
            placementList.style.display = 'none';
            placementDetails.style.display = 'block';
            
            let content = '';
            
            switch(type) {
                case 'companies':
                    content = `
                        <h2>Top Companies & Their Tech Stacks</h2>
                        ${companyData.companies.map(company => `
                            <div class="company-card">
                                <h3>${company.name}</h3>
                                <p><strong>Focus:</strong> ${company.focus}</p>
                                <p><strong>Key Technologies:</strong> ${company.languages.join(', ')}</p>
                            </div>
                        `).join('')}
                    `;
                    break;
                case 'aptitude':
                    content = `
                        <h2>Aptitude Practice Test</h2>
                        <div class="quiz-container">
                            <div class="question">
                                <h3>Question 1: If a train travels 120 km in 2 hours, what is its speed?</h3>
                                <div class="options">
                                    <div class="option" onclick="selectOption(this, false)">50 km/h</div>
                                    <div class="option" onclick="selectOption(this, true)">60 km/h</div>
                                    <div class="option" onclick="selectOption(this, false)">70 km/h</div>
                                    <div class="option" onclick="selectOption(this, false)">80 km/h</div>
                                </div>
                            </div>
                            <div class="question">
                                <h3>Question 2: What comes next in the series: 2, 6, 12, 20, ?</h3>
                                <div class="options">
                                    <div class="option" onclick="selectOption(this, false)">28</div>
                                    <div class="option" onclick="selectOption(this, true)">30</div>
                                    <div class="option" onclick="selectOption(this, false)">32</div>
                                    <div class="option" onclick="selectOption(this, false)">34</div>
                                </div>
                            </div>
                            <button class="back-btn" onclick="calculateScore()">Calculate Score</button>
                            <div id="score-result" class="score-display" style="display: none;"></div>
                        </div>
                    `;
                    break;
                case 'interview':
                    content = `
                        <h2>Common Interview Questions</h2>
                        <div class="company-card">
                            <h3>Technical Questions</h3>
                            <ul>
                                <li>Explain the difference between == and === in JavaScript</li>
                                <li>What is the time complexity of binary search?</li>
                                <li>How does garbage collection work in Java?</li>
                                <li>Explain REST API principles</li>
                                <li>What is the difference between SQL and NoSQL databases?</li>
                            </ul>
                        </div>
                        <div class="company-card">
                            <h3>Behavioral Questions</h3>
                            <ul>
                                <li>Tell me about yourself</li>
                                <li>Why do you want to work here?</li>
                                <li>Describe a challenging project you worked on</li>
                                <li>How do you handle tight deadlines?</li>
                                <li>Where do you see yourself in 5 years?</li>
                            </ul>
                        </div>
                        <div class="company-card">
                            <h3>Interview Tips</h3>
                            <ul>
                                <li>Research the company thoroughly</li>
                                <li>Practice coding problems on whiteboard</li>
                                <li>Prepare STAR method answers</li>
                                <li>Ask thoughtful questions about the role</li>
                                <li>Follow up with a thank-you email</li>
                            </ul>
                        </div>
                    `;
                    break;
                case 'scoring':
                    content = `
                        <h2>Placement Test Scoring Guide</h2>
                        <div class="company-card">
                            <h3>Typical Test Structure</h3>
                            <ul>
                                <li><strong>Aptitude (40%):</strong> Quantitative, Logical, Verbal</li>
                                <li><strong>Technical (35%):</strong> Programming, CS Fundamentals</li>
                                <li><strong>Coding (25%):</strong> Problem-solving, Algorithms</li>
                            </ul>
                        </div>
                        <div class="company-card">
                            <h3>Scoring Criteria</h3>
                            <ul>
                                <li><strong>90-100%:</strong> Excellent - Top tier companies</li>
                                <li><strong>75-89%:</strong> Good - Most tech companies</li>
                                <li><strong>60-74%:</strong> Average - Service-based companies</li>
                                <li><strong>Below 60%:</strong> Needs improvement</li>
                            </ul>
                        </div>
                        <div class="company-card">
                            <h3>Improvement Strategies</h3>
                            <ul>
                                <li>Practice daily coding problems</li>
                                <li>Strengthen mathematical foundations</li>
                                <li>Review computer science fundamentals</li>
                                <li>Take mock tests regularly</li>
                                <li>Focus on time management</li>
                            </ul>
                        </div>
                    `;
                    break;
            }
            
            placementContent.innerHTML = content;
        }

        function showPlacementList() {
            document.querySelector('#placement .feature-grid').style.display = 'grid';
            document.getElementById('placement-details').style.display = 'none';
        }

        // Quiz functions
        let selectedAnswers = [];

        function selectOption(element, isCorrect) {
            // Remove previous selection in this question
            const options = element.parentNode.querySelectorAll('.option');
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Select current option
            element.classList.add('selected');
            
            // Store answer
            const questionIndex = Array.from(element.closest('.quiz-container').querySelectorAll('.question')).indexOf(element.closest('.question'));
            selectedAnswers[questionIndex] = isCorrect;
        }

        function calculateScore() {
            const correctAnswers = selectedAnswers.filter(answer => answer === true).length;
            const totalQuestions = selectedAnswers.length;
            const percentage = Math.round((correctAnswers / totalQuestions) * 100);
            
            const scoreResult = document.getElementById('score-result');
            scoreResult.style.display = 'block';
            scoreResult.innerHTML = `
                <h3>Your Score: ${correctAnswers}/${totalQuestions} (${percentage}%)</h3>
                <p>${percentage >= 80 ? 'Excellent work!' : percentage >= 60 ? 'Good job! Keep practicing.' : 'Keep studying and try again!'}</p>
            `;
        }

        // Roadmap functions
        function showRoadmap(language) {
            const roadmapList = document.querySelector('#roadmaps .language-grid');
            const roadmapDetails = document.getElementById('roadmap-details');
            const roadmapContent = document.getElementById('roadmap-content');
            
            roadmapList.style.display = 'none';
            roadmapDetails.style.display = 'block';
            
            const roadmap = roadmapData[language];
            roadmapContent.innerHTML = `
                <h2>${roadmap.title}</h2>
                ${roadmap.steps.map((step, index) => `
                    <div class="roadmap-step">
                        <h3>Step ${index + 1}</h3>
                        <p>${step}</p>
                    </div>
                `).join('')}
            `;
        }

        function showRoadmapList() {
            document.querySelector('#roadmaps .language-grid').style.display = 'grid';
            document.getElementById('roadmap-details').style.display = 'none';
        }

        // Chatbot functions
        function toggleChatbot() {
            const chatbotWindow = document.getElementById('chatbot-window');
            chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
        }

        function handleChatKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        function sendMessage() {
            const input = document.getElementById('chatbot-input');
            const message = input.value.trim();
            
            if (!message) return;
            
            // Add user message
            addMessage(message, 'user');
            
            // Generate bot response
            const response = generateBotResponse(message);
            setTimeout(() => addMessage(response, 'bot'), 500);
            
            input.value = '';
        }

        function addMessage(message, sender) {
            const messagesContainer = document.getElementById('chatbot-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}-message`;
            messageDiv.textContent = message;
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function generateBotResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            // Check for programming-related keywords
            for (const [key, response] of Object.entries(chatbotResponses.programming)) {
                if (lowerMessage.includes(key)) {
                    return response;
                }
            }
            
            // Check for website-related keywords
            for (const [key, response] of Object.entries(chatbotResponses.website)) {
                if (lowerMessage.includes(key) || lowerMessage.includes('website') || lowerMessage.includes('navigation')) {
                    return response;
                }
            }
            
            // Check for specific topics
            if (lowerMessage.includes('course') || lowerMessage.includes('template')) {
                return "We offer course templates for Web Development, Mobile Development, Data Science, and Cybersecurity. Each includes required languages and project ideas. Check the Course Templates section!";
            }
            
            if (lowerMessage.includes('placement') || lowerMessage.includes('job') || lowerMessage.includes('interview')) {
                return "Our Placement Guide covers top companies, their tech requirements, aptitude tests, and interview preparation. Visit the Placement Guide section for detailed information!";
            }
            
            if (lowerMessage.includes('roadmap') || lowerMessage.includes('learn')) {
                return "We have structured learning roadmaps for JavaScript, Python, Java, C++, React, and Node.js. Each roadmap provides step-by-step guidance. Check the Programming Roadmaps section!";
            }
            
            if (lowerMessage.includes('college') || lowerMessage.includes('campus')) {
                return "Our College Information section showcases campus facilities, expert faculty, achievements, and research labs. You can explore all college-related information there!";
            }
            
            // Default response for out-of-scope questions
            return "Sorry, I can't answer that. I'm here to help you only about website guidance and programming languages. Feel free to ask about our course templates, placement guide, programming roadmaps, or college information!";
        }

        // Element SDK integration
        async function onConfigChange(config) {
            // Update site title
            const siteTitleElement = document.getElementById('site-title');
            if (siteTitleElement) {
                siteTitleElement.textContent = config.site_title || defaultConfig.site_title;
            }
            
            // Update welcome message
            const welcomeMessageElement = document.getElementById('welcome-message');
            if (welcomeMessageElement) {
                welcomeMessageElement.textContent = config.welcome_message || defaultConfig.welcome_message;
            }
            
            // Update chatbot name
            const chatbotNameElement = document.getElementById('chatbot-name');
            if (chatbotNameElement) {
                chatbotNameElement.textContent = config.chatbot_name || defaultConfig.chatbot_name;
            }
        }

        function mapToCapabilities(config) {
            return {
                recolorables: [],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            };
        }

        function mapToEditPanelValues(config) {
            return new Map([
                ["site_title", config.site_title || defaultConfig.site_title],
                ["welcome_message", config.welcome_message || defaultConfig.welcome_message],
                ["chatbot_name", config.chatbot_name || defaultConfig.chatbot_name]
            ]);
        }

        // Initialize Element SDK
        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }
   