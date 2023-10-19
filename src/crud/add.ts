import { collection, addDoc } from "firebase/firestore";
import { CollectionsEnum } from "../models/CollectionsEnum";
import { db } from "../firebase";

export const addItem = async (question: string, answer: string) => {
  try {
    const docRef = await addDoc(collection(db, CollectionsEnum.Questions), {
      question,
      answer,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
