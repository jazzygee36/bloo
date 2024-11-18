import Footer from '@/component/common/footer';
import Banner from '@/component/pages/home/banner';
import Genres from '@/component/pages/home/genres';
import Navbar from '@/component/pages/home/navbar';
import TopMovies from '@/component/pages/topMovies';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <TopMovies />
      <Genres />
      <Footer />
    </div>
  );
}
