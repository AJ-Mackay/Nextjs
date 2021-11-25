import Link from 'next/link';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Stretch out on bed lick plastic bags but side-eyes your *jerk* other
        hand while being petted purr like an angel yet to pet a cat, rub its
        belly, endure blood and agony, quietly weep, keep rubbing belly. Flex
        claws on the human`s belly and purr like a lawnmower. Pooping rainbow
        while flying in a toasted bread costume in space. Mew mew.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
