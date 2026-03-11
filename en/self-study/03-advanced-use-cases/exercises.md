# Module 3: Advanced Use Cases — Hands-On Exercises

## How to Use This Exercise Book

Each exercise comes with **sample data** and **step-by-step instructions**. Follow this flow:

1. Save the sample data as a file
2. Enter the prompts into Claude Code following the instructions
3. Review the output and request corrections as needed
4. Use the reflection points to consolidate what you learned

> **Estimated time**: 30-45 minutes per exercise

---

## Exercise 1: Structuring Meeting Notes

### Learning Objectives

- Convert unstructured data (rough notes) into a structured document
- Give instructions that accurately extract decisions and action items
- Direct conversion to GitHub Issue format

### Sample Meeting Notes

Save the following text as a file.

**File name**: `exercises/ex1-meeting-notes.txt`

```
Product planning meeting 2026/3/10 14:00-15:30

Attendees: Yamamoto (PM), Kawaguchi (Design), Hayashi (Engineering), Nakamura (Marketing), Ishida (CS)

## New Feature
- Want to revamp the dashboard feature in April (Yamamoto)
- Lots of feedback that the current dashboard is hard to use (Ishida)
  -> Specifically: "graph switching is confusing" and "unclear when data was last updated"
- Kawaguchi to create wireframes; first draft by 3/17
- Hayashi to investigate technical feasibility; may be API constraints. Report by 3/14

## Competitive Landscape
- CompetitorX released a similar feature last month
- Nakamura to write a competitive analysis report (by 3/20)
- Our strength is more granular filtering, so we'll emphasize that
-> Marketing messaging direction to be decided at next meeting

## Customer Success
- Major client D is considering cancellation (Ishida)
  -> Reason: they're not getting full value from the product. Onboarding needs improvement
  -> Ishida to set up a meeting with D next week. Yamamoto to attend if possible
- Churn rate worsened from 1.5% to 2.1% last month
- Urgent need to revise onboarding materials
  -> Ishida + Kawaguchi to put together an improvement plan by end of March

## Other
- April trade show (SaaS Expo) booth confirmed (Nakamura)
  -> Booth design: Kawaguchi; demo prep: Hayashi
  -> Budget capped at $5,000 (Yamamoto confirmed with Finance)
- Switching from weekly to biweekly meetings starting next month (unanimous)
  -> Next meeting: 3/24 (Tue) 14:00

Note-taker: Nakamura
```

### Instructions

**Step 1**: Create the file

```
Create an exercises/ directory and save the meeting notes above as exercises/ex1-meeting-notes.txt.
```

**Step 2**: Request structuring

Enter the following prompt into Claude Code:

```
Read exercises/ex1-meeting-notes.txt and create the following 3 files.

1. exercises/ex1-structured-minutes.md
   Structured meeting minutes:
   - Meeting info (name, date/time, attendees, note-taker)
   - Discussion summary for each agenda item
   - List of decisions
   - Action items table (owner, description, deadline)
   - Next meeting information

2. exercises/ex1-action-items.md
   Group action items by owner,
   and write each item in GitHub Issue format (title, body, suggested labels).

3. exercises/ex1-concerns.md
   Organize any risks or concerns that can be read from the meeting notes.
   Include recommended actions for each concern.
```

**Step 3**: Validate the output

Review the generated files and check the following:

- [ ] All action items have been extracted (there should be at least 6)
- [ ] Items with no explicit deadline are flagged
- [ ] "Client D cancellation risk" is listed as a concern
- [ ] "Worsening churn rate" is listed as a concern
- [ ] Next meeting information is correct (date and frequency change)

**Step 4**: Request corrections

If validation reveals issues, request corrections. For example:

```
I've reviewed ex1-action-items.md. Please make the following changes:
- The Issue for "Ishida + Kawaguchi to put together an onboarding improvement plan" is missing. Please add it
- Add a priority level (high/medium/low) to each Issue:
  - Client D-related items: high
  - Trade show preparation: medium
  - Everything else: low
```

