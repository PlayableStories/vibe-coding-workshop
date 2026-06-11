# Workshop Feedback — Web Form

A small static feedback site whose responses flow into a **Google Form's
linked spreadsheet**. No server, no Apps Script, no AI. Respondents only ever
see the branded site below; the Google Form is just the invisible data sink.

```
feedback-site/
├── index.html   ← the form
├── styles.css   ← styling
├── script.js    ← submit logic  (paste your Form ID + field ids here)
└── README.md    ← you are here
```

## How it works

```
Branded form  ──POST──▶  Google Form "formResponse" endpoint  ──▶  linked Google Sheet
```

The site posts each answer to the Google Form's hidden submit endpoint, mapped
to that question's `entry.xxxx` id. Google records it in the form's response
spreadsheet automatically — exactly like the previous survey.

---

## Setup (about 10 minutes, one time)

### 1. Create the Google Form

Make a new [Google Form](https://forms.new). Add these **11 questions**, in
this order. **Make them all _Short answer_** (use _Paragraph_ for #7 and #8)
and leave every question **not required** — respondents never see this form, so
type/validation don't matter; plain text accepts anything.

The question **titles become your spreadsheet column headers**, so name them
clearly:

| # | Question title (→ column header) | Type |
|---|----------------------------------|------|
| 1 | Role | Short answer |
| 2 | Rating | Short answer |
| 3 | Pace | Short answer |
| 4 | Most valuable | Short answer |
| 5 | Confidence | Short answer |
| 6 | Built prototype | Short answer |
| 7 | Prototype description | Paragraph |
| 8 | Keep / change | Paragraph |
| 9 | Email opt-in | Short answer |
| 10 | Name | Short answer |
| 11 | Email | Short answer |

Then link a spreadsheet: **Responses tab → green Sheets icon → Create.**

### 2. Get the Form ID

Open the form's **Send → link** (or just the edit URL). The id is the long
string here:

```
https://docs.google.com/forms/d/e/   1FAIpQLSxxxxxxxxxxxxxxxx   /viewform
                                  └──────── FORM_ID ────────┘
```

Paste it into `script.js` → `FORM_ID`.

### 3. Get each question's `entry.xxxx` id

1. In the form editor, click the **⋮ menu (top right) → Get pre-filled link.**
2. Type a dummy answer into every question, then click **Get link → Copy link.**
3. Paste that link somewhere — it contains the ids, e.g.
   `...&entry.1234567890=Student&entry.987654321=5&...`
4. Read them off **in the same order as the table above** and fill in the
   `ENTRY` map in `script.js`:

```js
const ENTRY = {
  role:           "entry.1234567890",  // Q1
  rating:         "entry.987654321",   // Q2
  pace:           "entry.…",           // Q3
  valuable:       "entry.…",           // Q4
  confidence:     "entry.…",           // Q5
  prototype:      "entry.…",           // Q6
  prototype_desc: "entry.…",           // Q7
  keep_change:    "entry.…",           // Q8
  optin:          "entry.…",           // Q9
  name:           "entry.…",           // Q10
  email:          "entry.…",           // Q11
};
```

### 4. Deploy the site to Netlify

- **Drag-and-drop:** drop the `feedback-site` folder onto
  [app.netlify.com/drop](https://app.netlify.com/drop).
- **Or from this repo:** point Netlify at the repo with **base directory**
  `feedback-site` and no build command (plain static files).

Open the Netlify URL, submit a test response, and check the form's
**Responses** — the row appears within a second or two.

---

## Notes & gotchas

- **You won't see success/error from Google.** The `formResponse` endpoint
  returns no CORS headers, so the site submits "blind" (`mode: "no-cors"`) and
  shows the thank-you optimistically. Do one real test submission after setup
  to confirm rows land. (Network failures are still caught and shown.)
- **Required fields would silently fail.** Keep every Google Form question
  *not required* — a required field Google considers empty would reject the
  whole submission, and you'd never see the error. Client-side, only the star
  rating is required.
- **Changing questions:** edit `index.html` for wording. If you add a field,
  add a question to the Form, add its id to `ENTRY`, and add the key to the
  `answers` object in `script.js`.
- **Privacy:** email is optional and only collected on opt-in. The response
  sheet is private to your Google account unless you share it.
- **No AI summary** — by design. Analyse the responses in the Sheet however
  you like.
