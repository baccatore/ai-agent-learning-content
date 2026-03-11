---
title: "Session 4: Managing Work with GitHub"
lang: "en"
category: "workshop"
module: "session-04"
contentType: "participant-handout"
order: 2
---
# Session 4: Managing Work with GitHub

## What We'll Do Today

Today is the final session. We'll build the "operational framework" for continuously applying Claude Code in your day-to-day work.

### Today's Goal

```
Create your own repository → Configure CLAUDE.md → Build the Issue → AI execution → PR workflow
```

---

## GitHub Fundamentals

### Four Terms to Learn Today

| Term | Meaning | Everyday Analogy |
|------|---------|-----------------|
| **Repository** | A place to manage project files | A shared folder on Google Drive |
| **Branch** | A draft space that doesn't affect the live version | Making a copy of a shared document to edit |
| **Issue** | A task request ticket | A ticket in a task management tool |
| **PR (Pull Request)** | A request to review your deliverable | A "please review" email |

### What Was Happening in Session 0

Let's revisit the Session 0 experience using today's terminology:

```
1. You created an Issue (task ticket)
       |
2. The AI agent created a branch (draft space)
       |
3. The AI worked in the draft space (research, file creation)
       |
4. The AI created a PR (review request)
       |
5. You reviewed and gave feedback on the deliverable
```

> In Session 0, it may have seemed like "magic," but these five steps were actually happening behind the scenes. Today, you'll build this system yourself.

---

## Hands-On 1: Creating Your Own Repository

### Step 1: Create the Repository

1. Log into **github.com**
2. Click the **"+"** button in the top right → Select **"New repository"**
3. Fill in the following:

| Field | Input |
|-------|-------|
| Repository name | `my-ai-workspace` (any name is fine — use only letters, numbers, and hyphens) |
| Description | "AI agent-powered work management" |
| Public / Private | **Private** (Private is recommended for business use) |
| Add a README file | Check this box |

4. Click **"Create repository"**

> **Private vs. Public**
> - **Private**: Only invited people can access it (recommended for business use)
> - **Public**: Anyone on the internet can view it

---

### Step 2: Create a CLAUDE.md

CLAUDE.md is a "work manual" for the AI agent. When executing tasks, the AI reads this file and follows its rules.

1. On the repository's main page, click **"Add file"** → **"Create new file"**
2. Enter **`CLAUDE.md`** as the filename (note the uppercase letters)
3. Use the template below as a starting point and customize it for your work

#### CLAUDE.md Template

```markdown
# Project Settings

You are a work assistant for the [X] department.
Execute tasks assigned via GitHub Issues and save deliverables in the output/ folder.

## Work Rules
- Create deliverables in Markdown format
- Use the filename format `YYYY-MM-DD-task-summary.md`
- Always cite sources in research
- Do not handle confidential information
- Create a Pull Request when finished, referencing the Issue

## Areas of Expertise
- Research and information gathering
- Drafting documents
- Data organization and summarization
- Structuring meeting notes
```

4. Click **"Commit changes"** at the bottom of the page

> **Customization Tips**
> - Replace "[X] department" with your actual department name
> - Add your own commonly requested tasks under "Areas of Expertise"
> - Add department-specific rules under "Work Rules" (e.g., "Use formal language," "Keep under 2 pages")

---

### Step 3: Create an Issue and Execute with Claude Code

1. Go to the **"Issues"** tab in the repository → Click **"New issue"**
2. Write your task and click **"Submit new issue"**
3. Launch Claude Code in the terminal and execute based on the Issue
4. Return to GitHub and check the **"Pull requests"** tab to confirm a PR was created

---

## Three Team Operation Patterns

### Pattern 1: Individual Use

```
Your own repository → You create Issues → AI executes → You review
```

**Best for:**
- Weekly business report drafts
- Meeting notes cleanup
- Information gathering and research

**Benefits:** Start at your own pace. Failures only affect you.

---

### Pattern 2: Shared Team Repository

```
Shared team repository → Team members create Issues → AI executes → Team reviews
```

**Best for:**
- Building a team knowledge base
- Distributing project research tasks
- Creating and updating internal manuals

**Benefits:** Deliverables can be shared and reviewed across the team. Quality management happens naturally.

---

### Pattern 3: Cross-Departmental Projects

```
Project repository → Each department creates Issues → AI executes → Stakeholders review
```

**Best for:**
- Preparation tasks across departments for a new product launch
- Company-wide event planning and coordination
- Cross-departmental research projects

---

## Issue Templates

