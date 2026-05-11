import './globals.css'
export const metadata = {
  title: 'Kingdee × Namibia — Government Services Roadmap',
  description: 'Department-by-department breakdown of citizen-facing government tasks translated into Kingdee development requirements.',
}
export default function RootLayout({ children }) {
  return (<html lang="en"><body>{children}</body></html>)
}