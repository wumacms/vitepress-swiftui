# SwiftUI 项目结构解析

SwiftUI 项目的结构与传统 UIKit 项目略有不同，它更强调**声明式编程**和模块化设计。理解 SwiftUI 项目的组织方式，有助于你更高效地构建和维护应用。

## 🗂 项目结构总览

以一个默认创建的 SwiftUI 项目为例，Xcode 通常会包含以下几个关键文件：

```
MySwiftUIApp/
├── MySwiftUIAppApp.swift
├── ContentView.swift
├── Assets.xcassets
├── Preview Content/
└── Info.plist
```

## 📄 MySwiftUIAppApp.swift

这是 SwiftUI 项目的入口，使用了 `@main` 属性修饰的结构体：

```swift
@main
struct MySwiftUIAppApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

- `@main`：表示应用程序的主入口
- `App` 协议：替代了以前的 `AppDelegate`
- `WindowGroup`：用于表示主窗口的内容区域

## 📄 ContentView.swift

这是你的首页界面视图文件，也是 SwiftUI 应用的核心：

```swift
struct ContentView: View {
    var body: some View {
        Text("Hello, SwiftUI!")
    }
}
```

你可以将该文件扩展为主界面视图或作为导航入口。

## 🎨 Assets.xcassets

- 用于存放图像资源、颜色定义和 App 图标。
- SwiftUI 支持动态颜色和暗黑模式，可在资源库中设置。

## 📁 Preview Content/

用于 SwiftUI 的 Canvas 预览资源（不参与 App 打包）。可以在这里放置一些模拟用的数据资源用于预览视图。

## ⚙️ Info.plist

应用的配置信息，包括：

- 应用名称、版本号、Bundle ID
- 权限说明（相机、定位、网络等）
- 启动界面配置

## ✅ 小贴士：项目模块化建议

- 将每个页面或功能模块单独创建 Swift 文件夹（例如 Views, Models, Services）
- 命名建议使用模块名前缀，如 `LoginView.swift`, `UserModel.swift`
- 使用 `PreviewProvider` 添加预览内容，便于调试与演示

```swift
#Preview {
    ContentView()
}
```

通过掌握这些基础结构，你可以更轻松地搭建、阅读和扩展一个 SwiftUI 应用。建议在项目初期就建立清晰的文件夹结构和代码规范，让开发事半功倍！
