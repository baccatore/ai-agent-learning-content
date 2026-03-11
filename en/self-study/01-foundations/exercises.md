---
title: "Module 1: Exercise Workbook"
lang: "en"
category: "self-study"
module: "01-foundations"
contentType: "exercises"
order: 2
---
# Module 1: Exercise Workbook

> This exercise workbook corresponds to the main textbook (textbook.md).
> Work through the exercises after reading each chapter.
> Sample answers are provided in collapsible sections after each question.

---

## Chapter 1 Exercises: What Is an AI Agent?

### Exercise 1-1: Classifying Chatbot vs. Agent Use Cases

For each scenario below, determine whether it represents a "chatbot-style use case" or an "agent-style use case."

| # | Scenario | Chatbot? Agent? |
|---|---------|------|
| A | "What are some tips for writing a sales report?" | |
| B | "Combine the 3 CSV files in this folder and create a monthly summary table" | |
| C | "How should I use formal language in a business email?" | |
| D | "Analyze the past 6 months of sales data and create a trend report as a PDF" | |
| E | "Give me 3 different outline options for a presentation" | |

<details>
<summary>Sample answers (click to expand)</summary>

| # | Scenario | Classification | Reason |
|---|---------|------|------|
| A | "Tips for writing a sales report" | **Chatbot** | A simple question-and-answer knowledge query |
| B | "Combine 3 CSV files and create a monthly summary" | **Agent** | Involves file operations + multi-step execution |
| C | "How to use formal language in emails" | **Chatbot** | A simple question-and-answer knowledge query |
| D | "Analyze 6 months of sales data and create a PDF report" | **Agent** | Multi-step process: data loading -> analysis -> file creation |
| E | "Give me 3 presentation outline options" | **Chatbot** | Text generation only (no file operations) |

**Note**: Scenario E would become agent-style if you said "save the outline options as a file." A handy rule of thumb: "tell me / suggest" is chatbot-style, while "create / execute" is agent-style.

</details>

### Exercise 1-2: Thinking About the Division of Roles

Think of one task from your daily work. Break it down into "parts that humans should handle" and "parts that could be delegated to an AI agent."

**Template:**

```
Task name: _______________

[Parts humans should handle]
1.
2.
3.

[Parts that can be delegated to AI]
1.
2.
3.
```

<details>
<summary>Sample answers (click to expand)</summary>

```
Task name: Creating a monthly sales report

[Parts humans should handle]
1. Deciding the report's purpose and approach
2. Interpreting the numbers and making business judgments
3. Final review and approval

[Parts that can be delegated to AI]
1. Importing and aggregating CSV data
2. Creating charts
3. Drafting the report document based on a template
```

```
Task name: Creating competitive analysis materials

[Parts humans should handle]
1. Defining the analysis perspective and comparison criteria
2. Drawing strategic insights
3. Leading the internal presentation and discussion

[Parts that can be delegated to AI]
1. Gathering competitor information via web search
2. Organizing information and creating comparison tables
3. Drafting the document
```

**Key point**: "Judgment," "decision-making," and "interpersonal communication" belong to humans; "gathering," "organizing," and "drafting" belong to AI. There's no single right answer, so think about what fits your own work.

</details>

### Exercise 1-3: Explain the Three Characteristics of AI Agents

Imagine you're explaining AI agents to a non-technical colleague. Write 1-2 sentences for each of the three characteristics (autonomy, tool use, multi-step execution).

<details>
<summary>Sample answers (click to expand)</summary>

**Autonomy**: You just tell it what deliverable you want, and the AI figures out the steps and works through them on its own. Even when problems come up, it finds ways to handle them.

**Tool use**: It reads and writes files, searches the web, crunches numbers, and more — using a variety of tools to get work done. It's like how you switch between Excel, a browser, and email throughout the day.

**Multi-step execution**: For requests like "gather the data, analyze it, and compile it into a report," it can handle the entire multi-step workflow from start to finish in a single request.

