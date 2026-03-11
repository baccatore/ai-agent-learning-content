# Module 1: Foundations — Understanding and Getting Started with AI Agents

> **Target audience**: Non-engineers comfortable with IT tools (experienced with SaaS, but new to CLI/Git)
> **Estimated time**: Approximately 3-4 hours (reading + hands-on)
> **Prerequisites**: Basic PC skills, web browser usage, and the ability to type

---

## Table of Contents

- [Chapter 1: What Is an AI Agent?](#chapter-1-what-is-an-ai-agent)
- [Chapter 2: What Is Claude Code?](#chapter-2-what-is-claude-code)
- [Chapter 3: Setup](#chapter-3-setup)
- [Chapter 4: Basic Operations](#chapter-4-basic-operations)
- [Chapter 5: CLAUDE.md — A Briefing Document for AI](#chapter-5-claudemd--a-briefing-document-for-ai)

---

## Chapter 1: What Is an AI Agent?

### 1.1 The Difference Between Chatbots and Agents

Many of you have probably used AI chatbots like ChatGPT or Claude.ai. While chatbots are extremely useful, AI agents are fundamentally different.

Let's explain this difference using an **office work** analogy.

```
+-------------------------------------------------------------+
|                       AI Chatbot                            |
|                                                             |
|  You: "How do I write a sales report?"                      |
|   AI: "Here's how to write a sales report. First..."        |
|  You: "I'd also like to include charts"                     |
|   AI: "To include charts, here's what you do..."            |
|                                                             |
|  -> Like a "help desk" that answers your questions          |
|  -> You still do the actual work yourself                   |
+-------------------------------------------------------------+

+-------------------------------------------------------------+
|                       AI Agent                              |
|                                                             |
|  You: "Create a report from last month's sales data"        |
|   AI:  1. Reading the data file                             |
|         2. Running the calculations                         |
|         3. Creating charts                                  |
|         4. Generated the report file                        |
|   AI: "Done. Please review it."                             |
|                                                             |
|  -> Like a "team member" you can delegate entire tasks to   |
|  -> Plans, executes, and delivers results                   |
+-------------------------------------------------------------+
```

| Comparison | AI Chatbot | AI Agent |
|---------|----------------|--------------|
| Interaction style | Question and answer | Task delegation |
| How it works | Responds to what it's asked | Plans and executes on its own |
| File operations | Cannot (or very limited) | Freely creates and edits files |
| Multi-step tasks | Completes in a single response | Runs multiple steps in sequence |
| Analogy | "A reception desk attendant" | "An assistant you can delegate work to" |

### 1.2 Three Key Characteristics of AI Agents

AI agents have three important characteristics that set them apart from chatbots.

**Characteristic 1: Autonomy — Thinks and acts on its own**

While a chatbot only "answers what it's asked," an agent formulates its own plan for a given task and works through it, making decisions along the way.

For example, if you ask it to "organize the CSV files in this folder," the agent will first check the folder contents, identify what CSV files are present, decide on an organization strategy, and execute it. If it encounters unexpected files, it figures out how to handle them on its own.

**Characteristic 2: Tool use — Works with a variety of tools**

Agents don't just generate text; they can use a range of "tools."

```
Examples of tools an agent can use:
  - Read and write files
  - Search the web for information
  - Execute commands
  - Integrate with external services
```

This is similar to how people use different tools at work — Excel, email, a browser, and so on.

**Characteristic 3: Multi-step execution — Automatically handles multiple stages**

For a single request, agents can automatically execute multiple stages in sequence.

```
Request: "Create a competitive analysis report"

  Step 1: Gather competitor information via web search
       |
  Step 2: Organize and categorize the information
       |
  Step 3: Create comparison tables
       |
  Step 4: Add analysis commentary
       |
  Step 5: Save as a report file
```

### 1.3 The Role of AI Agents in Business

The most important mindset when working with AI agents is to think of them as **"a new type of team member."**

However, the division of responsibilities differs from that of a human team member.

```
+--------------------------------------------------+
|     Division of Roles: Humans vs. AI Agents      |
+--------------------------------------------------+
|                                                  |
|  [What humans handle]     [What to delegate      |
|                            to AI]                |
|  - Final decision-making  - Information gathering|
|  - Business judgment       - Routine tasks       |
|  - Quality review          - Document drafting   |
|  - Ethical decisions       - Data organization   |
|  - Client relationships    - Repetitive work     |
|  - Creative direction      - Format conversion   |
|                                                  |
+--------------------------------------------------+
```

**Key principle: "Delegating" is not the same as "dumping"**

Delegating work to an AI agent means running a cycle of "request -> receive deliverable -> review -> provide feedback." It's similar to mentoring a new hire. At first, you give detailed instructions, and as they gain experience, you gradually expand the scope of what you delegate.

> **Key takeaway**: An AI agent is not a "magic wand that does everything" — it's more like "a capable but inexperienced assistant." Give clear instructions, review deliverables, and request corrections as needed. This approach is the key to success.

---

## Chapter 2: What Is Claude Code?

### 2.1 Overview of Claude Code

Claude Code is an **AI agent CLI tool** provided by Anthropic (the company behind Claude AI).

**What is a CLI?**: CLI stands for Command Line Interface — a type of software you operate by typing text. Instead of clicking with a mouse, you type commands on a keyboard. It might feel unfamiliar at first, but it becomes very efficient once you get used to it.

```
+--------------------------------------------------+
|  Typical software (GUI)    Claude Code (CLI)     |
|                                                  |
|  +------------+            +------------------+  |
|  | Buttons    |            | $ claude         |  |
|  | Menus      |            | > Create a       |  |
|  | Icons      |            |   report         |  |
|  | to click   |            |                  |  |
|  +------------+            +------------------+  |
|  Operated with mouse       Operated with         |
|                            keyboard              |
+--------------------------------------------------+
```

The key feature of Claude Code is that it can directly operate files on your PC. While Claude.ai (the browser version) only works within the browser, Claude Code can actually read and write files on your desktop and in your folders.

### 2.2 What Claude Code Can Do

Claude Code can perform a wide variety of tasks. Here are some common examples.

| Category | Capability | Examples |
|---------|----------|--------|
| File operations | Create, edit, and organize files | Create meeting note templates, format CSV files |
| Research | Web search | Gather competitor intelligence, research industry trends |
| Data analysis | Aggregate and visualize data | Analyze sales data, create charts |
| Document creation | Create reports and materials | Draft reports, create proposals |
| Git/GitHub integration | Version control and collaboration | Track change history, share files with a team |
| Automation | Execute multi-step workflows at once | "Fetch data -> process -> create report" in one go |

> **What is Git/GitHub?**: A system for recording and managing file change history. It tracks "when, who, and what was changed." You'll learn more about this in Module 2 and beyond.

### 2.3 Pricing

Using Claude Code involves costs. There are two main ways to pay.

**Option 1: Pay-as-you-go with an API key**

You pay based on usage. You obtain an API key (like a "key" to access the service).

- Issue an API key from the Anthropic console (management dashboard)
- Billed based on usage (calculated from input text + output text volume)
- Suitable for small-scale trial use

**Option 2: Claude Pro / Max plan (flat-rate)**

A fixed monthly fee.

- Claude Pro ($20/month): Includes Claude Code access (with usage limits)
- Claude Max ($100+/month): For heavy usage, with higher limits

> **Which should you choose?**: Start with the API key approach to try it at low cost, then consider switching to a Max plan once you start using it regularly.

### 2.4 Comparison with Other AI Tools

"There are so many AI tools out there — what makes them different?" Here's a comparison.

| Tool | Type | Features | Best for |
|-------|------|------|--------------|
| **Claude.ai** | Chatbot (Web) | Easy to use in a browser. Conversational. | Answering questions, writing text, brainstorming |
| **ChatGPT** | Chatbot (Web) | Broad knowledge base. Extensible with plugins. | General questions, learning, translation |
| **GitHub Copilot** | Code completion tool | Auto-suggests code while programming. | Software development (for engineers) |
| **Claude Code** | AI Agent (CLI) | Directly operates files on your PC. Executes tasks autonomously. | File operations, data processing, automation |

**Where Claude Code particularly excels:**

- When you want to say "actually create this file for me"
- When you want to automate multiple tasks in sequence
- When you want to work directly with data on your PC
- When you want to streamline repetitive work

**Where Claude.ai or ChatGPT are a better fit:**

- When you just want a quick answer to a question
- When you want to brainstorm ideas
- When you want to use something right now without any setup

---

## Chapter 3: Setup

### 3.1 Checking Prerequisites

Let's confirm what you need to use Claude Code.

```
Checklist:
  [  ] A PC (Windows / Mac / Linux)
  [  ] Internet connection
  [  ] An Anthropic account (free to create)
  [  ] A registered payment method (if using an API key)
       or a Claude Pro/Max plan subscription
```

### 3.2 Opening the Terminal

To use Claude Code, you first need to open a **terminal**.

**What is a terminal?**: It's a screen where you give your PC instructions using text. Think of the black screen with scrolling text you've seen in movies.

> **"The terminal isn't scary"**
>
> If you're seeing the terminal for the first time, the dark screen might feel intimidating. But don't worry — the terminal is simply "a screen you operate with text." Typing a wrong command won't break your PC. And you can "undo" things.
>
> And when using Claude Code, you barely need to memorize any commands. Just talk to Claude Code in plain English, and it will handle the complicated operations for you.

#### On Mac

1. Open **Spotlight Search**: Press `Command + Space`
2. Type "**terminal**"
3. **Terminal.app** will appear — press `Enter`

```
+----------------------------------------------+
|  Terminal -- zsh                              |
|                                              |
|  Last login: Mon Mar 11 10:00:00             |
|  username@MacBook ~ %                        |
|  <- If you can type here, you're all set     |
|                                              |
+----------------------------------------------+
```

> **Tip**: Since you'll use it often, consider adding it to your Dock. Right-click the Terminal icon -> "Options" -> "Keep in Dock."

#### On Windows

**Using Windows Terminal (recommended):**

1. Open the Start menu
2. Search for "**terminal**"
3. Click "**Windows Terminal**" or "**PowerShell**"

```
+----------------------------------------------+
|  Windows PowerShell                          |
|                                              |
|  PS C:\Users\username>                       |
|  <- If you can type here, you're all set     |
|                                              |
+----------------------------------------------+
```

> **Tip**: Windows 11 comes with Windows Terminal built in. On Windows 10, you can install it for free from the Microsoft Store.

### 3.3 Installing Node.js

To run Claude Code, you need a piece of software called **Node.js**.

**What is Node.js?**: Originally a runtime environment for the JavaScript programming language, it serves as the "foundation" needed to run Claude Code. You won't interact with it directly — just install it and you're good to go.

#### Checking if Node.js is already installed

Type the following command in your terminal and press `Enter`.

```
node -v
```

**Reading the results:**

- If a **version number** like `v18.0.0` or `v20.11.0` is displayed -> It's already installed. If the version is v18 or higher, you can move on.
- If you see `command not found` or a similar error message -> You need to install it.

#### Installation steps

**On Mac:**

```
# Paste the following command into your terminal and press Enter

# Option 1: Download from the official site (recommended)
# Go to https://nodejs.org/ and download the LTS version, then run the installer

# Option 2: Using Homebrew (a package manager)
brew install node
```

**On Windows:**

1. Go to https://nodejs.org/ in your browser
2. Click the "LTS" button (recommended version) to download
3. Run the downloaded installer (.msi file)
4. Follow the on-screen instructions, clicking "Next" (no settings need to be changed)
5. After installation completes, **close and reopen your terminal**

After installation, run `node -v` again to confirm that a version number is displayed.

### 3.4 Installing Claude Code

Now it's time to install Claude Code itself.

#### Installation command

Type the following command in your terminal and press `Enter`.

```
npm install -g @anthropic-ai/claude-code
```

**What this command means:**

| Part | Meaning |
|-------|------|
| `npm` | Node.js package (software) management tool |
| `install` | Install |
| `-g` | Install globally (available system-wide) |
| `@anthropic-ai/claude-code` | The Claude Code package name |

Installation takes 1-2 minutes. You'll see a lot of text scrolling on screen, but as long as no errors (red text with `ERR!`) appear at the end, it was successful.

> **If you get an error:**
> - `EACCES` error (on Mac): Add `sudo` to the beginning of the command and re-run -> `sudo npm install -g @anthropic-ai/claude-code` (enter your PC login password when prompted)
> - Other errors: Your Node.js version may be too old. Make sure you have Node.js v18 or higher.

#### Setting up authentication

After installation, Claude Code will ask you to authenticate (log in) the first time you launch it.

```
claude
```

Running the command above to start Claude Code will trigger the following flow:

1. A browser window opens automatically, showing the Anthropic login page
2. Log in with your Anthropic account (or create a new one)
3. Grant access to Claude Code
4. Return to the terminal, where you'll see a confirmation message

> **Tip**: If using an API key, you can also set it via the `ANTHROPIC_API_KEY` environment variable. See the reference materials for details.

### 3.5 First Launch and Verification

Once authentication is complete, let's verify that Claude Code is working properly.

```
claude
```

When it launches, you'll see a screen like this:

```
+--------------------------------------------------+
|                                                  |
|  Claude Code                                     |
|                                                  |
|  > Hello! How can I help you today?              |
|                                                  |
|  <- Type your message here                       |
|                                                  |
+--------------------------------------------------+
```

Try typing the following:

```
What is today's date?
```

If Claude Code responds with the date, your setup is complete. Congratulations!

---

## Chapter 4: Basic Operations

### 4.1 Starting and Exiting Claude Code

**How to start:**

Type the following in your terminal.

```
claude
```

That's all it takes to launch Claude Code.

**How to exit:**

To exit Claude Code, do any of the following:

| Method | Action |
|------|------|
| Exit via command | Type `/exit` and press Enter |
| Keyboard shortcut | Press `Ctrl + C` twice |
| Another shortcut | Press `Ctrl + D` |

### 4.2 How to Interact

You can communicate with Claude Code in plain, natural English. No special syntax or programming language is required.

**Good instruction examples:**

```
> Create a text file called "self-introduction".
  Include three items: name, department, and hobbies.

> Show me the contents of the CSV files in this folder.

> Calculate the total sales in sales_data.csv.
```

**Tips for writing better instructions:**

```
+----------------------------------------------+
|     5 Tips for Giving Good Instructions      |
+----------------------------------------------+
|                                              |
|  1. Be specific about what you want          |
|     x "Make it look nice"                    |
|     o "Format it as a table, sorted by date" |
|                                              |
|  2. Describe the desired outcome clearly     |
|     x "Create some materials"                |
|     o "A one-page summary in Markdown format"|
|                                              |
|  3. State any constraints                    |
|     "Under 500 words" "In English"           |
|     "As bullet points"                       |
|                                              |
|  4. It's fine to request multiple tasks      |
|     at once                                  |
|     "Read this CSV, aggregate the data,      |
|      create a chart, and compile a report"   |
|                                              |
|  5. If the result isn't right, give          |
|     additional instructions                  |
|     "Make it more concise"                   |
|     "Swap the columns in the table"          |
|                                              |
+----------------------------------------------+
```

### 4.3 File Operations Basics

One of Claude Code's greatest strengths is its ability to directly work with files on your PC.

#### The concept of a working folder (current directory)

Claude Code uses the location (folder) where it was launched as its starting point. This "current location" is called the **current directory**.

```
Example: Launching Claude Code from the Desktop

  Desktop/               <- Current directory (where you are now)
    +-- document.txt
    +-- data.csv
    +-- project/
         +-- report.md
         +-- image.png

  -> Claude Code uses the "Desktop" folder as its workspace
  -> If you say "create a file," it will be created on the Desktop
```

**How to launch in a specific working folder:**

```
# Navigate to a specific folder, then launch
cd ~/Documents/my-project
claude

# Or navigate and launch in one line (cd stands for
# "change directory" — a command to switch folders)
cd /path/to/folder && claude
```

> **Tip**: `cd` stands for "change directory." `~` refers to your home folder (on Mac: `/Users/your-name`, on Windows: `C:\Users\your-name`).

#### Requesting file creation

Let's have Claude Code create a file.

```
> Create a file called "hello.txt".
  The content should be "My first Claude Code file".
```

Claude Code will do the following:

1. Prepare the file content
2. **Ask "May I create this file?"** (the permission check described below)
3. Once you approve, the file is created

#### Verifying the created file

There are several ways to confirm the file was actually created.

**Option 1: Ask Claude Code**
```
> Show me the contents of the file you just created
```

**Option 2: Check with your file manager (Finder/Explorer)**

Open the current directory folder in your file manager, and you'll see the created file.

**Option 3: Check via terminal (after exiting Claude Code)**
```
# List files
ls

# Display file contents
cat hello.txt
```

### 4.4 The Permission System

When Claude Code is about to perform an action, **it always asks for your approval first.** This is an important safety mechanism.

```
+----------------------------------------------+
|  Example of Claude Code asking permission:   |
|                                              |
|  "I will create hello.txt. Is that OK?"      |
|                                              |
|  [Y] Yes  [n] No  [a] Always allow          |
|                                              |
+----------------------------------------------+
```

| Option | Meaning | When to use |
|--------|------|-----------|
| **Y** (Yes) | Allow this time only | When you've reviewed the action and it looks good |
| **n** (No) | Deny | When it's an unintended action |
| **a** (Always allow) | Automatically allow this type of action going forward | When repeating trusted operations |

> **Peace of mind**: Claude Code won't delete files or send data to the internet without asking. It always confirms before important operations. If you're unsure, press "n" to deny, and the action will be canceled.

### 4.5 Slash Commands

Claude Code has special commands that start with `/` (slash). These are used to control Claude Code itself during a conversation.

| Command | Function | Description |
|---------|------|------|
| `/help` | Show help | Display a usage guide |
| `/clear` | Clear conversation | Erase all conversation history and start fresh |
| `/exit` | Exit | Quit Claude Code |
| `/status` | Show status | Check current settings and connection status |
| `/model` | Switch model | Change the AI model being used |
| `/cost` | Show cost | Check the cost incurred in the current session |
| `/compact` | Summarize conversation | Compress a long conversation to save context |

> **Tip**: The `/cost` command is especially handy. If you're worried about spending too much, check it regularly.

---

## Chapter 5: CLAUDE.md — A Briefing Document for AI

### 5.1 What Is CLAUDE.md?

**CLAUDE.md** is a **configuration file** that Claude Code automatically reads when it starts working.

**What is Markdown?**: A simple set of formatting rules for structuring text with headings, bullet points, and more. You use symbols like `#` for headings and `-` for bullet points. This textbook itself is written in Markdown.

In a nutshell, CLAUDE.md is **"a briefing document for AI."**

```
+----------------------------------------------+
|                                              |
|   Think of the onboarding document you       |
|   give to a new team member when they join.  |
|                                              |
|   - Team rules                               |
|   - Commonly used tools                      |
|   - How work gets done                       |
|   - Important notes                          |
|                                              |
|   CLAUDE.md is exactly the same thing.       |
|   It's a document that tells Claude Code     |
|   "Here's what kind of work you'll do        |
|   and the rules to follow."                  |
|                                              |
+----------------------------------------------+
```

### 5.2 Why Is It Necessary?

Without a CLAUDE.md, you'd have to repeat the same explanations every time you launch Claude Code.

```
Without CLAUDE.md:

  You'd need exchanges like this every time...
  > "I'm in the marketing department"
  > "Please use this format for reports"
  > "Name files as date_content.md"
  > "Write everything in English"

With CLAUDE.md:

  From the moment it launches, Claude Code already knows your context!
  > "Create last month's campaign report"
  -> Immediately starts working with the right format and naming conventions
```

### 5.3 Basic Structure

Place CLAUDE.md at the root (top level) of your working folder.

```
my-project/
  +-- CLAUDE.md          <- Place it here
  +-- data/
  |    +-- sales.csv
  +-- reports/
       +-- monthly.md
```

**Basic template:**

```markdown
# About This Project

This project is for [purpose].

## Rules

- Work in English
- Name files using the format "YYYY-MM-DD_description.md"
- Create reports in Markdown format

## Folder Structure

- `data/` : Folder for source data
- `reports/` : Output destination for reports
- `templates/` : Template files

## Common Tasks

1. Read CSV files from the data/ folder
2. Aggregate and analyze the data
3. Output reports to the reports/ folder
```

### 5.4 Practical Examples: Business CLAUDE.md Samples

#### Sample 1: Marketing Department

```markdown
# Marketing Department Workflow Guide

## Basic Rules
- All output should be in English
- Format numbers with comma separators (e.g., 1,000,000)
- Use YYYY-MM-DD format for dates
- Always include the currency symbol with monetary amounts

## File Naming Conventions
- Reports: `YYYY-MM_report-name.md`
- Data: `YYYY-MM-DD_data-name.csv`
- Images: `fig_number_description.png`

## Report Template Structure
1. Summary (3 lines or fewer)
2. Key KPI table
3. Month-over-month and year-over-year analysis
4. Improvement recommendations
5. Next month's action items

## Data Sources
- `data/ga/` : Google Analytics export data
- `data/ads/` : Ad platform data
- `data/crm/` : CRM export data
```

#### Sample 2: Sales Department

```markdown
# Sales Department Workflow Guide

## Basic Rules
- Use aliases or IDs for customer names (data privacy)
- Express amounts in thousands (e.g., $1,500K)
- Never include confidential information in files

## Common Tasks
1. Weekly sales report creation
   - Input: Activity data in `data/weekly/`
   - Output: Create report in `reports/weekly/`

2. Customer list maintenance
   - Remove duplicates
   - Update statuses

3. Proposal drafting
   - Create based on `templates/proposal_template.md`

## Important Notes
- Never include competitors' confidential information
- Quoted prices must always be verified by a human
- All client-facing documents must be reviewed by a manager before sending
```

#### Sample 3: General Affairs / Administration Department

```markdown
# Administration Department Workflow Guide

## Basic Rules
- Follow the company's internal document format
- Use formal, professional language throughout

## Folder Structure
- `notices/` : Internal announcements
- `minutes/` : Meeting minutes
- `manuals/` : Operations manuals
- `templates/` : Various templates

## Meeting Minutes Rules
1. Include date, time, location, and attendees at the top
2. For each agenda item, separate "Discussion," "Decisions," and "Action Items"
3. All action items must include an assignee and a deadline
4. File name format: `YYYY-MM-DD_meeting-name_minutes.md`

## Internal Notice Rules
1. Keep the subject line concise (under 60 characters)
2. Clearly state the recipients (all staff / department / individual)
3. Summarize the key points in the first 3 lines
4. Write details as bullet points
```

### 5.5 Let's Create a CLAUDE.md

You can even have Claude Code create the CLAUDE.md for you.

```
> Create a CLAUDE.md for this folder.
  I'm a marketing team member who frequently
  creates monthly reports and competitive analyses.
  I manage files in English with dates in YYYY-MM-DD format.
```

Claude Code will generate an appropriate CLAUDE.md. Review the generated content and ask for revisions as needed.

> **Key point**: CLAUDE.md isn't a one-and-done document. As you work, whenever you think "I'd like to add this rule too," go ahead and update it. Just tell Claude Code "Add this rule to CLAUDE.md" and you're set.

---

## Summary

Let's review what we've learned in this module.

| Chapter | What You Learned |
|----|----------|
| Chapter 1 | AI agents differ from chatbots — they are "team members" that execute tasks autonomously |
| Chapter 2 | Claude Code is an AI agent CLI that can directly operate files on your PC |
| Chapter 3 | How to open a terminal and install Node.js and Claude Code |
| Chapter 4 | Starting and exiting Claude Code, how to interact, and file operation basics |
| Chapter 5 | Creating a "briefing document for AI" with CLAUDE.md to work more efficiently |

**In the next module**: You'll learn the basics of Git/GitHub and how to manage file change history. Combined with Claude Code, team collaboration becomes much easier.
