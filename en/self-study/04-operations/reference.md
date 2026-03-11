---
title: "Module 4: Operations — Reference Materials"
lang: "en"
category: "self-study"
module: "04-operations"
contentType: "reference"
order: 3
---
# Module 4: Operations — Reference Materials

> Reference materials for managing your work with Claude Code and GitHub.
> Use this as a dictionary to look things up as needed.

---

## 1. GitHub Glossary

Common GitHub terms explained with everyday analogies.

| # | Term | Description | Everyday Analogy |
|---|------|-------------|-----------------|
| 1 | Repository | A place that stores all of a project's files and their change history | A dedicated project folder |
| 2 | Branch | A parallel line of work that does not affect the main files | A draft copy |
| 3 | Commit | Recording a set of file changes | Pressing the "Save" button |
| 4 | Push | Uploading your local changes to GitHub | Syncing files to the cloud |
| 5 | Pull | Downloading the latest state from GitHub to your computer | Fetching the latest version from the cloud |
| 6 | Issue | A ticket for recording tasks, bug reports, or feature requests | A sticky note with a to-do item |
| 7 | Pull Request (PR) | A request for others to review and approve your changes | A document sent around for review and sign-off |
| 8 | Merge | Integrating a branch's changes into the main branch | Incorporating a draft into the final version |
| 9 | main branch | The official, primary branch of a repository | The "clean copy" folder |
| 10 | Review | Examining a PR's content and providing approval or comments | Having a manager check your document |
| 11 | Clone | Downloading a repository to your local computer | Copying an entire cloud folder to your PC |
| 12 | Fork | Copying someone else's repository to your own account | Making a personal copy of someone else's work |
| 13 | Conflict | A state where the same section was changed differently by different people, preventing automatic merge | Two people filling in the same field with different information |
| 14 | Label | A category tag attached to Issues or PRs | A colored sticker on a file |
| 15 | README | A file that serves as the repository's description | A project's cover page and table of contents |
| 16 | CLAUDE.md | A file containing instructions and settings for Claude Code | A work manual for your AI assistant |

---

## 2. GitHub Basic Operations Cheat Sheet (Web UI)

All operations can be performed in the browser via GitHub's Web UI. No command-line input required.

### Repository Operations

| What You Want to Do | Steps |
|---------------------|-------|
| Create a repository | Top-right "+" -> "New repository" -> Fill in details -> "Create repository" |
| Create a new file | Repository page -> "Add file" -> "Create new file" -> Enter content -> "Commit changes" |
| Upload files | Repository page -> "Add file" -> "Upload files" -> Drag & drop -> "Commit changes" |
| Edit a file | Click the file -> Pencil icon -> Edit -> "Commit changes" |
| Delete a file | Click the file -> "..." menu -> "Delete file" -> "Commit changes" |
| Create a folder | "Create new file" -> Type `foldername/filename` in the name field (use a slash to create the folder) |

### Issue Operations

| What You Want to Do | Steps |
|---------------------|-------|
| Create an Issue | "Issues" tab -> "New issue" -> Enter title & body -> "Submit new issue" |
| Add a label | Issue page -> Right sidebar "Labels" -> Select labels |
| Assign someone | Issue page -> Right sidebar "Assignees" -> Select users |
| Close an Issue | Bottom of the Issue page -> "Close issue" |
| Add a comment | Text box at the bottom of the Issue page -> Enter text -> "Comment" |
| Search Issues | "Issues" tab -> Enter keywords in the search bar |

### Pull Request Operations

| What You Want to Do | Steps |
|---------------------|-------|
| View PR list | Click the "Pull requests" tab |
| View PR changes | PR page -> "Files changed" tab |
| Comment on a line | "Files changed" -> Click "+" next to a line number -> Enter comment -> "Start a review" |
| Submit a review | "Finish your review" -> Approve / Request changes / Comment -> "Submit review" |
| Merge a PR | "Merge pull request" -> "Confirm merge" |
| Delete a branch | After merging, click "Delete branch" |

### Settings Operations

| What You Want to Do | Steps |
|---------------------|-------|
| Check visibility | "Settings" -> "General" -> Scroll to "Danger Zone" -> "Change visibility" |
| Manage labels | "Issues" -> "Labels" -> "New label" |
| Create Issue templates | "Settings" -> "General" -> Features section -> "Set up templates" |
| Check collaborators | "Settings" -> "Collaborators" |
| Set branch protection | "Settings" -> "Branches" -> "Add branch protection rule" |