</details>

---

## Chapter 2 Exercises: What Is Claude Code?

### Exercise 2-1: Choose the Right Tool

For each situation below, which tool would be the best fit? Choose from the options provided.

**Options**: Claude.ai / ChatGPT / Claude Code / GitHub Copilot

| # | Situation | Best tool |
|---|------|------------|
| A | I want a quick answer about how to write an email in a professional tone | |
| B | I want to automatically aggregate 100 CSV files in a folder | |
| C | I want code auto-completion while programming | |
| D | I want to build an automated monthly report generation workflow | |
| E | I want to brainstorm a new business idea | |

<details>
<summary>Sample answers (click to expand)</summary>

| # | Situation | Best tool | Reason |
|---|------|------------|------|
| A | Quick question about professional email writing | **Claude.ai or ChatGPT** | A simple Q&A you can do instantly in a browser |
| B | Auto-aggregate 100 CSV files | **Claude Code** | Requires direct file operations on your PC |
| C | Code auto-completion while programming | **GitHub Copilot** | Specialized for real-time code completion within an editor |
| D | Build an automated monthly report workflow | **Claude Code** | File operations + multi-step automation |
| E | Brainstorm a business idea | **Claude.ai or ChatGPT** | Ideal for interactive, conversational idea generation |

</details>

### Exercise 2-2: Think of Claude Code Use Cases

List 3 tasks in your work that Claude Code could help make more efficient. For each, describe "how you currently do it" and "how Claude Code could improve it."

**Template:**

```
Task 1: _______________
  Current approach:
  With Claude Code:

Task 2: _______________
  Current approach:
  With Claude Code:

Task 3: _______________
  Current approach:
  With Claude Code:
```

<details>
<summary>Sample answers (click to expand)</summary>

```
Task 1: Creating weekly activity reports
  Current approach: Manually pull numbers from a spreadsheet, copy/paste into a document (about 2 hours)
  With Claude Code: Delegate everything from data aggregation to report generation in one request (about 10 minutes)

Task 2: Customer data cleansing
  Current approach: Manually filter and fix data in a spreadsheet (half a day)
  With Claude Code: Request "remove duplicates," "fix inconsistencies," and "standardize formats" all at once

Task 3: Formatting meeting minutes
  Current approach: Transcribe notes into a document and format them (30 min - 1 hour)
  With Claude Code: Hand over the raw notes and ask "organize these into meeting minutes format"
```

**Key point**: "Repetitive tasks," "converting to a standard format," and "processing large amounts of data" are areas where Claude Code excels.

</details>

---

## Chapter 3 Exercises: Setup

### Exercise 3-1: Complete the Setup (Hands-on)

Follow the steps in the textbook and complete the checklist below.

```
Setup Checklist:

[  ] 1. Successfully opened the terminal
[  ] 2. node -v displayed a version number
         -> Version displayed: v__________
[  ] 3. Ran npm install -g @anthropic-ai/claude-code
[  ] 4. The claude command launched Claude Code
[  ] 5. Authentication (login) completed
[  ] 6. Sent a test message and received a response
```

<details>
<summary>Troubleshooting</summary>

**Q: `node -v` says `command not found`**
A: Node.js is not installed. Refer to "3.3 Installing Node.js" in the textbook.

**Q: `npm install` gives an error (Mac)**
A: Try `sudo npm install -g @anthropic-ai/claude-code`. When prompted for a password, enter your PC login password (nothing will appear on screen as you type — this is normal).

**Q: `claude` command says `command not found`**
A: Close your terminal, reopen it, and try running `claude` again.

**Q: The authentication page (browser) doesn't open**
A: Try manually copying and pasting the URL shown in the terminal into your browser.

</details>

### Exercise 3-2: Getting Comfortable with the Terminal

Run the following commands in your terminal and observe the results. This exercise uses the terminal on its own, without Claude Code.

