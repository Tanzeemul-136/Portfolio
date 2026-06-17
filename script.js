document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DATA-THEME STATE MACHINE MANAGEMENT
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector("i");

    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === "dark") {
            themeIcon.className = "fa-solid fa-sun";
        } else {
            themeIcon.className = "fa-solid fa-moon";
        }
    }

    // 2. HERO COMPONENT TYPING ENGINE
    const phrases = ["Developer", "Programmer", "Tech Enthusiast"];
    let phraseIdx = 0;
    let charIdx = 0;
    let currentText = "";
    let deletionState = false;

    function executeTypingEngine() {
        const targetElement = document.querySelector(".typing");
        if (!targetElement) return;

        const currentPhrase = phrases[phraseIdx];

        if (!deletionState) {
            charIdx++;
            if (charIdx === currentPhrase.length + 1) {
                deletionState = true;
                setTimeout(executeTypingEngine, 1000);
                return;
            }
        } else {
            charIdx--;
            if (charIdx === 0) {
                deletionState = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
            }
        }

        currentText = currentPhrase.substring(0, charIdx);
        targetElement.textContent = currentText;

        setTimeout(executeTypingEngine, deletionState ? 60 : 120);
    }
    executeTypingEngine();

    // 3. INTERACTIVE ACCORDION MULTI-CARD CONTROLLER
    function setupAccordionCard(cardId) {
        const card = document.getElementById(cardId);
        if (!card) return;

        card.addEventListener("click", (e) => {
            if (e.target.closest('.news-link-btn')) return;
            
            card.classList.toggle("active-expanded");
            
            const promptIcon = card.querySelector(".click-prompt i");
            if (promptIcon) {
                if (card.classList.contains("active-expanded")) {
                    promptIcon.className = "fa-solid fa-angles-up";
                } else {
                    promptIcon.className = "fa-solid fa-angles-down animate-bounce";
                }
            }
        });
    }
    setupAccordionCard("technoxian-card");
    setupAccordionCard("sih-card");

    // 4. INTERSECTION OBSERVER DETECTOR (SCROLL REVEALS)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((element) => {
        revealObserver.observe(element);
    });
});

