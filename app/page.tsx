"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const convert = async () => {
    if (!input.trim()) {
      setOutput("📝 文章を入力してネッ‼️");
      return;
    }

    if (input.length > 100) {
      setOutput("⚠️ 100文字以内で入力してネッ‼️");
      return;
    }

    setLoading(true);
  setLoadingMessage("📝 番もらいます‼️");

  const timer1 = setTimeout(() => {
    setLoadingMessage("🔍 デッキ確認します...");
  }, 1000);

  try {
    const res = await fetch("/api/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: input,
      }),
    });

const data = await res.json();

clearTimeout(timer1);

setLoadingMessage("🥳 変換完了‼️");
setOutput(data.result);

setTimeout(() => {
  setLoading(false);
  setLoadingMessage("");
}, 1000);

  } catch (e) {
    clearTimeout(timer1);
    

    setOutput(
  "😵‍💫 構文変換に失敗しました💦 少し時間を置いて再挑戦してネッ‼️"
);
    setLoading(false);
  }
};
const copyResult = async () => {
  if (!output) return;

  await navigator.clipboard.writeText(output);
  alert("📋 コピーしました‼️");
};

  

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        ざわ構文変換アプリ
      </h1>
<p className="mb-6 rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-sm text-gray-700">
  📖 通常の文章を「ざわ構文」に変換する非公式ツールです。<br />
  🎉 ざわ構文を楽しみたい方は、用法容量を守ってご使用ください。
</p>

      <textarea
        className="border w-full p-2 rounded"
        rows={6}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="文章を入力してください"
      />

      <button
        onClick={convert}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        変換
      </button>
{loading && (
  <div className="mt-4 p-4 border rounded bg-blue-50 text-center text-lg">
    {loadingMessage}
  </div>
)}

 
      <div className="border mt-4 p-4 rounded whitespace-pre-wrap">
        {output}
      </div>
      {output && (
  <button
    onClick={copyResult}
    className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
  >
    📋 コピー
  </button>
)}
    </main>
  );
}

<footer className="mt-10 text-sm text-gray-500 flex gap-4">
  <a href="/privacy" className="underline">
    プライバシーポリシー
  </a>

  <a href="/contact" className="underline">
    お問い合わせ
  </a>
</footer>