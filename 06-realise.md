# Realise It (Rung 3)

This is a different kind of move from the first two rungs. Reskin and Remix both start from a game that already exists — you're standing on someone else's mechanic and changing it. Realise starts from *your* idea, with nothing built yet.

You don't need this for today's workshop. If you leave with a reskin or a remix, you've made something real and finished — that's a complete outcome. This page is for when you're ready to try building a game from scratch, whether that's later tonight or next week with a fresh Replit.

Reaching a first playable version is already a full outcome in itself. Everything after that — playtesting, adding story — can happen over days or weeks, at your own pace.

## The shift

Vibe coding doesn't replace game design. It makes *building* faster — so the bottleneck moves from "how do I build this?" to "what's actually worth building?" That makes the thinking before you open Replit matter *more*, not less.

So the aim isn't to open the AI and say:

> "Make me a game about this."

The aim is to arrive at something specific and meaningful enough that when you do say it, the AI has an actual game to build — not a vague theme.

AI is useful at every stage here, not just the build: for research, for talking an idea through, for critique. You don't need to use the same AI tool for all of it.

## The workflow

The whole method, in one line:

> **Meaning → Playable relationship → Core mechanic → Cheapest useful test → Mini-GDD → AI build**

Then, once it's playable:

> **Play → Observe → Test with others → Revise (or abandon) → Add narrative and presentation → Repeat**

Steps 1–6 below walk through the first line — that's the part you can do inside a workshop session. Steps 7–9 walk through the second, as a loop you keep running afterwards.

## Step 1 — Start with what the game wants to say

Begin with a question, a tension, an observation, a feeling — not a game idea yet. Ask yourself:

> **What should the player experience, understand, question, or feel through play?**

A game about memory might start as simply as: *remembering one thing can mean losing another.*

This is a good moment to research the subject with AI — find references, existing games, and things that challenge your first assumption. Understand the idea before you try to turn it into a game.

## Step 2 — Find the playable relationship

Ask:

> **What relationship could the player take part in that expresses this idea?**

You don't need to invent a new form of play. It's usually easier to recognise something people already know how to do — matching, throwing, sorting, placing, trading, racing, hiding, choosing, balancing — and ask what happens if you change one part of it. A familiar mechanic takes on new meaning when its *rule*, *object*, *consequence*, or *context* changes.

For the memory example, this might become: *keeping one memory makes another harder to keep.* Not the exact mechanic yet — just the relationship the game should make the player feel.

> **From the catalogue — Memory of Home.** The whole game rests on one sentence written before any card was built: *"A memory can be true without being complete."* That's a playable relationship, not a mechanic — it says what the player and the system are doing to each other, before either one exists on screen. ([design doc](https://github.com/PlayableStories/memory-of-home/blob/main/GDD.md))

## Step 3 — Reduce it to one core mechanic

Turn the relationship into the smallest repeated interaction that could produce it:

> **Player action → System response → Consequence**

Ask: what does the player do? What does the game do back? Why does that consequence matter to the *next* decision?

For the memory game: *player chooses two memory cards → the game matches them by an unusual rule → preserving one relationship makes another harder to remember.*

You're not designing the whole game here. You're finding its mechanical heart. A familiar mechanic with one meaningful change is often stronger than an elaborate new system.

> **From the catalogue — Ballot / Waste.** The mechanic is a familiar mobile paper-toss: swipe to throw a ball into a bin. The one change is that a wind — built entirely from politicians' speeches — pushes the ball off-course, and the player has to angle their throw to compensate. The design doc is explicit that this *is* the meaning, not a metaphor bolted onto it: *"Compensation is not a workaround for the theme; compensation is the theme."* Action (swipe) → system response (wind bends the throw) → consequence (you only land the vote by aiming at where the wind will carry it, not where you meant to go). ([concept doc](https://github.com/PlayableStories/ballot-bin-game/blob/main/CONCEPT.md))

## Step 4 — Use the cheapest prototype that can answer the question

Don't jump straight to the full digital build. Ask:

> **What's the simplest way to find out whether this mechanic actually works?**

Some things test well on paper — cards, tokens, objects — especially matching, turn order, adjacency, trading, sequencing, placement, hidden information. Other things depend on *feel* and need a small digital test — throwing, physics, timing, movement, speed, pressure. A paper prototype won't tell you whether a toss mechanic feels good; the wobble and the force *are* the mechanic.

Use the cheapest prototype that can test your actual question. Then ask: **does it produce the experience it's supposed to?** If not, change the rule — don't try to rescue a weak mechanic with more explanatory text. And if it still isn't working after a few tries, it's fine to conclude the meaning needs a different playable relationship. Go back a step rather than defend a mechanic that isn't landing.

