import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const getSingleVerificationDataByURLLINK = async (urlLink) => {
  try {
    const q = query(
      collection(db, "verifications"),
      where("urlLink", "==", urlLink)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const result = querySnapshot.docs[0];
    return { id: result.id, ...result.data() };
  } catch (error) {
    console.error(error);
    return { error: true, message: "data fetch error" };
  }
};

export const getAllVerificationData = async () => {
  const querySnapshot = await getDocs(collection(db, "verifications"));

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};
export const getSingleVerificationData = async (id) => {
  const docRef = doc(db, "verifications", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return { error: true, message: "No such document!" };
  }
};
