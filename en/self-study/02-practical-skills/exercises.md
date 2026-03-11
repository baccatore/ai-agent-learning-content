---
title: "Module 2: Exercise Collection — Practical Skills"
lang: "en"
category: "self-study"
module: "02-practical-skills"
contentType: "exercises"
order: 2
---
# Module 2: Exercise Collection — Practical Skills

> **Note**: All exercises are hands-on and require you to actually launch Claude Code.
> Enter each exercise's instructions into Claude Code and verify the output as you go.
> Create `exercises/module2/` as your working directory and do all work inside it.

---

## Preparation

Launch Claude Code and run the following:

```
Create the exercises/module2/ directory.
Also create output/ and data/ subdirectories inside it.
```

Additionally, sample data for this course is located at `shared/sample-data/sales-data.csv`. You will use it in Exercise 4, so keep its location in mind.

---

## Exercise 1: Improving Prompts

### Objective

Experience how Claude Code's output differs between vague instructions and specific instructions.

### Task

Below are five "Bad Instructions." Improve each one using the **five elements (purpose, audience, format, length, constraints)** you learned in Chapter 1 of the textbook. Enter both the original and improved versions into Claude Code and compare the outputs.

---

#### Bad Instruction 1:
```
Look into the market
```

**Improvement Hint**: There is zero information about which market, what you want to know, who will read the output, or what format the output should be in. Simply adding "purpose" and "audience" will dramatically improve the result.

---

#### Bad Instruction 2:
```
Create a proposal
```

**Improvement Hint**: It is unclear what the proposal is for, what the background is, or what sections to include. List out the "sections to include" as bullet points.

---

#### Bad Instruction 3:
```
Analyze this data
```

**Improvement Hint**: It is unclear which file, what the data structure looks like, or what kind of analysis is needed. Specify the file path, describe the column structure, and state the analysis perspective explicitly.

---

#### Bad Instruction 4:
```
Write an email
```

**Improvement Hint**: It is unclear who the email is to, what the purpose is, or what tone to use. Add the situation, the relationship with the recipient, and the desired tone.

---

#### Bad Instruction 5:
```
Summarize it in a report
```

**Improvement Hint**: It is unclear what the report is about, how it should be structured, or where to save it. Specify the report structure (chapter outline) and the output destination.

---

### How to Proceed

1. First, enter the Bad Instructions as-is into Claude Code and save the output to `exercises/module2/output/bad-result-1.md` through `bad-result-5.md`
2. Next, enter the improved instructions and save the output to `exercises/module2/output/good-result-1.md` through `good-result-5.md`
3. Compare the Bad and Good versions and take notes on the differences

### Expected Deliverables

| File | Content |
|------|---------|
| `output/bad-result-1.md` through `bad-result-5.md` | Output from Bad Instructions (5 files) |
| `output/good-result-1.md` through `good-result-5.md` | Output from improved instructions (5 files) |
| `output/prompt-comparison-notes.md` | Notes on the Bad vs. Good differences |

### Evaluation Criteria

- [ ] Does the improved instruction include at least 3 of the 5 elements (purpose, audience, format, length, constraints)?
- [ ] Is the output from the improved instruction of a quality that could be used as-is?
- [ ] Can you articulate the specific differences between the Bad and Good versions?

---

## Exercise 2: Desktop Research

### Objective

Learn to leverage web search capabilities to conduct research step by step and compile findings into a structured report.

### Topic

**"Latest Trends in the Renewable Energy Market"**

### Task

Create a research report in the following four steps.

---

#### Step 1: Broad Survey

First, grasp the overall picture of the market.

```
Research the renewable energy market.

Compile the following information:
- Types of renewable energy and an overview of each energy source
- Global and domestic market size (recent figures)
- Social and policy factors driving market growth

Cite your sources.
Save to exercises/module2/output/renewable-energy-overview.md.
```

**Checkpoint**: Verify that sources are cited in the output file. Pay particular attention to numerical data and check for overly outdated figures or vague statements.

---

#### Step 2: Deep-Dive Research

