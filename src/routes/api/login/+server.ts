import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { username, password } = await request.json();

	// Dummy credentials check (adjust as needed)
	if (username === 'admin' && password === 'password') {
		// Create a mock token
		const token = 'mock_token_123456';
		// Set a cookie to store the token (you can add options such as httpOnly in production)
		cookies.set('token', token, { path: '/' });
		return new Response(JSON.stringify({ token }), { status: 200 });
	}

	return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
};
