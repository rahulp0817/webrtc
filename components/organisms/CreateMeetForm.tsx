"use client";

import React, { useState } from "react";
import { FormField } from "../molecules/FormField";
import { createMeetSchema } from "@/lib/validation";
import Button from "../atoms/button";

type Props = {
  onCreate: (name: string) => void;
  onJoin: (name: string) => void;
  isCreating?: boolean;
  isJoining?: boolean;
};

export const CreateMeetForm: React.FC<Props> = ({
  onCreate,
  onJoin,
  isCreating = false,
  isJoining = false,
}) => {
  const [name, setName] = useState("");
  const [error, setError] = useState<string>("");

  const validate = (value: string) => {
    const result = createMeetSchema.safeParse({ name: value });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleCreate = () => {
    if (!validate(name)) return;
    onCreate(name);
  };

  const handleJoin = () => {
    if (!validate(name)) return;
    onJoin(name);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-sm p-12 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
      <FormField
        label="Your Name"
        value={name}
        onChange={(val) => {
          setName(val);
          validate(val);
        }}
        placeholder="Enter your name"
        error={error}
        isRequired
      />

      <div className="flex flex-col gap-4">
        <Button
          variant="primary"
          loading={isCreating}
          fullWidth
          onClick={handleCreate}
          disabled={!name.trim()}
        >
          Create Meet
        </Button>

        <Button
          variant="destructive"
          loading={isJoining}
          fullWidth
          onClick={handleJoin}
          disabled={!name.trim()}
        >
          Join Meet
        </Button>
      </div>
    </div>
  );
};
