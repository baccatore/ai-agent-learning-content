# Module 2: Practical Skills — Using Claude Code in Your Work

> **Prerequisites**: You should have completed Module 1 and be comfortable with basic Claude Code operations (launching, giving simple instructions, file operations).

---

## Chapter 1: Writing Effective Instructions (Prompting)

### 1.1 Why "How You Give Instructions" Matters

Claude Code is an agent that works based on your instructions. Just like working with a human colleague or partner, vague instructions lead to vague results. Conversely, clear and precise instructions yield remarkably high-quality outputs.

In this chapter, you'll learn the art of giving instructions to get the best possible results from Claude Code.

### 1.2 The Five Elements of a Good Instruction

Effective instructions should include the following five elements:

| Element | Description | Example |
|---------|-------------|---------|
| **Purpose** | What you want to achieve | "To use as input for evaluating a new business opportunity" |
| **Audience** | Who will read or use the output | "Executives attending the board meeting" |
| **Format** | What form the output should take | "A report in Markdown format" |
| **Length** | How long the output should be | "Approximately 3 pages" |
| **Constraints** | Rules or limitations to follow | "Do not include confidential data" |

You don't need to include all five elements in every instruction. However, if the output doesn't feel quite right, check whether any of these five elements are missing.

### 1.3 Bad to Good: Instruction Improvement Examples

#### Example 1: Research Request

**Bad:**
```
Research AI for me
```

**Good:**
```
Please research the current state of generative AI adoption in enterprises.

Purpose: To use as reference material for our company's AI adoption review
Audience: IT department managers (technically knowledgeable)
Topics to cover:
- Enterprise adoption rates and primary use cases
- Specific examples of benefits from adoption (at least 3 companies)
- Common challenges and how to address them
Format: Markdown report
Length: Approximately 1,500–2,500 words
```

**Why this works**: The purpose, audience, desired content, format, and length are all clearly specified, allowing Claude Code to deliver output close to expectations on the first try.

---

#### Example 2: Document Creation

**Bad:**
```
Write a proposal
```

**Good:**
```
Please create a proposal for an internal training program called "Introduction to AI for Non-Engineers."

Background:
- The company is promoting AI adoption company-wide, starting with a training program to shift mindsets
- The target audience is 30 people from the sales department with average IT literacy

Items to include in the proposal:
- Training objectives and expected outcomes
- Target participants and assumed prior knowledge
- Curriculum (3-hour session)
- Required setup and equipment
- Budget estimate
- Proposed schedule

Audience: The HR director who will approve the training
Format: Save as a Markdown file at output/training-proposal.md
```

**Why this works**: The background information helps Claude Code understand the situation, and specifying the items ensures nothing is missed.

---

#### Example 3: Data Analysis

**Bad:**
```
Analyze this CSV
```

**Good:**
```
Please read data/sales-2025.csv and perform the following analysis.

This file contains monthly sales data by product category for 2025.
Column structure: Month, Category, Revenue, Units Sold

Analysis to perform:
1. Annual revenue totals and percentage breakdown by category
2. Monthly revenue trends (year-over-year comparison if possible)
3. Identify the category with the highest growth rate

Output:
- A Markdown report summarizing the analysis -> output/sales-analysis.md
- Key charts in HTML format -> output/sales-charts.html

Audience: Attendees of the sales department's quarterly review meeting
```

**Why this works**: The data structure, analysis perspectives, and output format are all specified, minimizing back-and-forth.

---

#### Example 4: Comparative Research

**Bad:**
```
Compare Slack and Teams
```

**Good:**
```
Please create a comparison document for Slack and Microsoft Teams.

Purpose: Selecting an internal communication tool
Comparison criteria:
- Core features (chat, calls, file sharing)
- Integration with external services (especially Google Workspace)
- Pricing structure (annual cost for a team of 50)
- Security features
- Ease of deployment and administration

Format: Comparison table (Markdown table) + brief commentary on each criterion
Length: One comparison table + approximately 1,000 words of commentary
Audience: The IT department team responsible for tool selection
Output: output/tool-comparison.md
```

