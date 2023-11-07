import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Table from '../Components/Table.js'

describe('Test user interactions on Table component', () => {
    test('setState is called on click', async () => {
        const setState = jest.fn()
        jest.spyOn(React, 'useState')
        .mockImplementationOnce(initState => [initState, setState])
        render(<Table />)
        await userEvent.click(screen.getByText(/Last Name/i))
        expect(setState).toHaveBeenCalled()
    })
})
