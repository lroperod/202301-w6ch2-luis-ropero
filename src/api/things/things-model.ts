export interface Things {
  id: string;
  subjectsLearned: string;
}

const things: Things[] = [];

export const findAll = () => things;

export const findById = (id: string) => things.find(things => things.id === id);

export const createThings = (newThings: Things) => {
  if (things.some(things => things.id === newThings.id)) {
    throw new Error('The things exists');
  }

  things.push(newThings);
};