**Why this works**: By specifying concrete comparison criteria, you get information that directly supports decision-making.

---

#### Example 5: Email Drafting

**Bad:**
```
Write an apology email
```

**Good:**
```
Please draft an apology email regarding a delivery delay.

Situation:
- Original delivery date: March 15
- Revised delivery estimate: March 22 (one-week delay)
- Reason for delay: Parts procurement issue (supplier's manufacturing line problem)
- Mitigation: Expedited processing reduced the delay to one week (originally expected to be two weeks late)

Tone: Sincere and professional, but not overly apologetic
Recipient: The client's project manager (we have a good working relationship)
Length: Approximately 150–200 words
Format: Plain text ready to paste into an email
Output: output/apology-email.txt
```

**Why this works**: The specific situation, tone, and relationship context are all provided, resulting in an email that's practically ready to send.

---

### 1.4 Giving Instructions Step by Step

You don't need to specify everything perfectly from the start. In fact, **starting with a rough instruction and refining it step by step** is often more efficient.

#### Step 1: Start with a rough request

```
Please brainstorm 3 new business ideas.
Our company is a mid-sized food manufacturer looking to target health-conscious consumers.
Save to output/business-ideas.md.
```

#### Step 2: Dig deeper into promising ideas

```
The second idea, "Personalized Nutrition Supplement Subscription," sounds interesting.
Please flesh out this idea from the following angles:
- Market size estimate
- Target customer personas (2 types)
- Business model (revenue structure)
- Differentiation from competing services
- Rough estimate of initial investment

Save to output/supplement-subscription-detail.md.
```

#### Step 3: Refine specific sections further

```
Please expand the competitive analysis section.
Specifically:
- Identify 3 domestic competitors and summarize each of their services
- Add 2 international examples as well
- Propose a differentiation strategy that leverages our strength as a food manufacturer with production expertise

Update output/supplement-subscription-detail.md.
```

By working step by step like this, you can review Claude Code's output at each stage and course-correct as needed.

### 1.5 Providing Context

To get better results from Claude Code, it's important to provide sufficient **background information (context)**.

#### Using existing files as context

```
Please read docs/company-profile.md to understand our business,
then draft a company introduction document for new clients.

Save to output/company-intro.md.
```

#### Using multiple files as context

```
Please read the following files:
- data/survey-results.csv (customer survey results)
- docs/product-roadmap.md (product roadmap)

Based on these, create an improvement proposal for the next product version that reflects customer feedback.
Save to output/improvement-proposal.md.
```

#### Using web content as context

```
Please read https://example.com/industry-report-2025, summarize the content,
and outline the implications for our company.

Save to output/industry-report-summary.md.
```

### 1.6 Using CLAUDE.md to Centralize Common Instructions

If you create a file called `CLAUDE.md` in your project's working directory, Claude Code will automatically read its contents every time. By consolidating frequently used instructions and assumptions here, you can keep your individual instructions simpler.

#### CLAUDE.md Example

```
Use the following example as a reference to create your own CLAUDE.md.

CLAUDE.md contents:
---
# Project-Wide Rules

## Output Rules
- Save all output files to the output/ directory
- Use English kebab-case for file names (e.g., market-analysis.md)
- Include the creation date and status at the top of every Markdown file

## Writing Style
- When no audience is specified, write for a general business audience
- Use professional but approachable language
- Add a brief explanation when a technical term first appears

## Data Handling
- Do not include company names or personal names directly in analysis results
- When creating charts, output them as HTML using Chart.js
---
```

You can even ask Claude Code to create this `CLAUDE.md` file for you.

```
Please create a CLAUDE.md file with the content above.
```

---

## Chapter 2: Desk Research

### 2.1 Conducting Research with Web Search

