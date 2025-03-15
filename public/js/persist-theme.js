/*
 * If a color scheme preference was previously stored,
 * select the corresponding option in the color scheme preference UI
 * unless it is already selected.
 */
function restoreColorSchemePreference() {
  console.log('hi')
  const colorScheme = localStorage.getItem(colorSchemeStorageItemName);
  
  console.log(colorScheme)
  if (!colorScheme) {
    // There is no stored preference to restore
    return;
  }
  console.log("end")
  
  // const option = colorSchemeSelectorEl.querySelector(`[value=${colorScheme}]`);  
  const option = document.querySelector(`#color-scheme option[value="${colorScheme}"]`)
  console.log(`#color-scheme option[value="${colorScheme}"]`)
  console.log(option)

  if (!option) {
    // The stored preference has no corresponding option in the UI.
    localStorage.removeItem(colorSchemeStorageItemName);
    return;
  }

  if (option.selected) {  
    // The stored preference's corresponding menu option is already selected
    return;
  }

  option.selected = true;
  // document.body.style.removeProperty("display")
}

/*
 * Store an event target's value in localStorage under colorSchemeStorageItemName
 */
function storeColorSchemePreference() {
  let colorSchemeSelect = document.querySelector("#color-scheme");
  console.log(colorSchemeSelect)
  console.log(colorSchemeSelect.selectedOptions)
  console.log(colorSchemeSelect.selectedIndex )
  const colorScheme = colorSchemeSelect.options[colorSchemeSelect.selectedIndex].value
  console.log(colorScheme)
  localStorage.setItem(colorSchemeStorageItemName, colorScheme);
}

// The name under which the user's color scheme preference will be stored.
const colorSchemeStorageItemName = "preferredColorScheme";

// The color scheme preference front-end UI.
const colorSchemeSelectorEl = document.querySelector("#color-scheme");

if (colorSchemeSelectorEl) {
  restoreColorSchemePreference();

  // When the user changes their color scheme preference via the UI,
  // store the new preference.
  colorSchemeSelectorEl.addEventListener("input", storeColorSchemePreference);
}
