import { Icons } from "@/components/icons";
import { GitBranch, HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Rithika Patimedi",
  initials: "RP",
  url: "https://rithika-rao.github.io/portfolio/",
  location: "Atlanta, GA",
  locationLink: "https://www.google.com/maps/place/Atlanta",
  description:
    "A curious mind in cybersecurity, driven to protect what matters and constantly grow along the way",
  summary:
    "I began my journey in IT infrastructure, working hands-on with Windows Server environments and enterprise systems, where I built a strong understanding of how technology operates at scale. That experience sparked a deeper curiosity about cybersecurity not just how systems run, but how they’re protected. I’m currently pursuing a Master’s in Information Technology with a concentration in Cybersecurity, continuously strengthening my skills and growing into a professional focused on securing what others rely on every day. ",
  avatarUrl: "/portfolio/Me.jpeg",
  skills: [
    { name: "Python" },
    { name: "Bash" },
    { name: "PowerShell" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "Linux" },
    { name: "Windows Server" },
    { name: "Active Directory" },
    { name: "Azure" },
    { name: "AWS" },
    { name: "VMware" },
    { name: "SIEM" },
    { name: "Splunk" },
    { name: "Nmap" },
    { name: "Metasploit" },
    { name: "Nessus" },
    { name: "Qualys" },
    { name: "Wireshark" },
    { name: "Burp Suite" },
    { name: "ISO 27001" },
    { name: "NIST CSF" },
    { name: "COBIT" },
    { name: "SOC 2" },
    { name: "Vulnerability Management" },
    { name: "Patch Management" },
    { name: "Risk Assessment" },
    { name: "Policy Writing" },
    { name: "IAM" },
    { name: "Firewall" },
    { name: "IDS/IPS" },
    { name: "Network Security" },
    { name: "Penetration Testing" },
    { name: "Cryptography" },
    { name: "Public-Key Cryptography" },
    { name: "Encryption Protocols" },
    { name: "Incident Response" },
    { name: "Threat Detection" },
    { name: "Cloud Security" },
    { name: "ServiceNow" },
    { name: "ServiceNow CMDB" },
    { name: "Confluence" },
    { name: "Microsoft Office" },
    { name: "Analytical Thinking" },
    { name: "Problem Solving" },
    { name: "Attention to Detail" },
    { name: "Learning Agility" },
    { name: "Organizational Skills" },
    { name: "Time Management" },
    { name: "Leadership" },
    { name: "Collaboration" },
    { name: "Stakeholder Engagement" },
    { name: "Presentation Skills" },
  ],
  navbar: [
    { href: "https://rithika-rao.github.io/portfolio/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rithikarao0414@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rithika-rao",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rithikapatimedi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Kennesaw State University",
      href: "https://www.kennesaw.edu/",
      badges: [],
      location: "Remote",
      title: "Graduate Research Assistant",
      logoUrl: "/portfolio/KSUlogo.jpg",
      start: "January 2026",
      end: "May 2026",
      description:
        "Collaborated with research teams and vendors to develop cybersecurity documentation and presentations supporting risk assessments. Built automated workflows to aggregate multi-vendor security data and improve vulnerability analysis accuracy. Applied analytical and machine learning techniques to support compliant security research outcomes. Maintained research repositories and network architecture documentation, including VLANs, VPNs, and traffic flows, while creating process flowcharts to identify gaps and drive continuous improvement.",
    },
    {
      company: "HCL Technologies",
      badges: [],
      href: "https://www.hcltech.com/",
      location: "Remote",
      title: "Windows System Administrator",
      logoUrl: "/portfolio/HCLlogo.webp",
      start: "September 2022",
      end: "June 2024",
      description:
        "With nearly 2 years of experience managing enterprise Windows Server infrastructure across hybrid cloud environments, delivered 300+ secure server deployments across Azure, AWS, and VMware. Leveraged Active Directory, PowerShell, ServiceNow CMDB, and Confluence to streamline provisioning, documentation, and lifecycle management. Individually restored 20+ critical servers during a single high-impact outage weekend while leading bridge calls with the Global Operations Center, providing real-time process updates and driving coordinated recovery efforts. Strengthened SLA compliance and service availability through patch management, system hardening, proactive monitoring, and cross-functional execution.",
    }
  ],
  education: [
    {
      school: "Kennesaw State University",
      href: "https://www.kennesaw.edu/",
      degree: "Master's in Information Technology",
      logoUrl: "/portfolio/KSUlogo.jpg",
      start: "2024",
      end: "2026",
    },
    {
      school: "JB Institute of Engineering & Technology (JBIET)",
      href: "https://www.jbiet.edu.in/",
      degree: "Bachelor's Degree of Electronics and Communication Engineering",
      logoUrl: "/portfolio/JBIETlogo.jpg",
      start: "2018",
      end: "2022",
    }
  ],
  projects: [
    {
      title: "Kubernetes Cluster Monitoring & Observability",
      dates: "Aug 2025 - Dec 2025",
      active: true,
      description:
        "To strengthen my understanding of cloud-native infrastructure and observability, I built a Kubernetes cluster monitoring solution focused on performance visibility and operational resilience. I integrated Prometheus and Grafana to collect metrics, design dashboards, and configure intelligent alerts. To validate reliability, I simulated production-like workloads and stress-tested the cluster, ensuring scalability, stability, and proactive incident detection aligned with SRE best practices.",
      technologies: [
        "Kubernetes",
        "Docker",
        "Prometheus",
        "Grafana",
        "Helm",
        "Linux",
        "YAML",
        "stress-ng",
        "fio",
        "AWS"
      ],
    },
    {
      title: "Behavioral Malware Analysis of Redline Stealer",
      dates: "Jan 2025 - April 2025",
      active: true,
      description:
        "Performed malware analysis of RedLine Stealer in a controlled lab, examining 13,600+ system and network events using Procmon, Wireshark, and OSINT tools to identify C2 infrastructure and attacker TTPs. Uncovered 105+ malicious domains tied to BEC campaigns and detected SMTP-based data exfiltration over Port 587. Delivered a threat intelligence report outlining persistence, encryption methods, and infrastructure evolution across variants.",
      technologies: [
        "Procmon",
        "Wireshark",
        "VirusTotal",
        "Whois",
        "Whoxy",
        "SMTP",
        "OSINT",
        "Windows",
        "Network Forensics",
        "Threat Intelligence"
      ],
    }
  ],
  certifications: [
  {
    title: "Vulnerability Management — Qualys",
    dates: "Feb 2026",
    description: "Hands-on vulnerability assessment, remediation tracking, and risk prioritization using Qualys platform.",
    image: "https://logosandtypes.com/wp-content/uploads/2020/08/Qualys.png",
  },
  {
    title: "Certified in Cybersecurity (ISC)²",
    dates: "Mar 2025",
    description: "Foundational certification covering security principles, risk management, and incident response.",
    image: "https://asset.brandfetch.io/id8Uwj88qV/iddjOlLc6v.jpeg",
  },
  {
    title: "Introduction to Zero Trust (LFS183) — Linux Foundation",
    dates: "Aug 2025",
    description: "Zero Trust architecture principles, identity-centric security, and modern access control models.",
    image: "https://www.drupal.org/files/LF_logo_color_rgb_0.jpg",
  },
  {
    title: "Mastercard Cybersecurity Job Simulation — Forage",
    dates: "Jun 2025",
    description: "Simulated security operations tasks including threat detection and risk analysis.",
    image: "https://undergradcareers.nd.edu/assets/542930/290x/foragelogo.jpg",
  },
  {
    title: "Tata Group Cybersecurity Analyst Simulation — Forage",
    dates: "Jun 2025",
    description: "Analyzed security alerts and developed mitigation strategies in simulated enterprise scenarios.",
    image: "https://undergradcareers.nd.edu/assets/542930/290x/foragelogo.jpg",
  },
  {
    title: "Hack The Box — Active Directory & Blue Team Labs",
    dates: "Apr 2025",
    description: "Active Directory exploitation, Windows privilege escalation, Blue Team forensics labs, and Nmap badge.",
    image: "https://techround.co.uk/wp-content/uploads/2023/09/hack-the-box-e1694085620820.png",
  },
],
  hackathons: [
    {
    title: "Women in Cybersecurity (WiCyS)",
    dates: "2026 - Present",
    location: "Atlanta, Georgia",
    description:
      "Active member of a global community dedicated to advancing women in cybersecurity through mentorship, networking, and professional development opportunities.",
      image:
        "https://www.uwb.edu/stem/wp-content/uploads/sites/31/2024/01/stem-news-wicys.jpg",
      links: [],
    },
    {
    title: "ISSA – Information Systems Security Association (Student Chapter)",
    dates: "2026 - Present",
    location: "Atlanta, Georgia",
    description:
      "Student member participating in cybersecurity awareness initiatives, technical discussions, and industry networking events focused on security best practices.",
      image:
        "https://media.licdn.com/dms/image/sync/D4E27AQFI80rsANsaGg/articleshare-shrink_1280_800/0/1719840473129?e=2147483647&v=beta&t=t88MS4q1I1YiG2b6mOUgxmzmLFatWAkUwLiO74zoxuk",
      links: [],
    },
  ],
} as const;
