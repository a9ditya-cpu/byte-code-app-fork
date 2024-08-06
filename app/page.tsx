export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/back.webp')" }}>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Byte Code Official Website</h2>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Coming Soon</h1>
        <p className="text-gray-700 mb-4">
          We are working hard to bring you an amazing experience. Stay tuned for updates!
        </p>
        <img 
          src="https://media.giphy.com/media/VUw6KfBA8E2hP8eU6a/giphy.gif" 
          alt="Never Gonna Give You Up" 
          className="rounded-lg shadow-md mx-auto"
        />
        <div className="mt-6">
          <p className="text-gray-600">In the meantime, follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
            <a href="https://discord.gg/CP774RtC" className="text-blue-500 hover:text-blue-700">Discord</a>
            <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