Claude Code can use its web search capability to look up the latest information. By delegating research tasks to Claude Code, you can significantly reduce the time spent gathering information.

#### Basic research request

```
Please research the RPA (Robotic Process Automation) market.

Topics to investigate:
- Market size and growth rate (past 3 years)
- Major vendors and market share
- Industries with the highest adoption rates
- Future trends

Please cite your sources.
Save to output/rpa-market-research.md.
```

#### Research tips

- **Be specific about what you want investigated**: Just saying "look into it" is too broad
- **Ask for source citations**: Essential for verifying reliability
- **Specify a time frame**: Phrases like "past 3 years" or "since 2025" help narrow the focus

### 2.2 Creating a Market Research Report (Step by Step)

Here we'll walk through how to conduct market research with Claude Code, using a "Pet Tech Market Research Report" as an example.

#### Step 1: Understand the overall market

```
Please research the Pet Tech market.

Summarize the following:
- Definition of Pet Tech and the service/product categories it includes
- Global and domestic market size
- Social factors driving market growth

Cite your sources and save to output/pettech-overview.md.
```

**What to expect:**

Claude Code will perform web searches and create a Markdown file summarizing the Pet Tech market. The output will be a report-style document covering the definition, market size figures, and growth factors (e.g., aging populations, pets being treated as family members).

#### Step 2: Research key players

```
Based on the content of output/pettech-overview.md,
research the major players in the Pet Tech market.

Topics to investigate:
- Major domestic companies and services (at least 5)
- Overview and characteristics of each company's service
- Funding status (where available)
- Notable international companies (approximately 3)

Save to output/pettech-players.md.
```

#### Step 3: Compile analysis and insights

```
Please read output/pettech-overview.md and output/pettech-players.md,
then create a market research report with the following sections:

1. Executive summary (300 words or fewer)
2. Market overview (organized from earlier research)
3. Competitive landscape (analysis of major players)
4. Market entry opportunities (where are the white spaces?)
5. Risks and challenges
6. Recommended actions

Audience: The corporate strategy department evaluating new business opportunities
Format: Formal report style
Save to output/pettech-market-report.md.
```

**What to expect:**

A comprehensive market research report that integrates the findings from the previous two steps, covering everything from the executive summary to recommended actions.

### 2.3 Conducting a Competitive Analysis

```
Please conduct a competitive analysis of the following 3 project management tools.

Subjects:
1. Asana
2. Monday.com
3. ClickUp

Analysis criteria:
- Core features and characteristics
- Pricing plans (monthly cost for a team of 10)
- Strengths and weaknesses
- Primary target customers
- Language/localization support

Output format:
- Comparison table (Markdown table)
- Detailed analysis of each tool (approximately 500 words each)
- Overall evaluation and recommendation (our situation: 50-person IT company, currently using spreadsheets)

Save to output/pm-tool-comparison.md.
```

**What to expect:**

A report containing a comparison table covering features, pricing, and strengths/weaknesses, along with detailed analysis of each tool and a recommendation tailored to your company's situation.

### 2.4 Verifying Sources and Evaluating Reliability

Always verify the sources in Claude Code's research output.

```
Please review the numerical data cited in the market research report
output/pettech-market-report.md and evaluate source reliability.

Rate each source using the following criteria:
- A: Official reports from government agencies or major research firms
- B: Articles from industry or specialized media
- C: Personal blogs, social media, etc. (reliability needs verification)

For low-reliability information, search for alternative sources.
Save the source evaluation to output/source-evaluation.md.
```

**Important notes:**

- Information provided by Claude Code is not always accurate
- For numerical data (market size, market share, etc.) in particular, we strongly recommend verifying the original sources yourself
- When using research results for important decisions, treat Claude Code's output as a starting point and independently verify key facts

### 2.5 Structuring and Organizing Research Results

Here's how to consolidate multiple research outputs into a well-organized document.

