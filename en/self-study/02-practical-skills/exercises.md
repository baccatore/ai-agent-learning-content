# Module 2: Exercise Workbook — Practical Skills

> **Note**: All exercises are hands-on and meant to be completed using Claude Code.
> Enter the instructions into Claude Code and review the output as you go.
> Create `exercises/module2/` as your working directory.

---

## Setup

Launch Claude Code and run the following:

```
Please create the exercises/module2/ directory.
Also create output/ and data/ subdirectories inside it.
```

This module uses a sample data file located at `shared/sample-data/sales-data.csv`. You'll need it for Exercise 4, so note its location.

---

## Exercise 1: Improving Your Prompts

### Objective

Experience firsthand how Claude Code's output changes when you give vague instructions versus specific ones.

### Task

Below are 5 "bad instructions." Improve each one by applying the **5 elements (purpose, audience, format, length, constraints)** from Chapter 1 of the textbook. Enter both the original and improved versions into Claude Code, and compare the outputs.

---

#### Bad Instruction 1:
```
Research the market
```

**Hint for improvement**: Which market? What do you want to know? Who will read it? What format should the output be in? None of this is specified. Simply adding "purpose" and "audience" makes a huge difference.

---

#### Bad Instruction 2:
```
Write a proposal
```

**Hint for improvement**: A proposal for what? What's the background? What sections should it include? Try listing the desired sections as bullet points.

---

#### Bad Instruction 3:
```
Analyze this data
```

**Hint for improvement**: Which file? What's the data structure? What should be analyzed? Specify the file path, describe the columns, and state the specific analysis you want.

---

#### Bad Instruction 4:
```
Write an email
```

**Hint for improvement**: To whom? For what purpose? In what tone? Add the situation, your relationship with the recipient, and the desired tone.

---

#### Bad Instruction 5:
```
Summarize this into a report
```

**Hint for improvement**: A report on what? What structure should it have? Where should it be saved? Specify the report structure (chapter headings) and the output path.

---

### How to Proceed

1. Enter each bad instruction as-is into Claude Code and save the output to `exercises/module2/output/bad-result-1.md` through `bad-result-5.md`
2. Enter your improved instructions and save the output to `exercises/module2/output/good-result-1.md` through `good-result-5.md`
3. Compare the bad and good versions and take notes on the differences

### Expected Deliverables

| File | Content |
|------|---------|
| `output/bad-result-1.md` through `bad-result-5.md` | Output from bad instructions (5 files) |
| `output/good-result-1.md` through `good-result-5.md` | Output from improved instructions (5 files) |
| `output/prompt-comparison-notes.md` | Notes comparing bad vs. good results |

### Evaluation Criteria

- [ ] Do your improved instructions include at least 3 of the 5 elements (purpose, audience, format, length, constraints)?
- [ ] Is the output from improved instructions at a quality level you could actually use as-is?
- [ ] Can you articulate the specific differences between the bad and good versions?

---

## Exercise 2: Desk Research

### Objective

Practice using web search to conduct research step by step and compile findings into a structured report.

### Topic

**"Latest Trends in the Renewable Energy Market"**

### Task

Create a research report in the following 4 steps.

---

#### Step 1: Overall Research

Start by getting a high-level view of the market.

```
Please research the renewable energy market.

Summarize the following:
- Types of renewable energy and an overview of each energy source
- Global and domestic market size (latest figures)
- Social and policy factors driving market growth

Cite your sources.
Save to exercises/module2/output/renewable-energy-overview.md.
```

**Checkpoint**: Verify that sources are cited in the output. Pay particular attention to numerical data — check that figures aren't outdated or vaguely stated.

---

#### Step 2: Deep-Dive Research

With the big picture in hand, dig deeper into specific topics.

