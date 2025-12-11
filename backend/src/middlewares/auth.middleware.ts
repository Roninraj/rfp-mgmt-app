import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env';
import { prisma } from '../config/database';

interface JwtPayload {
	id: number;
	email: string;
	role: string;
}

// Attach user object to request
export async function authenticate(req: Request, res: Response, next: NextFunction) {
	try {
		const auth = req.headers.authorization;
		if (!auth || !auth.startsWith('Bearer ')) {
			return res.status(401).json({ message: 'Missing or invalid Authorization header' });
		}

		const token = auth.split(' ')[1];
		const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
		if (!decoded || !decoded.id) return res.status(401).json({ message: 'Invalid token' });

		// Fetch user and attach to request
		const user = await prisma.user.findUnique({
			where: { id: decoded.id },
			include: { vendor: true },
		});
		if (!user) return res.status(401).json({ message: 'User not found' });

		req.user = { id: user.id, email: user.email, role: user.role, vendor: user.vendor };
		next();
	} catch (err) {
		console.error('Auth error:', err);
		return res.status(401).json({ message: 'Authentication failed' });
	}
}

export function requireRole(role: string) {
	return (req: Request, res: Response, next: NextFunction) => {
		const user = req.user;
		if (!user) return res.status(401).json({ message: 'Not authenticated' });
		if (user.role !== role) return res.status(403).json({ message: 'Forbidden' });
		return next();
	};
}

export default { authenticate, requireRole };

