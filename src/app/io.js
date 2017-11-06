import nattyFetch from 'natty-fetch';

const context = nattyFetch.context({
  mockUrlPrefix: '/mock/',
  mock: !__ENV__,
  withCredentials: false,
  traditional: true,
  timeout: 5000,
  fit(response) {
    return {
      "success": response.success,
      "content": response,
      "error": response
    }
  }
});

context.create('Home', {
  test: {
    mockUrl: 'home/test.json',
    url: 'mock/home/test.json'
  }
});

export default context.api;