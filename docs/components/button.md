# Button 按钮组件

`Button` 是 SwiftUI 中最常用的交互组件之一，用户点击按钮后会触发指定的操作。它支持文本、图标、自定义样式等各种形式。

---

## 🔰 基本用法

```swift
Button("点击我") {
    print("按钮被点击了！")
}
```

### 说明：

- 第一个参数是按钮的标题文本
- 闭包内是点击事件触发后的操作

---

## 🖼 使用图标按钮

```swift
Button(action: {
    print("图标按钮点击")
}) {
    Image(systemName: "heart.fill")
        .foregroundColor(.red)
        .font(.title)
}
```

你可以使用 SF Symbols 中的系统图标，让按钮更具表现力。

---

## 🧱 自定义按钮样式

```swift
Button(action: {}) {
    Text("自定义按钮")
        .padding()
        .background(Color.blue)
        .foregroundColor(.white)
        .cornerRadius(10)
}
```

你可以组合 `Text` 和修饰符来定义按钮的外观，包括颜色、圆角、边框等。

---

## 🎨 多状态按钮

```swift
@State private var isLiked = false

Button(action: {
    isLiked.toggle()
}) {
    Label(isLiked ? "已点赞" : "点赞", systemImage: isLiked ? "heart.fill" : "heart")
}
```

使用 `@State` 结合 `Label` 实现状态变化按钮，提升用户体验。

---

## 🚀 使用 ButtonRole 设置按钮角色（iOS 15+）

```swift
Button("删除", role: .destructive) {
    print("执行删除操作")
}
```

- `.destructive`：高亮为红色，表示破坏性操作
- `.cancel`：用于关闭弹窗等取消操作

---

## 📱 在 Alert 或 ActionSheet 中使用 Button

```swift
.alert("提示", isPresented: $showAlert) {
    Button("确定", role: .none) { }
    Button("取消", role: .cancel) { }
}
```

SwiftUI 的 `Button` 可以无缝用于弹窗、菜单等多种交互场景。

---

## ✅ 小贴士

- 可使用 `Label` 统一图文按钮格式
- 使用 `.buttonStyle()` 应用全局样式
- 使用 `ButtonRole` 明确操作意图

---

Button 是构建交互体验的基础组件，熟练掌握其样式和用法，将显著提升你的 SwiftUI 开发能力。
