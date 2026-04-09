import { promises as fs } from 'node:fs'
import path from 'node:path'
import { parse } from 'yaml'

const root = process.cwd()
const contentDir = path.join(root, 'content', 'articles')
const outputFile = path.join(root, 'public', 'articles-index.json')

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      return walk(fullPath)
    }
    return entry.name.endsWith('.md') ? [fullPath] : []
  }))

  return files.flat()
}

function extractFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/)
  if (!match) {
    return {}
  }
  return parse(match[1]) || {}
}

function createPath(filePath) {
  const relative = path.relative(contentDir, filePath).replace(/\\/g, '/')
  return `/articles/${relative.replace(/\.md$/, '')}`
}

async function main() {
  const files = await walk(contentDir)
  const articles = []

  for (const filePath of files) {
    const raw = await fs.readFile(filePath, 'utf8')
    const frontmatter = extractFrontmatter(raw)

    if (frontmatter.draft) {
      continue
    }

    articles.push({
      path: createPath(filePath),
      slug: createPath(filePath).replace(/^\/articles\//, ''),
      title: frontmatter.title || '',
      description: frontmatter.description || '',
      category: frontmatter.category || '',
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      cover: frontmatter.cover || '',
      publishAt: frontmatter.publishAt || '',
      updatedAt: frontmatter.updatedAt || '',
      readingTime: frontmatter.readingTime || '',
      featured: Boolean(frontmatter.featured),
      draft: false,
      media: Array.isArray(frontmatter.media) ? frontmatter.media : [],
    })
  }

  articles.sort((a, b) => `${b.updatedAt}`.localeCompare(`${a.updatedAt}`))

  await fs.writeFile(outputFile, `${JSON.stringify(articles, null, 2)}\n`, 'utf8')
  console.log(`Generated ${articles.length} articles to ${path.relative(root, outputFile)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
