/**
 * Which verses belong to which topics, one static file per book (`/topics/marks/LUK.json`): chapter → topic id →
 * verse spans. The Bible reader loads the file of the book it is showing, only when it needs it.
 */
import type { APIRoute } from 'astro';
import { BOOKS } from '@orthodoxia/bible';
import { marksForBook } from '../../../lib/topics/marks.ts';

export function getStaticPaths() {
  return BOOKS.map((book) => ({ params: { book: book.code } }));
}

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(marksForBook(params.book!)), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
