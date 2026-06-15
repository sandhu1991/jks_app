/** Hub metadata for service topic breadcrumbs */
export const serviceHubs = {
  immigration: {
    label: 'Immigrate',
    path: '/immigration',
    kicker: 'Permanent residence',
  },
  visas: {
    label: 'Canada Visas',
    path: '/visas',
    kicker: 'Temporary status',
  },
  'other-services': {
    label: 'Other Services',
    path: '/other',
    kicker: 'Other services',
  },
}

/**
 * Modern Vue-rendered service pages (slug → content).
 * Topics not listed here still use legacy HTML.
 */
export const serviceTopics = {
  immigration: {
    'express-entry': {
      intro:
        'Express Entry is Canada’s online system for managing permanent residence applications from skilled workers. Introduced in 2015, it is now the main federal pathway for economic immigration.',
      image: '/images/immigration/express-entry.jpg',
      imageAlt: 'Toronto skyline at dusk — Canada’s main destination for skilled worker immigration',
      sections: [
        {
          heading: 'Three programs managed through Express Entry',
          paragraphs: [
            'If you meet the eligibility rules for one of the programs below, you can submit a profile to the Express Entry pool. Candidates are ranked using the Comprehensive Ranking System (CRS), and IRCC invites the highest-scoring applicants in regular rounds.',
          ],
          list: [
            'Canadian Experience Class (CEC)',
            'Federal Skilled Worker Program (FSW)',
            'Federal Skilled Trades Program (FST)',
          ],
        },
        {
          heading: 'How the Express Entry process works',
          paragraphs: [
            'According to IRCC, the process generally follows four stages from entering the pool to a decision on permanent residence. Processing times vary by program and how complete your application is.',
          ],
          orderedList: [
            'Create your profile and enter the pool',
            'Receive an invitation if your CRS score is selected in a round',
            'Submit your complete permanent residence application within the deadline',
            'Complete biometrics and medicals; IRCC reviews your file and makes a decision',
          ],
        },
        {
          heading: 'Documents to prepare early',
          paragraphs: [
            'Step one is submitting your profile. Having these documents ready early can speed up your application if you receive an Invitation to Apply (ITA).',
          ],
          list: [
            'Language test results (English or French)',
            'Educational Credential Assessment report, when required',
            'Passport or travel document',
            'Proof of funds, employment records, and reference letters (as applicable)',
            'Police certificates and medical exam results after you are invited to apply',
          ],
        },
        {
          heading: 'CRS score and invitation rounds',
          paragraphs: [
            'Your CRS score reflects factors such as age, education, language ability, and Canadian work experience. Minimum scores change from round to round depending on IRCC’s targets.',
            'We help you understand which program fits your background, where your score stands today, and what practical steps may strengthen your profile before you submit.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'Eligibility rules, fees, and the latest invitation rounds are published on Canada.ca. We recommend reviewing the official page alongside your consultation with us.',
          ],
          link: {
            label: 'Immigrate through Express Entry — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html',
          },
        },
      ],
    },
    'business-immigration': {
      intro:
        'Business immigration pathways are for entrepreneurs, investors, and self-employed professionals who can contribute to Canada’s economy through investment, innovation, or specialized experience.',
      image: '/images/immigration/business-immigration.jpg',
      imageAlt: 'Business team planning — Canada business immigration',
      sections: [
        {
          heading: 'Who business immigration is for',
          paragraphs: [
            'Canada welcomes individuals with managerial experience, business acumen, or creative and athletic backgrounds who can create economic opportunities. Each stream has its own eligibility rules, investment requirements, and processing path.',
          ],
        },
        {
          heading: 'Main business immigration streams',
          paragraphs: [
            'Depending on your background and goals, one of the following pathways may be appropriate. We help you compare options before you commit time and fees to an application.',
          ],
          list: [
            'Start-up Visa — for entrepreneurs with a qualifying innovative business',
            'Self-Employed Program — for cultural, artistic, or athletic contributors',
            'PNP entrepreneur streams — province-specific owner-operator pathways',
            'Business visitor routes — for short-term commercial activity without entering the Canadian labour market',
          ],
        },
        {
          heading: 'Start-up Visa at a glance',
          paragraphs: [
            'The Start-up Visa links entrepreneurs with designated organizations in Canada. A qualifying business plan and support from an approved incubator, angel investor group, or venture capital fund are central to eligibility.',
            'Successful applicants can obtain permanent residence for themselves and eligible family members when IRCC approves the application.',
          ],
        },
        {
          heading: 'Self-employed and provincial entrepreneur options',
          paragraphs: [
            'The Self-Employed Program targets people who can create their own employment through relevant experience in culture, athletics, or farming.',
            'Several provinces also operate entrepreneur streams — such as owner-operator or investment-based PNPs — that can lead to a provincial nomination and then permanent residence.',
          ],
        },
        {
          heading: 'How we help',
          paragraphs: [
            'Business files are document-heavy and program-specific. We review your experience, net worth, business concept, and province fit, then outline a realistic plan with timelines and evidence requirements.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'IRCC publishes current eligibility criteria, designated organizations, and fee information on Canada.ca.',
          ],
          link: {
            label: 'Immigration and citizenship — Canada.ca',
            url: 'https://www.canada.ca/en/services/immigration-citizenship.html',
          },
        },
      ],
    },
    'family-and-spousal-immigration': {
      intro:
        'Family sponsorship allows Canadian citizens and permanent residents to bring eligible relatives to Canada as permanent residents, with a legal undertaking to support them financially.',
      image: '/images/immigration/family-sponsorship.jpg',
      imageAlt: 'Family walking together — spousal and family sponsorship',
      sections: [
        {
          heading: 'What family sponsorship involves',
          paragraphs: [
            'Sponsorship has two parts: your family member applies for permanent residence, and you commit to providing basic financial support for a set period. IRCC assesses both the sponsor and the applicant.',
          ],
        },
        {
          heading: 'Who can be a sponsor',
          paragraphs: [
            'Sponsors must generally be at least 18 years old and be a Canadian citizen or permanent resident living in Canada. You must also show you can meet income requirements where they apply and sign a sponsorship undertaking.',
          ],
          list: [
            'Canadian citizen or permanent resident',
            'At least 18 years of age',
            'Able to support the sponsored person for the required period',
            'Not ineligible due to prior defaults or certain criminal convictions',
          ],
        },
        {
          heading: 'Who you can sponsor',
          paragraphs: [
            'The most common categories are spouses, common-law partners, dependent children, and parents or grandparents. In limited situations, other relatives may be eligible if you have no closer family members to sponsor.',
          ],
          list: [
            'Spouse, common-law partner, or conjugal partner',
            'Dependent children (generally under 22, with exceptions)',
            'Parents and grandparents (including PGP intake periods)',
            'Other relatives in specific orphan, adopted-child, or lone-relative scenarios',
          ],
        },
        {
          heading: 'Spousal and partner sponsorship',
          paragraphs: [
            'You must demonstrate a genuine relationship supported by documents such as communication records, photos, joint finances, and cohabitation evidence where applicable.',
            'Inland and outland applications follow different procedures and timelines. We help you choose the right stream and prepare a complete, consistent file.',
          ],
        },
        {
          heading: 'Parents, grandparents, and Super Visa',
          paragraphs: [
            'The Parents and Grandparents Program (PGP) uses periodic intakes and requires sponsors to meet Minimum Necessary Income (MNI) for their family size.',
            'The Super Visa is a long-term visitor option for parents and grandparents who may not yet have a PGP nomination. We can explain which route fits your family’s situation.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'Relationship definitions, income tables, and undertaking lengths are updated on Canada.ca.',
          ],
          link: {
            label: 'Sponsor your family — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html',
          },
        },
      ],
    },
    'provincial-nomination-programs': {
      intro:
        'Provincial Nominee Programs (PNPs) let Canadian provinces and territories nominate people who can help meet local labour market and demographic needs. A nomination can support your path to permanent residence.',
      image: '/images/immigration/provincial-nominees.jpg',
      imageAlt: 'Canadian landscape — provincial nominee pathways',
      sections: [
        {
          heading: 'Why provinces run PNPs',
          paragraphs: [
            'Each province and territory designs streams for skilled workers, graduates, entrepreneurs, and other profiles its economy needs. Requirements and processing differ significantly from one jurisdiction to another.',
          ],
        },
        {
          heading: 'Provinces and territories with PNPs',
          paragraphs: [
            'Quebec operates its own skilled worker system outside the federal PNP framework. All other provinces and territories listed below run nominee programs, often with streams linked to Express Entry.',
          ],
          list: [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Northwest Territories',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Saskatchewan',
            'Yukon',
          ],
        },
        {
          heading: 'How the PNP process works',
          paragraphs: [
            'Most pathways follow a similar sequence, though some are Express Entry-aligned and others use paper-based permanent residence applications.',
          ],
          orderedList: [
            'Identify a provincial stream that matches your profile and job offer (if required)',
            'Apply to the province or territory and receive a nomination certificate if approved',
            'Submit your permanent residence application to IRCC within the deadline',
            'Complete medical, police, and biometrics checks; IRCC makes the final decision',
          ],
        },
        {
          heading: 'Express Entry–aligned PNPs',
          paragraphs: [
            'Many provinces nominate candidates already in the Express Entry pool. A provincial nomination typically adds 600 CRS points, which greatly improves your chances of receiving an Invitation to Apply.',
            'We help you align your Express Entry profile with provincial criteria before you submit a nomination application.',
          ],
        },
        {
          heading: 'How we help',
          paragraphs: [
            'PNP rules change often and are highly specific. We review your occupation, location preferences, language scores, and work history to identify realistic provincial options.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'Each province publishes its own stream criteria. IRCC explains how nominations fit into permanent residence processing.',
          ],
          link: {
            label: 'Provincial nominees — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
          },
        },
      ],
    },
  },
  visas: {
    'tourist-visa': {
      intro:
        'A Canadian visitor visa (Temporary Resident Visa) lets foreign nationals travel to Canada for tourism, family visits, or short business trips. Most visitors can stay for up to six months per entry.',
      image: '/images/visas/tourist-visa.jpg',
      imageAlt: 'Mountain lake landscape — visiting Canada as a tourist',
      sections: [
        {
          heading: 'What is a visitor visa?',
          paragraphs: [
            'A visitor visa is an official document placed in your passport that shows you meet the requirements to enter Canada temporarily. It is intended for leisure, tourism, or visiting family and friends — not for working or studying long-term.',
            'Visas are usually issued as multiple-entry, allowing repeated visits while the visa is valid. A border officer decides how long you may stay at each entry, typically up to six months.',
          ],
        },
        {
          heading: 'Who needs a visitor visa or eTA?',
          paragraphs: [
            'Citizens of many countries need a visitor visa before travelling to Canada. If you are from a visa-exempt country, you may need an Electronic Travel Authorization (eTA) when flying to Canada instead.',
            'We help you confirm which document applies to your nationality and travel plans before you apply.',
          ],
        },
        {
          heading: 'Eligibility requirements',
          paragraphs: [
            'IRCC assesses whether you are a genuine visitor who will leave Canada when your authorized stay ends. Key factors include:',
          ],
          list: [
            'Valid passport and completed application',
            'Proof of sufficient funds for your trip',
            'Clear purpose of visit and ties to your home country',
            'Good health and no criminal inadmissibility (medical exam if required)',
            'Letter of invitation from a host in Canada, when applicable',
          ],
        },
        {
          heading: 'Documents to prepare',
          paragraphs: [
            'Incomplete files are a common cause of delays. Gather these before you submit:',
          ],
          list: [
            'Passport valid for your entire intended stay',
            'Bank statements, pay stubs, or sponsorship evidence',
            'Travel itinerary — flights, accommodation, and planned activities',
            'Proof of employment, studies, or property in your home country',
            'Invitation letter and host documents, if visiting family or friends',
          ],
        },
        {
          heading: 'How the application process works',
          orderedList: [
            'Complete the visitor visa application online or at a Visa Application Centre (VAC)',
            'Pay the application fee and upload supporting documents',
            'Provide biometrics at a VAC, if required for your nationality',
            'Wait for IRCC to review your file; respond promptly to any requests',
            'Receive your visa and travel to Canada; the border officer confirms your length of stay',
          ],
        },
        {
          heading: 'Extensions and common questions',
          paragraphs: [
            'If you are already in Canada and wish to stay longer, you must apply for a visitor record before your current status expires. A visitor visa does not permit you to work in Canada — a separate work permit is required.',
            'We help with first-time applications, refusals, extensions, and restorations of status.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'Eligibility rules, fees, and processing times are published on Canada.ca.',
          ],
          link: {
            label: 'Visit Canada — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html',
          },
        },
      ],
    },
    'work-visa': {
      intro:
        'A Canadian work permit authorizes foreign nationals to work in Canada for a specific employer, occupation, or under an open permit. It is the main pathway for temporary skilled and professional employment.',
      image: '/images/visas/work-visa.jpg',
      imageAlt: 'Modern office workspace — working in Canada',
      sections: [
        {
          heading: 'Understanding work permits',
          paragraphs: [
            'A work permit is not a visa on its own — you may also need a visitor visa or eTA to enter Canada, depending on your country of citizenship. Permits specify your employer, job location, and duration of authorized work.',
            'Canadian work experience can later support permanent residence through Express Entry or provincial nominee programs.',
          ],
        },
        {
          heading: 'Basic eligibility',
          paragraphs: [
            'Most employer-specific permits require a valid job offer and, in many cases, a positive Labour Market Impact Assessment (LMIA). Some categories are LMIA-exempt under international agreements or special programs.',
          ],
          list: [
            'Intention to leave Canada when your permit expires',
            'Sufficient funds to support yourself and family members',
            'No criminal record; police certificates when required',
            'Medical exam, if required for your occupation or country',
            'Job offer from an eligible Canadian employer (unless LMIA-exempt)',
          ],
        },
        {
          heading: 'Types of work permits',
          paragraphs: [
            'The right permit depends on your job offer, qualifications, and whether an LMIA is required.',
          ],
          list: [
            'Employer-specific (closed) permit — tied to one employer and role',
            'Open work permit — work for almost any employer (e.g. PGWP, spousal open permit)',
            'LMIA-exempt permits — intra-company transfers, CUSMA professionals, and other exempt categories',
            'International Experience Canada (IEC) — youth mobility for eligible countries',
          ],
        },
        {
          heading: 'Application steps',
          orderedList: [
            'Confirm you need an LMIA or qualify for an LMIA exemption',
            'Gather passport, job offer, LMIA (if applicable), and proof of qualifications',
            'Submit your work permit application online through IRCC',
            'Provide biometrics and medical results when requested',
            'Receive your permit and comply with its conditions while in Canada',
          ],
        },
        {
          heading: 'Bringing family members',
          paragraphs: [
            'Spouses and dependent children of work permit holders may be eligible to accompany you. Spouses often qualify for an open work permit, and school-age children can usually attend Canadian schools.',
          ],
        },
        {
          heading: 'How we help',
          paragraphs: [
            'Work permit files involve employer documents, LMIA rules, and occupation-specific requirements. We review your job offer, exemption options, and supporting evidence before submission.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'Current permit types, fees, and LMIA guidance are on Canada.ca.',
          ],
          link: {
            label: 'Work in Canada — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html',
          },
        },
      ],
    },
    'study-visa': {
      intro:
        'International students need a study permit to attend a Designated Learning Institution (DLI) in Canada for programs longer than six months. Canada offers quality education and strong post-graduation work options.',
      image: '/images/visas/study-visa.jpg',
      imageAlt: 'Students on campus — study permit for Canada',
      sections: [
        {
          heading: 'Study permit vs. student visa',
          paragraphs: [
            'A study permit authorizes you to study and remain in Canada. Depending on your citizenship, you may also need a visitor visa or eTA to enter the country. The permit must stay valid for your entire program.',
          ],
        },
        {
          heading: 'Requirements for a study permit',
          paragraphs: [
            'IRCC looks for genuine students who can support themselves financially and intend to comply with permit conditions.',
          ],
          list: [
            'Letter of acceptance from a Designated Learning Institution (DLI)',
            'Proof of funds for tuition, living costs, and return travel',
            'Clear intent to study and leave Canada when your permit ends (unless you extend or change status)',
            'Medical examination, when required',
            'Police certificate showing no criminal record',
            'Biometrics, when requested',
          ],
        },
        {
          heading: 'Working while you study',
          paragraphs: [
            'Most study permit holders may work up to 20 hours per week during academic sessions and full-time during scheduled breaks, when their permit includes work authorization.',
            'After graduation, eligible students can apply for a Post-Graduation Work Permit (PGWP), which can open a path to permanent residence through Canadian work experience.',
          ],
        },
        {
          heading: 'Planning your finances',
          paragraphs: [
            'Tuition varies by program and institution — undergraduate programs often range from roughly $13,000 to $35,000 CAD per year for international students. Living costs depend on the city; budget accordingly for housing, food, and transport.',
            'Scholarships and part-time work can help offset costs. We help you understand proof-of-funds requirements for your chosen province.',
          ],
        },
        {
          heading: 'How to apply',
          orderedList: [
            'Apply to a DLI and receive your letter of acceptance',
            'Gather financial documents, identity papers, and any medical or police certificates',
            'Submit your study permit application online (recommended) or at a visa office',
            'Provide biometrics and attend an interview if requested',
            'Travel to Canada; a study permit is issued at the port of entry when you arrive',
          ],
        },
        {
          heading: 'Program changes and extensions',
          paragraphs: [
            'If you change schools, programs, or need more time to complete your studies, you must notify IRCC and may need to extend or amend your permit. We assist with extensions, co-op permits, and cases involving a prior refusal.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'DLI lists, fees, and study permit rules are updated on Canada.ca.',
          ],
          link: {
            label: 'Study in Canada — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
          },
        },
      ],
    },
    'super-visa': {
      intro:
        'The Super Visa lets parents and grandparents of Canadian citizens and permanent residents visit for up to two years per entry — far longer than a standard visitor visa. It is valid for up to 10 years as a multiple-entry document.',
      image: '/images/visas/super-visa.jpg',
      imageAlt: 'Family walking together — Super Visa for parents and grandparents',
      sections: [
        {
          heading: 'What makes the Super Visa different',
          paragraphs: [
            'A regular visitor visa typically allows stays of up to six months. The Super Visa permits eligible parents and grandparents to remain for up to two years at a time without renewing status as frequently.',
            'It is a practical option for families who want extended visits while permanent sponsorship through the Parents and Grandparents Program (PGP) is not yet available.',
          ],
        },
        {
          heading: 'Who can apply',
          paragraphs: [
            'Only parents and grandparents of Canadian citizens or permanent residents are eligible. Siblings, cousins, and other relatives must apply under the regular visitor visa rules.',
            'Applications are submitted from outside Canada. Visa-exempt nationals follow a similar process and receive a letter authorizing a two-year stay instead of a visa stamp.',
          ],
        },
        {
          heading: 'Key requirements',
          paragraphs: [
            'Super Visa applications are assessed on relationship proof, financial support, and medical admissibility.',
          ],
          list: [
            'Proof of parent or grandparent relationship to the Canadian child or grandchild',
            'Signed invitation letter with a commitment to financial support',
            'Child or grandchild meets the Low Income Cut-Off (LICO) for their family size',
            'Private medical insurance from a Canadian insurer — minimum $100,000 coverage for at least one year',
            'Medical examination confirming admissibility to Canada',
          ],
        },
        {
          heading: 'Medical insurance requirement',
          paragraphs: [
            'Applicants must hold valid private health insurance covering health care, hospitalization, and repatriation for the full duration of each visit. IRCC verifies that coverage meets the minimum standards before approval.',
          ],
        },
        {
          heading: 'Super Visa vs. visitor visa',
          paragraphs: [
            'If your goal is short tourist trips under six months, a standard visitor visa may be sufficient. Choose the Super Visa when parents or grandparents plan longer, repeated stays with family in Canada.',
          ],
          list: [
            'Visitor visa — typically up to six months per entry',
            'Super Visa — up to two years per entry, valid up to 10 years',
            'PGP sponsorship — permanent residence for parents and grandparents (separate intake process)',
          ],
        },
        {
          heading: 'Extending your stay',
          paragraphs: [
            'If you wish to remain beyond two years, apply to extend your status at least 30 days before it expires. You may have implied status while IRCC processes an extension application.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'Income tables, insurance rules, and application instructions are on Canada.ca.',
          ],
          link: {
            label: 'Super Visa — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html',
          },
        },
      ],
    },
  },
  'other-services': {
    'pr-card': {
      intro:
        'Your permanent resident (PR) card is the official proof of your status in Canada. Renewing or replacing it on time helps you travel, work, and access services without interruption.',
      image: '/images/other-services/pr-card.jpg',
      imageAlt: 'Canadian permanent resident application — PR card renewal',
      sections: [
        {
          heading: 'What is a PR card?',
          paragraphs: [
            'A PR card is a wallet-sized document that proves you are a permanent resident of Canada. Most permanent residents need a valid card to re-enter Canada by commercial carrier (airplane, bus, train, or boat).',
            'PR cards are typically issued for five years. You should apply to renew before your card expires if you plan to travel outside Canada.',
          ],
        },
        {
          heading: 'When to renew or replace',
          paragraphs: [
            'Apply for a new PR card if your current card is expiring within nine months, has been lost or stolen, or is damaged. If you are outside Canada without a valid card, you may need a Permanent Resident Travel Document (PRTD) to return.',
          ],
          list: [
            'Card expiring within nine months — renew from inside Canada',
            'Lost, stolen, or damaged card — apply for replacement',
            'Never received your first card — follow up with IRCC',
            'Outside Canada without a valid card — PRTD application may be required',
          ],
        },
        {
          heading: 'Eligibility for renewal',
          paragraphs: [
            'To renew your PR card, you must meet IRCC’s requirements at the time of application.',
          ],
          list: [
            'You are a permanent resident of Canada',
            'You are physically present in Canada when you apply',
            'You are not under a removal order',
            'You are not a Canadian citizen or registered Indian under the Indian Act',
            'You meet residency obligations (730 days in Canada in the last five years, with limited exceptions)',
          ],
        },
        {
          heading: 'Residency obligation',
          paragraphs: [
            'Permanent residents must be physically present in Canada for at least 730 days within every five-year period. Time spent outside Canada may count in certain cases — for example, accompanying a Canadian citizen spouse or working for a Canadian business abroad.',
            'If you have not met the residency obligation, renewal may be refused and your permanent resident status could be at risk. We review your travel history before you apply.',
          ],
        },
        {
          heading: 'Documents to prepare',
          paragraphs: [
            'A complete application reduces processing delays. Commonly required items include:',
          ],
          list: [
            'Copy of your current or expired PR card',
            'Valid passport or travel document',
            'Two photos meeting IRCC specifications',
            'Proof of residency in Canada (employment, leases, tax records)',
            'Police certificate or explanation letter, if requested',
          ],
        },
        {
          heading: 'How we help',
          paragraphs: [
            'We assist with first-time cards, renewals, replacements, and complex cases involving extended absences from Canada. We also help permanent residents understand their options before travelling without a valid card.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'Fees, photo requirements, and processing times are published on Canada.ca.',
          ],
          link: {
            label: 'Permanent resident card — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/card.html',
          },
        },
      ],
    },
    'canadian-citizenship': {
      intro:
        'Canadian citizenship is the final step for many permanent residents. It grants the right to vote, obtain a Canadian passport, and live in Canada without renewing immigration documents.',
      image: '/images/other-services/canadian-citizenship.jpg',
      imageAlt: 'Canadian flag waving — Canadian citizenship',
      sections: [
        {
          heading: 'Who can apply for citizenship',
          paragraphs: [
            'Most applicants must be permanent residents who meet physical presence, language, and tax filing requirements. Some individuals — such as children born to Canadian parents abroad — may qualify through different routes.',
          ],
        },
        {
          heading: 'Physical presence requirement',
          paragraphs: [
            'Adult applicants generally must have been physically present in Canada for at least 1,095 days (three years) within the five years immediately before applying. Time spent in Canada before becoming a permanent resident may count for up to one year.',
            'We help you calculate your eligible days using IRCC’s residence calculator rules before you submit.',
          ],
        },
        {
          heading: 'Other eligibility requirements',
          paragraphs: [
            'IRCC also assesses language ability, tax compliance, and admissibility.',
          ],
          list: [
            'Valid permanent resident status with no unfulfilled conditions',
            'Filed Canadian income taxes for required years, if applicable',
            'Language skills in English or French (CLB 4 or higher for adults 18–54)',
            'Pass the citizenship test on rights, responsibilities, and knowledge of Canada (ages 18–54)',
            'No prohibitions due to criminal history or misrepresentation',
          ],
        },
        {
          heading: 'The application process',
          orderedList: [
            'Confirm you meet physical presence and eligibility requirements',
            'Gather identity documents, travel history, and tax records',
            'Submit your citizenship application online or on paper with the application fee',
            'Provide biometrics and attend a citizenship test and interview, if required',
            'Attend a citizenship ceremony and take the Oath of Citizenship',
          ],
        },
        {
          heading: 'Citizenship for children',
          paragraphs: [
            'Minor children may be included in a parent’s application or may apply separately depending on age and circumstances. Different rules apply for children born in Canada or born abroad to Canadian parents.',
          ],
        },
        {
          heading: 'How we help',
          paragraphs: [
            'Citizenship refusals often relate to residency calculations, incomplete travel records, or tax filing gaps. We review your history, identify risks early, and prepare a complete application file.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'Eligibility tools, fees, and study materials for the citizenship test are on Canada.ca.',
          ],
          link: {
            label: 'Canadian citizenship — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html',
          },
        },
      ],
    },
    'study-work-permit-extension': {
      intro:
        'If your study or work permit is nearing expiry, you must extend or change your status before it ends. Applying on time lets you remain in Canada under implied status while IRCC reviews your file.',
      image: '/images/other-services/study-work-permit-extension.jpg',
      imageAlt: 'Desk with documents and laptop — permit extensions in Canada',
      sections: [
        {
          heading: 'Why extensions matter',
          paragraphs: [
            'Your permit’s expiry date is shown in the top right corner. Once it expires without an extension in progress, you lose legal status in Canada. Applying at least 30 days before expiry is strongly recommended.',
            'If you apply before your permit expires and remain in Canada, you may continue studying or working under the same conditions until IRCC makes a decision — this is known as implied status.',
          ],
        },
        {
          heading: 'Study permit extensions',
          paragraphs: [
            'International students extend their study permit when they need more time to finish their program, change schools, or move to a new level of study.',
          ],
          list: [
            'Apply at least 30 days before your current permit expires',
            'Updated letter of acceptance from your Designated Learning Institution (DLI)',
            'Proof of funds for tuition and living expenses',
            'Explanation if you changed programs, schools, or study level',
            'Maintain full-time student status unless IRCC has authorized otherwise',
          ],
        },
        {
          heading: 'Work permit extensions',
          paragraphs: [
            'Employer-specific permits are tied to one employer and role. Open permits allow you to work for most employers. Extension requirements depend on your permit type and whether a new LMIA is needed.',
          ],
          list: [
            'Employer-specific extension — new job offer and LMIA (if required)',
            'Open work permit extension — PGWP, spousal open permit, or bridging permit',
            'Post-Graduation Work Permit (PGWP) — one-time opportunity based on program length (8 months to 3 years)',
            'Bridging Open Work Permit (BOWP) — for PR applicants with expiring work permits',
          ],
        },
        {
          heading: 'Bridging open work permits',
          paragraphs: [
            'A BOWP lets economic-class permanent residence applicants keep working while IRCC processes their PR application. You must be in Canada, hold a work permit expiring within four months, and have a complete PR application under review.',
            'If your permit expires before the BOWP is approved, implied status may allow you to keep working until a decision is made. If the BOWP is refused, you must stop working immediately.',
          ],
        },
        {
          heading: 'Restoration of status',
          paragraphs: [
            'If your permit has already expired and you are still in Canada, you may apply to restore your status within 90 days of expiry. Restoration is not guaranteed and you cannot work or study until it is approved.',
            'We help assess whether extension, restoration, or leaving Canada and reapplying is the right option for your situation.',
          ],
        },
        {
          heading: 'How we help',
          paragraphs: [
            'Permit extensions involve tight deadlines and program-specific rules. We review your permit type, employer documents, DLI enrolment, and travel history to prepare a complete extension application.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'IRCC publishes separate guidance for extending study permits and work permits on Canada.ca.',
          ],
          link: {
            label: 'Extend your study permit — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/extend-study-permit.html',
          },
        },
        {
          heading: 'Work permit extension — official information',
          paragraphs: [
            'If you are extending an employer-specific or open work permit, review the work permit extension requirements and forms on Canada.ca.',
          ],
          link: {
            label: 'Extend your work permit — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/extend-work-permit.html',
          },
        },
      ],
    },
    'visitor-record-extension': {
      intro:
        'A visitor record lets you extend your stay in Canada as a temporary resident when your authorized visit period is ending. You must apply before your current status expires while you are still inside Canada.',
      image: '/images/other-services/visitor-record-extension.jpg',
      imageAlt: 'Airplane wing above clouds — extending your visitor stay in Canada',
      sections: [
        {
          heading: 'What is a visitor record?',
          paragraphs: [
            'A visitor record is an official document from IRCC that extends your stay in Canada as a visitor, or changes your conditions — for example, if you entered without a visitor visa and need written proof of your status.',
            'It is not a visa. A visitor visa or eTA lets you travel to Canada; a visitor record governs how long you may remain once you are here.',
          ],
        },
        {
          heading: 'Who needs a visitor record',
          paragraphs: [
            'You may need a visitor record if you are already in Canada and want to stay longer as a visitor, or if you need a document showing your extended visitor status.',
          ],
          list: [
            'Your initial authorized stay (usually up to six months) is ending and you wish to remain',
            'You entered Canada without a visitor visa and need proof of your visitor status',
            'You want to change conditions on your current visitor status',
            'You are not planning to work or study — separate permits are required for those activities',
          ],
        },
        {
          heading: 'When to apply',
          paragraphs: [
            'Apply at least 30 days before your current status expires. Your passport should remain valid for the full period you are requesting.',
            'If you apply before your status expires and remain in Canada, you may stay under implied status until IRCC decides your application — even if your original stay date passes while you wait.',
          ],
        },
        {
          heading: 'Documents to prepare',
          paragraphs: [
            'IRCC assesses whether you remain a genuine visitor who will respect the conditions of your stay.',
          ],
          list: [
            'Valid passport and copy of your current entry stamp or visitor document',
            'Proof of sufficient funds for your extended stay',
            'Clear reason for requesting more time in Canada',
            'Evidence of ties to your home country showing you will leave when required',
            'Letter of invitation from a host in Canada, if applicable',
            'Medical exam results, if requested for your case',
          ],
        },
        {
          heading: 'How the application works',
          orderedList: [
            'Confirm your current status expiry date and the length of extension you need',
            'Gather financial documents, travel history, and supporting letters',
            'Submit your visitor record application online through IRCC',
            'Provide biometrics if required and respond to any additional document requests',
            'Receive your visitor record with a new authorized stay date',
          ],
        },
        {
          heading: 'Visitor record vs. new visitor visa',
          paragraphs: [
            'If you leave Canada, your visitor record is no longer valid for re-entry. To return, you generally need a new visitor visa or eTA depending on your citizenship.',
            'A visitor record extension is for people already in Canada. If you are outside Canada, you apply for a new visitor visa instead.',
          ],
        },
        {
          heading: 'Restoration if your status expired',
          paragraphs: [
            'If your visitor status has already expired and you are still in Canada, you may apply to restore your status as a visitor within 90 days of expiry. Restoration is not guaranteed.',
            'We help you decide whether to extend on time, restore status, or leave Canada and reapply from abroad.',
          ],
        },
        {
          heading: 'How we help',
          paragraphs: [
            'Visitor extensions are often refused when purpose of stay or ties to the home country are unclear. We review your history, explain your situation clearly, and prepare a complete application before your status ends.',
          ],
        },
        {
          heading: 'Official government information',
          paragraphs: [
            'Eligibility rules, fees, and processing times are published on Canada.ca.',
          ],
          link: {
            label: 'Extend your stay in Canada — Canada.ca',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/extend-stay.html',
          },
        },
      ],
    },
  },
}

export function getServiceTopic(category, slug) {
  return serviceTopics[category]?.[slug] ?? null
}
