"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import FilterFeedback from "@/components/shared/FilterFeedback";
import FeedbackCard from "@/components/templates/FeedbackCard";
import FeedbackTypeCard from "@/components/shared/FeedbackTypeCard";
import FeedbackText from "@/components/shared/FeedbackText";
import MedidorDeFelicidade from "@/components/shared/MedidorDeFelicidade";
import ShareProgressButton from "@/components/shared/ShareProgressButton";
import { API_BASE_URL } from "@/lib/axios/api";

const Feedback = () => {
  const [progressData, setProgressData] = useState(null);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();
  const feedbackRef = useRef(null);

  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    const tok = sessionStorage.getItem("token");

    if (!id || !tok) {
      router.push("/login");
    } else {
      setUserId(id);
      setToken(tok);
    }
  }, [router]);

  useEffect(() => {
    if (!userId || !token) return;

    const fetchProgress = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];
        const response = await axios.get(
          `${API_BASE_URL}/users/${userId}/progress`,
          {
            params: { data: today },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProgressData(response.data);
      } catch (error) {
        console.error("Error fetching user progress:", error);
      }
    };

    fetchProgress();
  }, [userId, token]);

  if (!progressData) {
    return (
      <div className="flex justify-center font-bold text-xl text-center items-center w-full min-h-[calc(100vh-82px)] text-white">
        No progress to generate feedback...
      </div>
    );
  }

  const {
    completedGeral,
    totalGeral,
    completedMente,
    totalMente,
    completedCorpo,
    totalCorpo,
    equilibrio,
    weeklyInsight,
  } = progressData;

  return (
    <div
      ref={feedbackRef}
      className="min-h-[calc(100vh-82px)] flex flex-col items-center gap-7 py-10 px-4"
    >
      <FilterFeedback />

      <FeedbackCard
        title="Total Progress"
        value={`${(completedGeral / totalGeral) * 100}%`}
        content={
          <div className="flex justify-between">
            <FeedbackTypeCard
              icon={<img src="/mindFeedback.svg" className="w-4" />}
              title="Mind Tasks"
              value={`${completedMente}/${totalMente}`}
              trendIcon={<img src="/ArrowUpBlue.svg" className="w-5" />}
              color="text-[#6699FF]"
            />
            <FeedbackTypeCard
              icon={<img src="/bodyFeedback.svg" className="w-5" />}
              title="Body Tasks"
              value={`${completedCorpo}/${totalCorpo}`}
              trendIcon={<img src="/ArrowDownRed.svg" className="w-5" />}
              color="text-[#FF6666]"
            />
          </div>
        }
      />

      <FeedbackCard
        title="Happiness Meters"
        content={
          <div className="flex flex-col gap-4">
            <MedidorDeFelicidade
              title="Mind"
              value={`${(completedMente / totalMente) * 100}`}
            />
            <MedidorDeFelicidade
              title="Body"
              value={`${(completedCorpo / totalCorpo) * 100}`}
            />
            <MedidorDeFelicidade
              title="Total"
              value={`${(completedGeral / totalGeral) * 100}`}
            />
          </div>
        }
      />

      <FeedbackCard
        title="Weekly Insight"
        content={<FeedbackText insight={weeklyInsight} />}
      />

      <ShareProgressButton data={progressData} />

      <div className="text-center mt-2">
        <h3 className="text-[#9CA3AF]">
          "Consistency builds extraordinary results"
        </h3>
      </div>
    </div>
  );
};

export default Feedback;