> **From the catalogue — Ballot / Waste, again.** The throw-and-wind mechanic depends entirely on *feel*, so it couldn't be tested on paper. Instead, the build order starts with the cheapest possible digital test: coloured rectangles standing in for the ball and the room, thrown on a real phone, purely to check the arc reads as depth. The prototype GDD is blunt about the order: *"Stop and check this before anything else,"* and later, *"playtest the central question... with placeholder art. If a player cannot read the wind from the room when the room is grey boxes and text, no amount of low-poly polish will fix it — it will only disguise it long enough to waste a month."* ([prototype GDD](https://github.com/PlayableStories/ballot-bin-game/blob/main/GDD-PROTOTYPE.md))

## Step 5 — Write a mini-GDD

Once the mechanic feels right, turn it into a small spec — not a long traditional design document, just enough for a first playable version:

- what appears on screen
- what the player can do
- the core mechanic, the system's response, the consequence
- the important game states
- how play begins and ends
- win, loss, or completion conditions
- a small amount of example content

> **From the catalogue — Memory of Home.** Its GDD is a good template for how small this can be: a one-paragraph concept, a scope split into a plain **Includes** / **Does not include** list, a short table defining the setup (6 objects × 4 colours, 12 cards), the match rule in one line ("valid if the two selected cards share either the same object or the same colour"), and a one-sentence description at the very end. That's the whole spec — small enough to hand to an AI and build from directly. ([design doc](https://github.com/PlayableStories/memory-of-home/blob/main/GDD.md))

This is the bridge between your design thinking and what you ask the AI to build. Without it, your prompt is still "make a game about memory." With it, the AI has an actual system to implement.

## Step 6 — Build the smallest digital version with AI

Take the mini-GDD into Replit and build the first playable prototype, the same way you built today's reskin or remix. Don't aim for polish, and don't add anything just because it's easy to ask for. The only question this version needs to answer:

> **What does this mechanic feel like as an actual game?**

Once that exists, you can move from guessing to watching.

---

## After the first playable build

Everything below is the continuation — for after the workshop, over days or weeks, not something to rush through tonight.

### Step 7 — Play, observe, and change

The loop becomes: **Play → Observe → Judge → Modify → Play again.** Come back to the same question — player action, system response, consequence — and ask: does the player understand what their action caused? Does the consequence change what they do next? Is the system producing the tension, humour, or reflection you meant it to? Let changes come from what actually happens in play, not from adding more features.

### Step 8 — Test the meaning with someone who doesn't know it

You can't reliably test this part alone — you already know what the game is supposed to mean, so you'll see that meaning even when it isn't really there for someone else. Hand the prototype to someone without explaining it. Watch what they do. Afterwards, ask what they thought was happening and what felt important. A different interpretation isn't automatically a failure — ask what in the game caused it. It might be telling you something richer, weaker, or just different from what you expected.

### Step 9 — Add narrative and presentation

Story doesn't matter less for coming last — in most cases, the story is *why the game exists at all*. But building the mechanic first stops the story from becoming decoration on top of an unrelated game. Once the system works, bring narrative back in: characters, dialogue, images, sound, progression, endings. It should now reinforce something the play is already doing, not carry meaning the mechanic can't.

---

## A worked example

**Meaning:** memory of home becomes less complete over time.

→ **Playable relationship:** remembering something should also involve losing or weakening something else.

→ **Core mechanic:** a familiar memory-matching game, with a changed matching rule.

→ **Cheapest test:** lay cards on a table and try the matching rule by hand, before building anything.

→ **Mini-GDD:** number of cards, objects, colours, the matching condition, turn behaviour, end state.

→ **AI build:** the simplest playable digital version of the matching game.

→ **Play and test with others:** do players feel uncertainty, association, imperfect remembering?

→ **Narrative and presentation:** objects from home, fragments of story, imagery that deepens the theme.

Nothing here was invented from nothing. A familiar game was recognised, changed in one place, and made to say something different — the same move as a Rung 2 remix, just starting from your own idea instead of the catalogue.

## The one thing to hold onto

**Don't begin by asking AI to make a game.** Research with it, talk ideas through with it, ask it to push back on you. But before you ask it to build, know:

What does the game mean? What does the player repeatedly do? How does the system respond? What consequence makes that action matter?

Vibe coding makes the implementation easy. That's exactly why deciding what to implement matters more than it used to.

---

⬅️ Back to the ladder: **[Reskin](03-reskin.md)** · **[Remix](04-remix.md)** · **Realise**

➡️ Once you've got a link: **[Publish & share](05-publish-and-share.md)**
