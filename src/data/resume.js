const RESUME = {
  name: "Oluwajolasun Jaiyesimi",
  title: "IT Support & Infrastructure Technician",
  subtitle: "Tier 1–2 Support · Networking · Cloud Systems",
  location: "Canada",
  email: "jolasunjaiyesimi@gmail.com",
  phone: "+1 (647) 673-9575",
  linkedin: "linkedin.com/in/oluwajolasun",
  github: "github.com/oluwajolasun",
  website: "oluwajolasun.com",
  summary:
    "IT Support & Infrastructure professional with hands-on experience in end-user support, Windows/macOS troubleshooting, network administration, and enterprise system provisioning. Engineering background paired with real-world IT operations experience across multiple industries.",

  stats: [
    { number: "3+", label: "Years IT Experience" },
    { number: "T1–T2", label: "Support Level" },
    { number: "3.85", label: "MEng GPA @ UCalgary" },
    { number: "GCP, Azure", label: "Cloud Platform Exp." },
    { number: "CCNA", label: "In Progress" },
  ],

  skills: [
    {
      category: "Infrastructure & Networking",
      name: "Network Administration",
      tags: [
        "TCP/IP",
        "DNS",
        "DHCP",
        "LAN/WAN",
        "Wi-Fi",
        "VLANs",
        "VPN",
        "Firewall Basics",
      ],
    },
    {
      category: "Infrastructure & Networking",
      name: "Physical Infrastructure",
      tags: [
        "Structured Cabling",
        "Cat5e/Cat6",
        "Ethernet Termination",
        "Rack Installation",
        "Patch Panels",
        "Cisco",
      ],
    },
    {
      category: "Systems & End-User Support",
      name: "Desktop & OS Support",
      tags: [
        "Windows 10/11",
        "macOS",
        "Linux",
        "Hardware Diagnostics",
        "Endpoint Imaging",
        "Printer Support",
      ],
    },
    {
      category: "Identity & Directory",
      name: "Active Directory",
      tags: [
        "Users & Groups",
        "OUs",
        "GPO",
        "DNS Config",
        "Hyper-V Lab",
        "Windows Server 2022",
      ],
    },
    {
      category: "Cloud & Productivity",
      name: "Cloud Platforms & M365",
      tags: [
        "Microsoft 365",
        "Exchange Online",
        "Azure Fundamentals",
        "GCP",
        "User Provisioning",
      ],
    },
    {
      category: "Security & Operations",
      name: "IT Operations",
      tags: [
        "Endpoint Protection",
        "Patch Management",
        "Incident Logging",
        "SLA Adherence",
        "Ticket Lifecycle",
        "Root Cause Analysis",
      ],
    },
    {
      category: "Tools & Platforms",
      name: "Admin & Scripting Tools",
      tags: ["PowerShell", "SQL", "Jira", "Shortcut", "Hyper-V", "Log Review"],
    },
    {
      category: "AV & Systems",
      name: "Audiovisual & Peripheral Systems",
      tags: [
        "AV Systems",
        "Projector Setup",
        "Peripheral Config",
        "Cable Management",
      ],
    },
    {
      category: "Past Experience",
      name: "Web Development & Reporting",
      tags: [
        "Python",
        "FastAPI",
        "JavaScript",
        "React",
        "Node.js",
        "REST APIs",
        "Git",
        "GitHub",
        "Power BI",
        "PostgreSQL",
        "MSSQL",
      ],
    },
  ],

  experience: [
    {
      date: "October 2018 – June 2021",
      role: "IT & Audiovisual Specialist",
      company: "Woodstock Electronics Limited",
      location: "Lagos, Nigeria",
      points: [
        "Delivered Tier 1–2 IT support to internal users across two subsidiary companies, troubleshooting Windows/macOS systems, printers, connectivity issues, and Microsoft 365.",
        "Logged, tracked, prioritized, and resolved incidents using ticketing workflows; escalated complex issues to ensure timely resolution and minimal downtime.",
        "Provisioned laptops and workstations, performed imaging, data backups/restores, and supported onboarding/offboarding within Windows domain environments.",
        "Assisted with structured cabling (Cat5e/Cat6), rack installations, Ethernet termination, and deployment of network-connected devices.",
        "Documented system configurations, troubleshooting procedures, and ticket resolutions to improve operational consistency.",
      ],
    },
    {
      date: "December 2025 – February 2026",
      role: "Data Analyst",
      company: "Engage Building Products",
      location: "Calgary, AB",
      points: [
        "Supported business-critical ERP systems ensuring stable availability and reporting accuracy across finance and operations teams.",
        "Investigated and resolved production system defects, performing SQL-based diagnostics to troubleshoot reporting errors and data inconsistencies.",
        "Assisted end users with system access issues and reporting-related troubleshooting, maintaining service continuity.",
      ],
    },
    {
      date: "July 2025 – November 2025",
      role: "Cloud Systems Support Engineer",
      company: "Areto Labs",
      location: "Edmonton, AB",
      points: [
        "Monitored and supported GCP infrastructure including compute, networking, and containerized workloads, ensuring high system availability.",
        "Supported and troubleshot REST API integrations between internal and third-party services, resolving connectivity and authentication issues.",
        "Built and maintained automation scripts to streamline deployment and monitoring workflows, reducing manual operational overhead.",
      ],
    },
    {
      date: "September 2023 – September 2024",
      role: "Systems & Application Support Developer",
      company: "CANN Forecast Inc.",
      location: "Montreal, QC",
      points: [
        "Maintained backend PostgreSQL systems supporting municipal infrastructure analytics, ensuring data integrity and uptime.",
        "Monitored ETL processes and resolved ingestion failures to ensure uninterrupted data processing for 100+ concurrent users.",
        "Participated in sprint planning, release cycles, and post-deployment validation in an agile environment.",
        "Automated email processing workflows via Python, cutting manual work by 90% and reducing processing time by 4 hours/day.",
      ],
    },
  ],

  certifications: [
    {
      name: "Cisco CCNA",
      issuer: "Cisco Systems",
      date: "Expected August 2026",
      status: "in-progress",
    },
    {
      name: "Master of Engineering – Software Engineering",
      issuer: "University of Calgary",
      date: "GPA 3.85/4.00 · 2021–2023",
      status: "completed",
    },
    {
      name: "BEng – Electrical & Electronics Engineering",
      issuer: "Loughborough University, UK",
      date: "2nd Class Upper · 2015–2018",
      status: "completed",
    },
  ],

  plannedCerts: ["Azure AZ-104"],

  lab: [
    {
      title: "Home Lab Infrastructure",
      active: true,
      tags: [
        "Hyper-V",
        "Windows Server 2022",
        "Active Directory",
        "Ubuntu Server",
        "DNS",
        "GPO",
      ],
      desc: "Built a virtualized enterprise lab using Hyper-V on Windows 11 Pro, deploying Windows Server 2022 and Ubuntu Server VMs to simulate real-world IT environments. Configured Active Directory Domain Services including OUs, users, groups, DNS, and Group Policy Objects — replicating a production enterprise domain.",
    },
    {
      title: "Network Topology Simulation",
      active: true,
      tags: [
        "Packet Tracer",
        "VLAN Config",
        "DHCP",
        "Inter-VLAN Routing",
        "CCNA Prep",
      ],
      desc: "Hands-on Cisco Packet Tracer labs as part of CCNA preparation — configuring VLANs, DHCP scopes, inter-VLAN routing, and basic firewall rules. Practical reinforcement of TCP/IP subnetting, routing protocols, and switch management.",
    },
    {
      title: "GCP Infrastructure Monitoring",
      active: false,
      tags: [
        "GCP",
        "Compute Engine",
        "Honeycomb",
        "Cloud Monitoring",
        "Pub/Sub",
      ],
      desc: "Production experience monitoring GCP infrastructure including compute instances, networking, and containerized workloads. Used Honeycomb distributed tracing to debug and optimize event-driven pipelines — directly applicable to cloud support and infrastructure roles.",
    },
    {
      title: "Previous Porfolio & Projects",
      active: true,
      tags: ["Software Development", "Portfolios", "Projetcs"],
      //desc: "If you are interesred in knowing my past experience and projetcs you can stalk me a bit more 😁",
      desc: "Full stack development portfolio showcasing web apps, APIs, and UI projects built with React, Node.js, Django, and more.",
      link: "https://oluwajolasun.com",
    },
  ],
};

export default RESUME;