---

## 3. CLAUDE.md Template Collection

CLAUDE.md templates for different types of work. Customize them to fit your needs.

### Template 1: Research Projects

```markdown
# CLAUDE.md - Research Project

## Project Overview
A project for managing research tasks such as market research, competitive analysis, and technology surveys.

## Work Rules
- All deliverables should be written in English
- Default file format is Markdown (.md)
- Always cite information sources (URLs, publication titles, etc.)
- Include the research date at the top of each deliverable
- Clearly distinguish between facts and speculation/analysis

## Folder Structure
- `/market-research/` - Market research
- `/competitor-analysis/` - Competitive analysis
- `/tech-research/` - Technology research

## Deliverable Format
Each report should include:
1. Research objective
2. Methodology and scope
3. Findings (use tables and lists)
4. Analysis and recommendations
5. References

## Notes
- Do not include confidential or personal information
- Be mindful of copyright; avoid lengthy quotations
- Note when information may be outdated and always include the research date
```

### Template 2: Document Creation Projects

```markdown
# CLAUDE.md - Document Creation Project

## Project Overview
A project for creating and managing internal manuals, guidelines, proposals, and other documents.

## Work Rules
- All documents should be written in English
- Default file format is Markdown (.md)
- Use language appropriate for the target audience's level
- Provide explanations when technical terms first appear
- Include creation date and last updated date on all documents

## Folder Structure
- `/manuals/` - Manuals and procedure guides
- `/guidelines/` - Guidelines and policies
- `/proposals/` - Proposals and plans
- `/meeting-notes/` - Meeting minutes

## Style Guide
- Headings start at `##` (reserve `#` for the title only)
- Use `-` for bullet points
- Use numbered lists for step-by-step instructions
- Format important notes as `> **Note**: ...`
- Use tables for comparisons and lists with 3+ columns

## Notes
- Be mindful of confidentiality levels
- Get permission before including personal names
- Rely on GitHub history for version control (do not add version numbers to file names)
```

### Template 3: Data Analysis Projects

```markdown
# CLAUDE.md - Data Analysis Project

## Project Overview
A project for managing data analysis, visualization, and report creation.

## Work Rules
- Analysis reports should be written in English
- Keep data files and analysis reports in separate folders
- Always state analysis assumptions and prerequisites
- Use appropriate units and decimal places for numbers
- Include titles and descriptions for all charts and tables

## Folder Structure
- `/data/` - Source data (CSV, etc.)
- `/reports/` - Analysis reports
- `/dashboards/` - Periodic reports and dashboards

## Report Format
Each report should include:
1. Analysis objective
2. Data overview (period, record count, source)
3. Methodology
4. Results (including tables and charts)
5. Analysis and insights
6. Recommended actions

## Notes
- Anonymize any personally identifiable data
- Do not include large data files in the repository (add to .gitignore)
- Clearly distinguish between sample data and production data
```

### Template 4: Project Management

```markdown
# CLAUDE.md - Project Management

## Project Overview
A project for managing team project materials and templates.

## Work Rules
- All materials should be written in English
- Use Issue labels for status management
- Create weekly progress reports
- Meeting minutes should be created within 24 hours of the meeting

## Folder Structure
- `/plans/` - Plans and schedules
- `/reports/` - Progress reports and weekly updates
- `/meeting-notes/` - Meeting minutes
- `/retrospectives/` - Retrospectives

## Label Guidelines
- `priority:high` `priority:medium` `priority:low` for priority management
- `research` `document` `data-analysis` for task type
- `review-needed` `in-progress` `done` for progress tracking

## Notes
- Do not include HR or performance review information
- Use code names for client names when needed
```

### Template 5: Knowledge Management

```markdown
# CLAUDE.md - Knowledge Base

## Project Overview
A knowledge base for accumulating and sharing expertise and know-how gained through work.

## Work Rules
- All articles should be written in English
- One topic per file as a general rule
- Include links for citations and references
- Periodically review and update older articles

## Folder Structure
- `/how-to/` - How-to guides and procedures
- `/tips/` - Tips and tricks
- `/glossary/` - Term definitions
- `/case-studies/` - Case studies
- `/faq/` - Frequently asked questions

