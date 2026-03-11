---
title: "Module 3: Advanced Use Cases — Practice Exercises"
lang: "en"
category: "self-study"
module: "03-advanced-use-cases"
contentType: "exercises"
order: 2
---
# Module 3: Advanced Use Cases — Practice Exercises

## How to Use These Exercises

Each exercise comes with **sample data** and **step-by-step instructions**. Follow this workflow:

1. Save the sample data as a file
2. Enter the prompts into Claude Code following the instructions
3. Review the output and request corrections as needed
4. Reflect on your learning using the provided review points

> **Estimated time per exercise**: 30-45 minutes

---

## Exercise 1: Structuring Meeting Notes

### Learning Objectives

- Convert unstructured data (rough notes) into a structured document
- Write instructions that accurately extract decisions and action items
- Request conversion to GitHub Issue format

### Sample Meeting Notes

Save the following text as a file.

**File name**: `exercises/ex1-meeting-notes.txt`

```
Product planning meeting 2026/3/10 14:00-15:30

Attendees: Yamamoto (PM), Kawaguchi (Design), Hayashi (Engineering), Nakamura (Marketing), Ishida (CS)

## New Features
- Want to revamp the dashboard feature in April (Yamamoto)
- Lots of feedback that the current dashboard is hard to use (Ishida)
  -> Specifically: "Chart switching is confusing" and "Can't tell when data was last updated"
- Kawaguchi to create wireframes, first draft by 3/17
- Hayashi to investigate technical feasibility. Possible API constraints. Report by 3/14

## Competitive Landscape
- CompetitorX released a similar feature last month
- Nakamura to create a competitive analysis report (by 3/20)
- Our advanced filter functionality is a differentiator; messaging should emphasize that
-> Marketing message direction to be finalized at next meeting

## Customer Success
- Major client (Company D) contacted about possible churn (Ishida)
  -> Reason: Not getting enough value. Onboarding needs improvement
  -> Ishida to set up a meeting with Company D next week. Yamamoto to join if possible
- Churn rate worsened from 1.5% to 2.1% last month
- Urgent need to revise onboarding materials
  -> Ishida + Kawaguchi to compile improvement plan by end of March

## Other
- April trade show (SaaS Expo) booth confirmed (Nakamura)
  -> Booth design: Kawaguchi; Demo prep: Hayashi
  -> Budget capped at $5,000 (Yamamoto confirmed with finance)
- Changing from weekly to biweekly meetings starting next month (everyone agreed)
  -> Next meeting: 3/24 (Tue) 14:00

Note-taker: Nakamura
```

### Instructions

**Step 1**: Create the file

```
Create the exercises/ directory and save the above meeting notes as exercises/ex1-meeting-notes.txt.
```

**Step 2**: Request structuring

Enter the following prompt into Claude Code:

```
Read exercises/ex1-meeting-notes.txt and create the following 3 files.

1. exercises/ex1-structured-minutes.md
   Structured meeting minutes:
   - Meeting information (name, date/time, attendees, note-taker)
   - Discussion summary by topic
   - List of decisions
   - Action items table (owner, task, deadline)
   - Next meeting information

2. exercises/ex1-action-items.md
   Action items grouped by owner,
   with each item written in GitHub Issue format (title, body, suggested labels).

3. exercises/ex1-concerns.md
   Organize the risks and concerns that can be read from the meeting notes.
   Include recommended actions for each concern.
```

**Step 3**: Verify the output

Review the generated files and check the following:

- [ ] Have all action items been extracted? (There should be at least 6)
- [ ] Are items with unspecified deadlines flagged?
- [ ] Is "Company D churn risk" listed as a concern?
- [ ] Is "Worsening churn rate" listed as a concern?
- [ ] Is the next meeting information correct? (date, change in meeting frequency)

**Step 4**: Request corrections

If you found issues during verification, try requesting corrections. For example:

```
I reviewed ex1-action-items.md. Please make the following corrections:
- The Issue for "Ishida + Kawaguchi to compile onboarding improvement plan" is missing. Please add it
- Add a priority level (high/medium/low) to each Issue
  - Company D-related items: high; trade show prep: medium; everything else: low
```

