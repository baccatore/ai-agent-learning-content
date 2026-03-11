---
title: "Module 2: Reference Materials"
lang: "en"
category: "self-study"
module: "02-practical-skills"
contentType: "reference"
order: 3
---
# Module 2: Reference Materials

> This reference is designed for quick lookup during exercises and everyday work with Claude Code.
> Bookmark it for easy access.

---

## 1. Prompt Template Collection

### 1.1 Research Request Templates

#### Template A: Market Research

```
Conduct a market research study on [target market].

Research items:
- Market size (domestic/global) and growth rate (last 3 years)
- Key players and market share
- Social and policy factors driving market growth
- Outlook and forecasts for the next 3-5 years

Cite your sources.
Target audience: [reader's role/department]
Format: Markdown report
Length: [target word count]
Output: output/[filename].md
```

#### Template B: Competitive Analysis

```
Conduct a competitive analysis of the following [number] companies.

Subjects:
1. [Company/service name A]
2. [Company/service name B]
3. [Company/service name C]

Comparison criteria:
- Core features/service offerings
- Pricing structure (monthly/annual comparison under [assumptions])
- Strengths and weaknesses
- Target customer segments
- [Additional comparison criteria]

Output format: Comparison table (Markdown table) + detailed analysis of each company (~250 words each) + overall assessment
Target audience: [reader's role/department]
Output: output/[filename].md
```

#### Template C: Trend Research

```
Research the latest trends related to [topic].

Areas to investigate:
- Notable trends (3-5)
- Overview and background of each trend
- Business impact and implications
- Leading domestic and international examples
- Future outlook

Cite your sources.
Time frame: Focus on data from [target period]
Length: 1,500-2,500 words
Output: output/[filename].md
```

#### Template D: Case Study Research

```
Research adoption case studies related to [topic].

Areas to investigate:
- Domestic corporate case studies ([number] or more)
- Background and challenges for each company
- Specific initiatives implemented
- Results of adoption (include quantitative data where available)
- Success factors and considerations

Select cases from a diverse range of industries to avoid sector bias.
Cite your sources.
Output: output/[filename].md
```

#### Template E: Regulatory/Policy Research

```
Research the regulations and policies related to [topic].

Areas to investigate:
- Overview of current relevant laws and regulations
- Recent amendments and new regulations
- Upcoming planned amendments or new regulations
- Key compliance points for businesses
- Risks of non-compliance

Target audience: [reader's role/department] (not legal experts)
Include clear explanations for any technical or legal terminology.
Output: output/[filename].md
```

---

### 1.2 Document Creation Templates

#### Template A: Project Plan / Proposal

```
Create a project plan for [topic].

Background:
- [Current challenges or situation]
- [Motivation for the project]

Sections to include:
1. Background and challenges
2. Objectives and expected outcomes
3. Specific initiatives
4. Team structure
5. Schedule ([timeframe] assumed)
6. Budget estimate (rough)
7. Risks and mitigation
8. Success metrics (KPIs)
9. Next steps

Target audience: [approver's role]
Tone: [formal/semi-formal]
Length: [target word count]
Output: output/[filename].md
```

#### Template B: Proposal Document

```
Create a proposal document for [client/department name].

Our service: [service name and overview]
Client's situation: [their challenges and needs]

Proposal structure:
1. Summary of the client's challenges
2. Proposed solution
3. Estimated implementation impact
4. Implementation steps
5. Pricing / investment
6. Case studies
7. Q&A (anticipated questions and answers)

Target audience: [recipient's role]
Tone: [formal/semi-formal]
Output: output/[filename].md
```

#### Template C: Report

```
Create a report on [topic].

Reference the following files:
- [Path and description of reference file 1]
- [Path and description of reference file 2]

Report structure:
1. Executive summary ([word count] or fewer)
2. Background and objectives
3. Methodology
4. Results and discussion
5. Recommended actions
6. Appendix (data, list of sources)

Target audience: [reader's role/department]
Format: Formal report style
Length: [target word count]
Output: output/[filename].md
```

#### Template D: Meeting Minutes to Action Items

```
Read [meeting minutes file path] and create the following:

1. Meeting summary (bullet points, 150 words or fewer)
2. List of decisions (table format: No., Decision, Details)
3. To-do list (table format: No., Task, Owner, Deadline, Priority)
4. Unresolved issues and items for further discussion
5. Proposed agenda for the next meeting (date options, topics, preparation materials)

Output: output/[filename].md
```

