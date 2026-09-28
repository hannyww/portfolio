export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  photoSrc: string;
  teamPhotoSrc?: string;
  oneLineDescription: string;
  fullSubpage: {
    overview: string;
    highlights: string[];
    technologies: string[];
    outcomes: string;
    keyLesson?: string;
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
      title: "Why Finance",
      tagline: "Discovered finance through engineering and impact",
      coverSrc: "/photos/why-finance.jpg",
      badge: "My Story",
      preview: "Discovered finance through engineering and impact.",
    },
  },
  whyFinancePhotos: [
    {
      id: "wf-1",
      src: "/photos/why-finance-1.jpg",
      alt: "Map of Lilburn, Georgia",
      caption: "Growing up in Lilburn, GA, a lower income community outside of Atlanta with a 40% food insecurity rate in young children, I knew I wanted to find a way to make a real impact close to home.",
      badge: "Where I'm From",
    },
    {
      id: "wf-2",
      src: "/photos/why-finance-2.jpg",
      alt: "Geodesic dome greenhouse project with team",
      caption: "I was selected as one of the youngest finalists for the Georgia Governor's Honors Program. As a finalist I researched geodesic dome greenhouses and saw a solution that bridged theory to a real problem, something that happens a lot in finance. I started a climate tech nonprofit, leading a team of 5 to build 3 geodesic dome greenhouses across Gwinnett, increasing food yield by around half. As much as I loved the engineering, I realized I liked the process of raising funds for it even more.",
      badge: "The Project",
    },
    {
      id: "wf-3",
      src: "/photos/why-finance-3.jpg",
      alt: "Award ceremony for nonprofit funding",
      caption: "After presenting to my local county board on the impacts of food insecurity and how our nonprofit could remedy it, I realized I loved pitching to stakeholders. I liked having a concrete problem, doing quantitative and qualitative analysis, and presenting to persuade. We raised around $3,000 to build these greenhouses. At Cornell, I continued pursuing the intersection of impact, capital-raising, and engineering through Impact Investing and Cornell Fintech Club.",
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
      note: "Reflecting on what makes people truly successful, minimalism, design, and what it means to be so passionate about your work that it becomes your life.",
      coverSrc: "/photos/reading-cover.jpg",
      progress: "In Progress",
    },
  },
  experiences: [
    {
      id: "exp-1",
      slug: "dispatch-energy",
      title: "M&A Intern",
      subtitle: "Dispatch Energy (Portfolio Investment of Hamilton Lane)",
      period: "June 2026 – August 2026",
      location: "New York, NY",
      photoSrc: "/photos/work-1.jpg",
      teamPhotoSrc: "/photos/dispatch-intern.jpg",
      oneLineDescription: "Standardized M&A processes for a team covering $400M in energy assets at a Hamilton Lane portfolio company, while learning infrastructure finance, capital markets, and buy-side dynamics entirely on the fly",
      fullSubpage: {
        overview: "I came in with a basic finance foundation from coursework and was immediately dropped into the complex world of infrastructure investing, where revenue structures are tied to power purchase agreements (PPAs), deals involve debt sculpting, and capital structures sit at the intersection of energy policy and credit markets. My engineering research background helped me pick up technical frameworks quickly, but I had to absorb entirely new financial concepts, from PPA mechanics to borrowing base analysis and capital markets dynamics, in real time and on the job",
        highlights: [
          "Led a state-by-state energy market database project requiring fluency in both financial modeling and legal and regulatory policy, translating complex policy frameworks into structured financial data",
          "Gained hands-on exposure to debt sculpting, capital markets, and borrowing base work as part of an M&A team covering $400M in energy assets",
          "Worked alongside LPs for the first time and got a real look at the buy side, seeing capital allocation from an investor perspective rather than just the operational side",
          "Used AI tooling to help migrate and structure financial models, applying it to a real infrastructure finance context",
        ],
        technologies: ["Power Purchase Agreements (PPAs)", "Debt Sculpting", "Capital Markets", "Borrowing Base Analysis", "Infrastructure Finance", "M&A Due Diligence", "Energy Policy", "Financial Modeling"],
        keyLesson: "How to operate in a corporate environment, ask the right questions, and build something useful when starting from near zero. The most important skill was learning how to find mentors, absorb complex interdisciplinary topics on the spot, and be proactive in filling your own knowledge gaps",
        outcomes: "This experience is where my real interest in the buy side began. Working directly with LPs to help secure funding gave me my first taste of how capital actually moves, and the credit and capital markets exposure through borrowing base work made me want to go deeper. My main takeaway was simple: be proactive in learning, seek mentors before you need them, and never stop asking questions when the material is hard",
        externalUrl: "https://dispatchenergy.com",
      },
    },
    {
      id: "exp-2",
      slug: "cornell-fintech-millennium",
      title: "Business Lead and Financial Analyst",
      subtitle: "Cornell Fintech Club x Millennium Management",
      period: "September 2025 – Present",
      location: "Ithaca, NY",
      photoSrc: "/photos/work-2.jpg",
      oneLineDescription: "Selected as Business Lead for the Cornell Fintech Club Millennium Project, partnering with Millennium Management to build an AI-powered financial document intelligence tool for earnings calls",
      fullSubpage: {
        overview: "Add your fuller reflection on what you truly learned here",
        highlights: [
          "Selected as Business Lead for a high-impact club project as a new member",
          "Partnered with Millennium Management to scope and deliver a financial document generator for earnings calls",
          "Built tools to extract and synthesize key financial insights, reducing manual analyst time",
        ],
        technologies: ["Financial Analysis", "AI/NLP", "Earnings Call Analysis", "Product Strategy", "Fintech"],
        outcomes: "Add your personal takeaway from this role beyond the resume bullet",
        externalUrl: "https://cornellfintech.org",
      },
    },
    {
      id: "exp-3",
      slug: "cnote",
      title: "Project Manager – AI Initiative",
      subtitle: "CNOTE (Impact Investing Club Sponsored)",
      period: "January 2026 – Present",
      location: "New York, NY",
      photoSrc: "/photos/work-3.jpg",
      oneLineDescription: "As the only engineering student in my finance club with coding experience, led an AI-powered investment memo generator for fixed income impact firm CNote",
      fullSubpage: {
        overview: "Add your fuller reflection on what you truly learned here",
        highlights: [
          "Sole engineering student leading a technical project with significant financial components",
          "Built an investment memo generator to streamline fixed income analysis for CNote",
          "Bridged the gap between technical development and financial stakeholder requirements",
        ],
        technologies: ["AI", "Python", "Investment Memos", "Fixed Income", "Impact Investing"],
        outcomes: "Add your personal takeaway from this role beyond the resume bullet",
        externalUrl: "https://mycnote.com",
      },
    },
  ],
  logoWall: [],
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
