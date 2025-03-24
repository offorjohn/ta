import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { username, password } = await request.json();

	if (username === 'admin' && password === 'password') {
		
		const token = 'mock_token_123456';
		cookies.set('token', token, { path: '/' });
		return new Response(JSON.stringify({ token }), { status: 200 });
	}

	return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
};
