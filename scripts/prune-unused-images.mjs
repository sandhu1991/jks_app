/**
 * Remove public/images files not referenced by app sources.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const imagesDir = path.join(root, 'public/images')

const KEEP_ALWAYS = new Set([
  'jks-logo-header.png',
  'jks-logo-light.png',
  'jks-home-hero-toronto-skyline.jpg',
])

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, files)
    else files.push(p)
  }
  return files
}

function collectFromText(text, refs) {
  const re = /\/images\/[A-Za-z0-9_./%-]+/g
  let m
  while ((m = re.exec(text))) {
    refs.add(m[0].replace(/^\/images\//, '').split('#')[0].split('?')[0])
  }
}

function collectRefs() {
  const refs = new Set(KEEP_ALWAYS)

  function scanFile(file) {
    if (!fs.existsSync(file)) return
    if (/\.(vue|js|css|html|json)$/.test(file)) {
      collectFromText(fs.readFileSync(file, 'utf8'), refs)
    }
  }

  scanFile(path.join(root, 'index.html'))
  walk(path.join(root, 'src')).forEach(scanFile)

  return refs
}

const refs = collectRefs()
const allFiles = walk(imagesDir)
let removed = 0
let kept = 0

for (const abs of allFiles) {
  const rel = path.relative(imagesDir, abs).split(path.sep).join('/')
  if (refs.has(rel)) {
    kept++
    continue
  }
  fs.unlinkSync(abs)
  removed++
}

function pruneEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.isDirectory()) pruneEmptyDirs(path.join(dir, ent.name))
  }
  if (dir !== imagesDir && fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir)
  }
}
pruneEmptyDirs(imagesDir)

console.log(`Images kept: ${kept}, removed: ${removed}, refs: ${refs.size}`)
