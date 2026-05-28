import './styles/main.scss';
import { createApp } from './app';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('Root element #app was not found.');
}

createApp(root);
