const GRAPHQL_URL = import.meta.env.VITE_USER_API_URL;

export const signInRequest = async (email: string, password: string) => {
  const query = `
    mutation {
      signIn(signInInput: { email: "${email}", password: "${password}" }) {
        token
      }
    }
  `;

  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.signIn.token as string;
};
