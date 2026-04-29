export const metadata = {
  title: 'Entek Digital Studio',
  description: 'Sanity Studio for Entek Digital',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
