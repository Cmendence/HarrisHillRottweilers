import { useEffect } from "react";
import { useData } from "../../components/utils/useData.jsx";

export default function PastLitters() {
  const { pastLittersData, setPastLittersData, loading, fetchData } = useData(); // Access the data, loading state, and fetch function from the context

  useEffect(() => {
    fetchData("pastLitters", setPastLittersData); // Ensure to pass the correct function to update past litters data
  }, []);

  if (loading) {
    return <div className="font-semibold text-2xl m-10">Loading...</div>;
  }

  console.log(pastLittersData);

  return (
    <div>
     <h1 className="text-4xl text-gray-800 font-semibold text-center mt-4">
        Past Litters
      </h1>
      {pastLittersData.map((item) => (
        <div key={item.id} className="lg:m-4 p-4">
          {item.images && item.images.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {item.images.map((image, index) => (
                <div key={index} className="h-full">
                  <img src={image.url} alt={image.description} className="object-cover w-full h-full rounded-md shadow-md shadow-black" />
                </div>
              ))}
            </div>
          )}
          {/* <p className="mt-2 font-semibold text-gray-900 capitalize text-sm">{item.description}</p> */}
        </div>
      ))}
    </div>
  );
}
