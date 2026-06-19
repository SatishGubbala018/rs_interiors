# TODO

## Smooth navbar + page load transitions
- [ ] Update `client/src/components/NavBar.jsx`:
  - [ ] Add scroll locking when mobile menu is open
  - [ ] Improve hamburger markup so it can morph into a cross
- [ ] Update `client/src/styles.css`:
  - [ ] Add hamburger (hamburger->cross) animations
  - [ ] Ensure mobile panel open/close uses smooth height/opacity/transform and doesn’t flicker
- [ ] Update `client/src/App.jsx`:
  - [ ] Add global route/page fade transitions using Framer Motion + AnimatePresence
- [ ] Run client build/dev check
- [ ] Manually test on mobile width (<=720px): open/close panel, hamburger->X, scroll lock, navigation transitions

