# Session 3: Experiencing Data Analysis and Additional Use Cases

## What We'll Do Today

Today we'll work on two themes:
1. **Data Analysis**: Analyze and visualize CSV files (spreadsheet-like data) with Claude Code
2. **Additional Use Cases**: Try other business applications such as meeting minutes organization and manual creation

### Today's Schedule

```
Review of last session → Data analysis → Chart creation → Other use cases → Wrap-up
       (5 min)            (45 min)        (25 min)          (30 min)        (15 min)
```

---

## Part 1: Data Analysis

### What Is a CSV File?

A CSV file is a text file where data is separated by commas.
It's the same data format that appears as a table when opened in Excel.
Today, we'll analyze fictional sales data and customer survey data.

### How It Works (Good to Know)

```
You give instructions in English
    ↓
Claude Code understands the instructions
    ↓
Automatically creates an analysis program (Python)
    ↓
The program runs on your PC
    ↓
Results are displayed
```

- **Python**: A programming language used for data analysis. You don't need to write it yourself
- **pandas**: A data analysis tool within Python. Think of it as a more powerful version of Excel
- The program runs **on your own PC** (your data is not sent externally)

---

### Exercise 1: Examine the Data Contents

Let's start by looking at what's in the sample data.

```
claude

> Show me the contents of sales-data.csv.
> Display the first 5 rows and an overview of the whole dataset (how many rows there are, what columns it has)
```

Things to check:
- How many rows of data are there
- What items (columns) are there
- What types of data are included

---

### Exercise 2: Analyze Monthly Sales Trends

```
> Aggregate the sales amounts in sales-data.csv by month and display them in a table format that shows the trend.
> Also calculate the month-over-month change rate.
```

Look at the analysis results and think about:
- Which month had the highest sales?
- Is there a pattern in the periods when sales grew?

---

### Exercise 3: Product Category Analysis

```
> Calculate the total sales amount and composition ratio by product category.
> Also display the monthly trend for each category.
```

Look at the analysis results and think about:
- Which category is the top earner?
- Are there categories that sell differently depending on the season?

---

### Exercise 4: Outlier Detection

```
> Find any transactions in this data where the sales amount is
> extremely high or low compared to normal.
> Also explain why you identified them as outliers.
```

Outlier detection can be used to discover data entry errors or fraudulent transactions.

---

## Part 2: Data Visualization (Chart Creation)

### Exercise 5: Let's Create Charts

Choose one of the following and give it a try.

#### Task A (Basic): Create a Chart as an Image File

```
> From sales-data.csv, create a line chart showing monthly sales trends
> by sales channel (online, direct sales, distributor).
> Save the chart as an image file.
```

#### Task B (Advanced): Create an HTML Report

```
> Analyze both sales-data.csv and customer-survey.csv,
> and create an HTML report that includes:
> - Monthly sales trend chart
> - Sales composition by category
> - Average score by customer satisfaction item
> Make the layout clean and easy to read.
```

Once the HTML file is created, open it in your browser to check:
- **Mac**: `open filename.html`
- **Windows**: `start filename.html`

### Chart Customization Techniques

When you want to change the appearance of a chart, just give additional instructions:

- "Change the title to 'FY2025 Monthly Sales Trends'"
- "Use a more business-appropriate color scheme"
- "Make the chart wider (landscape orientation)"
- "Move the legend to the bottom"

---

## Part 3: Additional Use Cases

### Mini Hands-on: Pick One and Try It

Choose one of the following and actually try it out. If you're unsure, **A. Meeting Minutes Organization** is recommended.

#### A. Organizing and Summarizing Meeting Minutes

Use the sample meeting notes below, or use your own meeting notes.

