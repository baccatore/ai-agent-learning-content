# Session 2: Delegating Business Tasks to the Agent

## What We'll Do Today

Today, we'll work through two practical exercises using Claude Code.

1. **Desktop Research**: Gather and organize information into a report
2. **Proposal Creation**: Use the research results to draft a proposal document

Through these exercises, you'll learn how to give effective instructions to an AI agent.

### Today's Flow

```
Assign a research task → Report is completed → Use the report to create a proposal → Iterate and refine
```

---

## Part 1: Desktop Research

### Basic Steps

1. Open the terminal (the command-line interface)
2. Navigate to your working folder

```bash
cd ~/workshop
```

3. Launch Claude Code

```bash
claude
```

4. Enter your research instructions

### Research Request Templates

Use the following templates as a starting point, and customize them for your own work.

#### Template A: Market Research

```
Create a research report on the [X] market.

## What to Research
- Market size trends and future projections (2024–2026)
- Overview of 3–5 major players (leading companies)
- Key factors driving future growth

## Report Requirements
- Target audience: Managers in the [X] department
- Length: approximately 2,000–3,000 words
- Filename: market-research.md
- All data must include citations (source URLs, etc.)

Search the web for the latest information.
```

#### Template B: Competitive Analysis

```
Conduct a comparative analysis of Company X and Company Y's services.

## Comparison Criteria
- Key features and characteristics
- Pricing structure
- Target customer segments
- Strengths and weaknesses

## Report Requirements
- Include a comparison table
- Target audience: Sales team
- Length: approximately 1,500–2,000 words
- Filename: competitor-analysis.md
- All data must include citations

Search the web for the latest information.
```

#### Template C: Trend Research

```
Research the latest trends in [X] and create a report.

## What to Research
- Identify 3 noteworthy trends and explain each one
- The business impact of each trend
- Case studies of leading companies (at least 1 per trend)

## Report Requirements
- Target audience: Strategic planning department
- Length: approximately 2,000–3,000 words
- Filename: trend-report.md
- All data must include citations

Search the web for the latest information.
```

### How to Verify Citations

AI-generated information may sometimes contain inaccuracies. This is called "hallucination" — when the AI generates plausible-sounding but incorrect information.

**Points to check:**

- [ ] Does the report include citations (URLs, etc.)?
- [ ] Open the cited URLs in a browser and verify the content
- [ ] Be especially careful with numbers and data (market size, growth rates, etc.)
- [ ] If citations are missing, give Claude Code a follow-up instruction: "Please add citations"

---

## Part 2: Proposal Creation

### Basic Steps

1. Confirm that the research file from Part 1 is in the folder
2. Ask Claude Code to create a proposal, including "using [filename] as reference" in your instruction

### Proposal Templates

#### Template A: Client-Facing Proposal

```
Using X.md as reference, create a client-facing proposal draft.

## Proposal Overview
- Client: Company X (industry: XX, employees: XX)
- Proposal: Adoption of XX
- Filename: proposal-draft.md

## Content to Include
1. Cover page (title, date, proposing company name placeholder)
2. Executive summary (key points in about 3 lines)
3. Background (market trends and client challenges)
4. Detailed proposal
5. Implementation schedule (3-month estimate)
6. Expected benefits (include numbers where possible)
7. Estimated costs
8. Next steps

## Writing Style
- Business formal
- Add parenthetical explanations for technical terms
- Assume the reader is a non-technical executive
```

#### Template B: Internal Proposal

```
Using X.md as reference, create an internal initiative proposal.

## Proposal Overview
- Submitted to: Head of the [X] department
- Proposal: Adoption/implementation of XX
- Filename: internal-proposal.md

## Content to Include
1. Purpose of the proposal (why this is being proposed)
2. Current challenges
3. Proposed initiative details
4. Expected benefits
5. Required resources (personnel, budget, timeline)
6. Risks and mitigation
7. Implementation schedule

## Writing Style
- Appropriate tone for an internal document
- Data-driven and persuasive content
```

### How to Reference Files

Claude Code can read and write files in the current folder.

| What You Want to Do | Example Instruction |
|---------------------|---------------------|
| Check file contents | `Read X.md and summarize its contents` |
| Create something new based on a file | `Using X.md as reference, create Y` |
| Compare multiple files | `Compare X.md and Y.md` |
| Edit part of a file | `Rewrite the "Background" section of X.md` |
| List files in the folder | `Show me the files in this folder` |

---

## Effective Instruction Checklist

Before giving instructions to Claude Code, check the following points.

### The 5W1H Basics

- [ ] **What** — Is it clear what you want created? (report, proposal, comparison table, etc.)
- [ ] **Who** — Have you specified the target audience? (executives, sales team, engineers, etc.)
- [ ] **Why** — Have you stated the purpose? (executive meeting, client proposal, internal sharing, etc.)
- [ ] **How much** — Have you specified the length? (about 2,000 words, 2 pages, etc.)
- [ ] **How** — Have you specified format and conditions? (filename, format, whether to include citations, etc.)
- [ ] **When** — Have you specified the time period for the information? (from 2024 onwards, latest, etc.)

### Additional Elements to Improve Quality

- [ ] **Persona** — Have you told Claude Code what role to play?
  - Example: "As a consultant with deep expertise in the SaaS industry"
