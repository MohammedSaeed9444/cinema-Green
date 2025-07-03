
import Layout from "@/components/Layout";
import ContentCard from "@/components/ContentCard";
import { newReleases } from "@/lib/data";

const NewAndPopular = () => {
  return (
    <Layout>
      <div className="pt-24 pb-8 container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">New & Popular</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {newReleases.map(content => (
            <div key={content.id} className="col-span-1">
              <ContentCard content={content} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewAndPopular;
