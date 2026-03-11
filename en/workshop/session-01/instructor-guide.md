# Session 1: Foundations — Understanding and Running an AI Agent

## Session Overview

| Item | Details |
|------|---------|
| **Duration** | 120 minutes |
| **Objective** | Understand the difference between AI chat and AI agents, lower the psychological barrier to using the terminal, and get Claude Code running on your own PC |
| **Prerequisites** | Completed Session 0, bring a Mac/Windows/Linux PC, internet connection |
| **Participant Goals** | Install Claude Code, issue your first instruction, and verify the output. Understand the role of CLAUDE.md |

---

## Pre-Session Preparation (For Instructors)

### Required Environment

1. **Verify participant PC requirements in advance**
   - Node.js v18 or higher must be installed
   - Terminal (Mac: Terminal.app, Windows: PowerShell or Windows Terminal) must be available
   - Prepare Anthropic API keys for all participants **or** ask participants to obtain them in advance

2. **API Key Preparation (Important)**
   - Option A: Temporarily distribute organization API keys to participants (revoke after the workshop)
   - Option B: Ask participants to create an Anthropic account and obtain an API key in advance
   - In either case, communicate key handling precautions (do not share with others, do not post publicly)

3. **Pre-Setup Email (Send one week before Session 1)**
   ```
   Subject: [Session 1 Preparation] Please Install Node.js

   In our next Session 1, you will be running an AI agent on your own PC.
   Please install Node.js in advance.

   ▼ Installation Steps
   1. Go to https://nodejs.org/
   2. Click the button labeled "LTS" to download
   3. Open the downloaded file and follow the on-screen instructions to install

   ▼ Verifying the Installation
   - Mac: Open the "Terminal" app, type node -v and press Enter
   - Windows: Open "PowerShell", type node -v and press Enter
   - If a version number (e.g., v20.11.0) is displayed, you're all set
   ```

4. **Materials to distribute on the day**
   - participant-handout.md (printed or digital)
   - API keys (individually printed on paper, or sent via chat individually)

### Rehearsal Checklist

- [ ] Re-verify the Node.js installation steps on your own PC
- [ ] Confirm that `npm install -g @anthropic-ai/claude-code` completes successfully
- [ ] Confirm that the `claude` command launches
- [ ] Run a simple research task with Claude Code and measure the time it takes
- [ ] Rehearse the CLAUDE.md creation demo once
- [ ] Confirm that the Wi-Fi connection is stable
- [ ] Verify projector/screen sharing functionality
- [ ] Check how the screens look on both Windows and Mac (prepare both if possible)

---

## Timetable

### 1. Review of the Previous Session and Homework Sharing (10 minutes)

**Sample instructor dialogue:**

> "In the previous Session 0, you experienced how writing a request
> in a GitHub Issue caused an AI agent to automatically research
> and create a report for you.
> I think many of you thought, 'That's amazing!'
> For your homework, you were asked to think of tasks you could
> delegate to an AI agent — would anyone like to share?"

**What to do:**
- Have 2-3 participants share their homework (volunteers only, no cold-calling)
- Note the task examples on a whiteboard or in chat
- Declare today's goal: "Today, we'll understand how that AI agent works and learn to run it on your own PC"

**Common stumbling blocks and remedies:**
- If many participants didn't do the homework → Don't criticize; ask them to spend 30 seconds thinking of ideas on the spot
- If someone says "I can't think of any tasks" → Offer examples like "writing a daily report," "summarizing meeting minutes," or "drafting an email"

---

### 2. AI Chat vs. AI Agent — What's the Difference? (15 minutes)

**Sample instructor dialogue:**

> "First, let's clarify the difference between the ChatGPT or Claude
> chat features you normally use and the 'AI agent' you experienced
> last time.
>
> The simplest analogy is this:
> **AI Chat = an advisor.** You ask a question and it answers. But you're the one who does the actual work.
> **AI Agent = a team member you can delegate work to.** You hand off a task, and it thinks on its own, does the work itself, and delivers a finished product."

