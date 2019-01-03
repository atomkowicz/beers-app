import * as React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import * as TestRenderer from 'react-test-renderer';
import App from './components/App';
import List from './components/List';
import { flushPromises } from './utils/Helpers';


const renderRoute = (path: string) => (
    TestRenderer.create(
        <MemoryRouter initialEntries={[path]}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MemoryRouter>
    )
)

test('App root route', async () => {
    const wrapper = renderRoute('/');
    await flushPromises();
    expect(wrapper.root.findAllByType(List)).toHaveLength(1);
    wrapper.unmount();
});
