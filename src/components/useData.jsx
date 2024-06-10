// import { createContext, useContext, useState, useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import { db, storage } from "../firebase"; // adjust the path as necessary

// const DataContext = createContext();

// export const useData = () => {
//   return useContext(DataContext);
// };

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "dogs"));
//         console.log("Firestore data fetched:", querySnapshot.docs);
        
//         const dataPromises = querySnapshot.docs.map(async (doc) => {
//           const docData = doc.data();
//           console.log("Document data:", docData);
          
//           if (docData.filePath) {
//             const fileRef = ref(storage, docData.filePath);
//             const fileURL = await getDownloadURL(fileRef);
//             return { id: doc.id, ...docData, fileURL };
//           }
//           return { id: doc.id, ...docData };
//         });
//         const data = await Promise.all(dataPromises);
//         console.log("Final data:", data);
//         setData(data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <DataContext.Provider value={{ data, loading }}>
//       {children}
//     </DataContext.Provider>
//   );
// };


import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase"; // adjust the path as necessary

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "dogs"));
      console.log("Firestore data fetched:", querySnapshot.docs);
      
      const dataPromises = querySnapshot.docs.map(async (doc) => {
        const docData = doc.data();
        console.log("Document data:", docData);
        
        if (docData.filePath) {
          const fileRef = ref(storage, docData.filePath);
          const fileURL = await getDownloadURL(fileRef);
          return { id: doc.id, ...docData, fileURL };
        }
        return { id: doc.id, ...docData };
      });
      const data = await Promise.all(dataPromises);
      console.log("Final data:", data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
