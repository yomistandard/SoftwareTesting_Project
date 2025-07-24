
---

# Software Test Management for Task Manager And Word Puzzle Game

🎯 **Objectives**  
I will understand the components of a test plan, including objectives, scope, resources, and schedule.  
I will apply entry and exit criteria to my testing process.  
I will perform risk analysis to prioritize test cases effectively.  
I will practice test monitoring and control techniques.  
I will implement risk-based testing strategies to ensure thorough coverage.

🕹️ **Project Overview: Word Puzzle Game**  
I will be testing a JavaScript Task we app word puzzle game that features:  

- Word scrambling logic  
- Hint system  
- Scoring mechanism  
- Responsive UI  
- JSON word bank  

**Key Components**:  
- Core game logic (within `<script>` in HTML)  
- Word database (JSON format)  
- User interface (HTML/CSS)  

📋 **Test Planning Task**  .  

I will create a `Test_Plan.md` file with the following sections:

### 1. Test Objectives  
I will define what critical functionality I need to verify. For example: "Ensure the word scrambling algorithm never reveals the original word."

### 2. Scope  
I will specify what is included and excluded from testing. For example:  
- **In scope**: Game logic, scoring system  
- **Out of scope**: Browser compatibility  
- **Tools**: Browser DevTools, JS console  
- **Environment**: Chrome browser  

### 3. Schedule  
| Phase             | Time Estimate           |  
|-------------------|-------------------------|  
| Test Planning     |                         |  
| Test Design       |                         |  
| Test Execution    |                         |  
| Reporting         |                         |  

### 4. Entry/Exit Criteria  
- **Entry**: The game is functional on Chrome  
- **Exit**: All critical bugs are fixed, and 90% of test cases pass  

⚠️ **Risk Analysis Task**  
I will create a `Risk_Analysis.md` file that includes:  

- **Risk Assessment Table**:  

| Feature           | Risk                               | Likelihood | Impact | Priority  |  
|-------------------|------------------------------------|--------------|---------|-----------|  
| Scoring System    | Incorrect point calculation        | Medium       | High    | Critical  |  
| Word Bank         | Missing words cause errors         | Low          | Medium  | Medium    |  
| Hint System       | Hint reveals the solution          | High         | Medium  | High      |  

- **Risk Mitigation Strategies**:  
  For example, I will implement boundary value testing to mitigate scoring risks.

🧪 **Test Design & Execution**  
1. **Risk-Based Test Cases**  
I will design 5 test cases focusing on high-risk areas, using this format:  

**ID**: TC-01  
**Feature**: Scoring System  
**Test**: Verify score deduction when using a hint  
**Steps**:  
1. Solve the puzzle without a hint  
2. Note the score  
3. Solve an identical puzzle with a hint  

**Expected Result**: Hint reduces score by 2 points  
**Risk Priority**: High  

2. **Exploratory Testing**  
While executing my test cases, I will:  
- Monitor the console for errors  
- Control test execution using DevTools  

3. **Defect Reporting**  
I will log 2 bugs in GitHub Issues. An example format:  

**Title**: Score not reset after new game  
**Steps**:  
1. Solve puzzle (score = 10)  
2. Click "New Puzzle"  
3. Solve the next puzzle  

**Expected**: Score starts from 0  
**Actual**: Score continues to accumulate  
**Severity**: Medium  
**Risk Impact**: High (affects game fairness)  

📤 **Submission Instructions**  
I will push all my work to my GitHub repository, including:  

- Completed test plan  
- Risk analysis with mitigation strategies  
- 5 risk-based test cases  
- Links to 2 GitHub issues  
- Reflection on the process  

### 📜 **File to Submit**  
`Test_Report.md` (containing all the above content in markdown format)  

## Reflection  
- How has conducting risk analysis changed my approach to testing?  
- What trade-offs did I encounter between test coverage and time constraints?  

🧠 **Concept Reinforcement**  
**Risk-Based Testing Focus**: I will prioritize tests based on the formula: Risk Exposure = Probability × Impact.  

**Test Monitoring Metrics**: I will track:  
- Defect density (bugs per feature)  
- Test case pass percentage  
- Risk coverage ratio  

### Entry/Exit Criteria Examples  
| Phase             | Entry Criteria                  | Exit Criteria                     |  
|-------------------|--------------------------------|----------------------------------|  
| Unit Testing      | Code compiled                   | 100% statement coverage        |  
| System Testing    | Features integrated               | Less than 5% critical defects |  

---


---

