# Human-Led, AI-Assisted Game Development Workflow

A six-stage workflow for developing short-form, meaningful playable experiences, from creative intention to tested prototype.

This is the method behind **[Realise it](06-realise.md)**, on one page. Realise walks through each stage in plain language, with examples from the catalogue.

## 1. Creative Intention — Human-led

The creator begins with a broad idea: the message, question or experience they want the player to encounter, together with a preliminary game mechanic.

**Key questions**
- What do I want players to feel, notice, question or understand?
- What will players actually do?
- How might the mechanic communicate the intention through play rather than simply illustrate it?

**Output:** An initial creative concept and experiential goal.

## 2. Reference Research and Critical Evaluation — Human + AI

The creator and AI assistant examine relevant games, mechanics, artistic works or other references. The purpose is not merely to validate the original idea, but to challenge, compare and refine it.

**Key questions**
- How have others approached similar ideas or player interactions?
- What works, what does not, and why?
- Which assumptions remain untested?

**Output:** A refined concept, useful design precedents and explicit uncertainties.

## 3. Minimum Playable Version (MPV) and Player Flow — Human + AI

Through an iterative dialogue, the concept becomes a concrete player journey: entry, actions, feedback, transitions and possible endings. The design is reduced to the smallest playable interaction capable of testing its central creative hypothesis.

**Critical checkpoint:** *What is the smallest playable interaction that can test whether the intended experience actually works?*

**Key questions**
- What is the core player action and response?
- What must be included to preserve the intended experience?
- What can be omitted or deferred?
- How do rules, narrative and player agency connect?
- Can the mechanic be tested on paper first, or does it depend on feel (timing, physics, movement) and need a small digital test?

**Output:** An MPV specification and step-by-step player flow.

## 4. Technical Planning — Human + AI

The creator and AI assistant select a practical technology stack appropriate to the MPV, taking account of platform, development time, accessibility, deployment and maintenance.

**If you're not a coder:** you don't need to choose a stack yourself. Tell the AI where the game needs to run (a browser link, a phone, itch.io, an event screen) and what it needs (sound, camera, internet), and let it propose the simplest approach in plain words.

**Key questions**
- What is the simplest suitable stack?
- What components, assets and integrations are needed?
- What constraints or technical risks affect the experience?

**Output:** A scoped technical plan and implementation approach.

## 5. AI Coding Agent Implementation Brief — Human + AI

The design and technical decisions are translated into a clear, structured prompt or game design document for an AI coding agent, such as Claude Code or Codex.

The brief should communicate creative intent as well as implementation detail: player flow, mechanics, states, visual direction, assets, acceptance criteria and boundaries of the MPV.

**Output:** An actionable implementation brief that an AI coding agent can use to build the prototype.

## 6. Prototype, Playtest and Iteration — Human-led Evaluation, AI-assisted Implementation

The coding agent implements the prototype. The creator plays, observes and evaluates whether the intended experience is actually emerging. Feedback may lead to changes in mechanics, narrative, player flow or technical choices.

**Key questions**
- Does the game produce the intended player experience?
- Where are players confused, disengaged or surprised?
- What should be revised, removed or tested next?

**Output:** A tested prototype, documented findings and a prioritised next iteration.

---

## Principles Across the Workflow

1. **Creative intention comes before technology.** Start with the experience and meaning, not a tool or implementation method.
2. **Reference research is critical, not confirmatory.** Existing work informs decisions but cannot prove the concept works.
3. **The MPV tests a creative hypothesis.** Build the smallest interaction that can reveal whether the intended experience is possible.
4. **The workflow is iterative, not strictly linear.** Findings from implementation and playtesting may reopen earlier design decisions.
5. **Human creative authorship remains central.** AI acts as a research and design dialogue partner, and coding agents assist with implementation; the creator makes and evaluates the key creative decisions.

## Summary

The human creator starts with an intention, desired player experience and preliminary mechanic. In dialogue with an AI assistant, the concept is critically explored against relevant references and turned into a minimum playable design. Together they choose a technical approach and prepare a structured brief for an AI coding agent. The resulting prototype is played, evaluated and revised under human creative direction.