#### Template E: Email / Announcement

```
Write a [email/announcement] for [purpose].

Situation:
- [Background explanation]
- [Key points to convey]

Recipient: [recipient's attributes, relationship]
Tone: [polite/casual/formal]
Length: [target word count]
Format: Text ready to paste directly into [email/chat]
Output: output/[filename].txt
```

---

### 1.3 Data Analysis Templates

#### Template A: Basic Statistics / Overview

```
Read [file path].

This file contains [description of data].
Columns: [name and meaning of each column]

Please check the following:
1. Number of rows and columns
2. Data type of each column
3. Basic statistics for numeric columns (total, mean, median, max, min)
4. Unique values and their counts for categorical columns
5. Presence and count of missing values

Output: output/[filename].md
```

#### Template B: Aggregation Analysis

```
Analyze [file path].

Columns: [name and meaning of each column]

Perform the following aggregations:
1. Total and share of [metric] by [dimension A]
2. Total and share of [metric] by [dimension B]
3. Cross-tabulation of [dimension A] x [dimension B]
4. Trend of [metric] by [time dimension]

Organize the results in Markdown tables.
Output: output/[filename].md
```

#### Template C: Chart Creation

```
Read [file path] and create the following charts:

1. [Chart type] ([what to display])
2. [Chart type] ([what to display])
3. [Chart type] ([what to display])

Technical requirements:
- HTML format using Chart.js (via CDN)
- Include title and legend for each chart
- Color theme: [color specification]
- Responsive design
- Self-contained in a single HTML file

Output: output/[filename].html
```

#### Template D: Comparative Analysis

```
Read and compare the following two datasets:
- [Path and description of file 1]
- [Path and description of file 2]

Comparison:
1. Overall comparison of [metric]
2. Comparison by [dimension]
3. Identify improved and deteriorated items
4. Discussion of factors behind the changes

Output: output/[filename].md
```

#### Template E: Integrated Analysis Report

```
Read the following analysis files:
- [Path and content of analysis file 1]
- [Path and content of analysis file 2]

Integrate these into an analysis report.

Report structure:
1. Executive summary (narrow down key findings to [number])
2. [Section name]
3. [Section name]
4. Issues and opportunities
5. Recommended actions (propose [number] specific initiatives)

Target audience: [reader's role/department]
Length: [target word count]
Output: output/[filename].md
```

---

## 2. Effective Instruction Checklist (10 Items)

Before giving instructions to Claude Code, review the following items. You do not need to satisfy all of them, but the more you check, the better the output will be.

| No. | Checklist Item | Description | Importance |
|-----|---------------|-------------|------------|
| 1 | **Is the purpose clear?** | Is it stated why this work is being done and how the deliverable will be used? | Required |
| 2 | **Is the target audience specified?** | Is it clear who will read or use the deliverable? | Required |
| 3 | **Is the output format specified?** | Is the format explicitly stated (Markdown, HTML, CSV, plain text, etc.)? | Required |
| 4 | **Is the output file path specified?** | Is it clear where to save the file? (Ambiguous paths may lead to files saved in unintended locations) | Recommended |
| 5 | **Are desired sections listed?** | Are the chapter structure or analysis perspectives listed as bullet points? | Recommended |
| 6 | **Is a length guideline provided?** | Is there a word count or page count estimate? (Prevents too much or too little) | Recommended |
| 7 | **Is background information / context provided?** | Are the situation, assumptions, and constraints that inform decisions included? | Recommended |
| 8 | **Are reference files specified?** | If reading existing files, are the paths and content descriptions included? | Required when applicable |
| 9 | **Is the data column structure described?** | When working with CSV or similar data, are column names and meanings listed? | Required when applicable |
| 10 | **Is the tone / writing style specified?** | Is it stated whether to use formal/casual language, polite/direct style, etc.? | Optional |

### How to Use the Checklist

1. After writing your instruction, first check **No. 1-3 (Required)**
2. To improve deliverable quality, check **No. 4-7 (Recommended)**
3. For file references or data analysis, check **No. 8-9 (Required when applicable)**
4. If you have specific style preferences, check **No. 10 (Optional)**

