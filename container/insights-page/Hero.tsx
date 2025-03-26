import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { latestItemss } from "@/constants";
import { Rounded, Tags } from "@/components";
import { motion } from "framer-motion";
import { contactHero } from "@/public";
import Form from "./Form";
import { Marquee } from "@/components";
import { publicationItems } from "@/constants";

// Define a TypeScript interface for a Job
interface Job {
  _id: string;
  position: string;
  description: string;
  requirements: string;
}

const Hero: React.FC = () => {
  const str = [
    { id: 1, title: "all", href: "/" },
    { id: 2, title: "presentation template", href: "/" },
    { id: 3, title: "public speaking", href: "/" },
    { id: 4, title: "storytelling", href: "/" },
  ];

  // State to hold jobs fetched from the API
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch jobs from the API when the component mounts
  useEffect(() => {
    fetch("https://admin-kappa-swart.vercel.app/api/jobs")
      .then((response) => response.json())
      .then((data: Job[]) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err: any) => {
        console.error(err);
        setError(err.message || "Error fetching jobs");
        setLoading(false);
      });
  }, []);

  const container = useRef(null);


  return (
    <div className="w-full" ref={container}>
      <div className="w-full flex flex-col items-center justify-center bg-about">
        <div
          className="bg-[#f1f1f1] relative z-20 w-[90%] py-[20px] rounded-t-[10px]"
          data-scroll
          data-scroll-speed="-.1"
        />
      </div>
    <section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full border-t border-[#21212155]">
            <p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
              We create&nbsp;
              <span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
                eye-catching&nbsp;
              </span>
              and&nbsp;
              <span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
                eye-opening&nbsp;
              </span>
              presentations that educate, inspire and influence action.
            </p>
          </div>
          <Form />

          {/* Job Openings Section integrated with API */}
          <section className="w-full bg-gray-100 py-10 rounded-t-[20px] mt-[-10px] z-30 relative">
            <div className="w-full padding-x">
              <h3 className="text-3xl font-semibold py-8 text-gray-800 font-NeueMontreal mb-4">
                Job Openings
              </h3>
              {loading ? (
                <p>Loading job openings...</p>
              ) : error ? (
                <p>Error loading jobs: {error}</p>
              ) : jobs.length === 0 ? (
                <p>No job openings available at the moment.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {jobs.map((job) => (
                    <div key={job._id} className="bg-[#71edbc] shadow-md rounded-lg p-6">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.position}
                      </h4>
                      <p className="text-gray-700 mb-4 whitespace-pre-wrap">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.requirements.split(",").map((req, index) => (
                          <span
                            key={index}
                            className="bg-black text-white text-sm font-medium px-2.5 py-1.5 rounded"
                          >
                            {req.trim()}
                          </span>
                        ))}
                      </div>
                      
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;