```
Please read the following research files from the output/ directory:
- pettech-overview.md
- pettech-players.md
- pettech-market-report.md

Integrate their content and create a final report with this structure:

1. Cover page (title, date, author)
2. Table of contents
3. Executive summary
4. Main body (organized into chapters)
5. Appendix (data tables, glossary)

Save to output/pettech-final-report.md.
```

---

## Chapter 3: Creating Business Documents and Proposals

### 3.1 Proposal Creation Workflow

Creating proposals is one of the tasks where Claude Code truly shines. Follow this workflow:

#### Step 1: Create an outline

```
Please create an outline for a company-wide digital transformation (DX) project proposal.

Background:
- Our company is a 300-employee manufacturer
- Many processes are paper-based, and digitalization is lagging
- Management is supportive of DX but unsure where to start

Please suggest the items the proposal should include.
Don't write the full text yet. Just provide the outline (heading structure).

Save to output/dx-proposal-outline.md.
```

**What to expect:**

An outline with chapter headings like "1. Background and Challenges," "2. Project Objectives," "3. Implementation Structure," "4. Execution Plan," and so on.

#### Step 2: Adjust the outline, then write the body

```
I've reviewed the outline in output/dx-proposal-outline.md.
Please make the following changes and then write the full text:

Changes:
- Add "Leveraging External Partners" to the "Implementation Structure" chapter
- Change the "Budget" chapter to "Return on Investment (ROI)" and include cost reduction estimates
- Add a "Risks and Mitigation" chapter

Each chapter should be approximately 250–400 words.
The audience is board members attending the executive meeting.

Save to output/dx-proposal.md.
```

### 3.2 Drafting a Sales Proposal

```
Please draft a sales proposal for a prospective client.

Our service: "StockSmart," a cloud-based inventory management system
Prospect: A mid-sized retail chain (20 locations)
Their challenges (from our discovery meeting notes):
- Headquarters can't see real-time inventory across stores
- Lost sales due to stockouts estimated at $50,000 per month
- Physical inventory counts take 2 days every month

Proposal structure:
1. Summary of the prospect's challenges
2. How StockSmart solves them
3. Estimated impact of implementation
4. Implementation steps (3-month plan)
5. Pricing plan
6. Case studies (2 examples, fictional is fine)

Save to output/proposal-stocksmart.md.
```

**What to expect:**

A proposal draft structured around the client's pain points, including numerical impact estimates, a concrete implementation timeline, and fictional case studies.

### 3.3 Creating New Documents Based on Existing Files

One of Claude Code's strengths is its ability to read existing files and create new documents based on their content.

#### Matching an existing proposal format

```
Please read docs/templates/proposal-template.md.
Rewrite the StockSmart proposal to match this format (heading structure and style).

Save to output/proposal-stocksmart-formatted.md.
```

#### Referencing past materials

```
Please read the following past proposals:
- docs/past-proposals/proposal-clientA.md
- docs/past-proposals/proposal-clientB.md

Using their tone, structure, and level of detail as a guide,
create a new proposal for a prospective client.

Proposal content:
(describe the proposal details here)

Save to output/proposal-clientC.md.
```

#### Extracting action items from meeting notes

```
Please read docs/meeting-notes/2025-03-01-kickoff.md and create the following:

1. Meeting summary (bullet points)
2. List of decisions made
3. To-do list (with assignees and deadlines)
4. Suggested agenda for the next meeting

Save to output/meeting-summary.md.
```

### 3.4 Converting Markdown to Other Formats

You can also convert Markdown files created by Claude Code into other formats.

#### Converting to HTML

```
Please read output/dx-proposal.md and convert it to a polished HTML format.

Requirements:
- Responsive design (readable on mobile)
- Table of contents with anchor links
- Nicely styled tables
- Print-friendly (@media print)
- Self-contained single HTML file (no external CSS or JS)

Save to output/dx-proposal.html.
```

**What to expect:**

A single HTML file with embedded CSS. When opened in a browser, it displays a well-styled proposal document.

