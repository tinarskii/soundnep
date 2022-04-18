import { browser } from '$app/env';
import { writable } from 'svelte/store';

const storage = browser ? JSON.parse(window.localStorage['soundnep-options'] || '{}') || {} : {};

function storeSettings() {
  if (browser) {
    window.localStorage['soundnep-options'] = JSON.stringify(storage);
  }
}

export const darkTheme = writable(storage.darkTheme ?? true);
export const isAsync = writable<boolean>(storage.playerModes ?? false);

darkTheme.subscribe((value) => {
  storage.darkTheme = value;
  storeSettings();
});

isAsync.subscribe((value) => {
  storage.playerModes = value;
  storeSettings();
});
