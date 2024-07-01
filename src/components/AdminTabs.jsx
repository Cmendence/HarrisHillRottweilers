import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AdminTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => navigate("/admin/dashboard")}
        className={`rounded-t lg:px-4 px-2 lg:py-1.5 bg-gray-800 font-semibold lg:text-lg text-xs lg:tracking-wide ${
          location.pathname === "/admin/dashboard"
            ? "border-2 border-b-0 border-rose-600 text-rose-600"
            : "bg-gray-900 hover:bg-gray-950 text-slate-100 border-2 border-b-0 border-gray-800"
        }`}
      >
        Edit Dogs
      </button>

      <button
        onClick={() => navigate("/admin/dashboard/editGallery")}
        className={`rounded-t lg:px-4 px-2 lg:py-1.5 bg-gray-800 font-semibold lg:text-lg text-xs lg:tracking-wide ${
          location.pathname === "/admin/dashboard/editGallery"
            ? "border-2 border-b-0 border-rose-600 text-rose-600"
            : "bg-gray-900 hover:bg-gray-950 text-slate-100 border-2 border-b-0 border-gray-800"
        }`}
      >
        Edit Gallery
      </button>

      <button
        onClick={() => navigate("/admin/dashboard/editPastLitters")}
        className={`rounded-t lg:px-4 px-2 py-1.5 bg-gray-800 font-semibold lg:text-lg text-xs lg:tracking-wide ${
          location.pathname === "/admin/dashboard/editPastLitters"
            ? "border-2 border-b-0 border-rose-600 text-rose-600"
            : "bg-gray-900 hover:bg-gray-950 text-slate-100 border-2 border-b-0 border-gray-800"
        }`}
      >
        Edit Past Litters
      </button>
    </div>
  );
}