// 5. FLUENT ROBOTICS BLUEPRINT DESIGN VECTOR CANVAS & BOOT SEQUENCE ENGINE
window.addEventListener("load", () => {
    const canvas = document.getElementById("robotics-canvas");
    const preloader = document.getElementById("terminal-preloader");
    const logContainer = document.getElementById("terminal-logs");
    if (!canvas || !preloader || !logContainer) return;

    const ctx = canvas.getContext("2d");
    
    // Resize parameters mapping responsive window scales fluidly
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Vector nodes layout mapping structural parameters of a humanoid torso/head assembly blueprint
    const nodes = [
        { x: 0.5, y: 0.22, label: "HEAD_CPU", r: 8 },      
        { x: 0.5, y: 0.35, label: "NECK_JOINT", r: 5 },    
        { x: 0.4, y: 0.40, label: "SHOULDER_L", r: 6 },    
        { x: 0.6, y: 0.40, label: "SHOULDER_R", r: 6 },    
        { x: 0.35, y: 0.58, label: "ARM_ELBOW_L", r: 5 },  
        { x: 0.65, y: 0.58, label: "ARM_ELBOW_R", r: 5 },  
        { x: 0.32, y: 0.76, label: "ACTUATOR_L", r: 4 },   
        { x: 0.68, y: 0.76, label: "ACTUATOR_R", r: 4 },   
        { x: 0.5, y: 0.52, label: "CORE_REACTOR", r: 12 }, 
        { x: 0.44, y: 0.82, label: "CHASSIS_PELVIS_L", r: 6 },
        { x: 0.56, y: 0.82, label: "CHASSIS_PELVIS_R", r: 6 }
    ];

    // Blueprint structural routing wiring links vectors
    const wiringConnections = [
        [0, 1], [1, 2], [1, 3], [2, 8], [3, 8],
        [2, 4], [3, 5], [4, 6], [5, 7],
        [8, 9], [8, 10], [9, 10]
    ];

    let pulseOffset = 0;

    // Fluent render loop drawing the wiring pulses and cybernetic silhouette background
    function drawRoboticsBlueprint() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const w = canvas.width;
        const h = canvas.height;

        // Draw structural cyber grid background lines
        ctx.strokeStyle = "rgba(0, 255, 255, 0.03)";
        ctx.lineWidth = 1;
        const gridSize = 40;
        for (let x = 0; x < w; x += gridSize) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        for (let y = 0; y < h; y += gridSize) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }

        // 1. Draw glowing digital wiring lines
        ctx.lineWidth = 2;
        wiringConnections.forEach(pair => {
            const start = nodes[pair[0]];
            const end = nodes[pair[1]];

            const x1 = start.x * w; const y1 = start.y * h;
            const x2 = end.x * w; const y2 = end.y * h;

            // Translucent structural base connection line link
            ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
            ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();

            // White glowing pulse wire data overlay lines animation logic
            ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
            ctx.save();
            ctx.setLineDash([15, 45]);
            ctx.lineDashOffset = -pulseOffset;
            ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
            ctx.restore();
        });

        // 2. Draw neural configuration nodes points
        nodes.forEach(node => {
            const nx = node.x * w;
            const ny = node.y * h;

            // Outer cyan pulse corona ring glows
            ctx.fillStyle = "rgba(0, 255, 255, 0.06)";
            ctx.beginPath(); ctx.arc(nx, ny, node.r * 2.2, 0, Math.PI * 2); ctx.fill();

            ctx.strokeStyle = "rgba(0, 255, 255, 0.4)";
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.arc(nx, ny, node.r, 0, Math.PI * 2); ctx.stroke();

            ctx.fillStyle = node.label === "CORE_REACTOR" ? "#00ffff" : "#ffffff";
            ctx.beginPath(); ctx.arc(nx, ny, node.r * 0.4, 0, Math.PI * 2); ctx.fill();

            // Tech label text nodes visualization overlay
            ctx.fillStyle = "rgba(148, 163, 184, 0.45)";
            ctx.font = "9px monospace";
            ctx.fillText(node.label, nx + node.r + 8, ny + 3);
        });

        pulseOffset += 1.2; // Fluent animation ticking factor speed rate modifier
        requestAnimationFrame(drawRoboticsBlueprint);
    }
    // Fire up canvas blueprint calculations engine loops
    drawRoboticsBlueprint();

    // TERMINAL LOG COMPILING INJECTION LOGIC SEQUENCE
    const logSequence = [
        { text: "tanzeemulhaq@srmcem:~$ initializing robotics_core_boot...", type: "log-cmd" },
        { text: "Connecting to local architecture systems... SUCCESS", type: "log-success" },
        { text: "Loading foundational runtime libraries...", type: "" },
        { text: ">> Compiling: Java Native Virtual Interface Environment Layer...", type: "log-warn" },
        { text: ">> Checking SDK variables mapping: Python ML pipelines & Node runtime nodes...", type: "" },
        { text: ">> Parsing core logic trees: Advanced Data Structures & Search Algorithms...", type: "" },
        { text: ">> Activating cybernetic microcontrollers (TECHNOXIAN World Cup firmware)... READY", type: "log-success" },
        { text: ">> Injecting high-fidelity UI schemas: Translucent CSS3, React Component nodes...", type: "" },
        { text: ">> Verifying repository connections: MongoDB Clusters & Git systems linked.", type: "" },
        { text: "Developer environment secure. Initializing personal_portfolio_v2.0.26...", type: "log-success" }
    ];

    let currentLogLine = 0;

    function printLogLine() {
        if (currentLogLine < logSequence.length) {
            const lineData = logSequence[currentLogLine];
            const p = document.createElement("p");
            if (lineData.type) p.classList.add(lineData.type);
            p.textContent = lineData.text;
            
            logContainer.appendChild(p);
            logContainer.scrollTop = logContainer.scrollHeight;
            
            currentLogLine++;
            setTimeout(printLogLine, Math.floor(Math.random() * 150) + 120);
        } else {
            // Dismiss loader setup smoothly once queue logs complete printing lifecycle loops
            setTimeout(() => {
                preloader.classList.add("fade-out");
            }, 600);
        }
    }
    setTimeout(printLogLine, 400);
});
