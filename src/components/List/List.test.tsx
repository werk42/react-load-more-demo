import React from 'react';
import { render } from 'react-dom';
import AppListItem from './ListItem';
import List from './List';
import axios from '../../___mocks___/axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('mocking axios request', ()=> {

    const data = {
        data: [
            {
                name: 'name 1',
                model: 'model 1',
            },
        ]
    }

    const response = {data: data}

    mockedAxios.get.mockResolvedValueOnce(response);

});

