export default function Modal({ children }) {
  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border border-gray-700 rounded-lg text-gray-800 text-center"
      style={{
        maxWidth: "300px",
      }}
    >
      {children}
    </div>
  );
}
