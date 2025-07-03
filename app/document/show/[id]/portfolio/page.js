"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSingleVerificationData } from "@/utils/fetcher";
import Button from "@/components/Button";

export default function Page() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const result = await getSingleVerificationData(id);
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    );
  if (!data) return <div>No data found.</div>;

  return (
    <section className="w-full bg-white">
      <Button />
      <div className="mt-10 md:mt-5">
        {data?.attestedDocuments?.map((doc, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={doc}
              alt={`Document ${index + 1}`}
              className="w-full max-w-2xl h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
