export default function NavbarLinks() {
  return (
    <div className="bg-blue-700 text-white flex justify-center gap-7 py-1 shadow-sm">
      <button className="hover:bg-blue-800 px-3 py-1 rounded">Home</button>
      <button className="hover:bg-blue-800 px-3 py-1 rounded">Contact</button>
      <button className="hover:bg-blue-800 px-3 py-1 rounded">Examination</button>
      <button 
        className="hover:bg-blue-800 px-3 py-1 rounded"
        onClick={() => window.open("https://cujammu.ac.in", "_blank")}
      >
        CUJ Main Website
      </button>
    </div>
  );
}
