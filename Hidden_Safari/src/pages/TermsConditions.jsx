import React, { useState, useEffect } from "react";
import OrangeBanner from "../components/GreenBanner";
import { ENDPOINTS } from "../assets/EndPoints";

const TermsConditions = () => {
  const [terms, setTerms] = useState({
    title: "Terms and Conditions",
    subtitle: "Meet the heroes behind our Success",
    content: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await fetch(ENDPOINTS.TERMS);
        if (!response.ok) throw new Error("Failed to fetch terms");
        const data = await response.json();
        setTerms(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  const sectionRegex = /(?=\n\d+\.\s)/g;
  const rawSections = terms.content.split(sectionRegex);

  const htmlSections = rawSections.map((sectionText) => {
    const trimmed = sectionText.trim();
    const titleMatch = trimmed.match(/^(\d+\.\s)([^\n]+)/);
    const number = titleMatch?.[1] || "";
    const subtitle = titleMatch?.[2] || "";
    const body = trimmed.replace(/^(\d+\.\s[^\n]+)?/, "").trim();

    return `
      <div class="mb-6">
        <div class="flex flex-wrap items-baseline space-x-2 mb-2">
          <span class="text-green-600 font-bold text-xl">${number}</span>
          <span class="text-green-700 font-semibold text-lg">${subtitle}</span>
        </div>
        <div class="text-gray-700 text-sm leading-relaxed break-words">${body.replace(/\n/g, "<br>")}</div>
      </div>
    `;
  });

  return (
    <div className="h-full w-screen bg-gray-100">
      <OrangeBanner title={terms.title} subtitle={terms.subtitle} />

      <div className="">
        <div className="bg-white p-6 rounded-lg shadow-md min-h-[200px]">
          {loading ? (
            <p className="text-center text-lg text-gray-600">Loading ...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : (
            <div className="space-y-6">
              {htmlSections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm"
                  dangerouslySetInnerHTML={{ __html: section }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
