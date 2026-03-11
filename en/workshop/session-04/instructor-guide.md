---
title: "Session 4: Operations — Managing Work with GitHub"
lang: "en"
category: "workshop"
module: "session-04"
contentType: "instructor-guide"
order: 1
---
# Session 4: Operations — Managing Work with GitHub

## Session Overview

| Item | Details |
|------|---------|
| **Duration** | 120 minutes |
| **Objective** | Understand the core concepts of GitHub and build an Issue/PR-based task management workflow independently |
| **Prerequisites** | Completed Sessions 0–3, GitHub account, Claude Code installed |
| **Participant Goal** | Set up the full Issue → Claude Code execution → PR review workflow in their own repository, and understand team operation patterns and security considerations |

---

## Pre-Session Preparation (For Instructors)

### Required Environment

1. **Verify all participant environments**
   - Can log into their GitHub account
   - Claude Code is installed (completed in Session 1)
   - Web browser is available

2. **Instructor demo environment**
   - A demo GitHub repository (for explaining team operation patterns)
   - Sample CLAUDE.md templates (multiple patterns)
   - Sample Issue templates

3. **Handout preparation**
   - Participant handout (print or digital distribution)
   - CLAUDE.md template collection (included in handout)
   - Sample Issue templates (included in handout)

### Rehearsal Checklist

- [ ] Confirmed smooth demonstration of repository creation on GitHub
- [ ] Confirmed CLAUDE.md setup and Issue template creation steps
- [ ] Confirmed the Issue → Claude Code → PR flow works in your own repository
- [ ] Confirmed the demo repository for team operations is prepared
- [ ] Confirmed Wi-Fi connection is stable
- [ ] Confirmed projector/screen sharing is working

---

## Timetable

### 1. Review of Previous Session (5 min)

**Sample instructor dialogue:**

> "In Session 3, we experienced data analysis using Claude Code.
> We learned how to load CSV and Excel data, and automate
> aggregation and chart creation. Today is the final session.
> We'll build the 'operational framework' for continuously
> applying everything we've learned to real work."

**What to do:**
- Ask 2–3 people about their takeaways from last session (about 1 min)
- Share today's goal: "Create your own work management repository and learn team operation methods"

---

### 2. GitHub Fundamentals — Not Just a Tool for Engineers (25 min)

**Sample instructor dialogue:**

> "In Session 0, you all used GitHub. You wrote Issues, the AI agent ran,
> and PRs were created. But we didn't explain what was happening behind the scenes.
> Today, you'll understand that mechanism and learn to build the same environment yourself."

#### 2-1. The Bare Minimum Git Concepts (5 min)

**Key points to explain:**

> "Git is 'a system that records the change history of files.'
> Have you ever saved files like 'proposal_v1.docx,' 'proposal_v2_revised.docx,'
> 'proposal_final_really_final.docx'?
> Git automatically records the entire change history without renaming files.
> Think of it as a 'time machine for files' that lets you go back
> to any previous state at any time."

- We won't use Git commands directly today. Explain that Claude Code will handle them for us
- Understanding that "Git exists" is sufficient for this level

#### 2-2. Repository = Project Folder (5 min)

**Key points to explain:**

> "A repository is like a shared folder on Google Drive.
> It keeps all project-related files in one place and
> records the entire change history.
> The difference from Google Drive is that 'who changed what,
> when, and why' is all recorded."

- Screen share to show a GitHub repository page
- Show the file list and the Commits (history) page

#### 2-3. Branch = A "Draft" Mechanism (5 min)

**Key points to explain:**

> "A branch is like making a 'draft copy' of a shared document.
> For example, when editing a team report, if you modify the live file directly,
> it could disrupt other team members.
> With branches, you work in your own draft space,
> then merge it into the main version once it's complete.
> In Session 0, when the AI agent worked on your tasks,
> it automatically created a branch and worked within it."

- Use a diagram to explain (refer to the handout diagram)
- The simple understanding of "main = production, branch = draft" is sufficient

#### 2-4. Issue = Task Ticket, PR = Review Request (5 min)

**Key points to explain:**

> "Remember the Issues and PRs you used in Session 0?
> An Issue is a task ticket saying 'I need this work done.'
> A PR is a request saying 'The work is done — please review.'
> In other words, what you did in Session 0 was:
> 1. Created a task via an Issue
> 2. The AI agent worked in a branch (draft space)
> 3. A PR (review request) was submitted
> 4. You reviewed the content and gave feedback
> This is exactly the same structure as delegating work
> to a human team member."

#### 2-5. Revisiting the Session 0 Experience from Behind the Scenes (5 min)

**Screen share and walk through the Session 0 demo repository.**

