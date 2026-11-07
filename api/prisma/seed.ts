import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.deleteMany();
  await prisma.genre.deleteMany();

  await prisma.genre.create({
    data: {
      name: 'Fantasy',
      books: {
        create: [
          { title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 },
          { title: 'A Wizard of Earthsea', author: 'Ursula K. Le Guin', publishedYear: 1968 },
          { title: 'The Name of the Wind', author: 'Patrick Rothfuss', publishedYear: 2007 },
          { title: 'Mistborn', author: 'Brandon Sanderson', publishedYear: 2006 },
        ],
      },
    },
  });

  await prisma.genre.create({
    data: {
      name: 'Science Fiction',
      books: {
        create: [
          { title: 'Dune', author: 'Frank Herbert', publishedYear: 1965 },
          { title: 'Neuromancer', author: 'William Gibson', publishedYear: 1984 },
          { title: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin', publishedYear: 1969 },
          { title: 'Foundation', author: 'Isaac Asimov', publishedYear: 1951 },
        ],
      },
    },
  });

  await prisma.genre.create({
    data: {
      name: 'Mystery',
      books: {
        create: [
          { title: 'Murder on the Orient Express', author: 'Agatha Christie', publishedYear: 1934 },
          { title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', publishedYear: 1902 },
          { title: 'Gone Girl', author: 'Gillian Flynn', publishedYear: 2012 },
          { title: 'The Big Sleep', author: 'Raymond Chandler', publishedYear: 1939 },
        ],
      },
    },
  });

  await prisma.genre.create({
    data: {
      name: 'Non-Fiction',
      books: {
        create: [
          { title: 'Sapiens', author: 'Yuval Noah Harari', publishedYear: 2011 },
          { title: 'Educated', author: 'Tara Westover', publishedYear: 2018 },
          { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', publishedYear: 1999 },
          { title: 'Atomic Habits', author: 'James Clear', publishedYear: 2018 },
        ],
      },
    },
  });

  console.log('Seeded 4 genres and 16 books');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());