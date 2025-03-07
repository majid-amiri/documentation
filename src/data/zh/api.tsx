import * as React from "react"
import colors from "../../styles/colors"
import CodeArea from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import generic from "../generic"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"
import buttonStyles from "../../styles/button.module.css"

export default {
  title: "API文档",
  header: {
    description: "专注于通过简化API提供最佳开发者体验",
  },
  useForm: {
    title: "useForm",
    description: (
      <p>
        <code>useForm</code>也有<strong>可选</strong>的参数。
        下面的示例演示了所有选项的默认值。
      </p>
    ),
    validationResolver: (goToSection) => (
      <>
        <p>
          该回调函数使您可以运行任何模式或自定义验证。该函数的完整形式为
          <code>values</code>作为 参数，您将需要验证结果并返回两者
          <code>values</code>和<code>errors</code>。
        </p>

        <p>
          <b className={typographyStyles.note}>注意：</b>
          只要有错误对象不是空对象，反应钩子形式将考虑该形式视为无效。
        </p>

        <p>
          请在此阅读更多信息：
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("validationResolver")}
          >
            validationResolver
          </button>
          。
        </p>
      </>
    ),
    validateContext: (
      <>
        <p>
          该上下文对象将被注入<code>resolver</code>的第二个参数或
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            对
          </a>
          验证的上下文对象。
        </p>
      </>
    ),
    validateCriteriaMode: (
      <>
        <p>
          默认行为<code>firstError</code>将验证
          所有字段的验证，并收集所有遇到的第一个错误。
        </p>
        <p>
          设置为<code>all</code>时，所有字段的验证将是
          运行并收集遇到的所有错误。
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        验证将在<code>提交</code>
        时触发，无效的输入将附加onChange事件侦听器以重新验证它们。
      </>
    ),
    validateOnBlur: (
      <>
        验证将在离开<code>blur</code>表格事件上触发。
      </>
    ),
    validateOnChange: (
      <>
        验证将在每个输入<code>change</code>
        的事件上触发，并导致多个重新renders。 不推荐这个方法的实践性能。
      </>
    ),
    validationOnAll: (
      <>
        验证将在<code>blur</code>和<code>change</code>
        事件上触发。警告：与<code>onChange</code>
        模式一样，<code>all</code>可能会对性能产生重大影响。
      </>
    ),
    defaultValues: (goToSection) => (
      <>
        <p>
          您可以使用defaultValue/defaultChecked设置输入的默认值
          <a
            className={buttonStyles.links}
            href="https://reactjs.org/docs/uncontrolled-components.html"
          >
            （从React文档中读取默认值的更多内容）
          </a>
          ，或者将defaultValues作为可选参数来填充整个表单的默认值。
        </p>

        <p>
          <b className={typographyStyles.note}>重要提示：</b>
          <code>defaultValues</code>将缓存在自定义钩子中， 要重置
          <code>defaultValues</code>，请使用
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("reset")}
          >
            reset
          </button>
          api。
        </p>

        <p>
          <b className={typographyStyles.note}>注意:</b> 默认值
          <code>defaultValues</code>
          中定义的值将作为默认值<code>defaultValue</code>注入
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("watch")}
          >
            watch
          </button>
          。
        </p>

        <p>
          React Hook Form. 默认值<code>defaultValues</code>
          不会使用手动注册的输入（例如：注册
          <code>{`register({ name: 'test' })`}</code>
          ）自动填充，因为手动注册<code>register</code>字段不会提供
          <code>ref</code>到React Hook Form。
        </p>
      </>
    ),
    validationSchema: (goToSection) => (
      <p>
        将表单验证规则应用于架构级别的<code>Yup</code>，请参阅验证架构
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("validationSchema")}
        >
          validationSchema
        </button>
        部分。
      </p>
    ),
    reValidateMode: (
      <p>
        此选项允许您在有错误的输入重新验证时进行配置（默认情况下，在输入更改期间触发验证）。
      </p>
    ),
    validationFields: (
      <p>
        提供字段数组意味着只包含字段将会被验证。
        此选项很有用需要验证当您要切换什么表格需要验证。
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          默认情况下，当用户提交表单并包含错误时, 具有错误的第一个字段将被聚焦。
        </p>

        <p>
          <b className={typographyStyles.note}>注意:</b> 只有具有
          <code>ref</code>的注册字段将工作。 手动注册的输入将无法正常工作。
          比如: <code>{`register({ name: 'test' }) // 不会工作`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: (goToSection) => (
      <p>
        将此选项设置为<code>true</code>将启用浏览器的本机验证。{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          您可以了解有关内置浏览器验证的更多信息
        </a>
        ，并参考本机验证部分
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("nativeValidation")}
        >
          nativeValidation
        </button>
        了解更多详细信息和示例。
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>此方法将允许您取消注册单个输入或输入的数组。</p>
        <p>
          <b className={typographyStyles.note}>注意:</b>{" "}
          取消注册输入时，其值将不再被包含在被提交的表单数据中。当您手动在
          <code>useEffect</code>
          注册输入时会有用，同时当组件卸载时你也可以用它来取消注册。
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          此方法允许您将输入/选择中的<code>Ref</code>和验证规则注册到React Hook
          Form。
        </p>
        <p>验证规则都是基于HTML标准，也允许自定义验证。</p>
        <p>
          <b className={typographyStyles.note}>重要:</b> 名称<code>name</code>是
          <strong>必需</strong>的和
          <strong>唯一</strong>的。
          输入名称还支持点和括号语法，它允许您轻松创建表单。 示例表如下:
        </p>
      </>
    ),
    fieldArray: (
      <p
        style={{
          paddingLeft: 10,
          borderLeft: `4px solid ${colors.lightPink}`,
        }}
      >
        如果您使用数组/数组字段，则可以将输入名称指定为
        <code>name[index]</code>。{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          查看Field Array数组示例
        </a>
        .
      </p>
    ),
    example: "提交结果",
    selectHelp: "通过选择该选项，下面的API表将得到更新。",
    options: {
      title: "注册选项",
      registerWithValidation: "注册验证",
      registerWithValidationMessage: "注册验证和错误消息",
      note: (goToSection) => (
        <>
          <h2 className={typographyStyles.title}>手动注册输入</h2>
          <p>
            您还可以手动注册输入，这在使用自定义组件和无法访问<code>Ref</code>
            时情况下非常有用。 实际上，当您使用React Native或自定义组件（如
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>
            ）时， 你需要手动注册。
          </p>

          <p>
            通过使用自定义注册时，您将需要使用
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("setValue")}
            >
              setValue
            </button>
            来更新输入值，因为输入注册没有<code>ref</code>。
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>注意:</b>{" "}
            如果您希望自定义注册输入在其值更新过程中触发重新render，那么你应该给您注册的输入的类型加以
            <code>type</code>。
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>注意:</b>多个radio
            input使用相同的名称，您想将验证注册到最后一个
            输入，以便挂钩了解最后将它们作为一组进行验证。
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          如果为true，则表示输入必须具有值，然后才能提交表单。
          您可以分配一个字符串以在错误对象中，来让<code>errors</code>
          返回错误消息。
        </>
      ),
      maxLength: "文本框能接受的最大字符数。",
      minLength: "文本框能输入的最小字符数，并且仍然被认为是有效的。",
      max: "为此输入接受的最大值。",
      min: "要接受此输入的最小值。",
      pattern: "验证文本框内容的正则表达式。",
      validate: `您可以callback调函数作为参数来验证，或者您可以callback调函数的对象来验证所有这些函数。（参考例子)`,
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>此对象包含有关表单状态的信息。</p>

        <p>
          <b className={typographyStyles.note}>重要信息：</b>
          <code>formState</code>与
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>
          一起包装以提高渲染性能，因此请使您在渲染前先调用/读取它，以启用状态更新。
          这个减少重新渲染功能功能由于缺少而仅适用于Web平台React Native上的
          <code>Proxy</code>支持。
        </p>
      </>
    ),
    dirty: (
      <>
        在用户与任何输入互动后设置为<code>true</code>。
      </>
    ),
    dirtyFields: "一组独特的用户修改字段。",
    isSubmitted: (
      <>
        在用户提交表单后设置<code>true</code>
        。提交表单后，其状态将保持提交状态，直到使用reset方法调用为止。
      </>
    ),
    touched: "已被接触过的所有输入的数组。",
    isSubmitting: (
      <>
        在表单提交将设置为<code>true</code>，提交后设置为<code>false</code>。
      </>
    ),
    submitCount: "提交表格数量。",
    isValid: (
      <>
        如果没有任何错误，设置为<code>true</code>。
      </>
    ),
  },
  errors: {
    title: "errors",
    description: () => (
      <>
        <p>对象包含属于每个输入的表单错误或错误消息。</p>
      </>
    ),
    types: (
      <>
        这对于输入验证（例如密码规则）很有用， 需要为单个字段返回多个错误。为此
        功能，请确保已设置 <code>criteriaMode 'all'</code>.
      </>
    ),
    message: `默认情况下消息是空字符串。 但是，如果您使用错误消息注册验证，那么它将被返回。`,
    ref: `输入元素的参考。`,
    note: (goToSection) => (
      <p>
        <b className={typographyStyles.note}>注意：</b> 您可以使用{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("ErrorMessage")}
        >
          ErrorMessage
        </button>{" "}
        帮助处理错误状态。
      </p>
    ),
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>这将监视指定的输入并返回其值。</p>

        <ul>
          <li>
            <p>
              当未定义<code>defaultValue</code>时，watch的第一个render将返回
              <code>undefined</code>，因为它在<code>register</code>
              之前被调用，但是您可以将<code>defaultValue</code>
              设置为返回值（第二个参数）。
            </p>
          </li>
          <li>
            <p>
              但是，如果<code>defaultValues</code>在使用表单
              <code>useForm</code>作为参数初始化，则第一个render将返回
              <code>defaultValues</code>中提供的内容。
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          按名称观看输入值（类似于lodash的
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>
          功能)
        </>
      ),
      multiple: "观看多个输入",
      all: "观看所有输入",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>当表单验证成功时，此函数将传递表单数据并可以远程调用。</p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(onSubmit)()
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>注意:</b> 您可以传递
          <code>async</code>验证。例如：
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(async (data) =&gt; await fetchAPI(data))
          </code>
        </p>
      </>
    ),
  },
  reset: (goToSection) => ({
    title: "reset",
    description: (
      <>
        <p>
          此函数将重置表单中的字段值和错误。通过提供<code>omitResetState</code>
          ，您可以自由地 仅重置特定状态。 您可以将值<code>values</code>
          作为可选参数传递，以将表单重置为已分配的默认值。
        </p>
        <p>
          <b className={typographyStyles.note}>注意:</b> 对于像
          <code>React-Select</code>这样不公开
          <code>ref</code>
          的受控组件，您必须通过
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("setValue")}
          >
            setValue
          </button>
          手动重置输入值或使用
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>
          来包装您的受控组件。
        </p>
        <p>
          <b className={typographyStyles.note}>注意:</b> 您将需要在
          <code>useForm</code>提供<code>defaultValues</code>或者
          <code>reset</code>带价值，来重置<code>Controller</code>
          组件的价值。
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <>
        <p>允许您手动设置输入单个和多项错误。</p>
        <ul>
          <li>
            <p>如果输入，此方法将不会保留相关的输入错误 通过验证。</p>
          </li>
          <li>
            <p>
              设置与输入字段不相关的错误将是 持续存在，需要使用
              <code>clearError</code>手动删除。
            </p>
          </li>
          <li>
            <p>
              当您在<code>handleSubmit</code>函数期间，此功能很有用
              想要在异步验证后向用户提供错误反馈。
            </p>
          </li>
        </ul>
      </>
    ),
  },
  clearError: {
    title: "clearErrors",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: 重置所有错误
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: 重置单个错误
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: 重置多个错误
          </p>
        </li>
      </ul>
    ),
  },
  setValue: {
    title: "setValue",
    description: (
      <>
        <p>
          此功能允许您动态设置输入/选择值。
          在同时，尝试避免不必要的重新渲染，与此同时只有以下情况将触发重新渲染:
        </p>
        <ul>
          <li>
            <p>值更新时触发错误</p>
          </li>
          <li>
            <p>值更新时纠正错误</p>
          </li>
          <li>
            <p>
              首次调用并触发表单<code>dirty</code>
            </p>
          </li>
        </ul>
        <p>
          <b className={typographyStyles.note}>注意:</b> 通过调用此方法，
          <code>formState</code>
          将将输入的名称<code>name</code>推入触摸<code>touched</code>。
        </p>
        <p>
          This function will return the entire form data. 您还可以将
          <code>shouldValidate</code>设置为<code>true</code>
          ，并将触发字段验证。例如：
          <br />
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldValidate: true })`}
          withOutCopy
        />

        <p>
          您也可以将<code>shouldDirty</code>参数设置为<code>true</code>
          ，以将字段设置为dirty。
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldDirty: true })`}
          withOutCopy
        />
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          此功能将帮助您读取表单值。区别<code>watch</code>之间是
          <code>getValues</code>之间不会触发 重新呈现或订阅输入更改。功能包括：
        </p>

        <ul>
          <li>
            <p>
              <code>getValues()</code>：读取整个表单值。
            </p>
          </li>
          <li>
            <p>
              <code>getValues('test')</code>：通过读取单个输入值
              <strong>名称</strong>。
            </p>
          </li>
          <li>
            <p>
              <code>getValues(['test'，'test1'])</code>：通过读取多个输入
              <strong>名称</strong>。
            </p>
          </li>
        </ul>
      </>
    ),
  },
  trigger: {
    title: "trigger",
    description: (
      <>
        <p>手动触发表单中的输入/选择验证。</p>
        <p>
          <b className={typographyStyles.note}>注意:</b> 当验证失败时，
          <code>errors</code>对象将被更新。
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "validationSchema",
    description: (
      <p>
        如果您希望使用外部验证模式，可以在
        <code>useForm</code>应用验证模式<code>validationSchema</code>
        作为可选参数。 React Hook Form当前支持
        <a
          className={buttonStyles.links}
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </a>
        进行对象模式验证。
      </p>
    ),
  },
  Controller: {
    title: "Controller",
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td>✓</td>
          <td>输入的唯一名称。</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>React.ElementType</code>
          </td>
          <td></td>
          <td>
            控制器将注入<code>onChange</code>，<code>onBlur</code>和
            <code>value</code>属性插入组件。
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-24gcl"
              rawData={`<Controller 
  as={<TextInput />} 
  control={control} 
  name="test" 
/>
<Controller 
  as={TextInput} 
  control={control} 
  name="test" 
/>`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>render</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Function</code>
          </td>
          <td></td>
          <td>
            这是一个
            <a
              href="https://reactjs.org/docs/render-props.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              渲染道具
            </a>
            。返回React元素并提供以下功能的函数：
            将事件和值附加到组件中。这很容易与带有非标准道具的外部控制组件集成
            名称：<code>onChange</code>，<code>onBlur</code>和<code>value</code>
            。
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-24gcl"
              rawData={`<Controller
  control={control} 
  name="test" 
  render(({ onChange, onBlur, value }) => (
    <Input 
      onTextChange={onChange} 
      onTextBlur={onBlur} 
      textValue={value} 
    />
  ))
/>
<Controller render={props => <Input {...props} />} />`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td>✓</td>
          <td>{generic.control.zh}</td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>any</code>
          </td>
          <td></td>
          <td>
            与不受控制的组件的<code>defaultValue</code>相同，当 提供
            <code>boolean</code>值，它将被视为复选框 输入。
            <p>
              <b className={typographyStyles.note}>注意:</b> 您将需要提供
              <code>defaultValue</code>或<code>useForm</code>上的
              <code>defaultValues</code>
            </p>
            <p>
              <b className={typographyStyles.note}>注意</b>: 如果您的表格会
              使用不同的值调用<code>reset</code>，您将需要
              在useForm级别而不是set上提供<code>defaultValues</code>
              内联<code>defaultValue</code>。
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            根据<code>register</code>的验证规则。
            <ul>
              <li>
                本地状态：具有更新的验证的<code>register</code>输入,在
                <code>useEffect</code>处输入<code>unregister</code>
                ，然后让<code>Controller</code>用更新的<code>规则</code>
                重新注册自己。
              </li>
              <li>
                输入状态：将<code>validate</code>函数与
                <code>getValues</code>结合使用以有条件地返回您的验证。
              </li>
            </ul>
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-8pd7z?file=/src/App.tsx"
              withOutCopy
              rawData="
register('name', { required: state })
validate: (value) => value === getValues('firstName');"
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>onFocus</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>() =&gt; void</code>
          </td>
          <td></td>
          <td>
            <p>
              此回调允许自定义挂钩在以有错误情况下专注于输。此功能适用于React和React-Native
              只要可以专注于组件。
            </p>
            <p>
              这是一个
              <a
                href="https://codesandbox.io/s/react-hook-form-controllerautofocus-v6-eeo66"
                target="_blank"
                rel="noopener noreferrer"
              >
                工作示例
              </a>
              。
            </p>
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          React Hook Form包含不受控制的组件和本机输入，
          但是很难避免使用外部受控组件 如
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JedWatson/react-select"
          >
            React-Select
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ant-design/ant-design"
          >
            AntD
          </a>{" "}
          和{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          。 这个包装器组件将使您的工作更轻松。
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
    introduction: (
      <p>
        当组件存在深处时传递<code>props</code>变得痛苦，这个组件解决这个问题。
      </p>
    ),
    description: (
      <>
        <p>
          一旦你的表单被<code>FormContext</code>包装，
          <code>useFormContext</code>:函数可以在其子组件中调用。
        </p>
        <p>
          <b className={typographyStyles.note}>注意:</b> 调用使用
          <code>useFormContext</code>将为您提供所有
          <code>useForm</code>函数。
        </p>
      </>
    ),
  },
  control: {
    title: "control",
    description: (
      <p>
        该对象是为React Hook Form的Controller组件制作的。包含React Hook
        Form的方法和同时将受控组件注册。
      </p>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>A simple component to render associated input's error message.</p>
    ),
    table: {
      name: <>关联的表格名称。</>,
      errors: (
        <>
          React Hook表单中的<code>errors</code>
          对象。如果您使用的是FormContext，则为可选。
        </>
      ),
      message: <>内联错误消息。</>,
      as: (
        <>
          包装器组件或HTML标签。 例如: <code>as="span"</code> or{" "}
          <code>{`as={<Text />}`}</code>
        </>
      ),
      render: (
        <>
          这是一个{" "}
          <a
            href="https://reactjs.org/docs/render-props.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            render prop
          </a>{" "}
          用于呈现错误单个或多个消息。
          <p>
            <b className={typographyStyles.note}>注意:</b>
            您需要设置将<code>validateCriteriaMode</code>设置为“all”以使用
            <code>消息</code>.
          </p>
        </>
      ),
    },
  },
  shouldUnregister: (
    <p>
      默认情况下，当输入被删除时，React Hook Form使用
      <code>MutationObserver</code>来检测并<code>注销</code>
      那些已卸载的输入。但是，您可以将<code>shouldUnregister</code>设置为
      <code>false</code>，以防止由于卸载而丢失输入状态。
    </p>
  ),
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          用于处理字段数组（动态输入）的自定义挂钩。 此挂钩提供以下对象和函数。
        </p>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name.zh}</th>
                <th width="140px">{generic.type.zh}</th>
                <th width="90px">{generic.required.zh}</th>
                <th>{generic.description.zh}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td></td>
                <td>
                  <>关联的表格名称。</>
                </td>
              </tr>
              <tr>
                <td>
                  <code>control</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td></td>
                <td>{generic.control.zh}</td>
              </tr>
              <tr>
                <td>
                  <code>keyName</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    string = 'id'
                  </code>
                </td>
                <td></td>
                <td>
                  字段数组<code>key</code>的值，默认为“ id”，您可以
                  更改密钥名称。
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>注意: </b>{" "}
          <code>useFieldArray</code>建立在不受控制的组件之上。
          以下说明将帮助您了解并牢记其实施过程中的行为。
        </p>

        <ul>
          <li>
            <p>
              可以通过在<code>userform</code>中的
              <code>defaultValues</code>来填充<code>字段</code>。
            </p>
          </li>
          <li>
            <p>
              确保您将来自<code>fields</code>对象的
              <code>id</code>分配为组件键。
            </p>
          </li>
          <li>
            <p>
              确保将<code>defaultValue</code>设置为要设置默认值时，
              <code>fields[index]</code>
              当使用输入,删除或重置。
            </p>
          </li>
          <li>
            <p>您不能一个接一个地调用动作。行动需要每个渲染触发。</p>
            <CodeArea
              withOutCopy
              rawData={`// ❌ The following is not correct
handleChange={() => {
  if (fields.length === 2) {
    remove(0);
  }
  append({ test: 'test' });
}}

// ✅ The following is correct and second action is triggered after next render
handleChange={() => {
  append({ test: 'test' });
}}

React.useEffect(() => {
  if (fields.length === 2) {
    remove(0);
  }
}, fields)
            `}
            />
          </li>
          <li>
            <p>
              与<code>useFieldArray</code>一起使用时，请使用
              <code>{`ref={register()}`}</code>而不是
              <code>{`ref={register}`}</code>，这一点很重要，因此
              <code>register</code>将在映射期间被调用。
            </p>
          </li>
          <li>
            它不适用于<code>useEffect</code>上的自定义注册。
          </li>
        </ul>
      </>
    ),
    table: (
      <>
        <tr>
          <td>
            <code>fields</code>
          </td>
          <td width={320}>
            <code className={typographyStyles.typeText}>
              object & {`{ id: string }`}
            </code>
          </td>
          <td>
            此对象是映射和render染输入的真实来源
            <p>
              <b className={typographyStyles.note}>重要: </b>
              因为每个输入可以不受控制, <code>id</code>
              是必须的来帮助反应组件是否已更改、添加或删除了。
            </p>
            <p>
              eg: <code>{`{fields.map(d => <input key={d.id} />)}`}</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>append</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object, shouldFocus?: boolean = true) =&gt; void
              </code>
            </code>
          </td>
          <td>将输入/输入追加到字段的末尾</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object, shouldFocus?: boolean = true) =&gt; void
              </code>
            </code>
          </td>
          <td>将输入/输入前置到字段的开头</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index: number, value: object, shouldFocus?: boolean = true)
                =&gt; void
              </code>
            </code>
          </td>
          <td>在特定位置插入输入</td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>交换输入位置</td>
        </tr>
        <tr>
          <td>
            <code>move</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>
            将输入移动到另一位置。
            <p>
              <b className={typographyStyles.note}>注意:</b>
              <code>move</code>和<code>swap</code>之间的差异 <code>swap</code>
              在于继续调用<code>move</code>将推送输入一直推下,<code>swap</code>
              只是交换输入的位置。
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index?: number | number[]) =&gt; void
              </code>
            </code>
          </td>
          <td>在特定位置删除输入，或删除所有输入当没有提供位置。</td>
        </tr>
      </>
    ),
  },
  resolver: {
    title: "resolver",
    description: (
      <>
        <p>
          此功能使您可以运行任何外部验证方法，例如
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          ,{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          ，
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>
          和。实际上，目标不仅限于限制Yup作为我们的外部（架构）验证库。我们希望支持许多其他验证库以与React
          Hook Form一起使用。您甚至可以编写自定义验证逻辑进行验证。
        </p>

        <p>
          我们正式支持Yup，Joi和Superstruct
          <a
            href="https://github.com/react-hook-form/react-hook-form-resolvers"
            target="_blank"
            rel="noopener noreferrer"
          >
            标准解析器
          </a>
          。
        </p>

        <code
          style={{
            fontSize: 16,
            padding: 15,
            background: "#191d3a",
            borderRadius: 4,
            display: "block",
          }}
        >
          npm install @hookform/resolvers
        </code>

        <p>关于构建自定义解析器的说明：</p>

        <ul>
          <li>
            <p>
              <b className={typographyStyles.note}>注意:</b>{" "}
              确保返回的对象包含值和错误，并且它们的默认值应为空对象
              <code>{`{}`}</code>。
            </p>
          </li>
          <li>
            <p>
              <b className={typographyStyles.note}>注意:</b>{" "}
              返回错误对象的键应与您的输入有关。
            </p>
          </li>
          <li>
            <p>
              <b className={typographyStyles.note}>注意:</b>
              该函数将被缓存在的自定义钩子中，而
              <code>context</code>
              是一个可变对象，可以在每次重新渲染时进行更改。
            </p>
          </li>
          <li>
            <p>
              <b className={typographyStyles.note}>注意:</b>
              重新验证输入将在用户互动期间一次只能出现一个字段，因为这个软件会将错误对象评估为特定字段，并且触发相应的重新渲染。
            </p>
          </li>
        </ul>
      </>
    ),
  },
  useWatch: {
    title: "useWatch",
    description: (
      <p>
        与<code>watch</code> API共享相同的功能，但是，
        会在您的组件级别隔离重新渲染，并可能导致 为您的应用程序提供更好的性能。
      </p>
    ),
  },
}
