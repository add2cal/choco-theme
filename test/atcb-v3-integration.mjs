import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('..', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');
const manifest = JSON.parse(await read('packages/org/package.json'));
const styles = await read('src/scss/packages/org/atcb-overrides.scss');

assert.equal(manifest.dependencies['add-to-calendar-button'], '^3.3.0');
assert.match(styles, /@import\s+"add-to-calendar-button\/assets\/css\/atcb"/);
assert.match(styles, /:host\s*\{/);
assert.match(styles, /min-width:\s*auto/);
assert.match(styles, /padding:\s*var\(--btn-padding-y\)\s+var\(--btn-padding-x\)\s*!important/);
