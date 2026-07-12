import SearchBar from "../components/SearchBar.jsx";
import CourtsList from "../components/CourtsList.jsx";

function Home() {
  return (
    <div className="min-h-screen bg-[#00001a] px-4 py-8">
      <SearchBar />
      <CourtsList />
    </div>
  );
}

export default Home;