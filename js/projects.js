        // Avoid redefining if external script loads later
        if (!window.PROJECTS_LOADED) {
            window.PROJECTS_LOADED = true;

            (function ($) {
                // Minimal subset of PROJECTS_DATA copied from external script
                const PROJECTS_DATA = [
  {
    "id": "wiki-refactor", 
    "title": "Knowledge platform transformation for self-service at scale", 
    "projectType": "Platform Transformation, Content Governance, Information Architecture", 
    "description": "Transformed platform serving 300 technical writers into self-service infrastructure for thousands of AWS engineers and product managers. Redesigned with persistent navigation, role-based guides, and embedded AI tools.",
    "fullDescription": "Transformed AWS Technical Content Experience wiki from specialist platform serving 300 technical writers into self-service infrastructure for thousands of AWS engineers and product managers. Audited and restructured 2,000+ pages of content to remove writer-specific workflows, creating audience-agnostic resources for engineering and product teams. Redesigned complete platform with persistent navigation, role-based getting started guides, FAQs, and embedded single-job AI tools for non-writer users. Established new taxonomy structure, governance framework, and access controls ensuring platform sustainability. Implemented content lifecycle policies and maintenance schedule to prevent drift at scale. Managed 8-week, 4-workstream delivery with cross-functional team of 10 contributors.",
    "skills": ["Platform transformation", "Audience transformation (specialist to generalist)", "Content governance at scale", "Information architecture", "Site redesign and UX", "AI tool integration", "Access control and permissions", "Program management", "Cross-functional leadership"], 
    "results": "Enabled self-service documentation for thousands of AWS engineers and PMs. Established governance framework preventing drift at scale. Created sustainable platform for organization-wide use.", 
    "tags": ["Content Strategy", "Leadership", "AWS", "Platform Engineering"] 
  },
  {
    "id": "nbs-phased-clearance",
    "title": "Sequencing a guide rebuild around clearance requirements",
    "projectType": "Content Strategy, Federal Clearance Strategy",
    "description": "Split an inherited guide's rebuild into two clearance passes: a structural-only reorganization first, then a full content revision once structure was approved, avoiding a wasted clearance cycle on content already slated for rewrite.",
    "fullDescription": "I inherited a guide with uncleared content from a previous contractor, and a new chapter (Before You Deploy) that needed a place to live. Rather than bundling structure and content into one clearance request, I split the work deliberately: first, a structural-only reorganization (new information architecture, front matter, and section naming) submitted for clearance without touching the actual procedural content, since that content was already slated for a full rewrite. Once the structure cleared, I followed with a complete content revision pass across the guide, correcting technical accuracy issues and bringing every page into compliance with federal content standards.",
    "skills": ["Federal clearance strategy and sequencing", "Information architecture", "Large-scale technical and editorial revision"],
    "results": "Avoided burning a clearance cycle on content that was about to be rewritten anyway, gave the incoming BYD chapter a home immediately instead of waiting on a full content overhaul first, and left the guide on a technically accurate, standards-compliant foundation for future work.",
    "link": "https://cdcgov.github.io/NEDSS-SystemAdminGuide/",
    "tags": ["Content Strategy", "Technical Writing", "Civic Tech"]
  },
  {
    "id": "nbs-multicloud-deployment",
    "title": "Rebuilding deployment documentation for a second cloud platform",
    "projectType": "Developer Documentation, Platform Expansion",
    "description": "Extended deployment documentation from AWS-only to AWS and Azure: a further structural pass plus a full content rewrite across the deployment chapter, including new quickstart guides and revised architecture documentation for both platforms.",
    "fullDescription": "Working from the compliant baseline established in the prior clearance pass, I led a second, larger restructuring effort to extend deployment documentation from AWS-only to AWS and Azure. This meant a further structural pass to accommodate parallel deployment paths, combined with a full content rewrite across the deployment chapter: new quickstart guides for each platform, revised architecture documentation, and updated procedural content throughout.",
    "skills": ["Multi-platform technical documentation", "Information architecture at scale", "Managing a large-scope documentation epic"],
    "results": "Took the guide from supporting a single hosting path to supporting two, without duplicating content or forking the guide into separate tracks. State and local IT teams can now deploy on whichever platform fits their environment from one coherent source.",
    "link": "https://cdcgov.github.io/NEDSS-SystemAdminGuide/docs/deploy-nbs7/full-deploy.html",
    "tags": ["Developer Docs", "Technical Writing", "Civic Tech"]
  },
  {
    "id": "multi-version-cms", 
    "title": "Multi-version CMS: Eliminating maintenance overhead", 
    "projectType": "Documentation Systems, Content Infrastructure", 
    "description": "Built single-source CMS that auto-generates documentation across 4 editions and 15 versions. System remained in production four years after departure, preventing dead links and routing users to correct content.",
    "fullDescription": "Designed custom CMS using SugarCRM to eliminate hours of redundant maintenance per release cycle. Built single-source system with conditional content divs that auto-generate all version/edition combinations. Created 'smart links' and persistent page jumper widget with cookie-based version detection for seamless navigation. System continues automatically routing users to correct documentation and preventing dead links from version deprecation, four years after implementation.", 
    "skills": ["Information architecture and CMS design", "Single-source content strategy", "User experience optimization", "System design and implementation"], 
    "results": "Eliminated hours of redundant maintenance per release cycle. Reduced content errors from manual duplication. System remains in production four years after departure.", 
    "link": "https://support.sugarcrm.com/documentation/", 
    "tags": ["Technical Writing", "SugarCRM", "CMS Design", "Systems Architecture"] 
  },
  {
    "id": "sugarcrm-release-management", 
    "title": "Multi-version release management: Maintaining quality across 150 annual releases", 
    "projectType": "Content Strategy, Release Management", 
    "description": "Managed content strategy for 150+ annual releases across 24 concurrent versions at SugarCRM. Built reusable templates and governance frameworks that enabled team to scale without sacrificing quality.",
    "fullDescription": "Managed content strategy for 150+ annual software releases (averaging 3 per week) across 24 concurrent product versions and 5 editions. Built reusable templates, version-specific workflows, and governance frameworks that maintained quality and consistency across complex product matrix. Established processes for version deprecation, feature parity tracking, and edition-specific content that reduced documentation overhead while improving customer experience. Maintained 100% team retention through sustained high-velocity release cycles.", 
    "skills": ["Content strategy", "Release management", "Information architecture", "Version control systems", "Workflow design", "Content reuse patterns"], 
    "results": "Maintained documentation quality across 24 versions while scaling to 150+ annual releases. Reduced customer confusion about version-specific features. Maintained 100% team retention.", 
    "link": "https://support.sugarcrm.com/documentation", 
    "tags": ["Content Strategy", "Technical Writing", "SugarCRM", "Process Design"] 
  },
  {
    "id": "ai-upskilling", 
    "title": "AWS AI transformation: Changing workflows for 200+ writers", 
    "projectType": "AI Transformation, Training Program", 
    "description": "Contributed to AI transformation program for 200+ AWS writers. Built GenAI tool achieving thousands of executions. Increased writer efficiency while maintaining quality.",
    "fullDescription": "Contributed to design and implementation of AI transformation program for 200+ AWS technical writers. Built internal GenAI tool for content creation and review, achieving thousands of executions across AWS services. Created organization-wide AI context files and training materials for content automation. Established best practices for AI-assisted writing workflows and quality assurance. Increased writer efficiency while maintaining quality standards and establishing framework for responsible AI use.", 
    "skills": ["AI tool development", "Organizational change management", "Training material creation", "Quality assurance framework", "Best practices development"], 
    "results": "GenAI tool achieved thousands of uses. Increased writer efficiency while maintaining quality. Established framework for responsible AI use.", 
    "tags": ["AI/ML", "Leadership", "AWS"] 
  },
  {
    "id": "nbs-eclearance-rubric",
    "title": "eClearance rubric: Automating content review to earn stakeholder trust",
    "projectType": "Content Strategy, Process Design, Stakeholder Trust",
    "description": "CDC stakeholders had to carry our content through eClearance for us, so every avoidable defect spent someone else's time. Built a rubric and a Claude project trained on it: upload a draft, get the specific violations, and produce a cover page showing the work was already checked.",
    "fullDescription": "CDC stakeholders had to carry our content through eClearance on our behalf, which made every avoidable defect a claim on someone else's time and a quiet withdrawal from their confidence in us. Clearance review flags content against a defined set of criteria, but knowing how to apply that standard consistently had lived in individual reviewers' heads. I built a reusable rubric encoding CDC clearance standards and Skylight content conventions into a standard any team member could apply independently, then expanded its scope beyond its original use case as the team's needs grew. To make it usable without reading it end to end, I set up a shared Claude project in the HHS Claude environment trained on the rubric: a team member uploads their draft and gets back a list of the specific violations found in the actual text, then carries those into an interactive web form that prints as the cover page for the clearance submission.",
    "skills": ["Stakeholder trust and transparency by design", "Content governance and standards documentation", "AI-assisted review tooling", "Reducing single-point-of-failure expertise"],
    "results": "Content now arrives at clearance with known issues already identified and rationale already documented, and no longer depends on any one person's institutional knowledge of what reviewers look for. The printed cover page makes our self-review visible to the CDC staff sponsoring each submission, turning an opaque handoff into a transparent one and demonstrating that we held ourselves to the standard before spending their time on it.",
    "links": [{"label": "Pre-clearance checklist", "url": "https://jburgh.github.io/cdc/artifacts/preclearance-checklist/"}],
    "tags": ["Content Strategy", "Process Design", "Leadership", "AI/ML", "Civic Tech"]
  },
  {
    "id": "nbs-docs-as-code",
    "title": "Docs-as-code infrastructure: From single point of failure to team-ready system",
    "projectType": "Content Strategy, Documentation Infrastructure",
    "description": "Built contributor workflows, a Docker-based preview environment, content templates, and CI checks for a repo that had none. Replaced hardcoded version strings with a single templating variable across the guide.",
    "fullDescription": "Built the infrastructure a documentation repo needed to support more than one contributor: a documented workflow covering environment setup, branching, and PR review; a Docker-based local preview environment; reusable content templates by type; and CI checks for build validation, markdown linting, and link checking. Replaced hardcoded version strings across the guide with a single templating variable.",
    "skills": ["Docs-as-code tooling", "CI/CD for documentation", "Contributor experience design"],
    "results": "Turned a single-maintainer repo into one a team could contribute to without tribal knowledge. Release version updates went from a manual, error-prone find-and-replace sweep to a one-line config change.",
    "link": "https://github.com/CDCgov/NEDSS-SystemAdminGuide/blob/main/README.md",
    "tags": ["Developer Docs", "Automation", "Civic Tech"]
  },
  {
    "id": "release-notes", 
    "title": "Release notes automation: Hours to one button click", 
    "projectType": "Process Automation, Release Communication", 
    "description": "Automated EMR release documentation using Python scripts that read manifests and populate XML templates. Reduced release documentation from hours of manual table updates to one button click.",
    "fullDescription": "Automated EMR release documentation generation using Python scripts that read service team manifests and Apache Bigtop files. Created XML templates with entity-based content injection that eliminated manual data entry across multiple page types. Writers now only input custom content via standardized entities. Eliminated transcription errors and freed writers to focus on feature documentation rather than data entry.", 
    "skills": ["Process automation and scripting", "Systems design and architecture", "Documentation infrastructure", "XML/entity-based content management"], 
    "results": "Reduced release documentation from hours to single button click. Eliminated transcription errors. Freed writers for feature documentation.", 
    "link": "https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-7x.html", 
    "tags": ["Developer Docs", "Technical Writing", "AWS", "Python", "Automation"] 
  },
  {
    "id": "nbs-preview-pipeline",
    "title": "Preview pipeline: Automated staging for pre-clearance review",
    "projectType": "Developer Documentation, Tooling",
    "description": "Built a GitHub Actions workflow that auto-publishes content to a staging site on every push to a preview branch, letting federal reviewers see fully rendered pages instead of raw Markdown diffs.",
    "fullDescription": "Content awaiting federal clearance can't go live, but stakeholders still need to review it as it will actually render, not as a Markdown diff. Built a GitHub Actions workflow that triggers on push to a preview branch, builds the site, and publishes it to a staging environment automatically, giving reviewers a fully navigable version of in-progress content.",
    "skills": ["CI/CD pipeline design", "Staging environment architecture", "Review workflow design"],
    "results": "Shifted stakeholder review from reading raw text changes to evaluating the guide as end users would experience it, catching rendering and navigation issues a diff view would miss entirely.",
    "link": "https://github.com/CDCgov/NEDSS-SystemAdminGuide/blob/main/.github/workflows/jekyll.yml",
    "tags": ["Developer Docs", "Automation", "Civic Tech"]
  },
  {
    "id": "nbs-word-automation",
    "title": "Web-to-Word doc automation: Removing manual work from clearance submissions",
    "projectType": "Developer Documentation, Tooling",
    "description": "Built a custom GitHub Action converting Markdown guide pages to formatted Word docs on demand, keeping Markdown as the single source of truth while meeting clearance's Word-format requirement.",
    "fullDescription": "Federal clearance required Word document submissions, but the guide is authored in Markdown. Manually reformatting pages for every clearance batch was slow and risked the reviewed version silently drifting from the published source. Built a custom GitHub Action that converts guide pages from Markdown to formatted Word docs on demand, keeping Markdown as the single authoring source of truth.",
    "skills": ["Custom GitHub Actions development", "Docs-as-code workflow design", "Compliance process automation"],
    "results": "Removed a manual, error-prone reformatting step from clearance submissions and eliminated the risk of the Word version and the published source diverging.",
    "link": "https://github.com/CDCgov/NEDSS-SystemAdminGuide/blob/main/.github/workflows/review-doc.yml",
    "tags": ["Developer Docs", "Automation", "Civic Tech"]
  },
  {
    "id": "nbs-ai-assistants",
    "title": "AI assistant design: Domain-aware tooling for a moving target",
    "projectType": "AI-Powered Documentation",
    "description": "Designed a structured AI knowledge system that survived a full platform migration, and rewrote a UX microcopy assistant that over-asked and under-delivered into one that defaults to a single clear recommendation.",
    "fullDescription": "Designed two AI assistant systems. The first was a structured project knowledge base capturing architecture rules, terminology, and stakeholder context that stayed current as the project evolved, and that survived a full platform migration when a regulatory requirement forced a mid-project move. The second was a UX microcopy assistant, rewritten to fix over-asking and indecisive output so it defaulted to one clear recommendation instead of a menu of options.",
    "skills": ["AI system design and prompt engineering", "Instruction iteration from observed failure modes", "Knowledge management architecture"],
    "results": "The knowledge system cut ramp-up time on AI-assisted work across a project spanning clearance requirements and shifting technical architecture. The microcopy assistant went from needing constant correction to producing usable output by default.",
    "link": "https://partyrock.aws/u/jillshaheen/OE9I1Jj9K/NBS-7-UI-text-helper/",
    "tags": ["AI/ML", "Content Strategy", "Civic Tech"]
  },
  {
    "id": "nbs-reference-pages",
    "title": "Reference page design: Critical resources from a vague ask and a broken source",
    "projectType": "UX Writing, Accessibility, Design Systems",
    "description": "Rebuilt an inaccessible compatibility matrix as a linkable table, then designed a release history page from scratch off a one-line ask: badges matched to the NBS UI, tooltips explaining each state, and a sitewide style sweep the design work surfaced.",
    "fullDescription": "Rebuilt the version-compatibility matrix (previously a static, outdated Word doc image with empty cells and unlabeled “X” marks) as an accessible, linkable Markdown table. Designed the release history page from scratch off a one-line stakeholder ask, building a badge system matched to the NBS modernized UI, with tooltips explaining each support state and linking through to the compatibility matrix. The badge design surfaced UI inconsistencies elsewhere in the guide, prompting a full site-wide style sweep.",
    "skills": ["Section 508 / WCAG remediation", "Original page and component design from ambiguous requirements", "Design system consistency (site-wide style sweep)"],
    "results": "Replaced an inaccessible, unlinkable image with a source-of-truth table, and turned a one-line ask into a reusable badge-and-tooltip pattern that drove a sitewide UI consistency audit.",
    "links": [{"label": "Compatibility matrix", "url": "https://cdcgov.github.io/NEDSS-SystemAdminGuide/docs/supported-versions.html"}, {"label": "Release history", "url": "https://cdcgov.github.io/NEDSS-SystemAdminGuide/docs/nbs7-introduction/release-history.html"}],
    "tags": ["UX Writing", "Design Systems", "Civic Tech"]
  },
  {
    "id": "emr-console-redesign", 
    "title": "EMR console redesign: Reducing user errors in cluster configuration", 
    "projectType": "UX Writing for AWS Console", 
    "description": "Led content design for complete EMR console redesign. Wrote all interface text for cluster creation/modification workflows serving millions of AWS developers.",
    "fullDescription": "Led content design for complete redesign of Amazon EMR's cluster creation and modification workflows. Wrote all interface text including section titles, field labels, help panels, descriptions, and navigational elements. Collaborated with product designers through multiple Figma iterations, ensuring content aligned with CloudScape design system and AWS Style Guide standards. Improved clarity of cluster configuration process and reduced user errors through clearer labeling and contextual help.", 
    "skills": ["UX writing for complex technical workflows", "Cross-functional collaboration", "Design system implementation (CloudScape)", "Progressive disclosure", "Accessibility and inclusive language"], 
    "results": "Improved clarity for millions of AWS developers. Reduced user errors through clearer labeling and contextual help.", 
    "link": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/whats-new-in-console.html", 
    "image": "projects/emr-console-thumb.png", 
    "tags": ["UX Writing", "Design Systems", "AWS"] 
  },
  {
    "id": "emr-error-messages", 
    "title": "EMR error messages: Transforming cryptic errors into self-service resolution", 
    "projectType": "Content Strategy, UX Writing", 
    "description": "Led initiative to refactor top 20 EMR console errors. Changed product architecture to add plain-language messages. Reduced support case volume through actionable guidance.",
    "fullDescription": "Led initiative to refactor the top 20 most-emitted Amazon EMR console errors. Worked with engineering to change error structure, adding a new plain-language ErrorMessage field where previously only programmatic ErrorCode existed. Wrote customer-facing error messages and created corresponding troubleshooting pages. Designed reusable framework adopted across EMR service. Transformed cryptic errors into actionable guidance, enabling customers to self-resolve issues and reducing support case volume.", 
    "skills": ["Error message design", "Self-service content strategy", "Cross-functional influence", "Reusable framework creation"], 
    "results": "Transformed cryptic errors into actionable guidance. Reduced support case volume. Framework adopted as standard across EMR service.", 
    "link": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-troubleshoot-error-errordetail.html", 
    "image": "projects/error-thumb.png", 
    "tags": ["UX Writing", "Content Strategy", "AWS"] 
  },
  {
    "id": "notebooks-workspaces", 
    "title": "Notebooks to Workspaces migration: Enabling smooth transition", 
    "projectType": "UX Writing, Change Management", 
    "description": "Wrote in-product guidance for major conceptual changes in EMR Studio console. Enabled smooth migration without extensive support burden.",
    "fullDescription": "Wrote in-product guidance to educate users on major conceptual changes in redesigned EMR Studio console. The product shifted from 'Notebooks' model to 'Workspaces' model, requiring clear explanation of new concepts, migration paths, and updated workflows. Created content for landing page, action panels, and contextual help that enabled smooth migration without requiring extensive support.", 
    "skills": ["Conceptual explanation", "Change management through content", "User education in-product", "Action-oriented writing"], 
    "results": "Enabled smooth migration from legacy to new experience. Users understood new model without extensive support.", 
    "link": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-migration.html", 
    "image": "projects/notebooks.png", 
    "tags": ["UX Writing", "Content Strategy", "AWS"] 
  },
  {
    "id": "nbs-decision-support",
    "title": "Decision-support content: Writing through a mid-project model change",
    "projectType": "Developer Documentation, Decision Support",
    "description": "Wrote a jurisdiction-facing decision guide from scratch, then ran a full impact analysis across every page when CDC reframed two major components mid-project. Shipped under the new model without losing prior work.",
    "fullDescription": "Wrote a decision-support chapter from scratch to help jurisdictions choose which system components to adopt and in what order. Midway through, CDC reframed two major components from optional up-front choices into sequential deployment phases. Ran a full impact analysis across every affected page, categorized rewrites by effort, and surfaced genuinely open decisions to stakeholders instead of guessing.",
    "skills": ["Decision-support content design", "Cross-team impact analysis", "Writing for non-expert technical audiences"],
    "results": "Shipped under the new model without restarting from scratch or losing prior work. The impact-tracking method became the standard approach for later content reframes on the same guide.",
    "link": "https://cdcgov.github.io/NEDSS-SystemAdminGuide/docs/before-you-deploy.html",
    "tags": ["Technical Writing", "Content Strategy", "Civic Tech", "Public Health"]
  },
  {
    "id": "nbs-site-glossary",
    "title": "Site glossary: Building a reference that survives scope creep",
    "projectType": "Content Strategy, Accessibility, Tooling",
    "description": "Built a site-wide glossary, then rescoped it entirely at CDC's request to remove system-specific framing so it stays accurate over time. Implemented inline tooltip functionality so definitions surface without leaving the page.",
    "fullDescription": "Drafted a site-wide glossary for the guide to serve as a durable acronym reference, reducing the need to spell out terms like HL7, API, and ELR on every page submitted for clearance. Midway through, CDC requested a significant rescope: all system-specific framing had to be removed so entries would stay accurate as the underlying system evolves. Ran a full pass across every entry to strip that framing, then added scope guidance to contributor docs to prevent the same drift in future edits. Also researched and implemented inline tooltip functionality in the Jekyll/Just the Docs theme, adapting an existing pattern to the site's structure and testing across browsers, so definitions surface without pulling readers off the page.",
    "skills": ["Glossary and reference design", "Custom JS/CSS implementation in a static site theme", "Scope management under stakeholder rescoping"],
    "results": "Delivered a durable, system-agnostic glossary now in clearance submission, plus inline tooltips that reduce cognitive load for readers without adding page weight or navigation steps.",
    "link": "https://cdcgov.github.io/NEDSS-SystemAdminGuide/docs/glossary.html",
    "tags": ["Content Strategy", "UX Writing", "Civic Tech", "Public Health"]
  },
  {
    "id": "nbs-ga-day-tagging",
    "title": "GA day: Catching a release-tagging gap before it broke every deploy instruction",
    "projectType": "Content Strategy, Release Management, Cross-Team Coordination",
    "description": "The guide's URLs depended on every repo sharing one version tag. On GA day, tags diverged and several repos had none at all. Tracked every gap against the live release in real time and pushed engineering to a consistent fix before publishing.",
    "fullDescription": "The guide's deployment instructions were built on one assumption: every referenced repository would carry a matching version tag, driven by a single Liquid variable so each release only required a one-value change instead of a manual sweep across dozens of URLs. On GA day for 7.13, that assumption broke. Tag naming diverged across the release (v7.13.0 vs. v7.13.0-GA), several repositories had no release or tag at all, one had only a prerelease tag, and a build artifact the guide depended on wasn't published for the new version. I tracked every affected link against the live repo state in real time, flagged each blocker to the engineering team as it surfaced, and pushed for a consistent tagging decision across the full set of repositories rather than letting docs silently drift out of sync with what had actually shipped.",
    "skills": ["Cross-team release coordination", "Real-time link and dependency auditing", "Advocating for documentation requirements in an engineering-led process"],
    "results": "Identified and resolved gaps across roughly six repositories before publishing, preventing what would have been broken download links and missing build artifacts across the deployment guide. Without that intervention, the tag-consistency assumption the entire guide's URL system depended on would have failed silently on the first release it was tested against.",
    "tags": ["Content Strategy", "Process Design", "Civic Tech"]
  },
  {
    "id": "nbs-project-hub",
    "title": "Internal project hub: One home for scattered team resources",
    "projectType": "Team Enablement, Information Architecture",
    "description": "Built an internal hub consolidating team resources that had been split across CDC SharePoint and a separate Skylight Google account, giving the team one discoverable place for shared tools and project materials.",
    "fullDescription": "Team resources were split across CDC SharePoint and a separate Skylight Google account, so finding anything meant knowing which of two disconnected systems to check. I built an internal project hub to consolidate them into one accessible location, bringing together the UI text generator, the eClearance rubric, and links to key project materials under a single structure.",
    "skills": ["Information architecture for team resources", "Internal tool design", "Reducing fragmentation across disconnected systems"],
    "results": "Gave the team a single, discoverable location for shared tools and materials that previously required knowing which of two separate systems to check, reducing friction for teammates trying to find what they needed.",
    "tags": ["Content Strategy", "Leadership", "Civic Tech"]
  },
  {
    "id": "task-migration", 
    "title": "Task management migration: Reducing overhead across 15+ verticals", 
    "projectType": "Process Improvement, Change Management", 
    "description": "Led pilot transitioning AWS documentation intake from legacy system to modern platform. Analyzed feedback, documented 40 recommendations, improved collaboration workflows.",
    "fullDescription": "Led pilot program transitioning AWS documentation intake from legacy SIM ticket system to modern Taskei platform. Analyzed feedback from 15+ service verticals and documented 40 data-driven recommendations for organization-wide rollout. Created comprehensive training materials and migration checklists. Reduced task processing overhead and improved cross-team collaboration workflows.", 
    "skills": ["Process analysis and improvement", "Stakeholder feedback synthesis", "Training material creation", "Change management", "Data-driven recommendations"], 
    "results": "Reduced task processing overhead. Improved cross-team collaboration. Recommendations informed org-wide migration.", 
    "tags": ["Content Strategy", "Leadership", "AWS"] 
  },
  {
    "id": "multi-company", 
    "title": "Documentation consolidation: Maintaining quality through 3 acquisitions", 
    "projectType": "Content Consolidation, Change Management", 
    "description": "Managed documentation consolidation during 3 SugarCRM acquisitions. Standardized content across 150+ annual releases. Maintained 100% team retention while reducing support cases 30%.",
    "fullDescription": "Managed documentation consolidation during 3 SugarCRM product acquisitions. Standardized content processes across 150+ annual releases and 20+ product versions. Integrated newly acquired product documentation into existing content ecosystem while maintaining quality and team morale. Maintained 100% team retention through 3 acquisitions and reduced customer support case volume by 30% through strategic content improvements.", 
    "skills": ["M&A documentation management", "Content standardization at scale", "Process design", "Team leadership", "Quality management"], 
    "results": "Maintained 100% team retention through 3 acquisitions. Integrated all acquired documentation. Reduced support cases 30%.", 
    "tags": ["Content Strategy", "Leadership", "SugarCRM"] 
  },
  {
    "id": "hbase-wal", 
    "title": "HBase Write-Ahead Logs: Enabling day-one adoption", 
    "projectType": "Feature Launch Documentation", 
    "description": "Created complete documentation suite for HBase Write-Ahead Logs from scratch, launching simultaneously with feature. Became definitive resource for EMR WAL implementation.",
    "fullDescription": "Created complete documentation suite for Amazon EMR's HBase Write-Ahead Logs feature from scratch. WAL prevents data loss during system failures, a critical data protection capability. Worked with engineering to understand distributed database architecture and translated it into developer-friendly guides. Wrote step-by-step implementation docs, CLI reference, service-linked roles configuration, and troubleshooting scenarios. Launched simultaneously with feature, enabling immediate customer adoption.", 
    "skills": ["Net-new feature documentation", "Complex technical concept explanation", "CLI documentation", "Decision tree design", "Troubleshooting content"], 
    "results": "Launched with feature. Became definitive resource for EMR WAL implementation. Enabled day-one customer adoption.", 
    "link": "https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hbase-wal.html", 
    "tags": ["Developer Docs", "Technical Writing", "AWS"] 
  },
  {
    "id": "aurora-encryption", 
    "title": "Aurora DSQL encryption: Supporting compliant implementations", 
    "projectType": "Security Documentation", 
    "description": "Documented Aurora DSQL encryption at launch. Provided developers clear guidance on implementing encryption correctly for compliance-sensitive workloads.",
    "fullDescription": "Created comprehensive documentation for Aurora DSQL's data encryption feature from launch. Worked directly with engineering to understand encryption architecture, key management, and security model. Wrote developer guide explaining encryption at rest, in transit, and key rotation procedures. Included code examples and CLI reference that enabled developers to implement encryption correctly for compliance-sensitive workloads.", 
    "skills": ["Security and compliance documentation", "Developer audience writing", "Code sample creation", "Collaboration with engineering"], 
    "results": "Launched with feature. Provided developers clear guidance for compliance-sensitive workloads.", 
    "link": "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/data-encryption.html", 
    "tags": ["Developer Docs", "Security", "AWS"] 
  },
  {
    "id": "s3-access-grants", 
    "title": "S3 Access Grants integration: Reducing configuration errors", 
    "projectType": "Integration Documentation", 
    "description": "Documented EMR and S3 Access Grants integration enabling fine-grained access control. Clear documentation reduced configuration errors for advanced security implementations.",
    "fullDescription": "Documented the integration between Amazon EMR and S3 Access Grants, enabling fine-grained access control for S3 data. Explained concepts, configuration steps, IAM permissions, and troubleshooting. Created workflow diagrams (collaborated with visual designer) and code examples that enabled customers to implement advanced S3 access controls correctly.", 
    "skills": ["Integration documentation", "Cross-service technical writing", "Conceptual explanation", "Procedural documentation"], 
    "results": "Enabled customers to implement advanced S3 access controls with EMR. Reduced configuration errors.", 
    "link": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-access-grants.html", 
    "image": "projects/s3.png", 
    "tags": ["Developer Docs", "API Documentation", "AWS"] 
  },
  {
    "id": "service-linked-roles", 
    "title": "Service-linked roles: Implementing least-privilege access", 
    "projectType": "Security Documentation", 
    "description": "Documented service-linked roles for EMR, critical for customers managing security and compliance. Provided clear guidance on IAM security model for correct least-privilege implementation.",
    "fullDescription": "Documented service-linked roles for Amazon EMR, the IAM roles linked directly to AWS services. Explained when they're created, what permissions they include, how to edit them, and how to delete them. Critical for customers managing security and compliance requirements. Provided clear guidance that helped customers implement least-privilege access correctly.", 
    "skills": ["Security and IAM documentation", "Permission and role documentation", "Audience-appropriate technical depth", "Procedural writing"], 
    "results": "Provided clear guidance on IAM security model. Helped customers implement least-privilege access correctly.", 
    "link": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/using-service-linked-roles-wal.html", 
    "tags": ["Security", "Admin Docs", "AWS"] 
  },
  {
    "id": "nbs-rds-backup-restore",
    "title": "RDS documentation: Closing a gap with no existing guidance",
    "projectType": "Developer Documentation, AWS",
    "description": "Wrote a net-new backup and restore procedure closing a documented gap, corrected inaccurate entries in the existing provisioning table, and removed a troubleshooting callout confirmed incorrect by SME review.",
    "fullDescription": "Identified and closed a documented gap in the guide: state and local health department IT teams had no end-to-end guidance for the console steps required before an Amazon RDS backup or restore operation could succeed. Researched and wrote the procedure from scratch, added an AWS services reference section to the deployment page, corrected inaccurate entries in the existing provisioning table, and removed a troubleshooting callout that SME review confirmed was giving incorrect guidance.",
    "skills": ["Technical procedure writing", "Gap analysis and content auditing", "SME verification and correction"],
    "results": "Closed a real operational gap that had left IT teams without a path to complete a required task, and corrected existing content that was actively steering readers wrong.",
    "link": "https://cdcgov.github.io/NEDSS-SystemAdminGuide/docs/maintain-nbs7/rds-backup-restore.html",
    "tags": ["AWS", "Technical Writing", "Developer Docs", "Civic Tech"]
  },
  {
    "id": "aerotech-crm-implementation", 
    "title": "Enterprise CRM implementation: Consolidating fragmented contact management", 
    "projectType": "Systems Implementation, Change Management", 
    "description": "Led end-to-end CRM implementation across 5 business segments. Migrated 70,000+ facilities and 100,000+ contacts. Achieved 90%+ adoption. System remained in production 10+ years.",
    "fullDescription": "Led complete lifecycle of enterprise CRM implementation at Aerotech: evaluated and selected platform, designed custom system architecture for manufacturing workflows, migrated legacy data (70,000+ facilities, 100,000+ contacts), integrated service ticketing system documenting 10,000+ support inquiries. Managed vendor relationships, coordinated with consultant developers, administered ongoing maintenance. Achieved 90%+ user adoption across 5 global business segments. Successfully consolidated fragmented contact management into unified system. Integrated service ticketing reducing response time and improving case tracking. System remained in production 10+ years.", 
    "skills": ["System architecture and design", "Legacy data migration", "Vendor management", "Change management at scale", "System administration"], 
    "results": "Achieved 90%+ adoption across 5 segments. Consolidated fragmented contact management. System remained in production 10+ years.", 
    "tags": ["Systems Architecture", "Admin Docs", "Leadership"] 
  },
  {
    "id": "aerotech-crm-training", 
    "title": "CRM training program: Maintaining 90%+ adoption over 7 years", 
    "projectType": "Training Program, User Enablement", 
    "description": "Created 7-year training program for 120+ global CRM users. Built integrated system with onboarding, refreshers, and change management campaigns that drove consistent feature adoption.",
    "fullDescription": "Created enterprise-wide CRM training program at Aerotech encompassing initial rollout, new hire onboarding (1-on-1 sessions), annual refreshers, and ongoing enablement. Developed all training materials including user guides, video tutorials, quick reference cards, and process documentation. Implemented change management campaigns for feature launches using in-app tools (banners, news feeds), email campaigns, and webinars. Evangelized new features through promotional activities that drove feature adoption. Maintained 90%+ system adoption over 7 years while reducing support burden through self-sufficiency.", 
    "skills": ["Training program design", "Video tutorial production", "Change management campaigns", "Internal marketing and evangelism", "Multi-format content delivery"], 
    "results": "Maintained 90%+ adoption over 7 years. Ensured immediate new hire productivity. Drove consistent feature adoption. Reduced support burden.", 
    "tags": ["Content Strategy", "Leadership", "End-User Docs"] 
  },
  {
    "id": "wandb-tutorial", 
    "title": "Weights & Biases tutorial: Improving comprehension and completion", 
    "projectType": "Content Revision", 
    "description": "Revised Weights & Biases PyTorch tutorial. Original was technically accurate but verbose and difficult to follow. Restructured for clarity, reducing user friction.",
    "fullDescription": "Revised existing tutorial on integrating Weights & Biases with PyTorch projects. Original content was technically accurate but verbose and difficult to follow. Restructured for clarity, simplified language, improved code examples, and added clearer prerequisites and troubleshooting. Improved tutorial comprehension and completion rates while reducing user friction in adopting ML experiment tracking.", 
    "skills": ["Content editing and improvement", "Tutorial writing", "Code example refinement", "User-focused revision"], 
    "results": "Improved tutorial comprehension and completion rates. Reduced user friction in adoption.", 
    "link": "https://github.com/wandb/docs/pull/1385", 
    "tags": ["Content Strategy", "Developer Docs", "AI/ML"] 
  },
  {
    "id": "sugarbpm", 
    "title": "SugarBPM administrator guide: Enabling successful process configuration", 
    "projectType": "Administrator Documentation", 
    "description": "Created comprehensive administrator guide for SugarBPM workflow automation. Reduced support inquiries for complex process configuration.",
    "fullDescription": "Created comprehensive administrator guide for SugarBPM, SugarCRM's business process management and workflow automation tool. Documented process design, automation rules, email templates, approval workflows, and system administration for technical administrators managing complex business processes. Enabled administrators to successfully configure and manage automated processes while reducing support inquiries for BPM configuration.", 
    "skills": ["Administrator-level technical writing", "Business process documentation", "Workflow documentation", "System configuration writing"], 
    "results": "Enabled successful process configuration. Reduced support inquiries for BPM configuration.", 
    "link": "https://support.sugarcrm.com/smartlinks/administration_guide/sugarbpm/", 
    "tags": ["Admin Docs", "Technical Writing", "SugarCRM"] 
  },
  {
    "id": "team-permissions", 
    "title": "Team permissions documentation: Supporting enterprise compliance", 
    "projectType": "Security Documentation", 
    "description": "Documented SugarCRM's team-based security model. Enabled administrators to correctly implement team-based security for complex organizational structures.",
    "fullDescription": "Documented SugarCRM's team-based security and permissions model. Explained how to create teams, assign users, configure role permissions, and implement data access controls. This is critical for enterprises with complex organizational structures and security requirements. Enabled administrators to correctly implement team-based security supporting enterprise compliance.", 
    "skills": ["Security and permissions documentation", "Enterprise documentation", "Technical procedural writing", "Conceptual explanation"], 
    "results": "Enabled correct team-based security implementation. Supported enterprise compliance requirements.", 
    "link": "https://support.sugarcrm.com/smartlinks/administration_guide/team_management/", 
    "tags": ["Security", "Admin Docs", "SugarCRM"] 
  },
  {
    "id": "status-tracking", 
    "title": "Status duration tracking tutorial: Solving common reporting need", 
    "projectType": "Tutorial", 
    "description": "Created tutorial for tracking record status duration in CRM. Provided solution to common reporting need, reducing support tickets.",
    "fullDescription": "Created step-by-step tutorial showing administrators how to track and report on how long CRM records spend in each status (e.g., how long a sales opportunity stays in 'Negotiation' stage). Included calculated fields, workflow automation, and reporting configuration. Provided customers with solution to common reporting need while reducing support tickets for status duration tracking.", 
    "skills": ["Tutorial writing", "Use case documentation", "Step-by-step instruction", "Configuration documentation"], 
    "results": "Provided solution to common reporting need. Reduced support tickets for status tracking.", 
    "link": "https://support.sugarcrm.com/knowledge_base/sugarbpm/capturing_how_long_a_record_spends_in_each_status_using_sugarbpm/", 
    "tags": ["Admin Docs", "Technical Writing", "SugarCRM"] 
  },
  {
    "id": "upsert-products", 
    "title": "Marketplace product descriptions: Supporting sales through clear value communication", 
    "projectType": "Product Marketing", 
    "description": "Created product descriptions for CRM enhancements on SugarCRM Marketplace. Communicated value proposition to business and technical audiences.",
    "fullDescription": "Created product descriptions and technical marketing content for CRM enhancements sold on SugarCRM Marketplace. Wrote for both business decision-makers and technical administrators, explaining features, benefits, use cases, and technical requirements. Supported product sales by communicating value proposition clearly to potential customers.", 
    "skills": ["Product marketing writing", "Technical marketing content", "Multi-audience writing", "Benefit-focused writing"], 
    "results": "Supported product sales on SugarCRM Marketplace. Communicated value proposition to potential customers.", 
    "link": "https://upsertconsulting.com/#/plugins", 
    "tags": ["Content Strategy", "Marketing", "SugarCRM"] 
  },
  ];

                function renderProjects(projects) {
                    const $grid = $('#projectsGrid');
                    $grid.empty();
                    if (!projects || projects.length === 0) {
                        $grid.html('<p class="text-center">No projects found.</p>');
                        if ($('#projectCount').length) {
                            $('#projectCount').text('Showing 0 of ' + PROJECTS_DATA.length + ' projects');
                        }
                        return;
                    }
                    projects.forEach(function (p) {
                        const $card = $(
                            '<div class="project-card" data-project-id="' + p.id + '">' +
                            '<div class="project-card-content">' +
                            '<div class="project-card-type">' + (p.projectType || '') + '</div>' +
                            '<h3 class="project-card-title">' + (p.title || '') + '</h3>' +
                            '<p class="project-card-description">' + (p.description || '') + '</p>' +
                            '<div class="project-card-tags">' + (p.tags ? p.tags.map(t => '<span class="project-tag">' + t + '</span>').join('') : '') + '</div>' +
                            '</div>' +
                            '</div>'
                        );
                        $grid.append($card);
                    });

                    // Update project count display
                    if ($('#projectCount').length) {
                        $('#projectCount').text('Showing ' + projects.length + ' of ' + PROJECTS_DATA.length + ' projects');
                    }

                    // Click handlers
                    $('.project-card').on('click', function () {
                        const id = $(this).data('project-id');
                        const project = PROJECTS_DATA.find(x => x.id === id);
                        if (!project) return;
                        const hasImage = project.image && project.image.trim() !== '';
                        const content = '<div class="project-detail-content">' +
                            '<div class="project-detail-header">' +
                            '<div class="project-detail-type">' + (project.projectType || '') + '</div>' +
                            '<h2 class="project-detail-title">' + (project.title || '') + '</h2>' +
                            '<div class="project-detail-tags">' + (project.tags ? project.tags.map(t => '<span class="project-tag">' + t + '</span>').join('') : '') + '</div>' +
                            '</div>' +
                            '<div class="project-detail-description-section ' + (hasImage ? 'has-image' : '') + '">' +
                            (hasImage ? '<div class="project-detail-thumbnail"><img src="' + project.image + '" alt="' + project.title + '" class="project-thumbnail-img"></div>' : '') +
                            '<div class="project-detail-description"><p>' + (project.fullDescription || project.description || '') + '</p></div>' +
                            '</div>' +
                            '<div class="project-detail-skills"><h4>Skills Demonstrated:</h4><ul>' + (project.skills ? project.skills.map(s => '<li>' + s + '</li>').join('') : '') + '</ul></div>' +
                            '<div class="project-detail-results"><h4>Results/Impact:</h4><p>' + (project.results || '') + '</p></div>' +
                            (project.links && project.links.length
                                ? '<div class="project-detail-link">' + project.links.map(l => '<a href="' + l.url + '" target="_blank" rel="noopener noreferrer" class="btn btn-primary">' + l.label + '</a>').join('') + '</div>'
                                : project.link ? '<div class="project-detail-link"><a href="' + project.link + '" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View project</a></div>' : '') +
                            '</div>';
                        $('#projectModalBody').html(content);
                        $('#projectModal').addClass('active');
                        $('body').css('overflow', 'hidden');
                    });
                }

                // Close modal
                $(document).on('click', '#closeModal', function (e) { e.preventDefault(); $('#projectModal').removeClass('active'); $('body').css('overflow', ''); });

                // Extract unique tags from all projects
                function getUniqueTags(projects) {
                    const tags = new Set();
                    projects.forEach(p => {
                        if (p.tags && Array.isArray(p.tags)) {
                            p.tags.forEach(tag => {
                                tags.add(tag.trim());
                            });
                        }
                    });
                    return Array.from(tags).sort();
                }

                // Initialize filter buttons
                function initializeFilters(projects) {
                    const uniqueTags = getUniqueTags(projects);
                    const $filterContainer = $('#filterButtons');
                    $filterContainer.empty();

                    // Add "All projects" button
                    $filterContainer.append('<button class="filter-btn active" data-filter="all">All projects</button>');

                    // Add buttons for each unique tag
                    uniqueTags.forEach(tag => {
                        $filterContainer.append('<button class="filter-btn" data-filter="' + tag + '">' + tag + '</button>');
                    });

                    // Attach click handlers
                    $('.filter-btn').on('click', function () {
                        const filterValue = $(this).data('filter');
                        $('.filter-btn').removeClass('active');
                        $(this).addClass('active');

                        let filteredProjects = PROJECTS_DATA;
                        if (filterValue !== 'all') {
                            filteredProjects = PROJECTS_DATA.filter(p => {
                                return p.tags && Array.isArray(p.tags) && p.tags.includes(filterValue);
                            });
                        }
                        renderProjects(filteredProjects);
                    });
                }

                // Initialize
                $(function () {
                    initializeFilters(PROJECTS_DATA);
                    renderProjects(PROJECTS_DATA);
                });

            })(jQuery);
        }
