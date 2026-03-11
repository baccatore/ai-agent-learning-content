# Module 2: Reference Materials

A collection of prompt templates, checklists, and tips organized by purpose for quick reference whenever you need them.

---

## 1. Prompt Template Collection

### 1.1 Research Templates

#### Market Research Template

```
Please conduct market research on [industry/market name].

Research items:
- Market size (domestic/global) and growth rate
- Major players and market share
- Market growth drivers and barriers
- Outlook for the next 3-5 years

Cite your sources.
Audience: [specify audience]
Format: Markdown report
Output: output/[filename].md
```

#### Competitive Analysis Template

```
Please conduct a competitive analysis of the following services/products.

Subjects:
1. [Service A]
2. [Service B]
3. [Service C]

Comparison criteria:
- Core features
- Pricing structure (monthly/annual cost for [team size])
- Strengths and weaknesses
- Target customers
- [additional criteria]

Output format: Comparison table + detailed analysis of each service (~500 words each) + overall evaluation
Audience: [specify audience]
Output: output/[filename].md
```

#### Trend Research Template

```
Please research the latest trends related to [topic].

Topics to investigate:
- Notable trends (3-5)
- Overview and background of each trend
- Business impact
- Early adopter examples
- Future outlook

Cite your sources.
Length: Approximately 1,500-2,500 words
Output: output/[filename].md
```

#### Company/Service Research Template

```
Please research [company name/service name].

Topics to investigate:
- Company overview (year founded, number of employees, revenue)
- Core services/products
- Business model
- Recent news and developments
- Strengths and weaknesses analysis

Cite your sources.
Output: output/[filename].md
```

---

### 1.2 Document Creation Templates

#### Proposal Template

```
Please create a proposal for [topic].

Background:
- [Describe current challenges or situation]

Items to include:
- Objectives and expected outcomes
- Target audience/participants
- Detailed plan of activities
- Schedule
- Required resources/budget
- Risks and mitigation
- Success metrics (KPIs)

Audience: [specify the approver]
Tone: [formal/casual]
Length: [specify guideline]
Output: output/[filename].md
```

#### Sales Proposal Template

```
Please create a proposal for [client/department].

Our service: [service name and overview]
Prospect: [prospect information]
Their challenges:
- [Challenge 1]
- [Challenge 2]
- [Challenge 3]

Document structure:
1. Summary of their challenges
2. Proposed solution
3. Estimated impact of implementation
4. Implementation steps
5. Pricing/investment
6. Case studies

Output: output/[filename].md
```

#### Report Template

```
Please create a report on [topic].

Reference the following files:
- [Reference file 1]
- [Reference file 2]

Report structure:
1. Executive summary
2. Background and purpose
3. Research/analysis content
4. Findings and discussion
5. Recommended actions
6. Appendix

Audience: [specify audience]
Length: [specify guideline]
Output: output/[filename].md
```

#### Email Draft Template

```
Please draft an email for [purpose].

Situation:
- [Describe background information]

Recipient: [relationship with recipient]
Tone: [formal/casual/polite]
Length: [approximate word count]
Format: Plain text (ready to paste into an email)
Output: output/[filename].txt
```

#### Meeting Follow-Up Template

```
Please read [file path] and create the following:

1. Meeting summary (5-10 bullet points)
2. List of decisions made
3. To-do list (with assignees and deadlines)
4. Unresolved issues and open questions
5. Suggested agenda for the next meeting

Output: output/[filename].md
```

---

### 1.3 Data Analysis Templates

#### Basic Analysis Template

```
Please read [file path] and analyze the data.

Data description: [overview of the data]
Column structure: [list column names]

Analysis to perform:
1. Basic statistics (total, average, max, min, median)
2. [Analysis perspective 1]
3. [Analysis perspective 2]
4. [Analysis perspective 3]

Output: output/[filename].md
```

#### Chart Creation Template

```
Please read [file path] and create the following charts.

1. [Chart type] ([what to display])
2. [Chart type] ([what to display])
3. [Chart type] ([what to display])

Technical requirements:
- HTML format using Chart.js (via CDN)
- Responsive design
- Color theme: [specify colors]

Output: output/[filename].html
```

#### Dashboard Template

```
Please read [file path] and create a dashboard.

Elements to include:
- KPI cards: [KPIs to display]
- Chart 1: [type and content]
- Chart 2: [type and content]
- Table: [data to display]

Technical requirements:
- Self-contained single HTML file
- Chart.js (via CDN)
- Responsive design
- Color theme: [specify colors]

Output: output/[filename].html
```

---

### 1.4 Format Conversion Templates

#### Markdown to HTML Conversion Template

```
Please convert [file path] to HTML format.

Requirements:
- Responsive design
- Table of contents with anchor links
- Styled tables
- Print-friendly (@media print)
- Self-contained single HTML file (no external dependencies)
- Color theme: [specify colors]

Output: output/[filename].html
```

