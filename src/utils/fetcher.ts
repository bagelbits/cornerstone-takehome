const fetcher = async (url: string) => {
  return await fetch(url).then((res) => res.json());
};

export const fetcherWithBody = async (
  url: string,
  body: Record<string, object | string | null>,
  method: string = "POST"
) => {
  return await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

const objectToQueryParams = (
  obj: Record<string, string | string[] | number | number[] | boolean>
): string => {
  const params = new URLSearchParams();
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((value) => {
        params.append(key, value.toString());
      });
    } else {
      params.append(key, obj[key].toString());
    }
  }
  return params.toString();
};

export const fetcherWithQueryString = async (
  url: string,
  queryParameters: Record<
    string,
    string | string[] | number | number[] | boolean
  >
) => {
  const queryString = objectToQueryParams(queryParameters);
  return await fetch(`${url}?${queryString}`).then((res) => res.json());
};

export default fetcher;
