import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import ArticleList from "../features/articles/components/ArticleList";

function App() {
  return (
    <>
      <Header />

      <div className="flex top-50">
        <div className="fixed   h-screen w-60 border-r border-[var(--color-border)] bg-[var(--color-bg-secondary)]">

        <Sidebar />
        </div>

        <main className="min-w-0 flex-1 right-10  ml-60 h-screen overflow-y-auto border-l border-[var(--color-border)] bg-[var(--color-bg-primary)] p-4">
          <ArticleList />
        </main>
      </div>
    </>
  );
}

export default App;