```
Based on the content of exercises/module2/output/renewable-energy-overview.md,
please conduct a deep-dive investigation on the following topics:

1. Latest developments in renewable energy policy
   - Current state and recent changes to feed-in tariff (FIT) programs
   - 2030 energy mix targets
2. Corporate renewable energy procurement trends
   - RE100 member company activity
   - Growth of corporate PPAs
3. Notable technology trends
   - Perovskite solar cells
   - Offshore wind power
   - Green hydrogen

Cite your sources.
Save to exercises/module2/output/renewable-energy-deep-dive.md.
```

---

#### Step 3: Structure and Analyze

Integrate the two research outputs and add analytical perspective.

```
Please read the following files:
- exercises/module2/output/renewable-energy-overview.md
- exercises/module2/output/renewable-energy-deep-dive.md

Integrate this information and perform the following analysis:
1. Organize opportunities and risks for businesses (SWOT analysis format)
2. Map the impact by industry (manufacturing, IT, retail, finance, etc.)
3. Key points to watch in the short term (1-2 years) and medium-to-long term (3-5 years)

Save to exercises/module2/output/renewable-energy-analysis.md.
```

---

#### Step 4: Create the Final Report

Compile everything into a polished research report.

```
Please read the following files:
- exercises/module2/output/renewable-energy-overview.md
- exercises/module2/output/renewable-energy-deep-dive.md
- exercises/module2/output/renewable-energy-analysis.md

Integrate these into a final report with the following structure:

1. Cover page (title, date, author: "Strategy Department")
2. Executive summary (300 words or fewer)
3. Market overview
4. Policy and regulatory developments
5. Technology trends
6. Corporate activity
7. Implications for businesses (including SWOT analysis)
8. Conclusions and recommendations
9. List of sources

Audience: Managers in the corporate strategy department
Format: Formal report style
Length: Approximately 2,500-4,000 words

Save to exercises/module2/output/renewable-energy-report.md.
```

---

### Expected Deliverables

| File | Content |
|------|---------|
| `output/renewable-energy-overview.md` | Overall research results |
| `output/renewable-energy-deep-dive.md` | Deep-dive research results |
| `output/renewable-energy-analysis.md` | Analysis results |
| `output/renewable-energy-report.md` | Final report |

### Evaluation Criteria

- [ ] Did you execute all 4 steps in order, with each step building on the previous one?
- [ ] Does the final report include an executive summary within 300 words?
- [ ] Are sources cited, and does the report avoid relying on low-reliability information?
- [ ] Is the SWOT analysis specific and grounded in the research findings?
- [ ] Does the report contain useful insights for the target audience (strategy department managers)?

---

## Exercise 3: Creating a Proposal

### Objective

Build a business proposal based on research results. Practice referencing existing files in your instructions.

### Topic

**"Internal Proposal for Exploring Renewable Energy Business Opportunities"**

### Task

Using the research report from Exercise 2, create a new business proposal.

---

#### Step 1: Create the Outline

```
Please read exercises/module2/output/renewable-energy-report.md.

Based on this research, create an outline for a proposal titled
"Exploring Renewable Energy Business Opportunities."

Background:
- Our company is a mid-sized IT firm with 500 employees
- Core business: systems integration and cloud services
- Leadership is looking for new business pillars
- We want to strengthen our sustainability initiatives

Suggest what items the proposal should include.
Don't write the full text yet — just the outline (heading structure).

Save to exercises/module2/output/proposal-outline.md.
```

**Checkpoint**: Review the outline and provide correction instructions if sections are missing or need reordering. This "review and revise" process is key.

---

#### Step 2: Revise the Outline and Write the Body

After reviewing the outline, provide revision instructions and have the full text written.

```
I've reviewed exercises/module2/output/proposal-outline.md.
Please make the following changes and then write the full text.

Changes:
- Add a "Strategic Alignment" section at the beginning
  -> Connect to our "sustainability management" vision
- In the "Market Opportunity" section, cite specific numbers from the Exercise 2 research
- Add required personnel and external partner roles to the "Implementation Structure" section
- Include a 3-year ROI estimate (rough numbers) in the "Investment Plan" section
- Add "Risks and Mitigation" as a standalone chapter

Reference files:
- exercises/module2/output/renewable-energy-report.md (research report)
- exercises/module2/output/renewable-energy-analysis.md (analysis results)

Audience: Board meeting attendees (executive level)
Each chapter should be approximately 200-400 words.

Save to exercises/module2/output/re-business-proposal.md.
```

