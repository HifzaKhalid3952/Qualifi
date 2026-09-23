import { Qualification, Sector, ApprovedCentre, SectorCluster } from '../types/qualification';

export const SECTORS: Sector[] = [
  {
    id: 'business-and-management',
    name: 'BUSINESS AND MANAGEMENT',
    description: 'Ofqual-regulated leadership, enterprise, executive, and business qualifications from Level 3 to Level 8 Doctorate level.',
    qualificationCount: 21,
  },
  {
    id: 'marketing',
    name: 'MARKETING',
    description: 'Strategic, digital, and international marketing credentials equipping professionals with omnichannel growth skills.',
    qualificationCount: 3,
  },
  {
    id: 'health-and-social-care',
    name: 'HEALTH AND SOCIAL CARE',
    description: 'Healthcare administration, patient-centred care, and clinical operations leadership pathways from Level 3 to Level 7.',
    qualificationCount: 4,
  },
  {
    id: 'psychology',
    name: 'PSYCHOLOGY',
    description: 'Applied psychological science, behavioural insights, and mental wellbeing qualifications.',
    qualificationCount: 3,
  },
  {
    id: 'health-and-safety-management',
    name: 'HEALTH AND SAFETY MANAGEMENT',
    description: 'IOSH and international safety benchmarks for industrial, corporate, and operational risk mitigation.',
    qualificationCount: 2,
  },
  {
    id: 'hospitality-and-tourism-management',
    name: 'HOSPITALITY AND TOURISM MANAGEMENT',
    description: 'Global hotel, resort, destination management, and luxury hospitality executive certifications.',
    qualificationCount: 3,
  },
  {
    id: 'human-resource-management',
    name: 'HUMAN RESOURCE MANAGEMENT',
    description: 'People leadership, talent acquisition, strategic organisational change, and employment law diplomas.',
    qualificationCount: 3,
  },
  {
    id: 'accounting-and-finance',
    name: 'ACCOUNTING AND FINANCE',
    description: 'Corporate finance, managerial accounting, auditing, and investment strategy regulated qualifications.',
    qualificationCount: 3,
  },
  {
    id: 'law-and-legal-services',
    name: 'LAW AND LEGAL SERVICES',
    description: 'International commercial jurisprudence, legal systems, intellectual property, and contract governance.',
    qualificationCount: 3,
  },
  {
    id: 'information-technology',
    name: 'INFORMATION TECHNOLOGY',
    description: 'Software engineering, database architecture, cloud infrastructure, and IT enterprise management.',
    qualificationCount: 4,
  },
  {
    id: 'data-science',
    name: 'DATA SCIENCE',
    description: 'Big data analytics, machine learning, predictive modelling, and applied artificial intelligence diplomas.',
    qualificationCount: 2,
  },
  {
    id: 'cyber-security',
    name: 'CYBER SECURITY',
    description: 'Information assurance, penetration testing, threat intelligence, and zero-trust security frameworks.',
    qualificationCount: 4,
  },
  {
    id: 'logistics-and-supply-chain-management',
    name: 'LOGISTICS AND SUPPLY CHAIN MANAGEMENT',
    description: 'Global logistics, procurement, freight operations, and supply chain strategy.',
    qualificationCount: 3,
  },
  {
    id: 'early-years-education',
    name: 'EARLY YEARS EDUCATION',
    description: 'Child development, early pedagogical methodologies, and learning framework administration.',
    qualificationCount: 3,
  },
  {
    id: 'education-and-training',
    name: 'EDUCATION AND TRAINING',
    description: 'Pedagogy, curriculum design, assessment moderation, and educational leadership certifications.',
    qualificationCount: 3,
  },
  {
    id: 'teaching-and-coaching',
    name: 'TEACHING AND COACHING',
    description: 'Professional teaching methodologies, pedagogical mentoring, and instructional excellence.',
    qualificationCount: 2,
  },
  {
    id: 'sports-coaching',
    name: 'SPORTS COACHING',
    description: 'Athletic performance development, sports science, coaching psychology, and tactical training.',
    qualificationCount: 2,
  },
  {
    id: 'aesthetic-practice',
    name: 'AESTHETIC PRACTICE',
    description: 'Clinical aesthetics, non-surgical cosmetic interventions, dermal science, and patient safety protocols.',
    qualificationCount: 3,
  },
  {
    id: 'beauty-therapy',
    name: 'BEAUTY THERAPY',
    description: 'Advanced cosmetology, skincare physiology, spa therapies, and salon management.',
    qualificationCount: 3,
  },
  {
    id: 'hairdressing',
    name: 'HAIRDRESSING',
    description: 'Creative styling, chemical hair treatments, trichology, and salon business management.',
    qualificationCount: 2,
  },
  {
    id: 'wellness',
    name: 'WELLNESS',
    description: 'Holistic health, nutrition coaching, stress resilience, and integrative wellness therapies.',
    qualificationCount: 2,
  },
];

export const SECTOR_CLUSTERS: SectorCluster[] = [
  // 1. Business cluster: Business and Management ↔ Human Resource Management ↔ Marketing ↔ Accounting and Finance
  {
    id: 'cluster-business',
    name: 'BUSINESS & MANAGEMENT, HR, MARKETING & FINANCE',
    clusterType: 'cluster',
    clusterSummary: 'Core business suite sharing managerial, commercial, financial, and people leadership modules.',
    sectorIds: [
      'business-and-management',
      'human-resource-management',
      'marketing',
      'accounting-and-finance'
    ],
    subSectors: [
      { id: 'business-and-management', name: 'Business and Management' },
      { id: 'marketing', name: 'Marketing' },
      { id: 'human-resource-management', name: 'Human Resource Management' },
      { id: 'accounting-and-finance', name: 'Accounting and Finance' }
    ]
  },
  // 2. Tech cluster: Information Technology ↔ Cyber Security ↔ Data Science
  {
    id: 'cluster-technology',
    name: 'INFORMATION TECHNOLOGY, CYBER SECURITY & DATA SCIENCE',
    clusterType: 'cluster',
    clusterSummary: 'Digital & Computing suite sharing system architecture, cyber intelligence, and data analytics.',
    sectorIds: [
      'information-technology',
      'cyber-security',
      'data-science'
    ],
    subSectors: [
      { id: 'information-technology', name: 'Information Technology' },
      { id: 'cyber-security', name: 'Cyber Security' },
      { id: 'data-science', name: 'Data Science' }
    ]
  },
  // 3. Education cluster: Early Years Education ↔ Education and Training ↔ Teaching and Coaching
  {
    id: 'cluster-education',
    name: 'EDUCATION, TEACHING & EARLY YEARS',
    clusterType: 'cluster',
    clusterSummary: 'Pedagogy, instructional excellence, educational leadership, and early years development.',
    sectorIds: [
      'education-and-training',
      'teaching-and-coaching',
      'early-years-education'
    ],
    subSectors: [
      { id: 'education-and-training', name: 'Education and Training' },
      { id: 'teaching-and-coaching', name: 'Teaching and Coaching' },
      { id: 'early-years-education', name: 'Early Years Education' }
    ]
  },
  // 4. Care/people cluster: Health and Social Care ↔ Psychology ↔ Health and Safety Management
  {
    id: 'cluster-care-people',
    name: 'HEALTH & SOCIAL CARE, PSYCHOLOGY & HEALTH AND SAFETY',
    clusterType: 'cluster',
    clusterSummary: 'Clinical care, behavioural psychological science, and occupational risk mitigation.',
    sectorIds: [
      'health-and-social-care',
      'psychology',
      'health-and-safety-management'
    ],
    subSectors: [
      { id: 'health-and-social-care', name: 'Health and Social Care' },
      { id: 'psychology', name: 'Psychology' },
      { id: 'health-and-safety-management', name: 'Health and Safety Management' }
    ]
  },
  // 5. Beauty/wellness cluster: Aesthetic Practice ↔ Beauty Therapy ↔ Hairdressing ↔ Wellness
  {
    id: 'cluster-beauty-wellness',
    name: 'AESTHETIC PRACTICE, BEAUTY THERAPY, HAIRDRESSING & WELLNESS',
    clusterType: 'cluster',
    clusterSummary: 'Specialist clinical aesthetics, cosmetic beauty therapy, hair styling, and holistic wellness.',
    sectorIds: [
      'aesthetic-practice',
      'beauty-therapy',
      'hairdressing',
      'wellness'
    ],
    subSectors: [
      { id: 'aesthetic-practice', name: 'Aesthetic Practice' },
      { id: 'beauty-therapy', name: 'Beauty Therapy' },
      { id: 'hairdressing', name: 'Hairdressing' },
      { id: 'wellness', name: 'Wellness' }
    ]
  },
  // 6. Service cluster: Hospitality and Tourism Management
  {
    id: 'cluster-hospitality',
    name: 'HOSPITALITY AND TOURISM MANAGEMENT',
    clusterType: 'cluster',
    clusterSummary: 'Global resort, hotel, event, and destination service management.',
    sectorIds: [
      'hospitality-and-tourism-management'
    ],
    subSectors: [
      { id: 'hospitality-and-tourism-management', name: 'Hospitality and Tourism Management' }
    ]
  },
  // 7. Standalone: Law and Legal Services (strictly separate regulatory pathway)
  {
    id: 'cluster-law',
    name: 'LAW AND LEGAL SERVICES',
    clusterType: 'standalone',
    clusterSummary: 'Independent regulatory legal framework (SQE / jurisprudence governance).',
    sectorIds: [
      'law-and-legal-services'
    ],
    subSectors: [
      { id: 'law-and-legal-services', name: 'Law and Legal Services' }
    ]
  },
  // 8. Standalone: Sports Coaching (distinct UK Coaching / NGB accreditation)
  {
    id: 'cluster-sports-coaching',
    name: 'SPORTS COACHING',
    clusterType: 'standalone',
    clusterSummary: 'Independent athletic development and sport-specific National Governing Body accreditation.',
    sectorIds: [
      'sports-coaching'
    ],
    subSectors: [
      { id: 'sports-coaching', name: 'Sports Coaching' }
    ]
  },
  // 9. Standalone: Logistics and Supply Chain Management (operationally distinct)
  {
    id: 'cluster-logistics',
    name: 'LOGISTICS AND SUPPLY CHAIN MANAGEMENT',
    clusterType: 'standalone',
    clusterSummary: 'Independent operational logistics, international procurement, and freight infrastructure.',
    sectorIds: [
      'logistics-and-supply-chain-management'
    ],
    subSectors: [
      { id: 'logistics-and-supply-chain-management', name: 'Logistics and Supply Chain Management' }
    ]
  }
];

