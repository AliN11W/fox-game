export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-gray-100 shadow-xl rounded-xl p-4 w-full bg-white">
      {children}
    </div>
  );
}
