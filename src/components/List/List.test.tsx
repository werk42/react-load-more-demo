import React from 'react';
import { render } from 'react-dom';
import AppListItem from './ListItem';
import axios from '../../___mocks___/axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// test('mocking axios request', async ()=> {

//     const data = {
//         data: [
//             {
//                 name: 'name 1',
//                 model: 'model 1',
//             },
//             {
//                 name: 'name 2',
//                 model: 'model 2',
//             },
//             {
//                 name: 'name 3',
//                 model: 'model 3',
//             }

//         ]
//     }

//     mockedAxios.get.mockResolvedValueOnce(data);
//     const { getByText } = render(<><AppListItem key={name} name={name} model={model}/></>);
//     await wait(()=> {
//         expect(getByText('mocked name'))
//     })

// });

