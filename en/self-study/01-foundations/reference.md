# Module 1: Reference Materials

> Supplementary materials for the main textbook (textbook.md).
> A quick-reference compilation of command lists, glossary, and FAQ for use during study or at work.

---

## Table of Contents

- [1. Claude Code Command Reference](#1-claude-code-command-reference)
- [2. Basic Terminal Commands](#2-basic-terminal-commands)
- [3. Glossary](#3-glossary)
- [4. FAQ (Frequently Asked Questions)](#4-faq-frequently-asked-questions)
- [5. Troubleshooting](#5-troubleshooting)
- [6. Useful Links](#6-useful-links)

---

## 1. Claude Code Command Reference

### Starting and Exiting

| Action | Command/Method | Description |
|------|-------------|------|
| Start | `claude` | Launch Claude Code in interactive mode |
| Start in a specific folder | `cd folder && claude` | Launch with a specific folder as the workspace |
| One-shot execution | `claude -p "instruction"` | Execute a single instruction and exit |
| Resume previous session | `claude --continue` | Continue from the previous session |
| Exit | `/exit` | Quit Claude Code |
| Exit (shortcut) | `Ctrl + C` x 2 | Force quit |
| Exit (shortcut) | `Ctrl + D` | End input and close Claude Code |

### Slash Commands

Enter commands starting with `/` during a conversation.

| Command | Function | When to use |
|---------|------|-----------|
| `/help` | Show help | When you're unsure how something works |
| `/clear` | Clear conversation history | When changing topics or if performance slows down |
| `/exit` | Exit | When you're done working |
| `/cost` | Show usage cost | When you want to check how much you've spent |
| `/status` | Show status | When you want to check connection or settings |
| `/model` | Switch model | When you want to use a different AI model |
| `/compact` | Summarize/compress conversation | When a long conversation is consuming too much context |
| `/init` | Initialize CLAUDE.md | To create a new CLAUDE.md for a project |

### Permission Prompt Responses

How to respond when Claude Code asks for confirmation before file operations or command execution.

| Response | Meaning | Recommended use |
|------|------|---------|
| `Y` (Enter) | Allow this time only | When you've reviewed the action and it looks good |
| `n` | Deny | When it's an unintended operation |
| `a` | Always allow this type of operation | When repeating a trusted type of operation |

### Startup Options

| Option | Description | Example |
|-----------|------|-----|
| `-p "instruction"` | Non-interactive mode (single execution) | `claude -p "Show me the contents of hello.txt"` |
| `--continue` | Resume previous session | `claude --continue` |
| `--model model-name` | Launch with a specific model | `claude --model claude-sonnet-4-20250514` |
| `--version` | Show version | `claude --version` |

---

## 2. Basic Terminal Commands

Terminal commands that are useful to know when using Claude Code.

### File and Folder Operations

| Command | Meaning | Example | Description |
|---------|------|--------|------|
| `pwd` | Show current folder | `pwd` | Stands for Print Working Directory |
| `ls` | List files | `ls` | Stands for List. For Mac/Linux |
| `ls -la` | Detailed file list | `ls -la` | Includes hidden files |
| `dir` | List files | `dir` | For Windows PowerShell |
| `cd` | Change folder | `cd Documents` | Stands for Change Directory |
| `cd ..` | Go up one folder | `cd ..` | `..` means "parent folder" |
| `cd ~` | Go to home folder | `cd ~` | `~` is shorthand for your home folder |
| `mkdir` | Create a folder | `mkdir new-folder` | Stands for Make Directory |
| `cat` | Display file contents | `cat hello.txt` | Outputs contents to the screen |
| `cp` | Copy a file | `cp a.txt b.txt` | Stands for Copy |
| `mv` | Move/rename a file | `mv old.txt new.txt` | Stands for Move |
| `rm` | Delete a file | `rm hello.txt` | Stands for Remove. **Caution: cannot be undone** |
| `rmdir` | Delete an empty folder | `rmdir old-folder` | Only works on empty folders |

### Reading a File Path

```
/Users/jsmith/Documents/project/report.md
  |      |        |        |       |
  |      |        |        |       +-- File name
  |      |        |        +-- Folder name
  |      |        +-- Folder name
  |      +-- Username
  +-- Root (top level)

  * On Windows: C:\Users\jsmith\Documents\project\report.md
```

### Common Path Shortcuts

| Shortcut | Meaning | Example (Mac) |
|------|------|----------------|
| `~` | Home folder | `/Users/jsmith` |
| `.` | Current folder | (where you are now) |
| `..` | Parent folder (one level up) | (the folder above) |
| `/` | Root (top level) | The very top of the disk |

---

## 3. Glossary

Sorted alphabetically.

| Term | Definition |
|------|------|
| **Account** | User registration information (ID + password) required to use a service. |
| **Agent** | A form of AI that autonomously plans and executes tasks. More advanced than a chatbot. |
| **API** | Application Programming Interface. A mechanism for software systems to communicate. Used behind the scenes when Claude Code communicates with Claude AI. |
| **API key** | A "key" (authentication credential) for using an API. Like a password — never share it with others. |
| **CLI** | Command Line Interface. A type of software operated by text input. Uses a keyboard instead of a mouse. |
| **Command** | An instruction typed into the terminal. Examples: `ls`, `cd`, `claude`. |
| **Context** | The range of information the AI retains within a conversation. As conversations grow longer, older information is gradually forgotten. |
| **CSV** | Comma-Separated Values. A text file where data is separated by commas. Can be opened in Excel or similar spreadsheet software. |
| **Current directory** | The "current working folder." The location Claude Code uses as its starting point. |
| **Directory** | Same as "folder." This term is commonly used in technical contexts. |
| **Environment variable** | A variable (value container) set in the operating system. Used for storing API keys, among other things. |
| **Git** | A system for recording and managing file change history. Tracks "when, who changed what." |
| **GitHub** | A web-based service for managing files with Git. Used for team collaboration. |
| **GUI** | Graphical User Interface. The standard software interface operated with a mouse or touch input. |
| **LLM** | Large Language Model. The foundational technology behind ChatGPT and Claude. An AI model trained on vast amounts of text. |
| **Markdown** | A lightweight syntax for structuring text with headings, bullet points, and more. `#` = heading, `-` = bullet point. |
| **Node.js** | A JavaScript runtime environment. Required as the foundation to run Claude Code. |
| **npm** | Node Package Manager. A software management tool for Node.js. Used to install Claude Code. |
| **Path** | A text string indicating the location of a file or folder. Like an address. Example: `/Users/jsmith/Documents/report.md` |
| **Pay-as-you-go** | A billing model where charges are based on the amount of usage. |
| **Prompt** | An instruction given to the AI. The better the prompt, the better the results. |
| **Repository** | The entire project folder managed by Git. Sometimes abbreviated as "repo." |
| **Root folder** | The top-level folder of a project. Where CLAUDE.md is placed. |
| **Terminal** | An application for giving text-based instructions to your PC. On Mac: "Terminal.app"; on Windows: "PowerShell" or "Windows Terminal." |
| **Token** | The unit in which AI processes text. Also used as a basis for billing. One English word is typically 1-2 tokens. |

---

## 4. FAQ (Frequently Asked Questions)

### General Questions

**Q: Is Claude Code free to use?**

A: No, Claude Code is not free. Charges apply through one of the following methods:
- Pay-as-you-go with an API key (pay for what you use)
- Monthly subscription via a Claude Pro/Max plan (flat rate)

For small tasks, a single interaction typically costs just a few cents. You can check your spending anytime with the `/cost` command.

---

**Q: Will my files be sent externally by Claude Code?**

A: Claude Code sends information needed for the requested task to Anthropic's API (AI processing servers). File contents may be transmitted for AI processing. Exercise caution when working with highly confidential files. Per Anthropic's privacy policy, data sent via the API is not used for model training.

---

**Q: Could I break my PC by making a mistake?**

A: Normal operations won't break your PC. Claude Code always asks for confirmation before important actions, so read the prompts carefully and make your judgment. If you're unsure, press "n" to deny and the operation will be canceled.

---

**Q: Can I use Claude Code without an internet connection?**

A: No. Claude Code communicates with Anthropic's API servers to function, so an internet connection is required.

---

**Q: Can I give instructions in English?**

A: Yes, you can give instructions in natural English. Claude Code understands English well. It also supports many other languages.

---

### Setup Questions

**Q: I'm getting an `EACCES` error with `npm install` (Mac)**

A: This is a permissions issue. Try one of the following:
1. Add `sudo` to the beginning of the command: `sudo npm install -g @anthropic-ai/claude-code`
2. Change npm's permission settings (advanced): Run `npm config set prefix ~/.npm-global` and then configure your PATH

---

**Q: The `claude` command says it's not found**

A: Check the following in order:
1. Close and reopen your terminal
2. Run `npm list -g @anthropic-ai/claude-code` to verify it's installed
3. If not installed, run `npm install -g @anthropic-ai/claude-code` again

---

**Q: Which version of Node.js do I need?**

A: Node.js v18 or higher is required. Check your version with `node -v`, and if it's outdated, install the latest LTS version from https://nodejs.org/.

---

### Usage Questions

**Q: Performance has slowed down during a long conversation**

A: AI has a limited "context window" (memory capacity). Try these solutions:
1. Use `/compact` to summarize and compress the conversation
2. Use `/clear` to reset the conversation
3. Start new topics in a new session

---

**Q: Where are the files Claude Code created?**

A: The folder where you launched Claude Code (the current directory) is the reference point. Unless otherwise specified, files are created in that folder. Use the `pwd` command to check your current folder.

---

**Q: Where should I put CLAUDE.md?**

A: Place it at the top level of your project folder (working folder) — the same folder where you launch Claude Code.

```
my-project/
  +-- CLAUDE.md    <- Here
  +-- data/
  +-- reports/
```

---

**Q: I accidentally deleted a file. Can I recover it?**

A: Files deleted with the `rm` command in the terminal are permanently deleted (they don't go to the Trash/Recycle Bin). However, there are some options:
- If the file was under Git version control, you can restore it with `git checkout` (covered in Module 2)
- Ask Claude Code to "recreate the file with the same content as the one I just deleted"

**Prevention**: Back up important files regularly. Using Git (version control) provides automatic backups.

---

**Q: How do I update Claude Code?**

A: Run the following command to update to the latest version:
```
npm update -g @anthropic-ai/claude-code
```

---

**Q: I want to use different CLAUDE.md files for different projects**

A: You can create a CLAUDE.md in each folder. Place a CLAUDE.md in each project folder, and when you launch Claude Code in that folder, the corresponding CLAUDE.md will be loaded.

```
project-a/
  +-- CLAUDE.md    <- Settings for Project A
  +-- ...

project-b/
  +-- CLAUDE.md    <- Settings for Project B
  +-- ...
```

---

## 5. Troubleshooting

Solutions organized by symptom for when problems arise.

### Installation Issues

| Symptom | Cause | Solution |
|------|------|--------|
| `npm: command not found` | Node.js is not installed | Install Node.js |
| `EACCES: permission denied` | Insufficient permissions (Mac/Linux) | Re-run with `sudo` |
| `claude` doesn't work after installation | Path not configured | Restart the terminal |
| Node.js version is too old | An outdated version is installed | Reinstall the latest LTS from https://nodejs.org/ |

### Runtime Issues

| Symptom | Cause | Solution |
|------|------|--------|
| Authentication error | API key expired or not set | Check and reissue on the Anthropic console |
| No response | Network or API outage | Check your internet connection. Try again later |
| Sudden slowdown | Context has grown too large | Run `/compact` or `/clear` |
| Unintended file created | Instructions were too vague | Press `n` to deny. Reissue a more specific instruction |
| Text appears garbled | Terminal character encoding settings | Set your terminal encoding to UTF-8 |
| `Rate limit exceeded` | Too many requests in a short time | Wait a few minutes and try again |

### Basic Steps When You're Stuck

1. **Read the error message**: Even if it's technical, searching for keywords often turns up a solution
2. **Ask Claude Code**: Try saying "I got this error: [error message]. What should I do?"
3. **Restart the terminal**: Simply closing and reopening it can resolve many issues
4. **Restart your PC**: A last resort that fixes most temporary problems

---

## 6. Useful Links

| Resource | URL | Description |
|---------|-----|------|
| Claude Code official documentation | https://docs.anthropic.com/en/docs/claude-code | Official usage guide |
| Anthropic Console | https://console.anthropic.com/ | API key management and usage tracking |
| Claude.ai | https://claude.ai/ | Browser-based Claude (chatbot) |
| Node.js official site | https://nodejs.org/ | Node.js download |
| Markdown syntax guide | https://www.markdownguide.org/ | Markdown writing reference |

---

## Quick Reference Card

A single-page summary of just the essentials. Handy to print and keep nearby.

```
+======================================================+
|          Claude Code Quick Reference                 |
+======================================================+
|                                                      |
|  [Starting & Exiting]                                |
|    Start:   claude                                   |
|    Exit:    /exit  or  Ctrl+C twice                  |
|    Resume:  claude --continue                        |
|                                                      |
|  [Common Slash Commands]                             |
|    /help    ... Show help                            |
|    /clear   ... Reset conversation                   |
|    /cost    ... Check cost                           |
|    /compact ... Compress conversation                |
|                                                      |
|  [Permission Prompt Responses]                       |
|    Y ... Allow    n ... Deny    a ... Always allow   |
|                                                      |
|  [Terminal Basics]                                   |
|    pwd      ... Show current location                |
|    ls       ... List files                           |
|    cd name  ... Change folder                        |
|    cd ..    ... Go up one level                      |
|    mkdir    ... Create folder                        |
|                                                      |
|  [Tips for Instructions]                             |
|    1. Be specific                                    |
|    2. Specify the format (Markdown, CSV, etc.)       |
|    3. Specify the file name                          |
|    4. Give additional instructions if needed         |
|                                                      |
+======================================================+
```
