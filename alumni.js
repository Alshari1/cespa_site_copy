

/* ─── BANNER COLORS (cycles through 4) ─── */
const BANNERS = [
    'background: linear-gradient(120deg, #1a3d2b, #2d6a4f)',
    'background: linear-gradient(120deg, #1e3a5f, #185fa5)',
    'background: linear-gradient(120deg, #3b1a1a, #8b3030)',
    'background: linear-gradient(120deg, #2d1a4f, #533ab5)',
];

/* ─── ALUMNI DATA ─── */
const ALUMNI = [
    {
        id: 1,
        name: "Dr. Rafiqul Islam",
        initials: "RI",
        batch: "KUET CE '08",
        designation: "Senior Structural Engineer",
        company: "AECOM Bangladesh",
        location: "Dhaka, Bangladesh",
        sector: "industry",
        sectorLabel: "Industry",
        sectorPill: "pill-green",
        bannerIdx: 0,
        bio: "Rafiqul specialises in seismic-resistant high-rise structural systems. He led the structural design of four landmark towers in Dhaka and serves as a visiting critic at KUET.",
        info: {
            "Graduation": "KUET, 2008",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "M.Sc. Structural Eng., BUET",
            "PhD": "Tokyo University, 2015",
            "Years Exp.": "16 years",
            "Current Role": "Senior Structural Engineer",
        },
        achievements: ["Gold Medal — IEB Annual Award 2021", "Best Paper — ASCE Bangladesh 2019", "Padma Bridge Technical Review Panel"],
        skills: ["Seismic Design", "ETABS", "SAFE", "High-rise Structures", "BIM", "Code Review"],
        email: "r.islam@aecom.com",
        linkedin: "#",
    },
    {
        id: 2,
        name: "Sabrina Mahi",
        initials: "SM",
        batch: "KUET CE '11",
        designation: "Urban Planning Lead",
        company: "Khulna City Corporation",
        location: "Khulna, Bangladesh",
        sector: "government",
        sectorLabel: "Government",
        sectorPill: "pill-amber",
        bannerIdx: 2,
        bio: "Sabrina leads the urban master planning division at KCC, overseeing flood-resilient city design projects. She is a prominent advocate for climate-adaptive infrastructure in coastal Bangladesh.",
        info: {
            "Graduation": "KUET, 2011",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "M.Urb.Plan., BUET",
            "Current Role": "Urban Planning Lead",
            "Years Exp.": "13 years",
            "Specialisation": "Urban & Coastal Planning",
        },
        achievements: ["UN-Habitat Young Leader Award 2020", "Khulna Flood Resilience Master Plan Author", "WB-funded Coastal Infrastructure Grant Recipient"],
        skills: ["Urban Master Planning", "GIS", "Flood Modelling", "Climate Adaptation", "Policy Design"],
        email: "smahi@kcc.gov.bd",
        linkedin: "#",
    },
    {
        id: 3,
        name: "Tanvir Ahmed",
        initials: "TA",
        batch: "KUET CE '14",
        designation: "Asst. Professor",
        company: "BUET",
        location: "Dhaka, Bangladesh",
        sector: "academia",
        sectorLabel: "Academia",
        sectorPill: "pill-blue",
        bannerIdx: 3,
        bio: "Tanvir is a transport engineering researcher whose work on autonomous vehicle infrastructure policy has been cited in national transport planning documents. He supervises 6 graduate students.",
        info: {
            "Graduation": "KUET, 2014",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "M.Sc. Transport Eng., KUET",
            "PhD": "TU Delft, 2020",
            "Current Role": "Asst. Professor, BUET",
            "Publications": "14 journal papers",
        },
        achievements: ["TU Delft Best PhD Thesis — Transport 2020", "CESPA Alumni Excellence Award 2022", "National Transport Policy Advisory Panel Member"],
        skills: ["Transport Modelling", "VISSIM", "Autonomous Vehicles", "Traffic Engineering", "Research Methods"],
        email: "tanvir@ce.buet.ac.bd",
        linkedin: "#",
    },
    {
        id: 4,
        name: "Nusrat Jahan",
        initials: "NJ",
        batch: "KUET CE '10",
        designation: "Environmental Consultant",
        company: "IUCN Bangladesh",
        location: "Dhaka, Bangladesh",
        sector: "research",
        sectorLabel: "Research",
        sectorPill: "pill-green",
        bannerIdx: 1,
        bio: "Nusrat works at the intersection of environmental impact assessment and policy. Her wetland conservation research in the Sundarbans buffer zone has directly influenced protected-area boundaries.",
        info: {
            "Graduation": "KUET, 2010",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "M.Sc. Environmental Eng., AIT Thailand",
            "Current Role": "Senior Environmental Consultant",
            "Years Exp.": "14 years",
            "Focus Area": "Wetland & Coastal Ecology",
        },
        achievements: ["IUCN Asia-Pacific Research Grant 2022", "Sundarbans EIA Lead Consultant", "Govt. ECC Accredited Assessor"],
        skills: ["EIA", "Wetland Ecology", "ESIA Policy", "GIS Mapping", "Biodiversity Assessment"],
        email: "n.jahan@iucn.org",
        linkedin: "#",
    },
    {
        id: 5,
        name: "Rezaul Karim",
        initials: "RK",
        batch: "KUET CE '12",
        designation: "Project Director",
        company: "LGED, Bangladesh",
        location: "Mymensingh, Bangladesh",
        sector: "government",
        sectorLabel: "Government",
        sectorPill: "pill-amber",
        bannerIdx: 2,
        bio: "Rezaul directs rural infrastructure development across 14 upazilas in Mymensingh division. His work has brought all-weather road connectivity to over 300 remote villages.",
        info: {
            "Graduation": "KUET, 2012",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "PGD Project Mgmt., IBA Dhaka",
            "Current Role": "Project Director, LGED",
            "Years Exp.": "12 years",
            "Division": "Rural Infrastructure",
        },
        achievements: ["National Rural Connectivity Award 2023", "ADB-funded Project Delivery — Zero Delay", "300 Villages All-weather Road Initiative Lead"],
        skills: ["Project Management", "Rural Infrastructure", "Procurement", "Contract Administration", "ADB/WB Compliance"],
        email: "r.karim@lged.gov.bd",
        linkedin: "#",
    },
    {
        id: 6,
        name: "Lamia Sultana",
        initials: "LS",
        batch: "KUET CE '15",
        designation: "Structural Analyst",
        company: "WSP Global, Canada",
        location: "Toronto, Canada",
        sector: "industry",
        sectorLabel: "Industry",
        sectorPill: "pill-green",
        bannerIdx: 0,
        bio: "Lamia is part of WSP's bridge and heavy structures team in Toronto. She transitioned internationally after her M.Eng at UBC and focuses on long-span bridge fatigue analysis.",
        info: {
            "Graduation": "KUET, 2015",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "M.Eng. Structural, UBC Vancouver",
            "Current Role": "Structural Analyst, WSP",
            "Location": "Toronto, Canada",
            "Years Exp.": "9 years",
        },
        achievements: ["WSP Innovation Award — Fatigue Model 2023", "Professional Engineer (P.Eng.) — Ontario", "CESPA International Alumni Ambassador"],
        skills: ["Bridge Engineering", "Fatigue Analysis", "ANSYS", "Finite Element Modelling", "AASHTO Code"],
        email: "lamia.sultana@wsp.com",
        linkedin: "#",
    },
    {
        id: 7,
        name: "Mahbub Hossain",
        initials: "MH",
        batch: "KUET CE '09",
        designation: "Head of Geotech Division",
        company: "Sheltech Consultants",
        location: "Dhaka, Bangladesh",
        sector: "industry",
        sectorLabel: "Industry",
        sectorPill: "pill-green",
        bannerIdx: 0,
        bio: "Mahbub leads geotechnical investigations for large-scale commercial and infrastructure projects. He has overseen subsurface investigations for over 80 projects in Bangladesh.",
        info: {
            "Graduation": "KUET, 2009",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "M.Sc. Geotechnical Eng., BUET",
            "Current Role": "Head of Geotech, Sheltech",
            "Years Exp.": "15 years",
            "Projects Led": "80+",
        },
        achievements: ["IEB Gold Medal — Geotechnical Practice 2022", "Keynote Speaker — GeoAsia Conference 2021", "80+ Major Projects Delivered"],
        skills: ["Soil Investigation", "Foundation Design", "Pile Testing", "PLAXIS", "Slope Stability"],
        email: "m.hossain@sheltech.com.bd",
        linkedin: "#",
    },
    {
        id: 8,
        name: "Dr. Farida Akter",
        initials: "FA",
        batch: "KUET CE '07",
        designation: "Professor & Dept. Head",
        company: "KUET",
        location: "Khulna, Bangladesh",
        sector: "academia",
        sectorLabel: "Academia",
        sectorPill: "pill-blue",
        bannerIdx: 3,
        bio: "Dr. Farida heads the Water Resources Engineering division at KUET. Her research on delta hydrology and tidal flooding models has been adopted by BWDB for coastal flood forecasting.",
        info: {
            "Graduation": "KUET, 2007",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "M.Sc. Water Resources, IHE Delft",
            "PhD": "Wageningen University, 2014",
            "Current Role": "Professor & Head, WRE Div.",
            "Publications": "28 peer-reviewed papers",
        },
        achievements: ["BWDB National Water Research Award 2023", "EU Horizon Collaborative Project Co-PI", "Delta-Net Global Researcher of the Year 2021"],
        skills: ["Hydraulic Modelling", "HEC-RAS", "Tidal Flooding", "SWMM", "Delta Hydrology", "Remote Sensing"],
        email: "farida@ce.kuet.ac.bd",
        linkedin: "#",
    },
    {
        id: 9,
        name: "Omar Faruque",
        initials: "OF",
        batch: "KUET CE '16",
        designation: "BIM Coordinator",
        company: "Arup, Singapore",
        location: "Singapore",
        sector: "industry",
        sectorLabel: "Industry",
        sectorPill: "pill-green",
        bannerIdx: 1,
        bio: "Omar coordinates BIM delivery for large-scale mixed-use developments across Southeast Asia. He holds BIM Level 2 certification and is an Autodesk Revit Certified Professional.",
        info: {
            "Graduation": "KUET, 2016",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "M.Sc. BIM & Digital Constr., UCL",
            "Current Role": "BIM Coordinator, Arup",
            "Location": "Singapore",
            "Certification": "Autodesk Revit CP",
        },
        achievements: ["Arup Digital Excellence Award 2023", "BIM Level 2 Certified", "UCL Best Dissertation — Digital Construction"],
        skills: ["Revit", "Navisworks", "BIM Management", "Digital Twins", "Clash Detection", "ISO 19650"],
        email: "omar.faruque@arup.com",
        linkedin: "#",
    },
    {
        id: 10,
        name: "Shirin Akhter",
        initials: "SA",
        batch: "KUET CE '13",
        designation: "Construction Manager",
        company: "China Railway, Bangladesh",
        location: "Dhaka, Bangladesh",
        sector: "industry",
        sectorLabel: "Industry",
        sectorPill: "pill-green",
        bannerIdx: 2,
        bio: "Shirin manages on-site construction delivery for the Dhaka MRT Line 5 project, coordinating between Chinese and Bangladeshi engineering teams on a 20-km elevated corridor.",
        info: {
            "Graduation": "KUET, 2013",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "PMP — Project Mgmt. Institute",
            "Current Role": "Construction Manager, CRRC",
            "Years Exp.": "11 years",
            "Project": "MRT Line 5, Dhaka",
        },
        achievements: ["PMP Certified — PMI 2019", "MRT Line 5 — On-Schedule Delivery Recognition", "CESPA Alumni Role Model Award 2023"],
        skills: ["Construction Management", "MS Project", "Primavera P6", "EPC Contracts", "Quality Assurance"],
        email: "shirin.akhter@crrc.com",
        linkedin: "#",
    },
    {
        id: 11,
        name: "Dipankar Paul",
        initials: "DP",
        batch: "KUET CE '06",
        designation: "Director, Infrastructure",
        company: "UNDP Bangladesh",
        location: "Dhaka, Bangladesh",
        sector: "government",
        sectorLabel: "Government",
        sectorPill: "pill-amber",
        bannerIdx: 3,
        bio: "Dipankar oversees UNDP's infrastructure resilience portfolio across Bangladesh, managing a USD 42M programme focused on climate-proof public infrastructure in disaster-prone areas.",
        info: {
            "Graduation": "KUET, 2006",
            "Degree": "B.Sc. Civil Engineering",
            "Postgrad": "M.Sc. Dev. Eng., Imperial College",
            "Current Role": "Director, Infrastructure — UNDP",
            "Years Exp.": "18 years",
            "Portfolio": "USD 42M Active",
        },
        achievements: ["UNDP Country Director Commendation 2022", "Imperial College Distinguished Alumni 2021", "40-Under-40 Engineers — Bangladesh 2018"],
        skills: ["Programme Management", "Climate Resilience", "Donor Reporting", "UN Procurement", "Disaster Risk Reduction"],
        email: "d.paul@undp.org",
        linkedin: "#",
    },
    {
        id: 12,
        name: "Chandni Rahman",
        initials: "CR",
        batch: "KUET CE '17",
        designation: "Graduate Researcher",
        company: "ETH Zurich",
        location: "Zurich, Switzerland",
        sector: "research",
        sectorLabel: "Research",
        sectorPill: "pill-green",
        bannerIdx: 1,
        bio: "Chandni is a PhD candidate at ETH Zurich, working on smart sensor-embedded concrete and structural health monitoring systems. She is supervised by Prof. Brühwiler at the MCS Lab.",
        info: {
            "Graduation": "KUET, 2017",
            "Degree": "B.Sc. Civil Engineering",
            "Current": "PhD Candidate, ETH Zurich",
            "Supervisor": "Prof. Eugen Brühwiler",
            "Research Area": "Smart Concrete & SHM",
            "Expected": "2026",
        },
        achievements: ["ETH Excellence Scholarship 2022", "Best Student Paper — IABSE 2023", "CESPA Valedictorian — Batch 2017"],
        skills: ["Structural Health Monitoring", "Smart Sensors", "MATLAB", "FRP Composites", "Finite Element Analysis"],
        email: "chandni.rahman@ethz.ch",
        linkedin: "#",
    },
];