- [ ] **Tone** — Have you specified the writing tone?
  - Example: "Business formal" or "Clear and approachable"
- [ ] **Specifics** — Have you listed the elements to include as bullet points?
- [ ] **Citations** — Have you requested citations for data and facts?
- [ ] **Reference files** — Have you specified any existing files to reference?

### Tips for Revision Instructions

- [ ] **Be specific** — Instead of "make it better," state "what to change and how"
- [ ] **Identify the location** — Instead of "the whole thing," narrow it to "the X section"
- [ ] **Provide reasons** — "Since executives will be reading this, please reduce technical jargon"

---

## Good/Bad Instruction Examples

### Research Request

| | Instruction Example |
|---|---|
| Bad | `Research the AI market` |
| Good | `Research the domestic AI market size, covering data from 2024 to 2026. Summarize the growth rate and major players. The target audience is executive meeting attendees. Keep it to about 2 pages. Always include citations.` |

**Why Good works:** Scope (domestic), time period (2024–2026), content (growth rate and major players), audience, length, and conditions (citations) are all specified.

### Document Creation Request

| | Instruction Example |
|---|---|
| Bad | `Create a proposal` |
| Good | `Create a proposal draft for Company A (manufacturing, 200 employees) for adopting cloud accounting software. Use market-research.md as reference data. The proposal should include implementation benefits, a projected schedule (3 months), and estimated costs. Save as proposal-a-company.md.` |

**Why Good works:** Client information, reference file, required content, and filename are all specified.

### Revision Request

| | Instruction Example |
|---|---|
| Bad | `Make it better` |
| Good | `In the "Implementation Benefits" section of proposal-a-company.md, add quantitative impacts (estimated reduction in work hours, estimated cost savings). Also, change the "Projected Schedule" section to table format.` |

**Why Good works:** Filename, specific section, and exact changes are all identified.

### Tone and Style Change

| | Instruction Example |
|---|---|
| Bad | `Make it a bit more formal` |
| Good | `Change the overall tone to business formal. Use consistent professional language throughout, avoid colloquial expressions (like "pretty much," "a lot," etc.), and replace them with formal alternatives ("substantially," "marginally," etc.).` |

**Why Good works:** The definition of "formal" is shown through concrete examples.

### Review Request

| | Instruction Example |
|---|---|
| Bad | `Check this` |
| Good | `Review proposal-a-company.md from the following perspectives: (1) Are there any contradictions in numbers or data? (2) Are there any logical gaps? (3) Are there any typos or grammatical errors? If you find issues, point them out specifically and suggest corrections.` |

**Why Good works:** Review criteria are explicitly listed, and the expected output format is also specified.

---

## CLAUDE.md Template

To avoid repeating the same instructions every time, you can write common project rules in CLAUDE.md (the AI agent's instruction file).

Use the following as a starting point and customize it for your work.

```markdown
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

To create a CLAUDE.md, give Claude Code this instruction:

```
Create a CLAUDE.md with the above content
```

---

## Key Mindsets to Remember

### Don't Aim for Perfection on the First Try

```
1. Give a rough instruction -> 2. Review the result -> 3. Request revisions -> 4. Review -> 5. Further revisions...
```

It's the same as delegating work to a human team member. Nobody can write the perfect brief on the first try. What matters is running the cycle quickly. AI agents never get frustrated no matter how many revisions you request.

### Always Verify AI Research Results

Don't take AI-generated information at face value. In particular:
- Verify numbers and data against their sources
- Confirm that company and product names actually exist
- Always cross-check information used for important decisions against primary sources

### What AI Agents Are Good At — and Not So Good At

| Good At | Not So Good At |
|---------|----------------|
| Gathering and organizing information | Knowing internal confidential information |
| Structuring documents and creating drafts | Nuanced judgment calls |
| Comparing from multiple perspectives | Reflecting the very latest news |
| Summarizing large volumes of text | Adjusting tone for interpersonal dynamics |
| Formatting into standard templates | Reflecting company-specific rules and culture |

---

## Glossary

| Term | Meaning |
|------|---------|
| **Terminal** | A screen where you operate your computer by typing commands. Sometimes called the "command line" |
| **Markdown** | A simple formatting syntax for adding headings, bullet points, and other formatting to text. Uses `#` for headings and `-` for bullet points |
| **CLAUDE.md** | A project-wide instruction file for Claude Code. Its contents are automatically applied every time |
| **Hallucination** | When AI generates plausible-sounding but factually incorrect information. Pay special attention to data and proper nouns |
| **Draft** | A preliminary version. Create a draft first, then refine it through multiple rounds of revision |
| **Prompt** | An instruction or input given to the AI. "Prompt engineering" refers to the skill of writing effective instructions |
| **Citation** | The source of information. Indicated by URLs or document references |
| **Folder (Directory)** | A location for organizing files. Also called a "directory" in terminal contexts |

---

## Next Session Preview

In the next session (Session 3), you'll learn the **basics of Git (a tool for tracking file change history)**
and how to collaborate as a team.

### Homework (Optional)

- [ ] Conduct one research task related to your work using Claude Code
- [ ] Create a draft of some document based on your research results
- [ ] Add 2-3 rules to your CLAUDE.md that would be useful for your work
