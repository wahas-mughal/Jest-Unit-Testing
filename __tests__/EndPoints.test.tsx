import { describe, expect, it } from '@jest/globals';
import User from '../src/services/api';

const data = {
    description: 'Your app fetched this from a remote endpoint!',
    movies: [
      {
        id: '1',
        releaseYear: '1977',
        title: 'Star Wars',
      },
      {
        id: '2',
        releaseYear: '1985',
        title: 'Back to the Future',
      },
      {
        id: '3',
        releaseYear: '1999',
        title: 'The Matrix',
      },
      {
        id: '4',
        releaseYear: '2010',
        title: 'Inception',
      },
      {
        id: '5',
        releaseYear: '2014',
        title: 'Interstellar',
      },
    ],
    title: 'The Basics - Networking',
  };

describe('API Testing', () => {
  // it('Get All Movies By User Mock Test', async () => {
  //     global.fetch = jest.fn().mockImplementation(() => {
  //         return new Promise((resolve, reject) => {
  //             resolve({
  //                 json: () => {
  //                     return { Id: 2}
  //                 }
  //             })
  //         })
  //     })
  //     const res = await User.getMovies()

  //     expect(res.Id).toBe(1)
  // })
  it('Get All Movies By User API Response Test', async () => {
    const res = await User.getMovies();
    expect(res).toEqual(data);
  });
});
