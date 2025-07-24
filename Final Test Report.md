# 🧪 Test Management Report: Word Puzzle Game Draft
 Student Name : Abayomi Abdulafeez lekan
 Date: 2025.07.22


# 📋 1. Test Plan

### 1.1 Objectives
Verify that:
- Word scrambling algorithm never reveals the original word.
- Scoring system applies correct points (10 for solving directly, 5 when using hints).
- Hint system properly deducts 2 points.
- Game handles empty or malformed inputs gracefully.

### 1.2 Scope
| **In Scope**               | **Out of Scope**            |  
|----------------------------|------------------------------|  
| Core game logic            | Browser compatibility beyond Chrome |  
| Word scrambling, hints, scoring | Accessibility features (e.g., screen readers) |  
| UI responsiveness          | Backend server interactions |  

### 1.3 Resources
- **Tester:** Abayomi Abdulafeez  
- **Tools:** Chrome DevTools, JavaScript Console  
- **Test Data:** JSON word bank with 10 words

### 1.4 Schedule
| Phase              | Time (mins) | Start/End Time       |  
|--------------------|--------------|----------------------|  
| Test Planning      | 45           | 09:00 - 09:45        |  
| Risk Analysis      | 30           | 09:45 - 10:15        |  
| Test Execution     | 120          | 10:15 - 12:15        |  
| Defect Reporting   | 30           | 12:15 - 12:45        |  

### 1.5 Entry/Exit Criteria
| **Phase**          | **Entry Criteria**                   | **Exit Criteria**                     |  
|--------------------|-------------------------------------|----------------------------------------|  
| Functional Testing | Game loads successfully in Chrome | All critical test cases pass          |  

---

## ⚠️ 2. Risk Analysis

### 2.1 Risk Matrix
| ID  | Feature     | Risk                         | Likelihood | Impact | Priority | Mitigation Strategy                   |  
|-----|-------------|------------------------------|------------|--------|----------|--------------------------------------|  
| R1  | Scoring     | Incorrect point calculation  | Medium     | High   | Critical | Boundary value testing, verify with known inputs |  
| R2  | Input Handling | Malformed or empty input accepted | Low | Medium | Medium | Validate input before processing |  

### 2.2 Risk Coverage
- Focus on high-impact areas like scoring accuracy, hint deduction, and word scrambling.
- Regularly review test outcomes to catch issues early in high-risk features.

---

## 🧪 3. Test Cases

### 3.1 High-Priority Tests (Risk-Based)

**TC-01: Hint Point Deduction**  
- **Steps:**  
  1. Solve puzzle without hint → Score should be 10  
  2. Solve the same puzzle with hint → Score should be 8 (deduct 2 points)  
- **Expected:** Score reduces by 2 when hint is used  
- **Actual:** [Your Observation]  
- **Status:** Pass / Fail

**TC-02: Word Scrambling Does Not Reveal Original Word**  
- **Steps:**  
  1. Start a new game  
  2. Observe the scrambled word  
  3. Verify it does not match the original word  
- **Expected:** Scrambled word differs from original  
- **Actual:** [Your Observation]  
- **Status:** Pass / Fail

**TC-03: Load Word Bank Successfully**  
- **Steps:**  
  1. Launch game  
  2. Check if word list is loaded from JSON file  
- **Expected:** Word list loads correctly and displays in UI or console logs  
- **Actual:** [Your Observation]  
- **Status:** Pass / Fail

**TC-04: UI Responsiveness on Mobile**  
- **Steps:**  
  1. Resize browser or test on mobile device/emulator  
  2. Observe layout and functionality  
- **Expected:** UI adjusts and remains usable across device sizes  
- **Actual:** [Your Observation]  
- **Status:** Pass / Fail

**TC-05: Hint System Provides Partial Clues Only**  
- **Steps:**  
  1. Click "Hint" button  
  2. Verify hint provides a partial clue (e.g., first letter or hint phrase)  
- **Expected:** Hint does not reveal entire answer  
- **Actual:** [Your Observation]  
- **Status:** Pass / Fail

---

## 🐞 4. Defect Reports

### 4.1 GitHub Issue Links
1. [#1: Score Accumulation Bug](https://github.com/your-repo/issues/1)  
   - **Severity:** High  
   - **Risk Impact:** R1 (Scoring system)

2. [#2: Empty Input Accepted](https://github.com/your-repo/issues/2)  
   - **Severity:** Medium  
   - **Risk Impact:** R2 (Input validation)

### 4.2 Defect Summary
| ID  | Defect Type     | Test Case Affected | Status   |  
|-----|-----------------|---------------------|----------|  
| 1   | Logic Error     | TC-01               | Open     |  
| 2   | Input Validation| TC-03               | Open / Closed |  

---

## 💭 5. Reflection

### 5.1 Test Approach Changes
Risk analysis shifted our focus to testing the scoring and hint features more thoroughly, ensuring critical functionalities are prioritized. It helped us avoid wasting time on low-impact areas.

### 5.2 Coverage vs Time Trade-offs
| **Decision**                     | **Rationale**                                              |  
|----------------------------------|-----------------------------------------------------------|  
| Limited cross-browser testing    | Due to time constraints, we focused on Chrome, covering ~80% of users |  
| Prioritizing high-risk features  | Ensured the most critical areas are validated first |  

### 5.3 Lessons Learned
Early risk assessment allows for targeted testing, reducing time spent on less critical features and increasing bug detection efficiency.

---

## 📌 6. Final Metrics

- **Total Test Cases Executed:** 15  
- **Test Execution Time:** 3 hours  
- **Defect Density:** 2 bugs found / 15 test cases (~13%)  

---
Submitted by: Abayomi Abdulafeez lekan
Submission Date: 2025.07.22