---

#### Step 3: Incorporate Feedback and Finalize

```
Please incorporate the following feedback into
exercises/module2/output/re-business-proposal.md.

Feedback:
1. Add an executive summary at the beginning (about half a page)
2. Strengthen the numerical data in the market opportunity section
3. Add a section on competitor activity
   -> Research examples of peer IT companies entering the renewable energy space
4. Add a "Next Steps" section
   -> Propose an action plan for a 3-month evaluation phase after the board meeting

Reference files:
- exercises/module2/output/renewable-energy-report.md

Overwrite exercises/module2/output/re-business-proposal.md.
```

---

#### Step 4: Create the HTML Version

```
Please read exercises/module2/output/re-business-proposal.md
and convert it to a polished HTML format.

Requirements:
- Responsive design
- Table of contents with anchor links
- Tables with borders, styled for readability
- Color theme: Green tones (to evoke renewable energy)
- Print-friendly (@media print)
- Self-contained single HTML file (no external CSS or JS)

Save to exercises/module2/output/re-business-proposal.html.
```

---

### Expected Deliverables

| File | Content |
|------|---------|
| `output/proposal-outline.md` | Proposal outline |
| `output/re-business-proposal.md` | Completed proposal (Markdown) |
| `output/re-business-proposal.html` | Proposal in HTML |

### Evaluation Criteria

- [ ] Is the research from Exercise 2 properly cited and used in the proposal?
- [ ] Did you correctly use file reference instructions ("Please read...")?
- [ ] Did you follow the step-by-step process of outline review, revision, then full text?
- [ ] Were you able to give clear instructions for incorporating feedback?
- [ ] Is the final document compelling enough for a board meeting audience?
- [ ] Does the HTML version display well in a browser?

---

## Exercise 4: Data Analysis

### Objective

Learn how to ask Claude Code to analyze CSV data effectively.

### Data Source

Use `shared/sample-data/sales-data.csv`.

This file contains the following columns:
- `date` — Date
- `product_category` — Product category (Electronics, Office, etc.)
- `product_name` — Product name
- `region` — Region (Tokyo, Osaka, Fukuoka, etc.)
- `units_sold` — Units sold
- `unit_price` — Unit price
- `total_revenue` — Total revenue
- `customer_type` — Customer type (B2B, B2C)

### Task

Perform data analysis in the following 3 stages and produce a final analysis report.

---

#### Step 1: Monthly Revenue Trend Analysis

```
Please read shared/sample-data/sales-data.csv.

This is a sales dataset.
Column structure: date (date), product_category (product category), product_name (product name),
region (region), units_sold (units sold), unit_price (unit price),
total_revenue (revenue), customer_type (customer type: B2B/B2C)

First, perform the following monthly analysis:
1. Monthly total revenue trends
2. Monthly total units sold trends
3. Month-over-month revenue growth rate
4. Identify the highest and lowest revenue months

Display results in Markdown tables and
save to exercises/module2/output/monthly-analysis.md.
```

---

#### Step 2: Analysis by Category and Region

```
Please continue analyzing shared/sample-data/sales-data.csv.

Analyze from the following perspectives:

[Category Analysis]
1. Total revenue and percentage breakdown by product category
2. Monthly revenue trends by category
3. Top 3 best-selling products in each category
4. Average unit price and average units sold by category

[Regional Analysis]
5. Total revenue and percentage breakdown by region
6. Cross-tabulation of region by category
7. Customer type (B2B/B2C) breakdown by region
8. Differences in top-selling categories across regions

Organize results in Markdown tables and
save to exercises/module2/output/category-region-analysis.md.
```

---

#### Step 3: Create Charts and Analysis Report

