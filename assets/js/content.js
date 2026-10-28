/* ==========================================================================
   SITE CONTENT — edit this file to add Highlights, Conversations and photos.
   No other file needs to change. Copy an existing { ... } block, paste it
   where you want it (lists are shown in the order written), and edit it.

   Images: put full-size photos anywhere under assets/img/ and point `src`
   to them. For speed, keep them under ~1600 px on the long edge
   (the optimized copies live in assets/img/web/).
   ========================================================================== */

window.SITE = {

  /* ------------------------------------------------------------------------
     HIGHLIGHTS — talks, observing runs, outreach, policy, conferences.
     (Shown in the "Highlights" section; the list is still called fieldNotes.)
     type:  one of  Talk | Observing | Policy | Conference | Outreach | Research | Teaching
     role:  what YOU were doing there, in a few words (shown prominently)
     images: first one is the large photo; others become clickable thumbnails
     links:  optional buttons, e.g. { label: "Slides", url: "..." }
     ------------------------------------------------------------------------ */
  fieldNotes: [
    {
      date: "2026",
      type: "Talk",
      title: "Asteroseismology of polluted white dwarfs",
      place: "Yale / CeNAM Nuclear Asteroseismology Workshop · New Haven, CT",
      role: "Speaker",
      body: "Presented my work on what happens inside a white dwarf when it accretes rocky planetary debris. Using MESA and GYRE models, I showed how the metals change the star's envelope structure and shift its g-mode pulsation periods, and what that means for the masses and temperatures we infer from asteroseismology.",
      images: [
        { src: "assets/img/web/cenam-talk.jpg", caption: "Presenting 'Asteroseismology of polluted white dwarfs' at the Yale/CeNAM Nuclear Asteroseismology Workshop 2026." }
      ],
      links: []
    },
    {
      date: "Summer 2025",
      type: "Observing",
      title: "Yale Summer Program in Astrophysics (YSPA)",
      place: "Yale University · New Haven, CT",
      role: "Observing mentor",
      body: "Worked with high-school students at the telescope during YSPA 2025: setting up observations, pointing at a star cluster, and walking through how the images turn into science. Between observing runs, astronomy came with a bit of guitar.",
      images: [
        { src: "assets/img/web/yspa-observing.jpg", caption: "Helping a student observe a star cluster during YSPA 2025." },
        { src: "assets/img/web/yspa-guitar.jpg", caption: "Astronomy with music at YSPA 2025." }
      ],
      links: []
    },
    {
      date: "2025",
      type: "Policy",
      title: "Yale STEM Hill Day — Space Policy Advocate",
      place: "Capitol Hill · Washington, DC",
      role: "Space team advocate",
      body: "As part of the Yale STEM Hill Day space team, I met with senators, House representatives, bipartisan staffers, and the director of the Space and Aeronautics Subcommittee. We briefed policymakers on current STEM research and advocated for the NASA Reauthorization Act and for international collaboration in space science, the kind that made JWST and the Event Horizon Telescope possible.",
      images: [
        { src: "assets/img/web/hill-space-team.jpg", caption: "The Yale STEM Hill Day 2025 space team on Capitol Hill." },
        { src: "assets/img/web/hill-team.jpg", caption: "The full Yale STEM Hill Day 2025 delegation in Washington, DC." },
        { src: "assets/img/web/hill-committee.jpg", caption: "Outside the House Committee on Science, Space, and Technology." }
      ],
      links: []
    },
    {
      date: "2024",
      type: "Conference",
      title: "42nd Meeting of the Astronomical Society of India",
      place: "Indian Institute of Science · Bangalore, India",
      role: "Local organizing committee & volunteer",
      body: "Served on the local organizing committee for ASI 2024, the national meeting of India's astronomy community. I helped run registration and the day-to-day logistics, which meant meeting most of the astronomers and astrophysicists who attended.",
      images: [
        { src: "assets/img/web/asi-banner.jpg", caption: "At the 42nd meeting of the Astronomical Society of India (ASI 2024), IISc Bangalore." },
        { src: "assets/img/web/asi-volunteer.jpg", caption: "At the volunteer desk during ASI 2024." },
        { src: "assets/img/web/asi-group.jpg", caption: "ASI 2024 group photo." }
      ],
      links: [ { label: "ASI 2024", url: "https://astron-soc.in/asi2024/about" } ]
    },
    {
      date: "Apr 2024",
      type: "Outreach",
      title: "IISc Open Day",
      place: "Indian Institute of Science · Bangalore, India",
      role: "Science outreach volunteer",
      body: "Joined the astronomy and physics groups at IISc's annual Open Day, explaining research and demonstrations to the thousands of students and families who visit the campus.",
      images: [
        { src: "assets/img/web/iisc-openday-astro.jpg", caption: "IISc Open Day 2024 with the astronomy group." },
        { src: "assets/img/web/iisc-openday-physics.jpg", caption: "IISc Open Day 2024 with the physics group." }
      ],
      links: []
    },
    {
      date: "2023 – 2024",
      type: "Research",
      title: "MS thesis: super-Chandrasekhar white dwarfs",
      place: "Indian Institute of Science · Bangalore, India",
      role: "MS thesis researcher",
      body: "Completed my Master's thesis in Prof. Banibrata Mukhopadhyay's group at IISc, simulating white dwarfs that may exceed the Chandrasekhar mass limit. The work became part of a Springer conference proceedings.",
      images: [
        { src: "assets/img/web/iisc-bm-group.jpg", caption: "With Prof. Banibrata Mukhopadhyay's group at IISc Bangalore." }
      ],
      links: [ { label: "arXiv", url: "https://arxiv.org/abs/2411.18692" } ]
    },
    {
      date: "Spring 2023",
      type: "Teaching",
      title: "Teaching Computational Physics",
      place: "IISER Kolkata · India",
      role: "Teaching assistant, PH3205",
      body: "TA for the Computational Physics course at IISER Kolkata, helping students write their first numerical solvers. The course ended with a treat from the professors.",
      images: [
        { src: "assets/img/web/iiser-ta-treat.jpg", caption: "End-of-semester treat after TAing Computational Physics at IISER Kolkata." }
      ],
      links: []
    }
  ],

  /* ------------------------------------------------------------------------
     CAREER CONVERSATIONS — events / podcasts as McDougal STEM Career Fellow.
     series:  small label above the title (optional)
     title:   the event title
     sector:  Academia | Industry | Government | Nonprofit | Entrepreneurship
              (filter buttons appear once there are 2+ different sectors)
     image:   the Zoom screenshot, e.g. "assets/img/conversations/my-event.jpg"
              (leave "" to show a styled placeholder)
     guests:  [{ name, role }, ...]
     summary: two or three sentences shown on the card
     bios:    optional; shown under "About the speakers" when clicked
     link:    recording URL (leave "" if not public)
     ------------------------------------------------------------------------ */
  conversations: [
    {
      series: "PhD Pathways Series · Part 2",
      title: "AI, Data Science, and Computational Careers for Researchers",
      sector: "Industry",
      date: "Oct 2026",
      audience: "For PhD students & postdocs in the physical sciences and engineering",
      image: "assets/img/conversations/phd-pathways-2.jpg",
      guests: [
        { name: "Emma Castiglia", role: "Data Scientist, Agentio · PhD Physics, Yale" },
        { name: "Yeshwanth Venkatesha", role: "Software Engineer, Google (YouTube) · PhD Electrical Engineering, Yale" }
      ],
      summary: "Many PhDs move from research into data science, machine learning and AI, often without a formal computer science background. Two Yale PhD alumni who made that move, one to an AI startup and one to big tech, talked about building the technical skills these roles need, navigating the transition out of academia, and what their day-to-day work actually looks like.",
      topics: ["Data science", "Machine learning and AI", "PhD to industry"],
      bios: [
        "<b>Emma Castiglia</b> is a Data Scientist at Agentio, an AI-native startup building the buying platform for creator media. She earned her PhD in Physics at Yale in 2022, working in particle physics on the ATLAS experiment at CERN. She was previously a Research Data Scientist at Meta, on the privacy infrastructure, wearables system health and Instagram cross-Meta experiences teams, and did an ML research internship at Netflix during her PhD.",
        "<b>Yeshwanth Venkatesha</b> is a Software Engineer at Google, working on Community Intelligence at YouTube and using AI to scale connections across the platform. He earned his PhD in Electrical Engineering at Yale in 2025, focusing on efficient machine learning, and completed two Applied Scientist internships at Amazon."
      ],
      link: ""
    },
    {
      series: "Academic Job Search Series · Part 1",
      title: "Inside Faculty Hiring: Insights from STEM Search Committees",
      sector: "Academia",
      date: "2026",
      audience: "For PhD students & postdocs",
      image: "assets/img/conversations/academic-job-search-1.jpg",
      guests: [
        { name: "Prof. Sarah Demers", role: "Chair, Department of Physics, Yale University" },
        { name: "Prof. Valerie Reinke", role: "Professor of Genetics, Yale School of Medicine" }
      ],
      summary: "The academic job market is as competitive as ever, and hiring priorities have shifted. Two senior Yale faculty who lead and serve on search committees shared how the market has changed, what committees actually look for, how application materials are read, and how to position yourself for an academic career.",
      topics: ["Faculty hiring", "Search committees", "Application materials"],
      bios: [
        "<b>Sarah Demers</b> is Chair of the Physics Department at Yale, an experimental particle physicist on the ATLAS experiment at CERN's Large Hadron Collider and the Mu2e experiment at Fermilab. She received her AB from Harvard and PhD from the University of Rochester, was a postdoc with SLAC based at CERN, and joined Yale in 2009. She holds a DOE Early Career Award and co-authored the book <i>Physics and Dance</i>.",
        "<b>Valerie Reinke</b> is a Professor in the Department of Genetics at Yale School of Medicine, where her lab studies gene regulatory mechanisms in the germ line using genome-wide approaches. She earned her BS in Genetics from the University of Illinois and her PhD from the University of Texas Health Science Center, and was a postdoc at Stanford before joining Yale in 2000."
      ],
      link: ""
    },
    {
      series: "Academic Job Search Series · Part 2",
      title: "Acing the Job Talk: How to Prepare for STEM Academic Interviews",
      sector: "Academia",
      date: "2026",
      audience: "For PhD students & postdocs",
      image: "assets/img/conversations/academic-job-search-2.jpg",
      guests: [
        { name: "Prof. Colin Burke", role: "Assistant Professor of Physics, University of North Texas" },
        { name: "Prof. Abhishek Moitra", role: "Assistant Professor, Washington State University" }
      ],
      summary: "The academic interview is where offers are won or lost. Two faculty who recently went through the job market gave candid advice on every stage, from the first screening call to the campus visit, job talk and chalk talk, and on presenting your research to different audiences and handling tough questions.",
      topics: ["Job talk", "Chalk talk", "Campus visits"],
      bios: [
        "<b>Colin Burke</b> is an Assistant Professor of Physics at the University of North Texas, studying supermassive black hole formation, intermediate-mass black holes and active galactic nuclei. He completed his PhD at the University of Illinois Urbana-Champaign in 2023 and was an NSF Astronomy &amp; Astrophysics Postdoctoral Fellow at Yale. His research has appeared in <i>Science</i> and <i>Nature Astronomy</i>.",
        "<b>Abhishek Moitra</b> is an Assistant Professor at Washington State University, working on large language model optimization, neuromorphic computing and hardware-algorithm co-design. He completed his PhD at Yale in 2025, and his work has received the IEEE Transactions on CAD Donald O. Pederson Best Paper Award and a Bell Labs Outstanding Innovation Award."
      ],
      link: ""
    }
  ],

  /* ------------------------------------------------------------------------
     LIFE BEYOND RESEARCH — the photo wall.
     tag: Travel | Campus life | Music   (new tags create new filter buttons)
     ------------------------------------------------------------------------ */
  gallery: [
    { src: "assets/img/web/sikkim-pelling1.jpg", tag: "Travel", place: "Pelling, Sikkim", caption: "Chenrezig statue and skywalk, Pelling. Chenrezig (Avalokiteshvara) symbolizes the compassion of all Buddhas." },
    // { src: "assets/img/web/guitar.jpg", tag: "Music", place: "Jamming", caption: "Learning guitar; music is something I want to keep learning all my life." },
    { src: "assets/img/web/iucaa-foucault.jpg", tag: "Campus life", place: "IUCAA, Pune", caption: "Watching Foucault's pendulum at IUCAA, Pune." },
    { src: "assets/img/web/sikkim-guru.jpg", tag: "Travel", place: "Khecheopalri Lake, Sikkim", caption: "Guru Padmasambhava statue near Khecheopalri Lake, Sikkim." },
    { src: "assets/img/web/iiser-gr-night.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "Endless discussions the night before a General Relativity test, 2023." },
    // { src: "assets/img/web/east-rock.jpg", tag: "Travel", place: "East Rock Park, New Haven", caption: "A winter visit to East Rock Park, New Haven." },
    { src: "assets/img/web/iucaa-garden.jpg", tag: "Campus life", place: "IUCAA, Pune", caption: "IUCAA's iconic cosmic garden." },
    // { src: "assets/img/web/sikkim-monastery.jpg", tag: "Travel", place: "Khecheopalri, Sikkim", caption: "Khecheopalri Monastery, Sikkim." },
    // { src: "assets/img/web/iisc-main.jpg", tag: "Campus life", place: "IISc Bangalore", caption: "In front of IISc's iconic main building." },
    // { src: "assets/img/web/iucaa-trek1.jpg", tag: "Travel", place: "Andharban, near Pune", caption: "Trekking through the Andharban jungle near Pune." },
    { src: "assets/img/web/tamil-andal.jpg", tag: "Travel", place: "Srivilliputhur, Tamil Nadu", caption: "Andal Temple, Srivilliputhur, Tamil Nadu." },
    { src: "assets/img/web/iiser-durga-puja.jpg", tag: "Campus life", place: "Kolkata", caption: "Kolkata's Durga Puja, 2022." },
    // { src: "assets/img/web/iucaa-aryabhata.jpg", tag: "Campus life", place: "IUCAA, Pune", caption: "Coffee with Aryabhata at IUCAA, Pune." },
    { src: "assets/img/web/sikkim-pelling2.jpg", tag: "Travel", place: "Pelling, Sikkim", caption: "IISER friends out trekking and exploring around Pelling." },
    // { src: "assets/img/web/iisc-tata.jpg", tag: "Campus life", place: "IISc Bangalore", caption: "Statue of Jamsetji Nusserwanji Tata at IISc Bangalore." },
    { src: "assets/img/web/iiser-badminton.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "Team photo after winning a badminton match at IISER Kolkata." },
    { src: "assets/img/web/iucaa-galileo.jpg", tag: "Campus life", place: "IUCAA, Pune", caption: "Coffee with Galileo at IUCAA, Pune." },
    { src: "assets/img/web/iiser-campus.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "Nature blessing IISER Kolkata." },
    { src: "assets/img/web/iucaa-trek3.jpg", tag: "Travel", place: "Andharban, near Pune", caption: "Trekking at Andharban jungle, near Pune." },
    { src: "assets/img/web/iiser-farewell.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "Giving farewell to our seniors at IISER Kolkata." },
    // { src: "assets/img/web/sikkim-lake.jpg", tag: "Travel", place: "Khecheopalri Lake, Sikkim", caption: "Khecheopalri Lake, Sikkim." },
    { src: "assets/img/web/iiser-hostel.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "A regular birthday party at the hostel." },
    // { src: "assets/img/web/iucaa-main.jpg", tag: "Campus life", place: "IUCAA, Pune", caption: "In front of IUCAA's main building." },
    // { src: "assets/img/web/tamil-andal2.jpg", tag: "Travel", place: "Srivilliputhur, Tamil Nadu", caption: "Andal Temple, Srivilliputhur." },
    // { src: "assets/img/web/iiser-gate.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "IISER Kolkata's main gate." },
    { src: "assets/img/web/iiser-birthday.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "Late-night birthday celebrations at IISER Kolkata." }
  ]
};