#### Converting to plain text

```
Please read output/dx-proposal.md and convert it to plain text suitable for pasting into an email.

- Do not use Markdown syntax (#, *, -)
- Format tables using indentation
- Wrap lines at approximately 70 characters

Save to output/dx-proposal.txt.
```

### 3.5 Tips for Iteration (Repeated Improvement)

Rather than expecting a perfect deliverable from a single instruction, you'll get better results by iterating and refining.

#### Patterns for improvement instructions

**Adjusting the overall tone:**
```
Please rewrite output/dx-proposal.md in a more casual tone.
The current version is too formal — aim for a tone appropriate for a department heads' meeting.
```

**Expanding a specific section:**
```
Please expand the "Estimated Impact" section in output/dx-proposal.md.
Add more specific numbers and include a 3-year ROI calculation.
```

**Incorporating feedback:**
```
Please incorporate the following feedback into output/dx-proposal.md:

1. Add a "Strategic Alignment" section at the beginning
   -> Connect to the mid-term plan's key theme of "Digital First"
2. Add the establishment of a PMO to the "Implementation Structure" section
3. Make the countermeasures for organizational resistance more concrete in "Risks and Mitigation"
4. Add more tables throughout the document (using Markdown tables)

Overwrite the updated content to output/dx-proposal.md.
```

**Adjusting length:**
```
Please condense output/dx-proposal.md to roughly half its current length
while preserving the key content. I want to use it as an executive summary.

Save to output/dx-proposal-summary.md.
```

---

## Chapter 4: Data Analysis and Visualization

### 4.1 Reading and Analyzing CSV Data

Claude Code can read data files such as CSVs and perform analysis. It writes and executes Python scripts, making it capable of serious analytical work.

#### Basic analysis request

```
Please read data/sales-data-2025.csv and provide basic statistics.

What I want to know:
- Number of rows and columns
- Data type for each column
- Basic statistics for numeric columns (total, average, max, min)
- Whether there are any missing values

Summarize in output/data-overview.md.
```

**What to expect:**

Claude Code reads the data, uses libraries like pandas to compute basic statistics, and produces a clear Markdown summary.

#### Understanding the data

```
Please display the first 20 rows and last 5 rows of data/sales-data-2025.csv.
Also, show the number of unique values for each column, and for categorical columns, list the categories.
```

### 4.2 Basic Analysis: Aggregation, Comparison, Trends

#### Aggregation analysis

```
Please analyze data/sales-data-2025.csv.

Column structure: Date, Store Name, Product Category, Revenue, Quantity

Perform the following aggregations:
1. Total revenue by store (descending order)
2. Total revenue and percentage breakdown by product category
3. Monthly revenue trends
4. Cross-tabulation of store by category

Save to output/sales-summary.md.
```

#### Comparison analysis

```
Please read both data/sales-2024.csv and data/sales-2025.csv
and perform a year-over-year comparison analysis.

Analysis to perform:
- Year-over-year total revenue comparison
- Month-over-month year-over-year trends
- Year-over-year comparison by category (identify growing and declining categories)
- The store with the most improvement and the one with the most decline

Save to output/year-over-year-analysis.md.
```

#### Trend analysis

```
Please analyze data/monthly-kpi.csv.

Column structure: Month, New Users, Active Users, Churn Rate, Monthly Revenue, ARPU

Analyze the following:
1. Monthly trend for each KPI
2. Identify KPIs showing upward or downward trends
3. Correlations between KPIs (e.g., relationship between new users and ARPU)
4. Anomaly detection (months with sudden changes)

Save to output/kpi-trend-analysis.md.
```

### 4.3 Generating Charts and Graphs

Claude Code can generate charts using Python's matplotlib or HTML/JavaScript with Chart.js.

#### Basic chart creation

