# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly specifying the dependencies array. The `bug.js` file contains the erroneous code.  The `bugSolution.js` file shows the corrected version.

## Bug Description
The `useEffect` hook in `bug.js` attempts to increment the `count` state variable every render, leading to an infinite loop. The dependency array `[count]` triggers the effect whenever the count changes, resulting in continuous updates. This is a classic case of incorrect usage of the `useEffect` hook.

## Solution
The `bugSolution.js` shows how to avoid this situation. The dependency array is modified to fix the problem.  If you don't need to run the effect every time the count changes, you need to remove `count` from the dependency array, or add appropriate logic to stop the effect running if the count changes unexpectedly.