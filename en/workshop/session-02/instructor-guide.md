---
title: "Session 2: Hands-On — Delegating Business Tasks to the Agent"
lang: "en"
category: "workshop"
module: "session-02"
contentType: "instructor-guide"
order: 1
---
# Session 2: Hands-On — Delegating Business Tasks to the Agent

## Session Overview

| Item | Details |
|------|---------|
| **Duration** | 120 minutes |
| **Objective** | Practice desktop research and proposal drafting with Claude Code, and learn how to write effective instructions |
| **Prerequisites** | Completed Session 0 (GitHub experience) and Session 1 (Claude Code installation and basic operations) |
| **Participant Goal** | Be able to independently conduct research and create documents using Claude Code, and iteratively improve instructions |

---

## Pre-Session Preparation (For Instructors)

### Required Environment

1. **Participant computers**
   - Claude Code installed and functioning properly
   - Terminal (the command-line interface) can be launched
   - Working folder already created (should have been created in Session 1)

2. **Instructor's computer**
   - A working Claude Code environment for demonstrations
   - Web search functionality enabled (confirm web search is allowed in Claude Code settings)
   - Demo working folder prepared: `~/workshop-demo/session-02/`

3. **Handouts**
   - Print or digitally distribute the participant handout (participant-handout.md)

### Rehearsal Checklist

- [ ] Ran Claude Code with the demo research topic and confirmed the output
- [ ] Confirmed web search is functioning properly
- [ ] Confirmed file reference instructions ("using this file as reference") work correctly
- [ ] Confirmed Markdown file output works properly
- [ ] Saved backup sample deliverables (in case of technical issues during the demo)
- [ ] Tested projector/screen sharing
- [ ] Confirmed Wi-Fi connection stability

---

## Timetable

### 1. Review of Previous Session (5 min)

**Sample instructor dialogue:**

> "In Session 1, we installed Claude Code on our own computers
> and experienced basic operations. We launched Claude Code from the terminal,
> asked it simple questions, and learned about the role of CLAUDE.md
> (the project configuration file). Today, we're going to tackle
> tasks that are closer to real work."

**What to do:**

- Briefly review the previous session (1-2 min)
  - How to open the terminal
  - Launching Claude Code with the `claude` command
  - The role of CLAUDE.md (an instruction file for the AI agent)
- Ask participants: "Did anyone try things on their own after last session?" (1-2 min)
- Share today's goals (1 min)

**Sample instructor dialogue:**

> "Today we have two goals. First, learning to use Claude Code
> for desktop research — gathering, organizing, and reporting information.
> Second, using those research results to create a proposal draft.
> Through these exercises, we'll develop skills for giving
> effective instructions to AI agents."

---

### 2. Desktop Research in Practice (40 min)

#### 2-1. Demo: Creating a Market Research Report (10 min)

**Instructor's procedure:**

1. Open the terminal and navigate to the working folder

```bash
cd ~/workshop-demo/session-02
```

2. Launch Claude Code

```bash
claude
```

3. **Start with a vague instruction (show this as a Bad example):**

Deliberately give a vague instruction and show the results.

```
Research the SaaS market and create a report
```

**Sample instructor dialogue:**

> "First, let me intentionally give a vague instruction:
> 'Research the SaaS market and create a report.'
> It will produce something, but let's take a look...
> See? It's not bad, but it's unclear what we actually wanted to know."

4. **Improved instruction (show this as a Good example):**

```
Create a research report on the SaaS market for small and mid-sized businesses.

## What to Research
- Market size trends from 2024 to 2026 and future projections
- Top 3 growth-driving segments (accounting, HR, marketing, etc.)
- Top 3 challenges SMBs face when adopting SaaS

## Report Requirements
- Target audience: SMB executives without an IT department
- Length: approximately 2,000–3,000 words
- Format: Save as a Markdown file
- Filename: saas-market-report.md
- All data must include citations (source URLs, etc.)

Search the web for the latest information and prioritize reliable sources.
```

**Sample instructor dialogue:**

> "Now let me give a specific instruction. What to research,
> who the audience is, how long it should be, what format to save it in
> — just by specifying these details, the quality of the output
> changes dramatically. It's the same as when you delegate work
> to a human team member."