### Review Points

After completing this exercise, reflect on the following:

1. How did Claude Code interpret "implicit decisions" (e.g., is "in the direction of..." a decision or still under discussion)?
2. How were ambiguous "deadlines" handled (e.g., "next week," "by end of month")?
3. How did the additional correction instructions improve the output quality?

---

## Exercise 2: Auto-Converting Reports

### Learning Objectives

- Generate multiple audience-specific versions from a single detailed report
- Appropriately instruct conversion rules (what to include, what to exclude, tone)
- Evaluate output quality and provide correction instructions

### Sample Detailed Report

Save the following text as a file.

**File name**: `exercises/ex2-detail-report.md`

````markdown
# Customer Success Department — February 2026 Monthly Report (Detailed)

## 1. Key KPIs

### 1.1 Churn Rate
- Monthly churn rate: 2.1% (Target: 1.5% or below) -> **Missed**
- Previous month: 1.5% -> 0.6 points worse
- Breakdown:
  - Enterprise: 0.5% (no change MoM)
  - SMB: 3.2% (MoM +1.2 points) <- Problem
  - Startup: 2.8% (MoM +0.3 points)

### 1.2 NPS (Net Promoter Score)
- Overall NPS: +32 (Previous month: +38, Same month last year: +29)
- By segment:
  - Enterprise: +45 (stable)
  - SMB: +22 (MoM -8) <- Problem
  - Startup: +31 (MoM -2)

### 1.3 Support Metrics
- Ticket volume: 342 (Previous month: 310, +10.3%)
- Average first response time: 2.3 hours (Target: under 2 hours) -> **Missed**
- Average resolution time: 18.5 hours (Target: under 24 hours) -> Achieved
- CSAT: 4.2/5.0 (Previous month: 4.3)

## 2. Segment Analysis

### 2.1 Enterprise (50 accounts)
- Renewals: 3 completed, 2 in negotiation
- Key topics:
  - Company A: API integration request. Escalated to engineering
  - Company B: Admin console customization request. Under consideration for Q2 roadmap
  - Company C: Agreed to participate in new feature beta test
- Upsell results: 2 accounts upgraded plans (+$3,000/month)

### 2.2 SMB (180 accounts)
- Churn: 6 accounts (Previous month: 3)
- Churn reason analysis:
  - Cost (3): Competitors are cheaper
  - Feature gaps (2): Reporting functionality is weak
  - Low utilization (1): Inadequate onboarding
- New onboarding: 12 accounts completed
- Issue: SMB segment lead resigned (end of February). Short-staffed in March

### 2.3 Startup (70 accounts)
- Churn: 2 accounts (Previous month: 1)
- Notable: Increased uptake of startup discount plan (+5 accounts)
- Conversion rate via discount plan: 40%

## 3. Team Status

### 3.1 Members
| Name | Segment | Key Achievement | Challenge |
|------|---------|----------------|-----------|
| Ishida (Lead) | Enterprise | Handled Company A escalation | Increasing admin workload |
| Sasaki | SMB | Proposed onboarding improvements | March handover |
| Watanabe | SMB | Prevented 2 churns | Taking over Sasaki's responsibilities |
| Kimura | Startup | Built discount plan workflow | Support tickets consuming time |

### 3.2 Hiring
- Sasaki's replacement: Screening applications (8 received, 2 interviews scheduled)
- Target: Offer by end of March, start in April

## 4. This Month's Action Results

| # | Action | Status | Notes |
|---|--------|--------|-------|
| 1 | Revise onboarding materials | In progress (60%) | Expected mid-March completion |
| 2 | Host SMB segment webinar | Completed | 45 attendees, satisfaction 4.1/5.0 |
| 3 | Conduct NPS survey | Completed | 32% response rate |
| 4 | Evaluate churn prediction model | Not started | Postponed due to resource constraints |

## 5. Next Month's Action Plan

