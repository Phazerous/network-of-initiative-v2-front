const endpoint = 'http://localhost:3000/api';

export const get = async (path: string) => {
  const response: Response = await fetch(endpoint + path, {
    method: 'GET',
  });

  handleResponse(response);
};

export const post = async (path: string, data: object) => {
  const response: Response = await fetch(endpoint + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
};

const handleResponse = async (response: Response) => {
  const json = await extractJSON(response);

  if (!response.ok) {
    let errorMessage = json.message
      ? json.message.join('\n')
      : 'Unhandled error';
    throw new Error(errorMessage);
  }

  return json;
};

const extractJSON = async (response: Response) => {
  if (response.headers.has('Content-Type')) {
    const contentType = response.headers.get('Content-Type')!;

    if (contentType.includes('application/json')) {
      const json = await response.json();

      return json;
    }
  }

  return null;
};
