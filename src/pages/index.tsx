// import MeComponent from '../components/me/MeComponent';
import ContactUs from '@/layouts/ContactUs';
import Portofolio from '@/layouts/Portofolio';
import WeAre from '@/layouts/WeAre';

import Homes from '../component/Home';
import Layout from '../layouts/Layout';

export default function Home() {
  return (
    <>
      <div>
        <Layout title="farhandz">
          <Homes />
          <Portofolio />
          <WeAre />
          <ContactUs />
        </Layout>
      </div>
    </>
  );
}
