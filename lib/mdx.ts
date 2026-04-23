import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { InsightPost } from '@/types'

const CONTENT_DIR = path.join(process.cwd(), 'content/insights')

function ensureDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true })
  }
}

export function getAllInsightSlugs(): string[] {
  ensureDir()
  try {
    return fs
      .readdirSync(CONTENT_DIR)
      .filter((f) => f.endsWith('.mdx'))
      .map((f) => f.replace(/\.mdx$/, ''))
  } catch {
    return []
  }
}

export function getInsightBySlug(
  slug: string
): { meta: InsightPost; content: string } | null {
  ensureDir()
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const meta: InsightPost = {
    slug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    category: data.category ?? 'TOFU',
    readingTime: data.readingTime ?? 5,
    publishedAt: data.publishedAt ?? new Date().toISOString(),
    author: data.author ?? 'Aplica Team',
    coverImage: data.coverImage ?? '/images/insights/default.jpg',
    tags: data.tags ?? [],
  }

  return { meta, content }
}

export function getAllInsights(): InsightPost[] {
  return getAllInsightSlugs()
    .map((slug) => getInsightBySlug(slug)?.meta)
    .filter(Boolean) as InsightPost[]
}
