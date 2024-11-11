import './globals.css'

export const metadata = {
  title: 'CAC Réservation',
  description: 'Formulaire de réservation pour CAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}