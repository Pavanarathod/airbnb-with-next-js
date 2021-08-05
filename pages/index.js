import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airanb.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="sm:max-w-7xl sm:mx-auto px-4 sm:px-16">
        <section className="pt-6">
          <h2 className="text-xl sm:text-4xl font-semibold pb-5">
            Explore Nearby
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                location={location}
                distance={distance}
                img={img}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-4xl font-semibold pb-5">
            Live Anywhere
          </h2>

          <div className="sm:flex space-x-3 overflow-scroll scrollbar-hide sm:p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdors.."
          description="Whishlist creted by Airbnb"
          buttontext="Get Started"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps(props) {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (result) => result.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
