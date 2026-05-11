export const departments = [
  { code:"01 / HOME AFFAIRS", name:"Civil Registration & Immigration", needs:["Apply for birth, death & marriage certificates","Apply / renew national ID & passport","Track application status online"], builds:["Online application form with document upload","Citizen-facing case tracking dashboard","Fee payment gateway linked to treasury","SMS / email notification engine"], tags:[{label:"Citizen Portal",type:"coral"},{label:"Finance & Payments",type:"purple"}] },
  { code:"02 / NAMRA", name:"Finance & Revenue Authority", needs:["File personal & business income tax returns","Pay VAT and other taxes","Apply for tax clearance certificate","Check outstanding balances"], builds:["e-Tax filing module (individual & corporate)","Namibia-specific tax calculation engine","Online payment with local bank integration","Digital tax clearance with QR verification","Compliance audit trail for officials"], tags:[{label:"Finance & Payments",type:"purple"},{label:"Procurement & Assets",type:"amber"}] },
  { code:"03 / HEALTH", name:"Health & Social Services", needs:["Book clinic / hospital appointments","Access personal health records","Apply for disability or social grants","Request medical reports & letters"], builds:["Appointment scheduling linked to facility slots","Secure patient record access portal","Social grant application & approval workflow","Grant payment disbursement tracking"], tags:[{label:"Citizen Portal",type:"coral"},{label:"Finance & Payments",type:"purple"},{label:"HR & Workforce",type:"teal"}] },
  { code:"04 / EDUCATION", name:"Education, Arts & Culture", needs:["Enrol children in schools","Apply for bursaries & scholarships","Check exam results","Apply for university admission"], builds:["School enrolment portal with placement workflow","Bursary / scholarship application & scoring","Secure exam result publication portal","School fee payment module"], tags:[{label:"Citizen Portal",type:"coral"},{label:"Finance & Payments",type:"purple"}] },
  { code:"05 / AGRICULTURE", name:"Agriculture, Water & Land Reform", needs:["Apply for communal / resettlement land","Register a farm or plot","Apply for water connection","Request agricultural subsidies & inputs"], builds:["Land application & allocation workflow","Digital land registry with plot history","Water connection request & billing","Subsidy application, approval & disbursement"], tags:[{label:"Citizen Portal",type:"coral"},{label:"Procurement & Assets",type:"amber"},{label:"Finance & Payments",type:"purple"}] },
  { code:"06 / LABOUR", name:"Labour & Employment Relations", needs:["Register a business or employer","Apply for work permits (foreign nationals)","File labour dispute complaints","Register for unemployment benefits"], builds:["Business registration intake & approval workflow","Work permit application tracking system","Labour dispute case management module","Unemployment benefit eligibility & payment"], tags:[{label:"Citizen Portal",type:"coral"},{label:"HR & Workforce",type:"teal"},{label:"Finance & Payments",type:"purple"}] },
  { code:"07 / TRADE", name:"Trade & Industrialisation", needs:["Apply for business / trading licences","Register a company","Renew licences annually","Apply for import / export permits"], builds:["Online licence application & renewal portal","Company registration database with search","Automated renewal reminders & fee collection","Digital permit & certificate generation"], tags:[{label:"Citizen Portal",type:"coral"},{label:"Finance & Payments",type:"purple"},{label:"Procurement & Assets",type:"amber"}] },
  { code:"08 / TRANSPORT", name:"Works & Transport — Road Authority", needs:["Register / renew vehicle licence","Apply for a driver's licence","Pay traffic fines","Book driving tests"], builds:["Vehicle registration & renewal system","Driving test booking & slot management","Traffic fine payment portal with bank integration","Licence card issuance tracking"], tags:[{label:"Finance & Payments",type:"purple"},{label:"Citizen Portal",type:"coral"}] },
  { code:"09 / MUNICIPALITIES", name:"Urban & Rural Development", needs:["Apply for a residential plot or stand","Submit building plans for approval","Pay municipal rates & utility bills","Lodge service delivery complaints"], builds:["Plot application & allocation workflow","Building plan submission & approval portal","Rates & utilities billing + online payment","Citizen complaint & feedback management"], tags:[{label:"Finance & Payments",type:"purple"},{label:"Citizen Portal",type:"coral"},{label:"Procurement & Assets",type:"amber"}] },
  { code:"10 / ENVIRONMENT", name:"Environment, Forestry & Tourism", needs:["Apply for wildlife / conservancy permits","Register hunting or tour operators","Pay national park entrance fees"], builds:["Environmental permit application & tracking","Operator / conservancy registration module","Park fee payment & e-permit issuance"], tags:[{label:"Citizen Portal",type:"coral"},{label:"Finance & Payments",type:"purple"}] },
  { code:"11 / WELFARE", name:"Gender Equality & Child Welfare", needs:["Apply for child maintenance","Report GBV cases — confidentially","Apply for foster care or adoption"], builds:["Sensitive case intake & management portal","Child welfare application & approval workflow","Social worker caseload management system","Confidential reporting with case number tracking"], tags:[{label:"Citizen Portal",type:"coral"},{label:"HR & Workforce",type:"teal"}] },
]

