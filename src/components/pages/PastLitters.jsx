import { useEffect } from "react";
import { useData } from "../../components/useData.jsx";

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
      <h1 className="text-4xl text-purple-800 underline font-extrabold text-center">
        THIS IS THE PAST LITTERS PAGE
      </h1>
      {pastLittersData.map((item) => (
        <div key={item.id} className="m-4 p-4 border rounded-lg shadow-lg">
          {item.images && item.images.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {item.images.map((image, index) => (
                <div key={index} className="w-48 h-48">
                  <img src={image.url} alt={image.name} className="object-cover w-full h-full rounded" />
                </div>
              ))}
            </div>
          )}
          <p className="mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