### Reflection Points

After completing this exercise, reflect on the following:

1. How did Claude Code interpret "implicit decisions" (e.g., is "we'll go in this direction" a decision or still under discussion)?
2. How were vague deadlines (e.g., "next week," "by end of March") handled?
3. How did giving additional correction instructions improve the output quality?

---

## Exercise 2: Automated Report Conversion

### Learning Objectives

- Generate multiple audience-tailored versions from a single detailed report
- Provide appropriate instructions for conversion rules (what to include, exclude, and the tone)
- Evaluate the quality of generated output and give correction instructions

### Sample Detailed Report

Save the following text as a file.

**File name**: `exercises/ex2-detail-report.md`

````markdown
# Customer Success Department — February 2026 Monthly Report (Detailed)

## 1. Key KPIs

### 1.1 Churn Rate
- Monthly churn rate: 2.1% (target: 1.5% or less) -> **Missed**
- Previous month: 1.5% -> worsened by 0.6 points
- Breakdown:
  - Enterprise: 0.5% (no change MoM)
  - SMB: 3.2% (MoM +1.2 points) <- problem
  - Startup: 2.8% (MoM +0.3 points)

### 1.2 NPS (Net Promoter Score)
- Overall NPS: +32 (previous month: +38, same month last year: +29)
- By segment:
  - Enterprise: +45 (stable)
  - SMB: +22 (MoM -8) <- problem
  - Startup: +31 (MoM -2)

### 1.3 Support Operations
- Tickets received: 342 (previous month: 310, +10.3%)
- Average first response time: 2.3 hours (target: under 2 hours) -> **Missed**
- Average resolution time: 18.5 hours (target: under 24 hours) -> Achieved
- Customer satisfaction (CSAT): 4.2/5.0 (previous month: 4.3)

## 2. Segment Analysis

### 2.1 Enterprise (50 accounts)
- Contract renewals: 3 completed, 2 in negotiation
- Key topics:
  - Client A: Additional API integration request. Escalated to Engineering
  - Client B: Admin console customization request. Under consideration for Q2 roadmap
  - Client C: Agreed to participate in new feature beta test
- Upsell results: 2 accounts upgraded plans (+$3,000/month)

### 2.2 SMB (180 accounts)
- Cancellations: 6 (previous month: 3)
- Cancellation reason analysis:
  - Cost (3): Competitor pricing is lower
  - Feature gaps (2): Reporting functionality is weak
  - Low usage (1): Inadequate onboarding
- New onboarding: 12 accounts completed
- Issue: 1 SMB segment team member resigned (end of Feb). Understaffed in March

### 2.3 Startup (70 accounts)
- Cancellations: 2 (previous month: 1)
- Notable: Increased adoption of the startup discount plan (+5 accounts)
- Discount plan conversion rate: 40%

## 3. Team Status

### 3.1 Members
| Name | Responsibility | Key Achievement This Month | Challenge |
|------|---------------|---------------------------|-----------|
| Ishida (Lead) | Enterprise | Handled Client A escalation | Increasing management overhead |
| Sasaki | SMB | Proposed onboarding improvements | Transitioning responsibilities in March |
| Watanabe | SMB | Prevented 2 cancellations | Taking over Sasaki's duties |
| Kimura | Startup | Built discount plan operational flow | Spending too much time on ticket responses |

### 3.2 Hiring
- SMB replacement: Screening applications (8 applicants, 2 interviews scheduled)
- Target: Offer by end of March, start in April

## 4. Action Items — This Month's Results

| # | Action | Status | Notes |
|---|--------|--------|-------|
| 1 | Revise onboarding materials | In progress (60%) | Completion expected mid-March |
| 2 | Host webinar for SMB segment | Completed | 45 attendees, satisfaction 4.1/5.0 |
| 3 | Conduct NPS survey | Completed | Response rate 32% |
| 4 | Evaluate churn prediction model | Not started | Postponed due to resource constraints |

## 5. Next Month's Action Plan

