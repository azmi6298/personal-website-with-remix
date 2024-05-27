export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex flex-col gap-y-8">{children}</main>;
}