- Display the repository used in Session 0
- Open one of the Issues participants created and show the link to the PR
- In the PR's "Files changed" tab, show the files the AI created
- In "Commits," show the change history
- Show the GitHub Actions log screen and explain "this is how the AI agent was working behind the scenes"

**Instructor tips:**
- Take questions at this point (allow about 5 minutes of buffer)
- Reassure participants: "You don't need to understand everything perfectly. You'll get the feel for it through today's hands-on exercises"

---

### 3. Creating Your Own Repository (20 min)

**Sample instructor dialogue:**

> "Now, let's create your own personal repository.
> We'll do everything through the web browser interface. No commands needed."

#### Step 1: Create a Repository on GitHub (5 min)

**Walk through this together via screen share:**

1. Log into GitHub (github.com)
2. Click the "+" button in the top right → "New repository"
3. Configure as follows:
   - Repository name: `my-ai-workspace` (participants can choose any name)
   - Description: "Repository for AI agent-powered work management"
   - Select **Public** or **Private** (Private recommended for business use)
   - Check "Add a README file"
4. Click "Create repository"

**Instructor tips:**
- Walk around and check participant screens, helping anyone who's stuck
- Note that repository names cannot contain non-ASCII characters or spaces

#### Step 2: Create a CLAUDE.md (10 min)

**Sample instructor dialogue:**

> "CLAUDE.md is a 'work manual' for the AI agent.
> In Session 0, it was already prepared for you, but this time
> let's customize it to match your own work."

**Walk through this together via screen share:**

1. On the repository's main page, click "Add file" → "Create new file"
2. Enter `CLAUDE.md` as the filename
3. Refer to the handout template and fill in content tailored to your work
4. Click "Commit changes" at the bottom of the page (the default commit message is fine)

**Template example (for instructors):**

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

**Instructor tips:**
- Tell participants "It doesn't have to be perfect — you can always edit it later"
- Mention a few industry-specific examples verbally

#### Step 3: Experience the Issue → Claude Code → PR Flow (5 min)

**Sample instructor dialogue:**

> "Now let's use Claude Code to execute a task in the repository we just created.
> Since we haven't set up GitHub Actions yet, we'll run Claude Code
> directly from the terminal."

**Procedure:**

1. Create a new Issue in the repository (from the web UI)
   - Example: "Please enhance README.md. Explain the purpose and usage of this repository"
2. Launch Claude Code in the terminal and execute the task based on the Issue
   ```
   claude "Check Issue #1 in the GitHub repository my-ai-workspace and address it"
   ```
3. Confirm that Claude Code automatically creates a branch, edits files, and creates a PR
4. Return to the GitHub web UI and confirm the PR has been created

**Instructor tips:**
- If running short on time, it's okay for the instructor to just demo this
- GitHub Actions setup is covered in the appendix — interested participants can try it later

---

### 4. Team Operation Patterns (20 min)

**Sample instructor dialogue:**

> "So far, we've been setting up for individual use.
> Now let me introduce patterns for using AI agents across a team.
> You don't need to try all of these today. Just find the pattern
> that seems right for your team."

#### Pattern 1: Individual Use (5 min)

**Key points to explain:**

> "This is the simplest pattern. Create your own personal repository
> and delegate your own tasks to the AI agent.
> What we just did is exactly this pattern."

**Examples:**
- Weekly business report drafts
- Meeting notes cleanup
- Information gathering and research
- Presentation material drafts

**Benefits:**
- Start at your own pace
- Failures only affect you
- Free to customize CLAUDE.md however you want

#### Pattern 2: Shared Team Repository (7 min)

**Key points to explain:**

> "In this pattern, the entire team shares one repository.
> AI agent deliverables can be reviewed and shared within the team.
> Using the PR review feature, quality management happens naturally."

**Examples:**
- Building a shared team knowledge base
- Distributing project research and analysis tasks
- Creating and updating internal FAQs and manuals

**Example operational rules:**
- Assign owners to Issues
- At least one team member reviews each PR
- Deliverables follow the folder structure guidelines

**Screen share demo:**
- Show how to add labels to Issues (e.g., `research`, `document-creation`, `data-analysis`)
- Show the PR review features (Approve / Request changes)

#### Pattern 3: Cross-Departmental Projects (3 min)

**Key points to explain:**

> "This is for projects involving multiple teams.
> Each department submits tasks via Issues,
> and deliverables are consolidated in one place."

**Examples:**
- Preparation tasks across departments for a new product launch
- Company-wide event planning and coordination
- Cross-departmental research projects

#### Using Issue Templates (5 min)

**Sample instructor dialogue:**

> "Writing Issues from scratch every time is tedious.
> With Issue templates, you can prepare a format in advance."

**Screen share demo:**

1. Go to the repository's "Settings" → "Features" → "Issues" → "Set up templates"
2. Select "Custom template"
3. Create the template

