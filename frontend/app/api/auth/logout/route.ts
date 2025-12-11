import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	// For now, logout is handled client-side by clearing local storage.
	// This route exists so typechecker & callers can import the module if needed.
	return NextResponse.json({ message: 'OK' });
}

export const runtime = 'edge';