## Article Format
Include the following at the top of each article:
- Creation date
- Last updated date
- Category (matching the folder structure above)

Body structure:
1. Overview (3 lines or fewer)
2. Body (detailed content)
3. Related article links (if any)

## Notes
- Do not include proprietary technical information in public repositories
- Check that screenshots do not contain confidential information
```

---

## 4. Security Checklist

A 10-item checklist for safely managing your repository. Review it regularly.

### When Creating a Repository (One-Time)

| # | Checklist Item | How to Verify | What to Do |
|---|---------------|---------------|------------|
| 1 | Is the repository set to Private? | Settings -> General -> Danger Zone | If Public, change to Private |
| 2 | Is a `.gitignore` file configured? | Check for the file in the repository root | Create one if missing (see Exercise 5) |
| 3 | Have you avoided granting access to unnecessary collaborators? | Settings -> Collaborators | Remove unnecessary members |

### Every Time You Add or Edit Files

| # | Checklist Item | How to Verify | What to Do |
|---|---------------|---------------|------------|
| 4 | Are there passwords or API keys in the file? | Visually inspect file contents | Remove them and immediately change the affected keys/passwords |
| 5 | Does the file contain personal information (names, phone numbers, email addresses)? | Visually inspect file contents | Anonymize or remove |
| 6 | Does the file contain internal system URLs or IP addresses? | Visually inspect file contents | Remove or replace with dummy values |
| 7 | Does the file contain database connection strings? | Visually inspect file contents | Remove and change the connection credentials |

### Regular Checks (Monthly Recommended)

| # | Checklist Item | How to Verify | What to Do |
|---|---------------|---------------|------------|
| 8 | Are there unnecessary collaborators in the list? | Settings -> Collaborators | Remove access for former employees or transferred staff |
| 9 | Has the visibility been unintentionally changed? | Settings -> General -> Danger Zone | If it has become Public, immediately switch back to Private |
| 10 | Does the commit history contain confidential information? | Review commit history | If found, immediately change the affected keys/passwords |

### If You Accidentally Commit Confidential Information

> **Important**: Once information has been uploaded to GitHub, it may persist in the commit history even after you delete the file.

**Emergency Response Steps:**

1. **Immediately invalidate/change** the affected passwords or API keys (this is the top priority)
2. Remove the confidential information from the file and create a new commit
3. Add the file pattern to `.gitignore` to prevent recurrence
4. Report to your repository administrator or security team as needed

---

## 5. Issue/PR Template Samples

### Issue Template: General Task Request

Place this as a Markdown file in the `.github/ISSUE_TEMPLATE/` folder, and it will appear as an option when creating a new Issue.

```markdown
---
name: Task Request
about: Template for requesting work from Claude Code
title: ''
labels: ''
assignees: ''
---

## Task Overview
<!-- Describe what you need done in 1-2 sentences -->

## Detailed Requirements
<!-- List what the deliverable should include as bullet points -->
- [ ]
- [ ]
- [ ]

## Deliverable
- **File format**: Markdown
- **Save to**: `/folder-name/`
- **File name**: `filename.md`

## Background / Additional Information
<!-- Provide any context or reference material -->

## Definition of Done
<!-- Describe what "complete" looks like -->
- [ ]
- [ ]
```

### Issue Template: Bug / Correction Request

```markdown
---
name: Bug / Correction Request
about: Template for reporting errors or improvements in deliverables
title: '[Fix] '
labels: 'bug'
assignees: ''
---

## Problem Summary
<!-- Describe which file has what problem -->

## Affected File
- File path: <!-- e.g., /research/market-report.md -->

## Problem Details
<!-- Describe specifically what is wrong or what should be improved -->

## Expected State
<!-- Describe what the correct state should be -->

## Priority
- [ ] High (blocks work)
- [ ] Medium (should be fixed)
- [ ] Low (fix when time permits)
```

### Issue Template: Research Request

```markdown
---
name: Research Request
about: Template for requesting research from Claude Code
labels: 'research'
assignees: ''
---

## Research Topic
<!-- Describe what you want researched -->

## Background & Purpose
<!-- Explain why this research is needed -->

## Scope
<!-- Describe how far the research should go -->

## Deliverable Requirements
- Format: Markdown
- Save to: `/research/`
- File name: <!-- e.g., market-trends-2026.md -->
- Target length: <!-- e.g., 1,000-1,500 words -->