---

## 3. File Formats Compatible with Claude Code

### Readable File Formats

| Category | File Format | Extension | Compatibility | Notes |
|----------|-------------|-----------|---------------|-------|
| Text | Markdown | `.md` | Excellent | Best suited format for Claude Code. Standard format for input/output |
| Text | Plain text | `.txt` | Excellent | Can be read without limitations |
| Text | CSV | `.csv` | Excellent | Ideal as input for data analysis. UTF-8 recommended |
| Text | TSV | `.tsv` | Good | Tab-delimited data. Handled similarly to CSV |
| Text | JSON | `.json` | Good | Supports reading structured data |
| Text | YAML | `.yaml`, `.yml` | Good | Supports reading configuration files |
| Text | XML | `.xml` | Good | Supports reading structured data |
| Text | HTML | `.html` | Good | Can read web page content |
| Text | Log files | `.log` | Good | Can be read as long as they are in text format |
| Code | Python | `.py` | Good | Supports reading, analyzing, and executing code |
| Code | JavaScript | `.js` | Good | Supports reading and analyzing code |
| Code | Other languages | Various | Good | Supports text-based code files in general |
| Documents | PDF | `.pdf` | Conditional | Text can be extracted and read. Image-embedded PDFs can be visually recognized |
| Images | PNG / JPEG | `.png`, `.jpg` | Conditional | Can visually recognize image content |
| Binary | Excel | `.xlsx` | Requires workaround | Can be read via Python libraries like pandas |
| Binary | Word | `.docx` | Requires workaround | Text extraction is possible, but pre-converting to CSV is recommended |
| Binary | PowerPoint | `.pptx` | Not recommended | Direct reading is difficult. Convert content to text first |

### Important Notes

#### File Size Considerations

Large files (CSVs with tens of thousands of rows, etc.) may take a long time to read or may not be processable all at once.

**Workaround**: Limit the scope of large data, or ask Claude Code to sample it.

```
data/large-file.csv has 100,000 rows.
First, read only the first 100 rows to understand the data structure.
Then write a Python script to aggregate the entire file.
```

#### Encoding Considerations

Files encoded in Shift-JIS or EUC-JP may produce garbled characters.

**Workaround**: Convert to UTF-8 before passing the file, or specify the encoding.

```
data/old-data.csv is encoded in Shift-JIS.
First convert it to UTF-8, then read it.
```

#### Reading Excel Files

Excel files (.xlsx) cannot be directly read as text. However, Claude Code can read them using Python libraries like pandas or openpyxl.

```
Read data/report.xlsx using pandas.
The sheet name is "Monthly Data."
Display the first 10 rows of the loaded data.
```

For reliable results, we recommend pre-converting to CSV format before passing the file.

#### Handling Confidential Data

Do not pass the following data to Claude Code:

- **Personal information**: Names, addresses, phone numbers, email addresses
- **Credentials**: Passwords, API keys, access tokens
- **Financial information**: Credit card numbers, bank account details
- **Medical information**: Diagnoses, prescriptions
- **Data that your organization's policy prohibits from being input to AI**

When analyzing business data, anonymize or mask it beforehand.

```
# Example anonymization request
Anonymize the personal information in data/customer-list.csv.

- Replace names -> Customer001, Customer002, ...
- Delete phone numbers
- Delete email addresses
- Keep other columns (purchase history, region, age group) as-is

Save to data/customer-list-anonymized.csv.
```

---

## 4. Common Instruction Mistakes and How to Fix Them

### Pattern 1: Vague Delegation — No what, how, or where

**Bad example:**
```
Make a nice report
```

**What is wrong:**
- Claude Code has no way to know what "nice" means to you
- Topic, structure, length, and target audience are all unknown
- No output file path is specified

**Improved example:**
```
Based on our quarterly sales data (data/q3-sales.csv),
create an analysis report for the sales division's quarterly review meeting.

Structure:
1. Executive summary
2. Quarterly sales summary
3. Year-over-year comparison
4. Category analysis
5. Recommended actions

Length: 1,000-1,500 words
Save to output/q3-report.md.
```

**Key improvement**: Break down "nice" into "structure," "length," "target audience," and "output destination."

---

### Pattern 2: Missing Context — Your situation is not communicated

**Bad example:**
```
Analyze the competition
```

