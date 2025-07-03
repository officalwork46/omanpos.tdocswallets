"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // or useRouter if you prefer
import { getSingleVerificationDataByURLLINK } from "@/utils/fetcher";
import DigitalAttestationResult from "@/components/DigitalAttestationResult";

export default function VerificationPage() {
  const { date } = useParams();
  const [verificationData, setVerificationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!date) return;

    const fetchData = async () => {
      setLoading(true);
      const data = await getSingleVerificationDataByURLLINK(date);
      setVerificationData(data);
      setLoading(false);
    };

    fetchData();
  }, [date]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    );
  if (!verificationData) return <div>No data found.</div>;

  return <DigitalAttestationResult verificationData={verificationData} />;
}