1. Execute SMB churn rate improvement initiatives
2. Complete and roll out revised onboarding materials
3. Hiring: Interview and extend offer for SMB lead
4. Company D (Enterprise) churn prevention meeting
5. Define requirements for churn prediction model (with engineering)
````

### Instructions

**Step 1**: Create the file

```
Save the above report as exercises/ex2-detail-report.md.
```

**Step 2**: Convert to three versions

```
Read exercises/ex2-detail-report.md and generate the following 3 versions.

## 1. Manager Summary (exercises/ex2-manager-summary.md)
- Length: Approximately one page
- Include: Key KPIs (with target comparison), segment highlights (max 3 lines per segment), priority actions for next month
- Exclude: Personal names (team lead name only), detailed numerical breakdowns
- Tone: Concise, reporting style

## 2. Executive Summary (exercises/ex2-executive-summary.md)
- Length: 10 bullet points or fewer
- Structure: "Headline," "Key Concerns," "Recommended Actions"
- Include: Only information needed for executive decisions (headline numbers, major risks, items requiring decisions)
- Tone: Strategic, to the point

## 3. Product Team Version (exercises/ex2-product-feedback.md)
- Include: Customer feature requests, churn reasons related to product features, factors behind NPS decline
- Exclude: Dollar amounts, personal names, internal HR information
- Tone: Collaborative ("We'd like to leverage this feedback for product improvement")
```

**Step 3**: Evaluate output quality

Use the following checklists to evaluate each version.

**Manager Summary**:
- [ ] Is churn rate 2.1% (missed target) clearly stated?
- [ ] Is the SMB segment issue highlighted as the top priority?
- [ ] Does the length fit within approximately one page (~250-400 words)?
- [ ] Are personal names excluded (except the team lead)?

**Executive Summary**:
- [ ] Is it 10 lines or fewer?
- [ ] Is "SMB lead resignation -> staffing shortage" listed as a risk?
- [ ] Are hiring-related decision items included?

**Product Team Version**:
- [ ] Are all three requests included (API integration, admin console customization, reporting)?
- [ ] Are dollar amounts excluded?
- [ ] Is HR information (resignation, etc.) excluded?

**Step 4**: Request improvements

If the checks revealed issues, request corrections. Also, try creating an additional version:

```
Additionally, create exercises/ex2-all-hands.md.

Target audience: Monthly all-hands meeting presentation
Length: 5-7 bullet points
Tone: Keep it positive while being honest about challenges
Include: This month's wins (webinar, upsell), challenges (churn rate), next month's focus areas
Exclude: Detailed figures, personal names, HR information
```

### Review Points

1. Did you experience how "what to include" and "what to exclude" differs depending on the audience, even with the same data?
2. How much did the "tone" specification affect the output?
3. Were the information items you specified for exclusion actually excluded (especially HR information and dollar amounts)?

---

## Exercise 3: Creating a Process Flow Diagram

### Learning Objectives

- Create a flow diagram using your own actual business process as the subject
- Have Claude Code identify gaps in your process information
- Generate and refine Mermaid-format flow diagrams

### Instructions

This exercise uses **your own business process** as the subject. There is no sample data.

**Step 1**: Choose a business process

Select one process that you are involved in from the following list:

- Procurement / purchasing process
- New customer onboarding process
- Internal approval (sign-off) process
- Hiring process (screening through onboarding)
- Incident response process
- Content publishing process (blog, press release, etc.)

If none of the above apply, feel free to choose any process you like.

**Step 2**: Write down the process information

Write out the steps of your chosen process in a text file, **as much as you know**. It does not need to be complete.

```
Write out the steps of your chosen business process in exercises/ex3-process-notes.txt.

Things to include:
- Name and purpose of the process
- Stakeholders (who is involved)
- Flow of steps (any order is fine)
- Decision points ("if... then..." branching conditions)
- Tools used
- Common issues or exceptions
```

**Step 3**: Request flow diagram and procedure manual

