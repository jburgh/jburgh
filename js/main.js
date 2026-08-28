        // Initialize Lucide icons
        lucide.createIcons();

        // Interactive Terminal
        const terminalInput = document.getElementById('terminalInput');
        const terminalOutput = document.getElementById('terminalOutput');

        const commands = {
            help: `Available commands:
  whoami      - About me
  skills      - Technical skills
  contact     - Contact information
  experience  - Career history
  edu         - Academic background
  projects    - Featured work
  clear       - Clear terminal`,

            skills: `Technical Skills:
  📝 Documentation: API docs, UX writing, style guides, IA
  🛠️ Tools: Git, Markdown, Figma, Jira, OpenAPI, Postman
  🤖 AI: Claude, ChatGPT, prompt engineering, MCP, agentic workflows
  💻 Dev: Python, JavaScript, SQL, REST APIs, docs-as-code
  🎨 Design: CloudScape, Adobe Suite, Snagit, Camtasia
  👥 Leadership: Team management, governance, process design`,

            contact: `Contact Information:
  📧 Email: jillshaheen@gmail.com
  💼 LinkedIn: linkedin.com/in/jillshaheen
  🐙 GitHub: github.com/jburgh
  📍 Location: Pittsburgh, PA`,

            experience: `Career Timeline:
  2026-present  Staff Content Designer @ Skylight Digital
  → Civic tech content design for public health systems

  2022-2026     Senior Doc Manager @ AWS
  2017-2022     Sr Manager, Knowledge @ SugarCRM
  2014-2017     Senior Technical Writer @ SugarCRM
  2007-2014     Corp Manager Marketing @ Aerotech`,

            edu: `  Carnegie Mellon University (in progress)
  🎓 Graduate Certificate in ML & Data Science Foundations

  Duquesne University
  🎓 M.S. Database Development & Multimedia Technology
  🎓 M.A. Integrated Marketing Communication
  🎓 B.S. Organizational Behavior
`,

            projects: `Featured Projects:
  📄 WAL Implementation Guide - AWS EMR feature docs
  🎨 EMR Console Redesign - UX writing for AWS console
  ⚠️ Error Message Framework - Standardized EMR errors
  🔐 Aurora DSQL Encryption - Security documentation
  🤖 AI Upskilling Program - GenAI tools for 200+ writers
  📁 Wiki Infrastructure - Content governance at scale`,

            whoami: `Jill Shaheen
Staff Content Designer @ Skylight Digital

I build documentation systems that scale.
20 years leading teams, shipping docs, automating workflows.

Current focus: Civic tech content design, cloud migration docs
for CDC's national disease surveillance system.`,

            clear: 'CLEAR'
        };

        function addTerminalLine(prompt, command) {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.innerHTML = `<span class="terminal-prompt">${prompt}</span><span class="terminal-command"> ${command}</span>`;
            terminalOutput.appendChild(line);
        }

        function addTerminalOutput(text) {
            const output = document.createElement('div');
            output.className = 'terminal-output';
            output.textContent = text;
            terminalOutput.appendChild(output);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }

        terminalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const command = terminalInput.value.trim().toLowerCase();

                if (command) {
                    addTerminalLine('$', command);

                    if (command === 'clear') {
                        terminalOutput.innerHTML = '';
                    } else if (commands[command]) {
                        addTerminalOutput(commands[command]);
                    } else {
                        addTerminalOutput(`Command not found: ${command}. Type 'help' for available commands.`);
                    }
                }

                terminalInput.value = '';
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });

        // Focus terminal input when clicking on terminal
        document.querySelector('.terminal').addEventListener('click', () => {
            terminalInput.focus();
        });

        // Style Guide Tab Switching
        const styleGuideTabs = document.querySelectorAll('.style-guide-tab');
        const styleGuideSections = document.querySelectorAll('.style-guide-section');
        const styleGuideContent = document.querySelector('.style-guide-content');

        function setStyleGuideContentVisibility(forTab) {
            // Keep the wrapper visible for all tabs. Individual sections already
            // toggle their own `.active` class to show/hide content.
            if (!styleGuideContent) return;
            styleGuideContent.style.display = '';
        }

        styleGuideTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;

                styleGuideTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                styleGuideSections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === `${targetTab}-section`) {
                        section.classList.add('active');
                    }
                });

                // Show or hide the surrounding `.style-guide-content` wrapper based on
                // the selected tab. Keep syntax visible; hide for other tabs (e.g. colors).
                setStyleGuideContentVisibility(targetTab);
            });
        });

        // Initialize the wrapper visibility according to the currently active tab
        (function initStyleGuideContent() {
            const activeTab = document.querySelector('.style-guide-tab.active');
            const current = activeTab ? activeTab.dataset.tab : 'syntax';
            setStyleGuideContentVisibility(current);
        })();

        // Sidebar Toggle Functionality
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebarClose = document.getElementById('sidebarClose');
        const styleGuideSidebar = document.getElementById('styleGuideSidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');

        function openSidebar() {
            styleGuideSidebar.classList.add('open');
            sidebarOverlay.classList.add('visible');
            document.body.style.overflow = 'hidden';
            // show one-time attention cue for Colors tab
            sidebarOpenHandler();
        }

        function closeSidebar() {
            styleGuideSidebar.classList.remove('open');
            sidebarOverlay.classList.remove('visible');
            document.body.style.overflow = '';
        }

        sidebarToggle.addEventListener('click', openSidebar);
        sidebarClose.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);

        // One-time hint: pulse the Colors tab when the sidebar is first opened
        function sidebarOpenHandler() {
            const colorsTab = document.querySelector('.style-guide-tab[data-tab="colors"]');
            if (!colorsTab) return;
            try {
                const hasSeen = localStorage.getItem('styleColorsHintSeen');
                if (!hasSeen) {
                    colorsTab.classList.add('pulse');
                    // remove pulse class after animation cycles finish (duration 1.6s * 3 + buffer)
                    setTimeout(() => colorsTab.classList.remove('pulse'), 1600 * 3 + 300);
                    localStorage.setItem('styleColorsHintSeen', '1');
                }
            } catch (e) {
                // localStorage might be unavailable; fail silently
            }
        }

        // Philosophy link opens sidebar
        const philosophyLink = document.getElementById('philosophyStyleLink');
        if (philosophyLink) {
            philosophyLink.addEventListener('click', (e) => {
                e.preventDefault();
                openSidebar();
            });
        }

        // Close sidebar on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && styleGuideSidebar.classList.contains('open')) {
                closeSidebar();
            }
        });

        // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;

        // Check for saved theme preference, or use system preference as default
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        let currentTheme;
        if (savedTheme) {
            currentTheme = savedTheme;
        } else {
            currentTheme = systemPrefersDark ? 'dark' : 'light';
        }

        if (currentTheme === 'light') {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggle.checked = true;
        } else {
            htmlElement.removeAttribute('data-theme');
            themeToggle.checked = false;
        }

        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Interactive Color Swatch - Change Accent Color
        const colorSwatches = document.querySelectorAll('.color-swatch[data-color]');

        // Helper function to adjust color brightness
        function adjustColor(hex, percent) {
            const num = parseInt(hex.replace('#', ''), 16);
            const amt = Math.round(2.55 * percent);
            const R = Math.min(255, Math.max(0, (num >> 16) + amt));
            const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amt));
            const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
            return `#${(0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
        }

        colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                const color = swatch.dataset.color;

                // Update selection UI
                colorSwatches.forEach(s => s.classList.remove('selected'));
                swatch.classList.add('selected');

                // Update CSS variables for accent colors
                document.documentElement.style.setProperty('--accent-primary', color);
                document.documentElement.style.setProperty('--accent-highlight', adjustColor(color, 15));

                // Update sidebar toggle glow effect
                const glowColor = color.replace('#', '');
                const r = parseInt(glowColor.substr(0, 2), 16);
                const g = parseInt(glowColor.substr(2, 2), 16);
                const b = parseInt(glowColor.substr(4, 2), 16);

                // Create new keyframes for the glow animation
                const styleSheet = document.styleSheets[0];
                const rules = styleSheet.cssRules || styleSheet.rules;

                // Find and update the pulseGlow animation
                for (let i = 0; i < rules.length; i++) {
                    if (rules[i].name === 'pulseGlow') {
                        styleSheet.deleteRule(i);
                        styleSheet.insertRule(`
                            @keyframes pulseGlow {
                                0%, 100% { box-shadow: -4px 0 20px rgba(${r}, ${g}, ${b}, 0.3); }
                                50% { box-shadow: -6px 0 30px rgba(${r}, ${g}, ${b}, 0.5); }
                            }
                        `, i);
                        break;
                    }
                }

                // Save preference
                localStorage.setItem('accentColor', color);
            });
        });

        // Restore saved accent color
        const savedAccent = localStorage.getItem('accentColor');
        if (savedAccent) {
            const matchingSwatch = document.querySelector(`.color-swatch[data-color="${savedAccent}"]`);
            if (matchingSwatch) {
                matchingSwatch.click();
            }
        }

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active nav link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        function updateActiveNav() {
            const scrollPos = window.scrollY + 150;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Apply to animatable elements
        const animatableElements = document.querySelectorAll(
            '.philosophy-card, .expertise-card, .project-card, .timeline-item, .skill-group, .education-card, .stat-card'
        );

        animatableElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(15px)';
            el.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
            el.style.transitionDelay = `${index * 0.03}s`;
            observer.observe(el);
        });
