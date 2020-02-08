'use strict';

module.exports = {
  Query: {
    survey: (_, __, context) => ({
      question: (_, { id, paging, sorting }) => {
        return {
          id: 'id',
          title: 'example title',
        };
      },
      /**
       * Example
        {
          survey {
            questions(search: {}) {
              questions {
                id
                title
              }

              pager {
                limit
                offset
                total
              }
            }
          }
        }
      */
      questions: (_, params) => {
        return {
          questions: [
            {
              id: 'id1',
              title: 'example title1',
            },
            {
              id: 'id2',
              title: 'example title2',
            },
          ],
          pager: {},
        };
      },
    }),
  },
  Mutation: {
    survey: (_, __, context) => ({
      createQuestion: ({ input }) => {
        // TODO model
        return {
          id: 'id1',
          ...input,
        };
      },
    }),
  },
};