**Content to explain on a slide or whiteboard:**

```
┌─────────────────────────────────────────────────────────┐
│                      AI Chat                            │
│                                                         │
│  You: "Think of a structure for a proposal"             │
│  AI:  "1. Background 2. Problem 3. Proposal            │
│        4. Expected Results would be good"               │
│  You: (Open Word and start writing yourself)            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                     AI Agent                            │
│                                                         │
│  You: "Create a proposal"                               │
│  AI:   ① Understand the task                            │
│         ② Gather necessary information                  │
│         ③ Plan the structure                            │
│         ④ Create the file                               │
│         ⑤ "Done — please review"                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Explain the 3 key characteristics of an agent:**

1. **Autonomy** — It can make its own decisions and proceed without asking a human at every step
2. **Tool use** — It can use "tools" such as creating files, searching the web, and executing commands
3. **Multi-step execution** — For a single request, it can automatically execute multiple steps in sequence

**Sample instructor dialogue:**

> "Think back to your experience last time.
> All you wrote in the Issue was a request like 'Research this topic.'
> The AI agent received that, did the research on its own, created the file on its own,
> and submitted a Pull Request saying 'Please review.'
> This is exactly the combination of autonomy, tool use, and multi-step execution in action."

**Common stumbling blocks and remedies:**
- "So what's really different from chat?" → "In chat, the answer exists only within the conversation. An agent can go beyond the conversation — it can create files, browse the web, and more. That's the key difference."
- "Is the agent always better?" → "No. If you just want to ask a quick question, chat is easier. Agents shine when you want to delegate a substantial piece of work."

---

### 3. Terminal Basics — Not Scary, Just Controlling Your PC with Text (15 minutes)

**Sample instructor dialogue:**

> "From here on, we'll use your own PCs.
> First, you'll open something called a 'terminal,' but
> I want to tell you one thing first.
>
> **The terminal is not scary.**
>
> Normally, you double-click a folder with your mouse to open it, right?
> The terminal just does that with text (typed characters).
> It's doing exactly the same thing. It just looks different."

**Step 1: Open the Terminal (5 minutes)**

The instructor screen-shares and works through it with participants.

- **Mac**: "Open Spotlight (⌘ + Space), type 'Terminal', and press Enter"
- **Windows**: "Search for 'PowerShell' in the Start menu and open it"

**Sample instructor dialogue:**

> "Did you get a black screen (or white screen)?
> That's the terminal. It looks like a hacker's screen from a movie, but what we'll do is simple."

**Step 2: Try 3 Commands (10 minutes)**

Go through each one: instructor demos → participants execute → verify results.

**Command 1: `pwd` (Check where you are)**

> "Your computer has many folders.
> The command to check which folder you're currently in is `pwd`.
> It stands for 'Print Working Directory.'
> Type it and press Enter."

```
$ pwd
/Users/tanaka
```

> "Did you see something like `/Users/tanaka`?
> This means 'You are currently in tanaka's home folder.'"

**Command 2: `ls` (List files in the current location)**

> "Next, let's look at the contents of the folder you're in.
> Type `ls` and press Enter.
> It stands for 'List.'"

```
$ ls
Desktop    Documents    Downloads    Music    Pictures
```

> "You see familiar folder names, right?
> These are the same things you see in Finder or File Explorer."

**Command 3: `cd` (Move to a folder)**

> "Finally, let's move into a folder.
> Type `cd Desktop` and press Enter.
> It stands for 'Change Directory.'"

```
$ cd Desktop
$ pwd
/Users/tanaka/Desktop
```

> "If you check with `pwd` again, you'll see that your location has changed to Desktop.
> You just did the same thing as double-clicking to open a folder, but with text."

**Also explain how to go back:**

> "To go back up one folder, type `cd ..` — that's two dots."

**Sample instructor dialogue (summary):**

> "The commands you need to remember today are just these three.
> `pwd` = Where am I?, `ls` = What's here?, `cd` = Move.
> That's all there is to basic terminal navigation.
>
> And one more important thing:
> **Even if you type a wrong command in the terminal, your PC won't break.**
> If you type a command that doesn't exist, it'll just say 'command not found.'
> Feel free to experiment."

**Common stumbling blocks and remedies:**

| Problem | Remedy |
|---------|--------|
| "Terminal" can't be found on Mac | Guide them to Finder → Applications → Utilities → Terminal |
| Garbled characters on Windows | Change the PowerShell font settings, or suggest installing Windows Terminal |
| `ls` shows nothing | The folder may be empty. Move to another folder like `cd Desktop` and try again |
| Typed the command wrong | Tell them "'command not found' is fine. Just type it correctly again" |
| Terminal font is too small | Point out that Ctrl/Cmd + "+" can zoom in |

---

### 4. Installing and First Launch of Claude Code (20 minutes)

**Sample instructor dialogue:**

> "Now it's time to install the AI agent 'Claude Code' on your PC.
> Type the command I'm about to say into the terminal."

**Step 1: Verify Node.js (2 minutes)**

```
$ node -v
v20.11.0
```

> "If a version number appears, you're good.
> If you see 'command not found,' please raise your hand.
> We'll install it together."

**Handling participants who don't have Node.js:**
- The expectation is that they installed it from the advance instructions, but plan for day-of support
- Download and install the LTS version from https://nodejs.org/
- After installation, the terminal needs to be closed and reopened

**Step 2: Install Claude Code (5 minutes)**

```
$ npm install -g @anthropic-ai/claude-code
```

> "`npm` is like an 'app store' for Node.js.
> This command downloads and installs the Claude Code app from the internet.
> It takes a little while, so let's wait."

**Sample instructor dialogue (while waiting for installation):**

> "You'll see lots of text scrolling on the screen — this is the installation progress.
> As long as you don't see errors in red text, everything is fine."

**Step 3: Set the API Key (5 minutes)**

```
$ export ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

