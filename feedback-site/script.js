// ---------------------------------------------------------------------------
// CONFIG — connect this form to your Google Form (see README.md).
//
// 1. FORM_ID: from your form's URL
//      https://docs.google.com/forms/d/e/THIS_BIT/viewform
// 2. ENTRY:  each question's "entry.xx␣" field id, from the form's
//      "Get pre-filled link" feature (README walks you through it).
// ---------------------------------------------------------------------------
const FORM_ID = "PASTE_YOUR_FORM_ID_HERE";

const ENTRY = {
  role:           "entry.0000000001",
  rating:         "entry.0000000002",
  pace:           "entry.0000000003",
  valuable:       "entry.0000000004",
  confidence:     "entry.0000000005",
  prototype:      "entry.0000000006",
  prototype_desc: "entry.0000000007",
  keep_change:    "entry.0000000008",
  optin:          "entry.0000000009",
  name:           "entry.0000000010",
  email:          "entry.0000000011",
};

const form = document.getElementById("feedback-form");
const statusEl = document.getElementById("status");
const submitBtn = document.getElementById("submit");
const thanksEl = document.getElementById("thanks");

// --- Star rating ----------------------------------------------------------
const stars = [...document.querySelectorAll(".star")];
const ratingInput = document.getElementById("rating");
const ratingHint = document.getElementById("rating-hint");
const LABELS = { 1: "Poor", 2: "Not great", 3: "Okay", 4: "Good", 5: "Excellent" };

function paint(value) {
  stars.forEach((s) => s.classList.toggle("on", Number(s.dataset.value) <= value));
}
stars.forEach((star) => {
  const v = Number(star.dataset.value);
  star.addEventListener("mouseenter", () => paint(v));
  star.addEventListener("click", () => {
    ratingInput.value = v;
    paint(v);
    ratingHint.textContent = `${v}/5 — ${LABELS[v]}`;
  });
});
document.getElementById("stars").addEventListener("mouseleave", () => {
  paint(Number(ratingInput.value) || 0);
});

// --- Submit ---------------------------------------------------------------
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.className = "status";
  statusEl.textContent = "";

  // Light validation: ask for at least an overall rating.
  if (!ratingInput.value) {
    statusEl.className = "status err";
    statusEl.textContent = "A star rating would really help — tap one above.";
    document.getElementById("stars").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (FORM_ID.startsWith("PASTE_")) {
    statusEl.className = "status err";
    statusEl.textContent = "Form isn't connected yet (no Form ID set).";
    return;
  }

  const fd = new FormData(form);
  const roles = fd.getAll("role");
  const roleOther = (fd.get("role_other") || "").trim();
  if (roleOther) roles.push(roleOther);

  const valuable = fd.get("valuable") || "";
  const valuableOther = (fd.get("valuable_other") || "").trim();

  // Flatten everything to plain strings — the Google Form questions are all
  // text fields, so they accept any value without exact-match validation.
  const answers = {
    role: roles.join(", "),
    rating: ratingInput.value,
    pace: fd.get("pace") || "",
    valuable: valuableOther ? `${valuable} (${valuableOther})`.trim() : valuable,
    confidence: fd.get("confidence") || "",
    prototype: fd.get("prototype") || "",
    prototype_desc: (fd.get("prototype_desc") || "").trim(),
    keep_change: (fd.get("keep_change") || "").trim(),
    optin: fd.get("optin") || "",
    name: (fd.get("name") || "").trim(),
    email: (fd.get("email") || "").trim(),
  };

  // Map our keys to the form's entry.xxx ids.
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(answers)) {
    const entryId = ENTRY[key];
    if (entryId) body.append(entryId, value);
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";

  try {
    // Google's formResponse endpoint sends no CORS headers, so we post with
    // mode:"no-cors". The response is opaque (we can't read it), but the
    // submission still records — reaching here means it was delivered.
    await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
      method: "POST",
      mode: "no-cors",
      body,
    });
    form.hidden = true;
    thanksEl.hidden = false;
    thanksEl.scrollIntoView({ behavior: "smooth", block: "center" });
  } catch (err) {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send feedback";
    statusEl.className = "status err";
    statusEl.textContent = "Couldn't send — check your connection and try again.";
  }
});
