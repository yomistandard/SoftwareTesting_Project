# Risk Analysis

### Risk Assessment Table

| Feature            | Risk                                  | Likelihood | Impact  | Priority |
|--------------------|---------------------------------------|------------|---------|----------|
| Scoring System     | Incorrect points calculation          | Medium     | High    | Critical |
| Word Bank          | Missing words causing errors          | Low        | Medium  | Medium   |
| Hint System        | Hint reveals the solution prematurely | High       | Medium  | High     |
| Word Scrambling    | Revealing original word after scramble| Low        | High    | High     |
| UI Responsiveness  | UI breaks on smaller screens          | Medium     | Medium  | Medium   |

### Risk Mitigation Strategies
- For scoring: Implement boundary testing and verify with known inputs
- For word bank: Validate JSON data before game start
- For hints: Limit hint reveal scope and test for partial solutions
- For UI responsiveness: Test across multiple devices and use CSS media queries

---

Risk-Based Test Cases

### TC-01: Verify score deduction when using hint
- **Feature:** Scoring System
- **Steps:**
  1. Start a game and solve without hint
  2. Note the score
  3. Use hint and verify score decreases by 2 points
- **Expected:** Score reduces by 2
- **Risk Priority:** High

### TC-02: Ensure word scrambling does not reveal original word
- **Feature:** Word Scrambling
- **Steps:**
  1. Start a new game
  2. Observe scrambled word
  3. Compare with original word
- **Expected:** Scrambled word does not match original
- **Risk Priority:** High

### TC-03: Load JSON word bank successfully
- **Feature:** Word Bank
- **Steps:**
  1. Launch game
  2. Verify words are loaded from JSON
- **Expected:** Word list populated
- **Risk Priority:** Medium

### TC-04: UI responsiveness on mobile
- **Feature:** UI responsiveness
- **Steps:**
  1. Resize browser or use mobile device
  2. Observe UI layout
- **Expected:** UI adjusts correctly
- **Risk Priority:** Medium

### TC-05: Hint does not reveal entire answer
- **Feature:** Hint system
- **Steps:**
  1. Use hint feature
  2. Check if hint reveals only partial information
- **Expected:** Hint provides partial clue, not full answer
- **Risk Priority:** High

---

## Bug Reports

### Bug 1:
**Title:** Score not reset after new game  
**Steps:**  
1. Complete a puzzle, score = 10  
2. Click "New Puzzle"  
3. Solve next puzzle  
**Expected:** Score resets to 0  
**Actual:** Score accumulates from previous score  
**Severity:** Medium  
**Risk Impact:** High

### Bug 2:
**Title:** Word bank loads incorrectly with missing words  
**Steps:**  
1. Launch game  
2. Observe word list in console or UI  
**Expected:** All words from JSON load correctly  
**Actual:** Some words are missing or cause errors  
**Severity:** High  
**Risk Impact:** Medium

---

---