> "An API key is like a password that lets Claude Code
> prove to the server that it's an authorized user.
> Please enter the key I'm about to distribute.
>
> **Important: Do not share this key with anyone or post it on social media.**
> It's as sensitive as a credit card number."

- Distribute the API key to participants (on paper, via chat, or temporarily displayed on a slide)
- Note that on Windows the command is `$env:ANTHROPIC_API_KEY="sk-ant-xxxxxxxxxxxxxxxx"`

**Step 4: Launch Claude Code (5 minutes)**

```
$ claude
```

> "Type `claude` and press Enter to start Claude Code."

What the screen looks like on successful launch:
```
╭──────────────────────────────────────────╮
│ ✻ Welcome to Claude Code!                │
│                                          │
│   /help for help                         │
│                                          │
╰──────────────────────────────────────────╯

>
```

> "When you see this `>` prompt, you're ready to give instructions to Claude Code.
> Congratulations! The AI agent is now running on your PC."

**Step 5: Your First Interaction (3 minutes)**

> "Try saying something to it. For example, type this:"

```
> Hello. What can you do?
```

> "Did you get a response?
> This is still just the 'chat' stage.
> In the next section, we'll experience the true power of the agent."

**Common stumbling blocks and remedies:**

| Problem | Remedy |
|---------|--------|
| `npm: command not found` | Node.js is not installed. Follow the advance setup instructions to reinstall |
| Permission error during npm install (Mac) | Re-run with `sudo npm install -g @anthropic-ai/claude-code`. Explain that a password is required |
| Permission error during npm install (Windows) | Re-run PowerShell with "Run as administrator" |
| API key error | Check for extra spaces before or after the key. Try wrapping it in quotes |
| `claude: command not found` | Close and reopen the terminal. Or run with full path: `npx @anthropic-ai/claude-code` |
| Authentication error after launch | Verify the API key is set correctly with `echo $ANTHROPIC_API_KEY` |

