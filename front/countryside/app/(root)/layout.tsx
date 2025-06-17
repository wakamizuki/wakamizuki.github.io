import Header from "@/lib/components/shared/Header";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ここにnavを記述していく
  return (
    <div>
      <h1>Hello, World!</h1>
      {children}
    </div>
  );
}