#### Markdown to Plain Text Conversion Template

```
Please convert [file path] to plain text format.

Requirements:
- Do not use Markdown syntax (#, *, -)
- Format tables using spaces
- Wrap lines at approximately [number] characters

Output: output/[filename].txt
```

---

### 1.5 Project Management Templates

#### Project Initialization Template

```
Please initialize a new project called "[project name]."

projects/[project-name]/
├── data/           # Source data
├── research/       # Research results
├── analysis/       # Analysis results
├── output/         # Final deliverables
├── CLAUDE.md       # Project-wide rules
├── PROGRESS.md     # Progress tracking
└── README.md       # Project overview

Include the following in README.md:
- Project name: [name]
- Purpose: [purpose]
- Deadline: [deadline]
- Deliverables: [expected deliverables]
```

#### Progress Log Template

```
Please update [path to PROGRESS.md].

## Work Log for [date]

### Completed
- [list completed items]

### Files Created/Updated
- [list files with descriptions]

### Next Steps (prioritized)
1. [Task 1]
2. [Task 2]
3. [Task 3]

### Notes and Open Questions
- [notes]
```

---

## 2. Checklists

### 2.1 Pre-Instruction Checklist

- [ ] **Purpose**: Is the goal of this task clearly defined?
- [ ] **Audience**: Have you specified who will read or use the output?
- [ ] **Format**: Have you specified the output format (Markdown, HTML, text, etc.)?
- [ ] **Length**: Have you indicated the expected length?
- [ ] **Output path**: Have you specified where to save the file?
- [ ] **Context**: Have you provided necessary background information?
- [ ] **Reference files**: Have you listed any existing files that should be read?

### 2.2 Research Output Checklist

- [ ] Are sources cited?
- [ ] Can you trace the origin of numerical data?
- [ ] Is the information current enough (not outdated)?
- [ ] Are facts and opinions/speculation clearly distinguished?
- [ ] Are there any significant gaps in coverage?
- [ ] Have you independently verified key figures (if using for important decisions)?

### 2.3 Document Checklist

- [ ] Is the content at an appropriate level for the target audience?
- [ ] Is the structure logical and easy to follow?
- [ ] Are proper nouns and figures accurate?
- [ ] Is the tone appropriate?
- [ ] Is the length appropriate?
- [ ] Are technical terms explained where needed?
- [ ] Have you checked for typos and errors?

### 2.4 Data Analysis Checklist

- [ ] Did you review the data basics (row count, column count, data types)?
- [ ] Did you check for missing values and outliers?
- [ ] Did you clearly specify the analysis perspectives?
- [ ] Are chart labels and legends appropriate?
- [ ] Are units of measurement consistent?
- [ ] Does the data contain personal or sensitive information?
- [ ] Are the interpretations of the results reasonable?

### 2.5 Data Privacy Checklist

- [ ] Does the data contain personally identifiable information (PII)?
- [ ] Does your company's policy prohibit inputting this data to AI?
- [ ] Have you anonymized the data if needed?
- [ ] Have you checked whether aggregated data could work instead?
- [ ] Are the output files free of confidential information?

---

## 3. Tips Collection

### 3.1 Instruction Tips

**Tip 1: Say "do this" instead of "don't do that"**

```
# Less effective
Don't use technical jargon.

# More effective
Write in language that a general business audience would understand.
If you use a technical term, include a brief explanation in parentheses.
```

**Tip 2: Show an output example**

When you have a specific format in mind, providing a short example improves accuracy.

```
Please summarize each product evaluation in the following format:

Example:
### Product Name
- **Overall Rating**: 4/5
- **Strengths**: Describe strengths here
- **Weaknesses**: Describe weaknesses here
- **Best Use Case**: Describe ideal use case here
```

**Tip 3: Welcome critical assessments**

```
Please give an honest evaluation of this business idea's feasibility.
Don't hesitate to point out problems and risks.
I value a realistic assessment over an optimistic one.
```

**Tip 4: Break large tasks into smaller steps**

Splitting a task into steps produces higher quality at each stage than asking for everything at once.

```
# Rather than asking for everything at once...
Research the market, analyze competitors, write a proposal, and create an HTML presentation.

# Break it up
First, please do the market research. (-> review ->)
Next, the competitive analysis. (-> review ->)
Now write the proposal based on these findings. (-> review ->)
Finally, create the HTML version.
```

**Tip 5: Ask Claude Code to "think before writing"**

```
Please write a proposal on the following topic.
First, think about what the best structure would be.
Present the structure for my review before writing the full text.
```

---

### 3.2 Research Tips

**Tip 6: Ask for multiple perspectives**

```
Please present both an optimistic and a pessimistic outlook for this market.
```

**Tip 7: Ask about "what you don't know you don't know"**

```
When researching [topic],
please point out any important angles I might be overlooking.
```

