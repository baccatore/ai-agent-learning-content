# Module 1: Foundations — Reference Materials

This document compiles the essential information you need to get started with Claude Code. Refer to it whenever you get stuck or need to look up a command.

> **Audience:** Tech-savvy individuals who have no prior experience with the CLI or programming

---

## Table of Contents

- [1. Claude Code Basic Commands (Slash Commands)](#1-claude-code-basic-commands-slash-commands)
- [2. Common Terminal Commands](#2-common-terminal-commands)
- [3. Glossary](#3-glossary)
- [4. FAQ (Frequently Asked Questions)](#4-faq-frequently-asked-questions)
- [5. Troubleshooting](#5-troubleshooting)

---

## 1. Claude Code Basic Commands (Slash Commands)

This is a list of slash commands you can use inside Claude Code. When you see the `>` prompt, type a command starting with `/` to use it.

### Basic Commands

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/help` | Display help | When you want to see available commands |
| `/status` | Show current session status | When you want to check the active model or working directory |
| `/exit` | Quit Claude Code | When you want to end your session |

### Conversation Management Commands

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/clear` | Clear conversation history | When you want to switch to a new topic |
| `/compact` | Summarize and compress conversation history | When a long conversation starts slowing things down |

### Settings & Information Commands

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/cost` | Show token usage and cost for the current session | When you want to check your usage |
| `/config` | View or change settings | When you want to review or modify Claude Code settings |
| `/model` | Switch the AI model | When you want to try a different model |

### Project Management Commands

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/init` | Interactively create a CLAUDE.md | When you want to set up initial project configuration |

### Startup Options

These are options you can add when launching `claude` from the terminal.

| Command | Description | Example |
|---------|-------------|---------|
| `claude` | Launch in normal interactive mode | `claude` |
| `claude -p "instruction"` | Execute a single instruction and exit | `claude -p "Tell me today's date"` |
| `claude --continue` | Resume from the previous session | `claude --continue` |
| `claude --version` | Display the version | `claude --version` |

### Responding to Permission Prompts

When Claude Code asks for confirmation before performing file operations or running commands, here is how to respond.

| Response | Meaning | When to Use |
|----------|---------|-------------|
| `y` or Enter | Allow this time only | When you have reviewed the action and it looks fine |
| `n` | Deny | When it is not the intended operation |
| `a` | Always allow this type of operation | When you want to auto-approve a trusted, recurring action |

### Keyboard Shortcuts (Inside Claude Code)

| Shortcut | Action |
|----------|--------|
| `Ctrl + C` twice | Force quit Claude Code |
| `Ctrl + D` | Exit Claude Code |
| `Esc` | Cancel the text you are typing |

> **Tip:** Anything starting with `/` is a slash command. Regular text in your language is treated as an instruction to Claude Code.

---

## 2. Common Terminal Commands

These are basic commands you use in the terminal (outside of Claude Code, on the regular command line). This is a curated list of the minimum commands that are useful to know when working with Claude Code.

### Check Where You Are

| Command | Meaning | Example | Sample Output |
|---------|---------|---------|---------------|
| `pwd` | Display the current folder location | `pwd` | `/home/yuichiro/Documents` |

> **What it stands for:** pwd = Print Working Directory

This command tells you "where you currently are" on your computer. If you ever feel lost, just run `pwd`.

### View Folder Contents

| Command | Meaning | Example | Description |
|---------|---------|---------|-------------|
| `ls` | List folder contents | `ls` | Shows files and folders in the current directory |
| `ls -la` | Show a detailed listing | `ls -la` | Shows all files including hidden ones, with size and modification dates |

> **What it stands for:** ls = List
>
> **On Windows:** In PowerShell, you can use `dir` instead of `ls` for the same result.

### Navigate Between Folders

| Command | Meaning | Example | Description |
|---------|---------|---------|-------------|
| `cd foldername` | Move into the specified folder | `cd Documents` | Move into the Documents folder |
| `cd ..` | Go up one folder | `cd ..` | Move to the parent folder |
| `cd ~` | Go to your home folder | `cd ~` | Move to your home folder |

> **What it stands for:** cd = Change Directory
>
> **Analogy:** Think of `cd` like taking an elevator in a building. `cd Documents` is "go to the Documents floor," `cd ..` is "go down one floor," and `cd ~` is "go back to the ground floor (home)."

### Work with Files and Folders

| Command | Meaning | Example | Description |
|---------|---------|---------|-------------|
| `mkdir` | Create a new folder | `mkdir my-project` | Creates a folder called my-project |
| `cat` | Display file contents | `cat memo.txt` | Shows the full contents of memo.txt |
| `cp` | Copy a file | `cp memo.txt memo-backup.txt` | Copies memo.txt as memo-backup.txt |
| `mv` | Move or rename a file | `mv old.txt new.txt` | Renames old.txt to new.txt |
| `rm` | Delete a file | `rm memo.txt` | Deletes memo.txt |

> **What they stand for:**
> - mkdir = Make Directory
> - cat = Concatenate (originally for joining files; commonly used to display file contents)
> - cp = Copy
> - mv = Move
> - rm = Remove

> **Warning:** Files deleted with `rm` do not go to the Recycle Bin and cannot be recovered. Always back up important files before deleting them.

### How to Read Paths

A path is the "address" of a file or folder.

```
/home/yuichiro/Documents/project/report.md
 |      |         |         |        |
 |      |         |         |        └── File name
 |      |         |         └── Project folder
 |      |         └── Documents folder
 |      └── User's folder
 └── Root (top level)
```

| Symbol | Meaning | Example |
|--------|---------|---------|
| `/` | Folder separator (`\` on Windows) | `/home/yuichiro` |
| `~` | Shorthand for the home folder | `~/Documents` = `/home/yuichiro/Documents` |
| `.` | Current folder | `./memo.txt` = memo.txt in the current folder |
| `..` | Parent folder (one level up) | `../` = parent folder |

### Keyboard Shortcuts (In the Terminal)

| Shortcut | Action |
|----------|--------|
| `Ctrl + C` | Interrupt the running command |
| `Ctrl + L` | Clear the screen (history is preserved) |
| Up arrow key | Recall the previous command |
| `Tab` | Auto-complete commands or file names |

> **Tip:** The `Tab` key auto-complete feature is incredibly handy. Type the first few characters of a file name and press `Tab` to fill in the rest automatically. It helps you avoid typos in file names.

---

## 3. Glossary

This glossary explains terms used in Claude Code and this course in a way that is accessible to non-engineers. Entries are sorted alphabetically.

| # | Term | Description |
|---|------|-------------|
| 1 | **AI Agent** | A system where AI autonomously performs "actions" such as file operations and command execution. Unlike a chat AI that "only answers," an agent "carries out tasks" |
| 2 | **API** | Stands for Application Programming Interface. A mechanism for software to exchange data with other software. Claude Code communicates with Anthropic's API behind the scenes |
| 3 | **API Key** | An authentication string (like a password) used to access an API. Must never be shared with others |
| 4 | **CLI** | Stands for Command Line Interface. A method of operating a computer by typing text with a keyboard. The opposite of GUI (see below) |
| 5 | **CLAUDE.md** | A configuration file for Claude Code. Write your project information and preferences here, and Claude Code will automatically read it on startup |
| 6 | **CSV** | Stands for Comma-Separated Values. A file format that stores data separated by commas. Can be opened in Excel or Google Sheets |
| 7 | **Git** | A tool for tracking the change history of files. It records "when, what, and how something was changed." Claude Code can integrate with Git inside a project |
| 8 | **GUI** | Stands for Graphical User Interface. A method of using a computer via mouse or touch interactions. Most everyday apps use a GUI |
| 9 | **Markdown** | A lightweight markup language that uses symbols like `#` and `*` to add headings, bullet points, and other formatting to text. Commonly used in Claude Code output. File extension: `.md` |
| 10 | **Node.js** | A runtime environment for the JavaScript programming language. Required software for running Claude Code |
| 11 | **npm** | Stands for Node Package Manager. A tool for installing and managing Node.js packages (software). Used to install Claude Code |
| 12 | **Current Directory** | The folder you are currently in. In the terminal, you are always inside some folder. You can check it with `pwd`. Claude Code uses this folder as its starting point |
| 13 | **File Extension** | The part at the end of a file name such as `.md`, `.txt`, or `.csv`. It indicates the file type. For example, `.md` is a Markdown file |
| 14 | **Command** | An instruction typed into the terminal. Examples: `ls`, `cd`, `claude`, etc. |
| 15 | **Context** | The scope and background of information that the AI is aware of. As a conversation grows longer, older information is gradually forgotten. Using CLAUDE.md allows you to keep important information always available |
| 16 | **Slash Command** | An operational command inside Claude Code that starts with `/`, such as `/help` or `/exit` |
| 17 | **Session** | The entire interaction from launching Claude Code to exiting it |
| 18 | **Terminal** | The application used to access the CLI. On Mac it is "Terminal.app"; on Windows it is "PowerShell" or "Windows Terminal" |
| 19 | **Directory** | Synonymous with "folder." In the terminal world, folders are called directories |
| 20 | **Token** | The smallest unit used by AI when processing text. In English, one token is roughly 3-4 characters. Tokens are used to measure usage and calculate costs |
| 21 | **Path** | A string that indicates the address (location) of a file or folder. Example: `/home/yuichiro/Documents/memo.txt` |
| 22 | **Prompt** | Has two meanings: (1) An instruction or question given to the AI. (2) An input-waiting symbol in the terminal, such as `>` or `$` |
| 23 | **Home Directory** | Your personal folder. On Mac: `/Users/username`; on Linux: `/home/username`. Can be abbreviated with `~` |

---

## 4. FAQ (Frequently Asked Questions)

### Q1: Is Claude Code free to use?

**A:** Installing Claude Code itself is free, but using it requires an Anthropic API key or a subscription plan. With an API key, you pay based on usage (pay-as-you-go). With a Claude Pro or Claude Max plan, you pay a flat monthly fee. You can run the `/cost` command during a session to check your current usage. Please refer to Anthropic's official website for the latest pricing.

### Q2: Where are files created by Claude Code saved?

**A:** They are saved in the folder where you launched Claude Code (the current directory). You can check the current folder with the `pwd` command. If you want to specify a save location, include the folder name or path in your instruction (e.g., "Save it in the reports folder" or "Save it to ~/Documents/").

### Q3: Is it safe to share confidential or personal information with Claude Code?

**A:** Information you input into Claude Code is sent to Anthropic's API servers for processing. According to Anthropic's privacy policy, data sent via the API is not used for model training. However, for highly confidential information or personal data, be sure to check your organization's security policy. We also recommend not including confidential information in your CLAUDE.md file.

### Q4: I gave it the wrong instruction. Can I undo it?

**A:** In some cases, Claude Code will ask for confirmation before creating or modifying files. At that point, you can choose `n` (No) to cancel. If the action has already been carried out, try asking Claude Code to "Undo the recent change." For projects using Git, you can also restore files from the change history.

### Q5: Claude Code seems to be stuck. What should I do?

**A:** Press `Ctrl + C` to interrupt, then restart with the `claude` command. If it stopped in the middle of a long process, resetting the history with `/clear` and trying again sometimes helps. You can also use `claude --continue` to resume from where the previous conversation left off.

### Q6: Even though I give instructions in my language, it sometimes responds in English.

**A:** Adding explicit language instructions in your CLAUDE.md, such as "Language: English" and "All responses should be in English," significantly increases the likelihood of responses in your preferred language. You can also add "Please respond in English" on the spot.

### Q7: Can Claude Code connect to the internet and retrieve the latest information?

**A:** Claude Code communicates with Anthropic's AI model to operate. Depending on your environment and tool settings, it may be able to fetch web pages. However, for real-time information (today's weather, the latest news, etc.), we recommend verifying AI responses against official sources rather than relying on them directly.

### Q8: Do I have to create a CLAUDE.md file?

**A:** It is not required. Claude Code works perfectly fine without a CLAUDE.md. However, having one saves you from repeating the same context every time and improves the quality and consistency of outputs. We strongly recommend creating one, especially if you repeatedly request the same type of task.

### Q9: Can I use Claude Code differently across multiple projects (folders)?

**A:** Yes, you can. By placing a separate CLAUDE.md in each folder, you can use Claude Code with different settings per folder. For example:

```
sales-reports/
  ├── CLAUDE.md    ← Settings for sales reports
  └── ...

marketing-content/
  ├── CLAUDE.md    ← Settings for marketing content
  └── ...
```

When you launch `claude` in each folder, the corresponding CLAUDE.md is automatically loaded.

### Q10: How do I update Claude Code?

**A:** Run the following command in your terminal:

```
npm update -g @anthropic-ai/claude-code
```

Regular updates let you benefit from new features and bug fixes. You can check your current version with `claude --version`.

---

## 5. Troubleshooting

Here are common issues and their solutions, organized by situation.

### 5.1 Cannot Install

| Symptom | Cause | Solution |
|---------|-------|----------|
| `npm: command not found` | Node.js is not installed | Download and install the LTS version from the [Node.js official website](https://nodejs.org/) |
| `node: command not found` | Terminal was not restarted after installing Node.js | Close the terminal and reopen it in a new window |
| `EACCES: permission denied` | No write permission to the installation directory (Mac/Linux) | Add `sudo` at the beginning of the command: `sudo npm install -g @anthropic-ai/claude-code` (you will be prompted for a password; nothing will appear on screen as you type, but this is normal) |
| Installation gets stuck partway through | Network connection issue | Check your internet connection. If you are on a corporate network with a proxy, consult your IT department |
| Error about an old Node.js version | An outdated version of Node.js is installed | Node.js v18 or later is required. Check your version with `node -v`; if it is old, reinstall the latest LTS version from the [official website](https://nodejs.org/) |

### 5.2 Cannot Launch

| Symptom | Cause | Solution |
|---------|-------|----------|
| `claude: command not found` | Installation is incomplete or the path is not configured | Re-run `npm install -g @anthropic-ai/claude-code`. If that does not help, restart your terminal |
| Authentication / API key errors | API key is not set or is invalid | Follow the instructions shown when launching `claude` to complete authentication. Check the status of your API key on the Anthropic console |
| `ECONNREFUSED` / connection error | No internet connection | Check your internet connection. Additional settings may be required in VPN or corporate proxy environments |

### 5.3 Issues During Use

| Symptom | Cause | Solution |
|---------|-------|----------|
| No response (long wait) | Processing is taking time, or a network issue | If there is no response after 3+ minutes, press `Ctrl + C` to interrupt and restart with `claude` |
| `Rate limit exceeded` error | API calls concentrated in a short period, hitting the rate limit | Wait a few minutes and try again |
| Suddenly becomes slow | Conversation has grown long and the context has become very large | Use `/compact` to compress the conversation, or `/clear` to reset it |
| Garbled characters | Terminal character encoding is not set to UTF-8 | Change the character encoding to UTF-8 in your terminal settings. This is usually not an issue on Mac/Linux. On Windows, additional settings may be required |
| Says it cannot find a file | Claude Code was launched from a different folder (current directory) than expected | Check the current working directory with `/status`. Exit, navigate to the correct folder with `cd`, and restart |
| Unintended files were changed or created | You accidentally approved a permission prompt without reading it | Ask Claude Code to "Undo the recent change." In the future, read the confirmation carefully before pressing `y` |

### 5.4 Windows-Specific Issues

| Symptom | Cause | Solution |
|---------|-------|----------|
| Commands do not work in PowerShell | Administrator privileges are required | Right-click PowerShell and select "Run as administrator," then try again |
| Script execution policy error | PowerShell security settings restrict script execution | Run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` in PowerShell, then try again |
| Path separators use `\` | Windows uses `\` (backslash) as the folder separator | Claude Code accepts both `/` (forward slash) and `\` in instructions, so there is no need to worry about this |

### 5.5 If Nothing Else Works

Try the following steps in order:

1. **Copy the error message**
   When an error appears, copy it exactly as shown. It is fine if it is in English.

2. **Ask Claude Code**
   If Claude Code is running, paste the error message and ask, "What is the cause and solution for this error?"

3. **Restart the terminal**
   Simply closing and reopening the terminal app sometimes resolves the issue.

4. **Restart your computer**
   Many temporary problems are resolved by restarting your computer.

5. **Check the official documentation**
   The [Claude Code official documentation](https://docs.anthropic.com/en/docs/claude-code) has the latest information and troubleshooting guides.

6. **Contact your IT department**
   For issues related to corporate networks, proxies, or security settings, please consult your IT department.

---

## Quick Reference Card

A one-page summary of the things you use every day. Print it out and keep it handy.

```
+----------------------------------------------------------+
|            Claude Code Quick Reference                    |
+----------------------------------------------------------+
|                                                          |
|  [Launch & Exit]                                         |
|    Launch:  claude                                       |
|    Exit:    /exit  or  Ctrl+C twice                      |
|    Resume:  claude --continue                            |
|                                                          |
|  [Common Slash Commands]                                 |
|    /help    ... Show help                                |
|    /status  ... Check status                             |
|    /clear   ... Reset conversation                       |
|    /compact ... Compress conversation                    |
|    /cost    ... Check usage costs                        |
|                                                          |
|  [Permission Prompt Responses]                           |
|    y ... Allow    n ... Deny    a ... Always allow        |
|                                                          |
|  [Basic Terminal Commands]                               |
|    pwd      ... Show current location                    |
|    ls       ... List files                               |
|    cd name  ... Move to folder                           |
|    cd ..    ... Go up one level                          |
|    cat name ... Display file contents                    |
|    mkdir    ... Create a folder                          |
|                                                          |
|  [Tips for Writing Instructions]                         |
|    1. Be specific about what you want created            |
|    2. Specify the file format (Markdown, CSV, etc.)      |
|    3. Specify the file name                              |
|    4. If it doesn't work, give additional instructions   |
|                                                          |
+----------------------------------------------------------+
```

---

## Revision History

| Date | Description |
|------|-------------|
| 2026-03-11 | Initial version |
