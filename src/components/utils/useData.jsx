import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase.js";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [dogsData, setDogsData] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [pastLittersData, setPastLittersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (collectionName, setData) => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      console.log(
        `Firestore data fetched from ${collectionName}:`,
        querySnapshot.docs
      );

      const dataPromises = querySnapshot.docs.map(async (doc) => {
        const docData = doc.data();
        console.log("Document data:", docData);

        // If there are images, get their URLs
        if (docData.images && docData.images.length > 0) {
          const imagePromises = docData.images.map(async (image) => {
            const fileRef = ref(storage, image.url);
            const fileURL = await getDownloadURL(fileRef);
            return { ...image, url: fileURL };
          });
          docData.images = await Promise.all(imagePromises);
        }

        return { id: doc.id, ...docData };
      });
      const data = await Promise.all(dataPromises);
      console.log(`Final data from ${collectionName}:`, data);
      setData(data);
    } catch (error) {
      console.error(`Error fetching data from ${collectionName}: `, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("dogs", setDogsData);
    fetchData("gallery", setGalleryData);
    fetchData("pastLitters", setPastLittersData);
  }, []);

  return (
    <DataContext.Provider
      value={{
        dogsData,
        setDogsData,
        galleryData,
        setGalleryData,
        pastLittersData,
        setPastLittersData,
        loading,
        fetchData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