5. Show Claude Code working
   - Explain how it uses web search (searching the internet for information)
   - Show the file being created
   - After completion, review the created file together

**Sample instructor dialogue:**

> "Right now, Claude Code is using web search to gather information.
> It searches, reads the information, organizes it, and compiles it into a report
> — all automatically. Research that would take a person 1–2 hours
> gets done in just a few minutes."

6. Review the completed report and explain how to verify citations

**Sample instructor dialogue:**

> "Let's look at the completed report. The key thing here is
> citations — verifying 'where did this information come from.'
> AI-generated information can sometimes include inaccuracies.
> This is called 'hallucination' — when the AI generates
> plausible-sounding but incorrect information.
> Make it a habit to open citation URLs and verify important data."

#### 2-2. Explaining the Step-by-Step Approach to Instructions (5 min)

**Sample instructor dialogue:**

> "As you saw in the demo, there are levels to how you give instructions.
> The recommended approach is 'start broad, then get specific.'"

**Show on slides or whiteboard:**

```
Step 1: Convey the general direction
  "Research X"

Step 2: Add conditions
  "Research X from the perspective of Y"

Step 3: Specify the output format and quality criteria
  "Research X from the perspective of Y,
   and summarize it as a 2,000-word report for audience Z"

Step 4: Add specific constraints
  "Filename should be X.md, include citations,
   prioritize data from 2024 onwards"
```

> "You don't need to write the perfect instruction from the start.
> Give it a try, look at the results, then add what's missing
> — this iterative approach is the most efficient."

#### 2-3. Hands-On: Practice with Your Own Research Topic (20 min)

**Sample instructor dialogue:**

> "Now it's your turn. Pick a topic related to your own work
> and ask Claude Code to do the research.
> If you can't think of a topic, refer to the templates in the handout."

**Instructions for participants:**

1. Open the terminal
2. Navigate to your working folder (`cd ~/workshop`, etc. — the folder created in Session 1)
3. Type `claude` to launch Claude Code
4. Enter your research instructions

**Topic examples (also listed in the handout):**

| Category | Example Topic |
|----------|---------------|
| Sales | Market size and competitive landscape for a market your company is considering entering |
| HR | Success stories and challenges from companies that have implemented remote work policies |
| Marketing | Latest trends in social media marketing and effective strategies |
| Strategy | Case studies of companies leading digital transformation (DX) initiatives |
| Customer Success | Best practices for improving churn rates at SaaS companies |

**Instructor walkthrough tips:**

- For participants with vague instructions, ask "Who is this information for?" or "What will you use it for?" to help them be more specific
- Prioritize helping participants who are struggling with Claude Code operations
- For participants who finish early, suggest "Try verifying the citations" or "Try asking follow-up questions"

#### 2-4. Using Web Search Results and Verifying Citations (5 min)

**Sample instructor dialogue:**

> "Let's look at your research results. The most important thing
> about completed reports is the accuracy of the information.
> Remember these three points."

**Key points:**

1. **Check that citations are included**
   - If URLs are listed, actually open them in a browser to verify
   - If citations are missing, give a follow-up instruction: "Please add citations"

2. **Pay special attention to numbers and data**
   - Market sizes, growth rates, rankings, and other figures need extra verification
   - Asking "What's the source for this number?" can also be effective

3. **Maintain a healthy skepticism about hallucinations**
   - Be cautious if something seems "too neatly packaged"
   - Non-existent company names or fabricated reports can sometimes appear
   - Always verify information used for important decisions against primary sources

---

### 3. Proposal Document Creation (40 min)

#### 3-1. Demo: Creating a Proposal Based on Research Results (10 min)

**Instructor's procedure:**

1. Confirm that the research report from earlier has been saved

```
Review the saas-market-report.md file in this folder and summarize its contents.
```

**Sample instructor dialogue:**

> "The report file we created from our research is saved right here.
> Claude Code can read and work with files in the current folder.
> If you say 'using this file as reference,' it will create
> deliverables based on that content."

2. Create a proposal draft based on the research results