export const QUALIFICATIONS: Qualification[] = [
  // Business and Management
  {
    id: 'qualifi-level-3-diploma-in-business-management',
    title: 'Qualifi Level 3 Diploma in Business Management',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 3,
    ofqualQN: '603/1102/2',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 60,
    tqt: 600,
    glh: 360,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'The Qualification has been created to develop and reward those learners who are looking to or already have chosen a career in a business-related sector. The rationale of the programme is to provide a career path for learners who wish to develop their care capabilities within the business sector. The outcome of the Diploma, which is a recognised UK Qualification, is for learners to develop the skills required by organisations globally.',
    aims: [
      'Understand core business environments and competitive organizational structures.',
      'Develop fundamental competence in business communication, marketing, and accounting.',
      'Acquire academic study and critical analysis capabilities needed for higher education.'
    ],
    entryRequirements: [
      'Learners who have completed Secondary Education (e.g. GCSEs or equivalent).',
      'Minimum age: 16 years.',
      'English language proficiency equivalent to IELTS 5.5 or CEFR B2.'
    ],
    progression: [
      'Qualifi Level 4 Certificate or first of 3 year Honours Degree at UK University'
    ],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University', 'University of Cumbria'],
    assessmentFormat: '100% assignment based. Portfolio of academic and workplace evidence with internal and external moderation. No examinations.',
    units: [
      { code: 'BM301', title: 'An Introduction to the Business Environment', level: 3, credits: 10, glh: 60, isMandatory: true, description: 'Examines private, public, and voluntary sectors, market forces, and stakeholder relationships.' },
      { code: 'BM302', title: 'Business Resources and Financial Performance', level: 3, credits: 10, glh: 60, isMandatory: true, description: 'Introduces financial statements, balance sheets, profit & loss, and operational budgeting.' },
      { code: 'BM303', title: 'Introduction to Marketing & Customer Engagement', level: 3, credits: 10, glh: 60, isMandatory: true, description: 'Covers the marketing mix (4Ps/7Ps), market research, segmentation, and consumer behaviour.' },
      { code: 'BM304', title: 'Human Resource Operations in Business', level: 3, credits: 10, glh: 60, isMandatory: true, description: 'Explores workforce planning, recruitment, employee motivation, and UK statutory workplace rights.' },
      { code: 'BM305', title: 'Business Communication and Information Systems', level: 3, credits: 10, glh: 60, isMandatory: true, description: 'Focuses on executive reporting, digital tools, presentation skills, and data handling.' },
      { code: 'BM306', title: 'Ethics and Corporate Social Responsibility', level: 3, credits: 10, glh: 60, isMandatory: true, description: 'Evaluates environmental sustainability, governance standards, and organizational ethics.' },
    ]
  },
  {
    id: 'qualifi-level-3-diploma-in-introduction-to-management',
    title: 'Qualifi Level 3 Diploma in Introduction to Management',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 3,
    ofqualQN: '603/4373/4',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 60,
    tqt: 600,
    glh: 360,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Introduces foundational management principles, team coordination, and leadership in organizational environments.',
    aims: ['Understand basic management responsibilities', 'Foster operational performance'],
    entryRequirements: ['Secondary education certificate', 'Age 16+'],
    progression: ['Progression to Qualifi Level 4 Diploma in Business Management'],
    universityPartners: ['University of Chichester'],
    assessmentFormat: 'Assignment based portfolio',
    units: [
      { code: 'IM301', title: 'Management Roles & Responsibilities', level: 3, credits: 15, glh: 90, isMandatory: true, description: 'Roles and delegation.' },
      { code: 'IM302', title: 'Team Communication', level: 3, credits: 15, glh: 90, isMandatory: true, description: 'Workplace coordination and communication.' }
    ]
  },
  {
    id: 'qualifi-level-3-integrated-diploma-in-business-and-management',
    title: 'Qualifi Level 3 Integrated Diploma in Business and Management',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 3,
    ofqualQN: '603/4730/2',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'A complete 120-credit integrated pathway covering enterprise, finance, marketing, and business administration.',
    aims: ['Provide full university foundation training', 'Develop core commercial fluency'],
    entryRequirements: ['GCSEs / Secondary Schooling', 'Age 16+'],
    progression: ['Direct Year 1 UK Bachelor Degree admission or Qualifi Level 4'],
    universityPartners: ['Anglia Ruskin University', 'University of Cumbria'],
    assessmentFormat: 'Assignment portfolio',
    units: [
      { code: 'IDBM301', title: 'Business Strategy & Environment', level: 3, credits: 30, glh: 150, isMandatory: true, description: 'Commercial environments and economic systems.' }
    ]
  },
  {
    id: 'qualifi-level-3-diploma-in-business-innovation-and-entrepreneurship',
    title: 'Qualifi Level 3 Diploma in Business Innovation and Entrepreneurship',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 3,
    ofqualQN: '603/1051/0',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 60,
    tqt: 600,
    glh: 360,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Specialist curriculum designed for aspiring entrepreneurs, startup founders, and innovators.',
    aims: ['Cultivate entrepreneurship skills', 'Build viable commercial startup models'],
    entryRequirements: ['Secondary education certificate', 'Age 16+'],
    progression: ['Qualifi Level 4 Diploma in Entrepreneurship'],
    universityPartners: ['University of Chichester'],
    assessmentFormat: 'Business plans and pitch proposals',
    units: [
      { code: 'BIE301', title: 'Entrepreneurial Mindset & Opportunity', level: 3, credits: 20, glh: 120, isMandatory: true, description: 'Idea generation and validation.' }
    ]
  },
  {
    id: 'qualifi-level-3-extended-diploma-in-business-management-and-study-skills',
    title: 'Qualifi Level 3 Extended Diploma in Business, Management and Study Skills',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 3,
    ofqualQN: '603/7380/5',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equips international and local learners with the academic research rigor and business knowledge needed for higher education success.',
    aims: ['Build university study competence', 'Deliver foundation in management theory'],
    entryRequirements: ['High School Diploma / GCSEs', 'Age 16+'],
    progression: ['Year 1 UK Bachelor Degree or Level 4 Diploma'],
    universityPartners: ['University of Northampton'],
    assessmentFormat: 'Assignment portfolio',
    units: [
      { code: 'BMS301', title: 'Academic Study & Analysis', level: 3, credits: 20, glh: 100, isMandatory: true, description: 'Academic referencing and dissertation foundations.' }
    ]
  },
  {
    id: 'qualifi-level-3-extended-diploma-in-business-management',
    title: 'Qualifi Level 3 Extended Diploma in Business Management',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 3,
    ofqualQN: '610/5596/7',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Full 120-credit extended diploma providing deep vocational knowledge across all operational areas of modern commerce.',
    aims: ['Prepare for undergraduate university study', 'Acquire applied management skills'],
    entryRequirements: ['Secondary education certificate', 'Age 16+'],
    progression: ['Year 1 UK Bachelor Degree or Level 4 Diploma'],
    universityPartners: ['University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Assignment portfolio',
    units: [
      { code: 'EBM301', title: 'Business Structure and Operations', level: 3, credits: 20, glh: 100, isMandatory: true, description: 'Core operations and stakeholder management.' }
    ]
  },
  {
    id: 'qualifi-level-3-extended-diploma-in-business-and-law',
    title: 'Qualifi Level 3 Extended Diploma in Business and Law',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 3,
    ofqualQN: '610/5595/5',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Interdisciplinary diploma blending commercial enterprise fundamentals with the English legal system, contract law, and business regulation.',
    aims: ['Gain foundational legal literacy', 'Prepare for LLB or Business Law degrees'],
    entryRequirements: ['Secondary education certificate', 'Age 16+'],
    progression: ['Direct entry into Year 1 of UK LLB Law or BA Business Law degrees'],
    universityPartners: ['University of Northampton', 'Arden University'],
    assessmentFormat: 'Legal problem briefs and case analysis',
    units: [
      { code: 'EBL301', title: 'English Legal System & Contracts', level: 3, credits: 20, glh: 100, isMandatory: true, description: 'Statutory interpretation and contract principles.' }
    ]
  },
  {
    id: 'qualifi-level-4-diploma-in-entrepreneurship',
    title: 'Qualifi Level 4 Diploma in Entrepreneurship',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 4,
    ofqualQN: '603/4238/9',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equivalent to Year 1 of a UK Bachelor\'s Degree, focusing on new venture creation, market penetration, and startup finance.',
    aims: ['Lead early-stage venture operations', 'Secure startup funding and manage commercial growth'],
    entryRequirements: ['Level 3 qualification or business experience', 'Age 18+'],
    progression: ['Year 2 of UK Honours Degree or Qualifi Level 5 Diploma'],
    universityPartners: ['University of Chichester'],
    assessmentFormat: 'Venture proposals and market research dossiers',
    units: [
      { code: 'ENT401', title: 'Enterprise Development & Scaling', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Growth planning and customer discovery.' }
    ]
  },
  {
    id: 'qualifi-l4-business-management',
    title: 'Qualifi Level 4 Diploma in Business Management',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 4,
    ofqualQN: '601/6048/2',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'The Level 4 Diploma in Business Management is equivalent to Year 1 of a three-year UK Bachelor\'s Degree. Designed to give learners analytical management competence and enterprise decision-making acumen.',
    aims: [
      'Develop managerial decision-making skills across international commercial contexts.',
      'Critically analyze communication, leadership models, and corporate financial statements.',
      'Prepare candidates for middle-management roles or progression to Level 5.'
    ],
    entryRequirements: [
      'Level 3 qualification (such as A-Levels, BTEC, or Qualifi Level 3 Diploma).',
      'Mature learners (over 21) with at least 2 years of relevant managerial or business work experience.',
      'English proficiency: IELTS 5.5 or equivalent.'
    ],
    progression: [
      'Direct progression to Qualifi Level 5 Diploma in Business Management.',
      'Direct entry to Year 2 of a UK Bachelor\'s Honours Degree.'
    ],
    universityPartners: ['University of Northampton', 'Anglia Ruskin University', 'Arden University'],
    assessmentFormat: 'Assignment-based evaluation for each individual unit. Internal verification with external moderation by Qualifi examiners.',
    units: [
      { code: 'BUS401', title: 'Communications in Organisations', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Internal and external business communication channels and corporate reputation.' },
      { code: 'BUS402', title: 'Leadership and the Organisation', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Modern management models, transformational leadership, and team dynamics.' },
      { code: 'BUS403', title: 'Financial Awareness and Decision Making', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Cost accounting, investment appraisal, cashflow forecasting, and financial metrics.' },
      { code: 'BUS404', title: 'Managing People in Organisations', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Employment relations, performance appraisal systems, and retention strategies.' },
      { code: 'BUS405', title: 'Operating in a Global Interactive Environment', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Global trade agreements, cross-cultural negotiation, and multinational expansion.' },
      { code: 'BUS406', title: 'Business Mathematics and Quantitative Analytics', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Statistical decision models, regression, forecasting, and data visualization.' },
    ]
  },
  {
    id: 'qualifi-level-4-diploma-in-innovation-and-future-foresight',
    title: 'Qualifi Level 4 Diploma in Innovation and Future Foresight',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 4,
    ofqualQN: '610/2084/9',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Cutting-edge diploma covering future trends forecasting, technological disruption, scenario planning, and innovation ecosystems.',
    aims: ['Anticipate macro-trends and disruptions', 'Design proactive innovation strategies'],
    entryRequirements: ['Level 3 qualification or work experience', 'Age 18+'],
    progression: ['Level 5 Diploma in Business or Year 2 Degree'],
    universityPartners: ['University of Chichester'],
    assessmentFormat: 'Future scenario reports and innovation portfolios',
    units: [
      { code: 'IFF401', title: 'Foresight Methodologies', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Trend mapping, Delphi method, and horizon scanning.' }
    ]
  },
  {
    id: 'qualifi-level-5-diploma-in-business-enterprise',
    title: 'Qualifi Level 5 Diploma in Business Enterprise',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 5,
    ofqualQN: '601/6050/0',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equivalent to Year 2 of a UK Bachelor\'s Degree, focusing on small and medium enterprise governance, commercial operations, and scaling.',
    aims: ['Direct enterprise operations', 'Formulate SME growth strategies'],
    entryRequirements: ['Qualifi Level 4 or Year 1 Degree credit (120 credits)', 'Age 19+'],
    progression: ['Final Year (Level 6) BA (Hons) Degree Top-Up at UK Universities'],
    universityPartners: ['Anglia Ruskin University', 'University of Sunderland'],
    assessmentFormat: 'Assignment portfolio',
    units: [
      { code: 'BE501', title: 'Enterprise Growth Management', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Managing capacity, capital constraints, and scaling hurdles.' }
    ]
  },
  {
    id: 'qualifi-l5-business-management',
    title: 'Qualifi Level 5 Diploma in Business Management',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 5,
    ofqualQN: '601/6049/4',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'The Level 5 Diploma in Business Management is equivalent to Year 2 of a UK Bachelor\'s Degree (Higher National Diploma or Foundation Degree). It provides advanced functional skills for organizational management.',
    aims: [
      'Enable learners to formulate tactical and strategic business solutions.',
      'Lead cross-disciplinary operational teams and manage organizational change.',
      'Bridge the gap between intermediate management and top-up bachelor degree studies.'
    ],
    entryRequirements: [
      'Qualifi Level 4 Diploma in Business Management or equivalent HNC/Year 1 Degree credit (120 credits at Level 4).',
      'Substantial managerial work experience evaluated via Recognition of Prior Learning (RPL).'
    ],
    progression: [
      'Direct entry to the Final Year (Level 6) BA (Hons) Business Administration Top-Up Degree at UK universities.',
      'Progression to Qualifi Level 6 Diploma in Business Administration.'
    ],
    universityPartners: ['University of Chichester', 'University of Sunderland', 'University of Bolton', 'Buckinghamshire New University'],
    assessmentFormat: 'Practical contextual assignments, case study analyses, and business proposals. Moderated by Qualifi quality teams.',
    units: [
      { code: 'BUS501', title: 'Responding to the Changing Business Environment', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'PESTLE analysis, scenario planning, and macroeconomic turbulence management.' },
      { code: 'BUS502', title: 'Strategic Marketing Management', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Positioning strategies, competitive advantage, and digital omnichannel acquisition.' },
      { code: 'BUS503', title: 'Human Resource Management and Talent Strategy', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Strategic human capital development, employee wellbeing, and change frameworks.' },
      { code: 'BUS504', title: 'Business Principles and Enterprise Innovation', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Disruptive innovation models, startup incubation, and agile product development.' },
      { code: 'BUS505', title: 'Business Law and Regulatory Compliance', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Contracts, consumer protection, intellectual property rights, and liability law.' },
      { code: 'BUS506', title: 'Research Methodology and Project Proposal', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Primary and secondary research methodologies, hypothesis testing, and academic thesis preparation.' },
    ]
  },
  {
    id: 'qualifi-level-5-extended-diploma-in-business-management',
    title: 'Qualifi Level 5 Extended Diploma in Business Management',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 5,
    ofqualQN: '610/1675/5',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 240,
    tqt: 2400,
    glh: 1200,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Full 240-credit comprehensive qualification providing total exemption from Years 1 and 2 of a UK Bachelor\'s Degree.',
    aims: ['Complete two full years of undergraduate studies', 'Fast-track to UK Final Year BA (Hons)'],
    entryRequirements: ['Level 3 qualification or equivalent', 'Age 18+'],
    progression: ['Final Year (Level 6) BA (Hons) Degree Top-Up at UK Universities'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University'],
    assessmentFormat: 'Assignment portfolio across 12 units',
    units: [
      { code: 'EDBM501', title: 'Enterprise Strategy & Leadership', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Strategic management and cross-functional leadership.' }
    ]
  },
  {
    id: 'qualifi-l6-business-administration',
    title: 'Qualifi Level 6 Diploma in Business Administration',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 6,
    ofqualQN: '603/6082/3',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'The Level 6 Diploma in Business Administration is academically equivalent to the Final Year of a UK Bachelor\'s Degree (BA Hons). It provides senior organizational analysis and executive leadership preparation.',
    aims: [
      'Foster advanced strategic planning and high-level corporate governance.',
      'Prepare graduates for direct entry into postgraduate Masters (MBA/MSc) programs.'
    ],
    entryRequirements: [
      'Qualifi Level 5 Diploma or equivalent 240 credits in higher education.',
      'Substantial management experience with proven operational track record.'
    ],
    progression: [
      'Direct entry to UK Master\'s / MBA degree top-ups or direct entry into Qualifi Level 7 Postgraduate Diplomas.'
    ],
    universityPartners: ['Anglia Ruskin University', 'University of Northampton', 'University of Cumbria'],
    assessmentFormat: 'In-depth executive business reports, strategic case briefs, and capstone research project.',
    units: [
      { code: 'BA601', title: 'Strategic Management', level: 6, credits: 20, glh: 100, isMandatory: true, description: 'Corporate strategy, diversification, and competitive market positioning.' },
      { code: 'BA602', title: 'International Business Strategy', level: 6, credits: 20, glh: 100, isMandatory: true, description: 'FDI, foreign market entry, trade barriers, and global supply chains.' },
      { code: 'BA603', title: 'Corporate Finance and Financial Valuation', level: 6, credits: 20, glh: 100, isMandatory: true, description: 'Capital structure, risk hedging, mergers & acquisitions, and valuation.' },
      { code: 'BA604', title: 'Strategic Marketing Communications', level: 6, credits: 20, glh: 100, isMandatory: true, description: 'Integrated brand communication, PR management, and reputation metrics.' },
      { code: 'BA605', title: 'Leadership and Change Management', level: 6, credits: 20, glh: 100, isMandatory: true, description: 'Kotter change model, executive coaching, and organizational psychology.' },
      { code: 'BA606', title: 'Business Research Project', level: 6, credits: 20, glh: 100, isMandatory: true, description: 'Comprehensive empirical or secondary investigation into an executive enterprise issue.' },
    ]
  },
  {
    id: 'qualifi-level-6-diploma-in-business-management-leadership-and-innovation',
    title: 'Qualifi Level 6 Diploma in Business Management, Leadership and Innovation',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 6,
    ofqualQN: '603/7473/1',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Graduate qualification fostering strategic transformation, innovation pipelines, and visionary management in competitive markets.',
    aims: ['Lead corporate innovation', 'Formulate high-level strategic transformation'],
    entryRequirements: ['Level 5 qualification or senior operational background', 'Age 20+'],
    progression: ['Direct progression to Level 7 or MBA degree'],
    universityPartners: ['University of Chichester', 'Arden University'],
    assessmentFormat: 'Executive case analyses and innovation proposals',
    units: [
      { code: 'BMLI601', title: 'Leading Innovation and Sustainable Change', level: 6, credits: 20, glh: 100, isMandatory: true, description: 'Transformational leadership and innovation pipelines.' }
    ]
  },
  {
    id: 'qualifi-level-7-diploma-in-business-strategy',
    title: 'Qualifi Level 7 Diploma in Business Strategy',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 7,
    ofqualQN: '603/5745/9',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Postgraduate diploma designed for strategists, corporate directors, and consultants focusing on corporate growth, competitive advantage, and global market positioning.',
    aims: ['Master complex corporate strategic decision-making', 'Drive competitive organizational advantage'],
    entryRequirements: ['Bachelor\'s degree or Level 6 diploma, or 3+ years managerial experience', 'Age 22+'],
    progression: ['Direct entry into UK MBA / MSc Top-Up (Dissertation stage)'],
    universityPartners: ['Anglia Ruskin University', 'University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Strategic audits, boardroom papers, and business consultancies',
    units: [
      { code: 'BS701', title: 'Global Strategic Governance', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Board-level strategic governance and shareholder value creation.' }
    ]
  },
  {
    id: 'qualifi-level-7-diploma-in-ethical-leadership',
    title: 'Qualifi Level 7 Diploma in Ethical Leadership',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 7,
    ofqualQN: '603/4994/3',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equips senior executives to champion ethics, environmental sustainability, social governance (ESG), and principled corporate leadership.',
    aims: ['Establish principled governance structures', 'Lead corporate ESG initiatives'],
    entryRequirements: ['Degree or Level 6 diploma, or senior executive background', 'Age 22+'],
    progression: ['Direct MBA / MA Top-Up at UK Universities'],
    universityPartners: ['University of Cumbria', 'University of Chichester'],
    assessmentFormat: 'Executive policy audits and ethical case evaluations',
    units: [
      { code: 'EL701', title: 'Ethical Paradigms in Modern Enterprise', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Deontological and utilitarian corporate decision-making models.' }
    ]
  },
  {
    id: 'qualifi-level-7-diploma-in-executive-management',
    title: 'Qualifi Level 7 Diploma in Executive Management',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 7,
    ofqualQN: '601/7656/8',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'High-level postgraduate diploma preparing C-suite executives and general managers for global corporate leadership and organizational stewardship.',
    aims: ['Direct multi-divisional enterprises', 'Execute strategic M&A and corporate restructuring'],
    entryRequirements: ['Bachelor\'s degree or Level 6 Diploma, or 3+ years managerial experience', 'Age 22+'],
    progression: ['Fast-track MBA Top-Up (Dissertation Stage only) with UK Universities'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University', 'University of Northampton'],
    assessmentFormat: 'C-suite executive reports and transformation projects',
    units: [
      { code: 'EM701', title: 'Executive Decision Making', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Strategic vision, multi-stakeholder governance, and financial stewardship.' }
    ]
  },
  {
    id: 'qualifi-level-7-diploma-in-strategic-management-and-innovation',
    title: 'Qualifi Level 7 Diploma in Strategic Management and Innovation',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 7,
    ofqualQN: '603/2900/2',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Focuses on strategic technology commercialization, disruption defense, open innovation models, and intellectual capital leadership.',
    aims: ['Foster disruptive business ventures', 'Lead organizational R&D strategy'],
    entryRequirements: ['Bachelor\'s degree or equivalent executive experience', 'Age 22+'],
    progression: ['Fast-Track MBA or MSc Innovation Top-Up'],
    universityPartners: ['Anglia Ruskin University', 'University of Chichester'],
    assessmentFormat: 'Innovation audits and corporate strategic proposals',
    units: [
      { code: 'SMI701', title: 'Strategic Innovation Management', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Fostering continuous innovation and technological adoption.' }
    ]
  },
  {
    id: 'qualifi-l7-strategic-management-leadership',
    title: 'Qualifi Level 7 Diploma in Strategic Management and Leadership',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 7,
    ofqualQN: '601/5335/0',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    featured: true,
    overview: 'Our flagship postgraduate qualification. The Qualifi Level 7 Diploma in Strategic Management and Leadership is equivalent to the taught stages of a UK Master of Business Administration (MBA). Learners complete 120 credits at Master\'s level, leaving only a 60-credit dissertation to achieve a full UK University MBA degree.',
    aims: [
      'Equip senior executives with transformational strategic agility and decision-making rigor.',
      'Master financial governance, disruptive innovation, and high-performance talent leadership.',
      'Fast-track completion of a British MBA with leading partner universities.'
    ],
    entryRequirements: [
      'A UK Bachelor\'s Degree (Level 6) or overseas equivalent.',
      'Alternatively, mature applicants (22+) with minimum 3-5 years of managerial work experience.',
      'English proficiency at CEFR Level B2 / IELTS 6.0.'
    ],
    progression: [
      'Direct progression to MBA Top-Up (Dissertation stage only - 60 credits) with University of Chichester, University of Cumbria, Anglia Ruskin University, University of Northampton, Arden University, and others.',
      'Direct progression to Qualifi Level 8 Diploma in Strategic Management and Leadership (Doctorate entry).'
    ],
    universityPartners: ['University of Chichester', 'University of Cumbria', 'Anglia Ruskin University', 'University of Northampton', 'Buckinghamshire New University'],
    assessmentFormat: 'Rigorous written assignments based on live industry scenarios and strategic enterprise cases. Assessed internally and externally verified.',
    units: [
      { code: 'SML701', title: 'Strategic Management and Global Vision', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Formulation, implementation, and evaluation of strategic plans in turbulent markets.' },
      { code: 'SML702', title: 'Strategic Leadership and Organisational Performance', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Theories of leadership, emotional intelligence, executive presence, and cultural change.' },
      { code: 'SML703', title: 'Strategic Human Resource Management', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Aligning talent ecosystems with long-term competitive enterprise strategy.' },
      { code: 'SML704', title: 'Advanced Business Research Methods', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Formulating rigorous empirical methodologies and preparing master-level research proposals.' },
      { code: 'SML705', title: 'Strategic Financial Management', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Corporate valuation, debt/equity optimization, portfolio analysis, and risk governance.' },
      { code: 'SML706', title: 'Supply Chain Management and Global Operations', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Sustainable procurement, lean operational architecture, and global trade resilience.' },
      { code: 'SML707', title: 'Strategic Marketing and Brand Equity', level: 7, credits: 20, glh: 100, isMandatory: false, description: 'International marketing strategy, brand valuation, and digital customer lifecycles.' },
      { code: 'SML708', title: 'Entrepreneurship and Enterprise Development', level: 7, credits: 20, glh: 100, isMandatory: false, description: 'Corporate intrapreneurship, venture funding, and commercial scaling models.' },
    ]
  },
  {
    id: 'qualifi-l7-executive-management',
    title: 'Qualifi Level 7 Diploma in Executive Management',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 7,
    ofqualQN: '601/7656/8',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Targeted at board-level directors, C-suite executives, and enterprise founders focusing on executive stewardship, governance, corporate turnaround, and shareholder value creation.',
    aims: [
      'Foster elite governance, board stewardship, and risk governance capabilities.',
      'Accelerate executive transition to CEO, Managing Director, or Board positions.'
    ],
    entryRequirements: ['Bachelor\'s degree plus 4+ years of senior executive experience.'],
    progression: ['Fast-track to UK Executive MBA or Doctor of Business Administration (DBA).'],
    universityPartners: ['University of Chichester', 'University of Northampton'],
    assessmentFormat: '100% executive portfolio, board presentations, and enterprise audit dossiers.',
    units: [
      { code: 'EM701', title: 'Corporate Governance and Executive Responsibility', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Board roles, fiduciary duty, and international compliance codes.' },
      { code: 'EM702', title: 'Executive Decision Making and Risk Strategy', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Scenario testing, enterprise crisis navigation, and uncertainty modelling.' },
      { code: 'EM703', title: 'Leading Corporate Transformation', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Mergers, acquisitions, restructuring, and post-merger cultural synergy.' },
      { code: 'EM704', title: 'Strategic Capital and Resource Allocation', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Maximising shareholder return, ESG capital structuring, and liquidity balance.' },
      { code: 'EM705', title: 'Strategic Marketing at the Board Level', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Global brand diplomacy, investor relations, and crisis PR management.' },
      { code: 'EM706', title: 'Executive Research and Consulting Report', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'High-level strategic audit delivering demonstrable ROI for an organization.' }
    ]
  },
  {
    id: 'qualifi-l8-strategic-management-leadership',
    title: 'Qualifi Level 8 Diploma in Strategic Management and Leadership',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 8,
    ofqualQN: '601/5336/2',
    credits: 160,
    tqt: 1600,
    glh: 800,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    featured: true,
    overview: 'The pinnacle of vocational and professional qualifications on the RQF. The Qualifi Level 8 Diploma is at the same academic tier as a Doctor of Philosophy (PhD) or Doctor of Business Administration (DBA). It enables direct advanced standing entry into the final doctoral research / thesis stage with UK and international universities.',
    aims: [
      'Conduct rigorous original doctoral-level research applied to complex global challenges.',
      'Synthesize interdisciplinary leadership frameworks to shape public and corporate policies.',
      'Provide direct acceleration to Doctor of Business Administration (DBA) thesis completion.'
    ],
    entryRequirements: [
      'Master\'s Degree (Level 7) in business, management, or cognate discipline.',
      'Alternatively, Level 7 Post-graduate Diploma (120 credits) with extensive senior executive experience (5+ years).'
    ],
    progression: [
      'Direct advanced standing entry into the Doctor of Business Administration (DBA) Thesis phase with UK universities.',
      'C-suite executive consultancy and professorship pathways.'
    ],
    universityPartners: ['University of Chichester', 'Arden University', 'University of Northampton'],
    assessmentFormat: 'Doctoral research proposals, published papers, executive dossiers, and critical theoretical reviews.',
    units: [
      { code: 'DML801', title: 'Leadership Qualities and Practice at Doctoral Level', level: 8, credits: 20, glh: 100, isMandatory: true, description: 'Critique of global philosophical leadership paradigms and institutional stewardship.' },
      { code: 'DML802', title: 'Personal Leadership Development as a Strategic Leader', level: 8, credits: 20, glh: 100, isMandatory: true, description: 'Reflective practice, executive self-efficacy, and lifelong mentoring.' },
      { code: 'DML803', title: 'Strategy Development in Global Enterprises', level: 8, credits: 20, glh: 100, isMandatory: true, description: 'Geopolitical risk, sovereign wealth, multi-market competition, and antitrust.' },
      { code: 'DML804', title: 'Strategic Direction in Public and Private Services', level: 8, credits: 20, glh: 100, isMandatory: true, description: 'Regulatory reform, public sector modernization, and triple-bottom-line impact.' },
      { code: 'DML805', title: 'Strategic Planning and Organizational Dynamics', level: 8, credits: 20, glh: 100, isMandatory: true, description: 'Complexity theory, adaptive organizations, and disruptive ecosystem design.' },
      { code: 'DML806', title: 'Advanced Research Project / Doctoral Investigation', level: 8, credits: 60, glh: 300, isMandatory: true, description: 'Substantial original investigation contributing novel insights to management practice.' }
    ]
  },
  {
    id: 'qualifi-level-7-diploma-in-project-management',
    title: 'Qualifi Level 7 Diploma in Project Management',
    sector: 'BUSINESS AND MANAGEMENT',
    sectorId: 'business-and-management',
    level: 7,
    ofqualQN: '610/1342/0',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Advanced postgraduate qualification covering agile, waterfall, PRINCE2, and PMBOK project governance for complex multinational programmes.',
    aims: ['Direct major multi-million programmes', 'Control risk, schedule, and procurement portfolios'],
    entryRequirements: ['Bachelor\'s degree or project management background (3+ years)', 'Age 22+'],
    progression: ['MSc Project Management Top-Up or MBA with UK Universities'],
    universityPartners: ['University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Project management portfolios and case briefs',
    units: [
      { code: 'PM701', title: 'Project Governance and Portfolio Strategy', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Aligning project portfolios with corporate strategic milestones.' },
      { code: 'PM702', title: 'Agile & Lean Project Execution', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Managing sprint velocity, scrum teams, and agile delivery.' },
      { code: 'PM703', title: 'Risk Governance & Value Engineering', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Monte Carlo risk simulations and cost control.' },
      { code: 'PM704', title: 'Strategic Stakeholder Management', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Procurement negotiation and cross-cultural communication.' }
    ]
  },

  // Logistics and Supply Chain Management
  {
    id: 'qualifi-level-4-diploma-in-logistics-and-supply-chain-management',
    title: 'Qualifi Level 4 Diploma in Logistics and Supply Chain Management',
    sector: 'LOGISTICS AND SUPPLY CHAIN MANAGEMENT',
    sectorId: 'logistics-and-supply-chain-management',
    level: 4,
    ofqualQN: '603/5489/6',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equivalent to Year 1 of a UK Bachelor\'s Degree in Supply Chain, covering warehouse operations, freight forwarding, and procurement fundamentals.',
    aims: ['Manage end-to-end supply chain logistics', 'Optimize distribution networks'],
    entryRequirements: ['Level 3 qualification or logistics industry work experience', 'Age 18+'],
    progression: ['Qualifi Level 5 Diploma in Logistics and Supply Chain Management or Year 2 Degree Top-Up'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University'],
    assessmentFormat: 'Supply chain case studies and warehouse audit reports',
    units: [
      { code: 'LSC401', title: 'Principles of Logistics and Supply Chain', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Global trade corridors, multi-modal transport, and logistics.' }
    ]
  },
  {
    id: 'qualifi-level-5-diploma-in-logistics-and-supply-chain-management',
    title: 'Qualifi Level 5 Diploma in Logistics and Supply Chain Management',
    sector: 'LOGISTICS AND SUPPLY CHAIN MANAGEMENT',
    sectorId: 'logistics-and-supply-chain-management',
    level: 5,
    ofqualQN: '603/5490/2',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equivalent to Year 2 of a UK Bachelor\'s Degree (HND equivalent), focusing on international freight management, lean warehousing, and ERP inventory control.',
    aims: ['Direct global supply operations', 'Implement lean six sigma in fulfillment hubs'],
    entryRequirements: ['Qualifi Level 4 Diploma or 120 university credits in logistics', 'Age 19+'],
    progression: ['Final Year (Level 6) BSc Supply Chain Management Degree Top-Up at UK universities'],
    universityPartners: ['University of Chichester', 'University of Northampton'],
    assessmentFormat: 'Assignment dossiers and inventory optimization models',
    units: [
      { code: 'LSC501', title: 'Strategic Supply Chain Management', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Supply chain resilience, risk forecasting, and vendor compliance.' }
    ]
  },
  {
    id: 'qualifi-level-7-diploma-in-logistics-and-supply-chain-management',
    title: 'Qualifi Level 7 Diploma in Logistics and Supply Chain Management',
    sector: 'LOGISTICS AND SUPPLY CHAIN MANAGEMENT',
    sectorId: 'logistics-and-supply-chain-management',
    level: 7,
    ofqualQN: '603/5491/4',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Postgraduate qualification preparing global logistics directors, procurement chiefs, and supply chain executives. Leads directly into an MSc or MBA Top-Up.',
    aims: ['Govern multinational distribution networks', 'Lead AI and blockchain supply chain transformations'],
    entryRequirements: ['Bachelor\'s degree or Level 6 diploma, or 3+ years senior logistics management experience', 'Age 22+'],
    progression: ['Direct progression to UK Master\'s / MBA Dissertation Top-Up'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University', 'University of Cumbria'],
    assessmentFormat: 'Executive logistics dossiers, supply chain audits, and strategic transformation plans',
    units: [
      { code: 'LSC701', title: 'Global Supply Chain Strategy & Leadership', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Geopolitical logistics, customs regimes, and carbon-neutral supply chains.' }
    ]
  },

  // Marketing
  {
    id: 'qualifi-l4-digital-marketing',
    title: 'Qualifi Level 4 Diploma in Digital Marketing',
    sector: 'MARKETING',
    sectorId: 'marketing',
    level: 4,
    ofqualQN: '603/5253/X',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Provides operational and tactical digital marketing expertise in SEO, paid media, CRM, analytics, and content generation. Equivalent to Year 1 of a UK university degree.',
    aims: ['Master digital acquisition channels, data analytics, and user journey optimization.'],
    entryRequirements: ['Level 3 qualification or minimum 18 months marketing experience.'],
    progression: ['Progression to Qualifi Level 5 Diploma in Strategic Marketing or BA (Hons) Marketing Year 2.'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University'],
    assessmentFormat: '100% assignment based with portfolio of live campaign audits.',
    units: [
      { code: 'DM401', title: 'Principles of Digital Marketing', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Digital ecosystems, customer personas, and multichannel funnels.' },
      { code: 'DM402', title: 'Search Engine Optimization & Content Strategy', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'On-page/off-page SEO, keyword intent, and conversion copywriting.' },
      { code: 'DM403', title: 'Social Media Management & Paid Advertising', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Paid social campaigns, bidding models, ROAS optimization, and retargeting.' },
      { code: 'DM404', title: 'Web Analytics & Data-Driven Insights', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Google Analytics 4, tag manager, attribution modelling, and KPI reporting.' },
      { code: 'DM405', title: 'Email Marketing & Customer Lifecycle CRM', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Automated drip workflows, churn reduction, and GDPR marketing compliance.' },
      { code: 'DM406', title: 'Digital Marketing Campaign Management', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'End-to-end launch plan, budget distribution, and ROI audit.' }
    ]
  },
  {
    id: 'qualifi-l5-strategic-marketing',
    title: 'Qualifi Level 5 Diploma in Strategic Marketing',
    sector: 'MARKETING',
    sectorId: 'marketing',
    level: 5,
    ofqualQN: '603/5254/1',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Focuses on strategic brand positioning, international consumer intelligence, marketing budget management, and campaign leadership. Equivalent to Year 2 of a UK degree.',
    aims: ['Formulate competitive market differentiation and lead agency-client relationships.'],
    entryRequirements: ['Level 4 Diploma or 2+ years marketing supervisory experience.'],
    progression: ['Progression to Final Year BA (Hons) Marketing Top-Up at UK universities.'],
    universityPartners: ['University of Sunderland', 'University of Northampton'],
    assessmentFormat: 'Comprehensive strategic marketing plans and competitive brand analysis dossiers.',
    units: [
      { code: 'SM501', title: 'Consumer Behaviour and Insights', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Neuromarketing, decision heuristics, and sociocultural influences.' },
      { code: 'SM502', title: 'Strategic Brand Management', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Brand architecture, brand equity models, and brand repositioning.' },
      { code: 'SM503', title: 'International Marketing Strategy', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Global adaptation vs standardization, export logistics, and tariffs.' },
      { code: 'SM504', title: 'Digital Business Transformation in Marketing', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'MarTech stacks, automated personalization, and AI in marketing.' },
      { code: 'SM505', title: 'Public Relations and Corporate Reputation', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Crisis communication, stakeholder messaging, and media relations.' },
      { code: 'SM506', title: 'Marketing Research and Consultancy Project', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Field research, survey statistics, and strategic recommendations.' }
    ]
  },
  {
    id: 'qualifi-l7-strategic-marketing',
    title: 'Qualifi Level 7 Diploma in Strategic Marketing',
    sector: 'MARKETING',
    sectorId: 'marketing',
    level: 7,
    ofqualQN: '603/3990/1',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Master’s level diploma for CMOs, Marketing Directors, and agency leads. Provides 120 credits towards an MSc in Marketing or MA in Strategic Marketing Top-Up.',
    aims: ['Drive growth strategies at board level, navigate disruptive digital shifts, and optimize global marketing investments.'],
    entryRequirements: ['Bachelor\'s degree in any field OR 3+ years in marketing management.'],
    progression: ['Direct progression to MSc Strategic Marketing Top-Up (Dissertation only) at UK universities.'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University', 'Buckinghamshire New University'],
    assessmentFormat: '100% assignment based. Executive marketing whitepapers and market audits.',
    units: [
      { code: 'L7M01', title: 'Contemporary Issues in Strategic Marketing', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Sustainability, consumer ethics, and platform economies.' },
      { code: 'L7M02', title: 'Consumer Behaviour and Cross-Cultural Decision Making', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Behavioural economics and cross-border consumer psychology.' },
      { code: 'L7M03', title: 'Strategic Marketing Management', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Enterprise market share growth and defensive market positioning.' },
      { code: 'L7M04', title: 'Strategic Brand Management', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Brand financial valuation and intangible asset management.' },
      { code: 'L7M05', title: 'Digital Marketing Communication', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Omnichannel orchestration and data-driven customer loyalty.' },
      { code: 'L7M06', title: 'Strategic Marketing Research Methods', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Research design and preparation for Master\'s dissertation.' }
    ]
  },

  // Health and Social Care
  {
    id: 'qualifi-l3-health-social-care',
    title: 'Qualifi Level 3 Diploma in Health and Social Care',
    sector: 'HEALTH AND SOCIAL CARE',
    sectorId: 'health-and-social-care',
    level: 3,
    ofqualQN: '603/0411/5',
    credits: 60,
    tqt: 600,
    glh: 300,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Foundational qualification for care workers, healthcare assistants, and nursing candidates developing clinical empathy, safeguarding, and communication skills.',
    aims: ['Provide compassionate person-centred care aligned with CQC quality frameworks.'],
    entryRequirements: ['Completion of secondary education or experience in care settings.'],
    progression: ['Direct progression to Qualifi Level 4 Diploma in Health and Social Care.'],
    universityPartners: ['University of Bolton', 'University of Cumbria'],
    assessmentFormat: 'Portfolio of care practice, reflective journals, and written assessments.',
    units: [
      { code: 'HSC301', title: 'An Introduction to Health and Social Care', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Care principles, values, and duty of care in NHS and private sectors.' },
      { code: 'HSC302', title: 'Communication for Health and Social Care', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Verbal, non-verbal, and augmented communication for diverse patient needs.' },
      { code: 'HSC303', title: 'Promoting Health and Well-being', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Preventative health, lifestyle habits, and public health campaigns.' },
      { code: 'HSC304', title: 'Person-Centred Care', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Empowerment, dignity, autonomy, and personalized support planning.' },
      { code: 'HSC305', title: 'Understanding Health and Disability', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Sensory impairments, chronic illnesses, and accessibility standards.' },
      { code: 'HSC306', title: 'Safeguarding and Protecting Vulnerable Individuals', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Legislation, abuse identification, whistleblowing, and reporting.' }
    ]
  },
  {
    id: 'qualifi-l4-health-social-care',
    title: 'Qualifi Level 4 Diploma in Health and Social Care',
    sector: 'HEALTH AND SOCIAL CARE',
    sectorId: 'health-and-social-care',
    level: 4,
    ofqualQN: '601/5391/X',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equivalent to Year 1 of a UK university degree in Healthcare Management or Nursing Studies. Teaches clinical administration and service operations.',
    aims: ['Manage clinical care teams, maintain patient records, and navigate legal healthcare standards.'],
    entryRequirements: ['Level 3 qualification or minimum 2 years care practice.'],
    progression: ['Qualifi Level 5 Diploma in Health and Social Care or BSc (Hons) Healthcare Year 2.'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University'],
    assessmentFormat: 'Healthcare policy audits, case studies, and clinical care plan evaluations.',
    units: [
      { code: 'HSC401', title: 'Promoting Equality, Diversity and Inclusion', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'The Equality Act 2010, unconscious bias, and inclusive care delivery.' },
      { code: 'HSC402', title: 'Communication and Care Management', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Inter-agency communication, Caldicott Principles, and medical data confidentiality.' },
      { code: 'HSC403', title: 'Safeguarding Adults and Children', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Multi-agency safeguarding protocols and judicial inquiry lessons.' },
      { code: 'HSC404', title: 'Health and Safety in Health and Social Care Settings', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Infection prevention, COSHH, risk assessments, and emergency protocols.' },
      { code: 'HSC405', title: 'Managing Finance in Care Environments', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Commissioning models, NHS funding streams, and resource management.' },
      { code: 'HSC406', title: 'Personal Development in Health and Social Care', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Continuous professional development (CPD) and reflective clinical practice.' }
    ]
  },
  {
    id: 'qualifi-l5-health-social-care',
    title: 'Qualifi Level 5 Diploma in Health and Social Care',
    sector: 'HEALTH AND SOCIAL CARE',
    sectorId: 'health-and-social-care',
    level: 5,
    ofqualQN: '601/5419/6',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Prepares healthcare professionals for Registered Manager positions (CQC Registered Managers) and clinical operations supervisors. Equivalent to Year 2 of a UK Bachelor\'s Degree.',
    aims: ['Lead multidisciplinary care teams, achieve CQC outstanding ratings, and ensure statutory compliance.'],
    entryRequirements: ['Level 4 Diploma or extensive healthcare supervisory experience.'],
    progression: ['Final Year BSc (Hons) Health and Social Care Top-Up at UK universities.'],
    universityPartners: ['University of Cumbria', 'University of Northampton', 'Arden University'],
    assessmentFormat: 'Contextual care facility audits, quality improvement proposals, and compliance audits.',
    units: [
      { code: 'HSC501', title: 'Partnership Working in Health and Social Care', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Integrated care systems (ICS), NHS trusts, local authorities, and third sector.' },
      { code: 'HSC502', title: 'Managing Quality in Healthcare Provision', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'CQC fundamental standards, clinical governance, and audit trails.' },
      { code: 'HSC503', title: 'Leadership and Management in Care Environments', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Transformational healthcare leadership and staff wellbeing resilience.' },
      { code: 'HSC504', title: 'Mental Health and Wellbeing Strategies', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Mental Capacity Act, Deprivation of Liberty Safeguards (DoLS), and holistic wellbeing.' },
      { code: 'HSC505', title: 'Managing Human Resources in Health and Social Care', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Safe staffing levels, workforce retention, and clinical appraisal frameworks.' },
      { code: 'HSC506', title: 'Research Methodologies in Health and Social Care', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Evidence-based clinical practice and qualitative/quantitative research projects.' }
    ]
  },
  {
    id: 'qualifi-l7-health-social-care',
    title: 'Qualifi Level 7 Diploma in Health and Social Care',
    sector: 'HEALTH AND SOCIAL CARE',
    sectorId: 'health-and-social-care',
    level: 7,
    ofqualQN: '603/5329/6',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Postgraduate qualification for Hospital Directors, Clinical Leaders, NHS Band 8+ Managers, and Health System Policy Executives. Provides 120 credits towards an MSc in Healthcare Leadership Top-Up.',
    aims: ['Formulate national health policy strategies, clinical governance, and multimillion-pound resource distribution.'],
    entryRequirements: ['Bachelor\'s degree in nursing, healthcare, or related field OR senior clinical management experience.'],
    progression: ['Direct progression to MSc Healthcare Leadership / MSc Public Health Top-Up (Dissertation only).'],
    universityPartners: ['University of Chichester', 'University of Cumbria', 'Anglia Ruskin University'],
    assessmentFormat: '100% assignment based with strategic healthcare reform proposals.',
    units: [
      { code: 'HSC701', title: 'Health and Social Care Leadership', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Systems leadership, compassionate governance, and institutional crisis steering.' },
      { code: 'HSC702', title: 'Managing Finance in Public Health', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Health economics, QALY/DALY calculations, and NHS commissioning.' },
      { code: 'HSC703', title: 'Global Healthcare Challenges and Solutions', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'WHO sustainable development goals, epidemiology, and pandemic preparedness.' },
      { code: 'HSC704', title: 'Strategic Healthcare Planning and Operations', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Lean healthcare, digital health transformation, and telemedicine scaling.' },
      { code: 'HSC705', title: 'Quality, Safety and Governance in Healthcare', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Root cause analysis, patient safety incident frameworks, and clinical accountability.' },
      { code: 'HSC706', title: 'Research Methods for Health and Social Care Managers', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Ethical research design, systemic reviews, and preparation for Master\'s thesis.' }
    ]
  },

  // Information Technology
  {
    id: 'qualifi-l3-it',
    title: 'Qualifi Level 3 Diploma in Information Technology',
    sector: 'INFORMATION TECHNOLOGY',
    sectorId: 'information-technology',
    level: 3,
    ofqualQN: '603/4780/6',
    credits: 60,
    tqt: 600,
    glh: 300,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Introduces core computing disciplines: computer architecture, networking, Python programming, web development, and cyber basics. A-level equivalent for computing careers.',
    aims: ['Establish solid technical foundations in programming, networks, and technical troubleshooting.'],
    entryRequirements: ['Secondary education completion with interest in computing.'],
    progression: ['Progression to Qualifi Level 4 Diploma in Information Technology or BSc Computer Science Year 1.'],
    universityPartners: ['University of Chichester', 'Arden University'],
    assessmentFormat: 'Coding projects, system configuration portfolios, and technical reports.',
    units: [
      { code: 'IT301', title: 'Computer Systems and Hardware Architecture', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'CPUs, buses, memory management, and peripheral interfaces.' },
      { code: 'IT302', title: 'Coding and Software Logic Fundamentals', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Algorithms, data structures, conditional control, and Python scripting.' },
      { code: 'IT303', title: 'Networking Fundamentals & Protocols', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'TCP/IP model, OSI layers, subnets, routers, switches, and DNS.' },
      { code: 'IT304', title: 'Web Design and Front-End Technologies', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'HTML5, modern CSS, JavaScript interactivity, and accessibility standards.' },
      { code: 'IT305', title: 'Database Design and SQL Systems', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Entity relationship diagrams, relational tables, and SQL CRUD queries.' },
      { code: 'IT306', title: 'Cyber Security and Digital Hygiene', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Malware categories, phishing, encryption basics, and user authentication.' }
    ]
  },
  {
    id: 'qualifi-l4-it',
    title: 'Qualifi Level 4 Diploma in Information Technology',
    sector: 'INFORMATION TECHNOLOGY',
    sectorId: 'information-technology',
    level: 4,
    ofqualQN: '603/4781/8',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equivalent to Year 1 of a UK BSc (Hons) in Computer Science or IT. Covers object-oriented programming, systems analysis, network routing, and database administration.',
    aims: ['Develop professional software engineering and systems design abilities.'],
    entryRequirements: ['Level 3 qualification or computing work experience.'],
    progression: ['Direct progression to Qualifi Level 5 Diploma in Information Technology.'],
    universityPartners: ['Anglia Ruskin University', 'University of Northampton', 'University of Cumbria'],
    assessmentFormat: 'Software builds, database normalization schemas, and technical architecture specifications.',
    units: [
      { code: 'IT401', title: 'Information Technology and Computer Systems', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Operating system kernels, multi-threading, and virtualized hardware.' },
      { code: 'IT402', title: 'Basic Programming and OOP Principles', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Encapsulation, inheritance, polymorphism, and automated unit testing.' },
      { code: 'IT403', title: 'Database Design and Development', level: 4, credits: 20, glh: 100, isMandatory: true, description: '3NF normalization, transactional integrity (ACID), and query optimization.' },
      { code: 'IT404', title: 'Computer Networks and Infrastructure', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'VLANs, routing algorithms, firewall rule design, and wireless standards.' },
      { code: 'IT405', title: 'Systems Analysis and Software Lifecycle Design', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Agile sprints, UML sequence diagrams, and requirements engineering.' },
      { code: 'IT406', title: 'E-Commerce Applications and Payment Gateways', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'API integrations, PCI-DSS compliance, and serverless microservices.' }
    ]
  },
  {
    id: 'qualifi-l5-it',
    title: 'Qualifi Level 5 Diploma in Information Technology',
    sector: 'INFORMATION TECHNOLOGY',
    sectorId: 'information-technology',
    level: 5,
    ofqualQN: '603/4782/X',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equivalent to Year 2 of a UK BSc Degree. Deepens knowledge in full-stack cloud computing, DevOps pipelines, advanced networking, and cyber operations.',
    aims: ['Architect scalable cloud solutions and lead agile technical engineering sprints.'],
    entryRequirements: ['Level 4 Diploma in IT or equivalent 120 credits at Level 4.'],
    progression: ['Direct progression to Final Year BSc (Hons) Computing / IT Top-Up Degree at UK universities.'],
    universityPartners: ['University of Chichester', 'University of Sunderland', 'Arden University'],
    assessmentFormat: 'Live cloud deployments, architectural blueprints, and penetration test reports.',
    units: [
      { code: 'IT501', title: 'Network Security and Threat Prevention', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'IDS/IPS configuration, cryptographic handshakes, and perimeter defence.' },
      { code: 'IT502', title: 'Cloud Computing and Virtualization Technologies', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'AWS/GCP/Azure architecture, containerization (Docker/K8s), and IaC.' },
      { code: 'IT503', title: 'Web Application Development & API Architecture', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'REST/GraphQL APIs, JWT authentication, and secure client-server architectures.' },
      { code: 'IT504', title: 'IT Project Management and Scrum Practices', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Sprint retrospectives, risk burndown charts, and CI/CD automation.' },
      { code: 'IT505', title: 'Advanced Database Systems and NoSQL', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Document stores, key-value caches, and distributed sharding strategies.' },
      { code: 'IT506', title: 'Enterprise Computing and Business Intelligence', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Data warehousing, ETL pipelines, and executive dashboard visualizers.' }
    ]
  },
  {
    id: 'qualifi-l7-it',
    title: 'Qualifi Level 7 Diploma in Information Technology',
    sector: 'INFORMATION TECHNOLOGY',
    sectorId: 'information-technology',
    level: 7,
    ofqualQN: '603/4783/1',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Master\'s level qualification for Chief Technology Officers (CTO), IT Directors, and Enterprise Solution Architects. 120 credits directly transferrable to an MSc IT / Computer Science Top-Up.',
    aims: ['Formulate technological roadmaps, sovereign cloud strategies, and enterprise IT governance.'],
    entryRequirements: ['Bachelor\'s degree in STEM / Computing OR 3+ years senior technical management.'],
    progression: ['Direct progression to MSc Information Technology Top-Up (Dissertation only).'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University', 'University of Northampton'],
    assessmentFormat: 'Strategic enterprise IT architecture audits, research dissertations, and governance reports.',
    units: [
      { code: 'IT701', title: 'Enterprise Architecture and Strategic Alignment', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'TOGAF framework, microservice transformations, and legacy migration.' },
      { code: 'IT702', title: 'Cyber Security Governance and Risk Strategy', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'ISO 27001, NIS2 compliance, cyber insurance, and incident response.' },
      { code: 'IT703', title: 'Cloud Infrastructure and Hybrid Cloud Strategy', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Multi-cloud resilience, FinOps cost optimization, and sovereignty.' },
      { code: 'IT704', title: 'Data Analytics and Artificial Intelligence Strategy', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Enterprise LLM deployments, ethical AI governance, and automated workflows.' },
      { code: 'IT705', title: 'Emerging Technologies and Innovation Leadership', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Quantum computing implications, Web3 protocols, and edge compute.' },
      { code: 'IT706', title: 'Advanced Research Methods in Information Technology', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Quantitative/qualitative technical research methodologies and thesis proposal.' }
    ]
  },

  // Data Science
  {
    id: 'qualifi-l3-data-science',
    title: 'Qualifi Level 3 Diploma in Data Science',
    sector: 'DATA SCIENCE',
    sectorId: 'data-science',
    level: 3,
    ofqualQN: '603/7811/6',
    credits: 60,
    tqt: 600,
    glh: 300,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Foundational qualification introducing Python for data science, Pandas, NumPy, statistical distributions, data cleaning, and foundational machine learning concepts.',
    aims: ['Equip entry-level analysts with data manipulation and chart visualization skills.'],
    entryRequirements: ['Secondary education completion with numeracy proficiency.'],
    progression: ['Progression to higher diplomas or university degree in Data Science/Analytics.'],
    universityPartners: ['University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Jupyter notebook projects, exploratory data analysis portfolios, and presentations.',
    units: [
      { code: 'DS301', title: 'Introduction to Data Science & Python Ecosystem', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Python syntax, Jupyter notebooks, lists, dictionaries, and virtual environments.' },
      { code: 'DS302', title: 'Data Wrangling and Cleansing Techniques', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Handling nulls, duplicate deduplication, string parsing, and outliers.' },
      { code: 'DS303', title: 'Exploratory Data Analysis and Visualisation', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Matplotlib, Seaborn, histograms, boxplots, and bivariate correlation.' },
      { code: 'DS304', title: 'Statistical Methods for Data Interpretation', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Mean, median, variance, normal distribution, and p-value hypothesis testing.' },
      { code: 'DS305', title: 'Foundations of Machine Learning Algorithms', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'Linear regression, logistic regression, decision trees, and train-test splits.' },
      { code: 'DS306', title: 'Data Privacy, Ethics and Responsible Analytics', level: 3, credits: 10, glh: 50, isMandatory: true, description: 'GDPR compliance, algorithmic bias detection, and ethical data governance.' }
    ]
  },
  {
    id: 'qualifi-l7-data-science',
    title: 'Qualifi Level 7 Diploma in Data Science',
    sector: 'DATA SCIENCE',
    sectorId: 'data-science',
    level: 7,
    ofqualQN: '603/7812/8',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    featured: true,
    overview: 'Postgraduate qualification for Lead Data Scientists, AI Engineers, and Quantitative Directors. Master-level coverage of neural networks, NLP, big data distributed clusters (PySpark), and MLOps deployment.',
    aims: ['Deploy enterprise machine learning pipelines, deep learning architectures, and big data clusters.'],
    entryRequirements: ['Bachelor\'s degree in quantitative field (Math, Computer Science, Engineering) or equivalent experience.'],
    progression: ['Direct progression to MSc Data Science / MSc Artificial Intelligence Top-Up Degree.'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University', 'University of Northampton'],
    assessmentFormat: 'Production model deployment repositories, mathematical proofs, and model cards.',
    units: [
      { code: 'DS701', title: 'Mathematics and Statistics for Advanced Data Science', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Linear algebra, matrix decomposition, Bayesian inference, and multivariable calculus.' },
      { code: 'DS702', title: 'Advanced Machine Learning and Deep Learning Models', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Backpropagation, Convolutional Neural Networks (CNN), RNN, and Transformer architectures.' },
      { code: 'DS703', title: 'Big Data Engineering and Distributed Systems', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Apache Spark, Kafka streaming, Hadoop HDFS, and Delta Lake architectures.' },
      { code: 'DS704', title: 'Natural Language Processing and Generative AI', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Tokenization, embeddings, fine-tuning LLMs, RAG pipelines, and vector databases.' },
      { code: 'DS705', title: 'MLOps, Model Deployment and Scalable Infrastructure', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'MLflow, Kubeflow, automated data drift monitoring, and Dockerized endpoints.' },
      { code: 'DS706', title: 'Data Science Capstone Research Project', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Rigorous empirical investigation delivering novel commercial or scientific AI outcomes.' }
    ]
  },

  // Cyber Security
  {
    id: 'qualifi-l4-cyber-security',
    title: 'Qualifi Level 4 Diploma in Cyber Security',
    sector: 'CYBER SECURITY',
    sectorId: 'cyber-security',
    level: 4,
    ofqualQN: '603/3331/5',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equivalent to Year 1 of a UK Bachelor\'s Degree. Teaches network defence, threat taxonomy, incident triage, and digital forensics fundamentals.',
    aims: ['Defend enterprise networks and handle tier-1 Security Operations Centre (SOC) alerts.'],
    entryRequirements: ['Level 3 qualification or IT networking background.'],
    progression: ['Qualifi Level 5 Diploma in Cyber Security or Year 2 BSc Cyber Security.'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University'],
    assessmentFormat: 'Hands-on lab simulations, packet captures, and vulnerability audit reports.',
    units: [
      { code: 'CS401', title: 'Cyber Security Principles and Threat Landscape', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'MITRE ATT&CK, threat actors, zero-day exploits, and attack surfaces.' },
      { code: 'CS402', title: 'Network Security and Packet Analysis', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Wireshark packet analysis, TCP handshakes, TLS decryption, and Snort rules.' },
      { code: 'CS403', title: 'Information Security Policies and Governance', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Cyber Essentials, NIST CSF, acceptable use policies, and access control.' },
      { code: 'CS404', title: 'Ethical Hacking and Vulnerability Assessment', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Nmap scanning, Nessus audits, Metasploit methodology, and OWASP Top 10.' },
      { code: 'CS405', title: 'Digital Forensics and Evidence Acquisition', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Chain of custody, disk imaging (FTK/Autopsy), and volatility memory dumps.' },
      { code: 'CS406', title: 'Incident Response and SOC Operations', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'SIEM log ingestion, playbooks, containment, and post-incident root cause analysis.' }
    ]
  },
  {
    id: 'qualifi-l5-cyber-security',
    title: 'Qualifi Level 5 Diploma in Cyber Security',
    sector: 'CYBER SECURITY',
    sectorId: 'cyber-security',
    level: 5,
    ofqualQN: '603/3332/7',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equivalent to Year 2 of a UK degree. Focuses on advanced penetration testing, cryptographic engineering, zero-trust cloud architectures, and red-team/blue-team exercises.',
    aims: ['Lead technical cyber teams, conduct rigorous red team audits, and engineer cryptographic shields.'],
    entryRequirements: ['Level 4 Diploma in Cyber Security or 2+ years infosec experience.'],
    progression: ['Final Year BSc (Hons) Cyber Security Top-Up Degree at UK universities.'],
    universityPartners: ['University of Chichester', 'University of Sunderland'],
    assessmentFormat: 'Penetration test findings, secure source code audits, and disaster recovery blueprints.',
    units: [
      { code: 'CS501', title: 'Advanced Penetration Testing and Exploit Analysis', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Privilege escalation, buffer overflows, active directory exploitation, and pivot attacks.' },
      { code: 'CS502', title: 'Applied Cryptography and PKI Infrastructure', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'RSA, ECC, SHA-3, Diffie-Hellman, certificate authorities, and post-quantum crypto.' },
      { code: 'CS503', title: 'Cloud Security and Zero Trust Architecture', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'IAM policies, micro-segmentation, CASB, and Kubernetes container security.' },
      { code: 'CS504', title: 'Cyber Threat Intelligence and Threat Hunting', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'STIX/TAXII feeds, YARA rules, IOC extraction, and proactive threat hunting.' },
      { code: 'CS505', title: 'Disaster Recovery and Business Continuity Planning', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'RTO, RPO, air-gapped backups, ransomware negotiation protocols, and cold/hot sites.' },
      { code: 'CS506', title: 'Cyber Security Research and Capstone Project', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Independent investigation into novel exploit mitigation or cryptographic defence.' }
    ]
  },
  {
    id: 'qualifi-l7-cyber-security',
    title: 'Qualifi Level 7 Diploma in Cyber Security',
    sector: 'CYBER SECURITY',
    sectorId: 'cyber-security',
    level: 7,
    ofqualQN: '603/3333/9',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    featured: true,
    overview: 'Prepares Chief Information Security Officers (CISOs), Cyber Directors, and Government Defence Advisors. Master-level qualification with direct progression to MSc Cyber Security Top-Up.',
    aims: ['Establish board-level enterprise cyber risk resilience, international regulatory compliance, and incident command.'],
    entryRequirements: ['Bachelor\'s degree in computing/cyber or 3+ years info-security leadership.'],
    progression: ['Direct entry to MSc Cyber Security / Information Security Top-Up Degree.'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University', 'Buckinghamshire New University'],
    assessmentFormat: 'Enterprise threat audits, board-level cyber resilience charters, and empirical dissertations.',
    units: [
      { code: 'CS701', title: 'Strategic Cyber Security Leadership and Governance', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Board communication, cyber risk quantification (FAIR), and CISO leadership.' },
      { code: 'CS702', title: 'Legal, Ethical and Regulatory Frameworks in Cyber', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'GDPR, NIS2, Sarbanes-Oxley, Budapest Convention on Cybercrime.' },
      { code: 'CS703', title: 'Critical National Infrastructure and OT Security', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'SCADA, PLC, air-gap bridging, and physical-cyber resilience for utility grids.' },
      { code: 'CS704', title: 'Advanced Threat Intelligence and Geopolitical Cyber Warfare', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Nation-state APT groups, supply chain subversion, and cyber diplomacy.' },
      { code: 'CS705', title: 'Enterprise Incident Crisis Command and Resilience', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Tabletop crisis drills, regulatory notification within 72h, and forensic crisis management.' },
      { code: 'CS706', title: 'Cyber Security Research and Innovation Methodologies', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Advanced research formulation for MSc top-up dissertation.' }
    ]
  },

  // Accounting and Finance
  {
    id: 'qualifi-l4-accounting-finance',
    title: 'Qualifi Level 4 Diploma in Accounting and Finance',
    sector: 'ACCOUNTING AND FINANCE',
    sectorId: 'accounting-and-finance',
    level: 4,
    ofqualQN: '603/4784/3',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equivalent to Year 1 of a UK BSc (Hons) Accounting & Finance degree. Covers financial reporting, double-entry bookkeeping, management accounting, and corporate tax.',
    aims: ['Perform corporate book closing, prepare balance sheets, and calculate corporation tax.'],
    entryRequirements: ['Secondary education or A-levels, numeracy proficiency.'],
    progression: ['Progression to Qualifi Level 5 Diploma in Accounting and Finance.'],
    universityPartners: ['University of Chichester', 'University of Northampton'],
    assessmentFormat: 'Financial ledger preparation, variance analysis reports, and taxation case calculations.',
    units: [
      { code: 'AF401', title: 'Financial Accounting Principles', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'IFRS standards, trial balance adjustments, and financial statements.' },
      { code: 'AF402', title: 'Management Accounting and Costing Systems', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Marginal costing, absorption costing, break-even analysis, and standard budgeting.' },
      { code: 'AF403', title: 'Business Economics and Market Operations', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Monetary policy, fiscal levers, supply and demand elasticity.' },
      { code: 'AF404', title: 'Corporate Tax and Business Law', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Corporation tax calculations, VAT, capital allowances, and company law.' },
      { code: 'AF405', title: 'Quantitative Methods for Accounting', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Discounted cash flows, annuities, probability, and linear programming.' },
      { code: 'AF406', title: 'Ethics and Professional Conduct in Finance', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Code of ethics, anti-money laundering (AML), and fraud prevention.' }
    ]
  },
  {
    id: 'qualifi-l7-accounting-finance',
    title: 'Qualifi Level 7 Diploma in Accounting and Finance',
    sector: 'ACCOUNTING AND FINANCE',
    sectorId: 'accounting-and-finance',
    level: 7,
    ofqualQN: '603/4786/7',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    featured: true,
    overview: 'Master-level qualification for CFOs, Senior Controllers, Investment Bankers, and Financial Analysts. Direct progression to an MSc Accounting and Finance Top-Up Degree.',
    aims: ['Master international corporate finance, derivatives hedging, portfolio theory, and statutory financial audits.'],
    entryRequirements: ['Bachelor\'s degree in business, economics, accounting, or 3+ years financial management.'],
    progression: ['MSc Accounting and Finance Top-Up (Dissertation only) at UK partner universities.'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University', 'University of Cumbria'],
    assessmentFormat: 'Company valuation briefs, audit dossiers, and derivative investment risk strategies.',
    units: [
      { code: 'AF701', title: 'Investment Analysis and Portfolio Management', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'CAPM, Markowitz efficient frontier, factor models, and active alpha management.' },
      { code: 'AF702', title: 'Corporate Financial Strategy', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Optimal capital structure, dividend policy, share buybacks, and debt issuance.' },
      { code: 'AF703', title: 'Financial Reporting and Statutory Audit Governance', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Complex IFRS consolidations, goodwill impairment, and forensic auditing.' },
      { code: 'AF704', title: 'Financial Technology and Digital Banking Innovation', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'FinTech ecosystems, algorithmic trading, decentralized finance, and RegTech.' },
      { code: 'AF705', title: 'Derivatives, Risk Management and Hedging', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Options, futures, interest rate swaps, and Black-Scholes pricing models.' },
      { code: 'AF706', title: 'Advanced Research Methods in Accounting and Finance', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Empirical financial econometrics and preparation for Master\'s dissertation.' }
    ]
  },

  // Law and Legal Services
  {
    id: 'qualifi-l7-international-business-law',
    title: 'Qualifi Level 7 Diploma in International Business Law',
    sector: 'LAW AND LEGAL SERVICES',
    sectorId: 'law-and-legal-services',
    level: 7,
    ofqualQN: '603/7125/0',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Postgraduate law qualification designed for legal counsels, compliance heads, corporate solicitors, and international negotiators. Direct pathway to an LLM (Master of Laws) Top-Up.',
    aims: ['Draft multinational cross-border contracts, manage international commercial arbitration, and ensure global antitrust compliance.'],
    entryRequirements: ['Bachelor of Laws (LLB) or Bachelor\'s degree in cognate discipline with legal/regulatory experience.'],
    progression: ['Direct progression to LLM International Business Law Top-Up (Dissertation only) at UK partner universities.'],
    universityPartners: ['University of Chichester', 'University of Northampton', 'Anglia Ruskin University'],
    assessmentFormat: 'Legal advisory opinions, international arbitration briefs, and comparative legal analyses.',
    units: [
      { code: 'IBL701', title: 'International Trade Law and WTO Frameworks', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'GATT, GATS, tariffs, trade sanctions, and CISG sales contracts.' },
      { code: 'IBL702', title: 'Corporate Governance and Comparative Company Law', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Director duties, minority shareholder protections, and cross-border insolvencies.' },
      { code: 'IBL703', title: 'International Commercial Dispute Resolution', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'UNCITRAL model law, London Court of International Arbitration (LCIA), and mediation.' },
      { code: 'IBL704', title: 'Intellectual Property Law in the Global Market', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'TRIPS agreement, global patent litigation, trademarks, and copyright in software.' },
      { code: 'IBL705', title: 'Competition Law and Antitrust Regulation', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'EU Article 101/102, merger control, cartel enforcement, and digital gatekeeper rules.' },
      { code: 'IBL706', title: 'Legal Research Project / LLM Dissertation Proposal', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Rigorous legal doctrinal or empirical jurisprudence investigation.' }
    ]
  },

  // Psychology
  {
    id: 'qualifi-l7-applied-psychology',
    title: 'Qualifi Level 7 Diploma in Applied Psychology',
    sector: 'PSYCHOLOGY',
    sectorId: 'psychology',
    level: 7,
    ofqualQN: '603/7521/8',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Master’s level program examining organizational psychology, cognitive behavioural interventions, neuropsychology, and mental wellbeing in workplaces.',
    aims: ['Apply psychological science to organizational culture, leadership coaching, and mental wellbeing.'],
    entryRequirements: ['Bachelor\'s degree in psychology or social sciences OR relevant professional practice.'],
    progression: ['Direct progression to MSc Applied Psychology Top-Up.'],
    universityPartners: ['University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Clinical literature reviews, organizational psychological interventions, and empirical studies.',
    units: [
      { code: 'PSY701', title: 'Advanced Psychological Theories and Paradigms', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Cognitive paradigms, biopsychosocial models, and evolutionary psychology.' },
      { code: 'PSY702', title: 'Neuroscience and Cognitive Processing', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Neuroanatomy, executive function, memory consolidation, and neuroplasticity.' },
      { code: 'PSY703', title: 'Psychology of Work and Organisational Behaviour', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Workplace stress, psychological safety, intrinsic motivation, and team cohesion.' },
      { code: 'PSY704', title: 'Mental Health Assessment and Therapeutic Models', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Diagnostic criteria (DSM-5/ICD-11), CBT principles, and psychoeducation.' },
      { code: 'PSY705', title: 'Social Psychology and Group Dynamics', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Social conformity, intergroup bias, persuasion heuristics, and collective decision making.' },
      { code: 'PSY706', title: 'Advanced Psychological Research Methodologies', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'SPSS statistical regressions, qualitative thematic analysis, and ethical research clearance.' }
    ]
  },

  // Health and Safety Management
  {
    id: 'qualifi-l7-health-safety-management',
    title: 'Qualifi Level 7 Diploma in International Occupational Health and Safety Management',
    sector: 'HEALTH AND SAFETY MANAGEMENT',
    sectorId: 'health-and-safety-management',
    level: 7,
    ofqualQN: '603/7542/5',
    credits: 60,
    tqt: 600,
    glh: 300,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Accredited qualification for Corporate Safety Directors, Risk Managers, and HSE Consultants. Meets global industry benchmarks and enables progression to Chartered Safety Practitioner status.',
    aims: ['Establish enterprise health and safety policies, risk matrices, and global compliance systems.'],
    entryRequirements: ['Level 6 Health and Safety qualification (e.g. NEBOSH Diploma) or degree plus 3 years HSE experience.'],
    progression: ['MSc Occupational Health and Safety Top-Up Degree at UK partner universities.'],
    universityPartners: ['University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Comprehensive workplace safety audits, risk management policies, and legal case briefs.',
    units: [
      { code: 'OHS701', title: 'Health and Safety Management Practice', level: 7, credits: 15, glh: 75, isMandatory: true, description: 'ISO 45001 standards, proactive safety cultures, and executive safety audits.' },
      { code: 'OHS702', title: 'Effectiveness of Health and Safety Management Systems', level: 7, credits: 15, glh: 75, isMandatory: true, description: 'Key performance indicators (KPIs), leading/lagging safety metrics, and audit reviews.' },
      { code: 'OHS703', title: 'Factors Affecting Risk and Strategic Risk Assessment', level: 7, credits: 15, glh: 75, isMandatory: true, description: 'Bowtie hazard analysis, human factor ergonomics, and catastrophe risk modelling.' },
      { code: 'OHS704', title: 'Strategic Health and Safety Leadership in Organisations', level: 7, credits: 15, glh: 75, isMandatory: true, description: 'Corporate manslaughter liability, legal defense strategies, and board risk accountability.' }
    ]
  },

  // Hospitality and Tourism Management
  {
    id: 'qualifi-l7-hospitality-tourism',
    title: 'Qualifi Level 7 Diploma in Hospitality and Tourism Management',
    sector: 'HOSPITALITY AND TOURISM MANAGEMENT',
    sectorId: 'hospitality-and-tourism-management',
    level: 7,
    ofqualQN: '603/4400/3',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equips Hotel General Managers, Resort Executives, and Tourism Ministry officials with high-level asset management, luxury service design, and sustainable tourism strategies.',
    aims: ['Lead global hotel operations, optimize RevPAR, and steer eco-tourism initiatives.'],
    entryRequirements: ['Bachelor\'s degree or 3+ years in hospitality/tourism leadership.'],
    progression: ['Direct progression to MSc International Hospitality Management Top-Up.'],
    universityPartners: ['University of Chichester', 'University of Sunderland'],
    assessmentFormat: 'Hotel asset valuation, destination sustainability proposals, and master reports.',
    units: [
      { code: 'HTM701', title: 'Strategic Management in Hospitality and Tourism', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Yield management, dynamic pricing models, and luxury brand equity.' },
      { code: 'HTM702', title: 'Tourism Policy and Development in Global Economies', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'UNWTO guidelines, overtourism mitigation, and cultural heritage protection.' },
      { code: 'HTM703', title: 'Sustainable Hotel Operations and Green Key Compliance', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Net-zero resort planning, energy conservation, and local food procurement.' },
      { code: 'HTM704', title: 'International Customer Experience Design', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Hyper-personalized luxury guest journeys and AI concierge integration.' },
      { code: 'HTM705', title: 'Hospitality Asset Management and Real Estate Valuation', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Hotel management contracts, REIT portfolios, and Capex reinvestment.' },
      { code: 'HTM706', title: 'Research Methods for Hospitality and Tourism Executives', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Empirical research and dissertation proposal for master-level top-up.' }
    ]
  },

  // Human Resource Management
  {
    id: 'qualifi-l7-human-resource-management',
    title: 'Qualifi Level 7 Diploma in Human Resource Management',
    sector: 'HUMAN RESOURCE MANAGEMENT',
    sectorId: 'human-resource-management',
    level: 7,
    ofqualQN: '603/5893/2',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    featured: true,
    overview: 'Prepares Chief People Officers (CPO), HR Directors, and Talent Executives. Explores global talent mobility, employment jurisprudence, organizational restructuring, and people analytics.',
    aims: ['Formulate data-driven HR strategies, lead collective bargaining, and align talent with enterprise goals.'],
    entryRequirements: ['Bachelor\'s degree in any subject or 3+ years in human resource management.'],
    progression: ['Direct progression to MA / MSc Human Resource Management Top-Up Degree.'],
    universityPartners: ['University of Chichester', 'University of Northampton', 'Anglia Ruskin University'],
    assessmentFormat: '100% assignment based with strategic people charters and employment tribunal audits.',
    units: [
      { code: 'HRM701', title: 'Strategic Human Resource Management in Context', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Aligning HR capital with enterprise vision and competitive agility.' },
      { code: 'HRM702', title: 'Global Talent Acquisition and Workforce Planning', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Predictive talent pipelines, employer branding, and cross-border mobility.' },
      { code: 'HRM703', title: 'Employee Relations and Employment Law', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Collective bargaining, trade union relations, TUPE regulations, and unfair dismissal.' },
      { code: 'HRM704', title: 'People Analytics and Performance Systems', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'HR metrics, flight risk predictive modelling, and 360 performance ecosystems.' },
      { code: 'HRM705', title: 'Organisational Design and Change Leadership', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Delayering, matrix organizational structures, and psychological contract renewal.' },
      { code: 'HRM706', title: 'Research Methods for People Practitioners', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Designing rigorous research proposals for Master\'s dissertation completion.' }
    ]
  },

  // Coaching and Mentoring
  {
    id: 'qualifi-l7-executive-coaching-mentoring',
    title: 'Qualifi Level 7 Diploma in Executive Coaching and Mentoring',
    sector: 'COACHING AND MENTORING',
    sectorId: 'coaching-and-mentoring',
    level: 7,
    ofqualQN: '603/6489/0',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Designed for professional executive coaches, leadership mentors, and organizational psychologists aiming to coach senior executives and C-suite leaders.',
    aims: ['Master transformational executive coaching models, ethical frameworks, and leadership development.'],
    entryRequirements: ['Bachelor\'s degree or professional background in management, coaching, or HR.'],
    progression: ['Direct progression to MA / MSc Coaching & Mentoring Top-Up Degree.'],
    universityPartners: ['University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Supervised coaching hours, reflective practitioner logs, and theoretical critiques.',
    units: [
      { code: 'ECM701', title: 'Theories and Models of Executive Coaching', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'GROW model, cognitive behavioural coaching, somatic coaching, and psychodynamics.' },
      { code: 'ECM702', title: 'Ethical Guidelines and Professional Standards in Coaching', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'ICF and EMCC codes of ethics, boundaries, psychological contracting, and confidentiality.' },
      { code: 'ECM703', title: 'Advanced Coaching Practice and Reflective Log', level: 7, credits: 30, glh: 150, isMandatory: true, description: 'Supervised coaching sessions with senior leaders and transcribed reflective analysis.' },
      { code: 'ECM704', title: 'Organisational Mentoring and Culture Transformation', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Designing enterprise-wide mentoring programs for diversity, equity, and inclusion.' },
      { code: 'ECM705', title: 'Neuroscience and Emotional Agility in Coaching', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Brain science, amygdala hijack management, and positive psychology interventions.' },
      { code: 'ECM706', title: 'Research Methodologies in Coaching Practice', level: 7, credits: 30, glh: 150, isMandatory: true, description: 'Empirical research and dissertation proposal for master-level completion.' }
    ]
  },

  // Early Years Education
  {
    id: 'qualifi-level-3-diploma-in-early-years-education-and-care',
    title: 'Qualifi Level 3 Diploma in Early Years Education and Care',
    sector: 'EARLY YEARS EDUCATION',
    sectorId: 'early-years-education',
    level: 3,
    ofqualQN: '603/5230/9',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 60,
    tqt: 600,
    glh: 360,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Provides essential foundational knowledge and practical competence in early childhood development, statutory EYFS framework, safeguarding, and inclusive play-based learning.',
    aims: ['Understand early childhood cognitive and physical development', 'Implement statutory EYFS frameworks'],
    entryRequirements: ['Secondary education certificate (GCSE or equivalent)', 'Age 16+'],
    progression: ['Progression to Qualifi Level 4 Diploma or UK Early Childhood Studies degree'],
    universityPartners: ['University of Chichester', 'University of Northampton'],
    assessmentFormat: 'Assignment dossiers and reflective early years practice observations',
    units: [
      { code: 'EYE301', title: 'Child Development from Birth to 8 Years', level: 3, credits: 15, glh: 90, isMandatory: true, description: 'Milestones in physical, linguistic, cognitive, and socio-emotional growth.' },
      { code: 'EYE302', title: 'Safeguarding and Child Protection in Early Years', level: 3, credits: 15, glh: 90, isMandatory: true, description: 'Statutory safeguarding policies, signs of vulnerability, and multi-agency working.' }
    ]
  },
  {
    id: 'qualifi-level-5-diploma-in-early-years-education-and-care',
    title: 'Qualifi Level 5 Diploma in Early Years Education and Care',
    sector: 'EARLY YEARS EDUCATION',
    sectorId: 'early-years-education',
    level: 5,
    ofqualQN: '603/5231/0',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Prepares senior practitioners and nursery managers to lead early years settings, oversee curriculum design, and manage regulatory inspections.',
    aims: ['Lead early years educational operations', 'Ensure exceptional pedagogical governance'],
    entryRequirements: ['Level 3 or 4 qualification in early years or related discipline', 'Age 19+'],
    progression: ['Final Year (Level 6) BA (Hons) Early Childhood Top-Up at UK universities'],
    universityPartners: ['University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Early years leadership projects and pedagogical audits',
    units: [
      { code: 'EYE501', title: 'Pedagogical Leadership and Curriculum Development', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Contemporary theories in early education, Reggio Emilia, and Montessori frameworks.' }
    ]
  },

  // Education and Training
  {
    id: 'qualifi-level-5-diploma-in-education-and-training',
    title: 'Qualifi Level 5 Diploma in Education and Training',
    sector: 'EDUCATION AND TRAINING',
    sectorId: 'education-and-training',
    level: 5,
    ofqualQN: '603/6090/2',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'The recognized teaching qualification for post-16 education, further education colleges, and adult training environments. Meets UK national teaching standards.',
    aims: ['Master instructional design and lesson delivery', 'Fulfill teaching observation criteria'],
    entryRequirements: ['Level 3 qualification in subject area and minimum age 19+'],
    progression: ['Qualified Teacher Learning and Skills (QTLS) status and Level 7 MA in Education'],
    universityPartners: ['University of Chichester', 'Anglia Ruskin University'],
    assessmentFormat: 'Teaching observations (minimum 100 teaching hours) and pedagogical portfolios',
    units: [
      { code: 'ET501', title: 'Teaching, Learning and Assessment in Education', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Inclusive teaching strategies, diagnostic assessment, and learning psychology.' }
    ]
  },
  {
    id: 'qualifi-level-7-diploma-in-education-leadership-and-management',
    title: 'Qualifi Level 7 Diploma in Education Leadership and Management',
    sector: 'EDUCATION AND TRAINING',
    sectorId: 'education-and-training',
    level: 7,
    ofqualQN: '603/6091/4',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Postgraduate qualification for headteachers, college principals, and educational directors leading institutional change and curriculum reform.',
    aims: ['Formulate strategic educational policies', 'Lead academic institutions to regulatory excellence'],
    entryRequirements: ['Bachelor\'s degree or teaching credential plus leadership experience', 'Age 22+'],
    progression: ['Direct progression to MA / MEd in Educational Leadership Top-Up (Dissertation stage)'],
    universityPartners: ['University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Strategic institutional reviews and educational governance portfolios',
    units: [
      { code: 'ELM701', title: 'Contemporary Issues in Education Governance', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Global education trends, statutory inspection regimes, and institutional accountability.' }
    ]
  },

  // Teaching and Coaching
  {
    id: 'qualifi-level-4-diploma-in-coaching-practice',
    title: 'Qualifi Level 4 Diploma in Coaching Practice',
    sector: 'TEACHING AND COACHING',
    sectorId: 'teaching-and-coaching',
    level: 4,
    ofqualQN: '603/6812/3',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Focuses on pedagogical coaching models, instructional scaffolding, and feedback methodologies for teachers, trainers, and workplace coaches.',
    aims: ['Apply structured coaching methodologies to enhance learner outcomes'],
    entryRequirements: ['Level 3 qualification or teaching/training background', 'Age 18+'],
    progression: ['Progression to Qualifi Level 5 Diploma in Coaching or Teaching'],
    universityPartners: ['University of Chichester'],
    assessmentFormat: 'Practical coaching sessions and reflective case portfolios',
    units: [
      { code: 'TCP401', title: 'Foundations of Instructional Coaching', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Peer coaching, feedback loops, and instructional scaffolding.' }
    ]
  },

  // Sports Coaching
  {
    id: 'qualifi-level-4-diploma-in-sports-coaching-and-development',
    title: 'Qualifi Level 4 Diploma in Sports Coaching and Development',
    sector: 'SPORTS COACHING',
    sectorId: 'sports-coaching',
    level: 4,
    ofqualQN: '603/7201/1',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Equips sports coaches with advanced training methodologies, athletic conditioning science, performance analysis, and grassroots sports management.',
    aims: ['Design elite training programmes', 'Manage athlete performance metrics'],
    entryRequirements: ['Level 3 qualification in sport/fitness or relevant coaching badges', 'Age 18+'],
    progression: ['Year 2 entry to UK Sports Science / Coaching degrees or Level 5 Diploma'],
    universityPartners: ['University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Coaching session blueprints, video performance analysis, and athlete case profiles',
    units: [
      { code: 'SCD401', title: 'Applied Sports Science & Biomechanics', level: 4, credits: 20, glh: 100, isMandatory: true, description: 'Movement mechanics, cardiovascular fitness, and exercise physiology.' }
    ]
  },

  // Aesthetic Practice
  {
    id: 'qualifi-level-5-certificate-in-aesthetic-practice',
    title: 'Qualifi Level 5 Certificate in Aesthetic Practice',
    sector: 'AESTHETIC PRACTICE',
    sectorId: 'aesthetic-practice',
    level: 5,
    ofqualQN: '603/5210/3',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 60,
    tqt: 600,
    glh: 300,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Comprehensive clinical aesthetic training covering chemical peels, micro-needling, laser skin rejuvenation, and patient consultation hygiene protocols.',
    aims: ['Perform advanced clinical skin treatments', 'Comply with cosmetic industry safety regulations'],
    entryRequirements: ['Level 3 Beauty Therapy or medical/healthcare qualification', 'Age 18+'],
    progression: ['Qualifi Level 7 Certificate in Aesthetic Practice'],
    universityPartners: ['University of Chichester'],
    assessmentFormat: 'Clinical observations, client consultation files, and practical OSCE demonstrations',
    units: [
      { code: 'AP501', title: 'Advanced Facial Anatomy and Skin Physiology', level: 5, credits: 15, glh: 75, isMandatory: true, description: 'Facial musculature, vascular pathways, dermal layers, and aging processes.' },
      { code: 'AP502', title: 'Chemical Skin Peeling and Microneedling', level: 5, credits: 15, glh: 75, isMandatory: true, description: 'AHA/BHA protocols, depth penetration, and post-procedure wound healing.' }
    ]
  },
  {
    id: 'qualifi-level-7-certificate-in-aesthetic-practice',
    title: 'Qualifi Level 7 Certificate in Aesthetic Practice',
    sector: 'AESTHETIC PRACTICE',
    sectorId: 'aesthetic-practice',
    level: 7,
    ofqualQN: '603/5211/5',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 60,
    tqt: 600,
    glh: 300,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Postgraduate qualification for advanced aesthetic injectors, medical practitioners, and cosmetic clinicians covering botulinum toxins and dermal fillers.',
    aims: ['Master non-surgical facial rejuvenation', 'Manage aesthetic clinical complications'],
    entryRequirements: ['Medical qualification or Level 5 Aesthetic Practice with clinical background', 'Age 21+'],
    progression: ['Specialist clinical practice and master\'s level aesthetic research'],
    universityPartners: ['University of Chichester'],
    assessmentFormat: 'Direct clinical observation, complication management simulations, and client portfolios',
    units: [
      { code: 'AP701', title: 'Advanced Botulinum Toxin Injections in Clinical Practice', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Upper and lower facial muscle injection protocols, dosage calculation, and contraindications.' },
      { code: 'AP702', title: 'Hyaluronic Acid Dermal Filler Procedures', level: 7, credits: 20, glh: 100, isMandatory: true, description: 'Mid-face volumization, lip augmentation, and hyaluronidase reversal emergency protocols.' }
    ]
  },

  // Beauty Therapy
  {
    id: 'qualifi-level-3-diploma-in-beauty-therapy',
    title: 'Qualifi Level 3 Diploma in Beauty Therapy',
    sector: 'BEAUTY THERAPY',
    sectorId: 'beauty-therapy',
    level: 3,
    ofqualQN: '603/5512/8',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 60,
    tqt: 600,
    glh: 360,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Vocational qualification covering advanced facial electrotherapy, body massage, epilation, and spa therapy protocols.',
    aims: ['Deliver professional beauty therapy services', 'Manage salon hygiene and client consultations'],
    entryRequirements: ['Level 2 Beauty qualification or secondary education certificate', 'Age 16+'],
    progression: ['Progression to Qualifi Level 4 or 5 in Aesthetic Practice'],
    universityPartners: ['University of Chichester'],
    assessmentFormat: 'Practical salon assessments and client consultation dossiers',
    units: [
      { code: 'BT301', title: 'Electrical Facial Treatments', level: 3, credits: 15, glh: 90, isMandatory: true, description: 'Microcurrent, galvanic, high-frequency, and lymphatic drainage facial technologies.' }
    ]
  },

  // Hairdressing
  {
    id: 'qualifi-level-3-diploma-in-hairdressing-and-salon-management',
    title: 'Qualifi Level 3 Diploma in Hairdressing and Salon Management',
    sector: 'HAIRDRESSING',
    sectorId: 'hairdressing',
    level: 3,
    ofqualQN: '603/5514/1',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 60,
    tqt: 600,
    glh: 360,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Advanced styling, precision cutting, chemical coloration techniques, trichology, and creative salon enterprise management.',
    aims: ['Master complex hair styling and coloring', 'Manage commercial salon operations'],
    entryRequirements: ['Level 2 Hairdressing certificate or salon experience', 'Age 16+'],
    progression: ['Salon director, creative educator, or higher business diplomas'],
    universityPartners: ['University of Chichester'],
    assessmentFormat: 'Creative hair portfolios and salon practical assessments',
    units: [
      { code: 'HD301', title: 'Creative Hair Coloration and Color Correction', level: 3, credits: 15, glh: 90, isMandatory: true, description: 'Color theory, bleaching chemistry, balayage, and corrective formulations.' }
    ]
  },

  // Wellness
  {
    id: 'qualifi-level-5-diploma-in-wellness-and-holistic-health',
    title: 'Qualifi Level 5 Diploma in Wellness and Holistic Health',
    sector: 'WELLNESS',
    sectorId: 'wellness',
    level: 5,
    ofqualQN: '603/5515/3',
    qualificationType: 'Vocational Related Qualification (Higher Education)',
    accreditationStatus: 'Accredited',
    credits: 120,
    tqt: 1200,
    glh: 600,
    grading: 'Pass / Fail',
    regulationStatus: 'Regulated by Ofqual (RQF)',
    overview: 'Comprehensive qualification blending integrative health science, lifestyle medicine, stress physiology, and corporate wellbeing leadership.',
    aims: ['Direct wellness initiatives', 'Apply evidence-based holistic health interventions'],
    entryRequirements: ['Level 3 or 4 qualification in healthcare, fitness, or complementary therapy', 'Age 19+'],
    progression: ['Level 6 / BSc Top-Up in Health Sciences or integrative wellness consultancy'],
    universityPartners: ['University of Chichester', 'University of Cumbria'],
    assessmentFormat: 'Wellness program design, client lifestyle audits, and empirical health reviews',
    units: [
      { code: 'WL501', title: 'Integrative Lifestyle Medicine and Stress Physiology', level: 5, credits: 20, glh: 100, isMandatory: true, description: 'Endocrine stress response, sleep hygiene, and non-pharmacological interventions.' }
    ]
  }
];

export const RQF_LEVELS_INFO = [
  {
    level: 3,
    title: 'Level 3 Diploma',
    rqfEquivalent: 'GCE A-Levels / BTEC National / Access to HE',
    creditsTypical: '60 - 120 Credits',
    universityBenchmark: 'Qualifies learner for Year 1 of a UK Bachelor\'s Degree',
    target: 'High school graduates, apprentices, early career professionals'
  },
  {
    level: 4,
    title: 'Level 4 Diploma',
    rqfEquivalent: 'Higher National Certificate (HNC) / Year 1 Degree (CertHE)',
    creditsTypical: '120 Credits',
    universityBenchmark: 'Equivalent to 1st Year of a 3-Year UK Bachelor\'s Degree',
    target: 'Learners entering undergraduate pathways or supervisory roles'
  },
  {
    level: 5,
    title: 'Level 5 Diploma',
    rqfEquivalent: 'Higher National Diploma (HND) / Foundation Degree (DipHE)',
    creditsTypical: '120 Credits',
    universityBenchmark: 'Equivalent to 2nd Year of a 3-Year UK Bachelor\'s Degree',
    target: 'Experienced supervisors progressing directly to Final Year Degree'
  },
  {
    level: 6,
    title: 'Level 6 Diploma',
    rqfEquivalent: 'Bachelor\'s Degree with Honours (BA / BSc Hons)',
    creditsTypical: '120 Credits',
    universityBenchmark: 'Equivalent to Full UK Bachelor\'s Degree completion',
    target: 'Middle managers seeking graduate status or postgraduate entry'
  },
  {
    level: 7,
    title: 'Level 7 Postgraduate Diploma',
    rqfEquivalent: 'Master\'s Degree Taught Stage (MBA / MA / MSc / PGDip)',
    creditsTypical: '120 Credits',
    universityBenchmark: '120 Master\'s Credits (Dissertation only top-up for full MBA/MSc)',
    target: 'Senior executives, directors, department heads, and entrepreneurs'
  },
  {
    level: 8,
    title: 'Level 8 Doctoral Diploma',
    rqfEquivalent: 'Doctor of Philosophy (PhD) / Doctor of Business Administration (DBA)',
    creditsTypical: '160 Credits',
    universityBenchmark: 'Doctoral Level (Enables direct progression to final Doctoral thesis)',
    target: 'C-suite executives, senior corporate consultants, and thought leaders'
  },
];

export const APPROVED_CENTRES: ApprovedCentre[] = [
  {
    id: 'c1',
    name: 'London College of International Business Studies',
    centreNumber: 'QUA-UK-0842',
    country: 'United Kingdom',
    city: 'London',
    deliveryMode: 'Blended',
    sectors: ['BUSINESS AND MANAGEMENT', 'ACCOUNTING AND FINANCE', 'MARKETING'],
    contactEmail: 'admissions@lcibs.co.uk'
  },
  {
    id: 'c2',
    name: 'Global Online Learning Academy',
    centreNumber: 'QUA-GL-1102',
    country: 'United Kingdom',
    city: 'Manchester / Global Online',
    deliveryMode: 'Online',
    sectors: ['BUSINESS AND MANAGEMENT', 'INFORMATION TECHNOLOGY', 'DATA SCIENCE', 'CYBER SECURITY'],
    contactEmail: 'enrol@globalonlineacademy.co.uk'
  },
  {
    id: 'c3',
    name: 'Cambridge Health & Social Care Institute',
    centreNumber: 'QUA-UK-0498',
    country: 'United Kingdom',
    city: 'Cambridge',
    deliveryMode: 'Classroom',
    sectors: ['HEALTH AND SOCIAL CARE', 'PSYCHOLOGY', 'HEALTH AND SAFETY MANAGEMENT'],
    contactEmail: 'registrar@cambridgehealthinst.co.uk'
  },
  {
    id: 'c4',
    name: 'Middle East Executive Education Centre',
    centreNumber: 'QUA-ME-3021',
    country: 'United Arab Emirates',
    city: 'Dubai',
    deliveryMode: 'Blended',
    sectors: ['BUSINESS AND MANAGEMENT', 'HUMAN RESOURCE MANAGEMENT', 'HOSPITALITY AND TOURISM MANAGEMENT'],
    contactEmail: 'info@meexecutive.ae'
  },
  {
    id: 'c5',
    name: 'Asia Pacific Institute of Management & Technology',
    centreNumber: 'QUA-AP-5140',
    country: 'Singapore',
    city: 'Singapore',
    deliveryMode: 'Blended',
    sectors: ['INFORMATION TECHNOLOGY', 'CYBER SECURITY', 'DATA SCIENCE', 'BUSINESS AND MANAGEMENT'],
    contactEmail: 'contact@apimt.edu.sg'
  }
];

export const UNIVERSITY_PATHWAYS = [
  {
    university: 'University of Chichester',
    logoText: 'University of Chichester (UK)',
    established: 'Est. 1839',
    routes: [
      { from: 'Qualifi Level 5 Diploma', to: 'BA (Hons) Business Management Top-Up', duration: '9 - 12 Months', creditsNeeded: '120 credits' },
      { from: 'Qualifi Level 7 Diploma', to: 'Master of Business Administration (MBA) Top-Up', duration: '6 - 9 Months (Dissertation only)', creditsNeeded: '60 credits' },
      { from: 'Qualifi Level 7 Cyber Security', to: 'MSc Cyber Security Top-Up', duration: '6 - 9 Months', creditsNeeded: '60 credits' }
    ]
  },
  {
    university: 'Anglia Ruskin University',
    logoText: 'Anglia Ruskin University (ARU)',
    established: 'Top 350 World University',
    routes: [
      { from: 'Qualifi Level 5 Diploma', to: 'BSc (Hons) International Business Top-Up', duration: '1 Academic Year', creditsNeeded: '120 credits' },
      { from: 'Qualifi Level 7 Strategic Management', to: 'Executive MBA Top-Up', duration: '6 Months', creditsNeeded: '60 credits' },
      { from: 'Qualifi Level 7 International Law', to: 'LLM International Commercial Law Top-Up', duration: '6 - 9 Months', creditsNeeded: '60 credits' }
    ]
  },
  {
    university: 'University of Cumbria',
    logoText: 'University of Cumbria',
    established: 'Prestigious Public UK University',
    routes: [
      { from: 'Qualifi Level 7 Health and Social Care', to: 'MSc Healthcare Leadership Top-Up', duration: '6 Months', creditsNeeded: '60 credits' },
      { from: 'Qualifi Level 7 Strategic Management', to: 'MBA Leadership and Sustainability Top-Up', duration: '6 Months', creditsNeeded: '60 credits' }
    ]
  },
  {
    university: 'University of Northampton',
    logoText: 'University of Northampton',
    established: 'TEF Gold Rated UK University',
    routes: [
      { from: 'Qualifi Level 5 IT', to: 'BSc (Hons) Computing Top-Up', duration: '1 Year', creditsNeeded: '120 credits' },
      { from: 'Qualifi Level 7 Strategic Marketing', to: 'MSc Strategic Marketing Top-Up', duration: '6 Months', creditsNeeded: '60 credits' }
    ]
  }
];
