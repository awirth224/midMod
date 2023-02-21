beforeEach(() => {
  cy.intercept('http://localhost:3001/api/v1/reservations', [
    {
      id: 1,
      name: "Christie",
      date: "12/29",
      time: "7:00",
      number: 12
    },
    {
      id: 2,
      name: "Leta",
      date: "4/5",
      time: "7:00",
      number: 2
      },
      {
      id: 3,
      name: "Pam",
      date: "1/21",
      time: "6:00",
      number: 4
      }
  ]
)
})

describe('empty spec', () => {
  it('should be able to visit the page and render the correct elements', () => {
    cy.visit('http://localhost:3000/')
    .contains('h1', 'Turing Cafe Reservations')
    .get('form').find('input')
  })
})