With the big picture in hand, explore specific themes in depth.

```
Based on the content in exercises/module2/output/renewable-energy-overview.md,
conduct a deep-dive investigation on the following topics:

1. Latest trends in domestic renewable energy policy
   - Current status and changes to feed-in tariff (FIT) schemes
   - 2030 energy mix targets
2. Corporate renewable energy procurement trends
   - Developments among RE100 member companies
   - The rise of corporate PPAs
3. Notable technology trends
   - Perovskite solar cells
   - Offshore wind power
   - Green hydrogen

Cite your sources.
Save to exercises/module2/output/renewable-energy-deep-dive.md.
```

---

#### Step 3: Structuring and Analysis

Integrate the two research outputs and add an analytical perspective.

```
Read the following files:
- exercises/module2/output/renewable-energy-overview.md
- exercises/module2/output/renewable-energy-deep-dive.md

Integrate this information and perform the following analysis:
1. Map opportunities and risks for businesses (SWOT analysis format)
2. Impact mapping by industry (manufacturing, IT, retail, finance, etc.)
3. Key areas to watch in the short term (1-2 years) and medium-to-long term (3-5 years)

Save to exercises/module2/output/renewable-energy-analysis.md.
```

---

#### Step 4: Final Report

Compile the final research report.

```
Read the following files:
- exercises/module2/output/renewable-energy-overview.md
- exercises/module2/output/renewable-energy-deep-dive.md
- exercises/module2/output/renewable-energy-analysis.md

Integrate these into a final report with the following structure:

1. Cover page (title, creation date, author: "Planning Department")
2. Executive summary (300 words or fewer)
3. Market overview
4. Policy and regulatory trends
5. Technology trends
6. Corporate developments
7. Implications for businesses (including SWOT analysis)
8. Conclusions and recommendations
9. List of sources

Target audience: Managers in the corporate planning department
Format: Formal report style
Length: Approximately 2,000-3,000 words

Save to exercises/module2/output/renewable-energy-report.md.
```

---

### Expected Deliverables

| File | Content |
|------|---------|
| `output/renewable-energy-overview.md` | Broad survey results |
| `output/renewable-energy-deep-dive.md` | Deep-dive research results |
| `output/renewable-energy-analysis.md` | Analysis results |
| `output/renewable-energy-report.md` | Final report |

### Evaluation Criteria

- [ ] Did you execute the four steps in order and leverage each step's output in the next?
- [ ] Does the final report include an executive summary of 300 words or fewer?
- [ ] Are sources cited and not reliant on low-credibility information?
- [ ] Is the SWOT analysis specific and grounded in the research findings?
- [ ] Does the report contain useful insights for the target audience (corporate planning managers)?

---

## Exercise 3: Creating a Proposal

### Objective

Build a proposal based on research results. Practice how to instruct Claude Code to reference existing files.

### Topic

**"Internal Proposal: Exploring Renewable Energy-Related Business Opportunities"**

### Task

Create a proposal using the research report from Exercise 2 as the basis for exploring a new business initiative.

---

#### Step 1: Creating the Outline

```
Read exercises/module2/output/renewable-energy-report.md.

Based on these research findings, create an outline for a
"Proposal for Exploring Renewable Energy-Related Business Opportunities."

Background:
- Our company is a mid-sized IT company with 500 employees
- Core business is systems integration and cloud services
- Management is looking for new business pillars
- We want to strengthen our sustainability initiatives

Please suggest the sections the proposal should include.
Do not write the body text yet. Just provide the outline (heading structure).

Save to exercises/module2/output/proposal-outline.md.
```

**Checkpoint**: Review the outline and provide correction instructions if any sections are missing or need reordering. This "review and revise" process is important.

---

#### Step 2: Revising the Outline and Writing the Body

After reviewing the outline, issue revision instructions and have the body written.