/* ─────────── RENDER CARDS ─────────── */
const grid = document.getElementById('alumni-grid');
const countLbl = document.getElementById('count-label');
const noRes = document.getElementById('no-results');

// function initials(name) {
//     return name.split(' ').slice(0, 2).map(w => w[0]).join('');
// }

function renderCards(list) {
    grid.innerHTML = '';
    noRes.classList.toggle('visible', list.length === 0);
    countLbl.textContent = `Showing ${list.length} alumni`;

    list.forEach(a => {
        const card = document.createElement('div');
        card.className = 'alumni-card';
        card.innerHTML = `
      <div class="p-4">
        <!-- Avatar + Name -->
        <div class="flex items-center gap-3 mb-3">
          <div class="avatar-ring">${a.initials}</div>
          <div class="min-w-0">
            <p class="font-semibold text-gray-900 text-sm leading-tight truncate">${a.name}</p>
            <p class="text-xs text-gray-400 mt-0.5">${a.batch}</p>
          </div>
        </div>
 
        <!-- Role + Company -->
        <p class="text-sm font-medium text-gray-700 leading-snug">${a.designation}</p>
        <p class="text-xs text-gray-400 mt-0.5 flex items-center gap-1 truncate">
          <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"/></svg>
          ${a.company}
        </p>
 
        <!-- Location -->
        <p class="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
          <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
          ${a.location}
        </p>
 
        <!-- Divider -->
        <div class="border-t border-gray-100 my-3"></div>
 
        <!-- Sector pill + CTA -->
        <div class="flex items-center justify-between">
          <span class="pill ${a.sectorPill}">${a.sectorLabel}</span>
          <button
            class="text-xs font-semibold flex items-center gap-1 transition-colors hover:opacity-80"
            style="color:var(--gm);"
            onclick="openModal(${a.id})">
            View Profile
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
          </button>
        </div>
      </div>`;

        card.addEventListener('click', () => openModal(a.id));
        grid.appendChild(card);
    });
}