```
Please visualize the analysis results from shared/sample-data/sales-data.csv.

Create an HTML file containing the following charts:
1. Line chart of monthly revenue trends
2. Bar chart of revenue by product category
3. Pie chart of revenue breakdown by region
4. Heatmap-style display of the category-by-region cross-tabulation

Technical requirements:
- Use Chart.js (via CDN)
- Clean, readable color theme
- Include titles and legends on all charts
- Responsive design

Save to exercises/module2/output/sales-charts.html.
```

Next, create an integrated analysis report.

```
Please read the following files:
- exercises/module2/output/monthly-analysis.md
- exercises/module2/output/category-region-analysis.md

Integrate these analysis results into a report with the following structure:

1. Executive summary (narrow down to the 3 key findings)
2. Overall revenue overview (monthly trends and annual summary)
3. Product category analysis (identify strong and growing categories)
4. Regional analysis (characteristics and differences across regions)
5. Customer type analysis (B2B vs. B2C)
6. Issues and opportunities
7. Recommended actions (3 specific initiatives)

Audience: Attendees of the sales department's quarterly review meeting
Length: Approximately 1,500-2,500 words
Standardize figures in thousands of dollars.

Save to exercises/module2/output/sales-report.md.
```

---

### Expected Deliverables

| File | Content |
|------|---------|
| `output/monthly-analysis.md` | Monthly revenue trend analysis |
| `output/category-region-analysis.md` | Category and regional analysis |
| `output/sales-charts.html` | Interactive charts |
| `output/sales-report.md` | Integrated analysis report |

### Evaluation Criteria

- [ ] Did you correctly describe the column structure in your instructions?
- [ ] Were monthly, category, and regional aggregations performed accurately?
- [ ] Do the charts display correctly in a browser and clearly show data trends?
- [ ] Is the executive summary concise and focused on the key findings?
- [ ] Are the recommended actions specific and grounded in the analysis?
- [ ] Did you practice giving step-by-step analysis instructions?

---

## Exercise 5: Complex Task — End-to-End Comprehensive Exercise

### Objective

Experience a realistic workflow that combines research, data analysis, and document creation.

### Scenario

You are a member of the strategy department. Your manager has given you the following request:

> "We'd like to explore renewable energy options for our company. First, research the current landscape, factor in our own operational data, and put together a proposal with recommended next steps for the executive meeting next week."

### Task

Complete the entire workflow from research to final deliverable, following the steps below.

---

#### Phase 1: Project Setup

```
Please create a directory structure for a new project called "renewable-energy-initiative."

exercises/module2/project/
├── data/           # Source data
├── research/       # Research results
├── analysis/       # Analysis results
├── output/         # Final deliverables
├── CLAUDE.md       # Project-wide rules
└── README.md       # Project overview

Create each directory. In CLAUDE.md, include the following:
- All output files should be in Markdown format
- Write in professional but approachable language
- Cite sources for all numerical data
- Default audience is "executive meeting attendees"

In README.md, describe the project overview and objectives.
```

---

#### Phase 2: Research

```
Please research corporate adoption of renewable energy.

Topics to investigate:
1. Methods for companies to adopt renewable energy (on-site generation, PPAs, renewable energy certificates, etc.)
2. Case studies of domestic companies (5 or more, focusing on IT companies)
3. Benefits and costs of adoption
4. Challenges and how to address them

Cite your sources.
Save to exercises/module2/project/research/corporate-re-adoption.md.
```

---

#### Phase 3: Data Analysis

We'll use the sales data from Exercise 4 as a proxy to understand our company's operational patterns.

```
Please read shared/sample-data/sales-data.csv.

Use this data as a reference for understanding our company's seasonal business activity patterns.
Analyze the monthly revenue trends to identify busy and slow periods.

Analysis to perform:
1. Identify peak and off-peak seasons from monthly revenue trends
2. Analyze regional distribution of business activity
3. Based on the above, form hypotheses about our likely energy consumption patterns

Save to exercises/module2/project/analysis/activity-pattern.md.
```