**Tip 8: Dig deeper in stages**

Start broad, then go deep only on the areas that interest you most.

```
# Step 1: Broad overview
Give me an overview of this market.

# Step 2: Dig into what caught your eye
Tell me more about the third trend.
```

---

### 3.3 Document Creation Tips

**Tip 9: Provide a tone sample**

```
Please match the tone of the following text:
"We partner closely with our clients to understand their challenges
and deliver solutions that drive real results."
```

**Tip 10: Specify document characteristics instead of asking Claude Code to "be someone"**

Rather than asking Claude Code to role-play as a specific person, you'll get better results by specifying the document's characteristics (tone, audience, purpose).

```
# Less effective
You are a seasoned management consultant. Write from that perspective.

# More effective
Please create a document with these characteristics:
- Data-driven, objective analysis
- Concrete recommendations that executives can act on
- Use of standard business frameworks (SWOT, Five Forces, etc.)
```

**Tip 11: Be specific with iteration instructions**

```
# Vague
Make it better.

# Specific
Please improve the following 3 things:
1. Lead with the conclusion in the opening paragraph (currently it starts with background)
2. Add at least 2 additional data points
3. Add a "Next Steps" section at the end
```

---

### 3.4 Data Analysis Tips

**Tip 12: Explain the data's context**

```
# Additional context improves analysis accuracy
This data was collected under the following conditions:
- Survey period: January-December 2025
- Respondents: Men and women aged 20-60 in the US
- Sample size: 1,000 (online survey)
- Missing values indicate "no response"
```

**Tip 13: Ask for interpretation, not just numbers**

```
Beyond the numerical aggregation, please also provide:
- What conclusions can be drawn from these results
- Caveats and limitations to be aware of
- Recommended actions
```

**Tip 14: Pay attention to visualization quality**

```
Chart readability requirements:
- Use a color palette that is accessible for color-blind viewers
- Use legible font sizes
- Place legends below the chart
- Display data labels on the chart
```

---

### 3.5 Productivity Tips

**Tip 15: Grow your CLAUDE.md over time**

As you work on a project, add anything you find yourself repeating to CLAUDE.md.

```
Please add the following rules to CLAUDE.md:
- Always use a blue color theme for charts
- Use the date format YYYY-MM-DD
```

**Tip 16: Standardize your file naming convention**

Including dates or version numbers in file names makes them easier to manage.

```
# Naming convention example
[date]-[content]-[version].md
Example: 2025-03-01-market-research-v1.md
```

**Tip 17: Create reusable workflows**

If you find yourself repeating certain work patterns, save them as templates. Use the templates in this reference as a starting point and customize them for your needs.

**Tip 18: Don't be afraid to experiment**

If Claude Code's output isn't what you expected, you can always refine it with additional instructions. The most efficient approach is to try something, see the result, and then adjust.

**Tip 19: Always review the output**

Don't take Claude Code's output at face value. In particular, verify the following yourself:
- Accuracy of proper nouns (company names, product names, people's names)
- Plausibility of numerical data
- Accuracy of dates and time periods
- Validity of links and URLs

**Tip 20: Keep a work log**

For projects that span multiple days, make a habit of recording your progress in PROGRESS.md. It's useful not just for your own reference, but also for sharing with team members.

---

## 4. Frequently Asked Questions (FAQ)

### Q1: What if Claude Code's output doesn't match my expectations?

Tell it specifically what's wrong and ask for a revision. Just saying "that's wrong" won't lead to improvement. Be explicit: "Please make the numbers in section 2 more specific" — point to exactly what needs to change and how.

### Q2: Claude Code sometimes stops in the middle of long documents. What should I do?

You may be asking it to generate too much at once. Try breaking the work into chapters, or have it create an outline first and then write each section one at a time.

### Q3: What if the web search returns outdated information?

Specify a time frame, such as "Please limit your search to information from 2025 onward." If you still get outdated results, let Claude Code know and ask it to search again.

### Q4: What if a CSV file has encoding issues?

Specify the file encoding in your instruction.

```
Please read data/file.csv with UTF-8 encoding.
```

### Q5: What if I want to change the design of an HTML file?

Provide specific instructions for the changes you want.

```
Please modify the design of output/dashboard.html as follows:
- Change background color from white to light gray (#f5f5f5)
- Add a box shadow to cards
- Use a sans-serif font consistently
```

### Q6: What if I accidentally overwrite a file I was working on?

Claude Code doesn't have an automatic "undo" feature. For important files, either create a backup copy under a different name or use version numbers in your file names.

```
Please copy the current contents of output/proposal.md to output/proposal-backup.md,
then update output/proposal.md.
```

### Q7: What if I accidentally input confidential data?

End the session and consult your organization's security team. The boundary between Claude Code's local processing and cloud transmission varies depending on your contract and settings. We strongly recommend reviewing your organization's AI usage policy beforehand.
