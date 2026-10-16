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
     CAREER CONVERSATIONS — podcasts / interviews as McDougal STEM Career Fellow.
     sector: Academia | Industry | Government | Nonprofit | Entrepreneurship
     image:  the Zoom screenshot, e.g. "assets/img/conversations/jane-doe.jpg"
             (leave "" to show a styled placeholder with the guest's initials)
     link:   recording / episode URL (leave "" if not public)
     The three entries below are TEMPLATES — replace them with real guests.
     ------------------------------------------------------------------------ */
  conversations: [
    {
      guest: "Guest Name",
      role: "Data Scientist",
      org: "Company",
      sector: "Industry",
      date: "2026",
      image: "",
      summary: "One or two sentences on what you talked about: how they moved from a PhD into industry, what hiring managers look for, and advice for students starting the search.",
      topics: ["PhD to industry", "Interviews"],
      link: ""
    },
    {
      guest: "Guest Name",
      role: "Assistant Professor",
      org: "University",
      sector: "Academia",
      date: "2026",
      image: "",
      summary: "One or two sentences on the conversation: the postdoc years, applying for faculty jobs, and building a research group.",
      topics: ["Faculty job market", "Postdocs"],
      link: ""
    },
    {
      guest: "Guest Name",
      role: "Program Scientist",
      org: "Agency / Lab",
      sector: "Government",
      date: "2025",
      image: "",
      summary: "One or two sentences on the conversation: working at a national lab or agency, and how scientists shape policy and missions.",
      topics: ["Science policy", "National labs"],
      link: ""
    }
  ],

  /* ------------------------------------------------------------------------
     LIFE BEYOND RESEARCH — the photo wall.
     tag: Travel | Campus life | Music   (new tags create new filter buttons)
     ------------------------------------------------------------------------ */
  gallery: [
    { src: "assets/img/web/sikkim-pelling1.jpg", tag: "Travel", place: "Pelling, Sikkim", caption: "Chenrezig statue and skywalk, Pelling. Chenrezig (Avalokiteshvara) symbolizes the compassion of all Buddhas." },
    { src: "assets/img/web/guitar.jpg", tag: "Music", place: "Jamming", caption: "Learning guitar; music is something I want to keep learning all my life." },
    { src: "assets/img/web/iucaa-foucault.jpg", tag: "Campus life", place: "IUCAA, Pune", caption: "Watching Foucault's pendulum at IUCAA, Pune." },
    { src: "assets/img/web/sikkim-guru.jpg", tag: "Travel", place: "Khecheopalri Lake, Sikkim", caption: "Guru Padmasambhava statue near Khecheopalri Lake, Sikkim." },
    { src: "assets/img/web/iiser-gr-night.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "Endless discussions the night before a General Relativity test, 2023." },
    { src: "assets/img/web/east-rock.jpg", tag: "Travel", place: "East Rock Park, New Haven", caption: "A winter visit to East Rock Park, New Haven." },
    { src: "assets/img/web/iucaa-garden.jpg", tag: "Campus life", place: "IUCAA, Pune", caption: "IUCAA's iconic cosmic garden." },
    { src: "assets/img/web/sikkim-monastery.jpg", tag: "Travel", place: "Khecheopalri, Sikkim", caption: "Khecheopalri Monastery, Sikkim." },
    { src: "assets/img/web/iisc-main.jpg", tag: "Campus life", place: "IISc Bangalore", caption: "In front of IISc's iconic main building." },
    { src: "assets/img/web/iucaa-trek1.jpg", tag: "Travel", place: "Andharban, near Pune", caption: "Trekking through the Andharban jungle near Pune." },
    { src: "assets/img/web/tamil-andal.jpg", tag: "Travel", place: "Srivilliputhur, Tamil Nadu", caption: "Andal Temple, Srivilliputhur, Tamil Nadu." },
    { src: "assets/img/web/iiser-durga-puja.jpg", tag: "Campus life", place: "Kolkata", caption: "Kolkata's Durga Puja, 2022." },
    { src: "assets/img/web/iucaa-aryabhata.jpg", tag: "Campus life", place: "IUCAA, Pune", caption: "Coffee with Aryabhata at IUCAA, Pune." },
    { src: "assets/img/web/sikkim-pelling2.jpg", tag: "Travel", place: "Pelling, Sikkim", caption: "IISER friends out trekking and exploring around Pelling." },
    { src: "assets/img/web/iisc-tata.jpg", tag: "Campus life", place: "IISc Bangalore", caption: "Statue of Jamsetji Nusserwanji Tata at IISc Bangalore." },
    { src: "assets/img/web/iiser-badminton.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "Team photo after winning a badminton match at IISER Kolkata." },
    { src: "assets/img/web/iucaa-galileo.jpg", tag: "Campus life", place: "IUCAA, Pune", caption: "Coffee with Galileo at IUCAA, Pune." },
    { src: "assets/img/web/iiser-campus.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "Nature blessing IISER Kolkata." },
    { src: "assets/img/web/iucaa-trek3.jpg", tag: "Travel", place: "Andharban, near Pune", caption: "Trekking at Andharban jungle, near Pune." },
    { src: "assets/img/web/iiser-farewell.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "Giving farewell to our seniors at IISER Kolkata." },
    { src: "assets/img/web/sikkim-lake.jpg", tag: "Travel", place: "Khecheopalri Lake, Sikkim", caption: "Khecheopalri Lake, Sikkim." },
    { src: "assets/img/web/iiser-hostel.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "A regular birthday party at the hostel." },
    { src: "assets/img/web/iucaa-main.jpg", tag: "Campus life", place: "IUCAA, Pune", caption: "In front of IUCAA's main building." },
    { src: "assets/img/web/tamil-andal2.jpg", tag: "Travel", place: "Srivilliputhur, Tamil Nadu", caption: "Andal Temple, Srivilliputhur." },
    { src: "assets/img/web/iiser-gate.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "IISER Kolkata's main gate." },
    { src: "assets/img/web/iiser-birthday.jpg", tag: "Campus life", place: "IISER Kolkata", caption: "Late-night birthday celebrations at IISER Kolkata." }
  ]
};
