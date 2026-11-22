# My IT Portfolio

My three-page Information Technology portfolio uses one shared color palette, responsive layouts, and an accessible contact form demonstration.

## Pages and files

- `index.html` — Home and featured projects.
- `projects.html` — Projects and work.
- `about.html` — About me, skills, and contact form.
- `style.css` — Shared colors, typography, layouts, and focus styles.
- `contact.js` — Accessible client-side form validation.
- `contrast-results.json` — WebAIM contrast results from November 22, 2026.
- `wireframe.png` — Original site plan.

## Accessibility improvements

These are the implemented improvements; they are not a list of WAVE-reported errors because a completed WAVE scan is still pending.

- I made the main content on every page focusable so the skip link can move keyboard focus directly to the content.
- I added a visible, explicitly connected label to every contact field so screen reader users can identify each input.
- I grouped the optional message-topic radio buttons in a `fieldset` with a `legend` so users hear the question and its related choices together.
- I added clear required-field instructions, appropriate autocomplete values, and a message-length hint before users fill out the form.
- I connected each inline error to its field with `aria-describedby` and marked invalid fields with `aria-invalid` so errors are available beyond their red borders.
- I added a keyboard-focusable error summary with links to the affected fields so users can find and correct mistakes quickly.
- I kept entered information when validation fails and removed error states when the affected fields are corrected.
- I added a live status message to announce successful validation and clearly explain that this demo does not send or store messages.
- I gave form controls visible focus indicators, high-contrast borders, and comfortable target sizes to support keyboard and low-vision users.

The existing page titles, English language declaration, semantic landmarks, heading hierarchy, skip links, and current-page navigation are retained.

## Intentional visual design: Gestalt principles

- **Proximity:** I keep each project title and description close together inside a card and use larger gaps between cards, making it easier to tell which details belong to each project; form labels, hints, inputs, and errors follow the same grouping pattern.
- **Similarity:** I use the same lavender card backgrounds, purple headings, rounded corners, and spacing for related projects so users recognize them as one type of content.
- **Common region:** I place related content inside bordered sections, and the contact form's topic choices share a bordered fieldset to reinforce their relationship.

All three pages load `style.css`, which defines the shared lavender, blue, mint, slate, white, and purple palette; Poppins is used for headings and Open Sans for body text.

## WCAG AA contrast

I checked the following text/background combinations with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) public API on November 22, 2026; all pass AA for normal text (at least 4.5:1), including navigation hover/current states, buttons, and error messages.

| Text | Background | Ratio | AA normal text |
| --- | --- | --- | --- |
| `#334155` | `#FFFFFF` | 10.3:1 | Pass |
| `#334155` | `#F3F4F6` | 9.40:1 | Pass |
| `#334155` | `#E0F2FE` | 9.02:1 | Pass |
| `#334155` | `#ECFDF5` | 9.82:1 | Pass |
| `#334155` | `#F5F3FF` | 9.44:1 | Pass |
| `#334155` | `#93C5FD` | 5.74:1 | Pass |
| `#334155` | `#A7F3D0` | 8.07:1 | Pass |
| `#6D28D9` | `#FFFFFF` | 7.10:1 | Pass |
| `#6D28D9` | `#F5F3FF` | 6.47:1 | Pass |
| `#6D28D9` | `#ECFDF5` | 6.74:1 | Pass |
| `#FFFFFF` | `#6D28D9` | 7.10:1 | Pass |
| `#FFFFFF` | `#4C1D95` | 10.9:1 | Pass |
| `#991B1B` | `#FFFFFF` | 8.31:1 | Pass |
| `#991B1B` | `#ECFDF5` | 7.88:1 | Pass |

White header/footer text on slate uses the reverse of the tested slate/white pair and has the same 10.3:1 ratio; pastel lavender is decorative and is not used for text.

The complete responses and checker links are in [`contrast-results.json`](contrast-results.json).

## Accessible contact form

The About/Contact page includes required name, email, and message fields, plus an optional radio group with a fieldset and legend; validation checks blank or whitespace-only fields, malformed email addresses, and messages shorter than 10 characters.

Submitting invalid data focuses an error summary, and each summary link focuses its affected field; inline messages explain the problem in text, with ARIA associations and visible borders providing additional feedback.

**Demo limitation:** No backend or recipient address is configured, so the button says “Check message” and valid input produces a status message instead of sending anything; when JavaScript is unavailable, the button stays disabled and a visible explanation appears.

## Verification and remaining submission steps

Completed on November 22, 2026:

- DOM checks passed on all three pages for unique IDs, one main landmark, one h1, current-page navigation, working local links, and valid ARIA references.
- All form controls have explicitly associated labels.
- Form behavior checks passed for empty and whitespace-only fields, invalid email, short messages, summary focus, summary links, corrected fields, successful validation, and clearing stale success feedback.
- JavaScript syntax and Git whitespace checks passed.
- All 14 WebAIM text/background contrast checks passed AA.

### WAVE checks — pending

The editing environment could not launch the browser needed to complete a WAVE evaluation, so zero-error WAVE results are **not yet verified**.

Before submitting, open each updated HTML page in a browser and run the official [WAVE browser extension](https://wave.webaim.org/extension/) on the rendered page, or publish the site with GitHub Pages and enter each published page URL at [WAVE](https://wave.webaim.org/); do not evaluate the GitHub repository interface as though it were the portfolio website.

| Page | WAVE errors | WAVE contrast errors | Status |
| --- | --- | --- | --- |
| `index.html` | Not yet measured | Not yet measured | Pending |
| `projects.html` | Not yet measured | Not yet measured | Pending |
| `about.html` | Not yet measured | Not yet measured | Pending |

Fix any reported errors, add one sentence per actual fix above, and replace this table with the measured results and test date; review alerts as well, including the intentionally focusable skip target.

### Responsive and keyboard review — pending browser verification

The shared stylesheet retains a one-column mobile layout, two project columns at 768px, and three project columns at 1200px, with wrapping navigation and full-width form inputs.

Check all three pages at 320px, 768px, and 1200px for overflow or overlap, then use Tab, Shift+Tab, Enter, and the radio-button arrow keys to confirm visible focus, skip-link behavior, and form error recovery.

### Repository

The updated project and this README are available at [wallishiasmith00/IT-PORTFOLIO](https://github.com/wallishiasmith00/IT-PORTFOLIO); WAVE checks and browser layout verification above remain pending before final submission.
