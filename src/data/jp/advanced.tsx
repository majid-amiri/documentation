import * as React from "react"
import { Link as PageLink } from "gatsby"
import CodeArea from "../../components/CodeArea"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import * as CodeExampleTestingForm from "../../components/codeExamples/testingForm"
import smartForm from "../../components/codeExamples/smartForm"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import customHookWithValidationResolver from "../../components/codeExamples/customHookWithValidationResolver"
import virtualizedList from "../../components/codeExamples/virtualizedList"

export default {
  title: "高度な使用法",
  header: {
    title: "高度な使用法",
    description:
      "React Hook Formを使用して、複雑でアクセス可能なフォームを構築する。",
  },
  controlledMixedWithUnControlled: {
    title: "制御されたコンポーネントと非制御コンポーネントの組み合わせ",
    description: (
      <p>
        React Hook Form は、非制御コンポーネントをサポートしていますが、
        制御されたコンポーネントとも互換性があります。{" "}
        <a
          href="https://github.com/mui-org/material-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material-UI
        </a>{" "}
        や{" "}
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antd
        </a>{" "}
        などの UI ライブラリのほとんどは、
        制御されたコンポーネントのみをサポートして構築されています。
        さらに、React Hook Form{" "}
        を使用することで制御されたコンポーネントの再レンダリングも最適化されます。
        下記は、制御されたコンポーネントと非制御コンポーネントのフォームバリデーションを組み合わせた例です。
      </p>
    ),
  },
  errorMessage: {
    title: "エラーメッセージ",
    description: (
      <p>
        エラーメッセージは、入力に関連する問題があるときにユーザーに視覚的なフィードバックを与えることです。
        React Hook Form では、エラーを簡単に取得できるように errors
        オブジェクトを提供しています。
        ただし、画面のレンダリングエラーを改善する方法はいくつかあります。
      </p>
    ),
    register: (
      <>
        <code>register</code> 時にエラーメッセージを埋め込み、{" "}
        <code>value</code>{" "}
        属性にエラーメッセージを簡単に挿入することができます。例：
      </>
    ),
    component:
      "エラー出力を支援するために ErrorMessage コンポーネントを作成します。",
    get: (
      <p>
        プロジェクトで{" "}
        <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">
          lodash
        </a>{" "}
        を使用している場合、lodash の{" "}
        <code>
          <a
            href="https://lodash.com/docs/4.17.15#get"
            target="_blank"
            rel="noopener noreferrer"
          >
            get
          </a>
        </code>{" "}
        関数を活用することができます。例：
        <br />
        <br />
        <code>{`get(errors, 'firstName.message')`}</code>
      </p>
    ),
    optionalChaining: (
      <>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >
            Optional chaining
          </a>{" "}
          演算子である <code>?.</code> は、 <code>null</code> または{" "}
          <code>undefined</code> によって発生するエラーを気にせずに{" "}
          <code>errors</code> オブジェクトを読み取ることができます。
        </p>
        <p>
          <code>{`errors?.firstName?.message`}</code>
        </p>
      </>
    ),
  },
  accessibility: {
    title: "アクセシビリティ (A11y)",
    description: (
      <>
        <p>
          React Hook Form はネイティブフォームバリデーションをサポートします。
          これにより、独自のルールで input
          のバリデーションを行うことができます。
          私たちのほとんどはカスタムデザインとレイアウトを適用してフォームを構築しますが、
          フォームのアクセシビリティ (A11y) を保証することも私たちの責任です。
        </p>

        <p>
          下記のコードの例は、意図したとおりのバリデーションが動作しますが、
          アクセシビリティについては改良することができます。
        </p>

        <CodeArea rawData={accessibleCodeBase} />

        <p>
          下記のコードの例は、{" "}
          <a
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
            target="_blank"
          >
            ARIA
          </a>{" "}
          を活用した改良版です。
        </p>
        <CodeArea rawData={accessibleCodeFinal} />

        <p>
          この改良後、スクリーンリーダーはこのように話すでしょう：{" "}
          <i>“Name, edit, invalid entry, This is required.”</i>
        </p>
      </>
    ),
  },
  wizard: {
    title: "ウィザードフォーム・ファンネル",
    description: (
      <>
        <p>
          異なるページやセクション間でユーザーの情報を収集することは非常に一般的です。
          このような場合、異なるページやセクション間でのユーザーの入力値を、
          状態管理ライブラリを使用して保存しておくことをお勧めします。
          この例では、状態管理ライブラリとして{" "}
          <a
            className={buttonStyles.links}
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
            rel="noopener noreferrer"
          >
            little state machine
          </a>{" "}
          (より身近なものであれば、{" "}
          <a
            className={buttonStyles.links}
            href="https://github.com/reduxjs/redux"
            target="_blank"
            rel="noopener noreferrer"
          >
            redux
          </a>{" "}
          として置き換えることができます) を使用します。
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>ステップ1：</b>{" "}
          ルーティングとストアを設定します。
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <b className={typographyStyles.note}>ステップ2：</b>{" "}
          ページを作成し、フォームの送信データを収集し、
          そのデータをストアに送信して次のページに移動するようにします。
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <b className={typographyStyles.note}>ステップ3：</b>{" "}
          最終的に、ストア内のすべてのフォームデータを使用して、
          フォームを送信したりフォームデータの結果を表示します。
        </p>
        <CodeArea
          rawData={step3}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          上記のパターンに従って、複数のページ間でのユーザーの入力データを収集して、
          ウィザードフォーム・ファンネルを構築できるはずです。
        </p>
      </>
    ),
  },
  smartForm: {
    title: "スマートフォームコンポーネント",
    description: (
      <>
        <p>
          ここでのアイデアは、input
          とフォームを簡単に組み合わせることができるということです。
          <code>Form</code>{" "}
          コンポーネントを作成して、フォームデータを自動的に収集します。
        </p>

        <CodeArea
          rawData={smartForm}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p style={{ textAlign: "center" }}>♦</p>

        <p>各コンポーネントがどのように構成されているか見てみましょう。</p>

        <div className={typographyStyles.codeHeading}>
          <h2>Form</h2>
        </div>

        <p>
          <code>Form</code> コンポーネントの責任は、全ての{" "}
          <code>react-hook-form</code>{" "}
          のメソッドを子コンポーネントに注入することです。
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <div className={typographyStyles.codeHeading}>
          <h2>Input / Select</h2>
        </div>

        <p>
          <code>Input / Select</code> コンポーネントの責任は、自分自身を{" "}
          <code>react-hook-form</code> に登録することです。
        </p>
        <CodeArea
          rawData={input}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p>
          <code>Form</code> コンポーネントを使用して、
          <code>react-hook-form</code> の <code>props</code>{" "}
          を子コンポーネントに注入することで、
          アプリケーションで複雑なフォームを簡単に作成及び組み合わせることができます。
        </p>
      </>
    ),
  },
  fieldArrays: {
    title: "フィールド配列",
    description: (
      <>
        <p>
          この機能は、React Hook Formが提供する最良の機能の一つです。
          この機能を実現するために (他のライブラリのように)
          コンポーネントをインポートする代わりに、 既存の HTML
          マークアップを活用することができます。 key は、 <code>name</code>{" "}
          属性にあります。 React Hook Form において、 <code>name</code>{" "}
          属性はあなたが使用したいデータ構造を表します。
        </p>

        <p>
          <b className={typographyStyles.note}>注意:</b>{" "}
          私たちは、複雑なシナリオのためのカスタムフック{" "}
          <PageLink to="/api#useFieldArray">useFieldArray</PageLink>{" "}
          も作成しました。
        </p>

        <p>
          下記の例は、input の <code>name</code>{" "}
          属性を操作してどのようにフィールド配列を作成できるかを示しています。
        </p>

        <p>
          <b className={typographyStyles.note}>注意：</b>{" "}
          アプリケーションにフィールドの削除や挿入、追加、先頭に追加などの機能が必要な場合は、{" "}
          <PageLink to="/api#Controller">Controller</PageLink> を使用した
          <a
            href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-gvgg4"
            target="_blank"
            rel="noreferrer noopener"
          >
            実装のリンク
          </a>
          を参照して下さい。
        </p>
      </>
    ),
  },
  connectForm: {
    title: "接続フォーム",
    description: (
      <p>
        フォームを作成するときに、深くネストされたコンポーネントツリーの中に
        input が存在することがあり、 そのような場合は{" "}
        <a href="/api#useFormContext">FormContext</a> が非常に便利です。
        <code>ConnectForm</code> コンポーネントを作成して React の
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a>{" "}
        を活用することで、 DX を更に向上することができます。{" "}
        <code>ConnectForm</code> コンポーネントの利点は、input をどこからでも
        React Hook Form に接続できることです。
      </p>
    ),
  },
  conditionalControlledComponent: {
    title: "条件付き制御されたコンポーネント",
    description: (
      <>
        <p>
          React Hook Form
          を使用すると、条件付きフィールドを非常にシンプルに扱えます。 input
          がコンポーネントツリーから削除されると、自動的に{" "}
          <code>unregister</code> されるからです。 そのような動作を
          <a
            href="https://codesandbox.io/s/13ykqx4wx7"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちらの例に示します
          </a>{" "}
          。ただし、制御されたコンポーネントでは <code>ref</code>{" "}
          が登録されていないため、 同じように自動的に登録解除されません。
          対処方法は下記の通りです。
        </p>
        <ul>
          <li>
            <p>
              <PageLink to="/api#Controller">Controller</PageLink>{" "}
              をインポートしてコンポーネントをラップし、
              登録および登録解除を管理できるようにします
            </p>
          </li>
          <li>
            <p>
              <code>
                <a
                  href="https://reactjs.org/docs/hooks-effect.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  useEffect
                </a>
              </code>{" "}
              を使用して、カスタム登録として input を登録し、
              コンポーネントのアンマウント後に登録を解除します
            </p>
          </li>
        </ul>
        <p>下記に例を示します：</p>
      </>
    ),
  },
  formContext: {
    title: "FormContext パフォーマンス",
    description: (
      <p>
        React Hook Form の{" "}
        <PageLink to="/api/#useFormContext">FormContext</PageLink> は、{" "}
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          React の Context API
        </a>{" "}
        上に構築されています。 これにより、全ての階層で手動で props
        を渡す必要なく、
        コンポーネントツリーを介してデータを渡す問題を解決します。
        これにより、React Hook Form は状態を更新する度に、
        コンポーネントツリーが再レンダリングされる問題を引き起こしますが、
        必要に応じて下記の例のようにアプリを最適化することができます。
      </p>
    ),
  },
  customHookWithValidationResolver: {
    title: "バリデーションリゾルバーを使ったカスタムフック",
    description: (
      <>
        <p>
          バリデーションリゾルバーとしてカスタムフックを構築できます。
          カスタムフックは yup/Joi/Superstruct を使って、
          バリデーションリゾルバーの中で使われるバリデーションメソッドに簡単に統合することができます。
        </p>
        <ul>
          <li>
            メモ化されたバリデーションスキームを定義する
            (または依存関係を持たないならばコンポーネントの外にバリデーションスキームを定義する)
          </li>
          <li>バリデーションスキームを渡してカスタムフックを使う</li>
          <li>useForm フックにバリデーションリゾルバーを渡す</li>
        </ul>

        <CodeArea rawData={customHookWithValidationResolver} />
      </>
    ),
  },
  workingWithVirtualizedList: {
    title: "バーチャルリストで動かす",
    description: (
      <>
        <p>
          データの表があるシナリオを想像してください。
          この表は100または1000以上の列を含み、
          それぞれの列には入力欄があります。
          一般的にはビューポート内にあるアイテムのみをレンダリングしますが、
          これはアイテムがビューの外に出た時にDOMから削除されて、
          再追加されるため問題が発生します。
          これはアイテムが再びビューポートに入った時に、
          アイテムがデフォルトの値にリセットされる原因となります。
        </p>

        <p>
          この問題を回避するためには、 手動でフィールドを登録し、
          プログラムによってフィールドの値をセットします。
        </p>

        <p>
          以下に{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bvaughn/react-window"
          >
            react-window
          </a>{" "}
          を使用した例を示します。
        </p>

        <CodeArea
          rawData={virtualizedList}
          url="https://codesandbox.io/s/react-hook-form-with-react-window-b4j8n"
        />
      </>
    ),
  },
  testingForm: {
    title: "フォームをテストする",
    description: (
      <>
        <p>
          テストはバグやミスを防いだり、
          コードをリファクタリングする時にコードの安全性を保証するため、
          とても重要なものです。
        </p>

        <p>
          私たちは{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>{" "}
          を使うことをお勧めします。なぜなら、テストコードはシンプルで、そしてテストはよりユーザーの行動にフォーカスしています。
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>Step 1:</b> テスト環境を設定する
        </p>

        <p>
          react-hook-form は DOM からアンマウントされた input
          要素を検出するために <code>MutationObserver</code> を使うため{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/testing-library/jest-dom"
          >
            @testing-library/jest-dom
          </a>{" "}
          を <code>jest</code>{" "}
          の最新バージョンとともにインストールしてください。
        </p>

        <CodeArea rawData={"npm install -D @testing-library/jest-dom"} />

        <p>
          そして{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/testing-library/jest-dom"
          >
            @testing-library/jest-dom
          </a>{" "}
          をインポートするために <code>setup.js</code> を作成してください。
        </p>
        <CodeArea
          rawData={'import "@testing-library/jest-dom";'}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/setup.js"
        />

        <p>
          最後に、<code>setup.js</code> を <code>jest.config.js</code>{" "}
          で読み込む必要があります。
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step1}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/setup.js"
        />

        <p>
          <b className={typographyStyles.note}>Step 2:</b>
          ログインフォームを作成する
        </p>

        <p>
          私たちは、role
          属性を設定しています。それらの属性はテストを書いたり、アクセシビリティーを改善する時に役に立ちます。
          詳しくは{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>{" "}
          のドキュメントを参照してください。
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step2}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/src/App.js"
        />

        <p>
          <b className={typographyStyles.note}>Step 3:</b> テストを書く
        </p>

        <p>テストでカバーしようとしているのは以下の条件です:</p>

        <ul>
          <li>
            <p>送信時のテストに失敗</p>

            <p>
              <code>handleSubmit</code> は非同期で実行されるので、
              送信したことを検出するために <code>waitFor</code> や{" "}
              <code>find*</code> メソッドを使います。
            </p>
          </li>
          <li>
            <p>それぞれの入力に関するバリデーションをテストする</p>

            <p>
              異なる要素を探す時に <code>*ByRole</code>{" "}
              を使います。なぜなら、このようにしてユーザーはUIコンポーネントを認識するからです。
            </p>
          </li>
          <li>
            <p>送信時のテストに成功</p>
          </li>
        </ul>

        <CodeArea
          rawData={CodeExampleTestingForm.step3}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/src/App.test.js"
        />
      </>
    ),
  },
}
