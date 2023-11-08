import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Table from '../Components/Table.js'
import * as utils from '../utils.js'

describe('Test user interactions on Table component', () => {
    test('setState is called on click', async () => {
        const setState = jest.fn()
        jest.spyOn(React, 'useState')
        .mockImplementationOnce(initState => [initState, setState])
        render(<Table />)
        await userEvent.click(screen.getByText(/Last Name/i))
        expect(setState).toHaveBeenCalled()
    })

    test('user data is sorted alphabetically by selected column', () => {
        const mockUserData = [
            {
                'firstname': 'Frankie',
                'lastname': 'Reilly',
            },
            {
                'firstname': 'Ian',
                'lastname': 'Claro',
            },
            {
                'firstname': 'K',
                'lastname': 'Firstenberger',
            },
        ]
        const mockSortUsers = jest.spyOn(utils, 'sortUsers')
        const usersSortedByMyFunc = mockSortUsers(mockUserData, 'lastname')
        const sorted = mockUserData.sort(function(a, b){return a - b})        
        expect(usersSortedByMyFunc).toBe(sorted)    
    })
})
