---
layout: default
title: C#
# description: Description
# parent: Parent
# grand_parent: Grand Parent Title
has_children: true
has_toc: false
# child_nav_order: reversed
# nav_exclude: true
# nav_order: 1
# search_exclude: true
# permalink: /
---

# C#
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Hello World Example

```c#
Console.WriteLine("Hello World!");
```

`Console` is a class, `.` is a member access operator, `WriteLine()` is a method, `Hello World!` is a string literal, `;` is an end of statement operator.

---

## Data Types

- `string`: `"Hello World!"`
- `char`: `'H'`
- `int`: `100` 
- `decimal`: `100.00m`
- `bool`: `true`

---

## Initialising Variables

```c#
// Declaring and setting the value in one line with the assignment operator "="
string firstName = "Tony";
Console.WriteLine(firstName);
```

### Implicitly-Typed Variables

```c#
// The compiler infers the data type
var firstName = "Tony";
```

Variables are statically typed in C# (the type is locked in at the time of declaration).

---

## Verbatim String Literal

```c#
Console.WriteLine(@"Tony was here!
  And also here. Backslashes \ don't need to be escaped now.");
```

---

## String Interpolation

```c#
string firstName = "Tony";
string lastName = "Le";
Console.WriteLine($"My name is {firstName} {lastName}!");
```

---

## Fahrenheit 451 Example

```c#
int fahrenheit = 451;
decimal celsius = (fahrenheit - 32m) * (5m / 9m);
Console.WriteLine($"The temperature is {celsius} Celsius.");
```

---

## External links
{: .no_toc .text-delta }

- [C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)