```
Using the contents of saas-market-report.md as reference, create the following proposal document.

## Proposal Overview
- Title: "SaaS Adoption Proposal for Small and Mid-Sized Businesses"
- Purpose: Proposal for a client company (a 50-employee service business)
- Format: Markdown file (save as proposal-draft.md)

## Content to Include
1. Cover page (title, proposal date, proposing company name placeholder)
2. Executive summary (key points in 3 lines)
3. Market background (key findings from the research report)
4. Proposal details (recommended SaaS categories and rationale)
5. Implementation steps (3-month schedule)
6. Expected benefits (include quantitative figures)
7. Estimated costs
8. Next steps

## Tone
- Business formal
- Add parenthetical explanations for technical terms
- Assume the reader is a non-technical executive
```

**Sample instructor dialogue:**

> "The key is the phrase 'using the contents of saas-market-report.md
> as reference.' Just this one line gets Claude Code to create a proposal
> informed by our earlier research. The ability to read and reference files
> is a major strength of Claude Code. With chat-based AI, you'd have to
> copy and paste previous content every time."

3. Review the completed proposal

**Sample instructor dialogue:**

> "Let's look at the finished proposal. You can see it has
> a solid structure. Of course, this is a draft — a first version —
> so rather than using it as-is, you'd refine it in your own words.
> The key takeaway is that you no longer have to start from scratch."

4. Demo giving revision instructions

```
Please make the following changes to proposal-draft.md:
- Make the executive summary more specific (include numbers)
- In the estimated costs section, include both monthly and annual figures
- Ensure consistent use of formal language throughout
```

**Sample instructor dialogue:**

> "Revision requests also work well when you give specific instructions.
> Rather than 'make it a bit better,' the key is to clearly state
> 'what to change and how.'"

#### 3-2. Explaining File Reading and References (5 min)

**Sample instructor dialogue:**

> "Let me summarize how to reference files in Claude Code."

**Reference patterns:**

| Instruction Pattern | Use Case |
|---------------------|----------|
| `Read X.md and summarize its contents` | Checking file contents |
| `Using X.md as reference, create Y` | Creating something new based on an existing file |
| `Compare X.md and Y.md and summarize the differences` | Comparing multiple files |
| `Show me a list of files in this folder` | Checking folder contents |
| `Rewrite the "Background" section of X.md` | Partially editing an existing file |

> "Claude Code can read and write files in the current folder (directory).
> So it's convenient to keep related files in the same folder."

#### 3-3. Hands-On: Create Your Own Proposal (20 min)

**Sample instructor dialogue:**

> "Now, using your research results, create your own proposal.
> Imagine a real scenario where you'd be presenting to a client
> or your manager, and work on a realistic topic."

**Instructions for participants:**

1. Confirm that the file from your earlier research is in the folder
2. Ask Claude Code to create a proposal, referencing that file
3. Review the result and give at least one revision instruction

**Topic examples (also listed in the handout):**

| Original Research | Proposal Topic Example |
|-------------------|----------------------|
| Market research | New market entry proposal |
| Competitive analysis | Product differentiation strategy |
| Trend research | Internal initiative proposal |
| Case study research | Implementation proposal |

**Instructor walkthrough tips:**

- Advise participants who forget to include "using the research file as reference" in their instructions
- If output doesn't match expectations, encourage them to "try giving additional revision instructions"
- Help with folder organization if participants have created multiple files

#### 3-4. Introduction to Converting Markdown to Other Formats (5 min)

**Sample instructor dialogue:**

> "Files created by Claude Code are in Markdown format by default.
> Markdown is a simple text-based formatting system that uses
> symbols to express headings and bullet points.
> In actual work, you'll often need PowerPoint, Word, or PDF files.
> Let me introduce a few conversion methods."

**Conversion methods (for reference):**

| Target Format | Method |
|---------------|--------|
| **PDF** | Export to PDF from Markdown preview in an editor like VSCode |
| **PowerPoint** | Ask Claude Code to "create a slide outline" based on the Markdown content, then manually transfer to PowerPoint |
| **Word** | Use Pandoc (a file conversion tool), or copy and paste |
| **HTML** | Ask Claude Code to "convert this to HTML" |

> "For now, being able to create in Markdown is sufficient.
> Format conversion can be handled on a case-by-case basis.
> What matters most is quickly creating a high-quality content draft."

---

### 4. The Art of Effective Instructions (20 min)

#### 4-1. Comparing Good vs. Bad Instructions (8 min)

