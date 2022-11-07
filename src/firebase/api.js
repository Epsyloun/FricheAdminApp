import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./config";

const collectionName = "cobros";

export const saveCobros = (newLink) =>
  addDoc(collection(db, collectionName), newLink);

export const updateCobros = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const onGetCorreos = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getCobros = (callback) => onSnapshot(collection(db, collectionName), callback);

export const deleteCobros = (id) => deleteDoc(doc(db, collectionName, id));

export const getCobro = (id) => getDoc(doc(db, collectionName, id));