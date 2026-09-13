import { answers } from '../data/answers';
export type Answer = { answer: string; links: { label: string; href: string }[] };
// Replace this function with an API call when you are ready. The UI already awaits it.
export async function answerQuestion(question: string): Promise<Answer> {
  const words = question.toLowerCase().match(/[a-z]+/g) ?? [];
  const matches = answers.map(entry => ({ entry, score: entry.question.toLowerCase() === question.toLowerCase().trim() ? 100 : entry.keywords.filter(key => words.includes(key)).length })).sort((a,b) => b.score - a.score);
  return matches[0]?.score ? matches[0].entry : { answer: "That isn't covered in the public notes yet. You might find a useful starting point in the pages below.", links: [{ label: 'About Tristan', href: '/about' }, { label: 'Projects', href: '/projects' }, { label: 'Notes', href: '/notes' }] };
}
