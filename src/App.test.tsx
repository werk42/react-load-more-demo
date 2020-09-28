import React from 'react';
import { render, screen, act, waitForElement, fireEvent } from '@testing-library/react';
import App from './App';
import { fetchStarships, StarshipsResponse } from './shared/apiCalls';

jest.mock('./shared/apiCalls.ts');

const MockFetchStarships = fetchStarships as jest.Mock;

describe('App', () => {
  beforeEach(() => {
    MockFetchStarships.mockReturnValue(Promise.resolve<StarshipsResponse>({
      results: [
        {model: 'UCC', name: 'UCC Enterprise'},
        {model: 'Phonix', name: 'UCC Phonix'},
      ],
      next: '',
    }));
  });

  it('renders learn react link', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Star Wars Starships/i);

    await act(() => Promise.resolve());

    expect(linkElement).toBeInTheDocument();
  });

  it('should make api request for fetching starships', async () => {
    render(<App />);

    await act(() => Promise.resolve());

    expect(MockFetchStarships).toHaveBeenCalledWith('https://swapi.dev/api/starships');
  });

  it('should render starships from response', async () => {
    render(<App />);

    await waitForElement(() => screen.queryByText(/UCC Enterprise/i));

    expect(screen.queryByText(/UCC Enterprise/i)).toBeInTheDocument();
    expect(screen.queryByText(/UCC Phonix/i)).toBeInTheDocument();
  });

  it('should fetch next page on Load More click', async () => {
    MockFetchStarships.mockReset();
    MockFetchStarships.mockReturnValueOnce(Promise.resolve<StarshipsResponse>({
      results: [
        {model: 'UCC', name: 'UCC Enterprise'},
        {model: 'Phonix', name: 'UCC Phonix'},
      ],
      next: 'https://swapi.dev/api/starships?page=2',
    }));
    MockFetchStarships.mockReturnValueOnce(Promise.resolve<StarshipsResponse>({
      results: [
        {model: 'Queen', name: 'Queen Ecaterina'},
      ],
      next: '',
    }));

    render(<App />);

    await waitForElement(() => screen.queryByText(/UCC Enterprise/i));
    
    fireEvent.click(screen.getByText(/Load more/));

    await waitForElement(() => screen.queryByText(/Queen Ecaterina/i));

    expect(MockFetchStarships).toHaveBeenCalledTimes(2);
    expect(MockFetchStarships).toHaveBeenLastCalledWith('https://swapi.dev/api/starships?page=2');
  });
});
