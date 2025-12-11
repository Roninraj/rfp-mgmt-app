import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const resp = await fetch(`${API_URL}/auth/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});

		const data = await resp.json();
		return NextResponse.json(data, { status: resp.status });
	} catch (err: any) {
		return NextResponse.json({ message: err.message || 'Login proxy error' }, { status: 500 });
	}
}

export const runtime = 'edge';