```
I have reviewed exercises/module2/output/proposal-outline.md.
Please apply the following revisions and write the full body text.

Revisions:
- Add a "Strategic Vision Alignment" section at the beginning
  -> Connect it to "sustainability management"
- In the "Market Opportunity" section, cite specific figures from the Exercise 2 research
- In "Team Structure," add the roles of required talent and external partners
- In "Investment Plan," include a 3-year ROI estimate (rough figures)
- Add a standalone "Risks and Mitigation" chapter

Reference files:
- exercises/module2/output/renewable-energy-report.md (research report)
- exercises/module2/output/renewable-energy-analysis.md (analysis results)

Target audience: Executive meeting members (C-level)
Each chapter should be approximately 200-400 words.

Save to exercises/module2/output/re-business-proposal.md.
```

---

#### Step 3: Incorporating Feedback and Polishing

```
Apply the following feedback to exercises/module2/output/re-business-proposal.md:

Feedback:
1. Add an executive summary at the top (approximately half a page)
2. Enrich the numerical data in the market opportunity section
3. Add a competitor landscape section
   -> Research examples of peer IT companies entering the renewable energy space
4. Add a "Next Steps" section
   -> Propose an action plan for a 3-month exploration phase after the executive meeting

Reference file:
- exercises/module2/output/renewable-energy-report.md

Overwrite exercises/module2/output/re-business-proposal.md.
```

---

#### Step 4: Creating the HTML Version

```
Read exercises/module2/output/re-business-proposal.md and
convert it to a well-designed HTML format.

Requirements:
- Responsive design
- Table of contents with in-page anchor links
- Tables styled with borders for readability
- Color theme: green tones (evoking renewable energy)
- Print-friendly (@media print)
- Self-contained in a single HTML file with no external CSS or JS

Save to exercises/module2/output/re-business-proposal.html.
```

---

### Expected Deliverables

| File | Content |
|------|---------|
| `output/proposal-outline.md` | Proposal outline |
| `output/re-business-proposal.md` | Completed proposal (Markdown) |
| `output/re-business-proposal.html` | Proposal in HTML format |

### Evaluation Criteria

- [ ] Are the Exercise 2 research results properly cited and utilized in the proposal?
- [ ] Did you correctly use file reference instructions ("Read the following file...")?
- [ ] Did you execute the stepwise process of outline review -> revision -> body writing?
- [ ] Were you able to give clear feedback incorporation instructions?
- [ ] Is the final document persuasive for the target audience (executive meeting members)?
- [ ] Does the HTML version display well in a browser?

---

## Exercise 4: Data Analysis

### Objective

Learn how to request data analysis from Claude Code using CSV data.

### Data Source

Use `shared/sample-data/sales-data.csv`.

This file contains the following columns:
- `date` -- Date
- `product_category` -- Product category (Electronics, Office, etc.)
- `product_name` -- Product name
- `region` -- Region (Tokyo, Osaka, Fukuoka, etc.)
- `units_sold` -- Units sold
- `unit_price` -- Unit price
- `total_revenue` -- Revenue
- `customer_type` -- Customer type (B2B, B2C)

### Task

Perform data analysis in the following three stages and ultimately create an analysis report.

---

#### Step 1: Monthly Sales Trend Analysis

```
Read shared/sample-data/sales-data.csv.

This file contains sales data.
Columns: date (date), product_category (product category), product_name (product name),
region (region), units_sold (units sold), unit_price (unit price),
total_revenue (revenue), customer_type (customer type, B2B/B2C)

First, perform the following monthly analysis:
1. Monthly total revenue trend
2. Monthly units sold trend
3. Month-over-month revenue growth rate
4. Identify the highest and lowest revenue months

Display the results in Markdown tables and
save to exercises/module2/output/monthly-analysis.md.
```

---

#### Step 2: Category and Regional Analysis

```
Continue analyzing shared/sample-data/sales-data.csv.

Perform analysis from the following perspectives:

[Category Analysis]
1. Total revenue and share by product category
2. Monthly revenue trend by category
3. Top 3 best-selling products in each category
4. Average unit price and average units sold by category

[Regional Analysis]
5. Total revenue and share by region
6. Cross-tabulation of region x category
7. Customer type (B2B/B2C) mix by region
8. Differences in top-selling categories by region

Organize the results in Markdown tables and
save to exercises/module2/output/category-region-analysis.md.
```

