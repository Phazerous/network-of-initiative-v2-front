const endpoint = 'http://localhost:3000/api';

export const get = async (path: string) => {
  const response: Response = await fetch(endpoint + path, {
    method: 'GET',
    credentials: 'include',
  });

  if (response.status === 401 || response.status == 403) {
    window.location.href = '/auth/login';
    return;
  }

  return handleResponse(response);
};

export const post = async (path: string, data: object) => {
  const response: Response = await fetch(endpoint + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (response.status === 401 || response.status == 403) {
    window.location.href = '/auth/login';
    return;
  }

  return handleResponse(response);
};

export const patch = async (path: string, data: object) => {
  const response: Response = await fetch(endpoint + path, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (response.status === 401 || response.status == 403) {
    window.location.href = '/auth/login';
    return;
  }

  return handleResponse(response);
};

const handleResponse = async (response: Response) => {
  const json = await extractJSON(response);

  if (!response.ok) {
    if (typeof json.message === 'string') throw new Error(json.message);

    let errorMessage = json.message
      ? json.message.join('\n')
      : 'Unhandled error';
    throw new Error(errorMessage);
  }

  if (!json) return response;

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

export const extractText = async (response: Response) => {
  if (response.headers.has('Content-Type')) {
    const contentType = response.headers.get('Content-Type')!;

    if (contentType.includes('text')) {
      const text = await response.text();

      return text;
    }
  }

  return null;
};