```
Please read data/sales-data-2025.csv and create the following charts:

1. Line chart of monthly revenue trends
2. Pie chart of revenue breakdown by category
3. Bar chart of revenue by store (top 10 stores)

Create in HTML format using Chart.js.
Loading Chart.js from CDN is fine.
Save to output/sales-charts.html.
```

**What to expect:**

An HTML file that, when opened in a browser, displays three interactive charts. You can hover for values and click the legend to toggle series visibility.

#### Image output with matplotlib

```
Please read data/sales-data-2025.csv and save a monthly revenue trend chart as a PNG image.

Requirements:
- Proper font rendering for any labels
- Title: "2025 Monthly Revenue Trends"
- X-axis: Month, Y-axis: Revenue ($)
- Grid lines enabled
- Size: 1200x600px

Save to output/monthly-sales-chart.png.
```

### 4.4 Interactive Visualization in HTML

More advanced interactive visualizations are also possible.

```
Please read data/sales-data-2025.csv and create an interactive dashboard in HTML format.

Dashboard elements:
1. KPI cards: Total revenue, month-over-month change, target achievement rate
2. Line chart of monthly revenue trends (with year-over-year comparison)
3. Bar chart of revenue by category
4. Store revenue ranking (table format)
5. Filter: Period selection (by month)

Technical requirements:
- Self-contained single HTML file
- Chart.js (via CDN)
- Responsive design
- Color theme: Blue tones

Save to output/sales-dashboard.html.
```

**What to expect:**

When opened in a browser, KPI cards appear at the top, with charts and tables arranged below. Changing the filter period updates all charts and tables dynamically.

### 4.5 Turning Analysis into Reports

Compile analysis results into a polished report.

```
Please read the following files:
- output/sales-summary.md (aggregation results)
- output/year-over-year-analysis.md (year-over-year comparison)
- output/kpi-trend-analysis.md (KPI trends)

Integrate these into a monthly report for the executive meeting.

Report structure:
1. Executive summary (narrow down to the 3 key findings)
2. Revenue summary (tables and charts)
3. Year-over-year comparison (improvements and issues)
4. KPI highlights (notable changes)
5. Recommended actions

Requirements:
- Standardize all figures in thousands of dollars
- Show year-over-year as percentages
- Include at least one table or chart per section
- Keep the total under 3,000 words

Create both:
Markdown report: output/monthly-report.md
HTML report: output/monthly-report.html
```

### 4.6 Data Privacy Considerations

When performing data analysis with Claude Code, keep the following in mind.

**Data NOT suitable for analysis with Claude Code:**

- Data containing personal names, addresses, phone numbers, or email addresses
- Credit card or bank account information
- Medical or health data
- Internal HR evaluation data
- Any other data your company's policies prohibit from being input to external AI

**Rules for safe use:**

1. **Anonymization**: If personally identifiable information isn't needed for the analysis, anonymize the data before passing it to Claude Code
2. **Use aggregated data**: Where possible, use pre-aggregated data rather than raw data
3. **Check company policies**: Review your organization's AI usage policy and comply with its rules
4. **Be aware of how Claude Code runs**: Claude Code runs locally, but conversation content may be sent to Anthropic's servers depending on your plan and settings

```
# Anonymization example
Please anonymize the personal information (names, phone numbers, email addresses)
in data/customer-list.csv.

- Names -> Replace with Customer001, Customer002, ...
- Phone numbers -> Remove
- Email addresses -> Remove
- Keep all other columns (purchase history, region, age group) as-is

Save to output/customer-list-anonymized.csv.
```

---

## Chapter 5: Complex Tasks — Combining Multiple Skills

### 5.1 End-to-End Workflow: Research, Analysis, and Document Creation

Now let's combine the skills from earlier chapters to tackle complex tasks that mirror real-world work.

#### Scenario: Create a new business proposal

**Step 1: Market Research**

```
Please research the "fitness tech for seniors" market.

Topics to investigate:
- Size of the senior (age 60+) fitness market
- Examples of technology-enabled fitness services for seniors
- Digital device usage among the target demographic (seniors)
- Potential competitors

Cite your sources and save to output/senior-fitness-research.md.
```

