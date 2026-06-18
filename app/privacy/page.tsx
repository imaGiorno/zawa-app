export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        プライバシーポリシー
      </h1>

      <p className="mb-4">
        当サイト（ざわ構文変換アプリ）では、サービス向上のためアクセス解析ツールを利用する場合があります。
      </p>

      <p className="mb-4">
        取得した情報はサイト運営以外の目的では使用しません。
      </p>

      <p className="mb-4">
        当サイトでは広告配信サービスを利用する場合があります。
      </p>
      <p className="mt-6">
        Amazonのアソシエイトとして、当サイトは適格販売により収入を得ています。
      </p>
      <p className="mb-4">
        本ポリシーは必要に応じて変更する場合があります。
      </p>

      <p>
        制定日：2026年6月
      </p>

      <footer className="mt-10 text-sm text-gray-500 flex gap-4">
  <a href="/about" className="underline">
    このサイトについて
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