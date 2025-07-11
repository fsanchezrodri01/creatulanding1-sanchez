import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { app } from "./config.js";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getProducts = async () => {
  const products = await getDocs(collection(db, "products"));
  const productsArray = [];

  products.forEach((doc) => {
    console.log(doc.id);
    console.log(doc.data());
    productsArray.push({ ...doc.data(), id: doc.id });
  });

  return productsArray;
};

export const getProductsByCategory = async (category) => {
  const q = query(
    collection(db, "products"),
    where("category", "==", category)
  );
  const documentos = await getDocs(q);

  const productsArray = [];

  documentos.forEach((doc) => {
    productsArray.push({ ...doc.data(), id: doc.id });
  });

  return productsArray;
};

export const getProduct = async (id) => {
  const docRef = doc(db, "products", id);
  const documento = await getDoc(docRef);

  if (documento.exists()) {
    return { ...documento.data(), id: documento.id };
  } else {
    return null;
  }
};