**Step 2: Data Analysis**

```
Please read data/senior-health-survey.csv and analyze it.

This file contains survey results on health and fitness among people aged 60+.
Column structure: Age, Gender, Exercise Frequency, Exercise Type, Monthly Spending, Device Ownership, App Interest

Analysis to perform:
1. Cross-tabulation of age group by exercise frequency
2. Distribution and average of monthly spending
3. Device ownership rate
4. Relationship between app interest and age

Save to output/senior-survey-analysis.md.
Save charts to output/senior-survey-charts.html.
```

**Step 3: Integrate into a proposal**

```
Please read the following files:
- output/senior-fitness-research.md (market research results)
- output/senior-survey-analysis.md (survey analysis results)
- output/senior-survey-charts.html (analysis charts)

Integrate these into a new business proposal.

Proposal: Development of a fitness app for seniors
Audience: Board meeting (executive-level)

Document structure:
1. Executive summary
2. Market opportunity (from research findings)
3. Understanding the target customer (from survey analysis)
4. Business concept
5. Business model
6. Competitive advantage
7. Development and rollout roadmap (12-month plan)
8. Initial investment and financial projections
9. Risks and mitigation
10. Next steps

Save to output/senior-fitness-proposal.md.
Also create an HTML version at output/senior-fitness-proposal.html.
```

**What to expect:**

A compelling business proposal that blends qualitative market research with quantitative survey data. The HTML version presents a visually polished document with inline charts.

### 5.2 Managing Work Across Multiple Files

Complex tasks involve multiple files, so managing your work is important.

#### Design the directory structure upfront

```
Please create a directory structure for a new project called "senior-fitness."

projects/senior-fitness/
├── data/           # Source data
├── research/       # Research results
├── analysis/       # Analysis results
├── output/         # Final deliverables
└── README.md       # Project overview

Create each directory and add a project overview to README.md.
```

#### Track progress

```
Please update projects/senior-fitness/README.md to include
the current progress.

Completed tasks:
- [x] Market research
- [x] Survey data analysis
- [x] Proposal creation

Remaining tasks:
- [ ] Detailed financial model
- [ ] Additional risk analysis
- [ ] Create presentation summary version
```

### 5.3 Pausing and Resuming Work

Here are techniques for pausing your Claude Code work and picking it up later.

#### Save your work state

At a natural stopping point, summarize the current state for easy resumption.

```
I'm wrapping up for today.
Please create projects/senior-fitness/PROGRESS.md with:

1. What was completed today
2. List of files created with a brief description of each
3. What to do next time (prioritized)
4. Issues or questions that came up during the work
```

#### Resume work

When starting a new Claude Code session to resume work, begin by loading the previous state.

```
I'm resuming work on the projects/senior-fitness/ project.

First, please read:
- projects/senior-fitness/PROGRESS.md (previous progress)
- projects/senior-fitness/README.md (project overview)

Then pick up from item #1 on the "what to do next" list.
```

**Tips:**

- Writing basic project information in CLAUDE.md means it gets loaded automatically every time you resume
- Using a consistent file naming scheme makes files easier to find later
- Keeping a work log is a good habit and useful for sharing with team members

---

## Summary

In Module 2, you learned the following skills:

| Chapter | Topics Covered |
|---------|---------------|
| Chapter 1 | Writing effective instructions, the 5 elements, step-by-step prompting, CLAUDE.md |
| Chapter 2 | Web search research, market research, competitive analysis, source verification |
| Chapter 3 | Proposal creation, sales proposals, leveraging existing documents, format conversion, iteration |
| Chapter 4 | CSV analysis, aggregation/comparison/trends, chart creation, dashboards, privacy considerations |
| Chapter 5 | End-to-end workflows, file management, pausing and resuming work |

In Module 3, you'll learn about a wider variety of business use cases and how to build more complex workflows.