**What is wrong:**
- It is unclear what your company does
- It is unclear which competitors to analyze
- It is unclear what criteria to compare

**Improved example:**
```
Analyze the three main competitors of our company (a 50-person web development agency).

Subjects:
1. Company A (large firm, 500 employees, serves a broad range of industries)
2. Company B (similar size, 40 employees, specializes in e-commerce sites)
3. Company C (startup, 15 employees, rapidly growing with AI capabilities)

Comparison criteria:
- Service offerings and specialties
- Price range (for a 50-page website project)
- Primary customer segments
- Strengths and weaknesses
- Differentiation points relative to our company

Save to output/competitor-analysis.md.
```

**Key improvement**: Provide specific information about your company and competitors, and list the comparison criteria.

---

### Pattern 3: Forgetting the Output Destination — Deliverables are not saved

**Bad example:**
```
Analyze the sales data and summarize the results.
The columns are date, product name, and revenue.
```

**What is wrong:**
- It is unclear which file to read ("sales data" does not specify a path)
- It is unclear where to save the analysis results
- Output just appears as text on the screen and cannot be referenced later

**Improved example:**
```
Read and analyze data/sales-2025.csv.
Columns: date, product name, revenue

Analysis:
1. Monthly revenue trend
2. Product revenue ranking

Save the results to output/sales-analysis.md.
Save charts to output/sales-charts.html.
```

**Key improvement**: Always specify both the input file path and the output file path.

---

### Pattern 4: Asking for Too Much at Once — Quality drops

**Bad example:**
```
Do the market research, competitive analysis, create a proposal,
convert it to HTML, make a presentation summary,
and also prepare a Q&A document.
```

**What is wrong:**
- Too many tasks cause quality to drop across the board
- There is no opportunity to review intermediate outputs and correct course
- It is hard to track what has been completed

**Improved example:**

Make requests step by step. Review each step's output before proceeding.

```
# Step 1
Conduct market research. [detailed instructions]
Save to output/research.md.
```
Review the output, then proceed if it looks good.

```
# Step 2
Based on output/research.md, conduct a competitive analysis. [detailed instructions]
Save to output/competitor-analysis.md.
```
Review the output, then proceed if it looks good.

```
# Step 3
Read the following files and create a proposal:
- output/research.md
- output/competitor-analysis.md
[detailed instructions]
Save to output/proposal.md.
```

**Key improvement**: Limit each instruction to 1-2 tasks, and review each step's output before moving to the next.

---

### Pattern 5: Vague Feedback — Unclear what to fix

**Bad example:**
```
Make it a bit better
```

**What is wrong:**
- What is unsatisfying and what needs improvement is not communicated
- Claude Code has to guess, which may move the output further from your intent

**Improved example:**
```
Please make the following changes to output/proposal.md:

1. The executive summary is too long; compress it to 150 words or fewer
2. Add at least 3 specific data points to the "Market Opportunity" section
3. Make the mitigation strategies in "Risks and Mitigation" more concrete
   (e.g., for "talent acquisition risk" -> propose a combination of hiring and external partner engagement)
4. Make the overall tone slightly less formal
   (e.g., change "It is considered that..." -> "This means...")

Overwrite output/proposal.md.
```

**Key improvement**: Describe specifically "what" to change and "how" to change it in bullet points. Provide examples of the desired changes where possible.

---

## 5. CLAUDE.md Customization Tips

### What Is CLAUDE.md?

When you place a file named `CLAUDE.md` in your working directory, Claude Code automatically reads its content at the start of each session. By consolidating common rules and prerequisites here, you can simplify your instructions and improve the consistency of outputs.

### Basic Template

```markdown
# Shared Project Rules

## Output Rules
- Save all output files to the output/ directory
- Use English kebab-case for file names (e.g., market-analysis.md)
- Include the creation date at the top of each Markdown file

## Writing Style
- Use a polite, professional tone
- When no target audience is specified, write for a general business audience
- Add a brief explanation the first time a technical term appears

## Data Handling
- Anonymize personal and company names
- When creating charts, use HTML format with Chart.js
```

### Customization Examples by Department

#### For Sales Teams

