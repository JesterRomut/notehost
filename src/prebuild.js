import fs from 'fs';
import {join, dirname, parse} from 'path';

import { fileURLToPath } from 'node:url';
import { Glob } from 'glob'


const __dirname = dirname(fileURLToPath(import.meta.url));

const stream = new Glob("components/**/*.html", {cwd: __dirname, withFileTypes:true}).stream();
stream.on("data", path => {
  const fullPath = parse(path.fullpath());

  const pageScriptPath =  join(fullPath.dir, fullPath.base)
  const outFilePath = join(fullPath.dir, `__${fullPath.name}.ts`)

  const pageScriptContent = fs.readFileSync(pageScriptPath, 'utf8')
  const escapedContent = pageScriptContent.replace(/\\/g, '\\')
  const finalContent = `export const STRING = \`${escapedContent}\``

  fs.writeFileSync(outFilePath, finalContent)
  console.log(`Component ${path.name} was built successfully!`)
})

stream.on("error", err => {
  console.error('Failed to build page script:', err);
})
