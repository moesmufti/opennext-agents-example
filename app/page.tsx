"use client";

import { useAgent } from "agents-sdk/react";
import { useAgentChat } from "agents-sdk/ai-react";

export default function Home() {
  const agent = useAgent({
    agent: "chat",
  });

  console.log(agent);

  // const {
  //   messages: agentMessages,
  //   input: agentInput,
  //   handleInputChange: agentHandleInputChange,
  //   handleSubmit: agentHandleSubmit,
  //   clearHistory: agentClearHistory,
  // } = useAgentChat({
  //   agent,
  //   maxSteps: 5,
  // });

  // console.log(agentMessages);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello World</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h2>Thanks Sunil</h2>
      </footer>
    </div>
  );
}
