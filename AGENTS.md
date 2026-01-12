# AGENTS

Guidance for agentic coding in this repo.

## Repo Overview
- Vite-based vanilla JS + CSS playground.
- Entry: `index.html` + `src/main.js`.
- Styles: `src/styles/styles.css` imports layered library + custom overrides.
- Library CSS lives in `src/styles/lib/`.

## Commands
### Install
- `npm install`

### Development
- `npm run dev` (Vite dev server).

### Build
- `npm run build`

### Preview
- `npm run preview`

### Lint
- No lint script configured.

### Tests
- No test runner configured.
- There is no single-test command yet.
- If tests are added, document the single-test command here.

## File Structure
- `src/main.js`: DOM behavior and demo interactions.
- `src/styles/styles.css`: top-level layer imports.
- `src/styles/custom.css`: project-specific tweaks.
- `src/styles/lib/`: shared tokens, base, components, utilities.

## JavaScript Style
- Use ES modules; keep side-effect imports first.
- Prefer `const`; use `let` only for reassignment.
- Use optional chaining for nullable DOM lookups.
- Favor early returns over deep nesting.
- Keep functions small and single-purpose.
- Avoid one-letter variable names.
- Keep event handlers inline unless reused.

### DOM Access
- Query elements with specific selectors.
- Check existence before use (`?.` or guard).
- Cache repeated lookups in local variables.
- Use `data-*` attributes for hooks.

### Error Handling
- Fail fast when required data is missing.
- Avoid try/catch unless interacting with external APIs.
- Use clear guard clauses with comments only when needed.

## CSS Style
- Use native CSS with nesting (via Vite/PostCSS).
- Keep nesting shallow; prefer classes over element selectors.
- Use custom properties from `tokens.css`.
- Keep component styles in `src/styles/lib/components/`.
- Use `@layer` ordering: reset, tokens, base, components, utilities.

### Layering
- `src/styles/styles.css` defines top-level layers.
- `src/styles/lib/lib.css` wires library layers.
- Custom overrides belong in `custom.css`.
- Avoid importing `custom.css` from library files.

### Formatting
- Two-space indentation.
- One selector per block, blank line between blocks.
- Keep long `box-shadow` or `transition` values wrapped.
- Put `&:state` and `&.modifier` after base rules.

### Naming
- Classes: kebab-case (e.g., `.page-title`).
- Modifiers: `.is-active`, `.error`, `.loading`.
- CSS variables: `--color-*`, `--space-*`, `--radius-*`.
- Data attributes: `data-*` names are kebab-case.

### Tokens
- Define global tokens in `src/styles/lib/tokens.css`.
- Use tokens instead of raw hex values in components.
- If adding new tokens, keep grouping by theme (color, space, radius).

### Components
- Component files should only style their class namespace.
- Keep interactive states (`:hover`, `:focus-visible`) close to base.
- Avoid layout styles in component files unless inherent.

### Utilities
- Place low-level helpers in `src/styles/lib/utilities.css`.
- Utilities should be single-purpose.

## HTML Style
- Keep markup in `index.html` simple and semantic.
- Prefer buttons/links over divs for interaction.
- Data attributes are allowed for JS hooks.

## Imports
- JS: import CSS once in `src/main.js`.
- CSS: use `@import` only within layer files.
- Keep import order stable; do not alphabetize.

## Formatting Tools
- No formatter is configured.
- Keep existing style; avoid reformatting unrelated files.

## Types
- The project is plain JS; no TypeScript.
- Avoid adding types unless migrating explicitly.

## Assets
- If adding fonts or images, place them under `src/`.
- Reference assets with relative paths for Vite.

## Performance
- Avoid expensive querySelector loops on every frame.
- Cache node lists before iterating.

## Accessibility
- Maintain visible focus styles.
- Ensure disabled states are visually distinct.
- Use `aria-*` attributes when adding controls.

## Testing Guidance
- If a test runner is introduced:
- Add scripts to `package.json`.
- Document `npm test` and single-test usage here.

## Cursor/Copilot Rules
- No `.cursor/rules`, `.cursorrules`, or Copilot instructions present.

## Change Hygiene
- Keep changes scoped to the requested task.
- Do not add new tooling without request.
- Update README only when behavior changes.

## Quick Checks
- `npm run dev` for manual verification.
- `npm run build` for production build sanity.

## Contact
- If guidance is unclear, ask before large changes.

## Meta
- This file is intended for agentic tools.
- Keep it up to date as scripts evolve.
