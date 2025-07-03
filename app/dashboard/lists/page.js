"use client";

import React, { useEffect, useState } from "react";
import VerificationCard from "./_components/VerificationCard";
import { getAllVerificationData } from "@/utils/fetcher";

const ListsPage = () => {
  const [verificationData, setVerificationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllVerificationData();
        setVerificationData(data);
      } catch (error) {
        console.error("Error fetching verification data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <div>
      {verificationData.length > 0 ? (
        verificationData.map((veri, index) => {
          return (
            <VerificationCard
              index={index}
              key={veri.id}
              VerificationData={veri}
            />
          );
        })
      ) : (
        <p className="text-center text-gray-500">No records found.</p>
      )}
    </div>
  );
};

export default ListsPage;