/* ─────────── MODAL ─────────── */
function openModal(id) {
    const a = ALUMNI.find(x => x.id === id);
    if (!a) return;
    /* Info grid */
    const infoGrid = document.getElementById('modal-info-grid');
    infoGrid.innerHTML = `
    <p> ${a.bio} </P>
    `

    /* Achievements */
    document.getElementById('modal-achievements').innerHTML =
        a.achievements.map(t => `<span class="achievement-tag">${t}</span>`).join('');

    /* Skills */
    document.getElementById('modal-skills').innerHTML =
        a.skills.map(s => `<span class="skill-tag">${s}</span>`).join('');

    /* Contact row */
    document.getElementById('modal-contact-row').innerHTML = `
    <p
       class="btn btn-sm rounded-full gap-1.5 text-xs font-semibold"
       style="background:var(--ga-light);color:var(--gm);border:none;">
       <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
       ${a.email}
    </p>
    <p
       class="btn btn-sm rounded-full gap-1.5 text-xs font-semibold"
       style="background:#dbeafe;color:#1e40af;border:none;">
       <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
       ${a?.mobile}
    </p>
    <p
       class="btn btn-sm rounded-full gap-1.5 text-xs font-semibold"
       style="background:#dbeafe;color:#1e40af;border:none;">
       <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
       ${a.linkedin}
    </p>
    
    `;

    document.getElementById('alumni-modal').showModal();
}

/* ─────────── FILTER + SEARCH ─────────── */
let activeFilter = 'all';
let searchQuery = '';

function applyFilters() {
    let list = ALUMNI;
    if (activeFilter !== 'all') list = list.filter(a => a.sector === activeFilter);
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list.filter(a =>
            a.name.toLowerCase().includes(q) ||
            a.company.toLowerCase().includes(q) ||
            a.designation.toLowerCase().includes(q) ||
            a.location.toLowerCase().includes(q) ||
            a.batch.toLowerCase().includes(q)
        );
    }
    renderCards(list);
}

document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        applyFilters();
    });
});

document.getElementById('search-input').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    applyFilters();
});

/* ─────────── INIT ─────────── */
renderCards(ALUMNI);
