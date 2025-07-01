import { Problem } from '../types';

export const problems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    slug: "two-sum",
    acceptance: 48.2
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    tags: ["Linked List", "Math", "Recursion"],
    slug: "add-two-numbers",
    acceptance: 37.1
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    tags: ["String", "Sliding Window", "Hash Table"],
    slug: "longest-substring-without-repeating-characters",
    acceptance: 33.8
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    slug: "median-of-two-sorted-arrays",
    acceptance: 34.3
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    tags: ["String", "Dynamic Programming"],
    slug: "longest-palindromic-substring",
    acceptance: 31.5
  },
  {
    id: 6,
    title: "ZigZag Conversion",
    difficulty: "Medium",
    tags: ["String"],
    slug: "zigzag-conversion",
    acceptance: 40.9
  },
  {
    id: 7,
    title: "Reverse Integer",
    difficulty: "Medium",
    tags: ["Math"],
    slug: "reverse-integer",
    acceptance: 26.3
  },
  {
    id: 8,
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    tags: ["String", "Math"],
    slug: "string-to-integer-atoi",
    acceptance: 16.1
  },
  {
    id: 9,
    title: "Palindrome Number",
    difficulty: "Easy",
    tags: ["Math"],
    slug: "palindrome-number",
    acceptance: 51.6
  },
  {
    id: 10,
    title: "Regular Expression Matching",
    difficulty: "Hard",
    tags: ["String", "Dynamic Programming", "Recursion"],
    slug: "regular-expression-matching",
    acceptance: 28.1
  },
  {
    id: 11,
    title: "Container With Most Water",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Greedy"],
    slug: "container-with-most-water",
    acceptance: 54.1
  },
  {
    id: 12,
    title: "Integer to Roman",
    difficulty: "Medium",
    tags: ["Hash Table", "Math", "String"],
    slug: "integer-to-roman",
    acceptance: 58.7
  },
  {
    id: 13,
    title: "Roman to Integer",
    difficulty: "Easy",
    tags: ["Hash Table", "Math", "String"],
    slug: "roman-to-integer",
    acceptance: 57.9
  },
  {
    id: 14,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    tags: ["String", "Trie"],
    slug: "longest-common-prefix",
    acceptance: 39.2
  },
  {
    id: 15,
    title: "3Sum",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Sorting"],
    slug: "3sum",
    acceptance: 30.2
  },
  {
    id: 16,
    title: "3Sum Closest",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Sorting"],
    slug: "3sum-closest",
    acceptance: 42.3
  },
  {
    id: 17,
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    tags: ["String", "Backtracking", "Recursion"],
    slug: "letter-combinations-of-a-phone-number",
    acceptance: 52.1
  },
  {
    id: 18,
    title: "4Sum",
    difficulty: "Medium",
    tags: ["Array", "Two Pointers", "Sorting"],
    slug: "4sum",
    acceptance: 36.5
  },
  {
    id: 19,
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    tags: ["Linked List", "Two Pointers"],
    slug: "remove-nth-node-from-end-of-list",
    acceptance: 38.7
  },
  {
    id: 20,
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["String", "Stack"],
    slug: "valid-parentheses",
    acceptance: 40.4
  },
  {
    id: 21,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    tags: ["Linked List", "Recursion"],
    slug: "merge-two-sorted-lists",
    acceptance: 60.2
  },
  {
    id: 22,
    title: "Generate Parentheses",
    difficulty: "Medium",
    tags: ["String", "Backtracking"],
    slug: "generate-parentheses",
    acceptance: 50.1
  },
  {
    id: 23,
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    tags: ["Linked List", "Divide and Conquer", "Heap"],
    slug: "merge-k-sorted-lists",
    acceptance: 38.4
  },
  {
    id: 24,
    title: "Swap Nodes in Pairs",
    difficulty: "Medium",
    tags: ["Linked List"],
    slug: "swap-nodes-in-pairs",
    acceptance: 58.3
  },
  {
    id: 25,
    title: "Reverse Nodes in k-Group",
    difficulty: "Hard",
    tags: ["Linked List", "Recursion"],
    slug: "reverse-nodes-in-k-group",
    acceptance: 36.7
  },
  { id: 26,
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    tags: ["Array", "Two Pointers"],
    slug: "remove-duplicates-from-sorted-array",
    acceptance: 63.5
  },
];

// Extract all unique tags
export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  
  problems.forEach(problem => {
    problem.tags.forEach(tag => {
      tagSet.add(tag);
    });
  });
  
  return Array.from(tagSet).sort();
};