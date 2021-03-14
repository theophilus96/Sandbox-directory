import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import { useStateValue } from "../state/StateProvider";

export default function useCompanyStorage(file, DocRefID) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
  
    const [{ user }, dispatch] = useStateValue();
  
    useEffect(() => {
      // references
      
      if (user && file) {
          const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection("company").doc(DocRefID);
  
        storageRef.put(file).on(
          "state_changed",
          (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
          },
          (err) => {
            setError(err);
          },
          async () => {
            const url = await storageRef.getDownloadURL();
          //   const createdAt = timestamp();
            await collectionRef.update({ image: url });
            setUrl(url);
          }
        );
      }
    }, [file]);
  
    return { progress, url, error };
  };