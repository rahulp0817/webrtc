"use client";

import React from "react";
import { VideoStream } from "../organisms/VideoStream";

type Meetprops = {};

export const MeetDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <VideoStream />
    </div>
  );
};
