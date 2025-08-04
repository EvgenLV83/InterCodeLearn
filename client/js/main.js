import { createApp } from './app-core.js';
import { setupEventListeners } from './event-listeners.js';

async function initializeApp() {
  await createApp();
  setupEventListeners();
}

initializeApp();
