import app from './app';
import { PORT, DATABASE_URL, JWT_SECRET } from './config/env';

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`🗄️  Database: ${DATABASE_URL ? 'Configured' : 'Not configured'}`);
  console.log(`🔐 JWT_SECRET: ${JWT_SECRET ? 'Set' : 'Not set'}`);
});
