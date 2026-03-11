---
title: "Session 0: Experience — Witness the Power of AI Agents Firsthand"
lang: "en"
category: "workshop"
module: "session-00"
contentType: "instructor-guide"
order: 1
---
# Session 0: Experience — Witness the Power of AI Agents Firsthand

## Session Overview

| Item | Details |
|------|---------|
| **Duration** | 90 minutes |
| **Objective** | Experience how AI agents autonomously execute tasks, building strong motivation for further learning |
| **Prerequisites** | GitHub account (pre-invited by the instructor), Web browser only |
| **Participant Goal** | Participants will have experienced the full cycle of assigning a task on GitHub → AI execution → reviewing the deliverable |

---

## Preparation (For Instructors)

### Required Environment

1. **GitHub Repository** (prepare a template repository)
   - Example repository name: `ai-agent-workshop-demo`
   - All participants pre-invited as Collaborators
   - GitHub Actions configured to run Claude Code

2. **Files to Include in the Repository**
   ```
   ai-agent-workshop-demo/
   ├── CLAUDE.md              # Instructions for the AI agent
   ├── .github/
   │   └── workflows/
   │       └── claude-agent.yml  # GitHub Actions configuration
   ├── output/                # Directory for deliverables
   └── README.md              # Repository description
   ```

3. **Example CLAUDE.md Contents**
   ```markdown
   # Project Configuration

   You are a business research assistant.
   Execute tasks assigned via GitHub Issues and save deliverables to the output/ folder.

   ## Working Rules
   - Create deliverables in Markdown format
   - Use the file naming convention `YYYY-MM-DD-task-summary.md`
   - Always cite sources for research
   - Create a Pull Request upon completion and reference the Issue
   ```

4. **GitHub Actions Configuration File (claude-agent.yml)**
   - Triggers Claude Code execution based on Issue labels or comments
   - Refer to Appendix A for detailed configuration

### Rehearsal Checklist

- [ ] Create a test Issue and confirm that Claude Code runs successfully
- [ ] Confirm that a PR is automatically created and deliverables are saved to output/
- [ ] Confirm that all participants' GitHub accounts have access to the repository
- [ ] Confirm that the Wi-Fi connection is stable
- [ ] Confirm that the demo projector/screen sharing works

---

## Timetable

### 1. Opening (10 minutes)

**Suggested instructor script:**

> "Today, we'll start by experiencing firsthand how the way we work is about to change.
> There are no complicated steps involved. All you need is the web browser you use every day.
> I have just one request — when what you see today surprises you,
> let yourself feel that surprise. Don't hold back."

**What to do:**
- Brief self-introduction
- Ask with a show of hands: "How many of you have used an AI chatbot before?"
- Set expectations: "What you'll experience today is not a chatbot"

### 2. Demonstration (15 minutes)

**The instructor performs a live demo.**

**Step 1: Create an Issue**

Share your screen showing the GitHub repository and create an Issue with the following content:

```
Title: Research on the Latest Trends in Remote Work Productivity

Body:
Research the latest survey data and trends on remote work and hybrid work
from 2024–2026, and create a report covering the following perspectives:

1. Key statistics (impact on productivity, employee satisfaction, and turnover rates)
2. Case studies of successful companies (approximately 3)
3. Future outlook

Target audience: Managers in the corporate strategy department
```

**Step 2: Show the AI agent in action**

- Use the GitHub Actions logs and Issue comments to show that the AI agent is working
- Explain: "Right now, the AI agent is gathering information from the web and writing a report"
- While waiting for the task to complete, briefly explain the big picture with the next slide

**Step 3: Review the deliverable**

- Share your screen when the PR is created
- Review the quality of the deliverable (Markdown report) together
- Emphasize: "This was created in just a few minutes"

**Suggested instructor script:**

> "What you just saw was not AI simply answering a question.
> It received a task, conducted its own research, created a file,
> and even submitted it for review. This is what an 'AI agent' is."

### 3. Hands-On Experience (40 minutes)