---

#### Step 3: Charts and Analysis Report

```
Visualize the analysis results from shared/sample-data/sales-data.csv.

Create an HTML file with the following charts:
1. Line chart of monthly revenue trend
2. Bar chart of revenue by product category
3. Pie chart of revenue share by region
4. Heatmap-style display of the category x region cross-tabulation

Technical requirements:
- Use Chart.js (via CDN)
- Clear, readable color theme
- Include title and legend for each chart
- Responsive design

Save to exercises/module2/output/sales-charts.html.
```

Next, create an integrated report of the analysis results.

```
Read the following files:
- exercises/module2/output/monthly-analysis.md
- exercises/module2/output/category-region-analysis.md

Integrate these analysis results into a report with the following structure:

1. Executive summary (limit key findings to three)
2. Overall sales overview (monthly trend and annual summary)
3. Product category analysis (identify strong and growing categories)
4. Regional analysis (characteristics and differences by region)
5. Customer type analysis (B2B vs. B2C)
6. Issues and opportunities
7. Recommended actions (three specific initiatives)

Target audience: Participants of the sales division's quarterly review meeting
Length: Approximately 1,500-2,500 words
Standardize all monetary values in thousands (or an appropriate unit).

Save to exercises/module2/output/sales-report.md.
```

---

### Expected Deliverables

| File | Content |
|------|---------|
| `output/monthly-analysis.md` | Monthly sales trend analysis results |
| `output/category-region-analysis.md` | Category and regional analysis results |
| `output/sales-charts.html` | Interactive charts |
| `output/sales-report.md` | Integrated analysis report |

### Evaluation Criteria

- [ ] Did you correctly include the data column structure in your instructions?
- [ ] Are the monthly, category, and regional aggregations accurate?
- [ ] Do the charts display correctly in a browser and visually convey data trends?
- [ ] Is the executive summary concise and focused on the key findings?
- [ ] Are the recommended actions specific and grounded in the analysis results?
- [ ] Did you practice giving step-by-step analysis instructions?

---

## Exercise 5: Combined Task — End-to-End Comprehensive Exercise

### Objective

Experience a practical workflow that combines research, data analysis, and document creation.

### Scenario

You are a member of the planning department. Your manager has given you the following request:

> "We should explore using renewable energy at our company. Start by surveying the current landscape, factor in our own operational data, and put together a proposal with recommended next steps for next week's executive meeting."

### Task

Complete the following steps to go from research to final deliverable in one continuous workflow.

---

#### Phase 1: Project Setup

```
Create the directory structure for a new project called "renewable-energy-initiative."

exercises/module2/project/
├── data/           # Source data
├── research/       # Research results
├── analysis/       # Analysis results
├── output/         # Final deliverables
├── CLAUDE.md       # Shared project rules
└── README.md       # Project overview

Create each directory and write the following in the CLAUDE.md:
- All output files should be in Markdown format
- Write in a polite, professional tone
- Cite sources for all numerical data
- Default target audience is "executive meeting members"

Write a project overview and objectives in README.md.
```

---

#### Phase 2: Research

```
Research corporate adoption of renewable energy.

Topics to investigate:
1. Methods for companies to adopt renewable energy (on-site generation, PPAs, renewable energy certificates, etc.)
2. Domestic corporate adoption case studies (at least 5 companies, focusing on IT companies)
3. Benefits and costs of adoption
4. Challenges and solutions for implementation

Cite your sources.
Save to exercises/module2/project/research/corporate-re-adoption.md.
```

---

#### Phase 3: Data Analysis

Use the sales data from Exercise 4 as "reference data for estimating our company's energy consumption patterns."

```
Read shared/sample-data/sales-data.csv.

Use this data as a reference for understanding "our company's seasonal business activity patterns."
Analyze the monthly sales trends to identify business activity fluctuations.

Analysis:
1. Identify peak and off-peak periods from monthly sales trends
2. Analyze regional activity distribution
3. Develop hypotheses about energy consumption patterns based on the above

Save to exercises/module2/project/analysis/activity-pattern.md.
```

