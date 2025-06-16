import Sidebar from '@/components/Sidebar';

const Home = () => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <h1>메인 영역</h1>
      </div>
    </main>
  );
};

export default Home;
