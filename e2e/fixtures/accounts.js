export const accounts = {
  data: {
    accounts: [
      {
        name: 'openAndOnBudget',
        balance: 0,
        cleared_balance: 0,
        uncleared_balance: 5,
        closed: false,
        on_budget: true
      },
      {
        name: 'closedAndOnBudget',
        balance: 100,
        cleared_balance: 0,
        uncleared_balance: 5,
        closed: true,
        on_budget: true
      },
      {
        name: 'openAndOffBudget',
        balance: 200,
        cleared_balance: 0,
        uncleared_balance: 5,
        closed: false,
        on_budget: false
      },
      {
        name: 'closedAndOffBudget',
        balance: 300,
        cleared_balance: 0,
        uncleared_balance: 5,
        closed: true,
        on_budget: false
      }

    ]
  }
}
