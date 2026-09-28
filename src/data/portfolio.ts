export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  photoSrc: string;
  oneLineDescription: string;
  fullSubpage: {
    overview: string;
    highlights: string[];
    technologies: string[];
    outcomes: string;
    externalUrl?: string;
  };
}

export interface WhyFinancePhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  badge: string;
}

export interface AboutPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  locationTag?: string;
}

export interface LogoItem {
  id: string;
  name: string;
  logoSrc: string;
  roleHint?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    handle: string;
    email: string;
    location: string;
    bio?: string;
    availabilityStatus: string;
    status: {
      currentRole: string;
      previousRoles: string[];
    };
    socials: {
      github?: string;
      twitter?: string;
      linkedin?: string;
      readcv?: string;
    };
  };
  whoAmI: {
    title: string;
    video: {
      src: string;
      poster: string;
      caption: string;
      badge: string;
    };
    whyFinance: {
      title: string;
      tagline: string;
      coverSrc: string;
      badge: string;
      preview: string;
    };
  };
  whyFinancePhotos: WhyFinancePhoto[];
  aboutPhotos: AboutPhoto[];
  media: {
    listening: {
      title: string;
      artist: string;
      album: string;
      artworkSrc: string;
      platform: string;
      url: string;
    };
    reading: {
      title: string;
      author: string;
      note: string;
      coverSrc: string;
      progress: string;
    };
  };
  experiences: Experience[];
  logoWall: LogoItem[];
  contact: {
    email: string;
    subjectDefault: string;
    messagePrompt: string;
    quickPrompts: {
      label: string;
      message: string;
      reply: string;
    }[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Hanny Wu",
    handle: "hannyww",
    email: "contact@example.com",
    location: "Atlanta, GA and Cornell University",
    bio: "Sophomore studying Operations Research Engineering (ORIE) at Cornell, a major that combines optimization, mathematics, and probability with real-world decision making.",
    availabilityStatus: "Passionate about learning finance",
    status: {
      currentRole: "studying operations research engineering at Cornell University",
      previousRoles: ["[Previous Role 1]", "[Previous Role 2]", "[Previous Role 3]"],
    },
    socials: {
      github: "https://github.com/hannyww",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com/in/hannywu223/",
    },
  },
  whoAmI: {
    title: "Who Am I",
    video: {
      src: "/videos/personal-intro.mp4",
      poster: "/photos/video-poster.jpg",
      caption: "A short personal introduction video sharing background and interests.",
      badge: "Personal Video",
    },
    whyFinance: {
      title: "My Why Finance Story",
      tagline: "Connecting operations research, optimization, and market dynamics.",
      coverSrc: "/photos/why-finance.jpg",
      badge: "Interactive",
      preview: "Explore the moments and ideas that shaped why I love finance.",
    },
  },
  whyFinancePhotos: [
    {
      id: "wf-1",
      src: "/photos/why-finance-1.jpg",
      alt: "Map of Lilburn, Georgia",
      caption: "Growing up in Lilburn, GA, a lower income community outside Atlanta, I wanted to find a way to make a real impact close to home. That drive is at the root of everything I do.",
      badge: "Where I'm From",
    },
    {
      id: "wf-2",
      src: "/photos/why-finance-2.jpg",
      alt: "Geodesic dome greenhouse project",
      caption: "What started as a science fair idea became something real. I designed and built my own geodesic dome greenhouse for my community, turning an abstract concept into something people could touch and use.",
      badge: "The Project",
    },
    {
      id: "wf-3",
      src: "/photos/why-finance-3.jpg",
      alt: "Award and funding for greenhouse project",
      caption: "When I won funding for the greenhouses, I had to pitch to community stakeholders and track every dollar at a micro level. That was the moment I realized I loved the intersection of impact, numbers, and decision making. That is when I knew I loved finance.",
      badge: "The Realization",
    },
  ],
  aboutPhotos: [
    {
      id: "photo-1",
      src: "/photos/about-photo-1.jpg",
      alt: "Self portrait or workspace snapshot",
      caption: "Desk setup and daily creative space. Click anywhere outside or press Esc to close.",
      locationTag: "Studio Workspace",
    },
    {
      id: "photo-2",
      src: "/photos/about-photo-2.jpg",
      alt: "On the trail or travel snapshot",
      caption: "Weekend exploratory walk. Capturing moments away from screens.",
      locationTag: "Weekend Trails",
    },
  ],
  media: {
    listening: {
      title: "Prof G Markets",
      artist: "Scott Galloway",
      album: "Weekly Markets Podcast",
      artworkSrc: "/photos/listening-cover.jpg",
      platform: "Spotify",
      url: "https://open.spotify.com/show/prof-g-markets",
    },
    reading: {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      note: "Reflecting on what makes people truly successful, minimalism, design, and what it means to be so passionate about your work that it becomes your life. I love reading autobiographies in my free time.",
      coverSrc: "/photos/reading-cover.jpg",
      progress: "In Progress",
    },
  },
  experiences: [
    {
      id: "exp-1",
      slug: "experience-1",
      title: "[Product Engineer or Designer]",
      subtitle: "[First Organization / Studio]",
      period: "2024 - Present",
      location: "San Francisco, CA",
      photoSrc: "/photos/work-1.jpg",
      oneLineDescription: "[Built core product foundations and streamlined high impact developer workflows.]",
      fullSubpage: {
        overview: "[In-depth narrative of your responsibilities, context of the project, and problems solved for users or the business.]",
        highlights: [
          "[Architected modular components and reduced loading latency by measurable percentages.]",
          "[Collaborated closely with design and engineering partners to ship key client-facing features.]",
          "[Led the implementation of automated testing and clean delivery pipelines.]",
        ],
        technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"],
        outcomes: "[Key takeaway, milestone reached, or primary skill honed during this period.]",
        externalUrl: "https://github.com",
      },
    },
    {
      id: "exp-2",
      slug: "experience-2",
      title: "[Frontend Developer or Researcher]",
      subtitle: "[Second Organization / Company]",
      period: "2023 - 2024",
      location: "New York, NY",
      photoSrc: "/photos/work-2.jpg",
      oneLineDescription: "[Designed responsive design systems and refined interaction ergonomics across web apps.]",
      fullSubpage: {
        overview: "[Detailed breakdown of project scope, cross-functional collaboration, and technical challenges overcome.]",
        highlights: [
          "[Developed accessible UI library with comprehensive keyboard navigation and ARIA patterns.]",
          "[Optimized bundle sizes and asset delivery for high performance across mobile and desktop.]",
          "[Coordinated sprint planning, code reviews, and documentation standards.]",
        ],
        technologies: ["JavaScript", "HTML/CSS", "Design Systems", "Web Performance"],
        outcomes: "[Delivered rock-solid stability and improved team velocity.]",
        externalUrl: "https://github.com",
      },
    },
    {
      id: "exp-3",
      slug: "experience-3",
      title: "[Software Engineering Intern or Contributor]",
      subtitle: "[Third Organization / University Lab]",
      period: "2022 - 2023",
      location: "Boston, MA",
      photoSrc: "/photos/work-3.jpg",
      oneLineDescription: "[Researched distributed data pipelines and deployed automated evaluation benchmarks.]",
      fullSubpage: {
        overview: "[Comprehensive review of research questions, experimental setup, and tangible deliverables.]",
        highlights: [
          "[Built benchmarking scripts to monitor latency and throughput under varied network loads.]",
          "[Authored technical reports and presented findings to senior team members.]",
          "[Refactored legacy modules into clean, typed, modular services.]",
        ],
        technologies: ["Python", "Git", "REST APIs", "Data Visualization"],
        outcomes: "[Published internal technical guides and laid the groundwork for subsequent releases.]",
        externalUrl: "https://github.com",
      },
    },
  ],
  logoWall: [
    {
      id: "logo-1",
      name: "[Company 1]",
      logoSrc: "/logos/company-1.svg",
      roleHint: "2024 - Present",
    },
    {
      id: "logo-2",
      name: "[Company 2]",
      logoSrc: "/logos/company-2.svg",
      roleHint: "2023 - 2024",
    },
    {
      id: "logo-3",
      name: "[Company 3]",
      logoSrc: "/logos/company-3.svg",
      roleHint: "2022 - 2023",
    },
    {
      id: "logo-4",
      name: "[Organization 4]",
      logoSrc: "/logos/company-4.svg",
      roleHint: "Partner / Lab",
    },
  ],
  contact: {
    email: "contact@example.com",
    subjectDefault: "Connecting regarding a project or opportunity",
    messagePrompt: "Hey! Drop a line below or reach out via email directly.",
    quickPrompts: [
      {
        label: "Collaborate on a project",
        message: "Hi! I saw your portfolio and would love to chat about collaborating on an upcoming project.",
        reply: "Thanks for reaching out! I would love to hear more about what you are planning. Feel free to send over project scope or schedule a call.",
      },
      {
        label: "Looking for consulting",
        message: "Hello! We have an engineering/design challenge and would value your expertise for consulting.",
        reply: "Glad to connect! Please email me the details or timeline and I will get back to you right away.",
      },
      {
        label: "Just saying hello",
        message: "Just stopped by your portfolio to say hi and admire your work!",
        reply: "Thank you so much! Always wonderful to connect with fellow builders.",
      },
    ],
  },
};
