"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}


export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [history, setHistory] = useState<string[]>([]);

useEffect(() => {
  const saved = localStorage.getItem("zawa-history");

  if (saved) {
    setHistory(JSON.parse(saved));
  }
}, []);

  
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

    console.log("status:", res.status);
const data = await res.json();

clearTimeout(timer1);

setLoadingMessage("🥳 変換完了‼️");
setOutput(data.result);

const newHistory = [
  input,
  ...history.filter((item) => item !== input),
].slice(0, 5);

setHistory(newHistory);

localStorage.setItem(
  "zawa-history",
  JSON.stringify(newHistory)
);

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


const trackShare = () => {
    window.gtag?.("event", "share_x", {
    event_category: "engagement",
    event_label: "x_share_button",
  });
};


const trackAmazonClick = (product: string) => {
  window.gtag?.("event", "amazon_click", {
    event_category: "affiliate",
    event_label: product,
  });
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

<div className="mt-4">
  <p className="font-bold mb-2">📝 入力例（タップで入力）</p>

  <div className="flex flex-wrap gap-2">
    <button
      onClick={() => setInput("今日はありがとう")}
      className="border px-3 py-1 rounded hover:bg-gray-100"
    >
      今日はありがとう
    </button>

    <button
      onClick={() => setInput("ポケカやろう")}
      className="border px-3 py-1 rounded hover:bg-gray-100"
    >
      ポケカやろう
    </button>

    <button
      onClick={() => setInput("また遊ぼう")}
      className="border px-3 py-1 rounded hover:bg-gray-100"
    >
      また遊ぼう
    </button>

    <button
      onClick={() => setInput("とってもすごい")}
      className="border px-3 py-1 rounded hover:bg-gray-100"
    >
      とってもすごい
    </button>
  </div>
</div>


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
  <>
    <button
      onClick={copyResult}
      className="bg-green-500 text-white px-4 py-2 mt-2 rounded mr-2"
    >
      📋 コピー
    </button>

     <a
    onClick={trackShare}
    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
      output +
      "\n\n#ざわ構文 #ざわ構文変換アプリ\nhttps://zawa-app.vercel.app"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-black text-white px-4 py-2 mt-2 rounded"
  >
    🐦 Xで共有
  </a>
  </>
  
)}

{history.length > 0 && (
  <div className="mt-8 border rounded p-4">

    <div className="flex justify-between items-center mb-3">
      <h2 className="font-bold">
        🕒 最近の変換履歴
      </h2>

      <button
        onClick={() => {
          localStorage.removeItem("zawa-history");
          setHistory([]);
        }}
        className="text-sm text-red-500"
      >
        履歴削除
      </button>
    </div>

    <div className="flex flex-col gap-2">
      {history.map((item, index) => (
        <button
          key={index}
          onClick={() => setInput(item)}
          className="text-left border rounded px-3 py-2 hover:bg-gray-100"
        >
          {item}
        </button>
      ))}
    </div>

  </div>
)}

  <div className="mt-4">
    <p className="font-bold mb-2">
      🔥 ポケカ好き向けおすすめ商品
    </p>

    <div className="flex flex-col gap-2">

      <a
        onClick={() => trackAmazonClick("yukihami")}
        href="https://amzn.to/3QKAimB"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 text-white px-4 py-2 rounded text-center"
      >
        🃏 ユキハミ関連グッズ
      </a>

      <a
        onClick={() => trackAmazonClick("yukihami_doll")}
        href="https://amzn.to/4uTkfB6"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 text-white px-4 py-2 rounded text-center"
      >
        🧸 ユキハミぬいぐるみ
      </a>

      <a
        onClick={() => trackAmazonClick("sleeve")}
        href="https://amzn.to/4gt29SF"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 text-white px-4 py-2 rounded text-center"
      >
        📚 ポケカ用スリーブ
      </a>

    </div>
  </div>

<div className="mt-10 p-4 border rounded bg-gray-50">
  <h2 className="text-xl font-bold mb-2">
    ざわ構文とは？
  </h2>

  <p className="text-sm text-gray-700 leading-7">
    ざわ構文とは、一部のSNS上で人気の独特な文章表現です。
    本サイトでは通常の文章を入力するだけで、
    ざわ構文風の文章へ自動変換できます。
    SNS投稿や友人とのネタ共有などにご活用ください。
  </p>
</div>


<footer className="mt-10 text-sm text-gray-500 flex gap-4">
  <a href="/about" className="underline">
    このサイトについて
  </a>

  <a href="/privacy" className="underline">
    プライバシーポリシー
  </a>

  <a href="/terms" className="underline">
    利用規約
  </a>

  <a href="/contact" className="underline">
    お問い合わせ
  </a>
</footer>
  
    </main>
  );
}

