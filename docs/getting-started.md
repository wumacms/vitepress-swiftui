# SwiftUI 快速入门

SwiftUI 是 Apple 推出的现代化 UI 框架，它采用声明式语法，让开发者能够以更简洁、直观的方式构建跨平台应用界面。无论你是 iOS 新手还是资深开发者，SwiftUI 都能帮助你更高效地开发漂亮、响应迅速的界面。

## 🧰 开发环境准备

在开始之前，请确保你已经准备好以下工具：

- 一台运行 macOS 的 Mac 设备（推荐 macOS Ventura 及以上）
- 最新版本的 [Xcode](https://developer.apple.com/xcode/)（建议使用 Xcode 14 或以上）
- Apple ID（用于模拟器测试或真机部署）
- 熟悉基本的 Swift 语法

## 🚀 创建你的第一个 SwiftUI 项目

1. 打开 Xcode，点击 `File > New > Project...`
2. 选择 **App** 模板，点击「Next」
3. 输入项目名称，例如 `HelloSwiftUI`
4. Interface 选择 **SwiftUI**，Language 选择 **Swift**
5. 选择保存路径，点击「Create」

创建完成后，你将看到默认生成的 `ContentView.swift` 文件。

## ✨ 第一个界面示例

我们来实现一个最简单的“Hello, SwiftUI!”界面。

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Hello, SwiftUI!")
                .font(.largeTitle)
                .fontWeight(.bold)
                .padding()

            Text("欢迎来到 SwiftUI 的世界")
                .foregroundColor(.secondary)
        }
    }
}
```

### 代码解释：

- `VStack`：垂直布局容器
- `Text`：文本显示组件
- `.font()`、`.fontWeight()`：设置文本样式
- `.padding()`：添加内边距
- `.foregroundColor()`：设置字体颜色

---

## 🧪 实时预览功能

SwiftUI 支持实时预览（Canvas），你可以通过以下方式启用：

```swift
#Preview {
    ContentView()
}
```

点击 Xcode 界面右上角的「Canvas」按钮，即可开启可视化预览模式，帮助你快速构建和调整界面。

## 📚 推荐学习路径

以下是 SwiftUI 的核心学习模块，建议按顺序学习：

- [布局系统（Stack, Spacer, Alignment）](/layout/stack)
- [交互控件（Button, TextField, Toggle 等）](/components/forms)
- [状态管理（@State, @Binding, @ObservedObject）](/state-management/intro)
- [页面导航与路由（NavigationStack, NavigationLink）](/navigation)
- [动画与过渡效果（withAnimation, transition）](/animation)

## 🔗 资源推荐

- [Apple 官方 SwiftUI 教程](https://developer.apple.com/tutorials/swiftui)
- [SwiftUI 文档速查](https://developer.apple.com/documentation/swiftui)
- [Hacking with Swift - 100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui)

## ✅ 小结

你已经成功创建了第一个 SwiftUI 项目，了解了基本的布局与预览方式。SwiftUI 的声明式语法和强大的组件系统将大大简化你的 UI 开发流程。继续深入学习吧，精彩才刚刚开始！

> 💡 提示：使用真实项目练习将是学习 SwiftUI 的最佳方式！