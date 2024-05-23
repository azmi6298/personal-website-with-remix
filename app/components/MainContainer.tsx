export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto py-4 flex flex-col gap-y-8">
      {children}
    </main>
  );
}
