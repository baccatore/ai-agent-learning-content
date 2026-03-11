# Module 4: Exercises

These exercises are designed to reinforce what you learned in textbook.md through hands-on practice.
The exercises are structured progressively, and we recommend working through them in order.

> **What you'll need**
> - A GitHub account (logged in)
> - A web browser
> - A working Claude Code environment (set up in Module 1)

---

## Exercise 1: Creating a Repository and Basic Operations (Chapter 2)

### 1-1: Create Your First Repository

Create a repository on GitHub with the following settings:

| Field | Value |
|---|---|
| Repository name | `ai-agent-practice` |
| Description | "Practice repository for AI agent workflows" |
| Visibility | Private |
| README | Check the box |

**Verification checklist:**
- [ ] The repository is created and the README file is displayed
- [ ] The URL is `https://github.com/your-username/ai-agent-practice`

### 1-2: Upload a File

Create the following text file on your PC and upload it to the repository.

**File name:** `project-plan.md`

```markdown
# Project Plan

## Purpose
Learn AI agent skills and apply them to daily work

## Milestones
- [ ] Master basic GitHub operations
- [ ] Practice the issue-driven workflow
- [ ] Prepare for team operations

## Notes
(Add learning notes here as you go)
```

**Verification checklist:**
- [ ] The file appears in the repository
- [ ] You wrote a meaningful commit message
- [ ] The file content displays correctly on the web

### 1-3: Edit a File on the Web

Add today's date and a brief note to the "Notes" section of the `project-plan.md` file you uploaded.

**Steps:**
1. Click the file name to view its content
2. Click the pencil icon (Edit this file)
3. Edit the content
4. Write a commit message under "Commit changes" and save

**Verification checklist:**
- [ ] The file has been updated
- [ ] The commit history shows two commits (initial upload + this edit)

---

## Exercise 2: Creating and Managing Issues (Chapters 2 & 3)

### 2-1: Create Three Issues

Create the following three issues:

**Issue #1:**
```
Title: Create an industry trends research report
Body:
## Purpose
Research the latest trends in your industry (or an industry of interest)

## Deliverables
- Identify 3 trends and explain each in approximately 300 words
- Report file in Markdown format

## Target Audience
Team members (assumed to have basic industry knowledge)
```

**Issue #2:**
```
Title: Create CLAUDE.md
Body:
## Purpose
Create a CLAUDE.md file for this repository

## Content to Include
- Project overview
- Language for deliverables (English)
- Report format specifications
- File naming conventions
```

**Issue #3:**
```
Title: Create .gitignore file
Body:
## Purpose
Set up a .gitignore file to prevent confidential and unnecessary files
from being added to the repository

## Items to Exclude
- .env files
- .DS_Store
- data/private/ folder
```

