import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('..', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');
const manifest = JSON.parse(await read('packages/org/package.json'));
const styles = await read('src/scss/packages/org/atcb-overrides.scss');

assert.equal(manifest.dependencies['add-to-calendar-button'], '^3.3.0');
assert.doesNotMatch(styles, /add-to-calendar-button\/assets\/css\/atcb/);
assert.match(styles, /add-to-calendar-button\s*\{/);
assert.match(styles, /::part\(atcb-button\)/);
