import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config.js";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getProducts = async () => {
  const products = await getDocs(collection(db, "products"));
  products.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    console.log("test-db");
  });
};
