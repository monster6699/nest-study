import { article } from './seed/articel';
import { category } from './seed/category';
import { user } from './seed/user';

async function run() {
  user();
  await category();
  article();
}

run();
