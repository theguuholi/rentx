import { AuthProvider } from './auth';

function AppProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export { AppProvider };