1. Execute initiatives to improve SMB segment churn rate
2. Complete and roll out revised onboarding materials
3. Hiring: Interview and extend offer for SMB role
4. Churn-prevention meeting with Client D (Enterprise)
5. Define requirements for churn prediction model (collaborate with Engineering)
````

### Instructions

**Step 1**: Create the file

```
Save the report above as exercises/ex2-detail-report.md.
```

**Step 2**: Convert into 3 versions

```
Read exercises/ex2-detail-report.md and generate the following 3 versions.

## 1. Manager summary (exercises/ex2-manager-summary.md)
- Length: roughly 1 A4 page
- Include: key KPIs (with target comparison), segment highlights (max 3 lines per segment), next month's priority actions
- Exclude: individual names (team lead name only is OK), detailed numerical breakdowns
- Tone: concise, report-style

## 2. Executive summary (exercises/ex2-executive-summary.md)
- Length: 10 bullet points or fewer
- Structure: 3 sections — "Headline," "Key Concerns," "Recommended Actions"
- Include: only information needed for executive decision-making (headline figures, critical risks, items requiring decisions)
- Tone: strategic, succinct

## 3. Product team version (exercises/ex2-product-feedback.md)
- Include: customer feature requests, feature-related cancellation reasons, NPS decline factor analysis
- Exclude: monetary amounts, individual names, internal HR information
- Tone: collaborative ("We'd like to leverage this feedback to improve the product")
```

**Step 3**: Evaluate output quality

Use the following checklists to evaluate each version.

**Manager summary**:
- [ ] Churn rate of 2.1% (missed target) is clearly stated
- [ ] SMB segment issues are highlighted as the top priority
- [ ] Length fits within roughly one A4 page (approximately 300-500 words)
- [ ] No individual names other than the team lead

**Executive summary**:
- [ ] Fits within 10 lines
- [ ] "SMB team member resignation -> understaffing" is flagged as a risk
- [ ] Hiring-related decision items are included

**Product team version**:
- [ ] All 3 feature requests are mentioned (API integration, admin console customization, reporting)
- [ ] No monetary information included
- [ ] No HR information (resignations, etc.) included

**Step 4**: Request improvements

If the checks reveal issues, request corrections. Also, try creating an additional version:

```
Additionally, please create exercises/ex2-all-hands.md.

Target audience: Monthly all-hands company meeting presentation
Length: 5-7 bullet points
Tone: Lead with positive highlights while being honest about challenges
Include: This month's wins (webinar, upsells), challenges (churn rate), next month's focus areas
Exclude: Detailed numbers, individual names, HR information
```

### Reflection Points

1. Did you see how the same data requires different information depending on the audience?
2. How much did specifying "tone" affect the output?
3. Was information you asked to exclude actually excluded (especially HR information and monetary amounts)?

---

## Exercise 3: Creating a Business Process Flowchart

### Learning Objectives

- Create a flowchart using your own actual business process as the subject
- Have Claude Code identify gaps in your process documentation
- Generate and refine Mermaid-format flowcharts

### Instructions

In this exercise, you will use **your own business process** as the subject. There is no sample data.

**Step 1**: Choose a business process

Select one process you are involved in from the following candidates:

- Purchasing / procurement process
- New customer onboarding process
- Internal approval (purchase requisition) process
- Hiring process (from resume screening to start date)
- Incident response process
- Content publishing process (blog posts, press releases, etc.)

Feel free to choose a process not listed above.

**Step 2**: Write out the process information

Write out the flow of your chosen process in a text file, **as far as you know it**. It doesn't need to be perfect.

```
Write out the flow of your chosen business process in exercises/ex3-process-notes.txt.

Things to write down:
- Process name and purpose
- People involved (who participates)
- Steps in the flow (any order is fine)
- Branching conditions ("if X, then..." decision points)
- Tools used
- Common problems or exceptions
```

**Step 3**: Request flowchart and manual generation

