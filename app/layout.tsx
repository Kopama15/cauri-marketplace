import '../styles/globals.css';
import { TranslationProvider } from '../lib/TranslationContext';

export const metadata = {
  title: 'Cauri Marketplace',
  description: 'Multivendor platform for French-speaking Africa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  );
}