**Template example (for instructors):**

```markdown
---
name: Research Request
about: Request research from the AI agent
title: "[Research] "
labels: research
---

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

---

### 5. Security and Risk Management (15 min)

**Sample instructor dialogue:**

> "AI agents are extremely useful, but since we're using them for work,
> we also need to understand security and risk.
> There's no need to be afraid, but let's make sure we know the facts."

#### 5-1. Handling Data Shared with AI (5 min)

**Key points to explain:**

| Acceptable | Not Acceptable |
|------------|----------------|
| Research requests using public information | Writing customer personal data in Issues |
| Drafting general business documents | Sharing files containing passwords or API keys |
| Creating templates for internal documents | Requesting analysis of unreleased financial data |
| Analyzing publicly available data | Pasting confidential strategy documents into Issues |

> "When in doubt, ask yourself: 'Would it be okay if this content
> were published on the internet?' If the answer is no,
> consult your manager before sharing it with the AI."

**Additional notes:**
- Explain that even in Private repositories, data is sent to the AI service
- If your organization has an AI usage policy, instruct participants to follow it

#### 5-2. Fact-Checking Deliverables (3 min)

**Key points to explain:**

> "AI agents are very capable, but they do make mistakes.
> The following points must always be verified by humans:"

- **Numerical data**: Always verify specific figures like statistics and financial data against their sources
- **Timeliness**: AI training data has temporal limitations
- **Expert judgment**: Areas requiring professional expertise (legal, financial, medical)
- **Internal rules**: Alignment with company-specific rules and practices

> "The PR review feature exists precisely for this fact-checking.
> The AI creates the deliverable, and humans review it before
> merging it into the main branch. This workflow ensures
> quality and safety."

#### 5-3. Permission Settings and Approval Workflows (4 min)

**Key points to explain:**

- Difference between Public and Private repositories
- Inviting Collaborators and permission levels (Read, Write, Admin)
- Branch protection rules: Preventing direct changes to the main branch and requiring PRs
- Requiring PR approvals (for team use)

> "These controls apply not just to AI deliverables but to
> human work as well — they're standard quality management practices.
> By adopting AI agents, you'll naturally develop these
> good operational habits."

#### 5-4. Prompt Injection Awareness (3 min)

**Key points to explain:**

> "Prompt injection is an attack method that manipulates instructions
> to the AI to cause unintended behavior.
> For example, if you paste text received from an external source
> directly into an AI prompt, it could contain hidden instructions."

- Don't blindly copy-paste external documents into Issues
- Add safeguards to CLAUDE.md (e.g., "Verify facts before using external data")
- If you notice suspicious output, review the Issue logs

> "You don't need to worry excessively about this in daily work,
> but it's important to maintain the mindset that
> 'humans control the instructions given to AI.'"

---

### 6. Comprehensive Exercise (20 min)

**Sample instructor dialogue:**

> "Now it's time for the comprehensive exercise. Think about your actual work
> and experience the full flow from Issue creation to PR review.
> This is the exact workflow you can use starting tomorrow."

#### Exercise Steps

1. **Choose a work scenario** (3 min)
   - Pick one task from your actual work that you'd like to delegate to the AI agent
   - Example: "Create an industry trends report for next month's department meeting"

2. **Create an Issue** (5 min)
   - Create an Issue in your repository
   - Use a template and write specific instructions
   - Set labels

3. **Execute with Claude Code** (5 min)
   - Use Claude Code from the terminal to execute the Issue's task
   - Confirm a PR is automatically created

4. **Review the PR** (5 min)
   - Review the deliverable content
   - Write feedback as comments
   - Approve if everything looks good

5. **Reflect** (2 min)
   - Identify what went well and what you'd like to improve

**Instructor tips:**
- If time is tight, have participants start the Step 5 reflection while waiting for Claude Code to finish in Step 3
- Sit with struggling participants and work through the steps together
- For participants who finish early, suggest creating Issue templates or improving their CLAUDE.md

---

### 7. Full Series Retrospective and Next Steps (15 min)

**Sample instructor dialogue:**

> "Congratulations on completing all five workshop sessions.
> Let's look back at what we've learned and think about
> actions we can take starting tomorrow."

#### Reviewing the Five Sessions (5 min)

**Show on slides or whiteboard:**

| Session | Theme | What We Learned |
|---------|-------|-----------------|
| Session 0 | Experience | Experienced the power of AI agents. Went through the Issue → AI execution → PR flow |
| Session 1 | Basic Operations | Understood how Claude Code works and ran it on your own computer |
| Session 2 | Research & Documents | Business applications: research, document creation, summarization |
| Session 3 | Data Analysis | CSV/Excel data aggregation, visualization, and report creation |
| Session 4 (Today) | Operations | Work management with GitHub, team operations, security |

> "What seemed like 'magic' in Session 0, you can now
> reproduce on your own. That's the capability you've
> built over these five sessions."

#### Introducing Self-Study Resources (3 min)

**Share the following resources:**

- **Claude Code Official Documentation**: https://docs.anthropic.com/en/docs/claude-code
- **GitHub Official Guide**: https://docs.github.com/en
- **Prompt Engineering Guide**: Anthropic's official guide
- **Internal shared repository** (if applicable): Centralized workshop materials and reference resources

#### Creating Action Plans (7 min)

**Have each participant fill out the following worksheet:**

> **My AI Agent Action Plan**
>
> 1. **What I'll do next week** (1 item):
>    - Specific task:
>    - Features to use:
>
> 2. **What I'll do within 1 month** (1–2 items):
>    - Specific task:
>    - Features to use:
>
> 3. **What I want to share with my team**:
>    - Who to share with:
>    - What to share:

**Instructor tips:**
- Have 2–3 people present (about 1 minute each)
- Emphasize "start small, then expand when it works"
- If there's an internal support system (help desk, etc.), mention it

**Sample closing dialogue:**

> "AI agents aren't here to take your jobs.
> They're partners that amplify your capabilities.
> The Issue → AI execution → Review workflow you learned today
> combines human judgment with AI execution power
> — it's a new way of working.
> Please start with small tasks beginning tomorrow.
> Great work, everyone!"

---

## Appendix A: Setting Up GitHub Actions

Steps for setting up automatic Claude Code execution via GitHub Actions in your own repository.

### Procedure (All via the Web UI)

1. Go to the repository's "Settings" → "Secrets and variables" → "Actions"
2. Click "New repository secret"
3. Name: `ANTHROPIC_API_KEY`, Value: Enter your API key
4. On the repository's main page, click "Add file" → "Create new file"
5. Filename: `.github/workflows/claude-agent.yml`
6. Paste the following content:

```yaml
name: Claude Agent

