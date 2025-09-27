
'use server';

import { addDoc, collection, getDocs, doc, updateDoc, Timestamp, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { AwarenessRequestForm } from '@/app/request-drive/page';

type Status = 'Pending' | 'Reviewed' | 'Completed';

export interface AwarenessRequest extends AwarenessRequestForm {
  id: string;
  createdAt: Timestamp;
  status: Status;
  preferredDate: any; // Firestore timestamp will be serialized
}

// Function to submit the awareness drive request
export async function submitAwarenessRequest(formData: AwarenessRequestForm) {
  try {
    const docRef = await addDoc(collection(db, 'awarenessRequests'), {
      ...formData,
      status: 'Pending',
      createdAt: Timestamp.now(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding document: ', error);
    throw new Error('Failed to submit awareness request.');
  }
}

// Function for admins to get all awareness drive requests
export async function getAwarenessRequests(): Promise<AwarenessRequest[]> {
  try {
    const requestsCol = collection(db, 'awarenessRequests');
    const q = query(requestsCol, orderBy('createdAt', 'desc'));
    const requestSnapshot = await getDocs(q);
    const requestList = requestSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            // Convert Firestore Timestamp to JS Date for client-side usage
            preferredDate: data.preferredDate.toDate(),
            createdAt: data.createdAt.toDate(),
        } as AwarenessRequest;
    });
    return requestList;
  } catch (error) {
    console.error('Error getting documents: ', error);
    throw new Error('Failed to fetch awareness requests.');
  }
}

// Function for admins to update the status of a request
export async function updateAwarenessRequestStatus(id: string, status: Status) {
  try {
    const requestDoc = doc(db, 'awarenessRequests', id);
    await updateDoc(requestDoc, { status: status });
    return { success: true };
  } catch (error) {
    console.error('Error updating document: ', error);
    throw new Error('Failed to update request status.');
  }
}