| # | Command | Meaning | Write down the result |
|---|---------|------|----|
| 1 | `pwd` | Show the path (location) of the current folder | |
| 2 | `ls` | List files in the current folder | |
| 3 | `mkdir test-folder` | Create a folder called "test-folder" | |
| 4 | `ls` | List files again (test-folder should now appear) | |
| 5 | `cd test-folder` | Move into test-folder | |
| 6 | `pwd` | Confirm the new location | |

> **Windows (PowerShell) note**: You can use `dir` instead of `ls` for the same result. `pwd` works as-is in PowerShell.

<details>
<summary>Sample answers (click to expand)</summary>

Results vary by environment, but should look roughly like this:

```
# 1. pwd result example (Mac)
/Users/jsmith

# 2. ls result example
Desktop    Documents    Downloads    Music    Pictures

# 3. mkdir test-folder
(No output means success)

# 4. ls result example
Desktop    Documents    Downloads    Music    Pictures    test-folder

# 5. cd test-folder
(No output means success)

# 6. pwd result example
/Users/jsmith/test-folder
```

**What to check**: In step 4, `test-folder` should appear in the list. In step 6, the path should end with `test-folder`.

**Cleanup**: To remove the folder you created in this exercise:
```
cd ..
rmdir test-folder
```
(`cd ..` means "go up one folder," and `rmdir` means "remove directory")

</details>

---

## Chapter 4 Exercises: Basic Operations

### Exercise 4-1: Your First File Creation (Hands-on)

Launch Claude Code and try giving the following instructions.

**Task**: Create a "self-introduction card" text file

1. First, create a working folder and launch Claude Code.
   ```
   mkdir ~/claude-exercises
   cd ~/claude-exercises
   claude
   ```

2. Give Claude Code the following instruction.
   ```
   Create a file called "self-introduction.md".
   Make it a self-introduction card with the following items:
   - Name (Jane Smith)
   - Department (Marketing)
   - Strengths (Data analysis, project planning)
   - Hobbies (Reading, running)
   Please format it nicely using Markdown.
   ```

3. When the permission prompt appears, review the content and press "Y."

4. Verify the created file's contents.
   ```
   Show me the contents of the file you just created
   ```

<details>
<summary>Sample answers (click to expand)</summary>

Example of a file Claude Code might create:

```markdown
# Self-Introduction Card

## Basic Information

| Item | Details |
|------|------|
| Name | Jane Smith |
| Department | Marketing |

## Strengths

- Data analysis
- Project planning

## Hobbies

- Reading
- Running
```

**What to check**:
- The file was created
- A permission prompt appeared and the file was created after you approved
- It uses Markdown format (`#` for headings, `-` for bullet points)

**Note**: Claude Code's output may vary each time. Even if the layout differs from the example above, it's fine as long as the content is there.

</details>

### Exercise 4-2: Instruction Improvement Training

Rewrite each "vague instruction" below into a "specific instruction" that Claude Code can easily understand.

| # | Vague instruction | Your improved, specific instruction |
|---|--------------|---|
| 1 | "Make a nice-looking document" | |
| 2 | "Summarize the data" | |
| 3 | "Write an email" | |

<details>
<summary>Sample answers (click to expand)</summary>

| # | Vague instruction | Example of a specific instruction |
|---|--------------|----------------|
| 1 | "Make a nice-looking document" | "Create a one-page Markdown summary of this month's KPI performance for next week's department meeting. The three KPIs are revenue, site visits, and conversion rate." |
| 2 | "Summarize the data" | "Merge the 3 CSV files in the data/ folder into one file, sort by date, and remove duplicate rows. Name the output file combined_data.csv." |
| 3 | "Write an email" | "Draft a professional email to Mr. Yamada at our partner company confirming a meeting next Tuesday at 2:00 PM. Include a subject line and use a polite business tone. Save the email body as email_draft.txt." |

**What makes instructions better**:
- **Who/what for**: Specify the purpose and audience
- **What**: Describe the specific content
- **In what format**: Specify the file format and structure
- **Where**: Specify the output destination and file name

