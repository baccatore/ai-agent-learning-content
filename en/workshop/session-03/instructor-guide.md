# Session 3: Practical Applications — Data Analysis and Additional Use Cases

## Session Overview

| Item | Details |
|------|---------|
| **Duration** | 120 minutes |
| **Objective** | Perform CSV data analysis and visualization with Claude Code, and broaden awareness of business applications beyond core use cases |
| **Prerequisites** | Completed Sessions 0–2. Able to perform basic Claude Code operations (entering prompts, reading/writing files) |
| **Participant Goals** | Able to perform CSV data analysis and visualization with Claude Code, and can concretely envision use cases applicable to their own work |

---

## Pre-Session Preparation (For Instructors)

### Required Environment

1. **Participant PCs**
   - Claude Code installed and authenticated (completed in Session 1)
   - Terminal accessible
   - Web browser (for viewing generated HTML files)

2. **Sample Data Distribution**
   - `sales-data.csv` (sales data, 100 rows, 12 months)
   - `customer-survey.csv` (customer satisfaction survey, 50 rows)
   - Distribution method: Assumed to be included in a folder already cloned from the GitHub repository. Alternatively, distribute via USB drive, file sharing service, etc.

3. **Python Verification**
   - Since Claude Code automatically runs Python for data analysis, verify in advance that Python is installed on participants' PCs
   - Required libraries (pandas, matplotlib, etc.) will be auto-installed by Claude Code, but pre-installation may be preferable depending on network conditions

### Rehearsal Checklist

- [ ] Sample CSV files have been copied to participants' working directories
- [ ] Confirmed that the sample data analysis demo runs correctly on the instructor's PC
- [ ] Confirmed that HTML files display correctly in the browser
- [ ] Verified Python and library installation status
- [ ] Confirmed projector/screen sharing is working
- [ ] Confirmed stable Wi-Fi connection

---

## Timetable

### 1. Review of Previous Session (5 min)

**Sample Instructor Script:**

> "In the previous Session 2, you experienced research and document creation using Claude Code.
> You learned how to gather information using web search, create documents in Markdown,
> and save them to GitHub.
> Today, we'll tackle another powerful application — data analysis.
> Think about your Excel work. Let's experience how those tedious tasks can be transformed."

**What to do:**
- Briefly share homework results and subsequent usage experiences (by show of hands or chat)
- Outline today's agenda

---

### 2. Introduction to Data Analysis (45 min)

#### 2-1. Demonstration (15 min)

**The instructor performs a live demo.**

Share your screen showing the terminal and give Claude Code the following instructions:

```
claude

> Read sales-data.csv and perform the following analysis:
> 1. Calculate and display total sales by month
> 2. Sales composition by product category
> 3. The highest and lowest sales months
```

**Points to explain during the demo:**

1. **What Claude Code does automatically**
   - Reads the contents of the CSV file
   - Auto-generates Python (programming language) code
   - Runs calculations using pandas (a data analysis tool)
   - Formats and displays results in an easy-to-read manner

2. **What to tell participants**
   > "Right now, a programming language called Python is running behind the scenes.
   > But you don't need to write any code at all.
   > Just tell Claude Code what you want to know in plain English,
   > and it will automatically create and run the necessary programs.
   > This is a major difference from conventional AI chat tools."

3. **Comparison with Excel**
   > "If you tried to do the same analysis in Excel,
   > you'd need to set up pivot tables, write SUMIF formulas, create charts...
   > Even for an experienced user, it would take 15–20 minutes.
   > With a single instruction, it's done in seconds."

#### 2-2. How It Works (Brief Explanation) (5 min)

**Sample Instructor Script:**

> "Let me briefly explain how it works. Don't worry — it's not complicated."

Illustrate the following flow on a whiteboard or slide:

```
Your instruction (in English)
    ↓
Claude Code understands it
    ↓
Automatically generates Python code
    ↓
Runs on your PC
    ↓
Displays the results
```

**Supplementary explanation:**
- **Python**: A programming language used worldwide for data analysis. You don't need to write it — Claude Code writes and runs it automatically
- **pandas**: A specialized data analysis tool within Python. Think of it as a more powerful version of Excel
- **matplotlib**: A tool that automatically generates charts and graphs
- Key point: **Data is processed on your PC**. It is not sent to an external server (Claude Code generates the code, and that code runs locally)

#### 2-3. Hands-on: Analyzing Sales Data (25 min)

**Step 1: Reviewing the Sample Data (3 min)**

Have participants run the following:

```
claude

> Show me the contents of sales-data.csv. Display the first 5 rows and an overview of the whole dataset (how many rows there are, what columns it has)
```

**Instructor note:**
> "First, let's look at the data. You can't know what to analyze if you don't know what's in it.
> This is the same step as opening a file in Excel and looking through it."

**Step 2: Monthly Sales Trend Analysis (7 min)**

```
> Aggregate the sales amounts in sales-data.csv by month and display them in a table format that shows the trend.
> Also calculate the month-over-month change rate.
```

**Instructor Tips:**
- Once results appear, ask participants "Which month has the highest sales?"
- Ask them to think: "If your boss said 'Find out why June sales were high,' what analysis would you do next?"

