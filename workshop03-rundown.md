# Playable Stories: Vibe Coding Meaningful Games

## Workshop Rundown

> 📍 **SPACE4**, 113 Fonthill Road, London N4 3HH
> 📅 **Thursday, 8 October 2026** · 🕕 **6:00 PM – 8:30 PM** (BST)
> 🎟️ [Eventbrite](https://www.eventbrite.co.uk/e/playable-stories-vibe-coding-meaningful-games-tickets-1998355417849) 🤝 A workshop by [Into Storymode](https://intostorymode.com) / Playable Stories
> 🖥️ [Slide deck](https://playablestories.github.io/vibe-coding-workshop/workshop03-deck.html)

---

Welcome! Over the next two and a half hours you'll make a small browser game that *means something* — without writing a single line of code. You'll talk to an AI in plain English, and it builds the game. Your job is the part no machine can do: deciding what the game is *about*, and what you want a player to feel.

**The one big idea:**

> **The mechanic is the message.** A game's real story isn't the words on screen — it's the *rules*. Change the rule, change the meaning.

**What you'll leave with:** a published, playable link to a game that's yours — and a workflow you can keep using.

---

## Schedule

| Time | What we're doing |
|---|---|
| 6:00 | Welcome & the big idea |
| 6:10 | Introductions — pick a card |
| 6:20 | Games that mean something |
| 6:35 | **Activity 1 — Your one sentence** |
| 6:40 | **Activity 2 — Map it to a mechanic** |
| 6:50 | **Activity 3 — Build with AI** |
| 7:35 | Publish, share & reflect |
| 7:50 | Make your own game or ask questions |
| 8:20 | Closing & next steps |
| 8:30 | Finish |

---

### 6:00 · Welcome & the Big Idea (10 mins)

- Hello from William Wong & Into Storymode.
- Why games are a powerful medium: you don't *read* the message, you *do* it — and you feel it.

> **The mechanic is the message.**

---

### 6:10 · Introductions — Pick a Card (10 mins)

Pick one card, take two minutes to write, then we go round — your name and your answer, about 40 seconds each:

1. Something that made you angry this week.
2. A time you had to choose between two things you cared about.
3. A place, a person, or a routine you miss.

Hold on to what you wrote. Most people's game starts here.

---

### 6:20 · Games That Mean Something (15 mins)

Short games that still hit hard: **Passage**, **Loneliness**, **Dumb Ways to Die**, **Florence**, and a whole scene doing this at [Game Poems Magazine](https://www.gamepoems.com/).

And at our scale, made the way you'll make yours tonight:

- **Boardroom** ([play ▶](https://corporate-reign.vercel.app)) — four meters, all at 50; every decision pleases one group and angers another. *Leadership is an impossible balancing act.*
- **Office Chair Racing** ([play ▶](https://office-race-game-lilac.vercel.app)) — pump the keys to go faster; stop, and you're fired. *Climbing the ladder doesn't make you safe.*

And one made with a quantum computer, at a hackathon last week:

- **Faded Passport** ([play ▶](https://faded-passport.vercel.app)) — a border-crossing game, turned around: you're the traveller coming home after years away, and the longer you've been gone, the more your passport photo dissolves into a picture of home. *The longer you're away, the less home recognises you.* Made by William at Moth Hack 2026.

A rule creates a feeling:

- Move only *forward*, never back → **regret**
- Helping someone *costs* you points → **sacrifice**
- Never quite catching up → the **treadmill of modern work**

**The framework — work backwards from the feeling:**

> **Message → Experience → Mechanic**

Don't ask *"What game should I make?"* Ask *"What should my audience feel?"* — then find the rule that creates it.

> Read more: **[The idea](01-the-idea.md)**

---

## Activity 1 · 6:35 — Your One Sentence (5 mins)

Open the **[worksheet](worksheet.md)** (paper or phone) and finish one sentence:

> **"My game is about ____________, and I want the player to feel ____________."**

You wrote most of this at 6:10. Say it out loud to a neighbour — saying it reveals the fuzz.

---

## Activity 2 · 6:40 — Map It to a Mechanic (10 mins)

Find something players already know how to do — matching, throwing, sorting, placing, racing, hiding, choosing, balancing — then change one part of it.

| The experience | A mechanic that carries it |
|---|---|
| Feeling unheard | Dialogue choices that get ignored |
| Housing insecurity | Constantly moving between spaces |
| Memory and migration | Matching fragments of memories |
| Community cooperation | Shared resource management |

**Your turn:**

> **The player ________. The game responds by ________. That makes them feel ________.**

Say it to your neighbour. If it sounds like a theme rather than an action, keep going.

Not sure where to start? The **[catalogue](02-pick-a-game.md)** has six games to build from.

---

## Activity 3 · 6:50 — Build with AI (45 mins)

The hands-on heart of the session. Facilitators float throughout — wave us over any time.

**The loop, whatever you're building:**

1. Describe the game in plain English: your one sentence and your mechanic.
2. Run it and play it before you ask for anything else.
3. Change one thing at a time. If the AI changes too much: *"Undo that last change — I preferred it before."*

→ **[Prompt library](prompts/)** · **[Fixing things](prompts/fixing-things.md)**

**Building from a catalogue game (Replit).** **Create → Import from GitHub**, paste the game's Import URL from the [catalogue](02-pick-a-game.md), press **Run**, and play it once as-is. Then reskin or remix it — see **[Reskin](03-reskin.md)** and **[Remix](04-remix.md)**.

**Building from scratch (one group, with William).** One group with a strong mapping from message to mechanic builds a new game live, the way William makes his own:

1. **Talk it through — Claude.ai.** Explain the idea. Let it ask questions and push back. No building yet.
2. **Settle the mechanic — Claude.ai.** Player action, system response, consequence. One sentence each.
3. **Write the prompt — Claude.ai.** Ask it to turn the conversation into a build prompt for the smallest playable version.
4. **Build and play — Claude Code.** Hand over the prompt. Play what comes back. Change one thing at a time.

What the conversation sounds like:

- *"I want to make a game about ____. Before we build anything, ask me questions."*
- *"What familiar game is closest to this feeling?"*
- *"Where does this idea fall apart? Push back."*
- *"Write this up as a build prompt for Claude Code. One HTML file, the smallest playable version."*

The thinking happens in the chat. The prompt is what you carry across. → More in **[Realise](06-realise.md)**

Want to see a real build prompt? Here's the one behind Faded Passport: **[BRIEF.md](https://github.com/WWStoryMode/moth-hack-2026/blob/main/apps/faded-passport/BRIEF.md)**. The opening sections, "The piece" and "Flow", are the part you'd write yourself; the API detail underneath came later.

**Check-in — which rung are you on?**

1. **Reskin** — keep the rules, change the words and the look. Most people start here, and it's plenty.
2. **Remix** — find the expectation the game relies on, and break it.
3. **Realise** — describe a whole new game from a new idea.

Getting a first one working is a finished game.

> 💡 Your first attempt might miss. **That's the workshop working, not failing** — change the rule and try again.

---

### 7:35 · Publish, Share & Reflect (15 mins)

**Publish:**

1. Make sure it runs and plays the way you want.
2. In Replit, press **Deploy / Publish** and pick the free option. Building in Claude Code? Upload the HTML file to itch.io.
3. Open the link on your phone. Hand it to your neighbour without explaining it.

→ **[Publish & share](05-publish-and-share.md)**

**Show-and-tell — 60 seconds each:**

1. What did you start from?
2. What did you change?
3. What's it about? (your one sentence)

**Submit it to Shorts** while you're still in the room: **[shorts.intostorymode.com/submit](https://shorts.intostorymode.com/submit)** — title, link, and your one sentence.

Three plain questions for anyone who built something today — the same ones on the Shorts form:

- May we use your name?
- May we link to your game?
- May we quote what you told us?

However you answer is entirely fine.

**Reflect:** What surprised you? How could this apply in your organisation or community?

---

### 7:50 · Make Your Own Game or Ask Questions (30 mins)

Your time, your choice:

- **Keep building.** Change one more rule, try the next rung, or start a second game from a new sentence. Publish again when you're happy.
- **Ask questions.** About your game, the tools, or taking this back to your organisation or community. Wave a facilitator over.

→ **[Prompt library](prompts/)** · **[Fixing things](prompts/fixing-things.md)** · **[Realise](06-realise.md)**

---

### 8:20 · Closing & Next Steps (10 mins)

- All the materials are yours to keep — the [prompt library](prompts/) works in any AI builder, not just Replit.
- Keep going: try **[Realise](06-realise.md)** from scratch, or remix a different catalogue game.
- Q&A and networking.

#### 📋 Before you go — two minutes of feedback

[![Feedback form QR code](assets/feedback-qr.png)](https://forms.gle/fP8LDfjrJZhkaKKy6)

👉 **[forms.gle/fP8LDfjrJZhkaKKy6](https://forms.gle/fP8LDfjrJZhkaKKy6)**

**You came in a non-coder. You're leaving a game designer.**

### What you'll take away

- An understanding that **the mechanic is the message**
- A simple framework — **Message → Experience → Mechanic**
- A **published, playable prototype** of your own
- A repeatable workflow: **one sentence → mechanic → build → publish → share**

---

## What we learned

*(to be filled in after the day, while it's fresh)*

---

*Thank you for making something that means something.* 🌗
