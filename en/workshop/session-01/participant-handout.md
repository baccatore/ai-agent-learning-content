---
title: "Session 1: Understanding and Running AI Agents"
lang: "en"
category: "workshop"
module: "session-01"
contentType: "participant-handout"
order: 2
---
# Session 1: Understanding and Running AI Agents

## What We'll Do Today

Today, you'll install the AI agent "Claude Code" on your own computer
and have it carry out real tasks to produce deliverables.

### Today's Goals

```
1. Understand the difference between AI chat and AI agents
2. Learn the basics of using the terminal
3. Install Claude Code and give it your first instruction
4. Understand the role of CLAUDE.md (a briefing document for the AI)
```

---

## AI Chat vs. AI Agents

| | AI Chat (what you normally use) | AI Agent (what we'll use today) |
|---|---|---|
| **Analogy** | A consultant you can ask questions | A team member you can delegate tasks to |
| **Capabilities** | Answers questions | Receives tasks and executes them autonomously |
| **Interaction** | Single Q&A exchanges | Request → Plan → Execute → Deliver results |
| **Output** | Stays within the chat window | Saved as files on your computer |

```
[AI Chat]
  You: "Help me outline a proposal"
  AI:  "I'd suggest: 1. Background  2. Problem  3. Proposal  4. Expected Impact"
  You: (Open Word and start writing it yourself)

[AI Agent]
  You: "Create a proposal"
  AI:   1. Understands the task
        2. Gathers necessary information
        3. Creates the file
        4. "Done — please review"
```

---

## Step 1: Open the Terminal

**What is a terminal?** It's a screen where you operate your computer using text commands instead of a mouse.
It looks different, but you're doing the same things — opening folders and viewing files.

### On Mac

1. Press `Cmd (Command) + Space` on your keyboard
2. Type "Terminal" and press Enter

### On Windows

1. Click the Start menu (bottom left of the screen)
2. Type "PowerShell" and open it

> **Don't worry:** Typing a wrong command in the terminal won't break your computer.
> You'll simply get a message like "command not found." Feel free to experiment.

---

## Step 2: Three Essential Commands

You only need three commands for today's session.

### Command 1: `pwd` — Check where you are

```
$ pwd
/Users/tanaka
```

Short for "Print Working Directory." It shows the path of the folder you're currently in.

### Command 2: `ls` — List the contents of a folder

```
$ ls
Desktop    Documents    Downloads    Music    Pictures
```

Short for "List." It displays the files and folders in your current location.
It's the same as opening a folder in Finder (Mac) or File Explorer (Windows).

### Command 3: `cd` — Move to a different folder

```
$ cd Desktop
```

Short for "Change Directory." It moves you to the specified folder.
It's the same as double-clicking a folder to open it.

**Going back:** Type `cd ..` (two dots) to move up one level.

### Summary

```
pwd = Where am I?
ls  = What's here?
cd  = Move there
```

---

## Step 3: Check That Node.js Is Installed

Claude Code requires Node.js (a program runtime environment) to run.
It should already be installed, but let's verify.

```
$ node -v
v20.11.0
```

If a version number appears, you're all set.

> **If you get an error:** Raise your hand and ask the instructor for help.

---

## Step 4: Install Claude Code

Type the following command into the terminal and press Enter.

```
$ npm install -g @anthropic-ai/claude-code
```

- `npm` = Think of it as an "app store" for Node.js
- This command downloads and installs Claude Code from the internet onto your computer
- You'll see a lot of text scrolling by — as long as there are no red error messages, everything is fine
- It takes about 1–2 minutes to complete

> **If you get an error on Mac:**
> ```
> $ sudo npm install -g @anthropic-ai/claude-code
> ```
> Type this instead (adding `sudo` at the beginning). When prompted for a password, enter your Mac login password (the characters won't be displayed, but they are being entered).
>
> **If you get an error on Windows:**
> Close PowerShell, reopen it using "Run as administrator," and run the command again.

---

## Step 5: Set Up Your API Key

An API key is like a passcode that proves to the server that Claude Code is being used by an authorized user.
Use the key provided by the instructor.

### On Mac
```
$ export ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

### On Windows (PowerShell)
```
$ $env:ANTHROPIC_API_KEY="sk-ant-xxxxxxxxxxxxxxxx"
```

Replace `sk-ant-xxxxxxxxxxxxxxxx` with the actual key you received from the instructor.

> **Important:** Do not share your API key with anyone or post it on social media.
> Treat it with the same care as a credit card number.

---

## Step 6: Launch Claude Code

```
$ claude
```

Once it starts, you'll see a screen like this:

```
+------------------------------------------+
| * Welcome to Claude Code!                |
|                                          |
|   /help for help                         |
|                                          |
+------------------------------------------+

>
```

When the `>` prompt appears, you're ready to give instructions to Claude Code.

### Try saying hello

```
> Hello. What can you do?
```

If you get a response, everything is working correctly.

---

## Step 7: Create a Working Folder and Run a Task

Exit Claude Code first, then create a working folder.

### 7-1. Exit Claude Code

```
> /exit
```

### 7-2. Create a working folder and navigate to it

```
$ cd ~/Desktop
$ mkdir my-first-project
$ cd my-first-project
```

- `mkdir` = Short for "Make Directory." It creates a new folder.
- This creates a folder called `my-first-project` on your Desktop.

### 7-3. Restart Claude Code

```
$ claude
```

### 7-4. Assign a task

Choose one of the templates below and customize it for your own work.
You can also use them as-is.

#### Template A: Industry Research

```
> Research the top 5 trends in the SaaS industry for 2025 and compile them
  into a file called report.md. Include an overview and specific examples
  for each trend.
```

#### Template B: Comparative Analysis

```
> Create a table comparing the pros and cons of remote work vs. office work
  and save it as comparison.md.
```

#### Template C: Training Plan

```
> Create a training plan for a new employee business etiquette workshop
  and save it as training-plan.md. Assume a 60-minute session.
```

### 7-5. Respond to permission prompts

During its work, Claude Code may display a confirmation like this:

```
Claude wants to create file: report.md
Allow? (y/n)
```

This is asking "Is it okay to create this file?"
Type `y` and press Enter.

> **This is a safety feature.** To prevent the AI agent from performing
> dangerous operations on its own, it always asks for human permission.

### 7-6. Review the deliverable

Once the work is complete, check that the file has been created.

```
$ ls
report.md
```

Open the `my-first-project` folder on your Desktop
to confirm the file was actually created.
Double-click it to read the contents.

### 7-7. Give additional instructions (optional)

If you want to modify the file's content, you can give Claude Code follow-up instructions.

```
> Add more specific data to the third trend in report.md.
```

```
> Reorganize the content of report.md into a table format.
```

---

## Step 8: Create a CLAUDE.md File

### What is CLAUDE.md?

CLAUDE.md is a "briefing document" for the AI agent.
When placed in the project folder (working folder), Claude Code automatically reads it every time it starts.

```
my-first-project/           <-- Project folder (the AI's workspace)
|-- CLAUDE.md               <-- Briefing document for the AI (read automatically every time)
|-- report.md               <-- Deliverable created by the AI
+-- ...
```

**Benefit:** You won't need to repeat instructions like "write in English" or "include citations" every time.

### Let's create a CLAUDE.md

Ask Claude Code to create one with the following instruction:

```
> Create a CLAUDE.md for this project.
  Include the following:
  - Your role: Business research assistant
  - All deliverables should be written in English
  - File format: Markdown
  - Always cite sources in research
```

### Example CLAUDE.md

```markdown
# Project Settings

## Your Role
You are a research assistant for the marketing department.

## Work Rules
- All deliverables must be written in English
- Use Markdown (.md) file format
- Always cite sources (references) for research content
- Use tables and lists to improve readability

## Target Audience
Marketing department managers (non-technical)
```

> **Tip:** You can freely edit CLAUDE.md.
> Customize it to match your project and workflow.

---

## Today's Summary

### What We Learned

| Topic | Key Takeaway |
|-------|-------------|
| **AI Chat vs. AI Agent** | Chat = a consultant / Agent = a team member you can delegate to |
| **Terminal** | A text-based interface for operating your computer. Just remember `pwd`, `ls`, and `cd` |
| **Claude Code** | An AI agent that runs on your own computer. Launch with `claude` |
| **Permission prompts** | A safety feature where the AI asks "May I proceed?" |
| **CLAUDE.md** | A briefing document for the AI. Automatically read every time |

### Command Quick Reference

```
pwd                                   ... Show current location
ls                                    ... List folder contents
cd foldername                         ... Move to a folder
cd ..                                 ... Go up one level
mkdir foldername                      ... Create a new folder
node -v                               ... Check Node.js version
npm install -g @anthropic-ai/claude-code  ... Install Claude Code
claude                                ... Launch Claude Code
/exit                                 ... Exit Claude Code
```

---

## Next Session Preview

In the next session (Session 2), you'll learn about **practical business tasks
with AI agents** — including research and document creation.

You'll learn how to effectively instruct an AI agent to produce
high-quality deliverables for real work scenarios.

### Homework (Optional)

- [ ] Use Claude Code to run two tasks related to your own work
- [ ] Customize the contents of CLAUDE.md to your liking
- [ ] Check the `my-first-project` folder on your Desktop to see what files were created

### If You Get Stuck

| Situation | Solution |
|-----------|----------|
| Accidentally closed the terminal | Reopen the terminal. You'll need to set up the API key again (Step 5) |
| Claude Code won't start | Type `claude` to check. If you get an error, reset your API key |
| Forgot a command | Refer to the "Command Quick Reference" in this handout |
| Can't find your files | Check the `my-first-project` folder on your Desktop |
