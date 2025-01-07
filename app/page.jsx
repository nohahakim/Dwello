import Link from "next/link";

// Home page component
export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1> {/* Page heading */}
      {/* Link to the Properties page */}
      <Link href="/properties">Go to Properties</Link>
    </div>
  );
}