**Sample instructor dialogue:**

> "Through today's hands-on practice, you've experienced how
> the way you write instructions significantly affects the results.
> Let's organize the patterns for effective instructions."

**Example 1: Research request**

| | Instruction Example |
|---|---|
| **Bad** | `Research the AI market` |
| **Good** | `Research the domestic AI market size, covering data from 2024 to 2026. Summarize the growth rate and major players. The target audience is executive meeting attendees. Keep it to about 2 pages. Always include citations.` |

**Why Good is better:**
- "What," "scope," "audience," "length," and "conditions" are all clear
- It's the same as when you delegate work to a human team member

**Example 2: Document creation request**

| | Instruction Example |
|---|---|
| **Bad** | `Create a proposal` |
| **Good** | `Create a proposal draft for Company A (manufacturing, 200 employees) for adopting cloud accounting software. Use the previously created market-research.md as reference data. The proposal should include implementation benefits, a projected schedule (3 months), and estimated costs. Save as proposal-a-company.md.` |

**Example 3: Revision request**

| | Instruction Example |
|---|---|
| **Bad** | `Make it better` |
| **Good** | `In the "Implementation Benefits" section of proposal-a-company.md, add quantitative impacts (estimated reduction in work hours, estimated cost savings). Also, change the "Projected Schedule" section to table format.` |

**Example 4: Tone and style specification**

| | Instruction Example |
|---|---|
| **Bad** | `Make it a bit more formal` |
| **Good** | `Change the overall tone to business formal. Specifically, use consistent formal language throughout, avoid colloquial expressions (like "pretty much," "a lot," etc.), and replace them with formal alternatives ("substantially," "marginally," etc.).` |

**Example 5: Review request**

| | Instruction Example |
|---|---|
| **Bad** | `Check this` |
| **Good** | `Review proposal-a-company.md from the following perspectives: (1) Are there any contradictions in numbers or data? (2) Are there any logical gaps? (3) Are there any typos or grammatical errors? If you find issues, point them out specifically and suggest corrections.` |

#### 4-2. Providing Context (5 min)

**Sample instructor dialogue:**

> "Effective instructions work best when they include three elements:
> 'Persona,' 'Purpose,' and 'Constraints.'"

**The three elements:**

```
1. Persona (what role to take on)
  "You are a business consultant with deep expertise in the IT industry"
  "You are an advisor who explains things clearly to SMB executives"

2. Purpose (what this is for)
  "For a document to be used in an executive meeting"
  "For an initial proposal to a new client"

3. Constraints (conditions to follow)
  "Always add explanations for technical terms"
  "Keep it under 3,000 words"
  "Use text-based comparisons instead of charts and graphs"
```

**Concrete example:**

```
As a business consultant with deep knowledge of the SaaS industry,
create a market analysis report for use in an executive meeting.

The readers are executives at a small business without an IT department.
Always add plain-language explanations in parentheses for technical terms.
The length should be about 3 pages, and all data must include citations.
```

> "Just being mindful of these three elements will dramatically improve the quality of your output."

#### 4-3. Iterative Improvement: Don't Aim for Perfection on the First Try (3 min)

**Sample instructor dialogue:**

> "Finally, let me share the most important mindset:
> 'You don't need to write the perfect instruction on your first try.'"

**The iterative improvement cycle:**

```
  1. Give a rough instruction
       |
  2. Review the result
       |
  3. Give additional instructions for what's missing
       |
  4. Review the result
       |
  5. Give further revisions
       |
  (Repeat until satisfied)
```

> "This is exactly the same as delegating work to a human team member.
> Nobody can write a perfect brief on the first try.
> You delegate, review the results, give feedback,
> and iterate. Running this cycle quickly is what matters.
>
> The great thing about AI agents is that they never get frustrated
> no matter how many revisions you request. Don't hesitate to
> give revision instructions."

#### 4-4. Writing Project-Specific Instructions in CLAUDE.md (4 min)

**Sample instructor dialogue:**

> "In Session 1, you learned about CLAUDE.md — the instruction file
> for the AI agent. If you find yourself repeating the same instructions
> every time, writing them in CLAUDE.md will apply them automatically."

**Demo:**