export const priorities = [
  { tier:"p1", tierLabel:"Priority 1 — Pitch first", title:"NamRA — Tax & Revenue", desc:"Every employed Namibian and every registered business files taxes. Currently mostly paper-based. A working e-Tax module is an immediate, measurable win for government revenue collection.", reason:"Finance module already handles VAT and complex tax rules. Namibia localisation is configuration, not a rebuild." },
  { tier:"p1", tierLabel:"Priority 1 — Pitch first", title:"Home Affairs — IDs & Passports", desc:"The most complained-about government service in Namibia. Long queues, lost paperwork, zero status visibility. This also anchors the national identity layer everything else plugs into.", reason:"Workflow and case management tools are the exact fit. Solving this builds the identity backbone for all other services." },
  { tier:"p2", tierLabel:"Priority 2 — Second wave", title:"Road Authority — Licences & Fines", desc:"High transaction volume daily. Vehicle renewals, driving tests, and fines are simple and repetitive — ideal for a self-service portal. Fast to deploy, visible public impact.", reason:"Simple payment + scheduling workflow. Builds public trust for the wider government rollout." },
  { tier:"p2", tierLabel:"Priority 2 — Second wave", title:"Municipalities — Rates & Utilities", desc:"Every household in Windhoek and Walvis Bay pays rates and utilities. Moving this online removes the biggest reason citizens visit a municipal office.", reason:"Billing modules are production-ready. Localise for NAD, integrate local banks, go live." },
  { tier:"p3", tierLabel:"Priority 3 — Longer play", title:"Education — Enrolment & Bursaries", desc:"School enrolment affects every family. Bursary applications are high-stakes and currently opaque. Digitising both improves equity and reduces corruption risk.", reason:"Once the citizen portal foundation is in from Phase 1, education is configuration on top — not a net-new build." },
  { tier:"p3", tierLabel:"Priority 3 — Longer play", title:"Agriculture — Land & Subsidies", desc:"Land reform is politically sensitive but digitally overdue. A transparent allocation workflow reduces disputes — a good-governance story for donor-funded projects.", reason:"Asset management and procurement modules underpin land registry. Position as a transparency tool." },
]

export const aiAgents = [
  {
    name: "Document Verification Agent",
    without: "A clerk manually opens each uploaded file, eyeballs the ID or certificate, types the details into a system, and decides if it looks real. Takes days.",
    with: "The agent reads the uploaded document instantly, checks it against the national ID database, flags forgeries, and either approves or routes to a human — in seconds.",
    applies: ["Home Affairs", "Health", "Labour", "Welfare"],
  },
  {
    name: "Tax Calculation Agent",
    without: "Citizens fill in paper forms, a NamRA official checks the arithmetic, enters figures manually, and issues a clearance letter by post days later.",
    with: "The agent reads income data, applies Namibia’s current tax rules automatically, calculates what is owed, and issues a QR-verified digital clearance certificate immediately.",
    applies: ["NamRA", "Trade", "Labour"],
  },
  {
    name: "Case Routing Agent",
    without: "Every application lands in the same inbox. A supervisor manually reads each one and decides who should handle it — or it sits unread.",
    with: "The agent reads each new case, scores its complexity, assigns it to the right officer or auto-approves routine cases — so humans only touch the cases that actually need them.",
    applies: ["Home Affairs", "Health", "Welfare", "Agriculture"],
  },
  {
    name: "Notification Agent",
    without: "Citizens have no idea what is happening with their application. They travel to the office to ask. The officer checks manually and calls back maybe.",
    with: "The agent watches every status change in real time and fires an SMS or email to the citizen the moment something moves — without any human triggering it.",
    applies: ["All departments"],
  },
  {
    name: "Fraud Detection Agent",
    without: "Duplicate applications, false addresses, and forged documents go unnoticed until an audit months later — if ever.",
    with: "The agent cross-checks every new submission against existing records, flags duplicates and anomalies instantly, and holds suspicious cases for human review before any decision is made.",
    applies: ["NamRA", "Home Affairs", "Land Reform", "Trade"],
  },
  {
    name: "Land Allocation Agent",
    without: "Officials manually compare hundreds of applicants against available plots, cross-check eligibility rules, and make decisions that are hard to audit or explain.",
    with: "The agent scores every applicant against published criteria, ranks them transparently, matches them to available plots, and generates a full audit trail of every decision.",
    applies: ["Agriculture", "Municipalities"],
  },
]
