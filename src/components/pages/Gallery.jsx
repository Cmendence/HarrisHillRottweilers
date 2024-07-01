// import { useEffect } from "react";
// import { useData } from "../../components/utils/useData.jsx";

// export default function Gallery() {
//   const { galleryData, setGalleryData, loading, fetchData } = useData(); // Access the data, loading state, and fetch function from the context

//   useEffect(() => {
//     fetchData("gallery", setGalleryData); // Ensure to pass the correct function to update gallery data
//   }, []);

//   if (loading) {
//     return <div className="font-semibold text-2xl m-10">Loading...</div>;
//   }

//   console.log(galleryData);

//   return (
//     <div>
//       <h1 className="text-4xl text-gray-800 font-semibold text-center mt-4">
//         Gallery
//       </h1>
//       {galleryData.map((item) => (
//         <div key={item.id} className="m-4 p-6 rounded-lg shadow-md shadow-black flex flex-col">
//           {item.images && item.images.length > 0 && (
//             <div className="flex gap-4 justify-center">
//               {item.images.map((image, index) => (
//                 <div key={index} className="w-48 h-48">
//                   <img src={image.url} alt={image.name} className=" rounded-md object-contain border border-red-500" />
//                 </div>
//               ))}
//             </div>
//           )}
//           <p className="mt-2 font-semibold text-gray-900 capitalize text-sm">{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


import { useEffect } from "react";
import { useData } from "../../components/utils/useData.jsx";
import CollapsibleText from "../utils/CollapsibleText.jsx";

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
    <div className="mb-4">
      <h1 className="text-4xl text-gray-800 font-semibold text-center mt-4">
        Gallery
      </h1>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {galleryData.map((item) => (
          <div key={item.id} className="rounded-lg flex flex-col items-center lg:w-52 w-36">
            {item.images && item.images.length > 0 && (
              <div className="flex flex-col items-center">
                {item.images.map((image, index) => (
                  <div key={index} className="border border-yellow-500 rounded-md">
                    <img src={image.url} alt={image.name} className="rounded-md" />
                  </div>
                ))}
              </div>
            )}
            {item.description && <CollapsibleText text={item.description} maxLength={75} />}
          </div>
        ))}
      </div>
    </div>
  );
}