```
Read exercises/ex3-process-notes.txt and create the following:

1. exercises/ex3-flowchart.md
   - Mermaid-format flowchart
   - Separate the main flow (happy path) and exception flow (error path)
   - Annotate each step with the responsible person

2. exercises/ex3-manual.md
   - Step-by-step procedure manual
   - Include "owner," "tools used," "estimated time," and "notes" for each step

3. exercises/ex3-questions.md
   - Organize unclear points from the process notes as a question list
   - Include a "why this information is needed" reason for each question
```

**Step 4**: Answer the questions and update the flow diagram

```
Here are my answers to the questions in exercises/ex3-questions.md:

(Enter your answers here)

Incorporate the answers and update ex3-flowchart.md and ex3-manual.md.
```

**Step 5**: Improve the flow diagram

```
Improve the flowchart in exercises/ex3-flowchart.md in the following ways:

1. Add estimated time annotations to each step
2. Highlight bottleneck steps (with color coding or comments)
3. Add the overall process duration (shortest/standard/longest) at the top
```

### Review Points

1. How many "unclear points" were identified in a process you considered "obvious"?
2. Is the generated flow diagram clear enough to share with team members and be understood?
3. Is the procedure manual detailed enough for a new team member to follow?

---

## Exercise 4: Free-Choice Exercise

### Learning Objectives

- Apply use cases from the textbook to your own work
- Design your own prompts

### Instructions

**Step 1**: Choose a use case

Select one from the following use cases in the textbook (`textbook.md`):

| # | Use Case | Recommended For |
|---|----------|----------------|
| 4 | KPI/OKR Dashboard Data Preparation | People who spend a lot of time on KPI aggregation |
| 5 | Process Flow Diagrams & Manuals | People who skipped Exercise 3 or want to try a different process |
| 6 | Internal Knowledge Base Construction | People with document management challenges |
| 7 | RFP Draft Creation | People who work with external vendors |
| 8 | Contract Risk Check Assistance | People who review contracts |
| 9 | Multilingual Content Localization | People who create content for international audiences |
| 10 | Scenario Simulation | People involved in business planning |
| 11 | Grant Application Support | People interested in grants and subsidies |

**Step 2**: Prepare your own business data

Gather the data needed for your chosen use case from your actual work.

- If you cannot use real data, create your own sample data
- If the data contains confidential information, replace it with dummy data

**Step 3**: Design your prompt based on the textbook examples

Use the "Prompt Example" from the textbook as a starting point and customize it for your work.

Tips:
- Start file paths with `exercises/ex4-`
- Clearly specify the output format
- Communicate the expected quality level

**Step 4**: Execute and evaluate the results

Evaluate the results from the following perspectives:

- [ ] Were the expected deliverables generated?
- [ ] Is the quality at a level that could be used in actual work?
- [ ] What areas need correction?
- [ ] What changes to the prompt would yield better results?

**Step 5**: Improve the prompt and re-execute

Based on your evaluation in Step 4, improve the prompt and run it again.

Improvement hints:
- If the output was missing something -> Add specific items
- If the quality was low -> Provide a reference example or template
- If irrelevant information was included -> Explicitly state exclusion criteria

### Review Points

1. How much did you need to customize the textbook's prompt example?
2. How much did the output quality improve between the first and second runs?
3. Could you see yourself using this use case regularly in your work going forward?

---

## Overall Reflection

After completing all exercises, consider the following questions.

### Applying to Your Own Work

1. Which use case could you **adopt immediately**? Why?
2. Which use case has **barriers to adoption**? What are those barriers?
3. Are there use cases **not covered in this module** that you would like to try with your own work?

### Prompt Design Skills

1. What did you find to be the most important aspect of writing prompts through these exercises?
2. What was the difference between prompts that "didn't work well" and prompts that "worked well"?

### Next Action

After completing this exercise collection, decide on one specific action to take in the first week.

```
Examples:
- "Structure next week's weekly meeting notes with Claude Code"
- "Create a report conversion template and use it starting next month"
- "Identify the areas where team knowledge is scattered and create an organization plan"
```

My action: _______________________________________________