---

#### Phase 4: Integration and Document Creation

```
Read all of the following files:
- exercises/module2/project/research/corporate-re-adoption.md
- exercises/module2/project/analysis/activity-pattern.md

Integrate these and create a proposal for the executive meeting.

Title: "Exploring Renewable Energy Adoption at Our Company"

Document structure:
1. Executive summary
2. Background and objectives
   - Why explore renewable energy now
   - Societal expectations and competitive landscape
3. Options for renewable energy adoption
   - Comparison table of each approach
4. Analysis of our company's situation
   - Energy demand characteristics based on business activity patterns
5. Recommended adoption approach
   - Phases 1-3 roadmap
6. Estimated costs and benefits
7. Risks and mitigation
8. Next steps (3-month exploration phase proposal)

Target audience: Executive meeting members (5 executives)
Length: Approximately 2,000-3,000 words

Save to exercises/module2/project/output/re-initiative-proposal.md.
```

---

#### Phase 5: Final Touches

```
Read exercises/module2/project/output/re-initiative-proposal.md and
create the following two versions:

1. HTML version (for presentations)
   - Well-designed layout (green color theme)
   - Table of contents with in-page anchor links
   - Bordered tables
   - Print-friendly
   - Self-contained in a single HTML file
   -> exercises/module2/project/output/re-initiative-proposal.html

2. Summary version (for email distribution)
   - Keep it to approximately one page
   - Bullet-point focused, covering only key points
   -> exercises/module2/project/output/re-initiative-summary.md
```

---

#### Phase 6: Progress Log

```
Create exercises/module2/project/PROGRESS.md.

Include the following:
1. List of completed tasks (checklist format)
2. List of created files with a brief description of each
3. Improvement ideas and tips discovered during the work
4. Future tasks (what you would do next if this were a real project)
```

---

### Expected Deliverables

| File | Content |
|------|---------|
| `project/CLAUDE.md` | Shared project rules |
| `project/README.md` | Project overview |
| `project/research/corporate-re-adoption.md` | Research results |
| `project/analysis/activity-pattern.md` | Data analysis results |
| `project/output/re-initiative-proposal.md` | Proposal (Markdown) |
| `project/output/re-initiative-proposal.html` | Proposal (HTML) |
| `project/output/re-initiative-summary.md` | Summary version |
| `project/PROGRESS.md` | Progress log |

### Evaluation Criteria

- [ ] Did you design the project directory structure upfront and keep files organized?
- [ ] Did you leverage CLAUDE.md to set shared rules?
- [ ] Did you properly integrate research results and data analysis into the proposal?
- [ ] Were you able to correctly instruct Claude Code to reference multiple files?
- [ ] Is the final deliverable at a quality level suitable for an executive meeting?
- [ ] Does the HTML version display well in a browser?
- [ ] Does the summary version stay concise and cover the key points?
- [ ] Does the PROGRESS.md contain specific reflections on the work?

---

## Overall Review Checklist

Once you have completed all exercises, use the following checklist for self-review.

### Prompting
- [ ] I can write specific instructions that incorporate the five elements
- [ ] I understand from firsthand experience the difference between bad and good instructions

### Research
- [ ] I practiced conducting research step by step (big picture -> deep dive -> structuring -> final report)
- [ ] I became more aware of source credibility

### Document Creation
- [ ] I can create documents that reference existing files
- [ ] I experienced the stepwise process of outline -> body -> feedback
- [ ] I can request Markdown-to-HTML conversion

### Data Analysis
- [ ] I can describe CSV data structure and request analysis
- [ ] I can instruct multi-dimensional analysis (monthly, by category, by region, etc.)
- [ ] I can request chart creation and integration into an analysis report

### Combined Tasks
- [ ] I executed the full workflow from research -> analysis -> document creation
- [ ] I was able to design a project directory structure and CLAUDE.md
- [ ] I understand the importance of keeping progress logs
