// import MeComponent from '../components/me/MeComponent';
import ContactUs from '@/layouts/ContactUs';
import Portofolio from '@/layouts/Portofolio';
import Service from '@/layouts/Service';
import WeAre from '@/layouts/WeAre';

import Homes from '../component/Home';
import Layout from '../layouts/Layout';

export default function Home() {
  return (
    <>
      <div>
        <Layout title="farhandz">
          <Homes />
          <Service />
          <Portofolio />
          <WeAre />
          <ContactUs />
        </Layout>
      </div>
    </>
  );
}