```
Create a CLAUDE.md with the following content:

# Project Settings

## Basic Rules
- All deliverables should be created in English
- Save files in Markdown format
- Use the filename format "YYYY-MM-DD-brief-description.md"
- Always add plain-language explanations in parentheses for technical terms
- When including data or facts, always cite the source (URL, etc.)

## Document Style
- Tone should be business formal
- Use consistent professional language throughout
- Target audience is business professionals without technical backgrounds

## Output Rules
- Reports should be approximately 2,000–3,000 words
- Use headings, bullet points, and tables effectively for readability
```

**Sample instructor dialogue:**

> "By writing these in CLAUDE.md, you won't need to say
> 'write in English' or 'include citations' every time.
> I recommend consolidating your frequently used instructions
> into CLAUDE.md."

---

### 5. Wrap-Up and Next Session Preview (15 min)

#### 5-1. Sharing Deliverables (5 min)

**Sample instructor dialogue:**

> "Let's take a moment to share what you've created today.
> Would anyone like to show us a research report or proposal
> that they're particularly happy with?"

- Have 2-3 participants share their screens to show their deliverables
- Give positive feedback (especially on effective instruction techniques)

#### 5-2. Reflection Discussion (5 min)

**Discussion prompts:**

1. **Insights**: "What was your biggest takeaway from today's practice?"
2. **Instruction tips**: "Were there any instruction techniques you found particularly effective?"
3. **Business application**: "Can you think of scenarios in your daily work where you could use this starting tomorrow?"

**Points for the instructor to summarize:**

- **Research is one of AI agents' strengths**
  - The process of gathering, organizing, and reporting information can be dramatically accelerated
  - However, humans must always verify the accuracy of the information

- **The greatest value of document creation is going from "zero to one"**
  - Eliminates the struggle of starting from a blank page
  - Build on the draft by adding your own expertise

- **Instruction quality = deliverable quality**
  - Vague instructions → vague deliverables
  - Specific instructions → specific deliverables
  - Iterative improvement is the most efficient approach

#### 5-3. Next Session Preview (3 min)

**Sample instructor dialogue:**

> "In the next session, Session 3, we'll learn the basics of
> Git (a tool for tracking file change history)
> and how to collaborate as a team.
> Today we worked individually, but starting next time,
> we'll move into team collaboration."

**Homework (optional):**

> "If you have time, try applying what you learned today —
> research and document creation — to your actual work.
> Customizing your CLAUDE.md for your specific work
> will make it even more useful."

- [ ] Conduct one research task related to your work using Claude Code
- [ ] Create a draft of some document based on your research results
- [ ] Add 2-3 rules to your CLAUDE.md that would be useful for your work

#### 5-4. Closing (2 min)

**Sample instructor dialogue:**

> "Today, you experienced practical business applications with
> Claude Code — research and document creation. The key takeaway
> isn't writing the perfect instruction on the first try,
> but rather: give it a try, review the results, and iterate.
> If you take this mindset with you, today has been a success.
> Great work, everyone."

---

## Appendix A: Troubleshooting

| Problem | Solution |
|---------|----------|
| Claude Code won't start | Verify you're typing the `claude` command correctly. Re-check the installation steps from Session 1 |
| Web search isn't working | Check Claude Code's permission settings. Confirm you selected Yes when prompted "Allow web search?" |
| Files aren't being saved | Verify the working folder exists. Check that the filename doesn't contain spaces or special characters |
| Can't reference existing files | Verify the file is in the folder where Claude Code was launched. Check that the filename is specified correctly |
| Output quality is low | Make instructions more specific. Add persona, purpose, and constraints. Take a step-by-step approach instead of asking for everything at once |
| Response stops midway | Wait a moment. If it doesn't improve, press `Ctrl + C` to stop and restart Claude Code |

## Appendix B: Instructor Checklist (Day of Session)

- [ ] Demo working folder (`~/workshop-demo/session-02/`) is prepared
- [ ] Claude Code is confirmed to be working properly
- [ ] Web search functionality has been verified
- [ ] Demo scenario has been rehearsed end-to-end
- [ ] Backup sample deliverables are ready
- [ ] Participant handouts are printed/ready for distribution
- [ ] Projector/screen sharing has been tested
- [ ] Wi-Fi connection stability has been confirmed
