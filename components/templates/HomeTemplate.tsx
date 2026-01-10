"use client";

import React from "react";
import { CreateMeetForm } from "../organisms/CreateMeetForm";

type Props = {
  onCreate: (name: string) => void;
  onJoin: (name: string) => void;
};

export const HomeTemplate: React.FC<Props> = ({ onCreate, onJoin }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-2 text-center text-gray-900 dark:text-white">
          Welcome to Meto!
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-8 max-w-md">
          Create a new meeting or join an existing one instantly. Just type your
          name to get started.
        </p>
      </div>

      <CreateMeetForm onCreate={onCreate} onJoin={onJoin} />
    </div>
  );
};