---

### 5. Your First Task (30 minutes)

**Sample instructor dialogue:**

> "Here's where the real action begins. Let's give Claude Code some 'work' to do.
> In Session 0 we did this on GitHub, but this time we'll issue
> instructions directly to the AI agent right on your own PC."

**Step 1: Prepare a Working Folder (5 minutes)**

Exit Claude Code with `/exit`, then create a working folder.

```
$ cd ~/Desktop
$ mkdir my-first-project
$ cd my-first-project
```

> "We've created a folder called `my-first-project` on the Desktop.
> `mkdir` stands for 'Make Directory' — it creates a folder.
> Now let's start Claude Code inside this folder."

```
$ claude
```

**Step 2: Assign a Research Task (10 minutes)**

> "Now let's ask Claude Code to do some research.
> Use one of the examples below as a reference, and try making a request
> related to your own work."

**Task Example A:**
```
> Research the top 5 trends in the SaaS industry for 2025 and compile them
  in a file called report.md. Include an overview and specific examples
  for each trend.
```

**Task Example B:**
```
> Create a comparison table of the pros and cons of remote work vs.
  office work and save it in a file called comparison.md.
```

**Task Example C:**
```
> Create a training plan for a business etiquette workshop for new
  employees and save it in a file called training-plan.md.
  Assume a 60-minute session.
```

**Step 3: Experience and Explain Permission Prompts (5 minutes)**

> "As Claude Code works, you may see confirmation messages like
> 'May I create a file?'
> This is called a **permission prompt** —
> it's a safety mechanism to prevent the AI agent from
> performing dangerous operations without your consent."

```
Claude wants to create file: report.md
Allow? (y/n)
```

> "Type `y` (Yes) and press Enter to continue.
> This is a critically important design principle.
> AI agents are powerful, but the final decision is always made by a human.
> It will always ask, 'Is this okay?'"

**Step 4: Review the Output (5 minutes)**

```
$ ls
report.md
```

> "If you check with `ls`, you'll see the file has been created.
> Open the `my-first-project` folder in Finder or File Explorer
> and verify that the file actually exists.
>
> Double-click it and read the contents.
> This is a real file created on your PC.
> In Session 0 it was on GitHub, but this time it happened right on your own machine."

**Step 5: Try Giving Follow-Up Instructions (5 minutes)**

> "If you see something you'd like changed in the file, you can give Claude Code additional instructions."

```
> Please add more specific data about the 3rd trend in report.md.
```

> "This way, you can refine the output through back-and-forth dialogue.
> It's the same thing as commenting on a PR in Session 0, but done in the terminal."

**Sample instructor dialogue (summary):**

> "Let's summarize what we just did.
> 1. Created a folder
> 2. Launched Claude Code
> 3. Assigned a task in plain English
> 4. The AI agent created a file
> 5. Reviewed it and gave follow-up instructions
>
> What we did on the GitHub interface in Session 0,
> we've now done directly in the terminal on our own PC."

**Common stumbling blocks and remedies:**

| Problem | Remedy |
|---------|--------|
| Claude Code response is slow | Explain: "The AI is thinking. More complex tasks take longer" |
| Response is in a different language than expected | Add "Please respond in English" as a follow-up, or include "in English" in the original instruction |
| File was not created | Check Claude Code's output. If there's an error, ask participants to consult the instructor |
| Unsure what to choose at the permission prompt | Say "For file creation and reading, it's generally safe to choose Yes" |
| Participant can't think of a task | Offer the task examples and let them use one as-is |

---

### 6. Introducing CLAUDE.md (15 minutes)

**Sample instructor dialogue:**

> "Finally, let me introduce a feature that helps you use Claude Code even more effectively.
> It's a file called **CLAUDE.md**.
>
> When a new member joins your team at work,
> you give them a 'handover document' or 'operations manual,' right?
> CLAUDE.md is a handover document for the AI agent."