**Step 3: Product Category Analysis (7 min)**

```
> Calculate the total sales amount and composition ratio by product category.
> Also display the monthly trend for each category.
```

**Instructor Tips:**
- Confirm: "Which category is the top earner?"
- Dig deeper: "Are there categories that sell differently depending on the season?"

**Step 4: Outlier Detection (8 min)**

```
> Find any transactions in this data where the sales amount is
> extremely high or low compared to normal.
> Also explain why you identified them as outliers.
```

**Sample Instructor Script:**

> "Outlier detection can be used to discover fraudulent transactions or data entry errors.
> This would normally require knowledge of statistics,
> but you can get results just by asking Claude Code."

#### 2-4. Data Privacy Considerations (3 min)

**Sample Instructor Script (Important):**

> "Now, let me cover something very important.
> Today we used sample data (fictitious data).
> When working with actual business data, please always follow these rules."

**Display on slide or whiteboard:**

| Rule | Explanation |
|------|-------------|
| **Be careful with data containing personal information** | When handling data that includes names, phone numbers, email addresses, etc., check your company's data handling policies |
| **Follow company rules for confidential data** | For highly confidential data such as financial figures or unpublished financial data, consult your supervisor or information security department |
| **How Claude Code processes data** | Claude Code uses AI (cloud) to understand instructions, but the generated Python code runs on your local PC. However, note that if you include data content in your prompt, that portion is sent to Anthropic's servers via the API |
| **Safe usage practices** | Specifying a file path and asking "analyze this file" is safer than pasting data content directly into the prompt |

---

### 3. Data Visualization (25 min)

#### 3-1. Auto-Generated Charts and Graphs Demo (10 min)

**The instructor performs a live demo.**

```
> Using the data from sales-data.csv, create the following charts as image files:
> 1. A line chart showing monthly sales trends
> 2. A pie chart of sales by product category
> 3. A bar chart comparing sales by region
> Make them visually appealing with a clean design.
```

**Points to explain during the demo:**
- Charts are saved as image files (PNG)
- Colors and layout can be adjusted via instructions
- Additional instructions like "make it bigger," "change the colors," "add a title" are possible

#### 3-2. Interactive HTML Visualization (5 min)

**The instructor performs a live demo.**

```
> Using the data from sales-data.csv, create an interactive dashboard
> in HTML format.
> Make it so that hovering the mouse shows details.
> Save it as an HTML file that can be opened in a browser.
```

**Sample Instructor Script:**

> "When you open the HTML file in your browser, you'll see interactive charts
> that display values when you hover over them.
> You can attach this to an email to share, or embed it in your company's internal portal."

Open the generated HTML file in the browser to display it.

#### 3-3. Hands-on: Visualizing Analysis Results (10 min)

Have participants work on one of the following:

**Task A (Basic):**
```
> From sales-data.csv, create a line chart showing monthly sales trends
> by sales channel (online, direct sales, distributor).
> Save the chart as an image file.
```

**Task B (Advanced):**
```
> Analyze both sales-data.csv and customer-survey.csv,
> and create an HTML report that includes:
> - Monthly sales trend chart
> - Sales composition by category
> - Average score by customer satisfaction item
> Make the layout clean and easy to read.
```

**Instructor Tips:**
- For participants who finish early, suggest "Try customizing the chart colors or titles to your preference"
- For participants having trouble, guide them to pass the error message directly to Claude Code
  > "Don't worry if you get an error. Just show the error message to Claude Code and it will fix it itself"

---

### 4. Additional Use Case Showcase (30 min)

#### 4-1. Use Case Introductions (15 min)

**Sample Instructor Script:**

> "So far, you've experienced the main usage patterns: research, document creation, and data analysis.
> Now, let me introduce other scenarios where you can use these skills in your work.
> All of these are directly relevant to your daily tasks."

**Use Case 1: Organizing and Summarizing Meeting Minutes**

Introduce via demo or slides:

```
> Read the following meeting notes and organize them in this format:
> - Agenda items
> - Decisions made
> - Action items (person responsible, deadline)
> - Items on hold
>
> [Paste meeting notes text, or specify a file]
```

Key points:
- You can directly organize output from transcription tools (e.g., Google Meet auto-transcription)
- Even bullet-point notes can be structured
- Potential to reduce meeting minutes creation time by 70–80%

**Use Case 2: Creating and Updating Operational Manuals**

```
> Based on the following procedure notes, create an operational manual for new employees:
> - Number each step
> - Include cautions and common mistakes
> - Indicate where screenshots should be inserted as [Screenshot: ○○ screen]
>
> [Specify procedure notes file]
```

Key points:
- Document knowledge that was previously only shared verbally
- Can also be used to update existing manuals (detecting and applying differences)
- Can auto-generate flowcharts using Mermaid notation

**Use Case 3: Automated Routine Report Generation**

```
> From the following monthly data CSV, create a monthly report for the executive meeting:
> - Executive summary (3 lines)
> - KPI achievement status (table format)
> - Highlights of items with significant month-over-month changes
> - Proposed actions for next month
```

