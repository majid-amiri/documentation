import * as React from "react"
import CodeArea from "./CodeArea"
import watchCode from "./codeExamples/watchCode"
import watchCodeTs from "./codeExamples/watchCodeTs"
import watchCodeTypes from "./codeExamples/watchCodeTypes"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"

export default function ApiWatch({
  currentLanguage,
  api,
}: {
  api: any
  currentLanguage: string
}) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          watch:{" "}
          <span
            className={typographyStyles.typeText}
          >{`(names?: string | string[]) => any`}</span>
          <a
            className={typographyStyles.videoLink}
            href="https://www.youtube.com/watch?v=vNrUPktDT7o"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video
          </a>
        </h2>
      </code>

      {api.watch.description}

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th
                style={{
                  minWidth: 180,
                }}
              >
                {generic.type[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 200,
                }}
              >
                {generic.description[currentLanguage]}
              </th>
              <th>{generic.example[currentLanguage]}</th>
              <th
                style={{
                  minWidth: 250,
                }}
              >
                {generic.return[currentLanguage]}
              </th>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>string</code>
              </td>
              <td>{api.watch.tableTitle.single}</td>
              <td>
                <code>watch('inputName')</code>
                <br />
                <code>watch('inputName', 'value')</code>
              </td>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`string | string[] | { [key:string] : any } | undefined`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>{`string[]`}</code>
              </td>
              <td>{api.watch.tableTitle.multiple}</td>
              <td>
                <code>watch(['inputName1'])</code>
                <br />
                <code>{`watch(['field1'], { field1: '1' })`}</code>
              </td>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`{ [key:string] : any }`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>undefined</code>
              </td>
              <td>{api.watch.tableTitle.all}</td>
              <td>
                <code>watch()</code>
                <br />
                <code>{`watch(undefined, { field: 'value1' })`}</code>
              </td>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`{ [key:string] : any }`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CodeArea
        rawData={watchCode}
        tsRawData={watchCodeTs}
        rawTypes={watchCodeTypes}
        url="https://codesandbox.io/s/react-hook-form-watch-v6-4usym"
        tsUrl="https://codesandbox.io/s/react-hook-form-watch-v6-ts-16tvf"
      />

      <hr />
    </>
  )
}