**Step 1: The Concept of a Project Folder (3 minutes)**

> "Claude Code recognizes the folder where it was launched as its 'workspace.'
> It can read and write files within that folder.
> We call this the 'project folder.'
>
> The `my-first-project` folder you created earlier is exactly that — a project folder."

```
my-first-project/           ← Project folder (the AI's workspace)
├── CLAUDE.md               ← Handover document for the AI
├── report.md               ← Output created by the AI
└── (other files)
```

**Step 2: Explain the Role of CLAUDE.md (5 minutes)**

> "If you write instructions in CLAUDE.md, Claude Code will automatically read them every time.
> This means you no longer need to repeat the same instructions each time.
>
> For example, you can write things like this:"

```markdown
# Project Settings

## Your Role
You are a research assistant for the marketing department.

## Working Rules
- Always create deliverables in English
- Use Markdown (.md) file format
- Always cite sources for research content
- Use tables and lists to make content readable

## Target Audience
Marketing department managers (non-technical)
```

> "If you set this up, you won't need to say 'write in English' or
> 'include sources' every time — it will follow these rules from the start.
>
> The repository we used in Session 0 also had a CLAUDE.md file.
> That's why the AI agent was able to produce deliverables in the right format."

**Step 3: Write a CLAUDE.md Together (7 minutes)**

> "Now let's create a CLAUDE.md in the `my-first-project` folder.
> We'll ask Claude Code to create it for us."

If Claude Code is not running, restart it:
```
$ cd ~/Desktop/my-first-project
$ claude
```

Give Claude Code the instruction:
```
> Please create a CLAUDE.md for this project.
  Include the following:
  - Your role: Business research assistant
  - Create deliverables in English
  - File format: Markdown
  - Always cite sources in research
```

> "CLAUDE.md has been created.
> From now on, whenever you start Claude Code in this folder,
> these settings will be loaded automatically.
>
> Write the handover document once, and the AI agent will always remember it.
> That's the power of CLAUDE.md."

**Sample instructor dialogue (advanced tip):**

> "You can freely edit CLAUDE.md.
> If the project changes, just update the handover document.
> In future sessions, we'll learn more practical ways to write CLAUDE.md."

**Common stumbling blocks and remedies:**

| Problem | Remedy |
|---------|--------|
| CLAUDE.md name is wrong (claude.md, Claude.md, etc.) | Explain that the uppercase name matters. Since Claude Code can create it automatically, there's no need to create it manually |
| Don't know what to write | Say "Start with just three things: role, language, and format — that's enough" |
| Don't understand the concept of a project folder | Point concretely: "The new folder you created on the Desktop = the project folder" |

---

### 7. Review and Q&A (15 minutes)

**Discussion prompts (5 minutes):**

1. **Comprehension check**: "Can anyone explain the difference between AI chat and AI agent in your own words?"
2. **Impressions**: "What was your impression of using the terminal for the first time? Was it less scary than you expected?"
3. **Surprises**: "What left the biggest impression when you actually ran Claude Code?"

**Points for the instructor to summarize (5 minutes):**

> "Let's review what we learned today."

