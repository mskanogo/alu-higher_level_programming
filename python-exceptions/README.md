# Python Exceptions Project

## Project Overview

This project is part of the **Introduction to Programming and Databases** curriculum. The main goal is to understand **exceptions in Python**, including how to:

- Handle errors safely
- Use `try`, `except`, and `finally` blocks
- Raise built-in exceptions
- Perform safe operations on lists and integers

By completing this project, you will be able to **safely manipulate data** and handle errors gracefully without crashing your program.

---

## Learning Objectives

By the end of this project, you should be able to:

1. Explain the difference between **errors** and **exceptions** in Python.
2. Use **exceptions** to manage runtime errors.
3. Handle exceptions using `try` and `except`.
4. Use `finally` for cleanup actions.
5. Raise built-in exceptions like `TypeError` and `NameError`.
6. Write safe functions for printing lists and integers.
7. Implement division safely, including element-wise list division.

---

## Project Tasks

### 0. Safe List Printing

**Function:** `safe_print_list(my_list=[], x=0)`  
- Prints the first `x` elements of a list.  
- Uses `try/except` to handle cases where `x` is larger than the list length.  
- Returns the number of elements printed.

### 1. Safe Printing of an Integer

**Function:** `safe_print_integer(value)`  
- Prints an integer using `"{:d}".format()`.  
- Returns `True` if printing is successful, `False` otherwise.  

### 2. Print and Count Integers

**Function:** `safe_print_list_integers(my_list=[], x=0)`  
- Prints only the first `x` integers in a list.  
- Skips non-integer elements silently.  
- Returns the number of integers printed.

### 3. Integers Division with Debug

**Function:** `safe_print_division(a, b)`  
- Divides `a` by `b` and prints the result in the `finally` block.  
- Returns the result of the division or `None` if division fails.

### 4. Divide a List Element-wise

**Function:** `list_division(my_list_1, my_list_2, list_length)`  
- Divides elements of two lists element by element.  
- Handles errors like `division by 0`, `wrong type`, and `out of range`.  
- Returns a list of results.

### 5. Raise Exception

**Function:** `raise_exception()`  
- Raises a `TypeError`.

### 6. Raise Exception with Message

**Function:** `raise_exception_msg(message="")`  
- Raises a `NameError` with a custom message.

---

## Requirements

- Python 3.8.5 or higher  
- Only `vi`, `vim`, or `emacs` editors allowed  
- Files must follow **pycodestyle** (v2.7.*)  
- All files must be executable  
- First line in all files: `#!/usr/bin/python3`  
- No imports allowed  

---

## Usage Example

```bash
$ ./0-main.py
12
nb_print: 2
12345
nb_print: 5
12345
nb_print: 5

