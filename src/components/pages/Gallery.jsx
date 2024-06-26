import { useEffect } from "react";
import { useData } from "../../components/useData.jsx";

export default function Gallery() {
  const { galleryData, setGalleryData, loading, fetchData } = useData(); // Access the data, loading state, and fetch function from the context

  useEffect(() => {
    fetchData("gallery", setGalleryData); // Ensure to pass the correct function to update gallery data
  }, []);

  if (loading) {
    return <div className="font-semibold text-2xl m-10">Loading...</div>;
  }

  console.log(galleryData);

  return (
    <div>
      <h1 className="text-4xl text-gray-800 font-semibold text-center mt-4">
        GALLERY
      </h1>
      {galleryData.map((item) => (
        <div key={item.id} className="m-4 p-4 rounded-lg shadow-md shadow-black">
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
