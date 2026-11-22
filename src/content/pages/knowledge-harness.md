---
title: "Knowledge Work Harness"
description: "Local-first software for research and writing that records where the evidence for every claim is."
pubDate: 2026-11-22
---

The knowledge work harness is software I am building to take one piece of academic work from question to a draft I can submit, and to record, for every claim in that draft, where the evidence is, who checked it and when. It does not write or judge the argument.

> The real power and benefit of Claude, I believe, is the combination of the models and the harness of the desktop app. … However, I understand the risks involved when personally identifiable student information could be disclosed, violating federal law (FERPA). So, no live or past class information, private or proprietary data.
>
> — [“Too much visibility is the same as invisibility”](/blog/posts/too-much-visibility/)

## Privacy by design

- **Local models first.** Work runs on my own machines, and a model gateway routes each request, caps spending and keeps a ledger of what it spent.
- **Data stays out of the cloud sync.** The harness keeps its records outside any synced folder and refuses to write a store inside one.
- **Nothing goes out on its own.** The harness does not submit, publish or contact anyone; anything addressed to another person is a file for me to send.
- **No secrets in the code.** Keys stay out of the repository, and its test data is synthetic.

## What it does now

- **An append-only record** of each piece of work, hash-chained so that an edit after the fact shows up when the record is checked.
- **A citation check** that looks each reference up in Crossref and OpenAlex, then in my own library, and reports any reference it cannot find or could not check instead of passing it.
- **Unattended runs** that report progress as they go and leave a notice when they stop.

## How it is built

- **Python 3.12 with uv**, Windows first, run from the command line.
- **Built in small increments**, one at a time, each with its own tests.
- **Tested against planted errors.** Synthetic fixtures carry known faults, such as bad citations, and each check is scored against labels the code under test never sees.
- **Clean-room.** It studies existing tools for what to build and copies none of their code.

## Status

In development. The record store, the runtime and the citation check are built. The source code is not yet public.
