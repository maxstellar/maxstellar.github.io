import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'posts');
const OUT_DIR = path.join(ROOT, 'blog');
const TEMPLATES_DIR = path.join(__dirname, 'templates');

const postTpl = fs.readFileSync(path.join(TEMPLATES_DIR, 'post.html'), 'utf8');
const indexTpl = fs.readFileSync(path.join(TEMPLATES_DIR, 'index.html'), 'utf8');

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

const imgSrc = path.join(POSTS_DIR, 'images');
if (fs.existsSync(imgSrc)) {
    fs.cpSync(imgSrc, path.join(OUT_DIR, 'images'), { recursive: true });
}

const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

const formatDate = (d) => {
    const dt = d instanceof Date ? d : new Date(d);
    if (isNaN(dt.getTime())) return '';
    return dt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
};

const slugify = (filename) =>
    filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');

const posts = [];
const entries = fs.existsSync(POSTS_DIR)
    ? fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'))
    : [];

for (const file of entries) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    if (data.draft) continue;

    const slug = slugify(file);
    const title = data.title || slug;
    const dateStr = data.date ? formatDate(data.date) : '';
    const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));
    const html = marked.parse(content);

    const page = postTpl
        .replaceAll('{{title}}', escapeHtml(title))
        .replaceAll('{{date}}', escapeHtml(dateStr))
        .replaceAll('{{content}}', html);

    fs.writeFileSync(path.join(OUT_DIR, `${slug}.html`), page);
    posts.push({ slug, title, date: data.date, dateStr, readTime });
}

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const listHtml = posts.length
    ? posts
          .map(
              (p) =>
                  `<li class="post-entry"><a href="./${p.slug}.html"><span class="post-title">${escapeHtml(p.title)}</span><span class="post-date">${p.readTime} min read · ${escapeHtml(p.dateStr)}</span></a></li>`
          )
          .join('\n            ')
    : '<li class="empty">no posts yet.</li>';

const indexPage = indexTpl.replaceAll('{{posts}}', listHtml);
fs.writeFileSync(path.join(OUT_DIR, 'index.html'), indexPage);

console.log(`built ${posts.length} post(s) → ${path.relative(ROOT, OUT_DIR)}/`);