**Verification checklist:**
- [ ] All three issues have been created
- [ ] Each issue has been automatically assigned a number (#1, #2, #3)

### 2-2: Add Labels to Issues

Add appropriate labels to each of the three issues you created.

| Issue | Recommended Label |
|---|---|
| #1 Industry trends research | `documentation` |
| #2 Create CLAUDE.md | `enhancement` |
| #3 Create .gitignore | `enhancement` |

> **Hint**: You can set labels from the "Labels" section in the right sidebar of each issue.
> Try selecting from the default labels provided.

---

## Exercise 3: Integration with Claude Code (Chapter 3)

### 3-1: Use Claude Code to Complete Issue #2

Launch your local Claude Code and make the following request:

```
Following the instructions in Issue #2 of the ai-agent-practice GitHub repository,
please create a CLAUDE.md file.

Include the following:
- Project overview: Practice repository for AI agent workflows
- Language: All deliverables should be created in English
- Report format: Structure of heading → overview → body → summary
- File naming: report_YYYYMMDD_topic.md

Once created, push it to GitHub as a Pull Request.
```

**Verification checklist:**
- [ ] A Pull Request has been created on GitHub
- [ ] You can see the CLAUDE.md content in the PR's "Files changed" tab
- [ ] The PR description includes a reference to Issue #2 (`#2` or `Closes #2`)

### 3-2: Review and Merge the PR

Review the content of the created PR and merge it if everything looks good.

**Review criteria:**
- [ ] Does the CLAUDE.md content match what was requested?
- [ ] Are there any unnecessary or inaccurate statements?
- [ ] Is the formatting easy to read?

If you find issues, write feedback in the PR comments and ask Claude Code to make corrections.
If everything looks good, click "Merge pull request" to merge.

### 3-3: Use Claude Code to Complete Issue #3

Similarly, ask Claude Code to create the .gitignore file for Issue #3.

```
Following the instructions in Issue #3 of the ai-agent-practice GitHub repository,
please create a .gitignore file and submit it as a Pull Request.
```

**Verification checklist:**
- [ ] Does the .gitignore content meet the issue requirements?
- [ ] Were you able to review and merge it?

---

## Exercise 4: Practicing the Issue-Driven Workflow (Chapter 3)

### 4-1: Complete the Industry Trends Research (Issue #1)

Ask Claude Code to work on Issue #1 and create the report.

**Steps:**
1. Ask Claude Code to work on Issue #1
2. Review the content when the PR is created
3. Perform fact-checking with the following criteria:
   - Do the trends mentioned actually exist?
   - Are there any obvious errors in the explanations?
   - Is the information current?
4. If you have feedback, submit revision requests via PR comments
5. Merge when everything looks good

**Verification checklist:**
- [ ] A PR was created containing the report file
- [ ] Fact-checking was performed (at least one item verified against an external source)
- [ ] Issue #1 has been closed (it may close automatically when the PR is merged)

### 4-2: Reflect on the Workflow

Look back on the exercises so far and answer the following questions (we recommend recording your answers in the "Notes" section of `project-plan.md`):

1. Was the Issue → Claude Code work → PR → Review → Merge flow smooth?
2. Were there areas where your instructions to Claude Code could be improved?
3. Did you notice anything during fact-checking?
4. Did you find any rules that should be added to CLAUDE.md?

---

## Exercise 5: Simulating Team Operations (Chapter 4)

> **Note**: This exercise can be done solo, but it's more effective with two or more people if possible — try working with a colleague or friend.

### 5-1: Create Issue Templates

Create two types of issue templates in your repository.

**Template 1: Research Request**

Go to Settings → Features → Issues → Set up templates and create a template with the following content:

```markdown
---
name: Research Request
about: Request a research or analysis task for an AI agent
labels: research
---

## Research Topic
<!-- What do you want researched? -->

## Background and Purpose
<!-- Why is this research needed? -->

## Deliverable Requirements
- Format: Markdown
- Length: <!-- Target word count or page count -->
- Content to include:
  - <!-- Item 1 -->
  - <!-- Item 2 -->

## Target Audience
<!-- Who will read this, and what is their knowledge level? -->

## Deadline
<!-- When is this needed by? -->
```

**Template 2: Report Creation Request**

```markdown
---
name: Report Creation Request
about: Request document or report creation from an AI agent
labels: documentation
---

## Report Title
<!-- Report title -->

## Purpose
<!-- Purpose of this report -->

## Structure
<!-- Desired sections and outline -->

## Data to Use
<!-- Data or files to reference -->

## Target Audience
<!-- Who is this report for? -->

## Tone
<!-- Formal / Casual / Business, etc. -->
```

**Verification checklist:**
- [ ] When you click "New issue," a template selection screen appears
- [ ] Selecting a template auto-fills the format

### 5-2: Create an Issue Using a Template

Use one of the templates you created to create an actual issue.
Fill in each field of the template to define a specific task.

### 5-3: Review Practice

Look back at the PRs created during Exercises 3 and 4, and review them again using the following checklist:

| Check Item | OK/NG | Comments |
|---|---|---|
| Does it meet the task requirements? | | |
| Are there any factual errors? | | |
| Is the tone appropriate for the target audience? | | |
| Does it contain any confidential information? | | |
| Does it follow the file naming conventions? | | |
| Does it comply with CLAUDE.md rules? | | |

---

## Exercise 6: Security Review (Chapter 5)

### 6-1: Run the Security Checklist

Perform the following checks on your repository:

- [ ] Is the repository set to Private?
  - Check in Settings → General → Danger Zone
- [ ] Is .gitignore properly configured?
  - Are sensitive files (.env, etc.) included in the exclusion list?
- [ ] Are there any unnecessary collaborators added?
  - Check in Settings → Collaborators
- [ ] Does the commit history contain any confidential information?
  - Review "Files changed" in each commit

### 6-2: Data Classification Practice

For each of the following types of data, determine whether it is "Safe to share with AI / Must not share / Can share if anonymized."

| Data | Judgment | Reason |
|---|---|---|
| URL of a publicly available industry report | | |
| Customer list (with company and contact names) | | |
| Internal sales data (by department, anonymized) | | |
| List of employee email addresses | | |
| Published product catalog information | | |
| Configuration file containing API keys | | |
| Meeting minutes (internal only) | | |
| Someone's personal credit card number | | |

<details>
<summary>View sample answers</summary>

| Data | Judgment | Reason |
|---|---|---|
| URL of a publicly available industry report | Safe to share | It's public information |
| Customer list (with company and contact names) | Must not share | Contains personal and confidential business information |
| Internal sales data (by department, anonymized) | Can share if anonymized (already anonymized in this case) | Already anonymized, but confirm with internal policies |
| List of employee email addresses | Must not share | Personal information |
| Published product catalog information | Safe to share | It's public information |
| Configuration file containing API keys | Must not share | Never share authentication credentials |
| Meeting minutes (internal only) | Depends on internal policy | Depends on the sensitivity level of the content; not permitted if it contains confidential information |
| Someone's personal credit card number | Must not share | Extremely sensitive personal information |

</details>

---

## Exercise 7: Comprehensive Exercise — Mini Project (All Chapters)

This comprehensive exercise integrates everything you've learned. Complete a mini project by following the steps below.

### Theme: "AI Adoption Proposal"

Create a proposal for AI adoption in your team or workplace using the issue-driven workflow.

**Steps:**

1. **Create an Issue** (on the GitHub Web UI)
   ```
   Title: Create AI Adoption Proposal

   ## Purpose
   Propose AI agent adoption methods for your team or department

   ## Content to Include
   - Current challenges (3 business challenges that AI could help solve)
   - Proposals (AI-powered solutions for each challenge)
   - Expected benefits (time savings, quality improvements, etc.)
   - Implementation steps (a phased rollout plan)
   - Risks and mitigation strategies

   ## Target Audience
   Manager or team leader

   ## Format
   Markdown, approximately 2,000–3,000 words
   ```

2. **Ask Claude Code to do the work**
   - Have it create the proposal based on the issue content
   - Have it submit it as a PR

3. **Review and provide feedback**
   - Fact-check the content
   - Write improvement suggestions in the PR comments
   - Ask Claude Code to make revisions

4. **Final review and merge**
   - Re-review the revised PR
   - Merge if everything looks good

5. **Record your reflections**
   - Add the following to `project-plan.md`:
     - What went well
     - What you'd like to improve
     - What you'd like to try next

**Evaluation criteria:**
- [ ] Completed the entire issue-driven workflow from start to finish
- [ ] Performed fact-checking
- [ ] Went through at least one feedback → revision cycle
- [ ] The deliverable is of sufficient quality to present to the target audience
- [ ] The repository is well-organized (file naming, folder structure)

---

## Summary

If you've completed all the exercises, you should now have the following skills:

- Basic GitHub operations (creating repositories, Issues, PRs, and reviews)
- Issue-driven workflow for AI agent use
- Fact-checking and reviewing deliverables
- Security-conscious AI usage
- Templates and processes for team operations

As your next steps, consider trying:

- Applying the issue-driven workflow to actual work tasks
- Inviting colleagues and trying team operations
- Continuously improving your CLAUDE.md
- Managing tasks with GitHub Projects
