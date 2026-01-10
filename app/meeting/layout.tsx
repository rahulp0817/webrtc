export default async function MeetLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-900 min-h-screen">
      {children}
    </div>
  )
}