## Target Audience
<!-- Who will read this? What is their knowledge level? -->

## Deadline
<!-- When is this needed by? -->
```

### PR Template

Place this at `.github/pull_request_template.md` and it will be auto-inserted when creating a PR.

```markdown
## Summary
<!-- Briefly describe what this PR does -->

## Related Issue
<!-- List the related Issue number -->
Closes #

## Changes
<!-- List the files added/changed and what was done -->
-

## Areas to Review
<!-- Highlight anything you want the reviewer to focus on -->
-

## Checklist
- [ ] Follows CLAUDE.md rules
- [ ] Contains no confidential information
- [ ] Language and terminology are consistent
- [ ] Files are placed in the correct folders
```

---

## 6. Frequently Asked Questions (FAQ)

### Q1: What is the difference between Public and Private repositories?

**A**: Public repositories are visible to anyone on the internet. Private repositories are visible only to you and people you have explicitly granted access to. For work purposes, always select **Private**.

---

### Q2: Why is CLAUDE.md necessary?

**A**: CLAUDE.md serves as a "work manual" for Claude Code. By documenting work rules, folder structure, and important notes, Claude Code will follow those rules when working. This means you get consistent deliverables without having to repeat detailed instructions every time, improving both efficiency and quality.

---

### Q3: I do not understand the difference between Issues and Pull Requests.

**A**: In simple terms, an Issue records "what needs to be done," while a Pull Request (PR) is a mechanism for getting "what was done" reviewed and approved.

| | Issue | Pull Request |
|---|---|---|
| Role | Defining and requesting tasks | Reviewing and approving deliverables |
| Timing | Created before work begins | Created after work is done |
| Analogy | A work order | A completed document circulated for review |

Typical flow: Create Issue -> Do the work -> Create PR -> Review -> Merge -> Issue auto-closes

---

### Q4: What is a branch? Why is it needed?

**A**: A branch is a "working copy" that branches off from the main line. Instead of modifying the main branch directly, you work in a separate space and then merge the results. Claude Code creates branches automatically when working, so you typically do not need to think about them. Merging a PR incorporates the branch's content into the main branch.

---

### Q5: I noticed a mistake after merging a PR. Can I undo it?

**A**: Yes. Open the merged PR and you will see a "**Revert**" button. Clicking it automatically creates a new PR that undoes the merge. GitHub retains the full change history, so you can always go back to any previous point in time.

---

### Q6: I accidentally committed confidential information. What should I do?

**A**: **Top priority**: Immediately change or invalidate the affected passwords or API keys. Simply deleting the file is not enough, as the information remains in the commit history. After changing the credentials, also remove the confidential information from the file and add the pattern to `.gitignore` to prevent recurrence. If you are unsure, consult your security team.

---

### Q7: Do I need to specify the Issue number every time I ask Claude Code to work on something?

**A**: It is not strictly required, but strongly recommended. When you specify an Issue number, Claude Code reads the Issue's content (title, description, requirements) and works accordingly. Saying "Please work on Issue #3" is the most reliable approach.

---

### Q8: Can I ask Claude Code to work on multiple Issues at once?

**A**: Technically possible, but **working on one Issue at a time produces more consistent quality**. The recommended approach is to complete one Issue, create a PR, and then move on to the next. This allows you to review each deliverable individually and makes it easier to isolate any problems.

---

### Q9: What can I do with GitHub's free plan?

**A**: GitHub's free plan supports all the features covered in this course.

| Feature | Free Plan |
|---------|-----------|
| Private repositories | Unlimited |
| Issue management | Available |
| Pull Requests | Available |
| Project boards | Available |
| Adding collaborators | Available |
| GitHub Actions (automation) | 2,000 minutes/month free |

This is more than sufficient for individual use or small teams.

---

### Q10: How should I organize things when I have many repositories?

**A**: Here are four ways to keep things tidy:

1. **Use a consistent naming convention**: Establish a pattern like `department-project` (e.g., `sales-market-research`, `hr-onboarding-docs`)
2. **Always fill in the Description**: Write a brief description of the repository's purpose in the description field
3. **Archive inactive repositories**: Settings -> "Archive this repository" makes it read-only. This preserves history while decluttering your active list
4. **Add Topics (tags)**: Click "Add topics" on the repository's main page to add tags that make searching and categorization easier
