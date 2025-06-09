"use client";
import React, { useEffect, useState } from "react";
import ProfileForm from "@/components/templates/ProfileForm";
import { fetchOne } from "@/services/apiServices";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    if (!id) {
      router.push("/login");
    } else {
      setUserId(id);
    }
  }, [router]);

  useEffect(() => {
    const getUserInfo = async () => {
      if (!userId) return;

      try {
        const res = await fetchOne("/users", userId);
        if (!res || !res.nome || !res.email) {
          router.push("/login");
          return;
        }
        setUser(res);
      } catch (err) {
        console.error(err);
        router.push("/login");
      }
    };

    getUserInfo();
  }, [userId, router]);

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-82px)] flex flex-col items-center justify-between py-10 px-4">
        <p className="text-white text-center">Carregando informações...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-82px)] flex flex-col items-center justify-between py-10 px-4">
      <div className="w-full max-w-[760px]">
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="text-white text-2xl font-semibold">My Account</h3>
          <p className="text-[#6699FF] text-sm mb-5">
            Manage your personal information
          </p>
        </div>

        <ProfileForm user={user} />
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-400">"Keep improving. One step at a time."</p>
      </div>
    </div>
  );
};

export default ProfilePage;
