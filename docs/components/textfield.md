# TextField 输入框组件

`TextField` 是 SwiftUI 中的基础输入控件，适用于收集用户输入的文本信息，如姓名、搜索内容、评论等。

## 🔰 基本用法

```swift
@State private var name = ""

var body: some View {
    TextField("请输入姓名", text: $name)
        .textFieldStyle(.roundedBorder)
        .padding()
}
```

### **说明：**

- 第一个参数为占位提示文本（Placeholder）
- text 绑定到一个 @State 变量，用于获取输入内容
- .textFieldStyle(.roundedBorder) 设置边框样式

## **🧪 实时输入监听**

```swift
TextField("输入内容", text: $input)
    .onChange(of: input) { newValue in
        print("当前输入：\\(newValue)")
    }
```

使用 onChange 方法可监听输入内容的实时变化。

## **🎨 样式修饰示例**

```swift
TextField("搜索...", text: $searchText)
    .padding(10)
    .background(Color(.systemGray6))
    .cornerRadius(8)
    .overlay(
        HStack {
            Spacer()
            Image(systemName: "magnifyingglass")
                .foregroundColor(.gray)
                .padding(.trailing, 10)
        }
    )
```

结合 padding、background、overlay 等修饰符可自定义外观。

## **🔐 密码输入：SecureField**

```swift
SecureField("请输入密码", text: $password)
    .textFieldStyle(.roundedBorder)
    .padding()
```

- SecureField 是 TextField 的变种
- 输入内容将以点号隐藏，适合密码、PIN 输入等场景

## **🧵 多行输入：TextEditor**

```swift
TextEditor(text: $note)
    .frame(height: 150)
    .overlay(RoundedRectangle(cornerRadius: 8).stroke(Color.gray.opacity(0.5)))
    .padding()
```

TextEditor 用于多行文本输入，与 TextField 搭配使用适应不同输入需求。

## **✅ 小贴士**

- 建议为每个 TextField 添加 .keyboardType() 提高输入效率
- 使用 .submitLabel() 自定义键盘返回按钮的文案
- 使用 .focused() 控制输入焦点状态

熟练掌握 TextField 的用法，是打造表单、搜索、登录界面等输入场景的关键。配合 SwiftUI 的修饰符系统，可以轻松打造美观实用的输入体验。