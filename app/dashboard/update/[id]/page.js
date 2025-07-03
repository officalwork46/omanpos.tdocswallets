"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import VerificationForm from "../../create/_component/VerificationForm";
import { getSingleVerificationData } from "@/utils/fetcher";

export default function EditPageClient() {
  const { id } = useParams();
  const [verifactionData, setVerifactionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    getSingleVerificationData(id)
      .then((data) => setVerifactionData(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    );
  if (!verifactionData) return <div>Verification not found</div>;

  return <VerificationForm isEdit={true} verifactionData={verifactionData} />;
}