</details>

### Exercise 4-3: Try the Slash Commands (Hands-on)

With Claude Code running, try the following slash commands in order.

1. Run `/help` to see the available commands
2. Ask a question (e.g., "What files are in this folder?")
3. Run `/cost` to check the cost of the current session
4. Run `/clear` to reset the conversation
5. Exit with `/exit`

```
Results log:

Number of commands shown by /help: ___ commands
Cost shown by /cost: $___
```

<details>
<summary>Sample answers (click to expand)</summary>

Results will vary depending on your environment and version, but you should observe the following:

- `/help`: Displays a list of commands with brief descriptions
- `/cost`: Shows an amount like `$0.XX` (a small amount is normal)
- `/clear`: Shows a message like "Conversation cleared" and the previous conversation disappears
- `/exit`: Claude Code exits and you return to the terminal prompt (`$` or `%`)

**Note**: Running `/clear` resets the conversation context. Avoid using it in the middle of a task.

</details>

---

## Chapter 5 Exercises: CLAUDE.md

### Exercise 5-1: Create a CLAUDE.md (Hands-on)

Create a CLAUDE.md tailored to your own work.

1. Launch Claude Code in your working folder.
   ```
   cd ~/claude-exercises
   claude
   ```

2. Give the following instruction (customize the content to match your work).
   ```
   Create a CLAUDE.md for this folder.

   Please include the following information:
   - I work in [your department name]
   - My main responsibilities are [2-3 key tasks]
   - Create all files in English
   - Use the "date_description" naming format for files
   - Create reports in Markdown format
   ```

3. Review the generated CLAUDE.md, and if you'd like to add rules, ask for revisions.

<details>
<summary>Sample answers (click to expand)</summary>

Example of a generated CLAUDE.md:

```markdown
# Project Configuration

## Team Member Info
- Department: Strategic Planning
- Main tasks: Business planning, budget management, executive meeting materials

## Work Rules
- Create all files in English
- File names follow the format "YYYY-MM-DD_description"
- Reports are created in Markdown format (.md)

## Output Format
- Use comma separators for numbers (thousands)
- Dates in YYYY-MM-DD format
- Include currency symbols with monetary amounts
```

**What to check**:
- CLAUDE.md was created in the current directory
- Your work details are reflected
- The necessary rules are documented

</details>

### Exercise 5-2: Experience the Effect of CLAUDE.md (Hands-on)

See how Claude Code's behavior changes with and without a CLAUDE.md.

**Step 1**: Work with CLAUDE.md in place
```
cd ~/claude-exercises
claude
```
-> Ask "Create a simple report"
-> Check whether the file name and format follow the CLAUDE.md rules

**Step 2**: Temporarily disable CLAUDE.md and compare
```
# Exit Claude Code first
/exit

# Rename CLAUDE.md to disable it
mv CLAUDE.md CLAUDE.md.bak

# Launch again
claude
```
-> Ask the same thing: "Create a simple report"
-> Observe any differences in file naming and formatting

**Step 3**: Restore CLAUDE.md
```
/exit
mv CLAUDE.md.bak CLAUDE.md
```

<details>
<summary>Sample answers (click to expand)</summary>

**Expected differences:**

| Aspect | With CLAUDE.md | Without CLAUDE.md |
|------|-------------|--------------|
| File name | `2026-03-11_report.md` (follows rules) | `report.md` (generic name) |
| Language | Consistently English | May default to English but formatting varies |
| Format | Follows specified format | Claude Code decides on its own |
| Number formatting | Follows the rules | May be inconsistent |

**Key takeaway**: With CLAUDE.md in place, your instructions can be more concise and the output quality is more consistent. Hopefully you've experienced that "CLAUDE.md takes a bit of upfront effort but saves significant time in the long run."

</details>

### Exercise 5-3: Improve Your CLAUDE.md