```
> Organize the following meeting notes. Use this format:
> - Meeting overview (date, attendees, purpose)
> - Key points by agenda item
> - Decisions made
> - Action items (person responsible, deadline)
> - Items on hold
>
> Meeting notes:
> Monthly meeting in March. Attendees: Director Tanaka, Manager Suzuki, Sato, Yamada.
> Discussed next fiscal year's budget. Director Tanaka proposed a 10% increase over last year.
> Manager Suzuki advocated for increased IT investment. Specifically, a CRM tool implementation
> at $2,000/month. Sato will submit a cost-benefit analysis by next Friday.
> Yamada reported on the new office layout project. Expected completion by end of April.
> Social event date is on hold. To be decided at the next meeting.
```

#### B. Creating an Operational Manual

```
> From the following procedure notes, create an operational manual for new employees.
> Include step numbers, cautions, and common mistakes.
>
> Procedure notes:
> Expense reimbursement process. First, collect receipts. Log in to the internal system
> and open the expense reimbursement menu. Enter the date, amount, and purpose. Upload
> a photo of the receipt. Send an approval request to your supervisor. Once approved,
> accounting processes it. Monthly cutoff, so submit by the 25th. Amounts over $50
> require department head approval. For transportation, IC card history is also acceptable.
```

#### C. Creating a Routine Report

```
> From sales-data.csv, create a monthly report for the executive meeting:
> - Executive summary (3-line summary)
> - Monthly sales performance (table format)
> - Notable points (strengths and challenges)
> - Proposed actions for next month
> Save as a Markdown file.
```

#### D. Translation

```
> Translate the following English text into Japanese.
> Make it natural Japanese suitable for business documents.
> Also create a parallel translation table.
>
> Text:
> Thank you for your continued support. We have reviewed internally the cloud
> service migration plan you proposed the other day. We agree with the basic
> approach in principle; however, we have a few questions regarding security
> requirements. We would be grateful if we could arrange a meeting sometime
> next week.
```

---

## Important Rules When Handling Data

| Rule | Explanation |
|------|-------------|
| **Be careful with personal information** | For data containing names, phone numbers, email addresses, etc., check your company's rules before using it |
| **Verify before using confidential data** | For financial figures or unpublished financial data, check with your supervisor or information security department first |
| **Specifying files is safer** | Rather than pasting data directly into the prompt, it's safer to specify a file path and say "analyze this file" |
| **Practice with sample data** | Before using production data, first try with sample or anonymized data |

---

## Today's Key Points

| What You Want to Do | Example Instruction for Claude Code |
|---------------------|-------------------------------------|
| Understand data overview | "Show me the contents of ○○.csv. Tell me how many rows and what types of columns" |
| Aggregate and analyze | "Aggregate sales by month" "Calculate composition ratio by category" |
| Find outliers | "Find unusual values and explain the reasons" |
| Create charts | "Make a line chart and save it as an image" |
| Visualize in HTML | "Create an interactive dashboard in HTML" |
| Organize meeting minutes | "Organize the meeting notes. Separate into decisions and action items" |
| Create a manual | "Create an operational manual from the procedure notes" |
| Translate | "Translate English to Japanese. Make it natural for business documents" |

---

## When Things Don't Work

| Issue | Solution |
|-------|----------|
| Told the file can't be found | Check the file location (path). Use `ls` to see what's in the current folder |
| Japanese characters in charts are unreadable | Tell Claude Code: "Please recreate the chart using a Japanese font" |
| Got an error | Show the error message directly to Claude Code. It will fix it on its own |
| Processing won't finish | For large data, instruct "Please try with only the first 100 rows" |
| Analysis results seem wrong | Ask Claude Code: "Please verify whether these results are correct" |

---

## Preview of Next Session

Next time (Session 4) is the final session. You'll use everything you've learned to tackle **your own real business challenges**.

### Homework

- [ ] Decide on one "personal business challenge" to work on in the final session (e.g., automating a routine report, organizing data, creating a manual, etc.)
- [ ] If possible, prepare the data or files you'll use (be mindful of confidentiality)
- [ ] Try the data analysis techniques you learned today on different data
