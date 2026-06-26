import './globals.css'

export const metadata = {
  title: 'Saarveeshak Kailash - Fullstack Developer',
  description: 'Portfolio of Saarveeshak Kailash, a fullstack developer skilled in web development, graphic design, and system development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
