import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import Head from "next/head";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({ searchResult }) => {
  const router = useRouter();
  const { location, startDate, endDate, number } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");

  const formatEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatedStartDate} - ${formatEndDate}`;

  return (
    <div>
      <Head>
        <title>Airbnb | search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${location} | ${range} ${number}`} />
      <main className="flex">
        <section className="flex-grow p-14 px-6">
          <p className="text-xs">
            300 + Stays {range} for {number} of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Canselation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Rooms And Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="">
            {searchResult?.map(
              ({
                description,
                img,
                lat,
                location,
                long,
                price,
                star,
                title,
                total,
              }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  price={price}
                  title={title}
                  total={total}
                  description={description}
                  star={star}
                  lat={lat}
                  long={long}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden xl:inline-flex border-l-2 border-t-2 rounded-md border-gray-300 shadow-2xl mt-4 xl:min-w-[600px]">
          <Map results={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
