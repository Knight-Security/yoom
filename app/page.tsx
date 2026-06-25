import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
;

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen">
      <Sidebar />

      <section className="flex flex-1 flex-col bg-slate-950 text-white">
        <Navbar />

        <div className="flex-1 p-6">
          {children}
        </div>
      </section>
    </main>
  );
}