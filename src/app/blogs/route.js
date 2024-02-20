import path from 'node:path';
import {
  db,
  insertNote,
  editNote,
  findNote,
  deleteNote,
} from '../../utils/db.js';

const NOTES_PATH = path.resolve(__dirname, '../notes');

export async function GET(request) {
  return Response.json({ message: 'Hello from the blog route!' });
}