**Participants create their own Issues and assign tasks to the AI agent.**

**Step 1: Choose a Task (5 minutes)**

Have participants choose from the following task templates (free-form input is also welcome):

> **Template A: Industry Research**
> "Identify the three latest trends in the XX industry and summarize
> each with an overview and business impact in approximately 500 words."
>
> **Template B: Competitive Analysis**
> "Compare the services of Company XX and Company YY, and create
> a comparison table covering features, pricing, and target customers."
>
> **Template C: Proposal Draft**
> "Create a draft proposal for an internal study session on XX.
> Include the purpose, target audience, proposed agenda, and required preparations."

**Step 2: Create the Issue (10 minutes)**

- Each participant navigates to the GitHub repository
- Click "New Issue"
- Create an Issue based on the chosen task template, tailored to their own work
- The instructor supports any participants who get stuck

**Instructor Tips:**
- Encourage concise Issue titles with details in the body
- Explain that including specifics like "who the document is for" and "how long it should be" leads to better results

**Step 3: Review the Deliverable (15 minutes)**

- Once the AI agent completes the task, guide participants to review the PR
- Have them read the deliverable and evaluate its quality
- Ask them to leave their impressions or revision requests in the PR comment section

**Step 4: Experience Requesting Revisions (10 minutes)**

- Demonstrate that the AI agent responds to revision requests written in PR comments
- Examples: "Please add more specific data," "Please reorganize this as a table"
- Let participants experience the cycle of "request → execution → review → revision request"

### 4. Reflection and Discussion (20 minutes)

**Discussion prompts:**

1. **What surprised you**: "What was the most surprising thing about this experience?"
2. **Possibilities**: "Can you think of situations in your own work where this could be useful?"
3. **Concerns**: "Did you feel any concerns or anxieties after trying this out?"

**Key points for the instructor to summarize:**

- **AI Agent ≠ AI Chatbot**
  - Chatbot: A single exchange of question → answer
  - Agent: Task → planning → execution → deliverable submission (autonomously performs multiple steps)

- **GitHub is the "AI agent's office"**
  - Issue = Task assignment
  - PR = Deliverable submission and review
  - Comments = Feedback and revision requests
  - In other words, it has the same structure as assigning work to a human team member

- **Why you should learn this now**
  - AI agents are not just a "tool" — they represent a new way of working
  - You need the ability to give proper instructions and evaluate deliverables
  - This skill is not just for engineers

### 5. Preview and Closing (5 minutes)

**Suggested instructor script:**

> "Today, you experienced everything just by clicking buttons on GitHub.
> Starting next session, we'll move into understanding how AI agents work
> and learning to use them with full control.
> In the next session, we'll explore 'What is an AI agent?'
> and try running Claude Code on your own PC."

**Homework (optional):**
- Write down three tasks in your daily work that you think could be delegated to an AI agent
- Browse the GitHub repository and check out other participants' Issues and PRs

---

## Appendix A: Example GitHub Actions Configuration File

```yaml
# .github/workflows/claude-agent.yml
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

## Appendix B: Troubleshooting

| Problem | Solution |
|---------|----------|
| Created an Issue but the AI didn't respond | Check that the `agent-task` label is applied. Check the GitHub Actions tab for errors |
| PR was not created | Check the GitHub Actions logs. Verify the API key configuration |
| Deliverable quality is low | Check whether the Issue instructions are too vague. Ask the participant to add more specific requirements |
| A participant cannot log in to GitHub | Re-check the invitation email sent beforehand. Try using the browser's incognito mode |

## Appendix C: Instructor Checklist (Day-of)

- [ ] GitHub Actions is enabled on the repository
- [ ] ANTHROPIC_API_KEY is set in the repository's Secrets
- [ ] Verified operation with a test Issue
- [ ] Final confirmation of participant list and GitHub invitation status
- [ ] Projector/screen sharing verified
- [ ] Wi-Fi connection stability confirmed
- [ ] Backup mobile hotspot prepared (optional)
