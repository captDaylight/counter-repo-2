import * as React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, expect, test, afterEach } from 'vitest'
import Counter from './index'

describe('Integration test', () => {
  afterEach(cleanup)

  test('Minimal render display expected text', () => {
    render(<Counter />)
    expect(screen.getByText('You clicked 0 times'))
  })
})