```
Read exercises/ex3-process-notes.txt and create the following:

1. exercises/ex3-flowchart.md
   - Mermaid-format flowchart
   - Separate the main flow (happy path) and exception flows (error paths)
   - Annotate each step with the responsible party

2. exercises/ex3-manual.md
   - Step-by-step procedure manual
   - Each step should include "responsible party," "tool used," "estimated time," and "notes"

3. exercises/ex3-questions.md
   - Organize any unclear points from the process notes as a question list
   - Include the reason why each piece of information is needed
```

**Step 4**: Answer the open questions and update the flowchart

```
Here are my answers to the questions in exercises/ex3-questions.md:

(Enter your answers here)

Please incorporate these answers and update ex3-flowchart.md and ex3-manual.md.
```

**Step 5**: Improve the flowchart

```
Improve the flowchart in exercises/ex3-flowchart.md from the following perspectives:

1. Add estimated time as annotations to each step
2. Highlight steps that are likely bottlenecks (using color coding or comments)
3. Add the overall process duration (shortest / typical / longest) at the top
```

### Reflection Points

1. How many "unclear points" were identified in a process you considered "obvious"?
2. Is the generated flowchart clear enough that a team member could understand it?
3. Could a new employee follow the procedure manual and execute the process?

---

## Exercise 4: Open-Ended Exercise

### Learning Objectives

- Apply the use cases from the textbook to your own work
- Design your own prompts

### Instructions

**Step 1**: Choose a use case

Select one of the following use cases from the textbook (`textbook.md`):

| # | Use Case | Recommended For |
|---|----------|-----------------|
| 4 | KPI/OKR dashboard data preparation | People spending time on KPI aggregation |
| 5 | Business process flowcharts and manuals | People who skipped Exercise 3 or want to try another process |
| 6 | Building and updating an internal knowledge base | People with document management challenges |
| 7 | RFP draft creation | People who work with external vendors |
| 8 | Contract risk review assistance | People who review contracts |
| 9 | Multilingual content localization | People creating content for international audiences |
| 10 | Scenario simulation | People involved in business planning |
| 11 | Grant application support | People interested in grants and subsidies |

**Step 2**: Prepare your business data

Gather the data needed for your chosen use case from your actual work.

- If real data is unavailable, create your own sample data
- If the data contains confidential information, replace it with dummy data

**Step 3**: Design your prompt based on the textbook examples

Use the "Example Prompt for Claude Code" from the textbook as a base and customize it for your work.

Tips:
- Use file paths starting with `exercises/ex4-`
- Specify the output format clearly
- Communicate the expected quality level

**Step 4**: Run it and evaluate the results

Evaluate the results from the following perspectives:

- [ ] Were the expected deliverables generated?
- [ ] Is the quality at a level usable in actual work?
- [ ] Where are corrections needed?
- [ ] What prompt improvements would yield better results?

**Step 5**: Improve the prompt and re-run

Based on your Step 4 evaluation, improve the prompt and run it again.

Improvement hints:
- If the output was missing information -> add specific items to the prompt
- If the quality was low -> include examples or templates
- If irrelevant information was included -> explicitly state what to exclude

### Reflection Points

1. How much did you need to customize the textbook's example prompts?
2. How much did the output quality improve between the first and second runs?
3. Could you use this use case regularly in your ongoing work?

---

## Overall Reflection

After completing all exercises, consider the following questions.

### Applying to Your Own Work

1. Which use cases can you **adopt immediately**? Why?
2. Which use cases have **barriers to adoption**? What are the obstacles?
3. Are there use cases **not covered in this module** that you'd like to try for your work?

### Prompt Design Skills

1. What did you find to be the most important aspect of prompt writing through these exercises?
2. What was the difference between prompts that "didn't work well" and those that "worked well"?

### Next Actions

After finishing this exercise book, decide on one specific action to take in the first week.

```
Examples:
- "Structure next week's standup meeting notes with Claude Code"
- "Create a monthly report conversion template and start using it next month"
- "Identify areas where team knowledge is scattered and create a plan to organize them"
```

My action: _______________________________________________