Review the CLAUDE.md you created in Exercise 5-1 and add the following items. Feel free to ask Claude Code to make the edits.

Items to add:
1. **Folder structure rules**: What goes where
2. **Common request patterns**: A list of tasks you frequently request
3. **Important notes**: Rules to follow, such as handling confidential information

```
Please add the following to CLAUDE.md:

1. Folder structure:
   - data/ : Where source data is stored
   - reports/ : Where deliverables go
   - drafts/ : For work in progress

2. Common requests:
   - [List 2-3 tasks you frequently perform]

3. Important notes:
   - Do not create files containing personal information
   - Do not include confidential terms in file names
```

<details>
<summary>Sample answers (click to expand)</summary>

Example of the updated CLAUDE.md:

```markdown
# Project Configuration

## Team Member Info
- Department: Strategic Planning
- Main tasks: Business planning, budget management, executive meeting materials

## Work Rules
- Create all files in English
- File names follow the format "YYYY-MM-DD_description"
- Reports are created in Markdown format (.md)

## Output Format
- Use comma separators for numbers (thousands)
- Dates in YYYY-MM-DD format
- Include currency symbols with monetary amounts

## Folder Structure
- `data/` : Source data (CSV and spreadsheet files)
- `reports/` : Completed report output
- `drafts/` : Drafts and work-in-progress files

## Common Requests
1. Aggregate CSVs from data/ and create a monthly report
2. Create summary materials for executive meetings
3. Create budget vs. actual variance analysis reports

## Important Notes
- Do not create files containing personal information (names, addresses, phone numbers, etc.)
- Do not include confidential terms in file names
- All monetary figures must be verified by a human
- Documents intended for external distribution must be created as drafts for human review
```

**Key point**: CLAUDE.md is something you "grow over time." As you use it, whenever you think "I need this rule too" or "this explanation is missing," keep adding to it.

</details>

---

## Comprehensive Exercise: Module 1 Wrap-Up

### Comprehensive Exercise: Execute a Business Task with Claude Code

Put everything you've learned into practice by completing the following series of tasks with Claude Code.

**Scenario**: You're kicking off a new project.

1. Create a project folder
   ```
   mkdir ~/my-first-project
   cd ~/my-first-project
   ```

2. Launch Claude Code and make the following requests in order

   **Request 1**: "Create a CLAUDE.md for this project. The project name is 'Customer Satisfaction Survey Analysis,' and the goal is to analyze customer survey results and create reports."

   **Request 2**: "Create three folders: data, reports, and templates."

   **Request 3**: "In the templates/ folder, create a monthly report template. The sections should be 'Overview,' 'Data Summary,' 'Analysis Results,' 'Improvement Recommendations,' and 'Next Steps.'"

   **Request 4**: "In the data/ folder, create a sample survey dataset (CSV) with 10 entries. The columns should be 'response_date, customer_id, overall_satisfaction (1-5), comment.'"

   **Request 5**: "Read the CSV from data/ and create a simple analysis report in reports/."

3. Finally, check the session cost with `/cost`

<details>
<summary>Sample answers and checkpoints (click to expand)</summary>

**Post-completion checklist:**

```
[  ] CLAUDE.md has been created
[  ] data/ folder exists
[  ] reports/ folder exists
[  ] templates/ folder exists
[  ] templates/ contains a report template
[  ] data/ contains a sample CSV
[  ] reports/ contains an analysis report
[  ] The contents of each file are as expected
```

**How to verify via terminal (after exiting Claude Code):**
```
# Check the folder structure
ls -la ~/my-first-project/
ls -la ~/my-first-project/data/
ls -la ~/my-first-project/reports/
ls -la ~/my-first-project/templates/
```

**Reflection points**:
- Through the 5 requests, Claude Code executed a complete workflow: file creation -> data generation -> analysis -> report creation
- Permission checks were appropriately triggered
- CLAUDE.md rules were reflected (e.g., file naming format)
- The cost shown by `/cost` was within a reasonable range

</details>
