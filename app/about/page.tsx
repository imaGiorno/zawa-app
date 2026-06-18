export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        このサイトについて
      </h1>

      <p className="mb-4">
        ざわ構文変換アプリは、通常の文章をざわ構文風に変換する非公式ファンツールです。
      </p>

      <p className="mb-4">
        SNS投稿や友人とのやり取りを、ざわ構文風にアレンジして楽しむことができます。
      </p>

      <p className="mb-4">
        入力された文章はAIによって変換されます。
      </p>

      <p className="mb-4">
        本サイトは個人が運営する非公式サービスであり、各種コンテンツの権利はそれぞれの権利者に帰属します。
      </p>

      <p>
        運営者：今ちゃん
      </p>

      <footer className="mt-10 text-sm text-gray-500 flex gap-4">
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