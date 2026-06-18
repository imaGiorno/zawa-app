export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        利用規約
      </h1>

      <p className="mb-4">
        本サイトは、文章をざわ構文風に変換する非公式のファンツールです。
      </p>

      <p className="mb-4">
        利用者は自己の責任において本サービスを利用するものとします。
      </p>

      <p className="mb-4">
        本サービスの利用によって発生した損害について、運営者は責任を負いません。
      </p>

      <p className="mb-4">
        サービス内容は予告なく変更または終了する場合があります。
      </p>

      <p>
        制定日：2026年6月
      </p>

      <footer className="mt-10 text-sm text-gray-500 flex gap-4">
  <a href="/about" className="underline">
    このサイトについて
  </a>

  <a href="/privacy" className="underline">
    プライバシーポリシー
  </a>

  <a href="/contact" className="underline">
    お問い合わせ
  </a>
</footer>
    </main>
  );
}