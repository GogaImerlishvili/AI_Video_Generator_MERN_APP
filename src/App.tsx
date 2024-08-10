function App() {
  return (
    <>
      <main className="max-w-4xl mx-auto flex px-4">
        <div className="py-8">
          <h1 className="text-3xl font-bold uppercase mb-8">
            URL to Video
            <br /> with power of AI
          </h1>

          <form className="border-2 rounded-full">
            <input
            className="bg-transparent text-white px-4 py-2 "
            type="url" placeholder="https://..." />
            <button type="submit">Create video</button>
          </form>
        </div>
        <div className="p-8">
          <div className="bg-gray-200 w-[240px] h-[380px]">a</div>
        </div>
      </main>
    </>
  );
}

export default App;