Key points:
- Automate recurring monthly tasks
- Simultaneously generate multiple formats (detailed version, summary version)
- Can highlight differences from the previous month's report

**Use Case 4: Multilingual Translation Workflow**

```
> Translate the following English document into Japanese.
> Translation rules:
> - Make it natural Japanese suitable for business documents
> - Keep company names as they are in the original
> - Also create a parallel translation table
```

Key points:
- Reduce outsourcing costs for translation agencies
- Can reference glossaries to ensure consistent terminology
- Useful for daily communication with overseas offices

**Use Case 5: Other Potential Applications**

Briefly introduce the following (about 1 minute each):

- **Preliminary contract review assistance**: Extract key clauses according to a checklist. Final judgment must always be made by the legal department
- **RFP (Request for Proposal) draft creation**: Auto-generate a comprehensive draft following standard structure
- **KPI data preparation**: Convert data in various formats into a unified format
- **Customer list data cleansing**: Standardize naming variations, detect duplicates
- **Grant application draft creation**: Structure public solicitation requirements and generate application drafts

> **Note:** The use cases listed here are examples. Based on brainstorming results from sub-agents, add or replace use cases that are more relevant to participants' work.

#### 4-2. Mini Hands-on: Pick One and Try It (15 min)

**Sample Instructor Script:**

> "From the use cases I just introduced, pick one and actually try it out.
> If you're not sure which to choose, I recommend 'meeting minutes organization.'
> Try it with notes from a recent meeting or with fictional meeting notes."

**Quick templates for each use case (also included in the participant handout):**

Have participants refer to their distributed handouts.

**Instructor Support Points:**
- If participants want to use their own business data, re-confirm the data privacy guidelines (Section 2-4)
- For participants who say "I don't know what to try," guide them to the meeting minutes template
- For participants who have completed their deliverables, suggest "Try pushing the results to GitHub" (review of Sessions 1–2)

---

### 5. Wrap-up and Preview of Next Session (15 min)

#### 5-1. Today's Summary (5 min)

**Sample Instructor Script:**

> "Today we learned three major things."

**Slide or whiteboard:**

| What We Learned Today | Key Points |
|-----------------------|------------|
| **Data Analysis** | Just load a CSV file and give analysis instructions in plain English. No need for Excel formulas or pivot table knowledge |
| **Data Visualization** | Charts and HTML dashboards are auto-generated just by describing what you want. Design adjustments are also possible through conversation |
| **Various Use Cases** | Beyond research, document creation, and data analysis, you can also leverage meeting minutes organization, manual creation, translation, and more |

#### 5-2. Reflection Discussion (5 min)

**Discussion prompts:**

1. **Discovery**: "What was the thing you found most useful in today's experience?"
2. **Application**: "Is there something you could try right away in your work starting tomorrow?"
3. **Questions**: "Are there any points you're still unclear about or concerned with?"

Collect participant feedback and provide brief commentary.

#### 5-3. Preview of Next Session (5 min)

**Sample Instructor Script:**

> "Next time, Session 4, is the final session.
> You'll use everything you've learned so far to tackle your own real business challenges.
> Think of it as a 'capstone project.'
>
> Before next time, please decide on one of your own work tasks that you'd like
> to streamline or improve with Claude Code.
> It can be data analysis, document creation, meeting minutes organization — anything goes.
> It would be ideal if you can prepare actual business data (within the bounds of confidentiality)."

**Homework:**
- [ ] Decide on one "personal business challenge" to work on in the final session
- [ ] If possible, prepare the data or files you'll use
- [ ] Try the data analysis techniques you learned today on different data (such as a CSV you create yourself)

---

## Appendix A: Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| CSV file cannot be loaded | Check that the file path is correct. If using a non-ASCII file name, try renaming it to alphanumeric characters |
| Japanese characters in charts are garbled | Re-instruct: "Please recreate the chart specifying a Japanese font" |
| Python library cannot be installed | Check network connection. Have the instructor run the pip install command directly |
| HTML file won't open in browser | Check the file save location. Open with `open filename.html` (Mac) or `start filename.html` (Windows) |
| Analysis results seem wrong | Re-check the data contents. Ask Claude Code: "Please verify whether these results are correct" |
| Processing takes too long | For large datasets, instruct "Please analyze only the first 100 rows" |

## Appendix B: Accommodating Different Skill Levels

| Participant Level | Recommended Tasks |
|-------------------|-------------------|
| **Basic**: Still unsure about operations | Monthly sales aggregation only. Proceed one step at a time, carefully |
| **Standard**: No issues with basic operations | Multiple analyses + chart generation. Actively participate in the mini hands-on |
| **Advanced**: Eager to explore | Create HTML dashboards. Try analyzing their own business data |

## Appendix C: Instructor Checklist (Day of Session)

- [ ] Sample CSV files (2 files) have been distributed
- [ ] Re-confirmed that the demo runs correctly on the instructor's PC
- [ ] Prepared Python installation verification script
- [ ] Verified HTML file display
- [ ] Confirmed projector/screen sharing operation
- [ ] Confirmed stable Wi-Fi connection
- [ ] Prepared a sheet to track participant progress (who has completed what)
