/**
 * Accessible tabs for any element with [data-tabs].
 * Markup: buttons with role="tab" + aria-controls, panels with role="tabpanel".
 * Arrow keys / Home / End move between tabs (WAI-ARIA tabs pattern, automatic activation).
 */
export function initTabs(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-tabs]').forEach((group) => {
    if (group.dataset.tabsReady) return;
    group.dataset.tabsReady = 'true';
    const tabs = [...group.querySelectorAll<HTMLButtonElement>('[role="tab"]')];

    const select = (tab: HTMLButtonElement, focus = false) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls') || '');
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const last = tabs.length - 1;
        const next: Record<string, number> = {
          ArrowRight: i === last ? 0 : i + 1,
          ArrowDown: i === last ? 0 : i + 1,
          ArrowLeft: i === 0 ? last : i - 1,
          ArrowUp: i === 0 ? last : i - 1,
          Home: 0,
          End: last,
        };
        if (e.key in next) {
          e.preventDefault();
          select(tabs[next[e.key]], true);
        }
      });
    });
  });
}

initTabs();