```markdown
# Sales Team CLAUDE.md

## Default Settings
- Target audience: Sales managers
- Tone: Semi-formal (neither too stiff nor too casual)
- Standardize all monetary values (e.g., in thousands of dollars)
- Show year-over-year changes as percentages

## Output Rules
- Save proposals to output/proposals/
- Save analysis reports to output/reports/
- When organizing by client, save to output/clients/[client-name]/

## Templates
- Proposals should follow the structure in docs/templates/proposal-template.md
- Reports should follow the structure in docs/templates/report-template.md
```

#### For Planning Departments

```markdown
# Planning Department CLAUDE.md

## Default Settings
- Target audience: Executive meeting members (C-level)
- Tone: Formal
- Always include an executive summary in reports
- Executive summaries should be 150 words or fewer

## Research Rules
- Always cite sources for information found via web search
- Format sources as: "Organization, Title, URL, Access date"
- If the source of numerical data is unknown, note this explicitly

## Output Rules
- Save all output files to output/
- File names should follow the format [date]-[topic].md (e.g., 2026-03-11-market-research.md)
- Create both Markdown and HTML versions for final deliverables
```

#### For Data Analysis

```markdown
# Data Analysis Project CLAUDE.md

## Default Settings
- Target audience: Managers in the department using the analysis results
- Analysis tools: Python (pandas, matplotlib)
- Chart output: Prefer HTML format (Chart.js)

## Data Handling
- Never overwrite original data files
- Save processed data to data/processed/
- Save analysis Python scripts to scripts/

## Output Rules
- Save analysis reports to output/reports/
- Save charts to output/charts/
- Round numbers appropriately (revenue in thousands, rates to one decimal place)
- Include a totals row in tables
```

### CLAUDE.md Best Practices

| Tip | Description |
|-----|-------------|
| **Start small** | Begin with 3-5 simple rules and add more as needed |
| **Separate by project** | Use a different CLAUDE.md for projects with different requirements |
| **Review regularly** | Remove rules you no longer use and add new ones you discover |
| **Share with your team** | Sharing CLAUDE.md ensures consistent output regardless of who uses Claude Code |
| **Indicate priority levels** | Distinguish between "required" and "recommended" rules so Claude Code can balance accordingly |
| **Include examples** | Do not just say "use kebab-case"; add an example like "e.g., market-analysis.md" |
| **Grow your rules** | When you notice you keep specifying the same thing, add it to CLAUDE.md |

### Having Claude Code Create Your CLAUDE.md

You can also ask Claude Code to create your CLAUDE.md.

```
I work in the sales planning department.
I primarily create proposals for clients and internal reports.
My target audience is usually the sales director and corporate planning managers.

Create a CLAUDE.md suited to this work.
Include the following sections:
- Output rules (save location, file naming conventions)
- Writing style (tone, formality)
- Default target audience
- Data handling rules

Save as CLAUDE.md.
```

---

## 6. Frequently Asked Questions (FAQ)

### Q1: What should I do if Claude Code produces unexpected output?

Tell it specifically what is different and request a correction. Simply saying "That's wrong" will not lead to improvement. Be explicit about where and how to fix it, such as "Add more specific figures to Section 2."

### Q2: Claude Code sometimes stops in the middle of long documents. What can I do?

The requested output may be too long. Try breaking it into chapters and requesting them one at a time, or first create an outline and then write each chapter sequentially.

### Q3: What should I do if web search results contain outdated information?

Specify the time frame, such as "Limit your research to information from 2025 onwards." If outdated information still comes back, let Claude Code know and request a new search.

### Q4: What should I do if a CSV file has garbled characters?

Specify the file encoding.

```
Read data/file.csv with Shift-JIS encoding.
```

### Q5: How can I change the design of an HTML file?

Give specific instructions about what to change.

```
Make the following design changes to output/dashboard.html:
- Change the background color from white to light gray (#f5f5f5)
- Add box-shadow to cards
- Use a sans-serif font throughout
```

### Q6: What if I accidentally overwrite a file I was working on?

Claude Code does not have an automatic "undo" feature. Back up important files under a different name or manage them with version numbers.

```
Copy the current contents of output/proposal.md to output/proposal-backup.md,
then update output/proposal.md.
```

### Q7: What if I accidentally input confidential data?

End the session and consult your organization's security team. The scope of Claude Code's local processing versus cloud transmission varies depending on your contract and settings. We strongly recommend reviewing your organization's AI usage policy in advance.
