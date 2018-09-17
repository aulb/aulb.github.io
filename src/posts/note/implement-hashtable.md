---
title: Hashtables
date: 2016-08-30
published: false
language: english
categories: hashtable
type: note
---
I've been studying interview questions for the past couple of weeks. One that I came across quite a few time was the infamous describe (and or implement) the inner workings of hash tables.

I thought it'd be interesting to explore this problem with my favourite programming language Python.

# What is a Hash Table?
In Python, hash tables are called dictionaries, and they are a key/value pair storage.

# How to implement a simple hash table
Using Python's data structure.

# Inner working of dictionaries

# Basic Fields
`ma_used`
`ma_fill`
`ma_mask`
`ma_table`

How does this hash function work exactly???
Why `ma_fill` the same number when a key is deleted? Whats the purpose? 

# What do you get from objects?

# What did I learn from reading?

# Inserting

# Deleting
Never resized down on deletion
This usage pattern is quite infrequent, thus why is the one pursued
no-resize-on-deletion policy

# Exploring mapping and collision, I'm sure this gets asked tons of time.
- Chaining: Each slot is the head of a linked list containing all the items that hash to that slot (my school taught me this)
Memory allocation is a slow operation, yep malloc
- Linear scan: When hit a collision
Some complicated 

- Python scan: 
*trick here*
Why 5? Great question.

# Resizing
Load factor
-We know from the readings that the table size is always a power of two- not true
n/(2/3),

re organize??? no

resizing when 2/3d full
ma_used * 4 for fewer elements
ma_used * 2 for more than 50k keys


# Tricks
Memory tradeoff
question: are the dictionaries the same size?

# Iterating through, yield, generators
Turns out that generators in Python is memory efficient as well

I learned that they do a bunch of weird things