on:
  issues:
    types: [opened, labeled]
  issue_comment:
    types: [created]

jobs:
  agent:
    if: |
      (github.event_name == 'issues' && contains(github.event.issue.labels.*.name, 'agent-task')) ||
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@claude'))
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
      issues: write
    steps:
      - uses: actions/checkout@v4

      - name: Run Claude Code
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          github_token: ${{ secrets.GITHUB_TOKEN }}
```

7. Click "Commit changes"

## Appendix B: CLAUDE.md Template Collection

### For Sales Departments

```markdown
# Project Settings

You are a research assistant for the sales department.

## Work Rules
- Create deliverables in Markdown format and save in the output/ folder
- Always include source URLs in competitive analyses
- Include an executive summary at the beginning of proposal drafts
- Present monetary amounts and numerical data with verifiable citations

## Areas of Expertise
- Researching publicly available competitor information
- Drafting proposals and project plans
- Summarizing industry reports
- Creating FAQ and anticipated questions lists
```

### For HR Departments

```markdown
# Project Settings

You are a work assistant for the HR department.

## Work Rules
- Never handle personally identifiable information
- Clearly note that any references to laws and regulations are for informational purposes only
- Create deliverables in Markdown format and save in the output/ folder

## Areas of Expertise
- Researching hiring market trends
- Creating training program proposals
- Comparative research on internal policies (other companies' examples)
- Drafting survey questionnaires
```

### For Planning Departments

```markdown
# Project Settings

You are a research and document creation assistant for the planning department.

## Work Rules
- Always cite sources in market research
- Prioritize the most current data available
- Include an executive summary in deliverables
- Create deliverables in Markdown format and save in the output/ folder

## Areas of Expertise
- Market research and trend analysis
- Drafting business plans
- SWOT analysis and competitive analysis
- Creating presentation structure proposals
```

## Appendix C: Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't find the repository creation screen | Make sure you're logged into GitHub. Click "+" in the top right → "New repository" |
| Error when creating CLAUDE.md | Confirm the filename is exactly `CLAUDE.md` (uppercase) |
| Created an Issue but the AI doesn't run | Check GitHub Actions settings. Confirm the `agent-task` label is applied |
| PR isn't being created | Verify that the Claude Code API key is correctly configured |
| Can't see other people's repositories | If the repository is Private, confirm you've been invited as a Collaborator |

## Appendix D: Instructor Checklist (Day of Session)

- [ ] GitHub Actions is enabled on the demo repository
- [ ] The Session 0 repository is accessible and displayable
- [ ] CLAUDE.md templates are ready for quick display
- [ ] Sample Issue templates are prepared
- [ ] All participants can log into GitHub
- [ ] Projector/screen sharing has been tested
- [ ] Wi-Fi connection stability has been confirmed
- [ ] Action plan worksheets (print or digital) are prepared