Writing Issues from scratch every time is tedious. Templates let you prepare a format in advance.

### Template Example: Research Request

```markdown
## Research Topic
(Enter the topic to research)

## Background and Purpose
(Why is this research needed?)

## What You Want to Know
- (Specific question 1)
- (Specific question 2)
- (Specific question 3)

## Deliverable Format
- [ ] Report (narrative format)
- [ ] Comparison table
- [ ] Bullet-point summary

## Target Audience
(Who will read this?)

## Expected Length
(Estimated page count or word count)
```

### Template Example: Document Creation Request

```markdown
## Document Title
(Title of the document to create)

## Purpose
(What this document will be used for)

## Content to Include
- (Element 1)
- (Element 2)
- (Element 3)

## Format and Tone
- Format: Report / Presentation outline / Proposal
- Tone: Formal / Casual
- Length: approximately X pages

## Target Audience
(Who is this document for?)

## Reference Information
(Any relevant URLs or information)
```

---

## Security and Risk Management

### Data That's Okay to Share with AI — and Data That's Not

| Acceptable | Not Acceptable |
|------------|----------------|
| Research requests using public information | Writing customer personal data in Issues |
| Drafting general business documents | Including passwords or API keys |
| Creating templates for internal documents | Requesting analysis of unreleased financial data |
| Analyzing publicly available data | Pasting confidential strategy documents directly |

> **Rule of thumb**: "Would it be okay if this content were published on the internet?"
> If the answer is no, consult your manager before sharing it with the AI.

### Always Have Humans Check AI Deliverables

AI deliverables may contain the following types of errors:

- **Numerical errors**: Statistics and financial figures may be inaccurate
- **Outdated information**: Content may not reflect the very latest developments
- **Context gaps**: Company-specific circumstances may not be properly considered

**PR review is a quality management mechanism.** The AI creates the deliverable, and a human verifies it before it's considered "complete." Make this part of your routine.

### What Is Prompt Injection?

External documents may contain hidden instructions for the AI embedded within them.

**Countermeasures:**
- Don't blindly copy-paste external documents into Issues
- If AI output seems unusual, review the input
- Add "Verify facts before using external data" to your CLAUDE.md

---

## Comprehensive Exercise

Imagine your actual work and experience the full workflow.

### Steps

1. **Choose a work scenario**
   - Pick one task from your work that you'd like to delegate to the AI agent
   - Example: "Create an industry trends report for next month's department meeting"

2. **Create an Issue**
   - Use a template to create an Issue in your repository

3. **Execute with Claude Code**
   - Use Claude Code from the terminal to execute the Issue's task

4. **Review the PR**
   - Review the deliverable content
   - Write feedback as comments

5. **Reflect**
   - Identify what went well and what you'd like to improve

---

## Full Series Retrospective

### What We Learned Across Five Sessions

| Session | Theme | What We Learned |
|---------|-------|-----------------|
| Session 0 | Experience | Experienced the power of AI agents. Went through the Issue → AI execution → PR flow |
| Session 1 | Basic Operations | Understood how Claude Code works and ran it on our own computers |
| Session 2 | Research & Documents | Business applications: research, document creation, summarization |
| Session 3 | Data Analysis | CSV/Excel data aggregation, visualization, and report creation |
| Session 4 (Today) | Operations | Work management with GitHub, team operations, security |

---

## My Action Plan

### What I'll Do Next Week (1 item)

| Item | Details |
|------|---------|
| Specific task | |
| Features to use | |

### What I'll Do Within 1 Month (1–2 items)

| Item | Details |
|------|---------|
| Specific task 1 | |
| Specific task 2 | |
| Features to use | |

### What I Want to Share with My Team

| Item | Details |
|------|---------|
| Who to share with | |
| What to share | |

---

## Self-Study Resources

| Resource | URL |
|----------|-----|
| Claude Code Official Documentation | https://docs.anthropic.com/en/docs/claude-code |
| GitHub Official Guide | https://docs.github.com/en |
| Anthropic Prompt Engineering Guide | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering |

---

## Today's Key Takeaways

| Takeaway | Details |
|----------|---------|
| **GitHub is a work management tool** | It's not just for engineers. You can manage tasks with Issues and PRs |
| **CLAUDE.md is a work manual** | A configuration file that defines rules for the AI agent |
| **Start small** | Begin with individual use. Expand to the team once it's working |
| **Humans review** | Always have a human verify AI deliverables before considering them "complete" |
| **Stay security-conscious** | Don't share confidential information with the AI. When in doubt, consult your manager |