- **AI chat and AI agents are different things**
  - Chat = conversation partner (answers you, but doesn't do the work)
  - Agent = team member (thinks, does the work, and delivers output)

- **The terminal is just text-based operation**
  - `pwd` = Where am I? / `ls` = What's here? / `cd` = Move
  - Nothing breaks if you make a mistake

- **Claude Code is an AI agent that runs on your own PC**
  - The same thing as the GitHub experience in Session 0, executed directly on your local PC
  - Permission prompts prevent it from doing anything dangerous on its own

- **CLAUDE.md is a handover document for the AI**
  - Place it in the project folder and it's automatically read every time
  - Eliminates the need to repeat the same instructions

**Q&A (5 minutes):**

Common questions and sample answers:

| Question | Answer |
|----------|--------|
| "Does the API key cost money?" | "Yes, costs are incurred based on AI usage. For today's exercises, it's roughly a few cents to a dollar. During the workshop, we're using the organization's key, so there's no personal cost" |
| "Do I need to keep Claude Code running all the time?" | "No, you launch it when you need it and exit with `/exit` when you're done" |
| "Where are the created files saved?" | "They're saved in the folder where you launched Claude Code (the project folder). They're regular files, so you can open them from Finder or File Explorer" |
| "Can I use it offline?" | "No, Claude Code communicates with AI servers over the internet, so an online connection is required" |
| "Is it secure?" | "Claude Code asks for confirmation before file operations. Also, as long as you manage your API key properly and avoid including confidential information in prompts, it can be used safely" |

---

### Next Session Preview and Closing

**Sample instructor dialogue:**

> "Today, we opened the terminal, installed Claude Code,
> and reached the point of delegating work to an AI agent
> on your own PC for the first time.
>
> You're probably starting to see how the 'amazing' experience
> from Session 0 actually works behind the scenes.
>
> In the next Session 2, we'll learn about file management (Git)
> and how to use AI agents in a team setting.
> It's about properly managing and accumulating
> the deliverables that the AI agent creates."

**Homework (optional):**
- Run 2 tasks related to your own work using Claude Code
- Customize the contents of CLAUDE.md to suit your needs
- Before the next session, check the files Claude Code created in the `my-first-project` folder on your Desktop

---

## Appendix A: Node.js Installation Steps (Detailed)

### Mac

1. Go to https://nodejs.org/
2. Click the "LTS" download button
3. Open the downloaded `.pkg` file
4. Follow the installer instructions (click "Continue" and "Agree" for everything)
5. Open Terminal and verify with `node -v`

### Windows

1. Go to https://nodejs.org/
2. Click the "LTS" download button
3. Open the downloaded `.msi` file
4. Follow the installer instructions (click "Next" and "I accept" for everything)
5. **Important: After installation, close PowerShell and reopen it**
6. Verify with `node -v`

## Appendix B: Persisting the API Key Setting (Reference)

During the workshop, we set the key each time with the `export` command,
but the API key setting is lost when you close the terminal.
If you want to persist it, use the following methods (instructors can share during follow-up):

### Mac (zsh)
```bash
echo 'export ANTHROPIC_API_KEY=sk-ant-xxxxxxxx' >> ~/.zshrc
source ~/.zshrc
```

### Windows (PowerShell)
```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "sk-ant-xxxxxxxx", "User")
```

> **Note**: Only share this setup for participants who want to continue using it for self-study.
> Manual setup each time is sufficient during the workshop.

## Appendix C: Troubleshooting Reference

| Problem | Cause | Remedy |
|---------|-------|--------|
| Error on `node -v` | Node.js not installed | Install using the steps in Appendix A |
| Permission error on `npm install -g` | Insufficient permissions | Mac: add `sudo` at the beginning / Windows: run as administrator |
| `claude` gives "command not found" | Path not configured | Restart the terminal, or use `npx @anthropic-ai/claude-code` |
| API key error | Key setting mistake | Check the set value with `echo $ANTHROPIC_API_KEY` |
| Claude Code not responding | Network issue | Check Wi-Fi connection, try a different network |
| Installation is extremely slow | Network bandwidth | Try tethering, or show a demo on the instructor's PC |

## Appendix D: Instructor Checklist (Day Of)

- [ ] Prepare printed Node.js installation instructions
- [ ] Prepare API keys for each participant (individually on paper or via chat)
- [ ] Final confirmation that Claude Code works on your own PC
- [ ] Be prepared to explain how to open the terminal on both Mac and Windows
- [ ] Verify Wi-Fi connection stability
- [ ] Verify projector/screen sharing functionality
- [ ] Prepare a backup mobile hotspot (optional)
- [ ] Prepare participant-handout.md for distribution (printed or digital)
