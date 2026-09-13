const modules = import.meta.glob('../content/notes/*.md', { eager: true });
export const notes = Object.entries(modules).map(([path, value]) => {
  const entry = value as { frontmatter: { title: string; description: string; date: string | Date }; Content: any };
  return { ...entry.frontmatter, date: new Date(entry.frontmatter.date), slug: path.split('/').pop()!.replace('.md', ''), Content: entry.Content };
}).sort((a, b) => b.date.getTime() - a.date.getTime());