---

#### Phase 4: Integration and Document Creation

```
Please read all of the following files:
- exercises/module2/project/research/corporate-re-adoption.md
- exercises/module2/project/analysis/activity-pattern.md

Integrate these into a proposal for the executive meeting.

Title: "Exploring Renewable Energy Options for Our Company"

Document structure:
1. Executive summary
2. Background and purpose
   - Why consider renewable energy now?
   - Market expectations and competitor activity
3. Renewable energy adoption options
   - Comparison table of approaches
4. Our current situation
   - Energy demand characteristics based on business activity patterns
5. Recommended adoption approach
   - Phase 1-3 roadmap
6. Estimated costs and benefits
7. Risks and mitigation
8. Next steps (3-month evaluation phase proposal)

Audience: Executive meeting attendees (5 board members)
Length: Approximately 2,500-4,000 words

Save to exercises/module2/project/output/re-initiative-proposal.md.
```

---

#### Phase 5: Final Touches

```
Please read exercises/module2/project/output/re-initiative-proposal.md
and create the following two versions:

1. HTML version (for presentation)
   - Polished design (green color theme)
   - Table of contents with anchor links
   - Tables with borders
   - Print-friendly
   - Self-contained single HTML file
   -> exercises/module2/project/output/re-initiative-proposal.html

2. Summary version (for email distribution)
   - Short enough to fit on one page (800 words or fewer)
   - Bullet-point format focusing on key points only
   -> exercises/module2/project/output/re-initiative-summary.md
```

---

#### Phase 6: Progress Log

```
Please create exercises/module2/project/PROGRESS.md.

Include the following:
1. List of completed tasks (checklist format)
2. List of files created with a brief description of each
3. Lessons learned and tips discovered during the work
4. Future tasks (what you'd do next if this were a real project)
```

---

### Expected Deliverables

| File | Content |
|------|---------|
| `project/CLAUDE.md` | Project-wide rules |
| `project/README.md` | Project overview |
| `project/research/corporate-re-adoption.md` | Research results |
| `project/analysis/activity-pattern.md` | Data analysis results |
| `project/output/re-initiative-proposal.md` | Proposal (Markdown) |
| `project/output/re-initiative-proposal.html` | Proposal (HTML) |
| `project/output/re-initiative-summary.md` | Summary version |
| `project/PROGRESS.md` | Progress log |

### Evaluation Criteria

- [ ] Did you design the project directory structure upfront and keep files organized?
- [ ] Did you use CLAUDE.md to set project-wide rules?
- [ ] Did you properly integrate research results and data analysis into the proposal?
- [ ] Were you able to correctly reference multiple files in your instructions?
- [ ] Is the final deliverable at a quality level suitable for an executive meeting?
- [ ] Does the HTML version display well in a browser?
- [ ] Is the summary version within 800 words and focused on the key points?
- [ ] Does PROGRESS.md contain specific reflections on the work?

---

## Overall Review Checklist

After completing all exercises, use the following checklist for self-reflection.

### Prompting
- [ ] I can write specific instructions with the 5 elements in mind
- [ ] I have a firsthand understanding of the difference between vague and specific instructions

### Research
- [ ] I practiced the step-by-step research method (overview, deep dive, structure, report)
- [ ] I now pay attention to source reliability

### Document Creation
- [ ] I can create documents that reference existing files
- [ ] I experienced the step-by-step process of outline, body text, and feedback
- [ ] I can request Markdown-to-HTML conversion

### Data Analysis
- [ ] I can describe a CSV's structure and request analysis
- [ ] I can give instructions for multi-dimensional analysis (monthly, by category, by region, etc.)
- [ ] I can request chart creation and integrate findings into an analysis report

### Complex Tasks
- [ ] I completed an end-to-end workflow from research through analysis to document creation
- [ ] I was able to design a project directory structure and set up CLAUDE.md
- [ ] I understand the importance of keeping a progress log
